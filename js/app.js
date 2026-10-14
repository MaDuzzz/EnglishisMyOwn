// Trình điều phối chính ứng dụng (App Main Coordinator)
import { appState } from './state.js';
import { initFirebase, authInstance, googleProviderInstance, isFirebaseLive } from './firebase-config.js';
import { PlacementTestEngine } from './placement-test.js';
import { VocabPracticeEngine } from './vocab-engine.js';
import { CoursesEngine } from './courses-engine.js';
import { VOCAB_BANK } from './data/vocab-bank.js';
import { speechService } from './speech.js';

class App {
  constructor() {
    this.currentTab = "vocab"; // "vocab" | "analytics" | "courses" | "dictionary"
    this.vocabEngine = null;
    this.coursesEngine = null;
    this.placementEngine = null;
    this.selectedHeatmapYear = new Date().getFullYear();
    this.showDemoHeatmap = false;
    this.analyticsViewMode = "52weeks"; // "52weeks" | "12months"
  }

  async init() {
    // Khởi tạo Firebase / Local Fallback
    await initFirebase();
    this.setupAuthListener();

    // Lắng nghe thay đổi trạng thái
    appState.subscribe(() => {
      this.updateHeaderUI();
      if (this.currentTab === "vocab") {
        this.renderVocabDashboard();
      } else if (this.currentTab === "analytics") {
        const mainContainer = document.getElementById('main-content-area');
        if (mainContainer) this.renderAnalyticsPage(mainContainer);
      }
    });

    this.bindGlobalEvents();
    this.updateHeaderUI();
    this.switchTab("vocab");
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
            });
          } else {
            appState.setUser(null);
          }
          this.updateHeaderUI();
        });
      });
    }
  }

  bindGlobalEvents() {
    // Chuyển Tab
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        this.switchTab(tab);
      });
    });

    // Nút Đăng nhập Google
    const authBtn = document.getElementById('btn-auth-action');
    if (authBtn) {
      authBtn.addEventListener('click', () => this.handleAuthClick());
    }

    // Nút Cài đặt Firebase
    document.getElementById('btn-open-settings')?.addEventListener('click', () => {
      this.openSettingsModal();
    });

    document.getElementById('btn-close-settings')?.addEventListener('click', () => {
      document.getElementById('settings-modal').classList.add('hidden');
    });

    document.getElementById('btn-save-settings')?.addEventListener('click', () => {
      this.saveFirebaseSettings();
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
  }

  async handleAuthClick() {
    if (appState.state.user) {
      // Đăng xuất
      if (isFirebaseLive && authInstance) {
        const { signOut } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js");
        await signOut(authInstance);
      }
      appState.setUser(null);
    } else {
      // Đăng nhập
      if (isFirebaseLive && authInstance && googleProviderInstance) {
        const { signInWithPopup } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js");
        try {
          const res = await signInWithPopup(authInstance, googleProviderInstance);
          appState.setUser({
            uid: res.user.uid,
            displayName: res.user.displayName,
            email: res.user.email,
            photoURL: res.user.photoURL
          });
        } catch (e) {
          console.error("Lỗi Google Sign-in:", e);
          alert("Không thể đăng nhập Google: " + e.message);
        }
      } else {
        // Đăng nhập Demo Account tức thì khi chạy Local Mode
        const name = prompt("Bạn đang chạy Local Mode. Nhập tên của bạn để đăng nhập:", "Dung TM");
        if (name) {
          appState.setUser({
            uid: "local_user_" + Date.now(),
            displayName: name,
            email: "dungtm@local.dev",
            photoURL: null
          });
        }
      }
    }
    this.updateHeaderUI();
  }

  updateHeaderUI() {
    const user = appState.state.user;
    const level = appState.state.cefrLevel;
    const streak = appState.state.streak;

    // Streak with proper spacing
    const streakEl = document.getElementById('header-streak-badge');
    if (streakEl) {
      streakEl.innerHTML = `<span>🔥</span><span class="mx-1 font-bold">${streak}</span><span>ngày</span>`;
    }

    // Level Badge with Mini Progress Bar
    const levelBtn = document.getElementById('btn-retake-placement-header');
    if (levelBtn) {
      if (level) {
        const rankProg = appState.getRankProgress();
        levelBtn.className = "px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-all flex items-center space-x-2";
        levelBtn.innerHTML = `
          <div class="flex items-center space-x-1">
            <span class="font-extrabold">${rankProg.level}</span>
            <span class="text-slate-400 text-[10px]">➔</span>
            <span class="text-indigo-600 dark:text-indigo-400 font-bold">${rankProg.nextLevel}</span>
          </div>
          <div class="w-12 bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
            <div class="bg-gradient-to-r from-blue-500 to-indigo-600 h-1.5 rounded-full transition-all duration-300" style="width: ${rankProg.percent}%"></div>
          </div>
          <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400">${rankProg.percent}%</span>
        `;
        levelBtn.title = `Tiến độ: ${rankProg.currentXP}/${rankProg.requiredXP} XP (${rankProg.percent}%). Bấm để xem Bảng Kỷ Luật & Heatmap Cả Năm.`;
      } else {
        levelBtn.className = "px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900 text-amber-700 dark:text-amber-300 hover:opacity-80";
        levelBtn.innerHTML = `<span>⚠️ Chưa xếp lớp</span>`;
        levelBtn.title = "Làm bài test 10 câu để xếp lớp";
      }
    }

    // Auth Button
    const authBtn = document.getElementById('btn-auth-action');
    if (authBtn) {
      if (user) {
        authBtn.innerHTML = `
          <div class="flex items-center space-x-2">
            <span class="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
              ${(user.displayName || "U")[0].toUpperCase()}
            </span>
            <span class="hidden sm:inline text-xs font-semibold text-slate-700 dark:text-slate-300">${user.displayName}</span>
            <span class="text-xs text-rose-500 font-bold ml-1">(Đăng xuất)</span>
          </div>
        `;
      } else {
        authBtn.innerHTML = `
          <div class="flex items-center space-x-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400">
            <span>🔑</span>
            <span>Đăng nhập Google</span>
          </div>
        `;
      }
    }
  }

  switchTab(tab) {
    this.currentTab = tab;

    // Highlight active tab
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

    const mainContainer = document.getElementById('main-content-area');
    if (!mainContainer) return;

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

    // Kiểm tra: nếu chưa làm Placement Test thì bắt buộc làm test
    if (!appState.state.cefrLevel) {
      this.startPlacementTest();
      return;
    }

    const discipline = appState.calculateDisciplineStatus();
    const learnedCount = appState.state.learnedWords.length;
    const level = appState.state.cefrLevel;
    const rankProg = appState.getRankProgress();

    mainContainer.innerHTML = `
      <div class="space-y-8 animate-fade-in max-w-5xl mx-auto">
        <!-- Dashboard Top Banner -->
        <div class="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 rounded-3xl p-6 md:p-8 text-white shadow-2xl relative overflow-hidden">
          <div class="relative z-10">
            <div class="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div>
                <span class="px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-xs font-extrabold uppercase tracking-wider">
                  Trình độ hiện tại: ${level}
                </span>
                <h1 class="text-2xl md:text-3xl font-black mt-2">Trung Tâm Luyện Từ Vựng & Phản Xạ</h1>
              </div>
              <div class="flex items-center space-x-3">
                <div class="bg-black/30 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 text-center">
                  <div class="text-xs text-indigo-200">Đã tích luỹ</div>
                  <div class="text-xl font-extrabold text-white">${learnedCount} từ</div>
                </div>
                <div class="bg-black/30 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 text-center">
                  <div class="text-xs text-amber-300">Chuỗi ngày</div>
                  <div class="text-xl font-extrabold text-amber-400">🔥 ${appState.state.streak} ngày</div>
                </div>
              </div>
            </div>
            <p class="text-xs md:text-sm text-indigo-100 max-w-2xl leading-relaxed">
              Mỗi ngày tối thiểu 1 batch (10 từ). Kỷ luật trước - kiến thức sau: bắt buộc hoàn thành bài ôn tập từ hôm trước để mở khoá từ mới!
            </p>
          </div>
        </div>

        <!-- 🌟 HÀNH TRÌNH NÂNG HẠNG (RANK PROGRESSION WIDGET) 🌟 -->
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
                Yêu cầu tối thiểu <strong class="text-indigo-600 dark:text-indigo-400 font-bold">${rankProg.minDays} ngày</strong> học kỷ luật liên tục. Càng lên cao hành trình càng gian nan và đòi hỏi ý chí thép.
              </p>
            </div>
            <div class="flex items-center space-x-3">
              <div class="text-right">
                <span class="text-2xl font-black text-indigo-600 dark:text-indigo-400">${rankProg.percent}%</span>
                <span class="text-xs font-semibold text-slate-400 block">${rankProg.completedDays} / ${rankProg.minDays} ngày (${rankProg.currentXP} / ${rankProg.requiredXP} XP)</span>
              </div>
              <button id="btn-view-analytics-dash" class="px-3 py-2 bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 font-bold text-xs rounded-xl transition-all flex items-center space-x-1.5 shadow-sm" title="Xem phân tích chi tiết & kỷ luật">
                <span>📊</span>
                <span class="hidden sm:inline">Thống Kê</span>
              </button>
            </div>
          </div>

          <!-- Thanh Tiến Trình Lớn (Big Dynamic Progress Bar) -->
          <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-4 mb-4 overflow-hidden p-0.5 border border-slate-200 dark:border-slate-700">
            <div class="bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 h-full rounded-full transition-all duration-500 relative" style="width: ${rankProg.percent}%">
              <div class="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>

          <!-- Các mốc Rank CEFR Roadmap (Tối thiểu theo quy định) -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-bold text-slate-500 dark:text-slate-400 mb-6">
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

          <!-- Quy Tắc Kỷ Luật Thăng Hạng & Phạt x2 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div class="p-3.5 bg-emerald-50/70 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200/80 dark:border-emerald-800/60 text-emerald-900 dark:text-emerald-200 flex items-start space-x-2.5">
              <span class="text-base mt-0.5">📈</span>
              <div>
                <strong>Tiến độ tích lũy:</strong> Hoàn thành 1 ngày đầy đủ (Review + 10 từ mới) $\rightarrow$ <strong>+1 ngày tiến độ (+25 XP)</strong>.
              </div>
            </div>

            <div class="p-3.5 bg-rose-50/70 dark:bg-rose-950/40 rounded-2xl border border-rose-200/80 dark:border-rose-800/60 text-rose-900 dark:text-rose-200 flex items-start space-x-2.5">
              <span class="text-base mt-0.5">⚠️</span>
              <div>
                <strong>Hình phạt tụt hạng x2:</strong> Bỏ quên 1 ngày học hoặc đứt streak $\rightarrow$ Bị phạt tụt lùi gấp đôi: <strong>-2 ngày tiến độ (-50 XP/ngày)</strong>!
              </div>
            </div>
          </div>
        </div>

        <!-- Notification Banner / Penalty Status -->
        ${discipline.isPenalized ? `
          <div class="p-5 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border-2 border-rose-300 dark:border-rose-900 text-rose-900 dark:text-rose-100 shadow-sm animate-bounce-short">
            <div class="flex items-start space-x-3">
              <span class="text-2xl">⚠️</span>
              <div>
                <h4 class="font-extrabold text-sm md:text-base">Áp Dụng Hình Phạt Vì Bỏ Lỡ ${discipline.missedDays} Ngày Học!</h4>
                <p class="text-xs md:text-sm mt-1 opacity-90">${discipline.reason}</p>
                ${rankProg.penaltyNotice ? `<p class="text-xs font-bold text-rose-600 dark:text-rose-300 mt-1">${rankProg.penaltyNotice}</p>` : ''}
              </div>
            </div>
          </div>
        ` : ''}

        <!-- 2 KHỐI HÀNH ĐỘNG CHÍNH: ÔN TẬP & HỌC MỚI -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- CARD 1: ÔN TẬP KỶ LUẬT (Review Day T-1) -->
          <div class="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="text-2xl">🔄</span>
                <span class="px-3 py-1 rounded-full text-xs font-bold ${discipline.needsReview ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'}">
                  ${discipline.needsReview ? 'Bắt buộc hoàn thành' : 'Đã xong hôm nay ✅'}
                </span>
              </div>
              <h3 class="text-xl font-extrabold text-slate-800 dark:text-white mb-2">
                1. Ôn Tập Kỷ Luật (Daily Review)
              </h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                ${discipline.needsReview 
                  ? `Bạn có <strong class="text-amber-600 dark:text-amber-400 font-bold">${discipline.reviewWords.length} từ</strong> cần vượt qua 3 chế độ (Dịch - Nghe chính tả - Trắc nghiệm phản xạ).`
                  : `Bạn đã ôn tập xong bài hôm nay! Trí nhớ dài hạn đã được củng cố vững chắc.`}
              </p>
            </div>

            <div>
              ${discipline.needsReview ? `
                <button id="btn-start-review" class="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center space-x-2">
                  <span>🚀</span>
                  <span>Bắt đầu Ôn Tập (${discipline.reviewWords.length} từ)</span>
                </button>
              ` : `
                <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl text-center text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  🎉 Nhiệm vụ ôn tập đã hoàn tất!
                </div>
              `}
            </div>
          </div>

          <!-- CARD 2: HỌC BATCH 10 TỪ MỚI HÔM NAY -->
          <div class="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between ${discipline.needsReview ? 'opacity-70 bg-slate-50 dark:bg-slate-950' : ''}">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="text-2xl">${discipline.needsReview ? '🔒' : '✨'}</span>
                <span class="px-3 py-1 rounded-full text-xs font-bold ${discipline.needsReview ? 'bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400' : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'}">
                  ${discipline.needsReview ? 'Đang bị khóa' : 'Sẵn sàng nạp'}
                </span>
              </div>
              <h3 class="text-xl font-extrabold text-slate-800 dark:text-white mb-2">
                2. Nạp Batch 10 Từ Mới (${level})
              </h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                ${discipline.needsReview 
                  ? '🔒 <strong>Quy tắc kỷ luật:</strong> Bạn phải hoàn thành việc ôn tập từ của ngày hôm trước thì hệ thống mới mở khoá 10 từ mới!'
                  : 'Nạp thêm 10 từ vựng thực chiến chuẩn CEFR đúng trình độ của bạn để đa dạng hoá vốn từ giao tiếp.'}
              </p>
            </div>

            <div>
              ${discipline.needsReview ? `
                <button disabled class="w-full py-3.5 bg-slate-200 dark:bg-slate-800 text-slate-400 font-bold rounded-xl cursor-not-allowed flex items-center justify-center space-x-2">
                  <span>🔒</span>
                  <span>Hoàn thành Ôn tập để mở khóa</span>
                </button>
              ` : `
                <button id="btn-start-new-batch" class="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center space-x-2">
                  <span>✨</span>
                  <span>Bắt đầu Học 10 Từ Mới Ngay</span>
                </button>
              `}
            </div>
          </div>
        </div>

        <!-- 3 Chế độ học tập Info Box -->
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
          <h4 class="text-sm font-bold text-slate-800 dark:text-white mb-3">
            💡 3 Chế Độ Luyện Tập Chuẩn Phản Xạ Đa Chiều:
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600 dark:text-slate-400">
            <div class="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
              <strong class="text-indigo-600 dark:text-indigo-400 block mb-1">Mode 1: Dịch Nghĩa & Gõ Từ</strong>
              Hiện nghĩa tiếng Việt + số ký tự gợi ý $\rightarrow$ Tự gõ từ tiếng Anh để kích hoạt Active Recall.
            </div>
            <div class="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
              <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">Mode 2: Nghe & Chép Chính Tả</strong>
              Phát âm chuẩn native giọng US. Có nút <strong>"Không thể nghe lúc này"</strong> để bỏ qua nếu đang ở nơi ồn/công sở.
            </div>
            <div class="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
              <strong class="text-blue-600 dark:text-blue-400 block mb-1">Mode 3: Nhận Diện Phản Xạ</strong>
              Hiện từ tiếng Anh và phiên âm $\rightarrow$ Bấm chọn 1 trong 4 nghĩa tiếng Việt trong 3-5 giây.
            </div>
          </div>
        </div>
      </div>
    `;

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
    let filter = "all"; // "all" | "learned" | "A1" | "A2" | "B1" | "B2"

    const renderList = (currentFilter, searchKeyword = "") => {
      let filtered = VOCAB_BANK.filter(w => {
        if (currentFilter === "learned") return learnedIds.has(w.id);
        if (["A1", "A2", "B1", "B2"].includes(currentFilter)) return w.level === currentFilter;
        return true;
      });

      if (searchKeyword.trim()) {
        const kw = searchKeyword.toLowerCase();
        filtered = filtered.filter(w => w.word.toLowerCase().includes(kw) || w.meaningVi.toLowerCase().includes(kw));
      }

      const listContainer = document.getElementById('vocab-card-grid');
      if (!listContainer) return;

      if (filtered.length === 0) {
        listContainer.innerHTML = `<div class="col-span-full py-12 text-center text-slate-400 text-sm">Không tìm thấy từ vựng phù hợp.</div>`;
        return;
      }

      listContainer.innerHTML = filtered.map(w => {
        const isLearned = learnedIds.has(w.id);
        return `
          <div class="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow relative group">
            <div class="flex items-start justify-between mb-2">
              <span class="px-2 py-0.5 rounded text-[11px] font-bold ${w.level === 'A1' ? 'bg-blue-100 text-blue-800' : w.level === 'A2' ? 'bg-cyan-100 text-cyan-800' : w.level === 'B1' ? 'bg-amber-100 text-amber-800' : 'bg-purple-100 text-purple-800'}">
                ${w.level}
              </span>
              <button data-word="${w.word}" class="btn-play-sound p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-indigo-600 transition-colors" title="Phát âm">
                🔊
              </button>
            </div>

            <h4 class="text-xl font-extrabold text-slate-900 dark:text-white mb-0.5">
              ${w.word}
            </h4>
            <div class="text-xs font-mono text-slate-400 mb-2">${w.ipa} • <span class="italic text-slate-500">${w.type}</span></div>
            <p class="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">${w.meaningVi}</p>
            
            ${w.collocations ? `
              <div class="text-[11px] text-indigo-600 dark:text-indigo-400 bg-indigo-50/60 dark:bg-indigo-950/40 p-2 rounded-lg mb-2">
                <strong>Cụm từ:</strong> ${w.collocations}
              </div>
            ` : ''}

            <p class="text-xs text-slate-500 italic">"${w.example}"</p>

            ${isLearned ? `
              <div class="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-emerald-600 font-bold flex items-center space-x-1">
                <span>✅ Đã học</span>
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
            <p class="text-xs text-slate-500">Tra cứu nhanh từ vựng, phát âm và các collocations thực tế.</p>
          </div>

          <!-- Ô tìm kiếm -->
          <div class="relative w-full sm:w-64">
            <input 
              type="text" 
              id="vocab-search-box" 
              placeholder="Tìm từ tiếng Anh / nghĩa..." 
              class="w-full text-xs py-2.5 pl-8 pr-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-indigo-500"
            />
            <span class="absolute left-2.5 top-2.5 text-xs text-slate-400">🔍</span>
          </div>
        </div>

        <!-- Filter Pills -->
        <div class="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none" id="dict-filters">
          <button data-filter="all" class="dict-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 text-white">Tất cả (${VOCAB_BANK.length})</button>
          <button data-filter="learned" class="dict-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Đã học (${learnedIds.size})</button>
          <button data-filter="A1" class="dict-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Level A1</button>
          <button data-filter="A2" class="dict-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Level A2</button>
          <button data-filter="B1" class="dict-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Level B1</button>
          <button data-filter="B2" class="dict-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Level B2</button>
        </div>

        <!-- Grid Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="vocab-card-grid"></div>
      </div>
    `;

    renderList("all");

    // Filter event
    container.querySelectorAll('.dict-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.dict-filter-btn').forEach(b => {
          b.className = "dict-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300";
        });
        btn.className = "dict-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-indigo-600 text-white";
        filter = btn.getAttribute('data-filter');
        const kw = document.getElementById('vocab-search-box')?.value || "";
        renderList(filter, kw);
      });
    });

    document.getElementById('vocab-search-box')?.addEventListener('input', (e) => {
      renderList(filter, e.target.value);
    });
  }

  // ==================== CÀI ĐẶT FIREBASE ====================
  openSettingsModal() {
    const modal = document.getElementById('settings-modal');
    if (!modal) return;
    const saved = localStorage.getItem("APP_FIREBASE_CONFIG");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        document.getElementById('cfg-api-key').value = parsed.apiKey || "";
        document.getElementById('cfg-auth-domain').value = parsed.authDomain || "";
        document.getElementById('cfg-project-id').value = parsed.projectId || "";
        document.getElementById('cfg-storage-bucket').value = parsed.storageBucket || "";
        document.getElementById('cfg-messaging-sender-id').value = parsed.messagingSenderId || "";
        document.getElementById('cfg-app-id').value = parsed.appId || "";
      } catch (e) {}
    }
    modal.classList.remove('hidden');
  }

  saveFirebaseSettings() {
    const config = {
      apiKey: document.getElementById('cfg-api-key').value.trim(),
      authDomain: document.getElementById('cfg-auth-domain').value.trim(),
      projectId: document.getElementById('cfg-project-id').value.trim(),
      storageBucket: document.getElementById('cfg-storage-bucket').value.trim(),
      messagingSenderId: document.getElementById('cfg-messaging-sender-id').value.trim(),
      appId: document.getElementById('cfg-app-id').value.trim()
    };

    localStorage.setItem("APP_FIREBASE_CONFIG", JSON.stringify(config));
    alert("✅ Đã lưu cấu hình Firebase! Trang web sẽ tải lại để áp dụng kết nối mới.");
    window.location.reload();
  }

  // ==================== MÀN HÌNH BẢNG THỐNG KÊ & YEARLY FOCUS HEATMAP ====================
  openAnalyticsModal() {
    this.switchTab("analytics");
  }

  renderAnalyticsPage(container) {
    if (!container) return;

    if (!appState.state.cefrLevel) {
      container.innerHTML = `
        <div class="max-w-md mx-auto text-center py-16 animate-fade-in">
          <div class="text-5xl mb-4">📊</div>
          <h2 class="text-xl font-bold text-slate-800 dark:text-white mb-2">Chưa Có Dữ Liệu Xếp Lớp</h2>
          <p class="text-sm text-slate-500 dark:text-slate-400 mb-6">Hãy hoàn thành bài đánh giá năng lực CEFR 10 câu để mở khóa bảng thống kê và lộ trình thăng hạng.</p>
          <button id="btn-start-placement-from-analytics" class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 transition-all">
            Bắt đầu bài Test Xếp Lớp (10 câu)
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

    // Dữ liệu mẫu (Demo) mô phỏng chính xác mật độ commit như ảnh GitHub của user
    if (this.showDemoHeatmap) {
      const today = new Date();
      for (let i = 1; i <= 365; i++) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const dStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
        if (!wordCountMap[dStr]) {
          if (i <= 42) {
            const r = i % 7;
            if (r === 1) wordCountMap[dStr] = 10;
            else if (r === 2 || r === 5) wordCountMap[dStr] = 18;
            else if (r === 3 || r === 6) wordCountMap[dStr] = 26;
            else if (r === 4) wordCountMap[dStr] = 38;
          } else if (i % 19 === 0 || i % 31 === 0 || i % 47 === 0 || i % 67 === 0 || i % 83 === 0) {
            wordCountMap[dStr] = (i % 2 === 0) ? 10 : 22;
          }
        }
      }
    }

    const now = new Date();
    const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

    // Hàm phân loại Level màu chuẩn GitHub
    const getGitHubLevel = (count, isFuture) => {
      if (isFuture) return { level: 0, cellClass: "gh-cell-0 opacity-30", label: "Ngày trong tương lai", badge: "Tương lai" };
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

        const todayRing = isToday ? 'ring-1 ring-emerald-400 ring-offset-1 ring-offset-[#0d1117]' : '';

        cellsHtml += `
          <div 
            class="aspect-square rounded-[2px] transition-all duration-100 cursor-pointer ${info.cellClass} ${todayRing} hover:scale-125 hover:z-20"
            data-date="${dateStr}"
            data-dayname="Ngày ${day}"
            data-count="${count}"
            data-label="${info.label}"
            data-badge="${info.badge}"
            title="${dateStr}: ${info.label}"
          ></div>
        `;
      }

      return `
        <div class="gh-panel p-3.5 rounded-xl shadow-sm flex flex-col">
          <div class="flex items-center justify-between mb-2">
            <h4 class="text-xs font-bold text-slate-200">${mName}</h4>
            <span class="text-[10px] font-semibold text-slate-400">${monthActiveDays > 0 ? `${monthActiveDays} ngày học` : ''}</span>
          </div>
          
          <div class="grid grid-cols-7 gap-1 text-center text-[9px] font-bold mb-1.5 text-slate-400">
            <span>T2</span><span>T3</span><span>T4</span><span>T5</span><span>T6</span><span class="text-blue-400">T7</span><span class="text-rose-400">CN</span>
          </div>

          <div class="grid grid-cols-7 gap-1 flex-1 items-start">
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

        <!-- 🌟 YEARLY ACTIVITY HEATMAP (CHÍNH XÁC CHUẨN GITHUB) 🌟 -->
        <div class="space-y-4">
          <!-- Controls Header -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="flex items-center space-x-2">
              <span class="text-lg">🟩</span>
              <h3 class="text-lg md:text-xl font-black text-slate-800 dark:text-white">
                GitHub Contribution Activity (365 Ngày)
              </h3>
            </div>

            <div class="flex flex-wrap items-center gap-2">
              <!-- View Mode Toggle -->
              <div class="inline-flex rounded-xl p-1 bg-slate-200 dark:bg-slate-800 text-xs font-bold">
                <button id="btn-view-52weeks" class="px-3 py-1.5 rounded-lg transition-all ${this.analyticsViewMode === '52weeks' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-white'}">
                  52 Tuần (Chuẩn GitHub)
                </button>
                <button id="btn-view-12months" class="px-3 py-1.5 rounded-lg transition-all ${this.analyticsViewMode === '12months' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-white'}">
                  12 Tháng (Lịch)
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
          ${this.analyticsViewMode === '52weeks' ? `
            <!-- AUTHENTIC GITHUB 52-WEEK GRAPH (EXACT MATCH USER IMAGE 1) -->
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
                      <span>Learn how we count contributions: Level 1 (10 từ) • Level 2 (11-20) • Level 3 (21-30) • Level 4 (>30 từ)</span>
                    </span>
                  </div>

                  <!-- Legend -->
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
          ` : `
            <!-- 12-MONTH CALENDAR VIEW (USING SAME GITHUB PALETTE) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              ${monthsHtml}
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

    // Gắn sự kiện chuyển chế độ xem (52 Tuần vs 12 Tháng)
    container.querySelector('#btn-view-52weeks')?.addEventListener('click', () => {
      this.analyticsViewMode = '52weeks';
      this.renderAnalyticsPage(container);
    });

    container.querySelector('#btn-view-12months')?.addEventListener('click', () => {
      this.analyticsViewMode = '12months';
      this.renderAnalyticsPage(container);
    });

    // Gắn sự kiện chuyển đổi Demo / Dữ liệu thực
    container.querySelector('#btn-toggle-demo-heatmap')?.addEventListener('click', () => {
      this.showDemoHeatmap = !this.showDemoHeatmap;
      this.renderAnalyticsPage(container);
    });

    // Gắn sự kiện Inspector tương tác khi rê chuột hoặc click ô
    const inspectorDate = container.querySelector('#inspector-date');
    const inspectorCount = container.querySelector('#inspector-count');
    const inspectorBadge = container.querySelector('#inspector-badge');

    container.querySelectorAll('[data-date]').forEach(cell => {
      const updateInspector = () => {
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

// Khởi chạy App
document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});
