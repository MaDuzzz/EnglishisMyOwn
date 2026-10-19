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
let signInWithPopup = null;
let signInWithRedirect = null;
let getRedirectResult = null;
let onAuthStateChanged = null;

export async function initFirebase() {
  const config = FIREBASE_CONFIG;

  if (!config.apiKey || config.apiKey === "YOUR_API_KEY") {
    console.warn("⚠️ Firebase chưa được cấu hình. Vui lòng thêm biến Secret trên GitHub Repository (FIREBASE_CONFIG hoặc FIREBASE_API_KEY...) để kích hoạt Cloud Firestore & Google Login.");
    return { isLive: false, auth: null, db: null };
  }

  try {
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js");
    const fbAuth = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js");
    const { getFirestore } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");

    const app = initializeApp(config);
    authInstance = fbAuth.getAuth(app);
    try {
      if (fbAuth.setPersistence && fbAuth.browserLocalPersistence) {
        await fbAuth.setPersistence(authInstance, fbAuth.browserLocalPersistence);
      }
    } catch (e) {
      console.warn("Lưu ý persistence:", e);
    }

    dbInstance = getFirestore(app);
    googleProviderInstance = new fbAuth.GoogleAuthProvider();
    googleProviderInstance.setCustomParameters({ prompt: 'select_account' });

    signInWithPopup = fbAuth.signInWithPopup;
    signInWithRedirect = fbAuth.signInWithRedirect;
    getRedirectResult = fbAuth.getRedirectResult;
    onAuthStateChanged = fbAuth.onAuthStateChanged;

    isFirebaseLive = true;

    console.log("✅ Kết nối Cloud Firestore & Google Auth thành công!");
    return {
      isLive: true,
      auth: authInstance,
      db: dbInstance,
      provider: googleProviderInstance,
      signInWithPopup,
      signInWithRedirect,
      getRedirectResult,
      onAuthStateChanged
    };
  } catch (error) {
    console.error("❌ Lỗi khi khởi tạo Firebase:", error);
    isFirebaseLive = false;
    return { isLive: false, auth: null, db: null };
  }
}

export {
  authInstance,
  dbInstance,
  googleProviderInstance,
  isFirebaseLive,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged
};
