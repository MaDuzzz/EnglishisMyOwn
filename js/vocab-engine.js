// ==============================================================================
// ĐỘNG CƠ LUYỆN TẬP TỪ VỰNG (GIAI ĐOẠN 2 & ÔN TẬP KỶ LUẬT)
// - Giao diện đồng bộ 100% với Giai đoạn Thẩm thấu (Card bo góc 2rem, max-w-md)
// - Thanh đếm ngược 20 giây (Tạo áp lực phản xạ) mờ mờ ở mép trên card
// - Logic tính điểm luỹ tiến: Đúng +1 điểm, Sai / Hết giờ -1 điểm
// - Mục tiêu hoàn thành batch: Mặc định 30 điểm
// - Hàng đợi thích ứng (Adaptive Re-queue): Từ làm sai được đưa lại vào queue
//   cho đến khi người học đạt đủ mục tiêu hoàn thành batch
// - Feedback chuẩn UI/UX: Rõ ràng, không vỡ dòng, chuyển đổi nút mượt mà
// ==============================================================================

import { speechService } from './speech.js';
import { appState } from './state.js';
import { VOCAB_BANK } from './data/vocab-bank.js';

export class VocabPracticeEngine {
  constructor(containerElement, options = {}) {
    this.container = containerElement;
    this.options = options;
    this.mode = options.mode || "review"; // "review" | "new_batch"
    this.words = options.words || []; // Danh sách object từ VOCAB_BANK
    this.onCompleted = options.onCompleted || (() => {});
    
    // Mục tiêu hoàn thành batch: Tăng lên 30 điểm giúp kéo dài quá trình ôn luyện & ghi nhớ sâu
    this.targetPoints = options.targetPoints !== undefined ? options.targetPoints : 30;
    this.progressPoints = 0;
    this.correctCount = 0;
    this.totalAttempts = 0;
    this.queue = [];
    this.currentIndex = 0;
    this.isAudioDisabledForSession = false; // Cờ "Không thể nghe lúc này"
    
    // Timer 20 giây (thời lượng lý tưởng cho phản xạ, không quá vội)
    this.timerInterval = null;
    this.timerDuration = 20000; // 20s
    this.timerStartTime = 0;
    this.isTimerPaused = false;
    this.isAnswerSubmitted = false;
  }

  start() {
    if (!this.words || this.words.length === 0) {
      this.renderEmptyState();
      return;
    }

    this.targetPoints = this.options?.targetPoints !== undefined ? this.options.targetPoints : 30;
    this.progressPoints = 0;
    this.correctCount = 0;
    this.totalAttempts = 0;
    this.buildQueue();
    this.currentIndex = 0;
    this.renderCurrentQuestion();
  }

  buildQueue() {
    this.queue = [];
    const availableModes = this.isAudioDisabledForSession 
      ? ["mode1_vn_to_en", "mode3_en_to_vn"] 
      : ["mode1_vn_to_en", "mode2_audio_to_en", "mode3_en_to_vn"];

    // Phân bổ đều các mode cho danh sách từ
    this.words.forEach((word, idx) => {
      const selectedMode = availableModes[idx % availableModes.length];
      this.queue.push({
        word,
        mode: selectedMode,
        id: `q_${word.id}_${idx}`
      });
    });

    // Shuffle nhẹ để các dạng câu hỏi xuất hiện xen kẽ tự nhiên
    this.queue.sort(() => 0.5 - Math.random());
  }

  getNextModeForWord(currentMode) {
    const availableModes = this.isAudioDisabledForSession 
      ? ["mode1_vn_to_en", "mode3_en_to_vn"] 
      : ["mode1_vn_to_en", "mode2_audio_to_en", "mode3_en_to_vn"];
    const otherModes = availableModes.filter(m => m !== currentMode);
    if (otherModes.length > 0) {
      return otherModes[Math.floor(Math.random() * otherModes.length)];
    }
    return currentMode;
  }

  replenishQueue() {
    // Khi hết câu hỏi trong queue nhưng điểm chưa đạt targetPoints:
    // Tạo thêm câu hỏi mới từ danh sách từ vựng của batch
    const availableModes = this.isAudioDisabledForSession 
      ? ["mode1_vn_to_en", "mode3_en_to_vn"] 
      : ["mode1_vn_to_en", "mode2_audio_to_en", "mode3_en_to_vn"];
    
    const extraBatch = [...this.words].sort(() => 0.5 - Math.random());
    extraBatch.forEach((word, idx) => {
      const selectedMode = availableModes[(this.queue.length + idx) % availableModes.length];
      this.queue.push({
        word,
        mode: selectedMode,
        id: `q_${word.id}_extra_${Date.now()}_${idx}`
      });
    });
  }

