// Cấu hình Firebase Authentication (Google Login) và Cloud Firestore
// Hỗ trợ tự động chuyển sang chế độ LocalStorage an toàn nếu chưa cấu hình API key

// Bạn có thể dán thông tin Firebase Web App của bạn vào đây:
export const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

let authInstance = null;
let dbInstance = null;
let googleProviderInstance = null;
let isFirebaseLive = false;

export async function initFirebase() {
  // Kiểm tra cấu hình lưu trong localStorage hoặc mặc định
  const savedConfig = localStorage.getItem("APP_FIREBASE_CONFIG");
  const config = savedConfig ? JSON.parse(savedConfig) : DEFAULT_FIREBASE_CONFIG;

  if (!config.apiKey || config.apiKey === "YOUR_API_KEY") {
    console.log("ℹ️ Đang chạy ở chế độ Local Mode (dữ liệu lưu trên LocalStorage). Để bật Firebase Google Auth, hãy nhập thông tin cấu hình vào phần Cài đặt.");
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

    console.log("✅ Firebase đã được kết nối thành công!");
    return { isLive: true, auth: authInstance, db: dbInstance, provider: googleProviderInstance };
  } catch (error) {
    console.warn("⚠️ Không thể kết nối Firebase, chuyển về chế độ Local:", error);
    isFirebaseLive = false;
    return { isLive: false, auth: null, db: null };
  }
}

export { authInstance, dbInstance, googleProviderInstance, isFirebaseLive };
