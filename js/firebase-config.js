// Cấu hình Firebase Authentication (Google Login) và Cloud Firestore
// Tự động nhận biến cấu hình được inject từ GitHub Actions Secrets khi deploy lên GitHub Pages
// Hoàn toàn không lưu cấu hình hoặc dữ liệu vào LocalStorage.

export const FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

let authInstance = null;
let dbInstance = null;
let googleProviderInstance = null;
let isFirebaseLive = false;

export async function initFirebase() {
  const config = FIREBASE_CONFIG;

  if (!config.apiKey || config.apiKey === "YOUR_API_KEY") {
    console.warn("⚠️ Firebase chưa được cấu hình. Vui lòng thêm biến Secret trên GitHub Repository (FIREBASE_CONFIG hoặc FIREBASE_API_KEY...) để kích hoạt Cloud Firestore & Google Login.");
    return { isLive: false, auth: null, db: null };
  }

  try {
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js");
    const { getAuth, GoogleAuthProvider } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js");
    const { getFirestore } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");

    const app = initializeApp(config);
    authInstance = getAuth(app);
    dbInstance = getFirestore(app);
    googleProviderInstance = new GoogleAuthProvider();
    isFirebaseLive = true;

    console.log("✅ Kết nối Cloud Firestore & Google Auth thành công!");
    return { isLive: true, auth: authInstance, db: dbInstance, provider: googleProviderInstance };
  } catch (error) {
    console.error("❌ Lỗi khi khởi tạo Firebase:", error);
    isFirebaseLive = false;
    return { isLive: false, auth: null, db: null };
  }
}

export { authInstance, dbInstance, googleProviderInstance, isFirebaseLive };