  renderEmptyState() {
    this.container.innerHTML = `
      <div class="flex-1 flex flex-col items-center justify-center min-h-[calc(100dvh-230px)] md:min-h-[500px] w-full py-4 animate-fade-in">
        <div class="w-full max-w-md mx-auto">
          <div class="bg-white dark:bg-slate-900 rounded-[2rem] p-6 sm:p-8 text-center border-2 border-slate-200/90 dark:border-slate-800 shadow-xl">
            <div class="text-4xl mb-4">🎉</div>
            <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-2">Không còn từ nào cần ôn tập!</h3>
            <p class="text-slate-500 dark:text-slate-400 text-sm mb-6">Bạn đã hoàn thành xuất sắc các mục tiêu từ vựng của hôm nay.</p>
            <button id="btn-empty-back" class="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/25">
              Quay lại Bảng Điều Khiển
            </button>
          </div>
        </div>
      </div>
    `;
    document.getElementById('btn-empty-back')?.addEventListener('click', () => {
      this.onCompleted();
    });
  }

  clearQuestionTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  startQuestionTimer(word) {
    this.clearQuestionTimer();
    this.timerStartTime = Date.now();
    this.isTimerPaused = false;
    this.isAnswerSubmitted = false;

    const timerBar = this.container.querySelector('#question-timer-bar');
    const timerText = this.container.querySelector('#timer-text');

    this.timerInterval = setInterval(() => {
      if (this.isTimerPaused || this.isAnswerSubmitted) return;

      const elapsed = Date.now() - this.timerStartTime;
      const remaining = Math.max(0, this.timerDuration - elapsed);
      const percent = (remaining / this.timerDuration) * 100;
      const secondsLeft = Math.ceil(remaining / 1000);

      if (timerBar) {
        timerBar.style.width = `${percent}%`;
        if (percent <= 25) {
          timerBar.className = "h-full bg-rose-500 transition-all duration-75 ease-linear shadow-[0_0_8px_rgba(244,63,94,0.6)]";
        } else if (percent <= 50) {
          timerBar.className = "h-full bg-amber-400 transition-all duration-75 ease-linear";
        } else {
          timerBar.className = "h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 transition-all duration-75 ease-linear";
        }
      }

      if (timerText) {
        timerText.textContent = `⏱️ ${secondsLeft}s`;
        if (secondsLeft <= 5) {
          timerText.className = "text-[11px] font-black font-mono px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-500 border border-rose-500/30 animate-pulse";
        } else if (secondsLeft <= 10) {
          timerText.className = "text-[11px] font-bold font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/30";
        } else {
          timerText.className = "text-[11px] font-bold font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700";
        }
      }

      if (remaining <= 0) {
        this.clearQuestionTimer();
        this.handleTimeout(word);
      }
    }, 50);
  }

  updateProgressUI() {
    const progressLabel = this.container.querySelector('#label-progress-count');
    const masteryLabel = this.container.querySelector('#label-mastery-percent');
    const progressBar = this.container.querySelector('#practice-progress-bar');

    if (progressLabel) progressLabel.textContent = this.progressPoints;
    const percent = Math.min(100, Math.round((this.progressPoints / this.targetPoints) * 100));
    if (masteryLabel) masteryLabel.textContent = `🎯 Hoàn thành: ${percent}%`;
    if (progressBar) progressBar.style.width = `${percent}%`;
  }

