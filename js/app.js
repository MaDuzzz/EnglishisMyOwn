// Trình điều phối chính ứng dụng (App Main Coordinator)
import { appState } from './state.js';
import { initFirebase, authInstance, googleProviderInstance, isFirebaseLive } from './firebase-config.js';
import { PlacementTestEngine } from './placement-test.js';
import { VocabPracticeEngine } from './vocab-engine.js';
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
    this.showDemoHeatmap = false;
    this.analyticsViewMode = "12months"; // "12months" | "52weeks"
    this.isUserMenuOpen = false;
    this.dictionaryFilterState = { level: "all", category: "all", groupId: null };
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

    // Render ngay giao diện lần đầu tiên (không bị trắng màn hình)
    this.bindGlobalEvents();
    this.updateHeaderUI();
    this.switchTab("vocab");

    // Khởi tạo Firebase / Local Fallback trong background
    await initFirebase();
    this.setupAuthListener();
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
    if (isFirebaseLive && authInstance) {
      import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js").then(({ onAuthStateChanged }) => {
        onAuthStateChanged(authInstance, (user) => {
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
              appState.loadVocabGroupsFromFirestore();
            });
          } else {
            appState.setUser(null);
            this.updateHeaderUI();
          }
        });
      });
    }
  }

  bindGlobalEvents() {
    // Chuyển Tab (cả Header và iOS Bottom Tab Bar)
    document.querySelectorAll('.nav-tab-btn, .ios-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        if (window.navigator?.vibrate) window.navigator.vibrate(10);
        this.switchTab(tab);
      });
    });

    // Nút Rank / Progress Bar trên header -> Mở Màn hình Thống Kê & Kỷ Luật
    document.getElementById('btn-retake-placement-header')?.addEventListener('click', () => {
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

      // Đăng nhập Google
      const loginBtn = e.target.closest('#btn-auth-action');
      if (loginBtn) {
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
    if (isFirebaseLive && authInstance && googleProviderInstance) {
      const { signInWithPopup } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js");
      try {
        const res = await signInWithPopup(authInstance, googleProviderInstance);
        await appState.setUser({
          uid: res.user.uid,
          displayName: res.user.displayName,
          email: res.user.email,
          photoURL: res.user.photoURL
        });
        this.updateHeaderUI();
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

  async handleLogout() {
    this.isUserMenuOpen = false;
    if (isFirebaseLive && authInstance) {
      const { signOut } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js");
      await signOut(authInstance);
    }
    appState.clearUser();
    this.updateHeaderUI();
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
                      <span class="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span class="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">Cloud Firestore đồng bộ</span>
                    </div>
                  </div>
                </div>

                <!-- Dropdown Actions -->
                <div class="p-1.5 space-y-1">
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
      } else {
        authContainer.innerHTML = `
          <div class="flex items-center space-x-1.5 sm:space-x-2">
            <button id="btn-header-theme" type="button" class="p-1.5 sm:p-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 transition-colors" title="Chuyển chế độ Sáng / Tối">
              ${isDark 
                ? `<svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`
                : `<svg class="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`
              }
            </button>
            <button id="btn-auth-action" type="button" class="px-3 sm:px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-500/25 transition-all flex items-center space-x-1.5 active:scale-95 shrink-0" title="Đăng nhập Google để đồng bộ dữ liệu Cloud Firestore">
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
  }

  switchTab(tab, options = {}) {
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
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      const t = btn.getAttribute('data-tab');
      if (t === tab) {
        btn.classList.add('bg-indigo-600', 'text-white', 'shadow-md', 'shadow-indigo-500/20');
        btn.classList.remove('text-slate-600', 'dark:text-slate-400', 'hover:bg-slate-100', 'dark:hover:bg-slate-800');
      } else {
        btn.classList.remove('bg-indigo-600', 'text-white', 'shadow-md', 'shadow-indigo-500/20');
        btn.classList.add('text-slate-600', 'dark:text-slate-400', 'hover:bg-slate-100', 'dark:hover:bg-slate-800');
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

    const mainContainer = document.getElementById('main-content-area');
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

  // ==================== VOCABULARY HUB ====================
  renderVocabDashboard() {
    const mainContainer = document.getElementById('main-content-area');
    if (!mainContainer) return;

    // Kiểm tra 1: Yêu cầu đăng nhập Google để đồng bộ Cloud Firestore
    if (!appState.state.user) {
      mainContainer.innerHTML = `
        <div class="flex-1 flex flex-col items-center justify-center w-full py-6 sm:py-10 my-auto animate-fade-in">
          <div class="w-full max-w-md mx-auto p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xl text-center">
            <div class="w-16 h-16 mx-auto rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center text-3xl mb-4 shadow-sm text-indigo-600 dark:text-indigo-400">
              🔐
            </div>
            <h2 class="text-2xl font-black text-slate-900 dark:text-white mb-2">Đăng Nhập Để Bắt Đầu</h2>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
              Hệ thống lưu trữ và đồng bộ hóa toàn bộ tiến độ, cấp bậc CEFR và chuỗi kỷ luật học tập trực tiếp trên <strong>Cloud Firestore</strong>.
            </p>
            <button id="btn-login-vocab-banner" class="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 active:scale-98 transition-all flex items-center justify-center space-x-2.5">
              <svg class="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>Đăng nhập với Google</span>
            </button>
            <button id="btn-guest-explore" type="button" class="mt-4 text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors block mx-auto">
              Hoặc trải nghiệm kiểm tra trình độ & học thử ➔
            </button>
          </div>
        </div>
      `;
      mainContainer.querySelector('#btn-login-vocab-banner')?.addEventListener('click', () => this.handleAuthClick());
      mainContainer.querySelector('#btn-guest-explore')?.addEventListener('click', () => this.startPlacementTest());
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
                  ${discipline.needsReview ? 'Bắt buộc hôm nay' : 'Đã xong hôm nay ✅'}
                </span>
              </div>

              <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                Ôn Tập Kỷ Luật (Day T-1)
              </h4>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 ${discipline.needsReview ? 'line-clamp-2 leading-relaxed' : 'line-clamp-1'}">
                ${discipline.needsReview 
                  ? `Có <strong class="text-amber-600 dark:text-amber-400 font-bold">${discipline.reviewWords.length} từ</strong> cần củng cố qua 3 chế độ (Dịch - Nghe chính tả - Phản xạ nhanh).`
                  : 'Nhiệm vụ ôn tập hôm nay đã xong! Trí nhớ dài hạn được bảo toàn vững chắc.'}
              </p>
            </div>

            <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80">
              ${discipline.needsReview ? `
                <button id="btn-start-review" class="w-full py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-md shadow-orange-500/20 active:scale-[0.98] transition-all flex items-center justify-center space-x-1.5 text-xs sm:text-sm">
                  <span>🚀</span>
                  <span>Bắt đầu Ôn Tập (${discipline.reviewWords.length} từ)</span>
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
          <div class="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border ${discipline.needsReview ? 'border-slate-200/70 dark:border-slate-800/70 opacity-75' : 'border-indigo-400/80 dark:border-indigo-600/80 bg-gradient-to-b from-indigo-500/[0.03] to-transparent ring-2 ring-indigo-500/10'} shadow-sm hover:shadow-md transition-all flex flex-col justify-between w-full">
            <div>
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center space-x-2">
                  <div class="w-7 h-7 rounded-lg ${discipline.needsReview ? 'bg-slate-200 dark:bg-slate-800 text-slate-500' : 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400'} flex items-center justify-center font-bold text-xs">
                    ${discipline.needsReview ? '🔒' : '2'}
                  </div>
                  <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Bước 2</span>
                </div>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${discipline.needsReview ? 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400' : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300'}">
                  ${discipline.needsReview ? 'Đang bị khóa' : 'Sẵn sàng nạp'}
                </span>
              </div>

              <h4 class="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                Nạp Batch 10 Từ Mới (${level})
              </h4>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2 leading-relaxed">
                ${discipline.needsReview 
                  ? 'Quy tắc kỷ luật: Bạn phải hoàn thành Bước 1 (Ôn tập từ hôm trước) để hệ thống mở khóa 10 từ mới.'
                  : 'Nạp thêm 10 từ vựng thực chiến chuẩn CEFR đúng trình độ để đa dạng hoá vốn từ giao tiếp.'}
              </p>
            </div>

            <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80">
              ${discipline.needsReview ? `
                <button disabled class="w-full py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-400 font-bold rounded-xl cursor-not-allowed flex items-center justify-center space-x-2 text-xs sm:text-sm">
                  <span>🔒</span>
                  <span>Hoàn thành Bước 1 để mở khóa</span>
                </button>
              ` : `
                <button id="btn-start-new-batch" class="w-full py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-md shadow-indigo-500/25 active:scale-[0.98] transition-all flex items-center justify-center space-x-1.5 text-xs sm:text-sm">
                  <span>✨</span>
                  <span>Bắt đầu Học 10 Từ Mới</span>
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
        const catBadge = g.category === "daily" 
          ? `<span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">💬 Đời sống</span>`
          : g.category === "marketing"
          ? `<span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">📢 Marketing</span>`
          : g.category === "work"
          ? `<span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">💼 Công sở</span>`
          : `<span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">💻 Công nghệ</span>`;

        const groupWords = g.words || [];
        const learnedInGroup = groupWords.filter(w => learnedWordIds.has(w.id)).length;
        const percentInGroup = groupWords.length ? Math.round((learnedInGroup / groupWords.length) * 100) : 0;

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
                <button data-group-id="${g.groupId}" class="btn-group-practice px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm active:scale-95 transition-all flex items-center space-x-1" title="Luyện tập phản xạ">
                  <span>⚡ Luyện</span>
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

      // Gắn sự kiện Luyện tập riêng nhóm này
      grid.querySelectorAll('.btn-group-practice').forEach(btn => {
        btn.addEventListener('click', () => {
          const groupId = btn.getAttribute('data-group-id');
          const grp = groups.find(g => g.groupId === groupId);
          if (grp && grp.words && grp.words.length > 0) {
            this.vocabEngine = new VocabPracticeEngine(mainContainer, {
              mode: "new_batch",
              words: grp.words,
              onCompleted: () => this.renderVocabDashboard()
            });
            this.vocabEngine.start();
          }
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
      const reviewWordIds = new Set(discipline.reviewWords.map(w => w.wordId));
      const fullWordObjects = VOCAB_BANK.filter(w => reviewWordIds.has(w.id));
      this.vocabEngine = new VocabPracticeEngine(mainContainer, {
        mode: "review",
        words: fullWordObjects.length > 0 ? fullWordObjects : VOCAB_BANK.slice(0, 10),
        onCompleted: () => this.renderVocabDashboard()
      });
      this.vocabEngine.start();
    });

    // Gắn sự kiện Học Batch 10 từ mới
    document.getElementById('btn-start-new-batch')?.addEventListener('click', () => {
      const newWords = appState.getNewBatchWords();
      this.vocabEngine = new VocabPracticeEngine(mainContainer, {
        mode: "new_batch",
        words: newWords,
        onCompleted: () => this.renderVocabDashboard()
      });
      this.vocabEngine.start();
    });

    // Gắn sự kiện Xem Phân Tích & Kỷ Luật
    document.getElementById('btn-view-analytics-dash')?.addEventListener('click', () => {
      this.switchTab("analytics");
    });
  }

  startPlacementTest() {
    const mainContainer = document.getElementById('main-content-area');
    this.placementEngine = new PlacementTestEngine(mainContainer, (level) => {
      this.renderVocabDashboard();
    });
    this.placementEngine.start();
  }

  // ==================== TỪ ĐIỂN / SỔ TAY ĐÃ HỌC ====================
  renderDictionary(container) {
    const learnedIds = new Set(appState.state.learnedWords.map(w => w.wordId));
    const allGroups = appState.getVocabGroups();
    
    let levelFilter = this.dictionaryFilterState?.level || "all";
    let catFilter = this.dictionaryFilterState?.category || "all";
    let activeGroupId = this.dictionaryFilterState?.groupId || null;

    const renderList = (searchKeyword = "") => {
      let filtered = VOCAB_BANK.filter(w => {
        // Lọc theo level
        if (levelFilter === "learned" && !learnedIds.has(w.id)) return false;
        if (["A1", "A2", "B1", "B2"].includes(levelFilter) && w.level !== levelFilter) return false;

        // Lọc theo group cụ thể nếu có
        if (activeGroupId && w.groupId !== activeGroupId) return false;

        // Lọc theo category
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
      const activeGroupBanner = document.getElementById('active-group-banner');
      
      if (activeGroupBanner) {
        if (activeGroupId) {
          const grp = allGroups.find(g => g.groupId === activeGroupId);
          activeGroupBanner.className = "flex items-center justify-between p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200 text-xs";
          activeGroupBanner.innerHTML = `
            <div class="flex items-center space-x-2">
              <span class="text-base">${getGroupIcon(grp?.icon)}</span>
              <span>Đang lọc theo chủ đề: <strong>${grp?.name || activeGroupId}</strong> (${filtered.length} mục)</span>
            </div>
            <button id="btn-clear-group-filter" class="px-2.5 py-1 bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-700 rounded-lg text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 transition-colors">
              ✕ Xoá lọc chủ đề
            </button>
          `;
          document.getElementById('btn-clear-group-filter')?.addEventListener('click', () => {
            activeGroupId = null;
            this.dictionaryFilterState.groupId = null;
            renderList(document.getElementById('vocab-search-box')?.value || "");
          });
        } else {
          activeGroupBanner.className = "hidden";
          activeGroupBanner.innerHTML = "";
        }
      }

      if (!listContainer) return;

      if (filtered.length === 0) {
        listContainer.innerHTML = `
          <div class="col-span-full py-16 text-center text-slate-400">
            <div class="text-3xl mb-2">🔍</div>
            <p class="text-sm font-semibold">Không tìm thấy từ vựng hoặc cụm từ phù hợp.</p>
            <p class="text-xs text-slate-500 mt-1">Hãy thử đổi bộ lọc trình độ, chủ đề hoặc từ khóa tìm kiếm.</p>
          </div>
        `;
        return;
      }

      listContainer.innerHTML = filtered.map(w => {
        const isLearned = learnedIds.has(w.id);
        const groupInfo = allGroups.find(g => g.groupId === w.groupId);
        const groupBadge = groupInfo 
          ? `<span class="text-[10px] font-medium text-slate-500 dark:text-slate-400 flex items-center space-x-1"><span class="text-xs">${getGroupIcon(groupInfo.icon)}</span> <span class="truncate max-w-[120px]">${groupInfo.name}</span></span>`
          : '';

        return `
          <div class="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow relative group flex flex-col justify-between">
            <div>
              <div class="flex items-start justify-between mb-2">
                <div class="flex items-center space-x-2">
                  <span class="px-2 py-0.5 rounded text-[11px] font-bold ${w.level === 'A1' ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300' : w.level === 'A2' ? 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300' : w.level === 'B1' ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' : 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300'}">
                    ${w.level}
                  </span>
                  ${groupBadge}
                </div>
                <button data-word="${w.word}" class="btn-play-sound p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-indigo-600 transition-colors" title="Phát âm tiếng Anh">
                  🔊
                </button>
              </div>

              <h4 class="text-xl font-black text-slate-900 dark:text-white mb-0.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                ${w.word}
              </h4>
              <div class="text-xs font-mono text-slate-400 mb-2">
                ${w.ipa || ''} ${w.type ? `• <span class="italic text-indigo-600 dark:text-indigo-400 font-semibold">${w.type}</span>` : ''}
              </div>
              <p class="text-sm font-bold text-slate-800 dark:text-slate-200 mb-3">${w.meaningVi}</p>
              
              ${w.collocations ? `
                <div class="text-[11px] text-indigo-700 dark:text-indigo-300 bg-indigo-50/80 dark:bg-indigo-950/50 p-2.5 rounded-xl border border-indigo-100 dark:border-indigo-900/50 mb-3 leading-relaxed">
                  <strong class="text-indigo-600 dark:text-indigo-400 block mb-0.5 uppercase text-[10px]">Cụm từ hay gặp:</strong>
                  ${w.collocations}
                </div>
              ` : ''}

              <div class="text-xs text-slate-600 dark:text-slate-400 italic bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                <p>"${w.example}"</p>
                ${w.exampleVi ? `<p class="text-slate-400 dark:text-slate-500 not-italic text-[11px] mt-1">➔ ${w.exampleVi}</p>` : ''}
              </div>
            </div>

            ${isLearned ? `
              <div class="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center space-x-1">
                <span>✅ Đã học thuộc</span>
              </div>
            ` : ''}
          </div>
        `;
      }).join('');

      listContainer.querySelectorAll('.btn-play-sound').forEach(btn => {
        btn.addEventListener('click', () => {
          speechService.speak(btn.getAttribute('data-word'));
        });
      });
    };

    container.innerHTML = `
      <div class="space-y-6 animate-fade-in max-w-5xl mx-auto">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-2xl font-black text-slate-900 dark:text-white">Kho Từ Vựng & Sổ Tay</h2>
            <p class="text-xs text-slate-500 dark:text-slate-400">Tra cứu nhanh ${VOCAB_BANK.length} từ vựng, phrasal verbs, collocations và phát âm chuẩn bản xứ.</p>
          </div>

          <!-- Ô tìm kiếm -->
          <div class="relative w-full sm:w-72">
            <input 
              type="text" 
              id="vocab-search-box" 
              placeholder="Tìm từ tiếng Anh, cụm từ, nghĩa..." 
              class="w-full text-xs py-2.5 pl-8 pr-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-indigo-500"
            />
            <span class="absolute left-2.5 top-2.5 text-xs text-slate-400">🔍</span>
          </div>
        </div>

        <!-- Filter Level Row -->
        <div class="space-y-2">
          <div class="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none" id="dict-level-filters">
            <button data-level="all" class="dict-lvl-btn px-3 py-1.5 rounded-xl text-xs font-bold ${levelFilter === 'all' ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}">Tất cả (${VOCAB_BANK.length})</button>
            <button data-level="learned" class="dict-lvl-btn px-3 py-1.5 rounded-xl text-xs font-bold ${levelFilter === 'learned' ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}">Đã học (${learnedIds.size})</button>
            <button data-level="A1" class="dict-lvl-btn px-3 py-1.5 rounded-xl text-xs font-bold ${levelFilter === 'A1' ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}">Level A1</button>
            <button data-level="A2" class="dict-lvl-btn px-3 py-1.5 rounded-xl text-xs font-bold ${levelFilter === 'A2' ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}">Level A2</button>
            <button data-level="B1" class="dict-lvl-btn px-3 py-1.5 rounded-xl text-xs font-bold ${levelFilter === 'B1' ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}">Level B1</button>
            <button data-level="B2" class="dict-lvl-btn px-3 py-1.5 rounded-xl text-xs font-bold ${levelFilter === 'B2' ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}">Level B2</button>
          </div>

          <!-- Filter Category Row -->
          <div class="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none" id="dict-cat-filters">
            <button data-cat="all" class="dict-cat-btn px-3 py-1.5 rounded-xl text-xs font-bold ${catFilter === 'all' ? 'bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}">🌐 Toàn bộ chủ đề</button>
            <button data-cat="daily" class="dict-cat-btn px-3 py-1.5 rounded-xl text-xs font-bold ${catFilter === 'daily' ? 'bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}">💬 Giao tiếp Hàng ngày</button>
            <button data-cat="marketing" class="dict-cat-btn px-3 py-1.5 rounded-xl text-xs font-bold ${catFilter === 'marketing' ? 'bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}">📢 Marketing & Growth</button>
            <button data-cat="work" class="dict-cat-btn px-3 py-1.5 rounded-xl text-xs font-bold ${catFilter === 'work' ? 'bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}">💼 Công sở & Teamwork</button>
            <button data-cat="tech" class="dict-cat-btn px-3 py-1.5 rounded-xl text-xs font-bold ${catFilter === 'tech' ? 'bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}">💻 Công nghệ & CNTT</button>
          </div>
        </div>

        <!-- Banner Lọc theo nhóm chủ đề cụ thể (nếu có) -->
        <div id="active-group-banner" class="hidden"></div>

        <!-- Grid Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="vocab-card-grid"></div>
      </div>
    `;

    renderList();

    // Event Lọc Level
    container.querySelectorAll('.dict-lvl-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.dict-lvl-btn').forEach(b => {
          b.className = "dict-lvl-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300";
        });
        btn.className = "dict-lvl-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-600 text-white";
        levelFilter = btn.getAttribute('data-level');
        this.dictionaryFilterState.level = levelFilter;
        renderList(document.getElementById('vocab-search-box')?.value || "");
      });
    });

    // Event Lọc Category
    container.querySelectorAll('.dict-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.dict-cat-btn').forEach(b => {
          b.className = "dict-cat-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300";
        });
        btn.className = "dict-cat-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900";
        catFilter = btn.getAttribute('data-cat');
        this.dictionaryFilterState.category = catFilter;
        renderList(document.getElementById('vocab-search-box')?.value || "");
      });
    });

    // Event Tìm kiếm ô search
    document.getElementById('vocab-search-box')?.addEventListener('input', (e) => {
      renderList(e.target.value);
    });
  }

  // ==================== MÀN HÌNH BẢNG THỐNG KÊ & YEARLY FOCUS HEATMAP ====================
  openAnalyticsModal() {
    this.switchTab("analytics");
  }

  renderAnalyticsPage(container) {
    if (!container) return;

    // Kiểm tra 1: Yêu cầu đăng nhập Google để tải dữ liệu từ Cloud Firestore
    if (!appState.state.user) {
      container.innerHTML = `
        <div class="w-full max-w-md mx-auto my-auto text-center py-8 px-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl animate-fade-in flex flex-col items-center justify-center">
          <div class="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center text-3xl mb-4 shadow-sm text-indigo-600 dark:text-indigo-400">
            📊
          </div>
          <h2 class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white mb-2">Đăng Nhập Để Xem Thống Kê</h2>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-xs mx-auto leading-relaxed">
            Lịch sử học tập, chuỗi streak và Heatmap cả năm được lưu trữ an toàn trên <strong>Cloud Firestore</strong>.
          </p>
          <button id="btn-login-from-analytics" class="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/25 active:scale-[0.98] transition-all flex items-center justify-center space-x-2.5">
            <svg class="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <span>Đăng nhập với Google</span>
          </button>
        </div>
      `;
      container.querySelector('#btn-login-from-analytics')?.addEventListener('click', () => {
        this.handleAuthClick();
      });
      return;
    }

    if (!appState.state.cefrLevel) {
      container.innerHTML = `
        <div class="w-full max-w-md mx-auto my-auto text-center py-6 px-4 animate-fade-in flex flex-col items-center justify-center">
          <div class="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center text-3xl mb-4 shadow-sm">
            📊
          </div>
          <h2 class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white mb-2">Chưa Có Dữ Liệu Xếp Lớp</h2>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-xs mx-auto leading-relaxed">
            Hoàn thành bài đánh giá năng lực CEFR 10 câu để mở khóa bảng thống kê và lộ trình thăng hạng.
          </p>
          <button id="btn-start-placement-from-analytics" class="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/25 active:scale-[0.98] transition-all">
            🚀 Bắt đầu bài Test Xếp Lớp (10 câu)
          </button>
        </div>
      `;
      container.querySelector('#btn-start-placement-from-analytics')?.addEventListener('click', () => {
        this.switchTab("vocab");
        this.startPlacementTest();
      });
      return;
    }

    const rankProg = appState.getRankProgress();
    const streak = appState.state.streak || 0;
    const learnedCount = appState.state.learnedWords.length;
    const reviewCount = appState.state.learnedWords.reduce((sum, w) => sum + (w.reviewCount || 0), 0);
    const discipline = appState.calculateDisciplineStatus();
    const year = this.selectedHeatmapYear || new Date().getFullYear();

    // Map đếm số từ nạp theo từng ngày (YYYY-MM-DD -> count)
    const wordCountMap = {};
    (appState.state.learnedWords || []).forEach(w => {
      if (w.learnedDate) {
        wordCountMap[w.learnedDate] = (wordCountMap[w.learnedDate] || 0) + 1;
      }
    });

    // Dữ liệu mẫu (Demo) mô phỏng chính xác Tháng 9 & Tháng 10 như ảnh người dùng cung cấp
    if (this.showDemoHeatmap) {
      const demoYear = year;
      // Dữ liệu mẫu Tháng 9
      wordCountMap[`${demoYear}-09-21`] = 25; // Level 3
      wordCountMap[`${demoYear}-09-28`] = 18; // Level 2
      wordCountMap[`${demoYear}-09-29`] = 35; // Level 4
      wordCountMap[`${demoYear}-09-30`] = 32; // Level 4

      // Dữ liệu mẫu Tháng 10
      wordCountMap[`${demoYear}-10-01`] = 25; // Level 3
      wordCountMap[`${demoYear}-10-02`] = 35; // Level 4
      wordCountMap[`${demoYear}-10-03`] = 15; // Level 2
      wordCountMap[`${demoYear}-10-04`] = 35; // Level 4
      wordCountMap[`${demoYear}-10-05`] = 32; // Level 4
      wordCountMap[`${demoYear}-10-06`] = 25; // Level 3
      wordCountMap[`${demoYear}-10-07`] = 15; // Level 2
      wordCountMap[`${demoYear}-10-08`] = 40; // Level 4
      wordCountMap[`${demoYear}-10-11`] = 35; // Level 4
      wordCountMap[`${demoYear}-10-12`] = 25; // Level 3
      wordCountMap[`${demoYear}-10-18`] = 35; // Level 4

      // Thêm vài ô rải rác ở các tháng khác
      wordCountMap[`${demoYear}-02-14`] = 10;
      wordCountMap[`${demoYear}-04-08`] = 15;
      wordCountMap[`${demoYear}-06-21`] = 10;
      wordCountMap[`${demoYear}-07-15`] = 25;
    }

    const now = new Date();
    const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

    // Hàm phân loại Level màu chuẩn GitHub (Dark to bright green)
    const getGitHubLevel = (count, isFuture) => {
      if (isFuture) return { level: 0, cellClass: "gh-cell-0 opacity-40", label: "Ngày trong tương lai", badge: "Tương lai" };
      if (count === 0) return { level: 0, cellClass: "gh-cell-0", label: "Không có từ vựng (0 từ)", badge: "Level 0 (0 từ)" };
      if (count <= 10) return { level: 1, cellClass: "gh-cell-1", label: `${count} từ vựng (Level 1 - Hoàn thành nhiệm vụ)`, badge: `Level 1 (${count} từ)` };
      if (count <= 20) return { level: 2, cellClass: "gh-cell-2", label: `${count} từ vựng (Level 2 - Khá)`, badge: `Level 2 (${count} từ)` };
      if (count <= 30) return { level: 3, cellClass: "gh-cell-3", label: `${count} từ vựng (Level 3 - Tốt)`, badge: `Level 3 (${count} từ)` };
      return { level: 4, cellClass: "gh-cell-4", label: `${count} từ vựng (Level 4 - Xuất sắc ✨)`, badge: `Level 4 (${count} từ)` };
    };

    // Đếm tổng số ngày học thực tế
    let totalActiveDaysInYear = 0;
    Object.keys(wordCountMap).forEach(d => {
      if (wordCountMap[d] > 0) totalActiveDaysInYear++;
    });

    // ==================== 1. XÂY DỰNG BIỂU ĐỒ 52 TUẦN LIÊN TỤC CHUẨN GITHUB ====================
    const endSaturday = new Date(now);
    endSaturday.setDate(now.getDate() + (6 - now.getDay())); // Đến Thứ Bảy tuần này
    const startSunday = new Date(endSaturday);
    startSunday.setDate(endSaturday.getDate() - (53 * 7 - 1)); // 53 tuần = 371 ngày

    const monthShortNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dayNames = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];

    // Header tháng cho 53 tuần
    let monthLabelsHtml = '';
    let lastMonth = -1;
    for (let w = 0; w < 53; w++) {
      const colSunday = new Date(startSunday);
      colSunday.setDate(startSunday.getDate() + (w * 7));
      const colMonth = colSunday.getMonth();
      if (colMonth !== lastMonth && colSunday.getDate() <= 7) {
        monthLabelsHtml += `<span style="grid-column-start: ${w + 1}" class="text-[10px] text-slate-400 font-medium select-none">${monthShortNames[colMonth]}</span>`;
        lastMonth = colMonth;
      }
    }

    // 53 Cột x 7 Hàng
    let columnsHtml = '';
    for (let w = 0; w < 53; w++) {
      let weekCellsHtml = '';
      for (let d = 0; d < 7; d++) {
        const cellDate = new Date(startSunday);
        cellDate.setDate(startSunday.getDate() + (w * 7 + d));
        const cYear = cellDate.getFullYear();
        const cMonth = String(cellDate.getMonth() + 1).padStart(2, '0');
        const cDay = String(cellDate.getDate()).padStart(2, '0');
        const dateStr = `${cYear}-${cMonth}-${cDay}`;
        const isToday = dateStr === todayStr;
        const isFuture = dateStr > todayStr;
        const count = wordCountMap[dateStr] || 0;
        const info = getGitHubLevel(count, isFuture);

        const todayRing = isToday ? 'ring-1 ring-emerald-400 ring-offset-1 ring-offset-[#0d1117]' : '';

        weekCellsHtml += `
          <div 
            class="w-[11px] h-[11px] rounded-[2px] transition-all duration-100 cursor-pointer ${info.cellClass} ${todayRing} hover:scale-125 hover:z-20"
            data-date="${dateStr}"
            data-dayname="${dayNames[d]}"
            data-count="${count}"
            data-label="${info.label}"
            data-badge="${info.badge}"
            title="${count > 0 ? count + ' từ vựng đã nạp' : 'Không có từ vựng'} vào ${dayNames[d]}, ${dateStr}"
          ></div>
        `;
      }
      columnsHtml += `<div class="grid grid-rows-7 gap-[3px]">${weekCellsHtml}</div>`;
    }

    // ==================== 2. XÂY DỰNG LỊCH 12 THÁNG (VIEW MODE 2) ====================
    const monthFullNames = [
      "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4",
      "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8",
      "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
    ];

    const monthsHtml = monthFullNames.map((mName, mIndex) => {
      const firstDay = new Date(year, mIndex, 1);
      const dayOfWeek = firstDay.getDay();
      const leadingBlanks = (dayOfWeek + 6) % 7; // T2 là 0
      const totalDays = new Date(year, mIndex + 1, 0).getDate();

      let monthActiveDays = 0;
      let cellsHtml = "";

      for (let b = 0; b < leadingBlanks; b++) {
        cellsHtml += `<div class="aspect-square opacity-0 pointer-events-none"></div>`;
      }

      for (let day = 1; day <= totalDays; day++) {
        const dateStr = `${year}-${String(mIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const isToday = dateStr === todayStr;
        const isFuture = dateStr > todayStr;
        const count = wordCountMap[dateStr] || 0;
        const info = getGitHubLevel(count, isFuture);

        if (count > 0) monthActiveDays++;

        const todayRing = isToday ? 'ring-1 ring-cyan-400 ring-offset-1 ring-offset-[#111a2e]' : '';

        const textColor = info.level === 4 
          ? 'text-emerald-950 font-black' 
          : (count > 0 ? 'text-white font-bold' : 'text-slate-400/80 dark:text-slate-500/80 font-medium');

        cellsHtml += `
          <div 
            class="aspect-square gh-cell-tile rounded-lg sm:rounded-md transition-all duration-100 cursor-pointer ${info.cellClass} ${todayRing} hover:scale-110 active:scale-95 flex items-center justify-center text-[10px] select-none ${textColor}"
            data-date="${dateStr}"
            data-dayname="Ngày ${day}/${mIndex + 1}"
            data-count="${count}"
            data-label="${info.label}"
            data-badge="${info.badge}"
            title="${count > 0 ? count + ' từ vựng đã nạp' : 'Không có từ vựng'} (${dateStr})"
          >${day}</div>
        `;
      }

      return `
        <div id="month-card-${mIndex + 1}" class="gh-card p-4 rounded-2xl shadow-md flex flex-col scroll-mt-20 transition-all duration-300">
          <div class="flex items-center justify-between mb-2.5">
            <h4 class="text-xs font-bold text-slate-200">${mName}</h4>
            <span class="text-[10px] font-semibold text-emerald-400">${monthActiveDays > 0 ? `${monthActiveDays} ngày học` : ''}</span>
          </div>
          
          <div class="grid grid-cols-7 gap-1.5 text-center text-[9px] font-bold mb-2 text-slate-400 select-none">
            <span>T2</span><span>T3</span><span>T4</span><span>T5</span><span>T6</span><span class="text-blue-400">T7</span><span class="text-rose-400">CN</span>
          </div>

          <div class="grid grid-cols-7 gap-1.5 flex-1 items-start">
            ${cellsHtml}
          </div>
        </div>
      `;
    }).join('');

    // ==================== RENDER FULL PAGE HTML ====================
    container.innerHTML = `
      <div class="space-y-6 animate-fade-in max-w-6xl mx-auto">
        <!-- Top Banner / Title -->
        <div class="gh-panel rounded-3xl p-6 md:p-8 text-white shadow-2xl relative overflow-hidden">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div class="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs font-bold text-emerald-400 mb-2">
                <span>🌱</span>
                <span>GitHub-Style Discipline Heatmap</span>
              </div>
              <h1 class="text-2xl md:text-3xl font-black text-white">Thống Kê Hoạt Động & Kỷ Luật Học Tập</h1>
              <p class="text-xs md:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
                Đo lường sự kiên trì trong 365 ngày qua bảng màu chuẩn GitHub (Level 0 đến Level 4). Kỷ luật mỗi ngày tạo nên nền tảng ngôn ngữ vững chắc.
              </p>
            </div>

            <div class="flex items-center space-x-3">
              <div class="bg-white/5 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 text-center">
                <div class="text-[11px] text-slate-400">Ngày học tích lũy</div>
                <div class="text-xl font-extrabold text-emerald-400">${totalActiveDaysInYear} ngày</div>
              </div>
              <div class="bg-white/5 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 text-center">
                <div class="text-[11px] text-amber-300">Chuỗi hiện tại</div>
                <div class="text-xl font-extrabold text-amber-400">🔥 ${streak} ngày</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 4 KPI Cards -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 text-center">
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="text-2xl">🔥</div>
            <div class="text-xl font-black text-slate-800 dark:text-white mt-1">${streak} ngày</div>
            <div class="text-xs text-slate-500 dark:text-slate-400">Chuỗi ngày liên tục</div>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="text-2xl">📚</div>
            <div class="text-xl font-black text-slate-800 dark:text-white mt-1">${learnedCount} từ</div>
            <div class="text-xs text-slate-500 dark:text-slate-400">Từ vựng đã nạp</div>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="text-2xl">🔄</div>
            <div class="text-xl font-black text-slate-800 dark:text-white mt-1">${reviewCount} lượt</div>
            <div class="text-xs text-slate-500 dark:text-slate-400">Lượt ôn củng cố</div>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="text-2xl">⭐</div>
            <div class="text-xl font-black text-amber-500 mt-1">${rankProg.currentXP} XP</div>
            <div class="text-xs text-slate-500 dark:text-slate-400">Điểm kỷ luật tích luỹ</div>
          </div>
        </div>

        <!-- Hành Trình Nâng Hạng (Rank Progression Card) -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <div class="flex items-center space-x-2">
                <span class="text-xl">🏆</span>
                <h3 class="text-lg md:text-xl font-black text-slate-800 dark:text-white">
                  Lộ Trình Thăng Hạng: ${rankProg.currentLabel} ➔ ${rankProg.nextLabel}
                </h3>
              </div>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Yêu cầu tối thiểu <strong class="text-indigo-600 dark:text-indigo-400 font-bold">${rankProg.minDays} ngày</strong>. Càng lên trình độ cao hành trình càng gian nan và đòi hỏi ý chí thép.
              </p>
            </div>
            <div class="text-right">
              <span class="text-2xl font-black text-indigo-600 dark:text-indigo-400">${rankProg.percent}%</span>
              <span class="text-xs font-semibold text-slate-400 block">${rankProg.completedDays} / ${rankProg.minDays} ngày (${rankProg.currentXP} / ${rankProg.requiredXP} XP)</span>
            </div>
          </div>

          <!-- Thanh Tiến Trình Lớn -->
          <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-4 mb-4 overflow-hidden p-0.5 border border-slate-200 dark:border-slate-700">
            <div class="bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 h-full rounded-full transition-all duration-500 relative" style="width: ${rankProg.percent}%">
              <div class="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>

          <!-- 4 Tiers Roadmap -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-bold text-slate-500 dark:text-slate-400 mb-4">
            <div class="p-2.5 rounded-xl border ${rankProg.level === 'A1' ? 'border-indigo-500 bg-indigo-50/60 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 ring-2 ring-indigo-500/20' : 'border-slate-200 dark:border-slate-800'}">
              <div class="text-sm font-extrabold">A1 ➔ A2</div>
              <div class="text-[11px] opacity-80 mt-0.5">Tối thiểu 15 ngày</div>
            </div>
            <div class="p-2.5 rounded-xl border ${rankProg.level === 'A2' ? 'border-indigo-500 bg-indigo-50/60 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 ring-2 ring-indigo-500/20' : 'border-slate-200 dark:border-slate-800'}">
              <div class="text-sm font-extrabold">A2 ➔ B1</div>
              <div class="text-[11px] opacity-80 mt-0.5">Tối thiểu 30 ngày</div>
            </div>
            <div class="p-2.5 rounded-xl border ${rankProg.level === 'B1' ? 'border-indigo-500 bg-indigo-50/60 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 ring-2 ring-indigo-500/20' : 'border-slate-200 dark:border-slate-800'}">
              <div class="text-sm font-extrabold">B1 ➔ B2</div>
              <div class="text-[11px] opacity-80 mt-0.5">Tối thiểu 60 ngày</div>
            </div>
            <div class="p-2.5 rounded-xl border ${rankProg.level === 'B2' ? 'border-indigo-500 bg-indigo-50/60 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 ring-2 ring-indigo-500/20' : 'border-slate-200 dark:border-slate-800'}">
              <div class="text-sm font-extrabold">B2 ➔ C1</div>
              <div class="text-[11px] opacity-80 mt-0.5">Tối thiểu 90 ngày</div>
            </div>
          </div>

          <!-- Quy tắc kỷ luật -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div class="p-3 bg-emerald-50/70 dark:bg-emerald-950/40 rounded-xl border border-emerald-200/80 dark:border-emerald-800/60 text-emerald-900 dark:text-emerald-200 flex items-start space-x-2">
              <span>📈</span>
              <div><strong>Tăng tốc kỷ luật:</strong> Hoàn thành 1 ngày đầy đủ (Review + 10 từ mới) $\rightarrow$ <strong>+1 ngày tiến độ (+25 XP)</strong>.</div>
            </div>
            <div class="p-3 bg-rose-50/70 dark:bg-rose-950/40 rounded-xl border border-rose-200/80 dark:border-rose-800/60 text-rose-900 dark:text-rose-200 flex items-start space-x-2">
              <span>⚠️</span>
              <div><strong>Hình phạt tụt hạng x2:</strong> Bỏ quên 1 ngày học hoặc loose streak $\rightarrow$ <strong>-2 ngày tiến độ (-50 XP/ngày)</strong>!</div>
            </div>
          </div>
        </div>

        <!-- 🌟 YEARLY ACTIVITY HEATMAP (CHUẨN 12 THÁNG & GITHUB GREENS) 🌟 -->
        <div class="space-y-4">
          <!-- Controls Header -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="flex items-center space-x-3">
              <span class="text-xl">🟩</span>
              <div>
                <div class="flex items-center space-x-2">
                  <h3 class="text-lg md:text-xl font-black text-slate-800 dark:text-white">
                    Yearly Activity & Focus Heatmap
                  </h3>
                  <!-- Year Switcher -->
                  <div class="inline-flex items-center space-x-1 px-2.5 py-0.5 bg-slate-200 dark:bg-slate-800 rounded-xl text-xs font-bold">
                    <button id="btn-heatmap-prev-year" class="px-1 py-0.5 hover:text-emerald-400 transition-colors" title="Năm trước">◀</button>
                    <span class="px-1 text-emerald-400 font-black">${year}</span>
                    <button id="btn-heatmap-next-year" class="px-1 py-0.5 hover:text-emerald-400 transition-colors" title="Năm sau">▶</button>
                  </div>
                </div>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Đo lường sự kiên trì trong cả năm với thang độ đậm xanh chuẩn GitHub.
                </p>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-2">
              <!-- View Mode Toggle -->
              <div class="inline-flex rounded-xl p-1 bg-slate-200 dark:bg-slate-800 text-xs font-bold">
                <button id="btn-view-12months" class="px-3 py-1.5 rounded-lg transition-all ${this.analyticsViewMode === '12months' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-white'}">
                  📅 12 Tháng (Lưới)
                </button>
                <button id="btn-view-52weeks" class="px-3 py-1.5 rounded-lg transition-all ${this.analyticsViewMode === '52weeks' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-white'}">
                  📊 52 Tuần (GitHub)
                </button>
              </div>

              <!-- Demo Data Toggle -->
              <button id="btn-toggle-demo-heatmap" class="px-3 py-1.5 text-xs font-bold rounded-xl border transition-all ${this.showDemoHeatmap ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-200'}">
                ${this.showDemoHeatmap ? '🔄 Xem dữ liệu thật' : '🎲 Xem mẫu (Demo)'}
              </button>
            </div>
          </div>

          <!-- Inspector Bar (Updated dynamically on hover/tap) -->
          <div id="heatmap-cell-inspector" class="gh-panel p-3.5 rounded-2xl flex flex-wrap items-center justify-between gap-3 text-xs">
            <div class="flex items-center space-x-2">
              <span class="text-base">📍</span>
              <span class="text-slate-400">Rê chuột hoặc chạm vào ô vuông để soi chi tiết:</span>
              <strong id="inspector-date" class="text-emerald-400 font-bold">Hôm nay (${todayStr})</strong>
            </div>
            <div class="flex items-center space-x-3">
              <span id="inspector-count" class="font-bold text-white">Đã nạp: ${wordCountMap[todayStr] || 0} từ</span>
              <span id="inspector-badge" class="px-2.5 py-1 rounded-full text-[11px] font-bold ${(wordCountMap[todayStr] || 0) >= 10 ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-slate-800 text-slate-400 border border-slate-700'}">
                ${(wordCountMap[todayStr] || 0) >= 10 ? 'Hoàn thành ngày ✅' : 'Đang học hôm nay ⏳'}
              </span>
            </div>
          </div>

          <!-- Content based on View Mode -->
          ${this.analyticsViewMode === '12months' ? `
            <!-- 12-MONTH CALENDAR GRID (EXACT MATCH USER IMAGE 4x3) -->
            <div class="space-y-4">
              <!-- iOS Quick-Jump Month Bar (T1 - T12 Carousel for iPhone 12 & 17 Pro Max) -->
              <div class="block sm:hidden -mx-4 px-4 overflow-x-auto scrollbar-none scroll-snap-x py-1">
                <div class="flex items-center space-x-2 min-w-max">
                  <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider pl-1">Nhảy tháng:</span>
                  ${monthFullNames.map((_, idx) => `
                    <button 
                      type="button" 
                      data-jump-target="month-card-${idx + 1}"
                      class="month-jump-pill px-3 py-1.5 rounded-xl text-xs font-bold transition-all bg-slate-800/90 active:bg-indigo-600 text-slate-300 active:text-white border border-slate-700/80 shadow-sm"
                    >
                      T${idx + 1}
                    </button>
                  `).join('')}
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                ${monthsHtml}
              </div>

              <!-- Footer with GitHub Standard Legend -->
              <div class="gh-panel rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <div class="flex items-center space-x-2 text-[11px]">
                  <span>ℹ️</span>
                  <span>Độ đậm màu xanh: Level 1 (10 từ) • Level 2 (11-20 từ) • Level 3 (21-30 từ) • Level 4 (>30 từ)</span>
                </div>
                <div class="flex items-center space-x-1.5 text-[11px]">
                  <span class="text-slate-400">Less</span>
                  <div class="w-[12px] h-[12px] rounded-xs gh-cell-0" title="0 từ"></div>
                  <div class="w-[12px] h-[12px] rounded-xs gh-cell-1" title="10 từ (Level 1)"></div>
                  <div class="w-[12px] h-[12px] rounded-xs gh-cell-2" title="11-20 từ (Level 2)"></div>
                  <div class="w-[12px] h-[12px] rounded-xs gh-cell-3" title="21-30 từ (Level 3)"></div>
                  <div class="w-[12px] h-[12px] rounded-xs gh-cell-4" title=">30 từ (Level 4)"></div>
                  <span class="text-slate-400">More</span>
                </div>
              </div>
            </div>
          ` : `
            <!-- AUTHENTIC GITHUB 52-WEEK GRAPH -->
            <div class="gh-panel rounded-2xl p-5 md:p-6 overflow-x-auto scrollbar-thin shadow-2xl">
              <div class="min-w-[760px]">
                <!-- Month Labels Row -->
                <div class="grid grid-cols-[32px_repeat(53,11px)] gap-[3px] mb-1.5 items-center">
                  <span></span>
                  ${monthLabelsHtml}
                </div>

                <!-- Graph Body: Day labels + 53 columns -->
                <div class="flex items-start space-x-[3px]">
                  <div class="w-[32px] grid grid-rows-7 gap-[3px] text-[9px] text-slate-400 font-medium select-none pr-1">
                    <span class="h-[11px] leading-[11px]"></span>
                    <span class="h-[11px] leading-[11px]">Mon</span>
                    <span class="h-[11px] leading-[11px]"></span>
                    <span class="h-[11px] leading-[11px]">Wed</span>
                    <span class="h-[11px] leading-[11px]"></span>
                    <span class="h-[11px] leading-[11px]">Fri</span>
                    <span class="h-[11px] leading-[11px]"></span>
                  </div>

                  <div class="flex space-x-[3px]">
                    ${columnsHtml}
                  </div>
                </div>

                <!-- Footer: Left description link + Right GitHub legend -->
                <div class="mt-4 pt-3 border-t border-[#30363d]/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                  <div class="flex items-center space-x-2">
                    <span class="text-slate-400 text-[11px] flex items-center space-x-1 cursor-default">
                      <span>ℹ️</span>
                      <span>Level 1 (10 từ) • Level 2 (11-20) • Level 3 (21-30) • Level 4 (>30 từ)</span>
                    </span>
                  </div>

                  <div class="flex items-center space-x-1.5 text-[11px]">
                    <span class="text-slate-400">Less</span>
                    <div class="w-[10px] h-[10px] rounded-[2px] gh-cell-0" title="0 từ"></div>
                    <div class="w-[10px] h-[10px] rounded-[2px] gh-cell-1" title="10 từ (Level 1)"></div>
                    <div class="w-[10px] h-[10px] rounded-[2px] gh-cell-2" title="11-20 từ (Level 2)"></div>
                    <div class="w-[10px] h-[10px] rounded-[2px] gh-cell-3" title="21-30 từ (Level 3)"></div>
                    <div class="w-[10px] h-[10px] rounded-[2px] gh-cell-4" title=">30 từ (Level 4)"></div>
                    <span class="text-slate-400">More</span>
                  </div>
                </div>
              </div>
            </div>
          `}
        </div>

        <!-- Bottom Action Card: Placement Test Retake -->
        <div class="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 class="text-sm font-bold text-slate-800 dark:text-white">Muốn Đánh Giá Lại Trình Độ Xuất Phát?</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Làm lại bài kiểm tra Placement Test 10 câu nếu bạn cảm thấy trình độ hiện tại chưa phản ánh đúng thực lực.
            </p>
          </div>
          <button id="btn-retake-from-analytics" class="px-4 py-2.5 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-indigo-600 dark:text-indigo-400 border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-xs shadow-sm transition-all whitespace-nowrap">
            🎯 Làm lại bài Placement Test
          </button>
        </div>
      </div>
    `;

    // Gắn sự kiện chuyển chế độ xem (12 Tháng vs 52 Tuần)
    container.querySelector('#btn-view-12months')?.addEventListener('click', () => {
      this.analyticsViewMode = '12months';
      this.renderAnalyticsPage(container);
    });

    container.querySelector('#btn-view-52weeks')?.addEventListener('click', () => {
      this.analyticsViewMode = '52weeks';
      this.renderAnalyticsPage(container);
    });

    // Gắn sự kiện chuyển năm
    container.querySelector('#btn-heatmap-prev-year')?.addEventListener('click', () => {
      this.selectedHeatmapYear = (this.selectedHeatmapYear || new Date().getFullYear()) - 1;
      this.renderAnalyticsPage(container);
    });

    container.querySelector('#btn-heatmap-next-year')?.addEventListener('click', () => {
      this.selectedHeatmapYear = (this.selectedHeatmapYear || new Date().getFullYear()) + 1;
      this.renderAnalyticsPage(container);
    });

    // Gắn sự kiện chuyển đổi Demo / Dữ liệu thực
    container.querySelector('#btn-toggle-demo-heatmap')?.addEventListener('click', () => {
      this.showDemoHeatmap = !this.showDemoHeatmap;
      this.renderAnalyticsPage(container);
    });

    // Gắn sự kiện chạm nhanh nhảy đến tháng (iOS Month Quick-Jump Carousel)
    container.querySelectorAll('.month-jump-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-jump-target');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          if (window.navigator?.vibrate) window.navigator.vibrate(12);
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          targetEl.classList.add('ring-2', 'ring-indigo-500', 'ring-offset-2', 'ring-offset-slate-900');
          setTimeout(() => {
            targetEl.classList.remove('ring-2', 'ring-indigo-500', 'ring-offset-2', 'ring-offset-slate-900');
          }, 1500);
        }
      });
    });

    // Gắn sự kiện Inspector tương tác khi rê chuột hoặc click ô
    const inspectorDate = container.querySelector('#inspector-date');
    const inspectorCount = container.querySelector('#inspector-count');
    const inspectorBadge = container.querySelector('#inspector-badge');

    container.querySelectorAll('[data-date]').forEach(cell => {
      const updateInspector = () => {
        if (window.navigator?.vibrate) window.navigator.vibrate(8);
        const d = cell.getAttribute('data-date');
        const dayName = cell.getAttribute('data-dayname') || '';
        const cnt = cell.getAttribute('data-count');
        const label = cell.getAttribute('data-label');
        const badge = cell.getAttribute('data-badge');
        if (inspectorDate) inspectorDate.textContent = `${dayName}, ${d}`;
        if (inspectorCount) inspectorCount.textContent = `Đã nạp: ${cnt} từ`;
        if (inspectorBadge) inspectorBadge.textContent = badge || label;
      };

      cell.addEventListener('mouseenter', updateInspector);
      cell.addEventListener('click', updateInspector);
    });

    // Gắn sự kiện làm lại bài test xếp lớp
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
