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
    this.currentTab = "vocab"; // "vocab" | "courses" | "dictionary"
    this.vocabEngine = null;
    this.coursesEngine = null;
    this.placementEngine = null;
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

    // Nút Retake Placement Test trên header
    document.getElementById('btn-retake-placement-header')?.addEventListener('click', () => {
      this.switchTab("vocab");
      this.startPlacementTest();
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

    // Streak
    const streakEl = document.getElementById('header-streak-badge');
    if (streakEl) {
      streakEl.innerHTML = `🔥 <span class="font-bold">${streak}</span> ngày`;
    }

    // Level Badge
    const levelBtn = document.getElementById('btn-retake-placement-header');
    if (levelBtn) {
      if (level) {
        levelBtn.className = "px-3 py-1.5 rounded-xl text-xs font-black tracking-wider bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 hover:opacity-80 transition-all flex items-center space-x-1";
        levelBtn.innerHTML = `<span>Rank:</span><span class="font-extrabold text-sm underline">${level}</span>`;
        levelBtn.title = "Click để làm lại bài test xếp lớp";
      } else {
        levelBtn.className = "px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900 text-amber-700 dark:text-amber-300 hover:opacity-80";
        levelBtn.innerHTML = `⚠️ Chưa xếp lớp`;
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

        <!-- Notification Banner / Penalty Status -->
        ${discipline.isPenalized ? `
          <div class="p-5 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border-2 border-rose-300 dark:border-rose-900 text-rose-900 dark:text-rose-100 shadow-sm animate-bounce-short">
            <div class="flex items-start space-x-3">
              <span class="text-2xl">⚠️</span>
              <div>
                <h4 class="font-extrabold text-sm md:text-base">Áp Dụng Hình Phạt Vì Bỏ Lỡ ${discipline.missedDays} Ngày Học!</h4>
                <p class="text-xs md:text-sm mt-1 opacity-90">${discipline.reason}</p>
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
}

// Khởi chạy App
document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});
