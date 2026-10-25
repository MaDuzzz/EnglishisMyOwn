// Trình điều phối chính ứng dụng (App Main Coordinator)
import { appState } from './state.js';
import {
  initFirebase,
  authInstance,
  googleProviderInstance,
  isFirebaseLive,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged
} from './firebase-config.js';
import { PlacementTestEngine } from './placement-test.js';
import { VocabPracticeEngine } from './vocab-engine.js';
import { VocabAbsorbEngine } from './vocab-absorb-engine.js';
import { CoursesEngine } from './courses-engine.js';
import { VOCAB_BANK, VOCAB_GROUPS } from './data/vocab-bank.js';
import { speechService } from './speech.js';
const ICON_FALLBACK_MAP = {
  'bi-bug-fill': '🧪',
  'bi-cloud-check-fill': '☁️',
  'bi-diagram-3-fill': '🗄️',
  'bi-shield-lock-fill': '🛡️',
  'bi-graph-up-arrow': '🚀',
  'bi-megaphone-fill': '📢',
  'bi-pie-chart-fill': '📊',
  'bi-award-fill': '⭐'
};

function getGroupIcon(icon) {
  if (!icon) return '📚';
  if (ICON_FALLBACK_MAP[icon]) return ICON_FALLBACK_MAP[icon];
  if (typeof icon === 'string' && icon.startsWith('bi-')) return '📚';
  return icon;
}

class App {
  constructor() {
    this.currentTab = null; // null để switchTab("vocab") lần đầu luôn thực thi render ngay lập tức
    this.vocabEngine = null;
    this.coursesEngine = null;
    this.placementEngine = null;
    this.selectedHeatmapYear = new Date().getFullYear();
    this.selectedHeatmapMonth = new Date().getMonth();
    this.analyticsViewMode = "month"; // "month" | "12months"
    this.analyticsLineRangeMode = "week"; // "week" (cả tuần này) | "month" (từ đầu tháng tới giờ)
    this.isUserMenuOpen = false;
    this.dictionaryFilterState = { 
      level: "all", 
      category: "all", 
      groupId: null, 
      page: 1, 
      pageSize: 12, 
      viewMode: (typeof window !== 'undefined' && localStorage.getItem('dict_view_mode')) || 'compact' 
    };
    this.groupViewMode = typeof window !== 'undefined' && window.innerWidth < 640 ? "slide" : "grid";
    this.groupCurrentPage = 1;
    this.groupActiveCat = "all";
  }

  async init() {
    // Khởi tạo Theme
    this.initTheme();

    // Lắng nghe thay đổi trạng thái
    appState.subscribe(() => {
      if (appState.state.theme) {
        this.applyTheme(appState.state.theme);
      }
      this.updateHeaderUI();
      if (this.currentTab === "vocab") {
        this.renderVocabDashboard();
      } else if (this.currentTab === "analytics") {
        const mainContainer = document.getElementById('main-content-area');
        if (mainContainer) this.renderAnalyticsPage(mainContainer);
      }
    });

    // Render ngay giao diện lần đầu tiên (tận dụng cache 0ms hoặc hiện màn hình loading nếu đang check auth)
    this.bindGlobalEvents();
    this.updateHeaderUI();
    this.switchTab("vocab");

    // Khởi tạo Firebase / Local Fallback trong background
    await initFirebase();
    if (!isFirebaseLive) {
      appState.isAuthResolving = false;
      this.updateHeaderUI();
      this.updateNavigationVisibility();
      this.switchTab(this.currentTab || "vocab");
    } else {
      // ĐỒNG BỘ NỀN TỨC THÌ: Nếu đã có user cached trong máy, chủ động kéo Firestore ngay
      if (appState.state.user && appState.state.user.uid) {
        appState.loadUserFromFirestore(appState.state.user.uid).then((success) => {
          if (success) {
            console.log("✅ Đã đồng bộ tức thì dữ liệu Firestore khi khởi động app.");
            this.updateHeaderUI();
            this.updateNavigationVisibility();
            if (this.currentTab === "analytics") {
              const mainContainer = document.getElementById('main-content-area');
              if (mainContainer) this.renderAnalyticsPage(mainContainer);
            } else if (this.currentTab === "vocab") {
              this.renderVocabDashboard();
            }
          }
        }).catch(err => {
          console.warn("⚠️ Đồng bộ Firestore khởi động nền:", err);
        });
      }
      this.setupAuthListener();
    }

    // Safety timeout: Sau tối đa 3.5 giây nếu auth vẫn đang resolving thì tự động giải phóng
    setTimeout(() => {
      if (appState.isAuthResolving) {
        console.warn("Auth resolution timeout -> fallback");
        appState.isAuthResolving = false;
        this.updateHeaderUI();
        this.updateNavigationVisibility();
        this.switchTab(this.currentTab || "vocab");
      }
    }, 3500);
  }

  initTheme() {
    const savedTheme = appState.state.theme || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    this.applyTheme(savedTheme);
  }

