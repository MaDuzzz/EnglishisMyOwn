/**
 * Firestore Vocabulary Synchronizer
 * 
 * Tự động đồng bộ các nhóm từ vựng từ data/vocab/ lên Cloud Firestore
 * Chạy tự động trong GitHub Actions mỗi khi có commit mới.
 * 
 * Hỗ trợ các phương thức xác thực:
 * 1. FIREBASE_SERVICE_ACCOUNT (Khuyến nghị cao nhất - Bỏ qua mọi Firestore Rules)
 * 2. FIREBASE_ADMIN_EMAIL & FIREBASE_ADMIN_PASSWORD (Đăng nhập Admin Firebase Auth)
 * 3. FIREBASE_CONFIG / FIREBASE_API_KEY (REST API)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { buildVocabulary } from './build-vocab.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Trợ giúp parse JSON an toàn
function safeParseJson(str) {
  if (!str) return null;
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}

// Chuyển đổi dữ liệu JS thuần sang Firestore REST format
function toFirestoreValue(val) {
  if (val === null || val === undefined) return { nullValue: null };
  if (typeof val === 'boolean') return { booleanValue: val };
  if (typeof val === 'number') {
    return Number.isInteger(val) ? { integerValue: val.toString() } : { doubleValue: val };
  }
  if (typeof val === 'string') return { stringValue: val };
  if (Array.isArray(val)) {
    return {
      arrayValue: {
        values: val.map(toFirestoreValue)
      }
    };
  }
  if (typeof val === 'object') {
    const fields = {};
    for (const [k, v] of Object.entries(val)) {
      fields[k] = toFirestoreValue(v);
    }
    return { mapValue: { fields } };
  }
  return { stringValue: String(val) };
}

// Tạo Google OAuth2 JWT từ Service Account mà không cần cài thư viện ngoài (Zero Dependency)
async function getAccessTokenFromServiceAccount(sa) {
  const crypto = await import('crypto');

  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const claimSet = {
    iss: sa.client_email,
    scope: 'https://www.googleapis.com/auth/datastore https://www.googleapis.com/auth/cloud-platform',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  };

  const b64 = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url');
  const unsignedToken = `${b64(header)}.${b64(claimSet)}`;

  const sign = crypto.createSign('RSA-SHA256');
  sign.update(unsignedToken);
  sign.end();
  const signature = sign.sign(sa.private_key, 'base64url');
  const jwt = `${unsignedToken}.${signature}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    })
  });

  const data = await res.json();
  if (!res.ok || !data.access_token) {
    throw new Error(`Lỗi cấp Access Token từ Service Account: ${data.error_description || JSON.stringify(data)}`);
  }
  return data.access_token;
}

// Lấy ID token thông qua email & password admin
async function getIdTokenFromEmailPassword(apiKey, email, password) {
  const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true
    })
  });
  const data = await res.json();
  if (!res.ok || !data.idToken) {
    throw new Error(`Đăng nhập Admin thất bại: ${data.error?.message || JSON.stringify(data)}`);
  }
  return data.idToken;
}

export async function syncToFirestore() {
  console.log("🚀 Bắt đầu quy trình đồng bộ từ vựng lên Cloud Firestore...");

  // 1. Biên dịch dữ liệu từ vựng mới nhất từ data/vocab/
  const groups = await buildVocabulary();
  const totalWords = groups.reduce((acc, g) => acc + (g.words?.length || 0), 0);

  // 2. Xác định cấu hình Firebase từ biến môi trường
  const rawSA = process.env.FIREBASE_SERVICE_ACCOUNT || process.env.FIREBASE_ADMIN_CREDENTIALS || process.env.GCP_SA_KEY;
  const rawCfg = process.env.FIREBASE_CONFIG || process.env.firebaseConfig;
  const cfg = safeParseJson(rawCfg) || {};
  const projectId = process.env.FIREBASE_PROJECT_ID || cfg.projectId || (rawSA ? safeParseJson(rawSA)?.project_id : null) || 'englishismyown';
  const apiKey = process.env.FIREBASE_API_KEY || cfg.apiKey;
  const adminEmail = process.env.FIREBASE_ADMIN_EMAIL;
  const adminPassword = process.env.FIREBASE_ADMIN_PASSWORD;

  let authToken = null;
  let authType = null;

  // 3. Xác thực
  if (rawSA) {
    try {
      const sa = safeParseJson(rawSA);
      if (sa && sa.private_key && sa.client_email) {
        console.log("🔑 Đang xác thực quyền Admin với Service Account:", sa.client_email);
        authToken = await getAccessTokenFromServiceAccount(sa);
        authType = "service_account";
        console.log("✅ Đã cấp quyền Service Account Admin thành công.");
      }
    } catch (e) {
      console.warn("⚠️ Không thể cấp token từ Service Account:", e.message);
    }
  }

  if (!authToken && apiKey && adminEmail && adminPassword) {
    try {
      console.log(`🔑 Đang đăng nhập tài khoản Admin (${adminEmail})...`);
      authToken = await getIdTokenFromEmailPassword(apiKey, adminEmail, adminPassword);
      authType = "admin_user";
      console.log("✅ Đã đăng nhập Admin thành công.");
    } catch (e) {
      console.warn("⚠️ Đăng nhập admin không thành công:", e.message);
    }
  }

  // 4. Đồng bộ dữ liệu từng nhóm lên Firestore REST API
  if (authToken) {
    console.log(`\n☁️ Đang đồng bộ ${groups.length} nhóm chủ đề vào Firestore Database (project: ${projectId})...`);
    let successCount = 0;
    let failCount = 0;

    for (const group of groups) {
      const docPayload = {
        fields: {
          groupId: toFirestoreValue(group.groupId),
          name: toFirestoreValue(group.name),
          icon: toFirestoreValue(group.icon || "📚"),
          category: toFirestoreValue(group.category || "daily"),
          level: toFirestoreValue(group.level || "B1"),
          description: toFirestoreValue(group.description || ""),
          wordCount: toFirestoreValue((group.words || []).length),
          words: toFirestoreValue(group.words || []),
          updatedAt: toFirestoreValue(new Date().toISOString())
        }
      };

      const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/vocab_groups/${encodeURIComponent(group.groupId)}`;
      
      try {
        const res = await fetch(url, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
          },
          body: JSON.stringify(docPayload)
        });

        if (res.ok) {
          successCount++;
          process.stdout.write(`  [${successCount}/${groups.length}] ✓ ${group.groupId} (${group.words.length} từ)\n`);
        } else {
          failCount++;
          const errData = await res.json();
          console.error(`  ✕ Lỗi nhóm ${group.groupId}:`, errData.error?.message || errData);
        }
      } catch (err) {
        failCount++;
        console.error(`  ✕ Ngoại lệ khi đẩy nhóm ${group.groupId}:`, err.message);
      }
    }

    if (failCount === 0) {
      console.log(`\n🎉 ::notice::✅ Đã đồng bộ toàn bộ ${successCount} nhóm (${totalWords} từ vựng) lên Cloud Firestore thành công!`);
    } else {
      console.warn(`\n⚠️ Hoàn thành với ${successCount} thành công, ${failCount} thất bại.`);
    }
  } else {
    console.log("\n::notice::ℹ️ Dữ liệu từ vựng đã được biên dịch sẵn vào PWA Offline Bundle.");
    console.log("👉 Để tự động đẩy lên Cloud Firestore trong GitHub Actions:");
    console.log("   Vào GitHub Repo -> Settings -> Secrets and variables -> Actions -> Thêm Secret:");
    console.log("   • Name: FIREBASE_SERVICE_ACCOUNT");
    console.log("   • Value: Nội dung file JSON Service Account lấy từ Firebase Console -> Project Settings -> Service accounts -> Generate new private key.");
    console.log("   Khi có secret này, mỗi lần push code có file từ mới, GitHub Actions sẽ tự động nạp thẳng lên Cloud Firestore!");
  }
}

// Chạy trực tiếp nếu file được gọi bằng node
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  syncToFirestore().catch(err => {
    console.error("Lỗi đồng bộ Firestore:", err);
    process.exit(0); // Không làm fail build nếu chỉ là lỗi kết nối Firestore
  });
}