  renderCurrentQuestion() {
    this.clearQuestionTimer();
    this.isAnswerSubmitted = false;

    if (this.progressPoints >= this.targetPoints) {
      this.finishSession();
      return;
    }

    if (this.currentIndex >= this.queue.length) {
      this.replenishQueue();
    }

    const item = this.queue[this.currentIndex];
    if (!item) {
      this.finishSession();
      return;
    }

    const progressPercent = Math.min(100, Math.round((this.progressPoints / this.targetPoints) * 100));

    // Mode metadata
    let modeTitle = "Chế độ 1: Dịch nghĩa & Điền từ";
    let modeBadgeClass = "bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200/60 dark:border-indigo-900/60 text-indigo-700 dark:text-indigo-300";
    if (item.mode === "mode2_audio_to_en") {
      modeTitle = "Chế độ 2: Nghe & Chép chính tả";
      modeBadgeClass = "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200/60 dark:border-emerald-900/60 text-emerald-700 dark:text-emerald-300";
    } else if (item.mode === "mode3_en_to_vn") {
      modeTitle = "Chế độ 3: Nhận diện phản xạ nhanh";
      modeBadgeClass = "bg-blue-50 dark:bg-blue-950/60 border-blue-200/60 dark:border-blue-900/60 text-blue-700 dark:text-blue-300";
    }

    let questionBodyHtml = "";
    if (item.mode === "mode1_vn_to_en") {
      questionBodyHtml = this.renderMode1(item.word);
    } else if (item.mode === "mode2_audio_to_en") {
      questionBodyHtml = this.renderMode2(item.word);
    } else {
      questionBodyHtml = this.renderMode3(item.word);
    }

    this.container.innerHTML = `
      <div class="flex-1 flex flex-col w-full max-w-md mx-auto px-1 sm:px-4 animate-fade-in">
        
        <!-- Top Control Header (Đồng bộ 100% với Giai đoạn Thẩm thấu) -->
        <div class="w-full pt-0.5 pb-2">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center space-x-2">
                <button id="btn-exit-practice" class="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors" title="Thoát phiên luyện tập">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
                <div class="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full ${this.mode === 'review' ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-200/60 dark:border-amber-900/60 text-amber-700 dark:text-amber-300' : 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200/60 dark:border-emerald-900/60 text-emerald-700 dark:text-emerald-300'} text-xs font-bold border">
                  <span class="w-2 h-2 rounded-full ${this.mode === 'review' ? 'bg-amber-500' : 'bg-emerald-500'} animate-pulse"></span>
                  <span>${this.mode === 'review' ? 'Ôn tập kỷ luật' : 'Luyện tập phản xạ'}</span>
                </div>
              </div>

              <!-- Nút Loa / Âm thanh SVG -->
              <button id="btn-toggle-audio-status" title="${!this.isAudioDisabledForSession ? 'Đang bật âm thanh (Mẹo iPhone: Nếu không nghe thấy tiếng, hãy kiểm tra cần gạt rung ở cạnh máy)' : 'Bấm để bật âm thanh'}" class="flex items-center space-x-1 px-2.5 py-1 rounded-xl text-xs font-semibold border ${!this.isAudioDisabledForSession ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-300' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'} transition-all">
                <svg class="w-3.5 h-3.5 ${!this.isAudioDisabledForSession ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                <span>${!this.isAudioDisabledForSession ? 'Âm thanh: Bật' : 'Tắt âm'}</span>
              </button>
            </div>

            <!-- Thanh tiến trình Batch (Tăng khi đúng, giảm khi sai/timeout) -->
            <div class="flex items-center justify-between text-xs font-bold mb-1.5 px-0.5">
              <span class="text-indigo-600 dark:text-indigo-400 flex items-center space-x-1">
                <span>Tiến độ Batch:</span>
                <span id="label-progress-count" class="font-extrabold text-sm text-slate-900 dark:text-white">${this.progressPoints}</span>
                <span class="text-slate-400">/ ${this.targetPoints} điểm</span>
              </span>
              <span id="label-mastery-percent" class="text-emerald-500 dark:text-emerald-400 font-bold text-[11px] flex items-center space-x-1">
                <span>🎯 Hoàn thành: ${progressPercent}%</span>
              </span>
            </div>

            <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden p-0.5 border border-slate-200/60 dark:border-slate-700/60">
              <div id="practice-progress-bar" class="bg-gradient-to-r from-blue-500 via-indigo-600 to-emerald-400 h-full rounded-full transition-all duration-300" style="width: ${progressPercent}%"></div>
            </div>
        </div>

        <!-- Khung Card chứa câu hỏi luyện tập (Bo góc 2rem, shadow-xl, có thanh 20s mờ mờ ở mép trên) -->
        <div class="flex-1 flex items-center justify-center w-full min-h-[460px] sm:min-h-[480px] my-auto py-2">
          <div id="active-practice-card" class="relative w-full rounded-[2rem] bg-white dark:bg-slate-900 border-2 border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl flex flex-col justify-between overflow-hidden select-none">
            
            <!-- THANH ĐẾM NGƯỢC 20 GIÂY (Mờ mờ ở mép trên cùng của card, rút ngắn dần) -->
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-slate-200/30 dark:bg-slate-800/30 overflow-hidden">
              <div id="question-timer-bar" class="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 transition-[width] duration-75 ease-linear" style="width: 100%"></div>
            </div>

            <!-- Card Sub-header: Mode Tag + Đồng hồ đếm ngược -->
            <div class="flex items-center justify-between w-full mb-3 pt-1">
              <div class="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full ${modeBadgeClass} text-[11px] font-bold border">
                <span>${modeTitle}</span>
              </div>
              <span id="timer-text" class="text-[11px] font-bold font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700">
                ⏱️ 20s
              </span>
            </div>

            <!-- Main Question Body -->
            <div class="my-auto py-1">
              ${questionBodyHtml}
            </div>

            <!-- Feedback Area (Hiển thị khi trả lời đúng / sai / hết giờ) -->
            <div id="feedback-area" class="mt-3 hidden"></div>

          </div>
        </div>
      </div>
    `;

    this.bindEvents(item);

    // Kích hoạt Timer 20 giây
    this.startQuestionTimer(item.word);

    // Nếu là Mode 2 và audio đang bật, tự động phát âm ngay
    if (item.mode === "mode2_audio_to_en" && !this.isAudioDisabledForSession) {
      setTimeout(() => speechService.speak(item.word.word), 250);
    }
  }