  applyTheme(theme) {
    appState.state.theme = theme;
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  toggleTheme() {
    const currentTheme = appState.state.theme === 'light' ? 'light' : 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(nextTheme);
    appState.setTheme(nextTheme);
    this.updateHeaderUI();
  }

  setupAuthListener() {
    if (isFirebaseLive && authInstance && onAuthStateChanged) {
      // Xử lý kết quả trả về nếu người dùng dùng signInWithRedirect (đặc biệt trên mobile Safari / PWA)
      if (typeof getRedirectResult === 'function') {
        getRedirectResult(authInstance).then((result) => {
          if (result && result.user) {
            console.log("Redirect login successful:", result.user.email);
            appState.setUser({
              uid: result.user.uid,
              displayName: result.user.displayName || result.user.email.split('@')[0],
              email: result.user.email,
              photoURL: result.user.photoURL
            }).then(() => {
              if (appState.state.theme) this.applyTheme(appState.state.theme);
              this.updateHeaderUI();
              this.updateNavigationVisibility();
              this.switchTab(this.currentTab || "vocab");
            });
          }
        }).catch(err => {
          console.warn("getRedirectResult info/error:", err);
        });
      }

      onAuthStateChanged(authInstance, (user) => {
        appState.isAuthResolving = false;
        if (user) {
          appState.setUser({
            uid: user.uid,
            displayName: user.displayName || user.email.split('@')[0],
            email: user.email,
            photoURL: user.photoURL
          }).then(() => {
            if (appState.state.theme) {
              this.applyTheme(appState.state.theme);
            }
            this.updateHeaderUI();
            this.updateNavigationVisibility();
            this.switchTab(this.currentTab || "vocab");
            appState.loadVocabGroupsFromFirestore();
          });
        } else {
          // BẢO VỆ PHIÊN ĐĂNG NHẬP:
          // Nếu appState đã có cached user từ localStorage, KHÔNG xóa phiên của người dùng!
          // Chỉ xóa khi người dùng chủ động bấm Đăng Xuất (handleLogout).
          if (!appState.state.user) {
            appState.clearUser();
            this.updateHeaderUI();
            this.updateNavigationVisibility();
            this.switchTab("vocab");
          } else {
            console.log("ℹ️ Phiên đăng nhập người dùng được bảo toàn từ LocalStorage Cache.");
            // Chủ động kéo dữ liệu mới nhất từ Firestore bằng UID đã cache:
            if (appState.state.user.uid) {
              appState.loadUserFromFirestore(appState.state.user.uid).then((success) => {
                if (success) {
                  this.updateHeaderUI();
                  this.updateNavigationVisibility();
                  if (this.currentTab === "analytics") {
                    const mainContainer = document.getElementById('main-content-area');
                    if (mainContainer) this.renderAnalyticsPage(mainContainer);
                  }
                }
              }).catch(err => {
                console.warn("Lỗi sync cached session Firestore:", err);
              });
            }
          }
        }
      });
    }
  }

  bindGlobalEvents() {
    // Logo Click -> Tải lại trang (Reload Page)
    const logoBtn = document.getElementById('btn-header-logo') || document.querySelector('.logo-brand-container');
    if (logoBtn) {
      const handleLogoReload = () => {
        if (window.navigator?.vibrate) window.navigator.vibrate(10);
        window.location.reload();
      };
      logoBtn.addEventListener('click', handleLogoReload);
      logoBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleLogoReload();
        }
      });
    }

    // Chuyển Tab (cả Header và iOS Bottom Tab Bar) - Chặn truy cập nếu chưa đăng nhập
    document.querySelectorAll('.nav-tab-btn, .ios-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        if (window.navigator?.vibrate) window.navigator.vibrate(10);
        if (!appState.state.user) {
          this.showToast("🔒 Vui lòng đăng nhập Google để mở khóa toàn bộ tính năng!");
          this.switchTab("vocab");
          return;
        }
        this.switchTab(tab);
      });
    });

    // Nút Rank / Progress Bar trên header -> Mở Màn hình Thống Kê & Kỷ Luật
    document.getElementById('btn-retake-placement-header')?.addEventListener('click', () => {
      if (!appState.state.user) return;
      if (!appState.state.cefrLevel) {
        this.switchTab("vocab");
        this.startPlacementTest();
      } else {
        this.switchTab("analytics");
      }
    });

    // Sự kiện Click toàn cục cho Header, Dropdown & Auth
    document.addEventListener('click', (e) => {
      // Toggle User Menu Dropdown
      const userMenuBtn = e.target.closest('#btn-user-menu');
      if (userMenuBtn) {
        this.isUserMenuOpen = !this.isUserMenuOpen;
        this.updateHeaderUI();
        return;
      }

      // Toggle Theme trong Dropdown
      const dropdownThemeBtn = e.target.closest('#btn-toggle-theme');
      if (dropdownThemeBtn) {
        this.toggleTheme();
        return;
      }

      // Theme toggle cho khách (khi chưa login)
      const headerThemeBtn = e.target.closest('#btn-header-theme');
      if (headerThemeBtn) {
        this.toggleTheme();
        return;
      }

      // Đăng xuất từ dropdown
      const dropdownLogoutBtn = e.target.closest('#btn-dropdown-logout');
      if (dropdownLogoutBtn) {
        this.isUserMenuOpen = false;
        this.handleLogout();
        return;
      }

      // Thử âm thanh từ dropdown
      const dropdownTestAudioBtn = e.target.closest('#btn-dropdown-test-audio');
      if (dropdownTestAudioBtn) {
        if (window.navigator?.vibrate) window.navigator.vibrate(10);
        this.isUserMenuOpen = false;
        this.updateHeaderUI();
        speechService.testAudio();
        this.showToast("🔊 Đang phát chuông & giọng đọc mẫu! Hãy kiểm tra âm lượng tai nghe trong Control Center hoặc gạt nút rung.");
        return;
      }

      // Đồng bộ dữ liệu Cloud thủ công
      const syncBtn = e.target.closest('#btn-dropdown-sync-cloud');
      if (syncBtn) {
        if (window.navigator?.vibrate) window.navigator.vibrate(10);
        this.isUserMenuOpen = false;
        this.updateHeaderUI();
        this.handleManualSync();
        return;
      }

      // Đăng nhập Google trực tiếp từ Banner thông báo trên điện thoại
      const loginSyncBtn = e.target.closest('#btn-analytics-login-sync');
      if (loginSyncBtn) {
        if (window.navigator?.vibrate) window.navigator.vibrate(10);
        this.handleAuthClick();
        return;
      }

      // Đăng nhập Google (Header hoặc Call-to-action trên Guest Portal)
      const loginBtn = e.target.closest('#btn-auth-action, #btn-portal-login-cta');
      if (loginBtn) {
        if (window.navigator?.vibrate) window.navigator.vibrate(10);
        this.handleAuthClick();
        return;
      }

      // Click ra ngoài dropdown -> tự động đóng
      if (this.isUserMenuOpen && !e.target.closest('#auth-container')) {
        this.isUserMenuOpen = false;
        this.updateHeaderUI();
      }
    });

    // Bấm phím ESC để đóng dropdown
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isUserMenuOpen) {
        this.isUserMenuOpen = false;
        this.updateHeaderUI();
      }
    });
  }

  async handleAuthClick() {
    if (!isFirebaseLive || !authInstance || !googleProviderInstance) {
      console.log("Firebase chưa sẵn sàng, đang nạp...");
      await initFirebase();
    }

    if (isFirebaseLive && authInstance && googleProviderInstance && signInWithPopup) {
      try {
        let res = null;
        try {
          // GỌI TRỰC TIẾP ĐỒNG BỘ: Giữ nguyên user activation token của trình duyệt
          res = await signInWithPopup(authInstance, googleProviderInstance);
        } catch (popupErr) {
          // Khi popup bị chặn trên mobile (iOS Safari / standalone PWA / Chrome popup blocker)
          if (popupErr.code === 'auth/popup-blocked' || popupErr.code === 'auth/cancelled-popup-request') {
            console.warn("Popup bị chặn, chuyển sang đăng nhập chuyển hướng (redirect):", popupErr);
            if (signInWithRedirect) {
              await signInWithRedirect(authInstance, googleProviderInstance);
              return;
            }
          }
          throw popupErr;
        }

        if (res && res.user) {
          await appState.setUser({
            uid: res.user.uid,
            displayName: res.user.displayName || res.user.email.split('@')[0],
            email: res.user.email,
            photoURL: res.user.photoURL
          });
          if (appState.state.theme) {
            this.applyTheme(appState.state.theme);
          }
          this.updateHeaderUI();
          this.updateNavigationVisibility();
          this.switchTab("vocab");
          appState.loadVocabGroupsFromFirestore();
        }
      } catch (e) {
        console.error("Lỗi Google Sign-in:", e);
        if (e.code === 'auth/operation-not-allowed') {
          alert("⚠️ Bạn chưa Bật (Enable) đăng nhập Google trên Firebase Console!\n\nCách xử lý (Chỉ 30 giây):\n1. Vào Firebase Console -> Project 'englishismyown'\n2. Vào Authentication -> Tab 'Sign-in method'\n3. Chọn 'Google' -> Gạt sang 'Enable' (Bật) -> Chọn email hỗ trợ -> Bấm Lưu (Save).");
        } else if (e.code === 'auth/unauthorized-domain') {
          alert("⚠️ Domain maduzzz.github.io chưa được thêm vào Authorized Domains!\n\nCách xử lý:\n1. Vào Firebase Console -> Authentication -> Settings -> Authorized domains\n2. Bấm 'Add domain' và nhập: maduzzz.github.io");
        } else if (e.code !== 'auth/popup-closed-by-user') {
          alert("Không thể đăng nhập Google: " + e.message);
        }
      }
    } else {
      alert("⚠️ Ứng dụng chưa được cấu hình Firebase Secret trên GitHub Repository!\n\nVui lòng vào GitHub: Settings -> Secrets and variables -> Actions và thêm biến bí mật FIREBASE_CONFIG (hoặc các biến FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN...) để tự động kết nối Cloud Firestore.");
    }
  }

  // ==================== QUẢN LÝ ĐỒNG BỘ CLOUD FIRESTORE ====================
  async handleManualSync() {
    if (!isFirebaseLive || !authInstance) {
      this.showToast("🔄 Đang kết nối Cloud Firestore...", 2000);
      await initFirebase();
    }

    // Nếu thiết bị này chưa có phiên đăng nhập Firebase Auth thực tế (chỉ có session cache)
    if (isFirebaseLive && authInstance && !authInstance.currentUser) {
      this.showToast("🔑 Đang mở đăng nhập Google để xác thực và tải 51 từ vựng Cloud...", 3000);
      await this.handleAuthClick();
      return;
    }

    const uid = authInstance?.currentUser?.uid || appState.state.user?.uid;
    if (!uid) {
      this.showToast("🔒 Vui lòng đăng nhập Google để đồng bộ dữ liệu!");
      return;
    }

    this.showToast("🔄 Đang đồng bộ dữ liệu từ Cloud Firestore...", 3000);
    const syncIcons = document.querySelectorAll('.sync-spin-target');
    syncIcons.forEach(el => el.classList.add('animate-spin'));

    try {
      const success = await appState.loadUserFromFirestore(uid);
      syncIcons.forEach(el => el.classList.remove('animate-spin'));

      if (success) {
        const count = (appState.state.learnedWords || []).length;
        this.showToast(`✅ Đã đồng bộ thành công! Hiện có ${count} từ vựng từ Cloud.`, 3500);
        this.updateHeaderUI();
        this.updateNavigationVisibility();
        if (this.currentTab === "analytics") {
          const mainContainer = document.getElementById('main-content-area');
          if (mainContainer) this.renderAnalyticsPage(mainContainer);
        } else if (this.currentTab === "vocab") {
          this.renderVocabDashboard();
        }
      } else {
        const err = appState.lastSyncError;
        if (err && err.code === 'permission-denied') {
          this.showToast("🔒 Cần xác thực tài khoản Google trên máy này. Đang mở đăng nhập...", 3500);
          await this.handleAuthClick();
        } else {
          this.showToast("⚠️ Chưa tải được dữ liệu: " + (err?.message || "Vui lòng thử lại sau"), 5000);
        }
      }
    } catch (e) {
      syncIcons.forEach(el => el.classList.remove('animate-spin'));
      console.error("Lỗi đồng bộ thủ công:", e);
      this.showToast("⚠️ Lỗi đồng bộ: " + (e.message || "Vui lòng thử lại sau"), 4000);
    }
  }

  async handleLogout() {
    this.isUserMenuOpen = false;
    if (isFirebaseLive && authInstance) {
      const { signOut } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js");
      await signOut(authInstance);
    }
    appState.clearUser();
    this.updateHeaderUI();
    this.updateNavigationVisibility();
    this.switchTab("vocab");
  }

  showToast(message, duration = 3500) {
    let toast = document.getElementById('app-floating-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'app-floating-toast';
      toast.className = 'fixed top-16 sm:top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-2xl bg-slate-900/95 dark:bg-white/95 text-white dark:text-slate-900 text-xs font-semibold shadow-xl backdrop-blur-md transition-all duration-300 pointer-events-none opacity-0 translate-y-[-10px] max-w-sm text-center leading-snug border border-white/10 dark:border-slate-800/10 select-none';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.opacity = '1';
    toast.style.transform = 'translate(-50%, 0)';

    clearTimeout(this._toastTimeout);
    this._toastTimeout = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translate(-50%, -10px)';
    }, duration);
  }

  updateHeaderUI() {
    const user = appState.state.user;
    const level = appState.state.cefrLevel;
    const streak = appState.state.streak;
    const isDark = (appState.state.theme || 'dark') === 'dark';

    // Streak with proper spacing
    const streakEl = document.getElementById('header-streak-badge');
    if (streakEl) {
      streakEl.innerHTML = `<span>🔥</span><span class="mx-0.5 font-bold">${streak}</span><span class="hidden sm:inline ml-1 font-semibold text-slate-500 dark:text-slate-400">ngày</span>`;
    }

    // Level Badge with Mini Progress Bar
    const levelBtn = document.getElementById('btn-retake-placement-header');
    if (levelBtn) {
      if (level) {
        const rankProg = appState.getRankProgress();
        levelBtn.className = "flex px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl text-xs font-bold bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-all items-center space-x-1 sm:space-x-2 shrink-0";
        levelBtn.innerHTML = `
          <span class="font-black text-indigo-600 dark:text-indigo-400">${rankProg.level}</span>
          <span class="hidden sm:inline text-slate-400 text-[10px]">➔</span>
          <span class="hidden sm:inline text-indigo-600 dark:text-indigo-400 font-bold">${rankProg.nextLevel}</span>
          <div class="hidden sm:block w-10 sm:w-12 bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
            <div class="bg-gradient-to-r from-blue-500 to-indigo-600 h-1.5 rounded-full transition-all duration-300" style="width: ${rankProg.percent}%"></div>
          </div>
          <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400">${rankProg.percent}%</span>
        `;
        levelBtn.title = `Tiến độ: ${rankProg.currentXP}/${rankProg.requiredXP} XP (${rankProg.percent}%). Bấm để xem Bảng Kỷ Luật & Heatmap Cả Năm.`;
      } else {
        levelBtn.className = "hidden sm:flex px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900 text-amber-700 dark:text-amber-300 hover:opacity-80 shrink-0";
        levelBtn.innerHTML = `<span>⚠️ Chưa xếp lớp</span>`;
        levelBtn.title = "Làm bài test 10 câu để xếp lớp";
      }
    }

    // Auth Container Rendering
    const authContainer = document.getElementById('auth-container');
    if (authContainer) {
      if (user) {
        authContainer.innerHTML = `
          <div class="relative">
            <button id="btn-user-menu" type="button" class="flex items-center space-x-1.5 sm:space-x-2 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700/80 border border-slate-200/90 dark:border-slate-700/80 shadow-sm transition-all focus:outline-none select-none active:scale-95" aria-expanded="${this.isUserMenuOpen}" title="Tài khoản & Cài đặt">
              ${user.photoURL 
                ? `<img src="${user.photoURL}" alt="" class="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover ring-1 ring-indigo-500/40">` 
                : `<span class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center font-black text-[11px] sm:text-xs">${(user.displayName || "U")[0].toUpperCase()}</span>`
              }
              <span class="text-xs font-bold text-slate-800 dark:text-slate-200 max-w-[80px] sm:max-w-[120px] truncate hidden sm:inline">${user.displayName || user.email.split('@')[0]}</span>
              <svg class="w-3.5 h-3.5 text-slate-400 dark:text-slate-400 transition-transform duration-200 ${this.isUserMenuOpen ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            ${this.isUserMenuOpen ? `
              <div id="user-dropdown-menu" class="absolute right-0 top-full mt-2 w-64 sm:w-72 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 shadow-2xl shadow-black/20 z-50 overflow-hidden animate-fade-in divide-y divide-slate-100 dark:divide-slate-800/80">
                <!-- User Info Header -->
                <div class="p-3.5 flex items-center space-x-3 bg-slate-50/50 dark:bg-slate-800/30">
                  ${user.photoURL 
                    ? `<img src="${user.photoURL}" alt="" class="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-500/40 shrink-0">` 
                    : `<span class="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-inner">${(user.displayName || "U")[0].toUpperCase()}</span>`
                  }
                  <div class="min-w-0 flex-1">
                    <p class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">${user.displayName || "Học viên"}</p>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate">${user.email || ""}</p>
                    <div class="flex items-center space-x-1.5 mt-1">
                      <span class="inline-block w-2 h-2 rounded-full ${authInstance?.currentUser ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}"></span>
                      <span class="text-[10px] font-semibold ${authInstance?.currentUser ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}">
                        ${authInstance?.currentUser ? `Cloud Firestore (${(appState.state.learnedWords || []).length} từ đã nạp)` : `Bộ nhớ máy (${(appState.state.learnedWords || []).length} từ) • Chưa kết nối Google`}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Dropdown Actions -->
                <div class="p-1.5 space-y-1">
                  <!-- Manual Cloud Sync Button -->
                  <button id="btn-dropdown-sync-cloud" type="button" class="w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-left transition-colors group">
                    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 shrink-0">
                      <svg class="w-4 h-4 sync-spin-target group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <div class="min-w-0 flex-1">
                      <p class="text-xs font-bold text-slate-800 dark:text-slate-200">${authInstance?.currentUser ? 'Đồng bộ Cloud' : 'Đăng nhập Google để đồng bộ'}</p>
                      <p class="text-[10px] text-slate-400">${authInstance?.currentUser ? 'Tải dữ liệu mới nhất từ laptop/máy khác' : 'Xác thực để tải 51 từ vựng Cloud'}</p>
                    </div>
                  </button>

                  <!-- Toggle Dark/Light Mode -->
                  <button id="btn-toggle-theme" type="button" class="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors text-left group">
                    <div class="flex items-center space-x-2.5">
                      <div class="w-7 h-7 rounded-lg flex items-center justify-center ${isDark ? 'bg-amber-500/15 text-amber-400' : 'bg-indigo-500/15 text-indigo-600'}">
                        ${isDark 
                          ? `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`
                          : `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`
                        }
                      </div>
                      <div>
                        <p class="text-xs font-semibold text-slate-800 dark:text-slate-200">Giao diện ${isDark ? 'Tối' : 'Sáng'}</p>
                        <p class="text-[10px] text-slate-400">${isDark ? 'Chạm để đổi sang Sáng' : 'Chạm để đổi sang Tối'}</p>
                      </div>
                    </div>
                    <!-- Switch Visual Indicator -->
                    <div class="w-9 h-5 rounded-full p-0.5 transition-colors ${isDark ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-700'}">
                      <div class="w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform ${isDark ? 'translate-x-4' : 'translate-x-0'}"></div>
                    </div>
                  </button>

                  <!-- Test Audio Option -->
                  <button id="btn-dropdown-test-audio" type="button" class="w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors text-left group">
                    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-indigo-500/15 text-indigo-600 dark:text-indigo-400">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
                      </svg>
                    </div>
                    <div>
                      <p class="text-xs font-semibold text-slate-800 dark:text-slate-200">Kiểm tra âm thanh</p>
                      <p class="text-[10px] text-slate-400">Thử chuông & giọng đọc</p>
                    </div>
                  </button>

                  <!-- Log Out Option -->
                  <button id="btn-dropdown-logout" type="button" class="w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-950/40 text-rose-600 dark:text-rose-400 transition-colors text-left group">
                    <div class="w-7 h-7 rounded-lg flex items-center justify-center bg-rose-500/15 text-rose-600 dark:text-rose-400">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-xs font-bold text-rose-600 dark:text-rose-400">Đăng xuất</p>
                      <p class="text-[10px] text-rose-400/80">Thoát phiên đăng nhập Google</p>
                    </div>
                  </button>
                </div>
              </div>
            ` : ''}
          </div>
        `;
      } else if (appState.isAuthResolving) {
        authContainer.innerHTML = `
          <div class="flex items-center space-x-1.5 sm:space-x-2">
            <button id="btn-header-theme" type="button" class="p-1.5 sm:p-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 transition-colors" title="Chuyển chế độ Sáng / Tối">
              ${isDark 
                ? `<svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`
                : `<svg class="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`
              }
            </button>
            <div class="h-8 w-20 sm:w-24 rounded-xl bg-slate-100 dark:bg-slate-800/80 animate-pulse border border-slate-200/60 dark:border-slate-700/60"></div>
          </div>
        `;
      } else {
        authContainer.innerHTML = `
          <div class="flex items-center space-x-1.5 sm:space-x-2">
            <button id="btn-header-theme" type="button" class="p-1.5 sm:p-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 transition-colors" title="Chuyển chế độ Sáng / Tối">
              ${isDark 
                ? `<svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`
                : `<svg class="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`
              }
            </button>
            <button id="btn-auth-action" type="button" class="cursor-pointer px-3 sm:px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-500/25 transition-all flex items-center space-x-1.5 active:scale-95 shrink-0" title="Đăng nhập Google để đồng bộ dữ liệu Cloud Firestore">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>Đăng nhập</span>
            </button>
          </div>
        `;
      }
    }
    this.updateNavigationVisibility();
  }

  updateNavigationVisibility() {
    const isLoggedIn = !!appState.state.user;
    const desktopNav = document.getElementById('desktop-nav-bar');
    const mobileBottomBar = document.getElementById('ios-bottom-bar');
    const mainEl = document.querySelector('main');
    const streakEl = document.getElementById('header-streak-badge');
    const levelBtn = document.getElementById('btn-retake-placement-header');

    if (isLoggedIn) {
      if (typeof document !== 'undefined') {
        document.documentElement.classList.add('user-authenticated');
      }
      // Đã đăng nhập: Hiện đầy đủ thanh điều hướng
      if (desktopNav) {
        desktopNav.style.display = '';
        desktopNav.classList.remove('hidden', 'flex');
        desktopNav.classList.add('hidden', 'md:flex');
      }
      if (mobileBottomBar) {
        mobileBottomBar.style.display = '';
        mobileBottomBar.classList.remove('hidden');
        mobileBottomBar.classList.add('md:hidden');
      }
      if (mainEl) {
        mainEl.classList.remove('pb-10');
        mainEl.classList.add('pb-28', 'md:pb-10');
      }
      if (streakEl) {
        streakEl.classList.remove('hidden');
        streakEl.classList.add('flex');
      }
      if (levelBtn && appState.state.cefrLevel) {
        levelBtn.classList.remove('flex');
        levelBtn.classList.add('hidden', 'sm:flex');
      }
    } else {
      if (typeof document !== 'undefined') {
        document.documentElement.classList.remove('user-authenticated');
      }
      // Chưa đăng nhập: Ẩn hoàn toàn bottom bar & nav bar, chỉ mở portal
      if (desktopNav) {
        desktopNav.style.display = 'none';
        desktopNav.classList.remove('md:flex', 'flex');
        desktopNav.classList.add('hidden');
      }
      if (mobileBottomBar) {
        mobileBottomBar.style.display = 'none';
        mobileBottomBar.classList.remove('md:hidden');
        mobileBottomBar.classList.add('hidden');
      }
      if (mainEl) {
        mainEl.classList.remove('pb-28', 'md:pb-10');
        mainEl.classList.add('pb-10');
      }
      if (streakEl) {
        streakEl.classList.remove('flex');
        streakEl.classList.add('hidden');
      }
      if (levelBtn) {
        levelBtn.classList.remove('sm:flex', 'flex');
        levelBtn.classList.add('hidden');
      }
    }
  }

  switchTab(tab, options = {}) {
    const mainContainer = document.getElementById('main-content-area');

    // 1. Nếu đang chờ xác thực phiên đăng nhập và chưa có user cache: Hiển thị màn hình loading
    if (appState.isAuthResolving && !appState.state.user) {
      this.currentTab = 'vocab';
      this.updateNavigationVisibility();
      if (mainContainer) this.renderAuthLoadingScreen(mainContainer);
      return;
    }

    // 2. Auth Guard: Nếu đã xác định chắc chắn chưa đăng nhập, chỉ cho phép ở lại portal page, chặn toàn bộ các tab khác
    if (!appState.state.user) {
      this.currentTab = 'vocab';
      this.updateNavigationVisibility();
      if (mainContainer) this.renderGuestPortal(mainContainer);
      return;
    }

    if (tab === "dictionary" && options && Object.keys(options).length > 0) {
      this.dictionaryFilterState = { ...this.dictionaryFilterState, ...options };
    }

    if (this.currentTab === tab) {
      // Nếu tab hiện tại là dictionary và có options mới truyền vào, render lại dictionary
      if (tab === "dictionary" && options && Object.keys(options).length > 0) {
        const mainContainer = document.getElementById('main-content-area');
        if (mainContainer) this.renderDictionary(mainContainer);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Micro-bounce on active icon when re-tapped
      const activeIcon = document.querySelector(`.ios-tab-btn[data-tab="${tab}"] .tab-icon-wrap`);
      if (activeIcon) {
        activeIcon.classList.remove('ios-icon-tap-bounce');
        void activeIcon.offsetWidth;
        activeIcon.classList.add('ios-icon-tap-bounce');
      }
      return;
    }
    this.currentTab = tab;

    // Highlight active desktop tab
    const activeNavClasses = ['bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'shadow-md', 'shadow-indigo-500/20'];
    const inactiveNavClasses = ['text-slate-600', 'dark:text-slate-400', 'hover:bg-slate-200/70', 'dark:hover:bg-slate-700/60', 'hover:text-slate-900', 'dark:hover:text-white', 'hover:bg-slate-200/50', 'dark:hover:bg-slate-700/50', 'hover:bg-slate-100', 'dark:hover:bg-slate-800'];

    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      const t = btn.getAttribute('data-tab');
      if (t === tab) {
        btn.classList.remove(...inactiveNavClasses);
        btn.classList.add(...activeNavClasses);
      } else {
        btn.classList.remove(...activeNavClasses);
        btn.classList.add('text-slate-600', 'dark:text-slate-400', 'hover:bg-slate-200/70', 'dark:hover:bg-slate-700/60', 'hover:text-slate-900', 'dark:hover:text-white');
      }
    });

    // Translate iOS GitHub Mobile Glider with authentic Spring Physics
    const tabIndices = { vocab: 0, analytics: 1, courses: 2, dictionary: 3 };
    const tabIndex = tabIndices[tab] ?? 0;
    const glider = document.getElementById('ios-bubble-glider');
    if (glider) {
      glider.style.transform = `translate3d(${tabIndex * 100}%, 0, 0)`;
    }

    // Micro-bounce on inner pill only
    const pill = document.getElementById('ios-bubble-glider-pill');
    if (pill) {
      pill.classList.remove('glider-tap-bounce');
      void pill.offsetWidth;
      pill.classList.add('glider-tap-bounce');
      setTimeout(() => {
        pill.classList.remove('glider-tap-bounce');
      }, 180);
    }

    // Highlight active iOS bottom tab bar icons & labels
    document.querySelectorAll('.ios-tab-btn').forEach(btn => {
      const t = btn.getAttribute('data-tab');
      const iconWrap = btn.querySelector('.tab-icon-wrap');
      const label = btn.querySelector('.tab-label');
      if (t === tab) {
        iconWrap?.classList.remove('text-slate-500', 'dark:text-[#8b949e]');
        iconWrap?.classList.add('text-indigo-600', 'dark:text-[#58a6ff]', 'scale-105', 'ios-icon-tap-bounce');
        label?.classList.remove('font-medium', 'text-slate-500', 'dark:text-[#8b949e]');
        label?.classList.add('font-bold', 'text-indigo-600', 'dark:text-[#58a6ff]');
      } else {
        iconWrap?.classList.remove('text-indigo-600', 'dark:text-[#58a6ff]', 'scale-105', 'ios-icon-tap-bounce');
        iconWrap?.classList.add('text-slate-500', 'dark:text-[#8b949e]');
        label?.classList.remove('font-bold', 'text-indigo-600', 'dark:text-[#58a6ff]');
        label?.classList.add('font-medium', 'text-slate-500', 'dark:text-[#8b949e]');
      }
    });

    if (!mainContainer) return;

    // Trigger Silky Smooth Screen Enter Transition
    mainContainer.classList.remove('animate-screen-enter');
    void mainContainer.offsetWidth; // Force reflow
    mainContainer.classList.add('animate-screen-enter');

    // Instant top scroll to avoid weird scroll offset when changing views
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (tab === "vocab") {
      this.renderVocabDashboard();
    } else if (tab === "analytics") {
      this.renderAnalyticsPage(mainContainer);
    } else if (tab === "courses") {
      this.coursesEngine = new CoursesEngine(mainContainer);
      this.coursesEngine.render();
    } else if (tab === "dictionary") {
      this.renderDictionary(mainContainer);
    }
  }

  // ==================== MÀN HÌNH NẠP KHI ĐANG XÁC THỰC PHIÊN ĐĂNG NHẬP ====================
  renderAuthLoadingScreen(mainContainer) {
    if (!mainContainer) return;
    mainContainer.innerHTML = `
      <div class="flex-1 flex flex-col items-center justify-center min-h-[380px] sm:min-h-[460px] text-center p-6 animate-fade-in select-none">
        <div class="relative w-16 h-16 sm:w-20 sm:h-20 mb-5 flex items-center justify-center">
          <div class="absolute inset-0 rounded-full border-4 border-indigo-100 dark:border-indigo-950/60"></div>
          <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-transparent border-t-indigo-600 dark:border-t-indigo-400 animate-spin"></div>
          <span class="text-2xl sm:text-3xl animate-bounce">⚡</span>
        </div>
        <h3 class="text-base sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
          Đang nạp không gian học tập...
        </h3>
        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5 max-w-xs sm:max-w-sm leading-relaxed">
          Đồng bộ phiên đăng nhập và dữ liệu cá nhân của bạn
        </p>
      </div>
    `;
  }

  // ==================== TRANG GIỚI THIỆU SẢN PHẨM & DEMO FLASHCARD (CHO KHÁCH CHƯA ĐĂNG NHẬP) ====================
  renderGuestPortal(mainContainer) {
    const DEMO_WORDS = [
      {
        word: "catch up",
        ipa: "/kætʃ ʌp/",
        groupIcon: "💬",
        groupName: "Giao Tiếp Thường Nhật",
        type: "phrasal verb",
        level: "A2",
        meaningVi: "hàn huyên, cập nhật tin tức",
        example: "Let's grab a coffee this Sunday and catch up!",
        exampleVi: "Chủ nhật này đi cà phê rồi hàn huyên tâm sự nhé!"
      },
      {
        word: "deliverable",
        ipa: "/dɪˈlɪv.ər.ə.bəl/",
        groupIcon: "💼",
        groupName: "Công Sở & Dự Án",
        type: "noun",
        level: "B1",
        meaningVi: "sản phẩm bàn giao, kết quả công việc",
        example: "The team delivered all sprint deliverables ahead of the Friday deadline.",
        exampleVi: "Nhóm đã bàn giao đầy đủ kết quả sprint trước hạn chót thứ Sáu."
      },
      {
        word: "touch base",
        ipa: "/tʌtʃ beɪs/",
        groupIcon: "💼",
        groupName: "Họp Hành & Trao Đổi",
        type: "idiom",
        level: "B2",
        meaningVi: "liên hệ ngắn, trao đổi nhanh tình hình",
        example: "Let's touch base tomorrow morning regarding the deployment plan.",
        exampleVi: "Sáng mai chúng ta trao đổi nhanh về kế hoạch triển khai nhé."
      }
    ];

    let demoIndex = 0;

    mainContainer.innerHTML = `
      <div class="space-y-6 sm:space-y-8 animate-fade-in max-w-4xl mx-auto w-full py-4 sm:py-6 px-2 sm:px-4">
        
        <!-- 1. HERO SHOWCASE INTRO -->
        <div class="text-center max-w-2xl mx-auto">
          <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-emerald-500/10 dark:from-indigo-950/60 dark:to-emerald-950/40 border border-indigo-200/80 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-black mb-3 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>✨ Phương Pháp Thẩm Thấu Từ Vựng Thế Hệ Mới</span>
          </div>

          <h1 class="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-2.5">
            Chinh Phục Tiếng Anh Thực Chiến <br class="hidden sm:inline">Bằng <span class="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 bg-clip-text text-transparent">Phản Xạ Kỷ Luật</span>
          </h1>

          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto">
            Học đúng 10 từ mới mỗi ngày, sàng lọc từ đã biết chỉ bằng một cái vuốt nhẹ và ghi nhớ vĩnh viễn nhờ chu kỳ lặp lại ngắt quãng (Spaced Repetition T+1).
          </p>
        </div>

        <!-- 2. INTERACTIVE LIVE DEMO FLASHCARD (HỌC THỬ NGAY) -->
        <div class="w-full max-w-sm sm:max-w-md mx-auto">
          <div class="flex items-center justify-between text-xs font-bold text-slate-400 dark:text-slate-500 mb-2 px-1">
            <span class="flex items-center space-x-1.5 text-indigo-600 dark:text-indigo-400">
              <span>🎮 Trải nghiệm vuốt thử Flashcard:</span>
            </span>
            <span id="portal-demo-counter" class="text-[11px] font-semibold">1 / 3</span>
          </div>

          <!-- Demo Card Container -->
          <div id="portal-demo-card-container" class="relative w-full min-h-[440px] flex items-center justify-center">
            <!-- Thẻ demo động -->
          </div>

          <div class="flex items-center justify-between text-[11px] font-bold text-slate-400 dark:text-slate-500 mt-2 px-2 select-none">
            <span class="text-emerald-600 dark:text-emerald-400">👈 Vuốt trái: Học từ này</span>
            <span class="text-rose-600 dark:text-rose-400">Vuốt phải: Đã biết 👉</span>
          </div>
        </div>

        <!-- 3. THREE CORE PILLARS (3 TRỤ CỘT ĐỘT PHÁ) -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 max-w-3xl mx-auto">
          <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
            <div class="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xl mb-3 shadow-inner">
              ⚡
            </div>
            <h4 class="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white mb-1">
              Thẩm Thấu 10 Từ / Ngày
            </h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Sàng lọc thông minh bằng cử chỉ vuốt trực quan. Chỉ học điều bạn chưa biết, bỏ qua từ đã thành thạo, tiết kiệm 80% thời gian.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
            <div class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl mb-3 shadow-inner">
              🗓️
            </div>
            <h4 class="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white mb-1">
              Kỷ Luật Ngắt Quãng T+1
            </h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Cả từ mới và từ đã biết đều được tự động xếp vào chu kỳ ôn tập ngày hôm sau, kích hoạt đường mòn thần kinh ghi nhớ vĩnh viễn.
            </p>
          </div>

          <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
            <div class="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xl mb-3 shadow-inner">
              🎯
            </div>
            <h4 class="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white mb-1">
              Chuẩn CEFR A1 - B2
            </h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Kho 1,450+ từ vựng & cụm từ collocations thực chiến bám sát môi trường công sở, CNTT, từ loại (N, V, Adj, Adv), marketing, TOEIC 750+ và giao tiếp chuẩn quốc tế.
            </p>
          </div>
        </div>

        <!-- 3.5 TRIẾT LÝ KỶ LUẬT (QUẢNG BÁ PHƯƠNG PHÁP HỌC) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-3xl mx-auto">
          <div class="p-4 rounded-2xl bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-500/25 text-emerald-950 dark:text-emerald-300 flex items-start space-x-3.5 shadow-sm">
            <span class="text-2xl shrink-0">🧱</span>
            <div class="text-xs">
              <strong class="font-black text-sm block mb-1 text-emerald-950 dark:text-emerald-200">Sức Mạnh Của 10 Từ / Ngày</strong>
              Chỉ 10 từ mỗi ngày: 1 tháng bạn tích luỹ 300 từ, 1 năm bạn làm chủ 3,600 từ vựng. Không cần học dồn, quan trọng nhất là sự đều đặn.
            </div>
          </div>
          <div class="p-4 rounded-2xl bg-amber-500/10 dark:bg-amber-950/40 border border-amber-500/25 text-amber-950 dark:text-amber-300 flex items-start space-x-3.5 shadow-sm">
            <span class="text-2xl shrink-0">🛡️</span>
            <div class="text-xs">
              <strong class="font-black text-sm block mb-1 text-amber-950 dark:text-amber-200">Quy Tắc Không Bỏ 2 Ngày</strong>
              Cuộc sống có những ngày bận rộn. Nhưng nguyên tắc vàng là không bao giờ để đứt chuỗi 2 ngày liên tiếp để bảo vệ đà tiến bộ.
            </div>
          </div>
        </div>

        <!-- 4. CALL TO ACTION TO LOGIN WITH GOOGLE -->
        <div class="mt-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-700 text-white text-center shadow-xl shadow-indigo-500/25 relative overflow-hidden">
          <div class="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-white/10 pointer-events-none blur-2xl"></div>
          <div class="relative z-10 max-w-lg mx-auto space-y-3">
            <span class="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-[11px] font-extrabold uppercase tracking-wider backdrop-blur-md">
              🚀 Bắt đầu học ngay
            </span>
            <h3 class="text-xl sm:text-2xl font-black tracking-tight">Đăng Nhập Để Mở Khóa Toàn Bộ Nội Dung</h3>
            <p class="text-xs sm:text-sm text-indigo-100 leading-relaxed">
              Làm bài Test xếp lớp CEFR chuẩn xác, mở khoá 1,450+ từ vựng, hệ thống lộ trình Spaced Repetition T+1 và biểu đồ kỷ luật Heatmap của riêng bạn.
            </p>
            <div class="pt-2">
              <button id="btn-portal-login-cta" type="button" class="cursor-pointer w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-white text-indigo-700 hover:bg-indigo-50 active:scale-95 font-black text-sm shadow-lg shadow-black/10 transition-all inline-flex items-center justify-center space-x-2.5">
                <svg class="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Đăng nhập với Google miễn phí</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Khởi tạo thẻ Flashcard Demo có thể vuốt thử
    const renderDemoCard = () => {
      const demoContainer = mainContainer.querySelector('#portal-demo-card-container');
      const counterEl = mainContainer.querySelector('#portal-demo-counter');
      if (!demoContainer) return;

      const word = DEMO_WORDS[demoIndex % DEMO_WORDS.length];
      if (counterEl) counterEl.textContent = `${(demoIndex % DEMO_WORDS.length) + 1} / ${DEMO_WORDS.length}`;

      // Nạp trước âm thanh cho demo card
      if (word && word.word) speechService.preloadWord(word.word);
      const nextDemo = DEMO_WORDS[(demoIndex + 1) % DEMO_WORDS.length];
      if (nextDemo && nextDemo.word) speechService.preloadWord(nextDemo.word);

      demoContainer.innerHTML = `
        <div id="portal-active-demo-card" class="flashcard-card animate-card-pop relative w-full rounded-[2rem] bg-white dark:bg-slate-900 border-2 border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl flex flex-col justify-between select-none overflow-hidden transition-[border-color,box-shadow]">
          <div class="edge-indicator-left absolute left-0 top-0 bottom-0 w-3 sm:w-3.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 opacity-0 pointer-events-none transition-opacity duration-75 shadow-[0_0_20px_rgba(16,185,129,0.9)]"></div>
          <div class="edge-indicator-right absolute right-0 top-0 bottom-0 w-3 sm:w-3.5 bg-gradient-to-l from-rose-600 via-rose-500 to-rose-400 opacity-0 pointer-events-none transition-opacity duration-75 shadow-[0_0_20px_rgba(244,63,94,0.9)]"></div>
          <div class="swipe-fade-overlay absolute inset-0 pointer-events-none opacity-0 transition-opacity"></div>

          <div class="relative z-10 flex items-center justify-between gap-2 mb-3">
            <span class="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-[11px] truncate max-w-[210px]">
              ${word.groupIcon} ${word.groupName}
            </span>
            <div class="flex items-center space-x-1.5 shrink-0">
              <span class="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-bold text-[10px] uppercase">${word.type}</span>
              <span class="px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 font-bold text-[10px]">${word.level}</span>
            </div>
          </div>

          <div class="relative z-10 text-center my-3">
            <div class="flex items-center justify-center space-x-2">
              <h2 class="text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">${word.word}</h2>
              <button class="btn-demo-audio p-2 rounded-full hover:bg-indigo-50 dark:hover:bg-slate-800 text-indigo-600 dark:text-indigo-400 transition-transform active:scale-90" title="Nghe phát âm">
                <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
              </button>
            </div>
            <p class="text-indigo-600 dark:text-indigo-400 font-mono text-sm font-semibold mt-1">${word.ipa}</p>
          </div>

          <div class="relative z-10 my-2.5 p-4 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-blue-50/70 dark:from-slate-800/90 dark:to-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 text-center">
            <span class="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">Nghĩa tiếng Việt</span>
            <p class="text-lg font-black text-indigo-950 dark:text-indigo-200">${word.meaningVi}</p>
          </div>

          <div class="relative z-10 my-2 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-left">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Ví dụ thực tế:</span>
            <p class="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 italic leading-relaxed">"${word.example}"</p>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1">${word.exampleVi}</p>
          </div>
        </div>
      `;

      const card = demoContainer.querySelector('#portal-active-demo-card');
      if (card) {
        card.addEventListener('animationend', () => card.classList.remove('animate-card-pop'), { once: true });
        setTimeout(() => card.classList.remove('animate-card-pop'), 300);

        const audioBtn = card.querySelector('.btn-demo-audio');
        if (audioBtn) {
          let lastPlay = 0;
          const playAction = (e) => {
            e.stopPropagation();
            const now = Date.now();
            if (now - lastPlay < 500) return;
            lastPlay = now;
            if (window.navigator?.vibrate) window.navigator.vibrate(10);
            audioBtn.classList.add('scale-125', 'text-indigo-500');
            setTimeout(() => audioBtn.classList.remove('scale-125', 'text-indigo-500'), 400);
            speechService.speak(word.word);
          };
          audioBtn.addEventListener('click', playAction);
          audioBtn.addEventListener('touchend', playAction);
        }

        // Gắn cử chỉ vuốt cho thẻ demo
        this.bindPortalDemoCard(card, () => {
          demoIndex++;
          renderDemoCard();
        });
      }
    };

    renderDemoCard();
  }

  // Cử chỉ vuốt cho thẻ Flashcard Demo ở trang Portal
  bindPortalDemoCard(cardElement, onNextCallback) {
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;
    let isDragging = false;
    let isAnimating = false;

    const edgeLeft = cardElement.querySelector('.edge-indicator-left');
    const edgeRight = cardElement.querySelector('.edge-indicator-right');
    const fadeOverlay = cardElement.querySelector('.swipe-fade-overlay');


    const onStart = (clientX, clientY) => {
      if (isAnimating) return;
      isDragging = true;
      startX = clientX;
      startY = clientY;
      currentX = clientX;
      currentY = clientY;
      cardElement.style.transition = 'none';
    };

    const onMove = (clientX, clientY, e) => {
      if (!isDragging || isAnimating) return;
      currentX = clientX;
      currentY = clientY;
      const dx = currentX - startX;
      const dy = currentY - startY;

      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 6) {
        if (e && e.cancelable) e.preventDefault();
      }

      const rot = (dx * 0.10).toFixed(2);
      cardElement.style.transform = `translate(${dx}px, ${dy * 0.2}px) rotate(${rot}deg)`;
      const ratio = Math.min(Math.abs(dx) / 80, 1);

      if (dx < 0) {
        // Vuốt trái: Xanh lá đậm rõ nét (Học từ này)
        if (edgeLeft) edgeLeft.style.opacity = String(ratio);
        if (edgeRight) edgeRight.style.opacity = '0';
        cardElement.style.borderLeftColor = `rgba(16, 185, 129, ${Math.min(1, ratio * 1.5)})`;
        cardElement.style.borderRightColor = '';
        cardElement.style.boxShadow = `-${Math.round(ratio * 22)}px 0 ${Math.round(ratio * 38)}px rgba(16, 185, 129, ${ratio * 0.75}), 0 10px 25px -5px rgba(0, 0, 0, 0.12)`;
        if (fadeOverlay) {
          fadeOverlay.style.background = `linear-gradient(to right, rgba(16, 185, 129, ${ratio * 0.55}) 0%, rgba(16, 185, 129, ${ratio * 0.28}) 35%, rgba(16, 185, 129, ${ratio * 0.10}) 65%, transparent 92%)`;
          fadeOverlay.style.opacity = '1';
        }
        cardElement.style.opacity = String(Math.max(0.35, 1 - (ratio * 0.5)));
      } else if (dx > 0) {
        // Vuốt phải: Đỏ đậm rõ nét (Đã biết)
        if (edgeRight) edgeRight.style.opacity = String(ratio);
        if (edgeLeft) edgeLeft.style.opacity = '0';
        cardElement.style.borderRightColor = `rgba(244, 63, 94, ${Math.min(1, ratio * 1.5)})`;
        cardElement.style.borderLeftColor = '';
        cardElement.style.boxShadow = `${Math.round(ratio * 22)}px 0 ${Math.round(ratio * 38)}px rgba(244, 63, 94, ${ratio * 0.75}), 0 10px 25px -5px rgba(0, 0, 0, 0.12)`;
        if (fadeOverlay) {
          fadeOverlay.style.background = `linear-gradient(to left, rgba(244, 63, 94, ${ratio * 0.55}) 0%, rgba(244, 63, 94, ${ratio * 0.28}) 35%, rgba(244, 63, 94, ${ratio * 0.10}) 65%, transparent 92%)`;
          fadeOverlay.style.opacity = '1';
        }
        cardElement.style.opacity = String(Math.max(0.35, 1 - (ratio * 0.5)));
      }
    };

    const onEnd = () => {
      if (!isDragging || isAnimating) return;
      isDragging = false;
      const dx = currentX - startX;

      if (dx < -65) {
        isAnimating = true;
        cardElement.style.transition = 'transform 0.28s ease-in, opacity 0.25s ease-in, box-shadow 0.25s ease-in';
        cardElement.style.transform = 'translate(-120vw, 20px) rotate(-22deg)';
        cardElement.style.opacity = '0';
        cardElement.style.boxShadow = '-30px 0 50px rgba(16, 185, 129, 0.75)';
        setTimeout(() => onNextCallback(), 260);
      } else if (dx > 65) {
        isAnimating = true;
        cardElement.style.transition = 'transform 0.28s ease-in, opacity 0.25s ease-in, box-shadow 0.25s ease-in';
        cardElement.style.transform = 'translate(120vw, 20px) rotate(22deg)';
        cardElement.style.opacity = '0';
        cardElement.style.boxShadow = '30px 0 50px rgba(244, 63, 94, 0.75)';
        setTimeout(() => onNextCallback(), 260);
      } else {
        cardElement.style.transition = 'transform 0.32s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease';
        cardElement.style.transform = 'translate(0px, 0px) rotate(0deg)';
        cardElement.style.opacity = '1';
        cardElement.style.boxShadow = '';
        cardElement.style.borderLeftColor = '';
        cardElement.style.borderRightColor = '';
        if (edgeLeft) edgeLeft.style.opacity = '0';
        if (edgeRight) edgeRight.style.opacity = '0';
        if (fadeOverlay) fadeOverlay.style.opacity = '0';
      }
    };

    cardElement.addEventListener('touchstart', (e) => {
      if (e.target.closest('button, .btn-demo-audio, a')) return;
      onStart(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    cardElement.addEventListener('touchmove', (e) => {
      if (e.target.closest('button, .btn-demo-audio, a')) return;
      onMove(e.touches[0].clientX, e.touches[0].clientY, e);
    }, { passive: false });
    cardElement.addEventListener('touchend', onEnd);
    cardElement.addEventListener('touchcancel', onEnd);

    cardElement.addEventListener('mousedown', (e) => {
      if (e.target.closest('button')) return;
      onStart(e.clientX, e.clientY);
      const onMouseMove = (ev) => onMove(ev.clientX, ev.clientY, ev);
      const onMouseUp = () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        onEnd();
      };
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    });
  }

  // ==================== VOCABULARY HUB ====================
  renderVocabDashboard() {
    const mainContainer = document.getElementById('main-content-area');
    if (!mainContainer) return;

    // Kiểm tra 0: Đang chờ xác thực phiên đăng nhập -> Hiển thị màn hình loading
    if (appState.isAuthResolving && !appState.state.user) {
      this.renderAuthLoadingScreen(mainContainer);
      return;
    }

    // Kiểm tra 1: Khách chưa đăng nhập -> Hiển thị trang giới thiệu sản phẩm (Product Showcase Portal) kèm Flashcard demo học thử
    if (!appState.state.user) {
      this.renderGuestPortal(mainContainer);
      return;
    }

    // Kiểm tra 2: nếu chưa làm Placement Test thì bắt buộc làm test
    if (!appState.state.cefrLevel) {
      this.startPlacementTest();
      return;
    }

    const discipline = appState.calculateDisciplineStatus();
    const learnedCount = appState.state.learnedWords.length;
    const level = appState.state.cefrLevel;
    const rankProg = appState.getRankProgress();

    const learnedWordIds = new Set(appState.state.learnedWords.map(w => w.wordId || w.id));
    const groups = appState.getVocabGroups();
    const countAll = groups.length;
    const countPos = groups.filter(g => g.category === 'pos').length;
    const countToeic = groups.filter(g => g.category === 'toeic').length;
    const countDaily = groups.filter(g => g.category === 'daily').length;
    const countMarketing = groups.filter(g => g.category === 'marketing').length;
    const countWork = groups.filter(g => g.category === 'work').length;
    const countTech = groups.filter(g => g.category === 'tech').length;

    mainContainer.innerHTML = `
      <div class="space-y-4 sm:space-y-6 animate-fade-in max-w-5xl mx-auto w-full overflow-x-hidden">
        <!-- 1. COMPACT MODERN HERO COCKPIT -->
        <div class="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-4 sm:p-6 text-white shadow-xl border border-indigo-500/20 w-full">
          <div class="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-indigo-500/15 blur-3xl pointer-events-none"></div>
          <div class="absolute -left-16 -bottom-16 w-56 h-56 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>

          <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="space-y-1">
              <div class="flex items-center space-x-2">
                <span class="px-2 py-0.5 rounded-lg text-[10px] sm:text-[11px] font-black uppercase tracking-wider bg-indigo-500/25 text-indigo-300 border border-indigo-400/30">
                  Level ${level}
                </span>
                <span class="text-xs text-slate-400 font-medium">• ${rankProg.currentLabel}</span>
              </div>
              <h1 class="text-lg sm:text-2xl md:text-3xl font-black tracking-tight text-white">
                Luyện Phản Xạ Từ Vựng
              </h1>
              <p class="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed line-clamp-2 sm:line-clamp-none">
                Phương pháp Lặp lại ngắt quãng (Spaced Repetition) củng cố trí nhớ dài hạn và rèn phản xạ tức thì.
              </p>
            </div>

            <!-- 3 Compact Metric Pills (100% fluid, no fixed min-w) -->
            <div class="grid grid-cols-3 gap-2 w-full md:w-auto md:min-w-[320px] mt-1 md:mt-0">
              <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-2 sm:p-3 text-center">
                <div class="text-[10px] sm:text-[11px] text-amber-300/90 font-medium">Chuỗi ngày</div>
                <div class="text-base sm:text-xl font-black text-amber-400 mt-0.5">🔥 ${appState.state.streak}</div>
              </div>

              <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-2 sm:p-3 text-center">
                <div class="text-[10px] sm:text-[11px] text-indigo-200/90 font-medium">Đã nạp</div>
                <div class="text-base sm:text-xl font-black text-white mt-0.5">${learnedCount} <span class="text-[10px] text-slate-400 font-normal">/ ${VOCAB_BANK.length}</span></div>
              </div>

              <button id="btn-view-analytics-dash" class="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-2 sm:p-3 text-center transition-all active:scale-95" title="Bấm để xem Bảng Kỷ Luật & Heatmap">
                <div class="text-[10px] sm:text-[11px] text-emerald-300/90 font-medium flex items-center justify-center space-x-0.5">
                  <span>Tiến độ</span>
                  <span class="text-[9px]">➔</span>
                </div>
                <div class="text-base sm:text-xl font-black text-emerald-400 mt-0.5">${rankProg.percent}%</div>
              </button>
            </div>
          </div>

          <!-- Mini Progress Bar on Bottom of Hero -->
          <div class="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
            <div class="flex items-center space-x-1.5 truncate pr-2">
              <span class="font-bold text-white text-[11px] sm:text-xs truncate">${rankProg.currentLabel}</span>
              <span class="text-slate-500 text-[10px]">➔</span>
              <span class="font-bold text-indigo-300 text-[11px] sm:text-xs truncate">${rankProg.nextLabel}</span>
            </div>
            <span class="text-[10px] sm:text-[11px] text-slate-400 font-medium shrink-0">${rankProg.completedDays}/${rankProg.minDays} ngày (${rankProg.currentXP}/${rankProg.requiredXP} XP)</span>
          </div>
          <div class="w-full bg-white/10 rounded-full h-1.5 mt-1.5 overflow-hidden">
            <div class="bg-gradient-to-r from-indigo-400 via-blue-400 to-emerald-400 h-full rounded-full transition-all duration-500" style="width: ${rankProg.percent}%"></div>
          </div>
        </div>

        <!-- 2. PENALTY STATUS (Chỉ hiện khi bị gián đoạn/phạt) -->
        ${discipline.isPenalized ? `
          <div class="p-3.5 sm:p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-rose-800 dark:text-rose-200 shadow-sm flex items-center space-x-3 animate-fade-in w-full">
            <span class="text-xl shrink-0">⚠️</span>
            <div class="min-w-0 flex-1">
              <h4 class="font-bold text-xs sm:text-sm">Áp dụng quy tắc kỷ luật vì bỏ lỡ ${discipline.missedDays} ngày</h4>
              <p class="text-[11px] sm:text-xs opacity-90 mt-0.5">${discipline.reason}</p>
              ${rankProg.penaltyNotice ? `<p class="text-[11px] font-bold text-rose-600 dark:text-rose-400 mt-0.5">${rankProg.penaltyNotice}</p>` : ''}
            </div>
          </div>
        ` : ''}

        <!-- STREAK DISCIPLINE STATUS BANNER -->
        ${appState.isTodayTaskComplete() ? `
          <div class="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 border border-emerald-500/30 text-emerald-900 dark:text-emerald-200 shadow-sm flex items-center justify-between gap-3 animate-fade-in w-full">
            <div class="flex items-center space-x-3 min-w-0">
              <span class="text-2xl shrink-0">🔥</span>
              <div class="min-w-0">
                <h4 class="font-extrabold text-xs sm:text-sm text-emerald-800 dark:text-emerald-300">Nhiệm vụ hôm nay đã hoàn tất 100%!</h4>
                <p class="text-[11px] sm:text-xs text-emerald-700/90 dark:text-emerald-300/90 mt-0.5 truncate sm:whitespace-normal">Bạn đã hoàn thành Ôn tập kỷ luật và Học từ mới. Chuỗi kiên trì <strong class="font-black text-amber-500">🔥 ${appState.state.streak} ngày</strong> được bảo toàn an toàn!</p>
              </div>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-600 text-white shrink-0 shadow-xs tracking-wider uppercase">ĐẠT CHUẨN</span>
          </div>
        ` : appState.state.streak > 0 ? `
          <div class="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 shadow-sm flex items-center justify-between gap-3 animate-fade-in w-full">
            <div class="flex items-center space-x-3 min-w-0">
              <span class="text-2xl shrink-0">⚡</span>
              <div class="min-w-0">
                <h4 class="font-extrabold text-xs sm:text-sm text-amber-800 dark:text-amber-300">Bảo toàn chuỗi 🔥 ${appState.state.streak} ngày trước 23:59</h4>
                <p class="text-[11px] sm:text-xs text-amber-700/90 dark:text-amber-300/90 mt-0.5 truncate sm:whitespace-normal">Quy tắc giữ chuỗi: Cần hoàn tất <strong class="underline">CẢ HAI</strong> nhiệm vụ (Ôn tập kỷ luật + Học ít nhất 10 từ mới) để không bị đứt chuỗi!</p>
              </div>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] font-black bg-amber-600 text-white shrink-0 shadow-xs tracking-wider uppercase">CẦN HỌC</span>
          </div>
        ` : `
          <div class="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-blue-500/10 to-indigo-500/10 border border-indigo-500/30 text-indigo-900 dark:text-indigo-200 shadow-sm flex items-center justify-between gap-3 animate-fade-in w-full">
            <div class="flex items-center space-x-3 min-w-0">
              <span class="text-2xl shrink-0">🎯</span>
              <div class="min-w-0">
                <h4 class="font-extrabold text-xs sm:text-sm text-indigo-800 dark:text-indigo-300">Bắt đầu thiết lập chuỗi ngày học mới hôm nay</h4>
                <p class="text-[11px] sm:text-xs text-indigo-700/90 dark:text-indigo-300/90 mt-0.5 truncate sm:whitespace-normal">Hoàn thành cả Ôn tập kỷ luật và Học 10 từ mới hôm nay để khởi động lại ngọn lửa chuỗi Streak 🔥!</p>
              </div>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] font-black bg-indigo-600 text-white shrink-0 shadow-xs tracking-wider uppercase">MỤC TIÊU</span>
          </div>
        `}

        <!-- 3. DAILY MISSION COCKPIT (2 Bước Ôn tập & Nạp mới) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 w-full">
          <!-- CARD BƯỚC 1: ÔN TẬP KỶ LUẬT (Review Day T-1) -->
          <div class="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border ${discipline.needsReview ? 'border-amber-400/80 dark:border-amber-600/80 bg-gradient-to-b from-amber-500/[0.03] to-transparent ring-2 ring-amber-500/10' : 'border-slate-200/90 dark:border-slate-800'} shadow-sm hover:shadow-md transition-all flex flex-col justify-between w-full">
            <div>
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center space-x-2">
                  <div class="w-7 h-7 rounded-lg ${discipline.needsReview ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400' : 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'} flex items-center justify-center font-bold text-xs">
                    ${discipline.needsReview ? '1' : '✓'}
                  </div>
                  <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Bước 1</span>
                </div>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${discipline.needsReview ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'}">
                  ${discipline.needsReview ? (discipline.totalBatches > 1 ? `Đợt ${discipline.currentBatchIndex}/${discipline.totalBatches}` : 'Bắt buộc hôm nay') : 'Đã xong hôm nay ✅'}
                </span>
              </div>

              <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center justify-between">
                <span>Ôn Tập Kỷ Luật (T-1 & Ngày Cũ)</span>
                ${discipline.needsReview && discipline.totalBatches > 1 ? `<span class="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-bold">${discipline.completedReviewCount}/${discipline.totalReviewCount} từ</span>` : ''}
              </h4>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 ${discipline.needsReview ? 'line-clamp-2 leading-relaxed' : 'line-clamp-1'}">
                ${discipline.needsReview 
                  ? (discipline.totalBatches > 1
                      ? `Đợt ${discipline.currentBatchIndex}/${discipline.totalBatches}: Luyện <strong class="text-amber-600 dark:text-amber-400 font-bold">${discipline.currentReviewBatch.length} từ</strong> (còn ${discipline.remainingReviewCount} từ cần ôn tiếp để mở khóa Bước 2).`
                      : `Có <strong class="text-amber-600 dark:text-amber-400 font-bold">${discipline.remainingReviewCount} từ</strong> cần củng cố qua 3 chế độ (Dịch - Nghe chính tả - Phản xạ nhanh).`)
                  : (discipline.totalReviewCount > 0 
                      ? `Xuất sắc! Toàn bộ ${discipline.totalReviewCount} từ ôn tập (T-1: ${discipline.tMinus1Date}${discipline.randomPastDate ? ` & T-n: ${discipline.randomPastDate}` : ''}) đã được hoàn tất trọn vẹn.`
                      : 'Nhiệm vụ ôn tập hôm nay đã xong! Trí nhớ dài hạn được bảo toàn vững chắc.')}
              </p>

              <!-- Chi tiết nguồn ngày ôn tập (T-1 & Ngày quá khứ ngẫu nhiên) -->
              ${discipline.needsReview && discipline.totalReviewCount > 0 ? `
                <div class="flex flex-wrap items-center gap-1.5 mt-2">
                  <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60" title="Từ học ở phiên gần nhất">
                    <span>📅 T-1:</span>
                    <span class="font-mono">${discipline.tMinus1Date}</span>
                    <span class="font-bold">(${discipline.tMinus1Count || 0} từ)</span>
                  </span>
                  ${discipline.randomPastDate ? `
                    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border border-violet-200/60 dark:border-violet-800/60" title="Từ chọn ngẫu nhiên từ quá khứ để nhắc lại ngắt quãng">
                      <span>🎲 T-n:</span>
                      <span class="font-mono">${discipline.randomPastDate}</span>
                      <span class="font-bold">(${discipline.randomPastCount || 0} từ)</span>
                    </span>
                  ` : ''}
                </div>
              ` : ''}

              ${discipline.needsReview && discipline.totalBatches > 1 ? `
                <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 mt-2.5 overflow-hidden">
                  <div class="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full transition-all duration-300" style="width: ${Math.round((discipline.completedReviewCount / Math.max(1, discipline.totalReviewCount)) * 100)}%"></div>
                </div>
              ` : ''}
            </div>

            <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80">
              ${discipline.needsReview ? `
                <button id="btn-start-review" class="w-full py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-md shadow-orange-500/20 active:scale-[0.98] transition-all flex items-center justify-center space-x-1.5 text-xs sm:text-sm">
                  <span>🚀</span>
                  <span>${discipline.totalBatches > 1 ? `Ôn tập Đợt ${discipline.currentBatchIndex}/${discipline.totalBatches} (${discipline.currentReviewBatch.length} từ)` : `Bắt đầu Ôn Tập (${discipline.currentReviewBatch.length} từ)`}</span>
                </button>
              ` : `
                <div class="py-2 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl text-center text-xs font-bold text-emerald-700 dark:text-emerald-300 flex items-center justify-center space-x-1.5">
                  <span>🎉</span>
                  <span>Nhiệm vụ ôn tập đã hoàn tất!</span>
                </div>
              `}
            </div>
          </div>

          <!-- CARD BƯỚC 2: HỌC BATCH 10 TỪ MỚI -->
          <div class="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border ${discipline.needsReview ? 'border-slate-200/70 dark:border-slate-800/70 opacity-75' : (appState.state.dailyNewBatchDone ? 'border-emerald-400/80 dark:border-emerald-600/80 bg-gradient-to-b from-emerald-500/[0.03] to-transparent ring-2 ring-emerald-500/10' : 'border-indigo-400/80 dark:border-indigo-600/80 bg-gradient-to-b from-indigo-500/[0.03] to-transparent ring-2 ring-indigo-500/10')} shadow-sm hover:shadow-md transition-all flex flex-col justify-between w-full">
            <div>
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center space-x-2">
                  <div class="w-7 h-7 rounded-lg ${discipline.needsReview ? 'bg-slate-200 dark:bg-slate-800 text-slate-500' : (appState.state.dailyNewBatchDone ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400' : 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400')} flex items-center justify-center font-bold text-xs">
                    ${discipline.needsReview ? '🔒' : (appState.state.dailyNewBatchDone ? '✓' : '2')}
                  </div>
                  <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Bước 2</span>
                </div>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${discipline.needsReview ? 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400' : (appState.state.dailyNewBatchDone ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300')}">
                  ${discipline.needsReview ? 'Đang bị khóa' : (appState.state.dailyNewBatchDone ? 'Đã đạt chuẩn hôm nay ✅' : 'Bắt buộc để giữ chuỗi 🔥')}
                </span>
              </div>

              <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                Nạp Batch 10 Từ Mới (${level})
              </h4>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2 leading-relaxed">
                ${discipline.needsReview 
                  ? 'Quy tắc kỷ luật: Bạn phải hoàn thành Bước 1 (Ôn tập toàn bộ từ T-1 & ngày cũ) để hệ thống mở khóa 10 từ mới.'
                  : (appState.state.dailyNewBatchDone 
                      ? `Đã nạp thành công ${appState.state.todayNewWordsCount || 10} từ mới hôm nay! Bạn có thể học thêm batch tiếp theo nếu muốn bứt phá vốn từ.`
                      : 'Quy tắc giữ chuỗi: Hoàn thành ít nhất 1 batch 10 từ mới hôm nay qua 2 giai đoạn (Thẩm thấu ➔ Luyện tập thực chiến 3 kỹ năng).')}
              </p>
            </div>

            <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80">
              ${discipline.needsReview ? `
                <button disabled class="w-full py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-400 font-bold rounded-xl cursor-not-allowed flex items-center justify-center space-x-2 text-xs sm:text-sm">
                  <span>🔒</span>
                  <span>Hoàn thành Bước 1 để mở khóa</span>
                </button>
              ` : `
                <button id="btn-start-new-batch" class="w-full py-2.5 bg-gradient-to-r ${appState.state.dailyNewBatchDone ? 'from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-indigo-500/25' : 'from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-indigo-500/25'} text-white font-bold rounded-xl shadow-md active:scale-[0.98] transition-all flex items-center justify-center space-x-1.5 text-xs sm:text-sm">
                  <span>✨</span>
                  <span>${appState.state.dailyNewBatchDone ? 'Học Thêm 10 Từ Mới (+15 XP)' : 'Bắt đầu Nạp & Luyện Tập 10 Từ Mới'}</span>
                </button>
              `}
            </div>
          </div>
        </div>

        <!-- 4. KHÁM PHÁ CÁC CHỦ ĐỀ TỪ VỰNG THỰC CHIẾN -->
        <div class="space-y-3 pt-1 w-full overflow-hidden">
          <!-- Header: Title, Count, Controls -->
          <div class="flex items-center justify-between gap-2 w-full">
            <div class="flex items-center space-x-1.5 min-w-0">
              <span class="text-lg shrink-0">📚</span>
              <h3 class="text-sm sm:text-base font-black text-slate-900 dark:text-white truncate">
                Kho Chủ Đề Thực Chiến
              </h3>
              <span class="text-[10px] sm:text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-800 shrink-0">
                ${countAll} nhóm
              </span>
            </div>

            <!-- View Controls -->
            <div class="flex items-center gap-1.5 shrink-0">
              <!-- Slide Navigation Buttons -->
              <div id="dash-slide-nav" class="${this.groupViewMode === 'slide' ? 'flex' : 'hidden'} items-center gap-0.5">
                <button id="btn-slide-prev" class="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold text-xs transition-all active:scale-90" title="Chủ đề trước">‹</button>
                <span id="dash-slide-counter" class="text-[10px] font-bold text-slate-500 dark:text-slate-400 font-mono px-0.5 min-w-[32px] text-center">1/${countAll}</span>
                <button id="btn-slide-next" class="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center font-bold text-xs transition-all active:scale-90" title="Chủ đề sau">›</button>
              </div>

              <!-- View Switch Toggle -->
              <div class="flex items-center p-0.5 bg-slate-100 dark:bg-slate-800/90 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                <button id="btn-view-slide" class="px-2 py-1 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all ${this.groupViewMode === 'slide' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'}">
                  🎠 Slide
                </button>
                <button id="btn-view-grid" class="px-2 py-1 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all ${this.groupViewMode === 'grid' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-xs' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'}">
                  ⊞ Lưới
                </button>
              </div>
            </div>
          </div>

          <!-- Category Filter Tabs (Single row, never wraps, bounded within w-full) -->
          <div class="flex items-center gap-1.5 overflow-x-auto pb-1 pt-0.5 scrollbar-none no-scrollbar w-full" id="dash-group-tabs">
            <button data-cat="all" class="dash-cat-btn shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all active:scale-95 ${this.groupActiveCat === 'all' ? 'bg-indigo-600 text-white shadow-xs' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60'}">
              <span>Tất cả</span>
              <span class="cat-count px-1.5 py-0.2 rounded-full text-[10px] font-mono ${this.groupActiveCat === 'all' ? 'bg-white/20 text-white' : 'bg-slate-200/80 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}">${countAll}</span>
            </button>
            <button data-cat="pos" class="dash-cat-btn shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all active:scale-95 ${this.groupActiveCat === 'pos' ? 'bg-indigo-600 text-white shadow-xs' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60'}">
              <span>📖 Từ Loại</span>
              <span class="cat-count px-1.5 py-0.2 rounded-full text-[10px] font-mono ${this.groupActiveCat === 'pos' ? 'bg-white/20 text-white' : 'bg-slate-200/80 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}">${countPos}</span>
            </button>
            <button data-cat="toeic" class="dash-cat-btn shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all active:scale-95 ${this.groupActiveCat === 'toeic' ? 'bg-indigo-600 text-white shadow-xs' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60'}">
              <span>🎯 TOEIC 750+</span>
              <span class="cat-count px-1.5 py-0.2 rounded-full text-[10px] font-mono ${this.groupActiveCat === 'toeic' ? 'bg-white/20 text-white' : 'bg-slate-200/80 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}">${countToeic}</span>
            </button>
            <button data-cat="daily" class="dash-cat-btn shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all active:scale-95 ${this.groupActiveCat === 'daily' ? 'bg-indigo-600 text-white shadow-xs' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60'}">
              <span>💬 Đời Sống</span>
              <span class="cat-count px-1.5 py-0.2 rounded-full text-[10px] font-mono ${this.groupActiveCat === 'daily' ? 'bg-white/20 text-white' : 'bg-slate-200/80 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}">${countDaily}</span>
            </button>
            <button data-cat="marketing" class="dash-cat-btn shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all active:scale-95 ${this.groupActiveCat === 'marketing' ? 'bg-indigo-600 text-white shadow-xs' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60'}">
              <span>📢 Marketing</span>
              <span class="cat-count px-1.5 py-0.2 rounded-full text-[10px] font-mono ${this.groupActiveCat === 'marketing' ? 'bg-white/20 text-white' : 'bg-slate-200/80 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}">${countMarketing}</span>
            </button>
            <button data-cat="work" class="dash-cat-btn shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all active:scale-95 ${this.groupActiveCat === 'work' ? 'bg-indigo-600 text-white shadow-xs' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60'}">
              <span>💼 Công Sở</span>
              <span class="cat-count px-1.5 py-0.2 rounded-full text-[10px] font-mono ${this.groupActiveCat === 'work' ? 'bg-white/20 text-white' : 'bg-slate-200/80 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}">${countWork}</span>
            </button>
            <button data-cat="tech" class="dash-cat-btn shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all active:scale-95 ${this.groupActiveCat === 'tech' ? 'bg-indigo-600 text-white shadow-xs' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60'}">
              <span>💻 Công Nghệ</span>
              <span class="cat-count px-1.5 py-0.2 rounded-full text-[10px] font-mono ${this.groupActiveCat === 'tech' ? 'bg-white/20 text-white' : 'bg-slate-200/80 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}">${countTech}</span>
            </button>
          </div>

          <!-- Cards Wrapper -->
          <div id="dash-group-wrapper" class="w-full overflow-hidden">
            <div id="dash-group-grid" class="w-full"></div>
            <!-- Grid Pagination Controls -->
            <div id="dash-grid-pagination" class="hidden"></div>
            <!-- Slide Dots Indicator -->
            <div id="dash-slide-dots" class="hidden"></div>
          </div>
        </div>
      </div>
    `;

    // Render danh sách Group Cards (Hỗ trợ Slide Carousel & Lưới phân trang)
    const renderGroupCards = () => {
      const grid = document.getElementById('dash-group-grid');
      const slideNav = document.getElementById('dash-slide-nav');
      const gridPagination = document.getElementById('dash-grid-pagination');
      const slideDots = document.getElementById('dash-slide-dots');
      const slideCounter = document.getElementById('dash-slide-counter');

      if (!grid) return;

      const filteredGroups = this.groupActiveCat === "all" 
        ? groups 
        : groups.filter(g => g.category === this.groupActiveCat);

      const isSlide = this.groupViewMode === 'slide';

      if (isSlide) {
        grid.className = "flex overflow-x-auto snap-x snap-mandatory gap-3 pb-3 pt-1 scrollbar-none no-scrollbar w-full scroll-smooth";
        if (slideNav) slideNav.className = "flex items-center gap-0.5";
        if (gridPagination) {
          gridPagination.className = "hidden";
          gridPagination.innerHTML = "";
        }
        if (slideDots) slideDots.className = "flex items-center justify-center gap-1.5 pt-2";
      } else {
        grid.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 w-full";
        if (slideNav) slideNav.className = "hidden";
        if (slideDots) {
          slideDots.className = "hidden";
          slideDots.innerHTML = "";
        }
        if (gridPagination) gridPagination.className = "flex items-center justify-center gap-1.5 pt-3";
      }

      let displayedGroups = filteredGroups;
      let totalPages = 1;
      const itemsPerPage = window.innerWidth < 640 ? 4 : 6;

      if (!isSlide) {
        totalPages = Math.ceil(filteredGroups.length / itemsPerPage) || 1;
        this.groupCurrentPage = Math.min(totalPages, Math.max(1, this.groupCurrentPage));
        const start = (this.groupCurrentPage - 1) * itemsPerPage;
        displayedGroups = filteredGroups.slice(start, start + itemsPerPage);
      }

      if (displayedGroups.length === 0) {
        grid.innerHTML = `
          <div class="col-span-full py-12 text-center text-slate-400">
            <span class="text-3xl block mb-2">🔍</span>
            <p class="text-sm font-semibold">Chưa có nhóm nào trong danh mục này.</p>
          </div>
        `;
        return;
      }

      grid.innerHTML = displayedGroups.map((g, idx) => {
        const catBadge = g.category === "pos"
          ? `<span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300">📖 Từ loại</span>`
          : g.category === "toeic"
          ? `<span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">🎯 TOEIC 750+</span>`
          : g.category === "daily" 
          ? `<span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">💬 Đời sống</span>`
          : g.category === "marketing"
          ? `<span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300">📢 Marketing</span>`
          : g.category === "work"
          ? `<span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">💼 Công sở</span>`
          : `<span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">💻 Công nghệ</span>`;

        const groupWords = g.words || [];
        const learnedInGroup = groupWords.filter(w => learnedWordIds.has(w.id)).length;
        const percentInGroup = groupWords.length ? Math.round((learnedInGroup / groupWords.length) * 100) : 0;
        const unlearnedInGroup = Math.max(0, groupWords.length - learnedInGroup);
        const batchSize = Math.min(10, unlearnedInGroup > 0 ? unlearnedInGroup : 10);
        const isGroupAllLearned = unlearnedInGroup === 0 && groupWords.length > 0;

        const sampleWords = groupWords.slice(0, 3).map(w => `<span class="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded text-[10px] font-mono">${w.word}</span>`).join(' ');

        const cardItemClass = isSlide
          ? "group-card-item w-[calc(100%-28px)] sm:w-[340px] shrink-0 snap-center bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
          : "group-card-item w-full bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between group";

        return `
          <div class="${cardItemClass}" data-card-index="${idx}">
            <div>
              <div class="flex items-center justify-between mb-2.5">
                <div class="flex items-center space-x-2">
                  <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
                    ${getGroupIcon(g.icon)}
                  </div>
                  <span class="px-1.5 py-0.5 rounded text-[10px] font-black bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">${g.level}</span>
                </div>
                ${catBadge}
              </div>

              <h4 class="font-black text-slate-900 dark:text-white text-sm sm:text-base mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                ${g.name}
              </h4>
              <p class="text-xs text-slate-500 dark:text-slate-400 mb-2.5 line-clamp-2 leading-relaxed">
                ${g.description}
              </p>

              <!-- Progress bar per group -->
              <div class="mb-3">
                <div class="flex items-center justify-between text-[10px] font-semibold text-slate-400 mb-1">
                  <span>Tiến độ đã học</span>
                  <span class="${learnedInGroup > 0 ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''}">${learnedInGroup}/${groupWords.length} (${percentInGroup}%)</span>
                </div>
                <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1 overflow-hidden">
                  <div class="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full transition-all duration-300" style="width: ${percentInGroup}%"></div>
                </div>
              </div>

              <div class="mb-3">
                <div class="flex flex-wrap gap-1">
                  ${sampleWords}
                </div>
              </div>
            </div>

            <div class="pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
              <span class="text-[11px] font-bold text-slate-400">${groupWords.length} từ</span>
              <div class="flex items-center space-x-1.5">
                <button data-group-id="${g.groupId}" class="btn-group-dict px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-all" title="Tra cứu trong từ điển">
                  📖 Sổ tay
                </button>
                <button data-group-id="${g.groupId}" class="btn-group-learn-batch px-3 py-1.5 rounded-xl ${isGroupAllLearned ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white'} text-xs font-bold shadow-sm active:scale-95 transition-all flex items-center space-x-1" title="${isGroupAllLearned ? 'Đã hoàn thành toàn bộ chủ đề này. Bấm để ôn luyện lại 10 từ ngẫu nhiên.' : `Học batch ${batchSize} từ mới thuộc chủ đề ${g.name}`}">
                  <span>${isGroupAllLearned ? '🔄 Học lại (10 từ)' : `⚡ Học ${batchSize} từ`}</span>
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('');

      // Wire up Slide dots & counter
      if (isSlide) {
        if (slideCounter) slideCounter.textContent = `1/${filteredGroups.length}`;
        grid.scrollLeft = 0;

        const updateDots = (activeIndex) => {
          if (!slideDots) return;
          if (filteredGroups.length <= 1) {
            slideDots.innerHTML = '';
            return;
          }
          if (filteredGroups.length <= 10) {
            slideDots.innerHTML = filteredGroups.map((_, i) => `
              <button data-idx="${i}" class="dash-slide-dot h-2 rounded-full transition-all ${i === activeIndex ? 'w-5 bg-indigo-600 dark:bg-indigo-400' : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'}"></button>
            `).join('');
            slideDots.querySelectorAll('.dash-slide-dot').forEach(dot => {
              dot.addEventListener('click', () => {
                const targetIdx = Number(dot.getAttribute('data-idx'));
                const card = grid.querySelector(`[data-card-index="${targetIdx}"]`);
                if (card) {
                  card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                }
              });
            });
          } else {
            const pct = Math.round(((activeIndex + 1) / filteredGroups.length) * 100);
            slideDots.innerHTML = `
              <div class="w-28 bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div class="bg-indigo-600 dark:bg-indigo-400 h-full rounded-full transition-all duration-200" style="width: ${pct}%"></div>
              </div>
            `;
          }
        };

        updateDots(0);

        grid.onscroll = () => {
          const firstCard = grid.querySelector('.group-card-item');
          if (!firstCard) return;
          const cardWidth = firstCard.offsetWidth + 12;
          const activeIdx = Math.min(filteredGroups.length - 1, Math.max(0, Math.round(grid.scrollLeft / cardWidth)));
          if (slideCounter) slideCounter.textContent = `${activeIdx + 1}/${filteredGroups.length}`;
          updateDots(activeIdx);
        };
      }

      // Wire up Grid Pagination
      if (!isSlide && gridPagination) {
        if (totalPages <= 1) {
          gridPagination.className = "hidden";
          gridPagination.innerHTML = "";
        } else {
          gridPagination.className = "flex items-center justify-center gap-1.5 pt-3";
          let pagesHtml = '';
          for (let p = 1; p <= totalPages; p++) {
            pagesHtml += `
              <button data-page="${p}" class="dash-page-btn w-8 h-8 rounded-xl text-xs font-bold transition-all ${p === this.groupCurrentPage ? 'bg-indigo-600 text-white shadow-xs' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}">
                ${p}
              </button>
            `;
          }
          gridPagination.innerHTML = `
            <button id="btn-page-prev" class="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed" ${this.groupCurrentPage === 1 ? 'disabled' : ''}>
              ‹ Trước
            </button>
            <div class="flex items-center gap-1">
              ${pagesHtml}
            </div>
            <button id="btn-page-next" class="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed" ${this.groupCurrentPage === totalPages ? 'disabled' : ''}>
              Sau ›
            </button>
          `;

          gridPagination.querySelectorAll('.dash-page-btn').forEach(btn => {
            btn.addEventListener('click', () => {
              this.groupCurrentPage = Number(btn.getAttribute('data-page'));
              renderGroupCards();
              grid.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            });
          });

          document.getElementById('btn-page-prev')?.addEventListener('click', () => {
            if (this.groupCurrentPage > 1) {
              this.groupCurrentPage--;
              renderGroupCards();
              grid.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
          });

          document.getElementById('btn-page-next')?.addEventListener('click', () => {
            if (this.groupCurrentPage < totalPages) {
              this.groupCurrentPage++;
              renderGroupCards();
              grid.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
          });
        }
      }

      // Gắn sự kiện Học batch từ mới theo chủ đề chỉ định (Giai đoạn 1 Thẩm thấu -> Giai đoạn 2 Luyện tập phản xạ)
      grid.querySelectorAll('.btn-group-learn-batch').forEach(btn => {
        btn.addEventListener('click', () => {
          const groupId = btn.getAttribute('data-group-id');
          const grp = groups.find(g => g.groupId === groupId);
          if (!grp) return;

          // Kiểm tra kỷ luật: Phải hoàn thành Ôn tập kỷ luật (T-1 & ngày cũ) trước
          const discipline = appState.calculateDisciplineStatus();
          if (discipline.needsReview) {
            this.showToast("⚠️ Quy tắc giữ chuỗi: Bạn cần hoàn thành Bước 1 (Ôn tập từ T-1 & ngày cũ) trước khi bắt đầu học từ mới!", 4000);
            const reviewBtn = document.getElementById('btn-start-review');
            if (reviewBtn) {
              reviewBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
              reviewBtn.classList.add('ring-4', 'ring-amber-400', 'animate-pulse');
              setTimeout(() => {
                reviewBtn.classList.remove('ring-4', 'ring-amber-400', 'animate-pulse');
              }, 2000);
            }
            return;
          }

          this.startNewBatchAbsorb(grp.groupId, grp.name);
        });
      });

      // Gắn sự kiện Tra cứu từ nhóm này trong Dictionary
      grid.querySelectorAll('.btn-group-dict').forEach(btn => {
        btn.addEventListener('click', () => {
          const groupId = btn.getAttribute('data-group-id');
          this.switchTab("dictionary", { groupId: groupId, category: "all", level: "all" });
        });
      });
    };

    renderGroupCards();

    // Slide Next/Prev controls
    document.getElementById('btn-slide-prev')?.addEventListener('click', () => {
      const grid = document.getElementById('dash-group-grid');
      const firstCard = grid?.querySelector('.group-card-item');
      if (grid && firstCard) {
        grid.scrollBy({ left: -(firstCard.offsetWidth + 12), behavior: 'smooth' });
      }
    });

    document.getElementById('btn-slide-next')?.addEventListener('click', () => {
      const grid = document.getElementById('dash-group-grid');
      const firstCard = grid?.querySelector('.group-card-item');
      if (grid && firstCard) {
        grid.scrollBy({ left: firstCard.offsetWidth + 12, behavior: 'smooth' });
      }
    });

    // View Mode Toggle (Slide vs Lưới)
    const btnViewSlide = document.getElementById('btn-view-slide');
    const btnViewGrid = document.getElementById('btn-view-grid');

    const updateViewButtons = () => {
      if (this.groupViewMode === 'slide') {
        btnViewSlide?.classList.add('bg-white', 'dark:bg-slate-700', 'text-indigo-600', 'dark:text-indigo-400', 'shadow-xs');
        btnViewSlide?.classList.remove('text-slate-500', 'hover:text-slate-700', 'dark:text-slate-400');
        btnViewGrid?.classList.remove('bg-white', 'dark:bg-slate-700', 'text-indigo-600', 'dark:text-indigo-400', 'shadow-xs');
        btnViewGrid?.classList.add('text-slate-500', 'hover:text-slate-700', 'dark:text-slate-400');
      } else {
        btnViewGrid?.classList.add('bg-white', 'dark:bg-slate-700', 'text-indigo-600', 'dark:text-indigo-400', 'shadow-xs');
        btnViewGrid?.classList.remove('text-slate-500', 'hover:text-slate-700', 'dark:text-slate-400');
        btnViewSlide?.classList.remove('bg-white', 'dark:bg-slate-700', 'text-indigo-600', 'dark:text-indigo-400', 'shadow-xs');
        btnViewSlide?.classList.add('text-slate-500', 'hover:text-slate-700', 'dark:text-slate-400');
      }
    };

    btnViewSlide?.addEventListener('click', () => {
      if (this.groupViewMode !== 'slide') {
        this.groupViewMode = 'slide';
        updateViewButtons();
        renderGroupCards();
      }
    });

    btnViewGrid?.addEventListener('click', () => {
      if (this.groupViewMode !== 'grid') {
        this.groupViewMode = 'grid';
        this.groupCurrentPage = 1;
        updateViewButtons();
        renderGroupCards();
      }
    });

    // Category Tabs Switch
    document.querySelectorAll('.dash-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-cat');
        this.groupActiveCat = cat;
        this.groupCurrentPage = 1;

        document.querySelectorAll('.dash-cat-btn').forEach(b => {
          const isAct = b.getAttribute('data-cat') === cat;
          const countBadge = b.querySelector('.cat-count');
          if (isAct) {
            b.className = "dash-cat-btn shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shadow-xs bg-indigo-600 text-white active:scale-95";
            if (countBadge) countBadge.className = "cat-count px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-white/20 text-white";
          } else {
            b.className = "dash-cat-btn shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 active:scale-95";
            if (countBadge) countBadge.className = "cat-count px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-slate-200/80 dark:bg-slate-700 text-slate-600 dark:text-slate-300";
          }
        });

        renderGroupCards();
      });
    });

    // Gắn sự kiện Bắt đầu Ôn tập
    document.getElementById('btn-start-review')?.addEventListener('click', () => {
      const currentDiscipline = appState.calculateDisciplineStatus();
      if (!currentDiscipline.needsReview || currentDiscipline.currentReviewBatch.length === 0) return;

      const startBatchPractice = (batchDiscipline) => {
        const batchIds = new Set(batchDiscipline.currentReviewBatch.map(w => w.wordId || w.id));
        const wordsToPractice = VOCAB_BANK.filter(w => batchIds.has(w.id));

        this.vocabEngine = new VocabPracticeEngine(mainContainer, {
          mode: "review",
          words: wordsToPractice.length > 0 ? wordsToPractice : batchDiscipline.currentReviewBatch,
          batchMeta: {
            currentBatchIndex: batchDiscipline.currentBatchIndex,
            totalBatches: batchDiscipline.totalBatches,
            totalReviewCount: batchDiscipline.totalReviewCount,
            completedReviewCount: batchDiscipline.completedReviewCount,
            remainingReviewCount: batchDiscipline.remainingReviewCount
          },
          targetPoints: ((wordsToPractice.length > 0 ? wordsToPractice.length : batchDiscipline.currentReviewBatch.length) || 1) * 3,
          onCompleted: () => this.renderVocabDashboard(),
          onContinueNextReviewBatch: () => {
            const nextDiscipline = appState.calculateDisciplineStatus();
            if (nextDiscipline.needsReview && nextDiscipline.currentReviewBatch.length > 0) {
              startBatchPractice(nextDiscipline);
            } else {
              this.renderVocabDashboard();
            }
          },
          onStartNewBatch: () => {
            this.startNewBatchAbsorb();
          }
        });
        this.vocabEngine.start();
      };

      startBatchPractice(currentDiscipline);
    });

    // Gắn sự kiện Nạp Batch 10 từ mới (Giai đoạn 1: Thẩm thấu Flashcard vuốt trái/phải)
    document.getElementById('btn-start-new-batch')?.addEventListener('click', () => {
      this.startNewBatchAbsorb();
    });

    // Gắn sự kiện Xem Phân Tích & Kỷ Luật
    document.getElementById('btn-view-analytics-dash')?.addEventListener('click', () => {
      this.switchTab("analytics");
    });
  }

  // Khởi động Giai đoạn 1: Thẩm thấu & Sàng lọc Batch 10 từ mới (Hỗ trợ theo Chủ đề chỉ định)
  startNewBatchAbsorb(targetGroupId = null, groupName = null) {
    const mainContainer = document.getElementById('main-content-area');
    let candidates = [];
    let targetCount = 10;

    if (targetGroupId) {
      candidates = appState.getNewBatchCandidatesForGroup(targetGroupId);
      if (!groupName) {
        const grp = appState.getVocabGroups().find(g => g.groupId === targetGroupId);
        if (grp) groupName = grp.name;
      }
      const learnedIds = new Set((appState.state.learnedWords || []).map(w => w.wordId || w.id));
      const unlearnedCount = candidates.filter(w => !learnedIds.has(w.id)).length;
      targetCount = Math.min(10, unlearnedCount > 0 ? unlearnedCount : Math.min(10, candidates.length));
    } else {
      candidates = appState.getNewBatchCandidates();
      targetCount = 10;
    }

    this.absorbEngine = new VocabAbsorbEngine(mainContainer, {
      candidates: candidates,
      targetCount: targetCount,
      groupId: targetGroupId,
      groupName: groupName,
      onCompleted: () => this.renderVocabDashboard(),
      onStartPractice: (acceptedWords, batchMeta) => {
        this.vocabEngine = new VocabPracticeEngine(mainContainer, {
          mode: "new_batch",
          words: acceptedWords,
          batchMeta: {
            ...batchMeta,
            groupId: targetGroupId,
            groupName: groupName
          },
          targetPoints: (acceptedWords.length || 10) * 3,
          onCompleted: () => this.renderVocabDashboard(),
          onStartNewBatch: () => {
            this.startNewBatchAbsorb(targetGroupId, groupName);
          },
          onStartReview: () => {
            document.getElementById('btn-start-review')?.click();
          }
        });
        this.vocabEngine.start();
      }
    });
    this.absorbEngine.start();
  }

  startPlacementTest() {
    const mainContainer = document.getElementById('main-content-area');
    this.placementEngine = new PlacementTestEngine(mainContainer, (level) => {
      this.startNewBatchAbsorb();
    });
    this.placementEngine.start();
  }

  // ==================== TỪ ĐIỂN / SỔ TAY ĐÃ HỌC ====================
  // ==================== TỪ ĐIỂN / SỔ TAY ĐÃ HỌC (TỐI ƯU IPHONE 17 PRO MAX) ====================
  renderDictionary(container) {
    if (!container) return;
    if (!appState.state.user) {
      this.switchTab("vocab");
      return;
    }
    const learnedIds = new Set(appState.state.learnedWords.map(w => w.wordId));
    const allGroups = appState.getVocabGroups();
    
    let levelFilter = this.dictionaryFilterState?.level || "all";
    let catFilter = this.dictionaryFilterState?.category || "all";
    let activeGroupId = this.dictionaryFilterState?.groupId || null;
    let viewMode = this.dictionaryFilterState?.viewMode || (typeof window !== 'undefined' && localStorage.getItem('dict_view_mode')) || 'compact';
    let pageSize = this.dictionaryFilterState?.pageSize || (typeof window !== 'undefined' && parseInt(localStorage.getItem('dict_page_size') || '12', 10)) || 12;
    let currentPage = this.dictionaryFilterState?.page || 1;

    const getLevelBadgeClass = (lvl) => {
      switch (lvl) {
        case 'A1': return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20';
        case 'A2': return 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20';
        case 'B1': return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20';
        case 'B2': return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20';
        default: return 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border border-slate-500/20';
      }
    };

    const buildPaginationHtml = (currPage, totalPages, totalItems) => {
      if (totalPages <= 1) {
        return `
          <div class="col-span-full py-4 text-center text-xs text-slate-400 border-t border-slate-200/60 dark:border-slate-800/60">
            ✨ Hiển thị toàn bộ ${totalItems} từ vựng phù hợp
          </div>
        `;
      }

      let pages = [];
      if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        let start = Math.max(2, currPage - 1);
        let end = Math.min(totalPages - 1, currPage + 1);

        if (start > 2) pages.push('...');
        for (let i = start; i <= end; i++) pages.push(i);
        if (end < totalPages - 1) pages.push('...');
        pages.push(totalPages);
      }

      const pageButtonsHtml = pages.map(p => {
        if (p === '...') {
          return `<span class="px-1 text-xs text-slate-400 select-none">...</span>`;
        }
        const isActive = p === currPage;
        return `
          <button data-page="${p}" class="dict-page-btn min-w-[32px] h-8 px-2 rounded-xl text-xs font-bold transition-all active:scale-90 ${isActive ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/30' : 'bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80'}">
            ${p}
          </button>
        `;
      }).join('');

      return `
        <div class="col-span-full pt-4 pb-6 flex flex-col items-center justify-center space-y-3 border-t border-slate-200/60 dark:border-slate-800/60">
          <div class="flex items-center justify-center space-x-1.5 sm:space-x-2 w-full max-w-md px-1">
            <button id="btn-page-prev" ${currPage <= 1 ? 'disabled' : ''} class="px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1 ${currPage <= 1 ? 'opacity-40 cursor-not-allowed bg-slate-100 dark:bg-slate-800 text-slate-400' : 'bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-xs active:scale-95'}">
              <span>‹</span><span>Trước</span>
            </button>

            <div class="flex items-center space-x-1 overflow-x-auto py-0.5">
              ${pageButtonsHtml}
            </div>

            <button id="btn-page-next" ${currPage >= totalPages ? 'disabled' : ''} class="px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1 ${currPage >= totalPages ? 'opacity-40 cursor-not-allowed bg-slate-100 dark:bg-slate-800 text-slate-400' : 'bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-xs active:scale-95'}">
              <span>Sau</span><span>›</span>
            </button>
          </div>

          <div class="flex items-center space-x-2 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
            <span>Trang <strong class="text-slate-800 dark:text-slate-200">${currPage}</strong> / ${totalPages} (${totalItems} từ)</span>
            ${totalPages > 3 ? `
              <span class="text-slate-300 dark:text-slate-700">|</span>
              <div class="flex items-center space-x-1">
                <span>Đến:</span>
                <select id="dict-jump-page-select" class="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg px-1.5 py-0.5 outline-none font-bold cursor-pointer">
                  ${Array.from({ length: totalPages }, (_, i) => `<option value="${i + 1}" ${i + 1 === currPage ? 'selected' : ''}>Trang ${i + 1}</option>`).join('')}
                </select>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    };

    const renderList = (searchKeyword = "", resetPage = true) => {
      if (resetPage) {
        currentPage = 1;
        this.dictionaryFilterState.page = 1;
      }

      let filtered = VOCAB_BANK.filter(w => {
        if (levelFilter === "learned" && !learnedIds.has(w.id)) return false;
        if (["A1", "A2", "B1", "B2"].includes(levelFilter) && w.level !== levelFilter) return false;
        if (activeGroupId && w.groupId !== activeGroupId) return false;
        if (catFilter !== "all" && w.category !== catFilter) return false;
        return true;
      });

      if (searchKeyword.trim()) {
        const kw = searchKeyword.toLowerCase();
        filtered = filtered.filter(w => 
          w.word.toLowerCase().includes(kw) || 
          w.meaningVi.toLowerCase().includes(kw) ||
          (w.collocations && w.collocations.toLowerCase().includes(kw))
        );
      }

      const listContainer = document.getElementById('vocab-card-grid');
      const counterEl = document.getElementById('dict-results-counter');
      const activeGroupBanner = document.getElementById('active-group-banner');
      
      if (activeGroupBanner) {
        if (activeGroupId) {
          const grp = allGroups.find(g => g.groupId === activeGroupId);
          activeGroupBanner.className = "flex items-center justify-between p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200 text-xs";
          activeGroupBanner.innerHTML = `
            <div class="flex items-center space-x-2 min-w-0 pr-2">
              <span class="text-base shrink-0">${getGroupIcon(grp?.icon)}</span>
              <span class="truncate">Đang lọc theo: <strong>${grp?.name || activeGroupId}</strong> (${filtered.length} mục)</span>
            </div>
            <button id="btn-clear-group-filter" class="shrink-0 px-2.5 py-1 bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-700 rounded-xl text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 transition-colors active:scale-95">
              ✕ Bỏ lọc
            </button>
          `;
          document.getElementById('btn-clear-group-filter')?.addEventListener('click', () => {
            activeGroupId = null;
            this.dictionaryFilterState.groupId = null;
            renderList(document.getElementById('vocab-search-box')?.value || "", true);
          });
        } else {
          activeGroupBanner.className = "hidden";
          activeGroupBanner.innerHTML = "";
        }
      }

      const totalItems = filtered.length;
      const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
      if (currentPage > totalPages) currentPage = totalPages;
      this.dictionaryFilterState.page = currentPage;

      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = Math.min(startIndex + pageSize, totalItems);
      const pageWords = filtered.slice(startIndex, endIndex);

      if (counterEl) {
        if (totalItems === 0) {
          counterEl.innerHTML = `Không có từ nào phù hợp`;
        } else {
          counterEl.innerHTML = `Hiển thị <strong class="text-slate-900 dark:text-white font-extrabold">${startIndex + 1} - ${endIndex}</strong> / ${totalItems} từ`;
        }
      }

      if (!listContainer) return;

      if (totalItems === 0) {
        listContainer.className = "w-full min-w-0";
        listContainer.innerHTML = `
          <div class="col-span-full py-16 text-center text-slate-400">
            <div class="text-4xl mb-3">🔍</div>
            <p class="text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300">Không tìm thấy từ vựng hoặc cụm từ phù hợp.</p>
            <p class="text-xs text-slate-500 mt-1 max-w-sm mx-auto">Hãy thử đổi bộ lọc trình độ, chủ đề hoặc từ khóa tìm kiếm khác.</p>
          </div>
        `;
        return;
      }

      if (viewMode === 'compact') {
        listContainer.className = "w-full min-w-0 grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3";
      } else {
        listContainer.className = "w-full min-w-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4";
      }

      let cardsHtml = '';
      if (viewMode === 'compact') {
        cardsHtml = pageWords.map(w => {
          const isLearned = learnedIds.has(w.id);
          const groupInfo = allGroups.find(g => g.groupId === w.groupId);
          const groupBadge = groupInfo 
            ? `<span class="text-[10px] font-semibold text-slate-500 dark:text-slate-400 inline-flex items-center space-x-1 bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-200/50 dark:border-slate-700/50 truncate max-w-[150px]"><span class="shrink-0">${getGroupIcon(groupInfo.icon)}</span> <span class="truncate">${groupInfo.name}</span></span>`
            : '';

          return `
            <div class="dict-compact-item w-full min-w-0 bg-white dark:bg-[#161b22] rounded-2xl p-3 sm:p-3.5 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-700 transition-all flex flex-col justify-between">
              <!-- Hàng chính: Thông tin từ + Nút thao tác -->
              <div class="flex items-center justify-between gap-2.5 min-w-0">
                <div class="btn-toggle-expand flex-1 min-w-0 cursor-pointer select-none py-0.5" title="Bấm để xem cụm từ & câu ví dụ">
                  <div class="flex items-center space-x-1.5 flex-wrap gap-y-0.5 mb-1">
                    <span class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      ${w.word}
                    </span>
                    <span class="text-[11px] font-mono text-slate-400 dark:text-slate-500">${w.ipa || ''}</span>
                    ${w.type ? `<span class="px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-sans font-bold text-indigo-600 dark:text-indigo-400 not-italic shrink-0">${w.type}</span>` : ''}
                    <span class="px-1.5 py-0.2 rounded text-[10px] font-bold shrink-0 ${getLevelBadgeClass(w.level)}">${w.level}</span>
                    ${isLearned ? `
                      <span class="inline-flex items-center px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[9px] font-bold shrink-0">
                        ✓ Thuộc
                      </span>
                    ` : ''}
                  </div>
                  <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 truncate leading-snug">
                    ${w.meaningVi}
                  </p>
                </div>

                <!-- Cụm loa & mũi tên mở rộng -->
                <div class="flex items-center space-x-1 shrink-0">
                  <button data-word="${w.word}" class="btn-play-sound w-9 h-9 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center transition-all active:scale-90 border border-indigo-200/50 dark:border-indigo-800/60 shrink-0" title="Phát âm từ vựng">
                    <svg class="w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
                    </svg>
                  </button>

                  <button class="btn-toggle-expand-icon w-8 h-8 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center transition-all active:scale-90" title="Xem chi tiết ví dụ & cụm từ">
                    <svg class="w-3.5 h-3.5 transform transition-transform duration-200 icon-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Drawer mở rộng: Cụm từ hay gặp & Câu ví dụ -->
              <div class="expand-drawer hidden mt-2.5 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 space-y-2 text-xs">
                ${groupBadge ? `<div class="mb-1">${groupBadge}</div>` : ''}

                ${w.collocations ? `
                  <div class="text-xs text-indigo-900 dark:text-indigo-200 bg-indigo-50/70 dark:bg-indigo-950/40 p-2 sm:p-2.5 rounded-xl border border-indigo-100 dark:border-indigo-900/60 leading-relaxed break-words">
                    <div class="text-indigo-600 dark:text-indigo-400 font-extrabold uppercase text-[10px] tracking-wider mb-0.5 flex items-center space-x-1">
                      <span>💡</span><span>Cụm từ hay gặp:</span>
                    </div>
                    <div class="font-medium">${w.collocations}</div>
                  </div>
                ` : ''}

                <div class="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-2 sm:p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800/80 space-y-1 break-words">
                  <div class="flex items-start justify-between gap-2">
                    <p class="italic font-medium text-slate-700 dark:text-slate-200 leading-relaxed">"${w.example}"</p>
                    <button data-example="${w.example.replace(/"/g, '&quot;')}" class="btn-play-example shrink-0 p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition-colors active:scale-90" title="Nghe câu ví dụ">
                      <svg class="w-3.5 h-3.5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
                      </svg>
                    </button>
                  </div>
                  ${w.exampleVi ? `<p class="text-slate-500 dark:text-slate-400 text-[11px] not-italic pt-1 border-t border-slate-200/50 dark:border-slate-700/50">➔ ${w.exampleVi}</p>` : ''}
                </div>
              </div>
            </div>
          `;
        }).join('');
      } else {
        cardsHtml = pageWords.map(w => {
          const isLearned = learnedIds.has(w.id);
          const groupInfo = allGroups.find(g => g.groupId === w.groupId);
          const groupBadge = groupInfo 
            ? `<span class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center space-x-1 bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 rounded-lg border border-slate-200/50 dark:border-slate-700/50 truncate max-w-[140px] sm:max-w-[150px]"><span class="text-xs shrink-0">${getGroupIcon(groupInfo.icon)}</span> <span class="truncate">${groupInfo.name}</span></span>`
            : '';

          return `
            <div class="w-full min-w-0 box-border bg-white dark:bg-[#161b22] rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow relative group flex flex-col justify-between">
              <div class="min-w-0">
                <div class="flex items-center justify-between gap-2 mb-2 min-w-0">
                  <div class="flex items-center space-x-1.5 flex-wrap gap-y-1 min-w-0 pr-1">
                    <span class="px-2 py-0.5 rounded-lg text-xs font-black tracking-wide shrink-0 ${getLevelBadgeClass(w.level)}">
                      ${w.level}
                    </span>
                    ${groupBadge}
                    ${isLearned ? `
                      <span class="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold shrink-0">
                        <span>✓</span><span>Đã thuộc</span>
                      </span>
                    ` : ''}
                  </div>
                  
                  <button data-word="${w.word}" class="btn-play-sound w-9 h-9 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center transition-all active:scale-90 border border-indigo-200/50 dark:border-indigo-800/60 shrink-0" title="Phát âm tiếng Anh">
                    <svg class="w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
                    </svg>
                  </button>
                </div>

                <h4 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight mb-0.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors break-words">
                  ${w.word}
                </h4>
                <div class="text-xs font-mono text-slate-400 dark:text-slate-500 flex items-center space-x-1.5 mb-2 flex-wrap gap-y-0.5">
                  <span>${w.ipa || ''}</span>
                  ${w.type ? `<span class="px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-sans font-bold text-indigo-600 dark:text-indigo-400 not-italic shrink-0">${w.type}</span>` : ''}
                </div>
                <p class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 mb-2 leading-snug break-words">${w.meaningVi}</p>
                
                ${w.collocations ? `
                  <div class="text-xs text-indigo-900 dark:text-indigo-200 bg-indigo-50/70 dark:bg-indigo-950/40 p-2 sm:p-2.5 rounded-xl border border-indigo-100 dark:border-indigo-900/60 mb-2 leading-relaxed break-words">
                    <div class="text-indigo-600 dark:text-indigo-400 font-extrabold uppercase text-[10px] tracking-wider mb-0.5 flex items-center space-x-1">
                      <span>💡</span><span>Cụm từ hay gặp:</span>
                    </div>
                    <div class="font-medium break-words">${w.collocations}</div>
                  </div>
                ` : ''}

                <div class="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-2 sm:p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800/80 space-y-1 break-words">
                  <div class="flex items-start justify-between gap-2">
                    <p class="italic font-medium text-slate-700 dark:text-slate-200 leading-relaxed break-words">"${w.example}"</p>
                    <button data-example="${w.example.replace(/"/g, '&quot;')}" class="btn-play-example shrink-0 p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition-colors active:scale-90" title="Nghe câu ví dụ">
                      <svg class="w-3.5 h-3.5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
                      </svg>
                    </button>
                  </div>
                  ${w.exampleVi ? `<p class="text-slate-500 dark:text-slate-400 text-[11px] not-italic pt-1 border-t border-slate-200/50 dark:border-slate-700/50 break-words">➔ ${w.exampleVi}</p>` : ''}
                </div>
              </div>
            </div>
          `;
        }).join('');
      }

      const paginationHtml = buildPaginationHtml(currentPage, totalPages, totalItems);
      listContainer.innerHTML = cardsHtml + paginationHtml;

      // Tối ưu độ trễ âm thanh: Nạp trước các từ hiển thị trên trang sổ tay vào RAM
      if (Array.isArray(pageWords) && pageWords.length > 0) {
        setTimeout(() => {
          pageWords.slice(0, 8).forEach(w => {
            if (w && w.word) speechService.preloadWord(w.word);
          });
        }, 80);
      }

      // Event listener cho phát âm từ vựng
      listContainer.querySelectorAll('.btn-play-sound').forEach(btn => {
        let lastPlay = 0;
        const play = (e) => {
          e.stopPropagation();
          const now = Date.now();
          if (now - lastPlay < 500) return;
          lastPlay = now;
          if (window.navigator?.vibrate) window.navigator.vibrate(8);
          btn.classList.add('scale-115', 'text-indigo-500');
          setTimeout(() => btn.classList.remove('scale-115', 'text-indigo-500'), 350);
          speechService.speak(btn.getAttribute('data-word'));
        };
        btn.addEventListener('click', play);
        btn.addEventListener('touchend', play);
      });

      // Event listener cho phát âm câu ví dụ
      listContainer.querySelectorAll('.btn-play-example').forEach(btn => {
        let lastPlay = 0;
        const play = (e) => {
          e.stopPropagation();
          const now = Date.now();
          if (now - lastPlay < 500) return;
          lastPlay = now;
          if (window.navigator?.vibrate) window.navigator.vibrate(8);
          btn.classList.add('scale-115', 'text-indigo-500');
          setTimeout(() => btn.classList.remove('scale-115', 'text-indigo-500'), 350);
          speechService.speak(btn.getAttribute('data-example'));
        };
        btn.addEventListener('click', play);
        btn.addEventListener('touchend', play);
      });

      // Event listener cho Accordion trong chế độ Compact
      if (viewMode === 'compact') {
        listContainer.querySelectorAll('.dict-compact-item').forEach(card => {
          const toggleBtn = card.querySelector('.btn-toggle-expand');
          const chevronBtn = card.querySelector('.btn-toggle-expand-icon');
          const drawer = card.querySelector('.expand-drawer');
          const chevronIcon = card.querySelector('.icon-chevron');

          const toggle = (e) => {
            if (e.target.closest('.btn-play-sound') || e.target.closest('.btn-play-example')) return;
            if (!drawer) return;
            drawer.classList.toggle('hidden');
            if (chevronIcon) {
              if (drawer.classList.contains('hidden')) {
                chevronIcon.classList.remove('rotate-180');
              } else {
                chevronIcon.classList.add('rotate-180');
              }
            }
          };

          toggleBtn?.addEventListener('click', toggle);
          chevronBtn?.addEventListener('click', toggle);
        });
      }

      // Event listeners cho các nút phân trang
      const goToPage = (newPage) => {
        if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
        currentPage = newPage;
        this.dictionaryFilterState.page = currentPage;
        renderList(document.getElementById('vocab-search-box')?.value || "", false);
        
        // Cuộn mượt lên đầu danh sách từ vựng trên mobile
        const searchBoxEl = document.getElementById('vocab-search-box');
        if (searchBoxEl) {
          const yOffset = -70;
          const y = searchBoxEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        }
      };

      document.getElementById('btn-page-prev')?.addEventListener('click', () => goToPage(currentPage - 1));
      document.getElementById('btn-page-next')?.addEventListener('click', () => goToPage(currentPage + 1));
      listContainer.querySelectorAll('.dict-page-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const p = parseInt(btn.getAttribute('data-page'), 10);
          if (!isNaN(p)) goToPage(p);
        });
      });
      document.getElementById('dict-jump-page-select')?.addEventListener('change', (e) => {
        const p = parseInt(e.target.value, 10);
        if (!isNaN(p)) goToPage(p);
      });
    };

    container.innerHTML = `
      <div class="space-y-4 sm:space-y-5 animate-fade-in w-full min-w-0 max-w-5xl mx-auto pb-10">
        
        <!-- Header & Search Box (Tối ưu chuẩn iOS 17 Pro Max) -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 min-w-0">
          <div class="min-w-0">
            <div class="flex items-center space-x-2 flex-wrap gap-y-1">
              <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">Sổ Tay Từ Vựng</h2>
              <span class="px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 text-[11px] font-bold shrink-0">
                ${VOCAB_BANK.length} từ
              </span>
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed break-words">Tra cứu nhanh từ vựng, cụm từ thực chiến và luyện phát âm chuẩn bản xứ.</p>
          </div>

          <!-- Ô tìm kiếm chống zoom trên iOS Safari -->
          <div class="relative w-full sm:w-80 shrink-0">
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm select-none pointer-events-none">🔍</span>
            <input 
              type="text" 
              id="vocab-search-box" 
              placeholder="Tìm từ tiếng Anh, cụm từ, nghĩa..." 
              class="w-full text-[16px] sm:text-xs py-2.5 sm:py-2 pl-9 pr-9 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 shadow-xs transition-all box-border"
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              spellcheck="false"
            />
            <button id="btn-clear-search" class="hidden absolute right-2.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center text-xs transition-colors" title="Xóa tìm kiếm">✕</button>
          </div>
        </div>

        <!-- Filter Rows (Bộ lọc Level & Category lướt mượt mà trên iPhone) -->
        <div class="space-y-2 w-full min-w-0 max-w-full overflow-hidden">
          <!-- Filter Level -->
          <div class="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none touch-pan-x -mx-3 px-3 sm:mx-0 sm:px-0 w-auto" style="-webkit-overflow-scrolling: touch;" id="dict-level-filters">
            <button data-level="all" class="dict-lvl-btn shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 ${levelFilter === 'all' ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/25' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60'}">Tất cả (${VOCAB_BANK.length})</button>
            <button data-level="learned" class="dict-lvl-btn shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 ${levelFilter === 'learned' ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/25' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60'}">Đã học (${learnedIds.size})</button>
            <button data-level="A1" class="dict-lvl-btn shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 ${levelFilter === 'A1' ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/25' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60'}">A1</button>
            <button data-level="A2" class="dict-lvl-btn shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 ${levelFilter === 'A2' ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/25' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60'}">A2</button>
            <button data-level="B1" class="dict-lvl-btn shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 ${levelFilter === 'B1' ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/25' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60'}">B1</button>
            <button data-level="B2" class="dict-lvl-btn shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 ${levelFilter === 'B2' ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/25' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60'}">B2</button>
          </div>

          <!-- Filter Category -->
          <div class="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none touch-pan-x -mx-3 px-3 sm:mx-0 sm:px-0 w-auto" style="-webkit-overflow-scrolling: touch;" id="dict-cat-filters">
            <button data-cat="all" class="dict-cat-btn shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 ${catFilter === 'all' ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60'}">🌐 Toàn bộ</button>
            <button data-cat="pos" class="dict-cat-btn shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 ${catFilter === 'pos' ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60'}">📖 Từ Loại (N, V, Adj, Adv)</button>
            <button data-cat="toeic" class="dict-cat-btn shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 ${catFilter === 'toeic' ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60'}">🎯 TOEIC 750+</button>
            <button data-cat="daily" class="dict-cat-btn shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 ${catFilter === 'daily' ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60'}">💬 Giao tiếp Hàng ngày</button>
            <button data-cat="work" class="dict-cat-btn shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 ${catFilter === 'work' ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60'}">💼 Công sở & Teamwork</button>
            <button data-cat="marketing" class="dict-cat-btn shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 ${catFilter === 'marketing' ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60'}">📢 Marketing & Growth</button>
            <button data-cat="tech" class="dict-cat-btn shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 ${catFilter === 'tech' ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60'}">💻 Công nghệ & CNTT</button>
          </div>
        </div>

        <!-- Banner Lọc theo nhóm chủ đề cụ thể (nếu có) -->
        <div id="active-group-banner" class="hidden"></div>

        <!-- Toolbar: Đếm kết quả, View Mode Toggle, Page Size & Thử âm thanh -->
        <div class="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 px-0.5 min-w-0">
          <div id="dict-results-counter" class="font-medium shrink-0 text-slate-600 dark:text-slate-300">Hiển thị...</div>
          
          <div class="flex items-center space-x-2 shrink-0 ml-auto flex-wrap gap-y-1.5">
            <!-- Nút chuyển đổi View Mode: Gọn (Compact) vs Thẻ (Cards) -->
            <div class="flex items-center p-0.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80">
              <button id="btn-view-compact" class="px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all flex items-center space-x-1 ${viewMode === 'compact' ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs' : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'}" title="Danh sách thu gọn, chạm để xem chi tiết">
                <span>📋</span><span>Gọn</span>
              </button>
              <button id="btn-view-card" class="px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all flex items-center space-x-1 ${viewMode === 'card' ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs' : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'}" title="Dạng thẻ chi tiết">
                <span>🗂️</span><span>Thẻ</span>
              </button>
            </div>

            <!-- Dropdown số lượng mỗi trang -->
            <select id="dict-page-size-select" class="text-[11px] bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 rounded-xl px-2 py-1 outline-none font-semibold cursor-pointer">
              <option value="12" ${pageSize === 12 ? 'selected' : ''}>12 từ/trang</option>
              <option value="24" ${pageSize === 24 ? 'selected' : ''}>24 từ/trang</option>
              <option value="48" ${pageSize === 48 ? 'selected' : ''}>48 từ/trang</option>
            </select>

            <!-- Thử âm thanh -->
            <button id="btn-test-audio-dict" class="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 px-2 py-1 rounded-xl border border-indigo-200/60 dark:border-indigo-800/60 flex items-center space-x-1 shrink-0 active:scale-95 transition-all" title="Bấm để kiểm tra âm thanh phát ra loa hoặc tai nghe">
              <span>🔊</span><span class="hidden sm:inline">Thử loa</span>
            </button>
          </div>
        </div>

        <!-- Grid Cards / Compact List Container -->
        <div class="w-full min-w-0" id="vocab-card-grid"></div>

        <!-- Nút Cuộn Lên Đầu Trang Tinh Gọn (Floating Back to Top) -->
        <button id="btn-scroll-top" class="fixed right-4 bottom-24 md:bottom-8 z-30 w-11 h-11 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-300/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-200 shadow-lg shadow-black/10 flex items-center justify-center transition-all duration-200 opacity-0 pointer-events-none active:scale-90" title="Lên đầu trang">
          <svg class="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7"/>
          </svg>
        </button>

      </div>
    `;

    renderList("", true);

    const searchBox = container.querySelector('#vocab-search-box');
    const btnClearSearch = container.querySelector('#btn-clear-search');
    const btnScrollTop = container.querySelector('#btn-scroll-top');
    const btnViewCompact = container.querySelector('#btn-view-compact');
    const btnViewCard = container.querySelector('#btn-view-card');
    const pageSizeSelect = container.querySelector('#dict-page-size-select');

    // Chuyển chế độ Gọn (Compact)
    btnViewCompact?.addEventListener('click', () => {
      if (viewMode === 'compact') return;
      viewMode = 'compact';
      this.dictionaryFilterState.viewMode = 'compact';
      localStorage.setItem('dict_view_mode', 'compact');
      btnViewCompact.className = 'px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all flex items-center space-x-1 bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs';
      btnViewCard.className = 'px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all flex items-center space-x-1 text-slate-500 hover:text-slate-800 dark:hover:text-white';
      renderList(searchBox?.value || "", false);
    });

    // Chuyển chế độ Thẻ (Card)
    btnViewCard?.addEventListener('click', () => {
      if (viewMode === 'card') return;
      viewMode = 'card';
      this.dictionaryFilterState.viewMode = 'card';
      localStorage.setItem('dict_view_mode', 'card');
      btnViewCard.className = 'px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all flex items-center space-x-1 bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs';
      btnViewCompact.className = 'px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all flex items-center space-x-1 text-slate-500 hover:text-slate-800 dark:hover:text-white';
      renderList(searchBox?.value || "", false);
    });

    // Thay đổi số lượng từ trên mỗi trang
    pageSizeSelect?.addEventListener('change', (e) => {
      pageSize = parseInt(e.target.value, 10) || 12;
      this.dictionaryFilterState.pageSize = pageSize;
      localStorage.setItem('dict_page_size', pageSize.toString());
      renderList(searchBox?.value || "", true);
    });

    // Nút thử âm thanh loa / tai nghe
    container.querySelector('#btn-test-audio-dict')?.addEventListener('click', () => {
      if (window.navigator?.vibrate) window.navigator.vibrate(10);
      speechService.testAudio();
      this.showToast("🔊 Đang phát chuông & giọng đọc mẫu! Hãy kiểm tra âm lượng tai nghe trong Control Center hoặc gạt nút rung.");
    });

    // Event Lọc Level
    container.querySelectorAll('.dict-lvl-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (window.navigator?.vibrate) window.navigator.vibrate(8);
        levelFilter = btn.getAttribute('data-level');
        this.dictionaryFilterState.level = levelFilter;
        container.querySelectorAll('.dict-lvl-btn').forEach(b => {
          const isActive = b.getAttribute('data-level') === levelFilter;
          b.className = `dict-lvl-btn shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 ${isActive ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/25' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60'}`;
        });
        renderList(searchBox?.value || "", true);
      });
    });

    // Event Lọc Category
    container.querySelectorAll('.dict-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (window.navigator?.vibrate) window.navigator.vibrate(8);
        catFilter = btn.getAttribute('data-cat');
        this.dictionaryFilterState.category = catFilter;
        container.querySelectorAll('.dict-cat-btn').forEach(b => {
          const isActive = b.getAttribute('data-cat') === catFilter;
          b.className = `dict-cat-btn shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 ${isActive ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60'}`;
        });
        renderList(searchBox?.value || "", true);
      });
    });

    // Event Tìm kiếm ô search
    searchBox?.addEventListener('input', (e) => {
      const val = e.target.value;
      if (val.trim()) {
        btnClearSearch?.classList.remove('hidden');
      } else {
        btnClearSearch?.classList.add('hidden');
      }
      renderList(val, true);
    });

    // Xoá nhanh tìm kiếm
    btnClearSearch?.addEventListener('click', () => {
      if (searchBox) {
        searchBox.value = '';
        btnClearSearch.classList.add('hidden');
        searchBox.focus();
        renderList('', true);
      }
    });

    // Nút cuộn lên đầu trang trên iPhone
    const onScroll = () => {
      if (window.scrollY > 350) {
        btnScrollTop?.classList.remove('opacity-0', 'pointer-events-none');
        btnScrollTop?.classList.add('opacity-100');
      } else {
        btnScrollTop?.classList.add('opacity-0', 'pointer-events-none');
        btnScrollTop?.classList.remove('opacity-100');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    btnScrollTop?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==================== MÀN HÌNH BẢNG THỐNG KÊ & YEARLY FOCUS HEATMAP ====================
  openAnalyticsModal() {
    this.switchTab("analytics");
  }

  renderAnalyticsPage(container) {
    if (!container) return;
    if (!appState.state.user) {
      this.switchTab("vocab");
      return;
    }

    const isGuest = !appState.state.user;
    const year = this.selectedHeatmapYear || new Date().getFullYear();

    // Map đếm số từ nạp theo từng ngày (YYYY-MM-DD -> count)
    const wordCountMap = {};
    (appState.state.learnedWords || []).forEach(w => {
      if (w.learnedDate) {
        wordCountMap[w.learnedDate] = (wordCountMap[w.learnedDate] || 0) + 1;
      }
    });

    const now = new Date();
    const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const todayCount = wordCountMap[todayStr] || 0;
    const streak = appState.state.streak || 0;
    const maxStreak = typeof appState.calculateMaxStreak === 'function' 
      ? appState.calculateMaxStreak() 
      : (appState.state.maxStreak || streak);

    // Mảng tên tháng và thứ (Sửa dứt điểm ReferenceError)
    const monthShortNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthFullNames = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];
    const dayNames = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];

    // Hàm phân loại mức độ kỷ luật theo số từ nạp trong ngày
    const getDisciplineLevel = (count, isFuture) => {
      if (isFuture) return { level: 0, cellClass: "gh-cell-0 opacity-30", label: "Chưa diễn ra", badge: "Tương lai" };
      if (count === 0) return { level: 0, cellClass: "gh-cell-0", label: "0 từ", badge: "0 từ" };
      if (count <= 10) return { level: 1, cellClass: "gh-cell-1", label: `${count} từ (Đạt chuẩn)`, badge: `${count} từ` };
      if (count <= 20) return { level: 2, cellClass: "gh-cell-2", label: `${count} từ (Tích cực)`, badge: `${count} từ` };
      if (count <= 30) return { level: 3, cellClass: "gh-cell-3", label: `${count} từ (Tốt)`, badge: `${count} từ` };
      return { level: 4, cellClass: "gh-cell-4", label: `${count} từ (Xuất sắc ✨)`, badge: `${count} từ ✨` };
    };

    // Đếm tổng số ngày học thực tế trong năm đang chọn
    let totalActiveDaysInYear = 0;
    Object.keys(wordCountMap).forEach(d => {
      if (d.startsWith(`${year}-`) && wordCountMap[d] > 0) totalActiveDaysInYear++;
    });

    // ==================== 1. DỮ LIỆU CHẾ ĐỘ XEM THEO THÁNG (VIEW MODE: 'month') ====================
    const mIndex = (this.selectedHeatmapMonth !== undefined) ? this.selectedHeatmapMonth : now.getMonth();
    const currentMonthName = monthFullNames[mIndex];
    const monthFirstDay = new Date(year, mIndex, 1);
    const monthDayOfWeek = monthFirstDay.getDay();
    const monthLeadingBlanks = (monthDayOfWeek + 6) % 7; // Thứ 2 là 0
    const monthTotalDays = new Date(year, mIndex + 1, 0).getDate();

    let focusedMonthActiveDays = 0;
    let focusedMonthTotalWords = 0;
    let monthDayCellsHtml = "";

    for (let b = 0; b < monthLeadingBlanks; b++) {
      monthDayCellsHtml += `<div class="aspect-square opacity-0 pointer-events-none"></div>`;
    }

    for (let day = 1; day <= monthTotalDays; day++) {
      const dateStr = `${year}-${String(mIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isToday = dateStr === todayStr;
      const isFuture = dateStr > todayStr;
      const count = wordCountMap[dateStr] || 0;
      const info = getDisciplineLevel(count, isFuture);

      if (count > 0) {
        focusedMonthActiveDays++;
        focusedMonthTotalWords += count;
      }

      const todayRing = isToday 
        ? 'ring-2 ring-amber-400/90 ring-offset-2 ring-offset-[#0b1120] shadow-md shadow-amber-400/20' 
        : '';

      const textColor = count > 0 
        ? 'text-white font-bold' 
        : (isToday ? 'text-amber-300 font-bold' : 'text-slate-400 font-semibold');

      monthDayCellsHtml += `
        <div 
          class="aspect-square rounded-xl sm:rounded-2xl transition-all duration-150 cursor-pointer ${info.cellClass} ${todayRing} hover:scale-105 active:scale-95 flex items-center justify-center p-1 relative select-none"
          data-date="${dateStr}"
          data-dayname="Ngày ${day}/${mIndex + 1}"
          data-count="${count}"
          data-label="${info.label}"
          data-badge="${info.badge}"
          title="${day}/${mIndex + 1}: ${count > 0 ? count + ' từ' : '0 từ'}"
        >
          <span class="text-sm sm:text-base ${textColor}">${day}</span>
        </div>
      `;
    }

    const monthlyConsistencyRate = Math.round((focusedMonthActiveDays / monthTotalDays) * 100);

    // ==================== 2. DỮ LIỆU CHẾ ĐỘ XEM CẢ NĂM (12 THÁNG DẠNG LƯỚI 2 CỘT MOBILE) ====================
    const monthsHtml = monthFullNames.map((mName, idx) => {
      const firstDay = new Date(year, idx, 1);
      const dayOfWeek = firstDay.getDay();
      const leadingBlanks = (dayOfWeek + 6) % 7;
      const totalDays = new Date(year, idx + 1, 0).getDate();

      let monthActiveDays = 0;
      let cellsHtml = "";

      for (let b = 0; b < leadingBlanks; b++) {
        cellsHtml += `<div class="aspect-square opacity-0 pointer-events-none"></div>`;
      }

      for (let day = 1; day <= totalDays; day++) {
        const dateStr = `${year}-${String(idx + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const isToday = dateStr === todayStr;
        const isFuture = dateStr > todayStr;
        const count = wordCountMap[dateStr] || 0;
        const info = getDisciplineLevel(count, isFuture);

        if (count > 0) monthActiveDays++;

        const todayRing = isToday ? 'ring-1 ring-amber-400' : '';

        const textColor = count > 0 
          ? 'text-white font-bold' 
          : (isToday ? 'text-amber-300 font-bold' : 'text-slate-400/80 font-medium');

        cellsHtml += `
          <div 
            class="aspect-square rounded-sm sm:rounded-md transition-all duration-100 cursor-pointer ${info.cellClass} ${todayRing} hover:scale-110 active:scale-95 flex items-center justify-center text-[9px] sm:text-[10px] select-none ${textColor}"
            data-date="${dateStr}"
            data-dayname="Ngày ${day}/${idx + 1}"
            data-count="${count}"
            data-label="${info.label}"
            data-badge="${info.badge}"
            title="${day}/${idx + 1}: ${count > 0 ? count + ' từ' : '0 từ'}"
          >${day}</div>
        `;
      }

      return `
        <div id="month-card-${idx + 1}" class="gh-card p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-sm flex flex-col scroll-mt-20">
          <div class="flex items-center justify-between mb-1.5">
            <button type="button" data-zoom-month="${idx}" class="btn-zoom-month text-xs font-bold text-slate-200 hover:text-indigo-400 transition-colors" title="Bấm để xem chi tiết ${mName}">
              ${mName}
            </button>
          </div>
          
          <div class="grid grid-cols-7 gap-0.5 sm:gap-1 text-center text-[7px] sm:text-[8px] font-bold mb-1 text-slate-400 select-none">
            <span>T2</span><span>T3</span><span>T4</span><span>T5</span><span>T6</span><span class="text-blue-400">T7</span><span class="text-rose-400">CN</span>
          </div>

          <div class="grid grid-cols-7 gap-0.5 sm:gap-1 flex-1 items-start">
            ${cellsHtml}
          </div>
        </div>
      `;
    }).join('');

    // ==================== 1.5 DỮ LIỆU BIỂU ĐỒ KẾT HỢP (COMBO LINE + BAR CHART) ====================
    const lineRangeMode = this.analyticsLineRangeMode || 'week'; // 'week' (cả tuần này) | 'month' (từ đầu tháng tới giờ)
    const lineDays = [];
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

    if (lineRangeMode === 'week') {
      // Option 1: "Tuần" -> Hiển thị kết quả của cả tuần này (Thứ Hai -> Chủ Nhật)
      const currentDayOfWeek = now.getDay(); // 0: CN, 1: T2, ..., 6: T7
      const diffToMonday = (currentDayOfWeek === 0 ? -6 : 1 - currentDayOfWeek);
      const monday = new Date(now.getFullYear(), now.getMonth(), now.getDate() + diffToMonday);
      const weekShortLabels = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

      for (let i = 0; i < 7; i++) {
        const d = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + i);
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        const dStr = `${yyyy}-${mm}-${dd}`;
        const dTime = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
        const isFuture = dTime > todayStart;
        const isToday = (dTime === todayStart);
        const count = isFuture ? 0 : (wordCountMap[dStr] || 0);
        const studySec = isFuture ? 0 : appState.getDailyStudyTime(dStr, count);
        const studyMin = Math.round((studySec / 60) * 10) / 10;

        lineDays.push({
          dateStr: dStr,
          day: d.getDate(),
          month: d.getMonth() + 1,
          dayOfWeek: dayNames[d.getDay()],
          shortDay: weekShortLabels[i],
          count: count,
          studySeconds: studySec,
          studyMinutes: studyMin,
          isToday: isToday,
          isFuture: isFuture
        });
      }
    } else {
      // Option 2: "Tháng" -> Hiển thị kết quả từ đầu tháng tới giờ (Ngày 1 -> Hôm nay)
      const todayDate = now.getDate();
      for (let day = 1; day <= todayDate; day++) {
        const d = new Date(now.getFullYear(), now.getMonth(), day);
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        const dStr = `${yyyy}-${mm}-${dd}`;
        const dTime = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
        const isToday = (dTime === todayStart);
        const count = wordCountMap[dStr] || 0;
        const studySec = appState.getDailyStudyTime(dStr, count);
        const studyMin = Math.round((studySec / 60) * 10) / 10;

        lineDays.push({
          dateStr: dStr,
          day: day,
          month: d.getMonth() + 1,
          dayOfWeek: dayNames[d.getDay()],
          shortDay: `${day}/${d.getMonth() + 1}`,
          count: count,
          studySeconds: studySec,
          studyMinutes: studyMin,
          isToday: isToday,
          isFuture: false
        });
      }
    }

    const elapsedDays = lineDays.filter(d => !d.isFuture);
    const lineTotalWords = elapsedDays.reduce((acc, cur) => acc + cur.count, 0);
    const lineAvgWords = elapsedDays.length > 0 ? (lineTotalWords / elapsedDays.length).toFixed(1) : 0;
    const linePassedDays = elapsedDays.filter(d => d.count >= 10).length;
    const maxDayCount = Math.max(...elapsedDays.map(d => d.count), 10);
    // Để đường biểu đồ có khoảng thở phía trên
    const chartYMax = Math.ceil((maxDayCount * 1.3) / 5) * 5;

    // Tính toán thời gian học tập & hiệu suất
    const lineTotalStudySeconds = elapsedDays.reduce((acc, cur) => acc + cur.studySeconds, 0);
    const lineTotalStudyMinutes = Math.round(lineTotalStudySeconds / 60);
    const maxDayMinutes = Math.max(...elapsedDays.map(d => d.studyMinutes), 15);
    const chartYTimeMax = Math.max(15, Math.ceil((maxDayMinutes * 1.3) / 5) * 5);

    const avgSpeedPerWord = lineTotalWords > 0 
      ? Math.round(lineTotalStudySeconds / lineTotalWords) 
      : 0;

    let overallEfficiency = {
      rating: "Chưa học",
      label: "Chưa có dữ liệu",
      color: "text-slate-400",
      bg: "bg-slate-50 dark:bg-slate-800/50"
    };

    if (lineTotalWords > 0) {
      if (avgSpeedPerWord < 45) {
        overallEfficiency = {
          rating: "Xuất sắc",
          label: "⚡ Siêu tốc & Phản xạ cao",
          color: "text-emerald-500",
          bg: "bg-emerald-500/10 border border-emerald-500/25"
        };
      } else if (avgSpeedPerWord <= 75) {
        overallEfficiency = {
          rating: "Tối ưu",
          label: "🎯 Chuẩn mực kỷ luật",
          color: "text-indigo-500 dark:text-indigo-400",
          bg: "bg-indigo-500/10 border border-indigo-500/25"
        };
      } else if (avgSpeedPerWord <= 120) {
        overallEfficiency = {
          rating: "Khá",
          label: "⏳ Cần tăng tốc độ",
          color: "text-amber-500",
          bg: "bg-amber-500/10 border border-amber-500/25"
        };
      } else {
        overallEfficiency = {
          rating: "Xao nhãng",
          label: "⚠️ Cần tập trung hơn",
          color: "text-rose-500",
          bg: "bg-rose-500/10 border border-rose-500/25"
        };
      }
    }

    // Kích thước SVG
    const svgW = 620;
    const svgH = 180;
    const padL = 36;
    const padR = 38; // Chừa khoảng trống cho trục thời gian (phút) bên phải
    const padT = 22;
    const padB = 28;
    const plotW = svgW - padL - padR;
    const plotH = svgH - padT - padB;

    const totalPoints = lineDays.length;
    const getX = (index) => {
      if (totalPoints <= 1) return padL + (plotW / 2);
      return padL + (index * (plotW / (totalPoints - 1)));
    };
    const getY = (val) => padT + plotH - ((val / chartYMax) * plotH);
    const getBarHeight = (minVal) => Math.max(0, (minVal / chartYTimeMax) * plotH);

    const points = lineDays.map((d, idx) => ({
      x: Math.round(getX(idx) * 10) / 10,
      y: Math.round(getY(d.count) * 10) / 10,
      barH: Math.round(getBarHeight(d.studyMinutes) * 10) / 10,
      ...d
    }));

    // Cột Bar Chart thời gian
    const barWidth = lineRangeMode === 'week' ? 24 : Math.max(6, Math.min(14, (plotW / totalPoints) * 0.48));
    const barsHtml = points.map(p => {
      if (p.isFuture || p.studyMinutes <= 0) return '';
      const barX = Math.round((p.x - (barWidth / 2)) * 10) / 10;
      const barY = Math.round((padT + plotH - p.barH) * 10) / 10;
      const speedSec = p.count > 0 ? Math.round(p.studySeconds / p.count) : 0;
      const isSlow = p.count > 0 && speedSec > 120;
      const fillAttr = isSlow ? 'url(#vocabBarSlowGrad)' : 'url(#vocabBarGrad)';
      return `
        <rect x="${barX}" y="${barY}" width="${barWidth}" height="${p.barH}" rx="4" fill="${fillAttr}" class="transition-all duration-300 pointer-events-none opacity-80" />
      `;
    }).join('');

    let polylineStr = '';
    let areaStr = '';

    if (points.length === 1) {
      const p = points[0];
      polylineStr = `${padL},${p.y} ${padL + plotW},${p.y}`;
      areaStr = `${padL},${padT + plotH} ${padL},${p.y} ${padL + plotW},${p.y} ${padL + plotW},${padT + plotH}`;
    } else {
      polylineStr = points.map(p => `${p.x},${p.y}`).join(' ');
      areaStr = `${points[0].x},${padT + plotH} ${polylineStr} ${points[points.length - 1].x},${padT + plotH}`;
    }

    // Y Grid lines (0, 10, và chartYMax nếu chartYMax > 15)
    const gridYValues = [0, 10];
    if (chartYMax > 15) {
      gridYValues.push(chartYMax);
    }

    const yGridHtml = gridYValues.map(val => {
      const yPos = getY(val);
      const isTarget = val === 10;
      return `
        <line x1="${padL}" y1="${yPos}" x2="${svgW - padR}" y2="${yPos}" stroke="${isTarget ? '#10b981' : 'currentColor'}" stroke-opacity="${isTarget ? '0.4' : '0.1'}" stroke-dasharray="${isTarget ? '4 4' : 'none'}" stroke-width="${isTarget ? '1.5' : '1'}" />
        <text x="${padL - 6}" y="${yPos + 3.5}" text-anchor="end" font-size="9" fill="${isTarget ? '#10b981' : 'currentColor'}" class="${isTarget ? 'font-bold' : 'opacity-60'} select-none">${val}</text>
      `;
    }).join('');

    // Trục thời gian bên phải (Minutes)
    const gridTimeValues = [0, Math.round(chartYTimeMax / 2), chartYTimeMax];
    const rightAxisHtml = gridTimeValues.map(val => {
      const yPos = getY(0) - ((val / chartYTimeMax) * plotH);
      return `
        <text x="${svgW - padR + 6}" y="${yPos + 3.5}" text-anchor="start" font-size="8.5" fill="#818cf8" class="font-bold opacity-80 select-none">${val}p</text>
      `;
    }).join('');

    const dotsHtml = points.map((p, idx) => {
      const isPassed = p.count >= 10;
      let dotFill = isPassed ? '#10b981' : (p.count > 0 ? '#6366f1' : '#64748b');
      let radius = p.isToday ? 4.5 : 3.5;
      let strokeW = p.isToday ? 2.5 : 1.5;
      let strokeColor = p.isToday ? '#f59e0b' : '#0f172a';
      let opacity = '1';

      if (p.isFuture) {
        dotFill = '#334155';
        radius = 2.5;
        strokeW = 1;
        strokeColor = '#1e293b';
        opacity = '0.45';
      }

      let tooltipText = '';
      if (p.isFuture) {
        tooltipText = `${p.dayOfWeek}, ${p.day}/${p.month}: Chưa diễn ra`;
      } else if (p.count === 0 && p.studyMinutes === 0) {
        tooltipText = `${p.dayOfWeek}, ${p.day}/${p.month}: Chưa có phiên học`;
      } else {
        const speedSec = p.count > 0 ? Math.round(p.studySeconds / p.count) : 0;
        const speedEval = speedSec === 0 ? '' : (speedSec < 45 ? ' • ⚡ Siêu tốc' : (speedSec <= 75 ? ' • 🎯 Tối ưu' : (speedSec <= 120 ? ' • ⏳ Khá' : ' • ⚠️ Xao nhãng')));
        tooltipText = `${p.dayOfWeek}, ${p.day}/${p.month}: ${p.count} từ • ${p.studyMinutes}p (${speedSec}s/từ${speedEval})`;
      }

      const touchWidth = Math.max(22, barWidth + 6);
      return `
        <g class="chart-point-group cursor-pointer" data-idx="${idx}" data-x="${p.x}" data-y="${p.y}" data-tooltip="${tooltipText}" opacity="${opacity}">
          <title>${tooltipText}</title>
          <rect x="${p.x - (touchWidth / 2)}" y="${padT}" width="${touchWidth}" height="${plotH}" fill="transparent" />
          <circle cx="${p.x}" cy="${p.y}" r="${radius}" fill="${dotFill}" stroke="${strokeColor}" stroke-width="${strokeW}" class="transition-transform duration-150 pointer-events-none" />
        </g>
      `;
    }).join('');

    const xLabelsHtml = points.map((p, idx) => {
      let showLabel = false;
      let text = '';

      if (lineRangeMode === 'week') {
        // Chế độ Tuần: Hiển thị đủ 7 ngày T2 -> CN
        showLabel = true;
        text = p.isToday ? `${p.shortDay} (Nay)` : p.shortDay;
      } else {
        // Chế độ Tháng: Hiển thị mốc ngày 1, các mốc cách 5 ngày, và Hôm nay
        const totalDays = points.length;
        if (totalDays <= 8) {
          showLabel = true;
          text = p.isToday ? 'Nay' : `${p.day}/${p.month}`;
        } else {
          const isFirst = (idx === 0);
          const isEvery5 = (p.day % 5 === 0);
          const isToday = p.isToday;
          const nearToday = Math.abs(p.day - now.getDate()) <= 1;

          if (isFirst || isToday || (isEvery5 && !nearToday)) {
            showLabel = true;
            text = isToday ? 'Nay' : `${p.day}/${p.month}`;
          }
        }
      }

      if (!showLabel) return '';
      const textClass = p.isToday ? 'font-black fill-amber-500' : (p.isFuture ? 'font-normal fill-slate-500' : 'font-medium fill-slate-400');
      return `<text x="${p.x}" y="${svgH - 8}" text-anchor="middle" font-size="9" class="${textClass} select-none">${text}</text>`;
    }).join('');

    // ==================== RENDER FULL PAGE HTML ====================
    container.innerHTML = `
      <div class="space-y-4 sm:space-y-5 animate-fade-in w-full max-w-5xl mx-auto">
        


        <!-- 1. DISCIPLINE HERO BANNER (Dành riêng cho Kỷ Luật & Thói Quen) -->
        <div class="rounded-2xl sm:rounded-3xl p-4 sm:p-5 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white border border-slate-800 shadow-xl relative overflow-hidden">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div class="inline-flex items-center space-x-1.5 px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[11px] font-bold text-emerald-400 mb-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Bản Đồ Kỷ Luật 365 Ngày</span>
              </div>
              <h1 class="text-xl sm:text-2xl font-black text-white tracking-tight">
                Bảng Nhiệt Kỷ Luật
              </h1>
              <p class="text-xs text-slate-400 mt-0.5">
                Mỗi ô màu xanh ghi dấu một ngày bạn kiên trì nạp từ vựng và rèn luyện phản xạ.
              </p>
            </div>

            <!-- Action Controls (Year Switcher) -->
            <div class="flex items-center space-x-1.5 sm:space-x-2 self-start sm:self-center shrink-0">
              <!-- Year Switcher -->
              <div class="inline-flex items-center space-x-1 px-2.5 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs font-bold">
                <button id="btn-heatmap-prev-year" class="px-1 hover:text-emerald-400 transition-colors" title="Năm trước">◀</button>
                <span class="px-1.5 text-emerald-400 font-black">${year}</span>
                <button id="btn-heatmap-next-year" class="px-1 hover:text-emerald-400 transition-colors" title="Năm sau">▶</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Cảnh báo chưa có dữ liệu trên thiết bị -->
        ${(totalActiveDaysInYear === 0 && (appState.state.learnedWords || []).length === 0) ? `
          <div class="rounded-2xl p-4 bg-gradient-to-r from-amber-500/15 via-indigo-500/15 to-blue-500/15 border border-amber-500/35 dark:border-amber-400/30 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-slate-800 dark:text-slate-200">
            <div class="flex items-start space-x-3">
              <span class="text-3xl shrink-0">📱🔒</span>
              <div class="text-xs space-y-1">
                <p class="font-bold text-sm text-amber-700 dark:text-amber-400">Chưa tải được dữ liệu học tập về điện thoại?</p>
                <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Tài khoản: <b class="text-slate-900 dark:text-white">${appState.state.user.email || appState.state.user.displayName || "Google"}</b>.
                  Do chính sách bảo mật, Cloud Firestore yêu cầu xác thực Google trên thiết bị này để mở khóa <b>51 từ vựng</b> bạn đã nạp từ máy tính.
                </p>
                <p class="text-[11px] text-slate-500 dark:text-slate-400">
                  💡 <i>Bấm nút <b>Đăng nhập Google để đồng bộ</b> bên cạnh để đồng bộ tự động dữ liệu từ Cloud về máy này.</i>
                </p>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0">
              <button id="btn-analytics-login-sync" type="button" class="cursor-pointer px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:scale-95 text-white font-bold text-xs shadow-md shadow-indigo-500/30 transition-all flex items-center justify-center space-x-2">
                <svg class="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Đăng nhập Google để đồng bộ</span>
              </button>
            </div>
          </div>
        ` : ''}

        <!-- 2. 4 THẺ CHỈ SỐ KỶ LUẬT & CHUYÊN CẦN -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-center">
          <div class="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs flex flex-col justify-center">
            <div class="text-xl sm:text-2xl">🔥</div>
            <div class="text-base sm:text-lg font-black text-amber-500 mt-0.5">${streak} ngày</div>
            <div class="text-[11px] text-slate-500 dark:text-slate-400">Chuỗi hiện tại</div>
          </div>

          <div class="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs flex flex-col justify-center">
            <div class="text-xl sm:text-2xl">📅</div>
            <div class="text-base sm:text-lg font-black text-emerald-500 mt-0.5">${totalActiveDaysInYear} ngày</div>
            <div class="text-[11px] text-slate-500 dark:text-slate-400">Ngày học năm ${year}</div>
          </div>

          <div class="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs flex flex-col justify-center">
            <div class="text-xl sm:text-2xl">🎯</div>
            <div class="text-base sm:text-lg font-black text-indigo-500 mt-0.5">${focusedMonthActiveDays}/${monthTotalDays} ngày</div>
            <div class="text-[11px] text-slate-500 dark:text-slate-400">${currentMonthName} (${monthlyConsistencyRate}%)</div>
          </div>

          <div class="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs flex flex-col justify-center">
            <div class="text-xl sm:text-2xl">🏆</div>
            <div class="text-base sm:text-lg font-black text-amber-500 dark:text-amber-400 mt-0.5">${maxStreak} ngày</div>
            <div class="text-[11px] text-slate-500 dark:text-slate-400">Chuỗi dài nhất</div>
          </div>
        </div>

        <!-- 2.5 📈 BIỂU ĐỒ ĐƯỜNG TIẾN ĐỘ NẠP TỪ & THỜI GIAN HỌC (COMBO CHART) -->
        <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-3">
          <!-- Chart Header -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div>
              <div class="flex items-center space-x-2">
                <span class="text-base sm:text-lg">📈</span>
                <h3 class="text-sm sm:text-base font-black text-slate-800 dark:text-white">
                  Tiến Độ Nạp Từ & Thời Gian Học
                </h3>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${todayCount >= 10 ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-500 border border-amber-500/20'}">
                  Hôm nay: ${todayCount}/10 từ ${todayCount >= 10 ? '✅' : '⏳'}
                </span>
              </div>
              <!-- Chú thích 2 trục (Legend) -->
              <div class="flex flex-wrap items-center gap-x-3.5 gap-y-1 text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                <span class="inline-flex items-center space-x-1.5">
                  <span class="w-3.5 h-1 rounded-full bg-emerald-500 inline-block"></span>
                  <span class="font-medium text-slate-600 dark:text-slate-300">Từ vựng (Trục trái)</span>
                </span>
                <span class="inline-flex items-center space-x-1.5">
                  <span class="w-2.5 h-2.5 rounded-[3px] bg-indigo-500/80 inline-block"></span>
                  <span class="font-medium text-slate-600 dark:text-slate-300">Thời gian (Trục phải)</span>
                </span>
              </div>
            </div>

            <!-- Range Filter Buttons (Tuần | Tháng) -->
            <div class="flex items-center space-x-1 p-1 bg-slate-100 dark:bg-white/5 rounded-xl text-xs font-bold self-start sm:self-auto border border-slate-200 dark:border-white/10 shrink-0">
              <button class="btn-line-range px-3 py-1 rounded-lg transition-all ${lineRangeMode === 'week' ? 'bg-emerald-500 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}" data-range="week">Tuần</button>
              <button class="btn-line-range px-3 py-1 rounded-lg transition-all ${lineRangeMode === 'month' ? 'bg-emerald-500 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}" data-range="month">Tháng</button>
            </div>
          </div>

          <!-- SVG Chart Area -->
          <div class="relative w-full overflow-hidden text-slate-400">
            <svg id="vocab-line-chart-svg" viewBox="0 0 ${svgW} ${svgH}" class="w-full h-40 sm:h-48 overflow-visible">
              <defs>
                <linearGradient id="vocabLineAreaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#10b981" stop-opacity="0.32" />
                  <stop offset="85%" stop-color="#10b981" stop-opacity="0.03" />
                  <stop offset="100%" stop-color="#10b981" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="vocabLineStrokeGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="#059669" />
                  <stop offset="50%" stop-color="#10b981" />
                  <stop offset="100%" stop-color="#34d399" />
                </linearGradient>
                <!-- Gradient cột thời gian học (Soft Indigo) -->
                <linearGradient id="vocabBarGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#818cf8" stop-opacity="0.85" />
                  <stop offset="100%" stop-color="#6366f1" stop-opacity="0.3" />
                </linearGradient>
                <!-- Gradient cảnh báo thời gian kéo dài / xao nhãng (Amber) -->
                <linearGradient id="vocabBarSlowGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.85" />
                  <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.3" />
                </linearGradient>
              </defs>

              <!-- Y Grid Lines (Từ vựng - Trục trái) -->
              ${yGridHtml}

              <!-- Y Axis Labels (Thời gian phút - Trục phải) -->
              ${rightAxisHtml}

              <!-- Bar Chart Cột thời gian học tập -->
              ${barsHtml}

              <!-- Gradient Area under curve -->
              <polygon points="${areaStr}" fill="url(#vocabLineAreaGrad)" />

              <!-- Polyline Line -->
              <polyline points="${polylineStr}" fill="none" stroke="url(#vocabLineStrokeGrad)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />

              <!-- Data Dots -->
              ${dotsHtml}

              <!-- X Axis Labels -->
              ${xLabelsHtml}

              <!-- Floating Tooltip on Hover / Touch -->
              <g id="chart-floating-tooltip" class="pointer-events-none opacity-0 transition-opacity duration-150" transform="translate(0, 0)">
                <rect x="-115" y="-30" width="230" height="22" rx="6" fill="#0f172a" stroke="#334155" stroke-width="1" />
                <polygon points="0,-8 -4,-4 4,-4" fill="#0f172a" />
                <text id="chart-tooltip-text" x="0" y="-15" text-anchor="middle" font-size="9" font-weight="bold" fill="#34d399">20 từ • 17/10</text>
              </g>
            </svg>
          </div>

          <!-- Chart Footer Stats: 4 Thẻ Phân Tích Hiệu Suất Học Tập -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2.5 border-t border-slate-100 dark:border-white/10 text-center text-[11px]">
            <div class="p-2 sm:p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
              <span class="text-slate-400 block text-[10px]">Tổng nạp từ</span>
              <strong class="font-black text-emerald-500 text-xs sm:text-sm">${lineTotalWords} từ</strong>
            </div>
            <div class="p-2 sm:p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
              <span class="text-slate-400 block text-[10px]">Tổng thời gian</span>
              <strong class="font-black text-indigo-500 dark:text-indigo-400 text-xs sm:text-sm">${lineTotalStudyMinutes} phút</strong>
            </div>
            <div class="p-2 sm:p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
              <span class="text-slate-400 block text-[10px]">Tốc độ phản xạ</span>
              <strong class="font-black text-slate-700 dark:text-slate-200 text-xs sm:text-sm">${avgSpeedPerWord > 0 ? `${avgSpeedPerWord}s / từ` : '—'}</strong>
            </div>
            <div class="p-2 sm:p-2.5 rounded-xl ${overallEfficiency.bg} flex flex-col justify-center">
              <span class="text-slate-400 block text-[10px]">Đánh giá hiệu suất</span>
              <strong class="font-black text-[11px] sm:text-xs ${overallEfficiency.color}">${overallEfficiency.label}</strong>
            </div>
          </div>
        </div>

        <!-- 3. 🌟 BẢNG NHIỆT HOẠT ĐỘNG (HEATMAP) 🌟 -->
        <div class="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#0b1120] text-white border border-[#1e293b] shadow-xl space-y-4">
          
          <!-- View Mode Switcher: 2 Nút (Theo Tháng & Cả Năm) -->
          <div class="grid grid-cols-2 p-1 rounded-xl bg-white/5 border border-white/10 text-xs font-bold">
            <button id="btn-view-month" class="py-2 px-3 rounded-lg text-center transition-all ${this.analyticsViewMode === 'month' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}">
              📅 Theo Tháng
            </button>
            <button id="btn-view-12months" class="py-2 px-3 rounded-lg text-center transition-all ${this.analyticsViewMode === '12months' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}">
              🗺️ Cả Năm
            </button>
          </div>



          <!-- DYNAMIC CONTENT THEO CHẾ ĐỘ XEM -->
          ${this.analyticsViewMode === 'month' ? `
            <!-- CHẾ ĐỘ 1: THEO THÁNG (TO RÕ, GỌN GÀNG, CHUẨN MOBILE) -->
            <div class="space-y-3">
              <!-- Month Navigator -->
              <div class="flex items-center justify-between gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10">
                <button id="btn-prev-month" class="px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-90 text-slate-300 hover:text-white font-bold text-xs transition-all flex items-center space-x-1" title="Tháng trước">
                  <span>‹</span>
                  <span class="hidden sm:inline">Trước</span>
                </button>
                <div class="text-center">
                  <div class="text-sm sm:text-base font-black text-white">
                    ${currentMonthName}, ${year}
                  </div>
                  <div class="text-[10px] sm:text-[11px] font-semibold text-emerald-400">
                    ${focusedMonthActiveDays > 0 ? `${focusedMonthActiveDays}/${monthTotalDays} ngày học • ${focusedMonthTotalWords} từ đã nạp` : 'Chưa có hoạt động trong tháng này'}
                  </div>
                </div>
                <button id="btn-next-month" class="px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-90 text-slate-300 hover:text-white font-bold text-xs transition-all flex items-center space-x-1" title="Tháng sau">
                  <span class="hidden sm:inline">Sau</span>
                  <span>›</span>
                </button>
              </div>

              <!-- Month Grid (To, đẹp, dễ chạm) -->
              <div class="p-3 sm:p-4 rounded-2xl bg-[#111a2e] border border-white/10 shadow-lg">
                <div class="grid grid-cols-7 gap-1 sm:gap-2 text-center text-xs font-bold text-slate-400 mb-2 select-none">
                  <span>T2</span><span>T3</span><span>T4</span><span>T5</span><span>T6</span><span class="text-blue-400">T7</span><span class="text-rose-400">CN</span>
                </div>
                <div class="grid grid-cols-7 gap-1 sm:gap-2">
                  ${monthDayCellsHtml}
                </div>
              </div>
            </div>
          ` : `
            <!-- CHẾ ĐỘ 2: CẢ NĂM (LƯỚI 12 THÁNG GỌN GÀNG TRÊN MOBILE) -->
            <div class="space-y-3">
              <div class="flex items-center justify-between text-xs text-slate-400 px-1">
                <span>Toàn cảnh 12 tháng năm ${year}</span>
              </div>
              <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                ${monthsHtml}
              </div>
            </div>
          `}

          <!-- Legend Bar (Thang màu mức độ hoàn thành - Chỉ hiển thị thông tin khi hover) -->
          <div class="flex items-center justify-between gap-2 pt-2.5 border-t border-white/10 text-[11px] select-none min-h-[30px]">
            <div class="flex items-center min-w-0 pr-1 h-5">
              <span id="legend-dynamic-info" class="text-[11px] font-bold text-slate-300 transition-all duration-150 truncate"></span>
            </div>

            <div id="legend-cells-group" class="flex items-center space-x-1.5 text-[10px] shrink-0">
              <span class="text-slate-500 font-medium">Ít</span>
              <div class="legend-cell w-4 h-4 rounded-[4px] gh-cell-0 cursor-pointer transition-all duration-150 hover:scale-125 hover:ring-2 hover:ring-white/40 active:scale-95" 
                   data-text="0 từ" 
                   data-level="0"
                   title="0 từ"></div>
              <div class="legend-cell w-4 h-4 rounded-[4px] gh-cell-1 cursor-pointer transition-all duration-150 hover:scale-125 hover:ring-2 hover:ring-emerald-300/60 active:scale-95" 
                   data-text="1–10 từ (Đạt chuẩn)" 
                   data-level="1"
                   title="1–10 từ"></div>
              <div class="legend-cell w-4 h-4 rounded-[4px] gh-cell-2 cursor-pointer transition-all duration-150 hover:scale-125 hover:ring-2 hover:ring-emerald-300/70 active:scale-95" 
                   data-text="11–20 từ (Khá)" 
                   data-level="2"
                   title="11–20 từ"></div>
              <div class="legend-cell w-4 h-4 rounded-[4px] gh-cell-3 cursor-pointer transition-all duration-150 hover:scale-125 hover:ring-2 hover:ring-emerald-300/80 active:scale-95" 
                   data-text="21–30 từ (Tốt)" 
                   data-level="3"
                   title="21–30 từ"></div>
              <div class="legend-cell w-4 h-4 rounded-[4px] gh-cell-4 cursor-pointer transition-all duration-150 hover:scale-125 hover:ring-2 hover:ring-white/80 active:scale-95" 
                   data-text=">30 từ (Xuất sắc ✨)" 
                   data-level="4"
                   title=">30 từ"></div>
              <span class="text-slate-500 font-medium">Nhiều</span>
            </div>
          </div>
        </div>


        <!-- 5. FOOTER: Đánh giá lại Level (nếu là user đã đăng nhập) -->
        ${appState.state.cefrLevel ? `
          <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 text-xs flex items-center justify-between">
            <span>Cần đánh giá lại trình độ xuất phát CEFR?</span>
            <button id="btn-retake-from-analytics" class="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
              Làm lại Placement Test
            </button>
          </div>
        ` : ''}

      </div>
    `;

    // ==================== EVENT LISTENERS ====================
    // Line Chart: Bộ lọc khoảng ngày (Tuần / Tháng)
    container.querySelectorAll('.btn-line-range').forEach(btn => {
      btn.addEventListener('click', () => {
        this.analyticsLineRangeMode = btn.getAttribute('data-range') || 'week';
        this.renderAnalyticsPage(container);
      });
    });

    // Line Chart: Hiển thị tooltip nổi tinh gọn khi chạm/rê chuột vào các điểm dữ liệu
    const floatingTooltip = container.querySelector('#chart-floating-tooltip');
    const tooltipText = container.querySelector('#chart-tooltip-text');
    const chartSvg = container.querySelector('#vocab-line-chart-svg');

    container.querySelectorAll('.chart-point-group').forEach(grp => {
      const showTooltip = () => {
        const x = Number(grp.getAttribute('data-x'));
        const y = Number(grp.getAttribute('data-y'));
        const text = grp.getAttribute('data-tooltip');
        if (floatingTooltip && tooltipText) {
          tooltipText.textContent = text;
          const clampedX = Math.max(120, Math.min(svgW - 120, x));
          const clampedY = Math.max(34, y);
          floatingTooltip.setAttribute('transform', `translate(${clampedX}, ${clampedY})`);
          floatingTooltip.classList.remove('opacity-0');
          floatingTooltip.classList.add('opacity-100');
        }
      };

      const hideTooltip = () => {
        if (floatingTooltip) {
          floatingTooltip.classList.add('opacity-0');
          floatingTooltip.classList.remove('opacity-100');
        }
      };

      grp.addEventListener('mouseenter', showTooltip);
      grp.addEventListener('mouseleave', hideTooltip);
      grp.addEventListener('click', showTooltip);
      grp.addEventListener('touchstart', showTooltip, { passive: true });
    });

    chartSvg?.addEventListener('mouseleave', () => {
      if (floatingTooltip) {
        floatingTooltip.classList.add('opacity-0');
        floatingTooltip.classList.remove('opacity-100');
      }
    });

    // Đăng nhập từ banner Guest
    container.querySelector('#btn-login-from-analytics-banner')?.addEventListener('click', () => {
      this.handleAuthClick();
    });

    // Chuyển Chế Độ Xem (Month, 12months)
    container.querySelector('#btn-view-month')?.addEventListener('click', () => {
      this.analyticsViewMode = 'month';
      this.renderAnalyticsPage(container);
    });

    container.querySelector('#btn-view-12months')?.addEventListener('click', () => {
      this.analyticsViewMode = '12months';
      this.renderAnalyticsPage(container);
    });

    // Chuyển năm
    container.querySelector('#btn-heatmap-prev-year')?.addEventListener('click', () => {
      this.selectedHeatmapYear = (this.selectedHeatmapYear || new Date().getFullYear()) - 1;
      this.renderAnalyticsPage(container);
    });

    container.querySelector('#btn-heatmap-next-year')?.addEventListener('click', () => {
      this.selectedHeatmapYear = (this.selectedHeatmapYear || new Date().getFullYear()) + 1;
      this.renderAnalyticsPage(container);
    });

    // Chuyển tháng trong chế độ month
    container.querySelector('#btn-prev-month')?.addEventListener('click', () => {
      if (this.selectedHeatmapMonth > 0) {
        this.selectedHeatmapMonth--;
      } else {
        this.selectedHeatmapMonth = 11;
        this.selectedHeatmapYear = (this.selectedHeatmapYear || new Date().getFullYear()) - 1;
      }
      this.renderAnalyticsPage(container);
    });

    container.querySelector('#btn-next-month')?.addEventListener('click', () => {
      if (this.selectedHeatmapMonth < 11) {
        this.selectedHeatmapMonth++;
      } else {
        this.selectedHeatmapMonth = 0;
        this.selectedHeatmapYear = (this.selectedHeatmapYear || new Date().getFullYear()) + 1;
      }
      this.renderAnalyticsPage(container);
    });

    // Zoom từ 12 tháng sang tháng đơn
    container.querySelectorAll('.btn-zoom-month').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedHeatmapMonth = Number(btn.getAttribute('data-zoom-month'));
        this.analyticsViewMode = 'month';
        this.renderAnalyticsPage(container);
      });
    });

    // Tương tác hover / touch cho các ô vuông chú thích (Legend)
    const legendInfoEl = container.querySelector('#legend-dynamic-info');
    let legendClearTimeout = null;

    const clearLegendInfo = () => {
      if (legendClearTimeout) {
        clearTimeout(legendClearTimeout);
        legendClearTimeout = null;
      }
      if (legendInfoEl) {
        legendInfoEl.innerHTML = '';
      }
    };

    // Calendar cells tương tác hiển thị thông tin tinh gọn tại thanh trạng thái
    container.querySelectorAll('[data-date]').forEach(cell => {
      const showCellInfo = () => {
        if (legendClearTimeout) clearTimeout(legendClearTimeout);
        if (window.navigator?.vibrate) window.navigator.vibrate(6);
        const d = cell.getAttribute('data-date');
        const dayName = cell.getAttribute('data-dayname') || '';
        const label = cell.getAttribute('data-label') || '';
        if (legendInfoEl) {
          legendInfoEl.innerHTML = `<span class="text-emerald-400 font-bold">${dayName}:</span> <span class="text-slate-200">${label}</span>`;
        }
      };

      cell.addEventListener('mouseenter', showCellInfo);
      cell.addEventListener('mouseleave', clearLegendInfo);
      cell.addEventListener('click', showCellInfo);
    });

    container.querySelectorAll('.legend-cell').forEach(cell => {
      const showLegendInfo = () => {
        if (legendClearTimeout) clearTimeout(legendClearTimeout);
        if (window.navigator?.vibrate) window.navigator.vibrate(6);
        const text = cell.getAttribute('data-text');
        const level = Number(cell.getAttribute('data-level'));
        if (legendInfoEl && text) {
          const colorClass = level === 4 ? 'text-teal-300' : level >= 2 ? 'text-emerald-300' : level === 1 ? 'text-emerald-400' : 'text-slate-300';
          legendInfoEl.innerHTML = `<span class="text-slate-400 font-semibold mr-1">Mức độ:</span><span class="${colorClass} font-black">${text}</span>`;
        }
      };

      cell.addEventListener('mouseenter', showLegendInfo);
      cell.addEventListener('click', () => {
        showLegendInfo();
        if (legendClearTimeout) clearTimeout(legendClearTimeout);
        legendClearTimeout = setTimeout(clearLegendInfo, 2500);
      });
      cell.addEventListener('touchstart', () => {
        showLegendInfo();
        if (legendClearTimeout) clearTimeout(legendClearTimeout);
        legendClearTimeout = setTimeout(clearLegendInfo, 2500);
      }, { passive: true });
    });

    container.querySelector('#legend-cells-group')?.addEventListener('mouseleave', clearLegendInfo);

    // Làm lại placement test
    container.querySelector('#btn-retake-from-analytics')?.addEventListener('click', () => {
      if (confirm("Bạn có chắc chắn muốn làm lại bài Placement Test? Cấp bậc CEFR sẽ được đánh giá lại.")) {
        this.switchTab("vocab");
        this.startPlacementTest();
      }
    });
  }
}

// Khởi chạy App an toàn (hỗ trợ cả khi DOM đã sẵn sàng trước khi module hoàn tất load)
function bootApp() {
  const app = new App();
  app.init();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootApp);
} else {
  bootApp();
}