  // MODE 1: Hiện nghĩa Tiếng Việt -> Gõ từ Tiếng Anh
  renderMode1(word) {
    const hint = `${word.word[0]}${"_ ".repeat(word.word.length - 2)}${word.word[word.word.length - 1]}`;
    return `
      <div class="text-center py-1">
        <div class="mb-3">
          <span class="text-xs font-semibold text-slate-400 dark:text-slate-500">(${word.type})</span>
          <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1 leading-snug">
            "${word.meaningVi}"
          </h3>
        </div>
        
        <div class="inline-flex items-center px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 font-mono text-xs tracking-widest text-slate-600 dark:text-slate-300 mb-4">
          Gợi ý: ${hint} (${word.word.length} ký tự)
        </div>

        <!-- Ô nhập liệu & Nút kiểm tra -->
        <div class="w-full">
          <input 
            type="text" 
            id="vocab-input" 
            placeholder="Gõ từ tiếng Anh..." 
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            class="w-full text-center text-lg sm:text-xl font-bold py-3.5 px-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-900 transition-all shadow-inner"
          />
          <button id="btn-submit-answer" class="w-full mt-3 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-2xl shadow-md shadow-indigo-500/20 active:scale-[0.98] transition-all text-sm">
            Kiểm tra đáp án ➔
          </button>
        </div>
      </div>
    `;
  }

  // MODE 2: Nghe Voice -> Gõ từ Tiếng Anh (Có nút "Không thể nghe lúc này")
  renderMode2(word) {
    return `
      <div class="text-center py-1">
        <!-- Nút Loa Lớn để nghe lại -->
        <div class="my-4">
          <button id="btn-play-audio" class="w-20 h-20 rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/25 transition-transform active:scale-95 group">
            <span class="text-3xl group-hover:scale-110 transition-transform">🔊</span>
          </button>
          <p class="text-xs text-slate-400 mt-2">Bấm vào biểu tượng loa để nghe lại</p>
        </div>

        <!-- Ô nhập liệu & Nút kiểm tra -->
        <div class="w-full">
          <input 
            type="text" 
            id="vocab-input" 
            placeholder="Nghe và gõ lại từ..." 
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            class="w-full text-center text-lg sm:text-xl font-bold py-3.5 px-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:bg-white dark:focus:bg-slate-900 transition-all shadow-inner"
          />
          <button id="btn-submit-answer" class="w-full mt-3 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-2xl shadow-md shadow-emerald-500/20 active:scale-[0.98] transition-all text-sm">
            Kiểm tra đáp án ➔
          </button>
        </div>

        <!-- NÚT: KHÔNG THỂ NGHE LÚC NÀY -->
        <div id="cant-listen-row" class="mt-4 pt-2 border-t border-slate-100 dark:border-slate-800">
          <button id="btn-cant-listen-now" class="text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex items-center justify-center mx-auto space-x-1.5 py-1 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span>🔇</span>
            <span>Không thể nghe lúc này (Bỏ qua bài nghe)</span>
          </button>
        </div>
      </div>
    `;
  }

  // MODE 3: Nhìn từ Tiếng Anh -> Chọn nghĩa Tiếng Việt (Trắc nghiệm 4 đáp án)
  renderMode3(word) {
    const correctAnswer = (word.optionsVi && word.optionsVi.length > 0) ? word.optionsVi[0] : word.meaningVi;
    let options = (word.optionsVi && word.optionsVi.length >= 4)
      ? [...word.optionsVi]
      : [correctAnswer];
    if (options.length < 4) {
      const distractors = VOCAB_BANK
        .filter(w => w.id !== word.id)
        .map(w => w.meaningVi)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      options = [correctAnswer, ...distractors];
    }
    options = options.sort(() => 0.5 - Math.random());

    return `
      <div class="py-1">
        <div class="text-center mb-4">
          <div class="flex items-center justify-center space-x-2 mt-1">
            <h3 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              ${word.word}
            </h3>
            <button id="btn-play-word-audio" class="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors" title="Phát âm">
              🔊
            </button>
          </div>
          <p class="text-xs sm:text-sm font-mono text-slate-400 mt-1">${word.ipa || ""}</p>
        </div>

        <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2.5 text-center">
          Chọn nghĩa Tiếng Việt chính xác:
        </p>

        <!-- 4 Option buttons -->
        <div class="space-y-2.5 w-full" id="options-group">
          ${options.map((opt, idx) => `
            <button 
              data-option="${opt}"
              class="vocab-choice-btn w-full text-left p-3.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 hover:border-indigo-500 hover:bg-indigo-50/40 dark:hover:bg-indigo-950/20 active:scale-[0.99] transition-all flex items-center space-x-3 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm group">
              <span class="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-indigo-600 group-hover:text-white text-slate-500 text-xs flex items-center justify-center font-bold transition-colors">
                ${String.fromCharCode(65 + idx)}
              </span>
              <span class="flex-1">${opt}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }

  bindEvents(item) {
    this.container.querySelector('#btn-exit-practice')?.addEventListener('click', () => {
      this.handleExitPrompt();
    });

    const inputEl = document.getElementById('vocab-input');
    const submitBtn = document.getElementById('btn-submit-answer');
    const cantListenBtn = document.getElementById('btn-cant-listen-now');
    const playAudioBtn = document.getElementById('btn-play-audio');
    const playWordAudioBtn = document.getElementById('btn-play-word-audio');
    const toggleAudioStatusBtn = document.getElementById('btn-toggle-audio-status');

    if (inputEl) {
      inputEl.focus();
      inputEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          if (this.isAnswerSubmitted) {
            document.getElementById('btn-next-question')?.click();
          } else {
            this.handleTextAnswer(inputEl.value, item.word);
          }
        }
      });
    }

    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        this.handleTextAnswer(inputEl ? inputEl.value : "", item.word);
      });
    }

    if (playAudioBtn) {
      playAudioBtn.addEventListener('click', () => {
        speechService.speak(item.word.word);
      });
    }

    if (playWordAudioBtn) {
      playWordAudioBtn.addEventListener('click', () => {
        speechService.speak(item.word.word);
      });
    }

    if (toggleAudioStatusBtn) {
      toggleAudioStatusBtn.addEventListener('click', () => {
        this.isAudioDisabledForSession = !this.isAudioDisabledForSession;
        if (this.isAudioDisabledForSession) {
          this.handleCantListenNow();
        } else {
          this.renderCurrentQuestion();
        }
      });
    }

    if (cantListenBtn) {
      cantListenBtn.addEventListener('click', () => {
        this.handleCantListenNow();
      });
    }

    const choiceBtns = this.container.querySelectorAll('.vocab-choice-btn');
    choiceBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.isAnswerSubmitted) return;
        const selected = btn.getAttribute('data-option');
        this.handleChoiceAnswer(selected, item.word, btn);
      });
    });
  }

  handleCantListenNow() {
    this.clearQuestionTimer();
    this.isAudioDisabledForSession = true;

    // Chuyển toàn bộ câu Mode 2 trong queue sang Mode 1 hoặc 3
    for (let i = this.currentIndex; i < this.queue.length; i++) {
      if (this.queue[i].mode === "mode2_audio_to_en") {
        this.queue[i].mode = (i % 2 === 0) ? "mode1_vn_to_en" : "mode3_en_to_vn";
      }
    }

    const feedbackArea = document.getElementById('feedback-area');
    if (feedbackArea) {
      feedbackArea.classList.remove('hidden');
      feedbackArea.className = "mt-4 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900 text-amber-800 dark:text-amber-200 text-sm animate-fade-in block";
      feedbackArea.innerHTML = `
        <div class="flex items-center space-x-2">
          <span class="text-lg">🔇</span>
          <span><strong>Đã tắt bài tập nghe cho phiên này.</strong> Đang chuyển câu hỏi sang dạng đọc hiểu và điền từ...</span>
        </div>
      `;
    }

    setTimeout(() => {
      this.renderCurrentQuestion();
    }, 1100);
  }

  handleTextAnswer(userInput, word) {
    if (this.isAnswerSubmitted) return;
    this.isAnswerSubmitted = true;
    this.clearQuestionTimer();
    this.totalAttempts++;

    const cleanInput = (userInput || "").trim().toLowerCase();
    const targetWord = word.word.trim().toLowerCase();
    const isCorrect = cleanInput === targetWord;

    const feedbackArea = document.getElementById('feedback-area');
    if (feedbackArea) feedbackArea.classList.remove('hidden');

    const inputEl = document.getElementById('vocab-input');
    const submitBtn = document.getElementById('btn-submit-answer');
    const cantListenRow = document.getElementById('cant-listen-row');
    if (inputEl) inputEl.disabled = true;
    if (submitBtn) submitBtn.classList.add('hidden'); // Ẩn nút kiểm tra cũ để tránh thừa nút
    if (cantListenRow) cantListenRow.classList.add('hidden');

    if (isCorrect) {
      this.correctCount++;
      this.progressPoints = Math.min(this.targetPoints, this.progressPoints + 1);
      this.updateProgressUI();
      speechService.speak(word.word);
      if (window.navigator?.vibrate) window.navigator.vibrate(10);

      feedbackArea.className = "mt-4 rounded-2xl p-4 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100 animate-fade-in space-y-2.5 block";
      feedbackArea.innerHTML = `
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <span class="text-base font-black text-emerald-600 dark:text-emerald-400 whitespace-nowrap">✅ Chính xác!</span>
            <span class="text-xs bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-extrabold px-2 py-0.5 rounded-full whitespace-nowrap">+1 điểm</span>
          </div>
          <span class="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold whitespace-nowrap">${word.ipa || ""}</span>
        </div>

        ${word.example ? `
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            <strong class="text-slate-700 dark:text-slate-200">Ví dụ:</strong> ${word.example}
          </p>
        ` : ''}

        <button id="btn-next-question" class="w-full py-3 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-1.5 mt-2">
          <span>Tiếp tục</span>
          <span class="text-sm">➔</span>
        </button>
      `;
    } else {
      this.progressPoints = Math.max(0, this.progressPoints - 1);
      this.updateProgressUI();
      if (window.navigator?.vibrate) window.navigator.vibrate(20);

      // Re-queue từ vựng để ôn lại
      const currentItem = this.queue[this.currentIndex];
      const nextMode = this.getNextModeForWord(currentItem ? currentItem.mode : "mode1_vn_to_en");
      this.queue.push({
        word,
        mode: nextMode,
        id: `q_${word.id}_retry_${Date.now()}`
      });

      feedbackArea.className = "mt-4 rounded-2xl p-4 bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-100 animate-fade-in space-y-2.5 block";
      feedbackArea.innerHTML = `
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <span class="text-base font-black text-rose-600 dark:text-rose-400 whitespace-nowrap">❌ Chưa chính xác!</span>
            <span class="text-xs bg-rose-500/20 text-rose-700 dark:text-rose-300 font-extrabold px-2 py-0.5 rounded-full whitespace-nowrap">-1 điểm</span>
          </div>
          <span class="text-xs font-mono text-rose-600 dark:text-rose-400 font-bold whitespace-nowrap">${word.ipa || ""}</span>
        </div>

        <div class="text-xs leading-relaxed text-slate-700 dark:text-slate-200">
          <span class="text-slate-500 dark:text-slate-400">Đáp án đúng là:</span>
          <strong class="text-sm font-mono text-rose-600 dark:text-rose-300 underline decoration-rose-400 decoration-2 ml-1">${word.word}</strong>
          <span class="text-slate-500 dark:text-slate-400 font-medium ml-1">(${word.meaningVi})</span>
        </div>

        ${word.example ? `
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed opacity-90">
            <strong class="text-slate-700 dark:text-slate-200">Ví dụ:</strong> ${word.example}
          </p>
        ` : ''}

        <button id="btn-next-question" class="w-full py-3 bg-rose-600 hover:bg-rose-700 active:scale-[0.99] text-white rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-1.5 mt-2">
          <span>Tiếp tục</span>
          <span class="text-sm">➔</span>
        </button>
      `;
    }

    document.getElementById('btn-next-question')?.addEventListener('click', () => {
      this.advanceToNextQuestion();
    });
  }

  handleChoiceAnswer(selectedOption, word, clickedBtn) {
    if (this.isAnswerSubmitted) return;
    this.isAnswerSubmitted = true;
    this.clearQuestionTimer();
    this.totalAttempts++;

    const correctAnswer = (word.optionsVi && word.optionsVi.length > 0) ? word.optionsVi[0] : word.meaningVi;
    const isCorrect = (selectedOption === correctAnswer) || (selectedOption === word.meaningVi);
    const choiceBtns = this.container.querySelectorAll('.vocab-choice-btn');

    choiceBtns.forEach(btn => {
      btn.disabled = true;
      const opt = btn.getAttribute('data-option');
      if (opt === correctAnswer || opt === word.meaningVi) {
        btn.classList.add('bg-emerald-100', 'border-emerald-500', 'text-emerald-900', 'dark:bg-emerald-950', 'dark:text-emerald-100');
      } else if (btn === clickedBtn && !isCorrect) {
        btn.classList.add('bg-rose-100', 'border-rose-500', 'text-rose-900', 'dark:bg-rose-950', 'dark:text-rose-100');
      }
    });

    const feedbackArea = document.getElementById('feedback-area');
    if (feedbackArea) feedbackArea.classList.remove('hidden');

    if (isCorrect) {
      this.correctCount++;
      this.progressPoints = Math.min(this.targetPoints, this.progressPoints + 1);
      this.updateProgressUI();
      speechService.speak(word.word);
      if (window.navigator?.vibrate) window.navigator.vibrate(10);

      feedbackArea.className = "mt-4 rounded-2xl p-4 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100 animate-fade-in space-y-2.5 block";
      feedbackArea.innerHTML = `
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <span class="text-base font-black text-emerald-600 dark:text-emerald-400 whitespace-nowrap">✅ Xuất sắc!</span>
            <span class="text-xs bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-extrabold px-2 py-0.5 rounded-full whitespace-nowrap">+1 điểm</span>
          </div>
          <span class="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold whitespace-nowrap">${word.ipa || ""}</span>
        </div>

        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          Nhận diện phản xạ từ cực nhanh và chuẩn xác.
        </p>

        <button id="btn-next-question" class="w-full py-3 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-1.5 mt-2">
          <span>Tiếp tục</span>
          <span class="text-sm">➔</span>
        </button>
      `;
    } else {
      this.progressPoints = Math.max(0, this.progressPoints - 1);
      this.updateProgressUI();
      if (window.navigator?.vibrate) window.navigator.vibrate(20);

      // Re-queue từ vựng để ôn lại
      const currentItem = this.queue[this.currentIndex];
      const nextMode = this.getNextModeForWord(currentItem ? currentItem.mode : "mode3_en_to_vn");
      this.queue.push({
        word,
        mode: nextMode,
        id: `q_${word.id}_retry_${Date.now()}`
      });

      feedbackArea.className = "mt-4 rounded-2xl p-4 bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-100 animate-fade-in space-y-2.5 block";
      feedbackArea.innerHTML = `
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <span class="text-base font-black text-rose-600 dark:text-rose-400 whitespace-nowrap">❌ Chưa chính xác!</span>
            <span class="text-xs bg-rose-500/20 text-rose-700 dark:text-rose-300 font-extrabold px-2 py-0.5 rounded-full whitespace-nowrap">-1 điểm</span>
          </div>
          <span class="text-xs font-mono text-rose-600 dark:text-rose-400 font-bold whitespace-nowrap">${word.ipa || ""}</span>
        </div>

        <div class="text-xs leading-relaxed text-slate-700 dark:text-slate-200">
          <span class="text-slate-500 dark:text-slate-400">Ghi nhớ:</span>
          <strong class="text-sm font-mono text-rose-600 dark:text-rose-300 ml-1">${word.word}</strong>
          <span class="text-slate-500 dark:text-slate-400 font-medium ml-1">= ${word.meaningVi}</span>
        </div>

        <button id="btn-next-question" class="w-full py-3 bg-rose-600 hover:bg-rose-700 active:scale-[0.99] text-white rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-1.5 mt-2">
          <span>Tiếp tục</span>
          <span class="text-sm">➔</span>
        </button>
      `;
    }

    document.getElementById('btn-next-question')?.addEventListener('click', () => {
      this.advanceToNextQuestion();
    });
  }

  handleTimeout(word) {
    if (this.isAnswerSubmitted) return;
    this.isAnswerSubmitted = true;
    this.clearQuestionTimer();
    this.totalAttempts++;

    // Trừ điểm progress (tối thiểu 0)
    this.progressPoints = Math.max(0, this.progressPoints - 1);
    this.updateProgressUI();

    // Re-queue từ vựng này để luyện lại
    const currentItem = this.queue[this.currentIndex];
    const nextMode = this.getNextModeForWord(currentItem ? currentItem.mode : "mode1_vn_to_en");
    this.queue.push({
      word,
      mode: nextMode,
      id: `q_${word.id}_retry_${Date.now()}`
    });

    // Disable tất cả input / nút chọn
    const inputEl = document.getElementById('vocab-input');
    const submitBtn = document.getElementById('btn-submit-answer');
    const cantListenRow = document.getElementById('cant-listen-row');
    if (inputEl) inputEl.disabled = true;
    if (submitBtn) submitBtn.classList.add('hidden');
    if (cantListenRow) cantListenRow.classList.add('hidden');

    const choiceBtns = this.container.querySelectorAll('.vocab-choice-btn');
    choiceBtns.forEach(btn => {
      btn.disabled = true;
      const opt = btn.getAttribute('data-option');
      const correctAnswer = (word.optionsVi && word.optionsVi.length > 0) ? word.optionsVi[0] : word.meaningVi;
      if (opt === correctAnswer || opt === word.meaningVi) {
        btn.classList.add('bg-emerald-100', 'border-emerald-500', 'text-emerald-900', 'dark:bg-emerald-950', 'dark:text-emerald-100');
      }
    });

    if (window.navigator?.vibrate) window.navigator.vibrate([10, 50, 10]);

    // Hiển thị feedback hết giờ
    const feedbackArea = document.getElementById('feedback-area');
    if (feedbackArea) {
      feedbackArea.classList.remove('hidden');
      feedbackArea.className = "mt-4 rounded-2xl p-4 bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-100 animate-fade-in space-y-2.5 block";
      feedbackArea.innerHTML = `
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <span class="text-base font-black text-amber-600 dark:text-amber-400 whitespace-nowrap">⏰ Hết 20 giây!</span>
            <span class="text-xs bg-amber-500/20 text-amber-700 dark:text-amber-300 font-extrabold px-2 py-0.5 rounded-full whitespace-nowrap">-1 điểm</span>
          </div>
          <span class="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold whitespace-nowrap">${word.ipa || ""}</span>
        </div>

        <div class="text-xs leading-relaxed text-slate-700 dark:text-slate-200">
          <span class="text-slate-500 dark:text-slate-400">Đáp án đúng là:</span>
          <strong class="text-sm font-mono text-amber-600 dark:text-amber-300 underline decoration-amber-400 decoration-2 ml-1">${word.word}</strong>
          <span class="text-slate-500 dark:text-slate-400 font-medium ml-1">(${word.meaningVi})</span>
        </div>

        <button id="btn-next-question" class="w-full py-3 bg-amber-600 hover:bg-amber-700 active:scale-[0.99] text-white rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-1.5 mt-2">
          <span>Tiếp tục</span>
          <span class="text-sm">➔</span>
        </button>
      `;

      document.getElementById('btn-next-question')?.addEventListener('click', () => {
        this.advanceToNextQuestion();
      });
    }
  }

  advanceToNextQuestion() {
    this.clearQuestionTimer();

    // Đã đạt đủ điểm hoàn thành batch?
    if (this.progressPoints >= this.targetPoints) {
      this.finishSession();
      return;
    }

    this.currentIndex++;
    if (this.currentIndex >= this.queue.length) {
      this.replenishQueue();
    }

    this.renderCurrentQuestion();
  }

  handleExitPrompt() {
    this.clearQuestionTimer();
    const confirmExit = window.confirm(
      `Tiến độ hiện tại: ${this.progressPoints} / ${this.targetPoints} điểm hoàn thành batch.\nBạn có chắc chắn muốn tạm dừng phiên luyện tập không?`
    );
    if (confirmExit) {
      this.cleanup();
      this.onCompleted();
    } else {
      // Tiếp tục câu hỏi hiện tại với 20s mới
      const currentItem = this.queue[this.currentIndex];
      if (currentItem) {
        this.startQuestionTimer(currentItem.word);
      }
    }
  }

  cleanup() {
    this.clearQuestionTimer();
  }

  finishSession() {
    this.cleanup();
    const wordIds = this.words.map(w => w.id);
    const accuracy = Math.round((this.correctCount / Math.max(1, this.totalAttempts)) * 100);

    // Cập nhật state hệ thống
    if (this.mode === "review") {
      appState.markReviewComplete(wordIds);
    } else {
      const practiceBonusXP = this.targetPoints * 2;
      if (practiceBonusXP > 0) {
        appState.addXP(practiceBonusXP);
        appState.saveState();
      }
    }

    this.container.innerHTML = `
      <div class="flex-1 flex flex-col items-center justify-center min-h-[calc(100dvh-230px)] md:min-h-[500px] w-full py-4 animate-fade-in">
        <div class="w-full max-w-md mx-auto">
          <div class="bg-white dark:bg-slate-900 rounded-[2rem] p-6 sm:p-8 text-center border-2 border-slate-200/90 dark:border-slate-800 shadow-xl">
            <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-tr from-amber-400 to-emerald-500 flex items-center justify-center text-white text-3xl shadow-lg">
              🏆
            </div>

            <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">
              ${this.mode === 'review' ? 'Hoàn Thành Bài Ôn Tập Kỷ Luật!' : 'Hoàn Thành Toàn Bộ Batch 10 Từ Mới!'}
            </h2>
            <p class="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
              ${this.mode === 'review' ? 'Bạn đã hoàn tất bài ôn tập hôm nay.' : 'Bạn đã xuất sắc vượt qua bài luyện tập phản xạ 20s và làm chủ 100% batch từ vựng.'}<br/>
              Độ chính xác: <strong class="text-indigo-600 dark:text-indigo-400 text-base">${accuracy}%</strong> (${this.correctCount}/${this.totalAttempts} lượt)
            </p>

            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 mb-6 text-left">
              <div class="flex items-center justify-between text-sm py-1.5 border-b border-slate-200 dark:border-slate-700">
                <span class="text-slate-500">Chuỗi ngày kiên trì (Streak):</span>
                <span class="font-extrabold text-amber-500 flex items-center space-x-1">
                  <span>🔥 ${appState.state.streak} ngày</span>
                </span>
              </div>
              <div class="flex items-center justify-between text-sm py-1.5">
                <span class="text-slate-500">Tổng vốn từ đã nạp:</span>
                <span class="font-bold text-slate-800 dark:text-white">${appState.state.learnedWords.length} từ</span>
              </div>
            </div>

            <button id="btn-complete-session" class="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 transition-all">
              Quay lại Bảng Điều Khiển
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('btn-complete-session')?.addEventListener('click', () => {
      this.onCompleted();
    });
  }
}
