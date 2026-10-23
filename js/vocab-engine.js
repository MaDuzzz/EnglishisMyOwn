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
import { celebrationEngine } from './celebration.js';

export class VocabPracticeEngine {
  constructor(containerElement, options = {}) {
    this.container = containerElement;
    this.options = options;
    this.mode = options.mode || "review"; // "review" | "new_batch"
    this.words = options.words || []; // Danh sách object từ VOCAB_BANK
    this.onCompleted = options.onCompleted || (() => {});
    
    // Mỗi từ tương đương 3 nấc chinh phục (mỗi kỹ năng 1 lần trong 1 batch đối với 1 từ)
    const wordCount = Math.max(1, this.words.length);
    const calculatedTarget = wordCount * 3;
    this.targetPoints = (options.targetPoints !== undefined && options.targetPoints <= calculatedTarget)
      ? options.targetPoints
      : calculatedTarget;
    if (this.targetPoints < 3) this.targetPoints = 3;

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
    this.isQuestionTransitioning = false;
    this.sessionStartTime = Date.now();
    this.lastActivityTime = Date.now();
    this.accumulatedActiveSeconds = 0;
  }

  recordActivity() {
    const now = Date.now();
    const delta = (now - this.lastActivityTime) / 1000;
    if (delta > 0 && delta <= 60) {
      this.accumulatedActiveSeconds += delta;
    } else if (delta > 60) {
      this.accumulatedActiveSeconds += 40;
    }
    this.lastActivityTime = now;
  }

  start() {
    if (!this.words || this.words.length === 0) {
      this.renderEmptyState();
      return;
    }

    const wordCount = Math.max(1, this.words.length);
    const calculatedTarget = wordCount * 3;
    this.targetPoints = (this.options?.targetPoints !== undefined && this.options.targetPoints <= calculatedTarget)
      ? this.options.targetPoints
      : calculatedTarget;
    if (this.targetPoints < 3) this.targetPoints = 3;

    this.progressPoints = 0;
    this.correctCount = 0;
    this.totalAttempts = 0;
    this.buildQueue();
    this.currentIndex = 0;
    if (this.container) {
      this.container.innerHTML = '';
    }
    this.renderCurrentQuestion();
  }

  buildQueue() {
    this.queue = [];
    const isAudioOff = this.isAudioDisabledForSession;

    // QUY TẮC SƯ PHẠM 3 KỸ NĂNG CHO MỖI TỪ (3 NẤC CHINH PHỤC):
    // Kỹ năng 1 (Mode 3): Nhận diện phản xạ 4 đáp án (Khởi động)
    // Kỹ năng 2 (Mode 1): Gợi nhớ nghĩa Việt -> Gõ từ vựng tiếng Anh (Recall)
    // Kỹ năng 3 (Mode 2): Nghe native audio -> Chép chính tả (Luyện tai)
    // (Nếu tắt âm thanh: Kỹ năng 3 được chuyển sang Mode 1)

    if (this.words.length === 1) {
      // Trường hợp batch có 1 từ: Đi tuần tự đúng 3 kỹ năng cho từ đó (tổng 3 nấc)
      const singleWord = this.words[0];
      this.queue.push(
        { word: singleWord, mode: "mode3_en_to_vn", id: `q_${singleWord.id}_m3` },
        { word: singleWord, mode: "mode1_vn_to_en", id: `q_${singleWord.id}_m1` },
        { word: singleWord, mode: isAudioOff ? "mode1_vn_to_en" : "mode2_audio_to_en", id: `q_${singleWord.id}_m2` }
      );
      return;
    }

    // Trường hợp batch có nhiều từ (ví dụ 10 từ = 30 nấc):
    // Chia làm 3 chặng sư phạm xen kẽ:
    // Chặng 1: Nhận diện phản xạ Mode 3 cho tất cả các từ (shuffled)
    const round1 = [...this.words].sort(() => 0.5 - Math.random()).map((word, idx) => ({
      word,
      mode: "mode3_en_to_vn",
      id: `q_${word.id}_r1_${idx}`
    }));

    // Chặng 2: Gợi nhớ nghĩa và gõ từ Mode 1 cho tất cả các từ (shuffled)
    const round2 = [...this.words].sort(() => 0.5 - Math.random()).map((word, idx) => ({
      word,
      mode: "mode1_vn_to_en",
      id: `q_${word.id}_r2_${idx}`
    }));

    // Chặng 3: Luyện nghe chính tả Mode 2 cho tất cả các từ (shuffled)
    const round3 = [...this.words].sort(() => 0.5 - Math.random()).map((word, idx) => ({
      word,
      mode: isAudioOff ? "mode1_vn_to_en" : "mode2_audio_to_en",
      id: `q_${word.id}_r3_${idx}`
    }));

    this.queue = [...round1, ...round2, ...round3];
  }

  getNextModeForWord(currentMode) {
    const availableModes = this.isAudioDisabledForSession 
      ? ["mode3_en_to_vn", "mode1_vn_to_en"] 
      : ["mode3_en_to_vn", "mode1_vn_to_en", "mode2_audio_to_en"];
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
      ? ["mode3_en_to_vn", "mode1_vn_to_en"] 
      : ["mode3_en_to_vn", "mode1_vn_to_en", "mode2_audio_to_en"];
    
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

  updateProgressUI(isClimbingStep = null) {
    const progressLabel = this.container.querySelector('#label-progress-count');
    const masteryLabel = this.container.querySelector('#label-mastery-percent');
    const activeTrail = this.container.querySelector('#mountain-trail-active');
    const stickman = this.container.querySelector('#mountain-stickman');
    const stickmanInner = this.container.querySelector('#stickman-inner-body');
    const basePath = this.container.querySelector('#mountain-trail-base');
    const summitFlag = this.container.querySelector('#summit-flag-element');

    if (progressLabel) progressLabel.textContent = this.progressPoints;
    const ratio = Math.max(0, Math.min(1, this.progressPoints / this.targetPoints));
    const percent = Math.min(100, Math.round(ratio * 100));
    if (masteryLabel) masteryLabel.textContent = `${percent}%`;

    // Cập nhật vệt đường leo núi phát sáng (Active gradient trail)
    if (basePath && activeTrail) {
      const totalLen = typeof basePath.getTotalLength === 'function' ? basePath.getTotalLength() : 332;
      activeTrail.style.strokeDasharray = `${totalLen}`;
      activeTrail.style.strokeDashoffset = `${Math.max(0, totalLen * (1 - ratio))}`;
    }

    // Cập nhật tọa độ và hoạt họa Người Que leo núi
    if (stickman) {
      // Tọa độ mặc định nội suy tuyến tính (Fallback)
      let x = 24 + ratio * (350 - 24);
      let y = 56 + ratio * (14 - 56);

      if (basePath && typeof basePath.getPointAtLength === 'function') {
        try {
          const totalLen = basePath.getTotalLength();
          const targetLen = ratio * totalLen;
          const pt = basePath.getPointAtLength(targetLen);
          x = pt.x;
          y = pt.y;
        } catch (e) {}
      }

      // Di chuyển mượt mà dọc theo sườn núi (transform ngoài)
      stickman.style.transform = `translate(${x}px, ${y}px)`;

      // Kích hoạt hoạt họa bước chân leo núi hoặc trượt chân trên inner body (KHÔNG ghi đè translation của stickman)
      if (stickmanInner) {
        stickmanInner.classList.remove('climber-step-anim', 'climber-slip-anim');
        if (isClimbingStep === true) {
          void stickmanInner.offsetWidth;
          stickmanInner.classList.add('climber-step-anim');
        } else if (isClimbingStep === false) {
          void stickmanInner.offsetWidth;
          stickmanInner.classList.add('climber-slip-anim');
        }
      }
    }

    // Khi chạm đỉnh 100%: Kích hoạt cờ đỉnh núi phát sáng hào quang
    if (summitFlag) {
      if (ratio >= 1) {
        summitFlag.classList.add('summit-reached-glow');
      } else {
        summitFlag.classList.remove('summit-reached-glow');
      }
    }
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

    // Tối ưu độ trễ âm thanh: Nạp sẵn từ câu hỏi hiện tại và câu hỏi kế tiếp vào RAM
    if (item.word?.word) {
      speechService.preloadWord(item.word.word);
    }
    const nextQueueItem = this.queue[this.currentIndex + 1];
    if (nextQueueItem?.word?.word) {
      speechService.preloadWord(nextQueueItem.word.word);
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

    const existingMountain = this.container.querySelector('#mountain-svg');
    if (!existingMountain) {
      const initRatio = Math.max(0, Math.min(1, this.progressPoints / this.targetPoints));
      const initX = Math.round((24 + initRatio * (350 - 24)) * 10) / 10;
      const initY = Math.round((56 + initRatio * (14 - 56)) * 10) / 10;

      this.container.innerHTML = `
        <style>
          @keyframes climber-step-bounce {
            0% { transform: translateY(0) rotate(0deg); }
            30% { transform: translateY(-4px) rotate(4deg); }
            65% { transform: translateY(-1px) rotate(-1deg); }
            100% { transform: translateY(0) rotate(0deg); }
          }
          @keyframes climber-slip-down {
            0% { transform: translateX(0) rotate(0deg); }
            30% { transform: translateX(-4px) translateY(2px) rotate(-8deg); }
            70% { transform: translateX(-1px) translateY(1px) rotate(2deg); }
            100% { transform: translateX(0) rotate(0deg); }
          }
          .climber-step-anim {
            animation: climber-step-bounce 0.55s cubic-bezier(0.25, 1, 0.5, 1);
          }
          .climber-slip-anim {
            animation: climber-slip-down 0.55s ease-out;
          }
          @keyframes vn-flag-wave {
            0%, 100% { transform: skewY(0deg) scaleX(1); }
            50% { transform: skewY(2deg) scaleX(0.97); }
          }
          .vn-flag-waving {
            animation: vn-flag-wave 2.4s ease-in-out infinite;
          }
          .summit-reached-glow {
            filter: drop-shadow(0 0 8px rgba(245, 158, 11, 0.95)) drop-shadow(0 0 16px rgba(220, 38, 38, 0.8));
            animation: summit-pulse 1s infinite alternate;
          }
          @keyframes summit-pulse {
            0% { transform: translate(350px, 14px) scale(1); }
            100% { transform: translate(350px, 14px) scale(1.15); }
          }
        </style>

        <div class="flex-1 flex flex-col w-full max-w-md mx-auto px-1 sm:px-4 animate-fade-in">
          
          <!-- Top Control Header: Thoát + Badge Mode + Bật/Tắt Âm Thanh -->
          <div class="w-full pt-0.5 pb-1">
            <div class="flex items-center justify-between mb-1.5">
              <div class="flex items-center space-x-2">
                <button id="btn-exit-practice" class="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors" title="Thoát phiên luyện tập">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
                <div class="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full ${this.mode === 'review' ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-200/60 dark:border-amber-900/60 text-amber-700 dark:text-amber-300' : 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200/60 dark:border-emerald-900/60 text-emerald-700 dark:text-emerald-300'} text-xs font-bold border truncate max-w-[190px] sm:max-w-xs">
                  <span class="w-2 h-2 rounded-full ${this.mode === 'review' ? 'bg-amber-500' : 'bg-emerald-500'} animate-pulse shrink-0"></span>
                  <span class="truncate">${this.mode === 'review' ? 'Ôn tập kỷ luật' : (this.options.batchMeta?.groupName ? this.options.batchMeta.groupName : 'Luyện tập phản xạ')}</span>
                </div>
              </div>

              <!-- Nút Loa / Âm thanh SVG -->
              <button id="btn-toggle-audio-status" title="${!this.isAudioDisabledForSession ? 'Đang bật âm thanh (Mẹo iPhone: Nếu không nghe thấy tiếng, hãy kiểm tra cần gạt rung ở cạnh máy)' : 'Bấm để bật âm thanh'}" class="flex items-center space-x-1 px-2.5 py-1 rounded-xl text-xs font-semibold border ${!this.isAudioDisabledForSession ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-300' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'} transition-all">
                <svg class="w-3.5 h-3.5 ${!this.isAudioDisabledForSession ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                <span>${!this.isAudioDisabledForSession ? 'Âm thanh: Bật' : 'Tắt âm'}</span>
              </button>
            </div>

            <!-- GIAO DIỆN LEO NÚI NGƯỜI QUE (STICKMAN MOUNTAIN CLIMBER PROGRESS TRACK) -->
            <div class="relative w-full rounded-2xl bg-gradient-to-b from-sky-500/10 via-indigo-500/5 to-transparent dark:from-slate-800/60 dark:via-indigo-950/30 dark:to-slate-900/60 border border-sky-200/50 dark:border-indigo-900/50 p-2 sm:p-2.5 mb-2 sm:mb-2.5 overflow-hidden shadow-xs">
              
              <!-- Altitude Info Bar -->
              <div class="flex items-center justify-between text-xs font-bold mb-1 px-1">
                <div class="flex items-center space-x-1.5 text-slate-700 dark:text-slate-200">
                  <span class="text-base">🧗</span>
                  <span class="text-[11px] sm:text-xs text-indigo-700 dark:text-indigo-300 font-extrabold">Độ cao:</span>
                  <span class="text-xs sm:text-sm font-black text-slate-900 dark:text-white" id="label-progress-count">${this.progressPoints}</span>
                  <span class="text-slate-400 font-semibold text-[11px]">/ ${this.targetPoints} nấc</span>
                  <span class="hidden sm:inline-block text-[10px] text-slate-400 px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 font-normal">(${this.words.length} từ • 3 nấc/từ)</span>
                </div>
                <div class="flex items-center space-x-1">
                  <span id="label-mastery-percent" class="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-black bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 tracking-tight">
                    ${progressPercent}%
                  </span>
                </div>
              </div>

              <!-- SVG Mountain Slope Track -->
              <div class="relative w-full h-[62px] sm:h-[70px] select-none">
                <svg id="mountain-svg" class="w-full h-full overflow-visible" viewBox="0 0 380 66" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="mountainFaceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stop-color="#6366F1" stop-opacity="0.18" />
                      <stop offset="100%" stop-color="#6366F1" stop-opacity="0.02" />
                    </linearGradient>

                    <linearGradient id="activeTrailGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="#06B6D4" />
                      <stop offset="50%" stop-color="#10B981" />
                      <stop offset="100%" stop-color="#F59E0B" />
                    </linearGradient>

                    <filter id="summitGlow" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  <!-- Distant mountain peaks -->
                  <polygon points="40,58 110,32 180,58" class="fill-slate-200/50 dark:fill-slate-800/40" />
                  <polygon points="150,58 230,22 310,58" class="fill-slate-200/40 dark:fill-slate-800/30" />

                  <!-- Mountain rock face body -->
                  <path d="M 24 56 C 110 54, 200 42, 350 14 L 350 66 L 24 66 Z" fill="url(#mountainFaceGrad)" />

                  <!-- Inactive trail (đường mòn đá nét đứt) -->
                  <path id="mountain-trail-base" 
                        d="M 24 56 C 110 54, 200 42, 350 14" 
                        fill="none" 
                        stroke="#94A3B8" 
                        stroke-width="2.5" 
                        stroke-dasharray="4 4" 
                        stroke-linecap="round" 
                        class="opacity-40 dark:opacity-30" />

                  <!-- Active climbed trail (vệt sáng leo núi) -->
                  <path id="mountain-trail-active" 
                        d="M 24 56 C 110 54, 200 42, 350 14" 
                        fill="none" 
                        stroke="url(#activeTrailGrad)" 
                        stroke-width="3.5" 
                        stroke-linecap="round" 
                        style="transition: stroke-dashoffset 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);" />

                  <!-- Summit Peak at (350, 14) với Cờ Đỏ Sao Vàng Việt Nam -->
                  <g id="summit-flag-element" transform="translate(350, 14)" class="transition-all duration-300">
                    <polygon points="-10,12 0,0 10,12" fill="#CBD5E1" class="dark:fill-slate-600" />
                    <polygon points="-6,12 0,2 6,12" fill="#FFFFFF" class="dark:fill-slate-200" />
                    <line x1="0" y1="2" x2="0" y2="-24" stroke="#94A3B8" stroke-width="1.8" stroke-linecap="round" />
                    <circle cx="0" cy="-24" r="1.6" fill="#F59E0B" />

                    <!-- Lá Cờ Việt Nam Chuẩn Xác (Tỉ lệ 2:3, cờ đỏ tươi #DA251D, sao vàng 5 cánh ở chính giữa) -->
                    <g class="vn-flag-waving" style="transform-origin: 0px -18px;">
                      <rect x="0" y="-23.5" width="18" height="12" rx="0.8" fill="#DA251D" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.35))" />
                      <g transform="translate(9, -17.5)">
                        <polygon points="0,-3.8 0.85,-1.17 3.61,-1.17 1.38,0.45 2.23,3.07 0,1.45 -2.23,3.07 -1.38,0.45 -3.61,-1.17 -0.85,-1.17" fill="#FFFF00" />
                      </g>
                    </g>
                  </g>

                  <!-- Base Camp Tent at Start (24, 56) -->
                  <g transform="translate(18, 56)">
                    <polygon points="-6,4 0,-6 6,4" fill="#3B82F6" class="opacity-80" />
                    <polygon points="0,-6 6,4 2,4 0,-2" fill="#1D4ED8" />
                  </g>

                  <!-- STICKMAN CLIMBER (Người Que Leo Núi) -->
                  <g id="mountain-stickman" style="transform: translate(${initX}px, ${initY}px); transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1); will-change: transform;">
                    <g id="stickman-inner-body" class="text-slate-800 dark:text-white" style="transform-origin: 0px 0px;">
                      <ellipse cx="0" cy="1" rx="5" ry="1.4" fill="rgba(0,0,0,0.25)" class="dark:fill-black/40" />
                      <rect x="-6" y="-17" width="4.5" height="6.5" rx="1.5" fill="#F59E0B" stroke="#D97706" stroke-width="0.8" />
                      <path class="stickman-leg-back" d="M -1 -7 L -5 -2 L -7 0" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                      <path class="stickman-leg-front" d="M 0 -7 L 3 -3 L 2 0" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                      <line class="stickman-torso" x1="-0.5" y1="-7" x2="2.5" y2="-17" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
                      <path class="stickman-arm-back" d="M 1 -15 L -4 -11 L -7 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                      <line x1="-8.5" y1="-1" x2="-5.5" y2="0" stroke="#94A3B8" stroke-width="1.2" stroke-linecap="round" />
                      <path class="stickman-arm-front" d="M 2.5 -15 L 7 -11 L 8 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <line x1="6.5" y1="-1" x2="9.5" y2="0" stroke="#94A3B8" stroke-width="1.2" stroke-linecap="round" />
                      <circle class="stickman-head" cx="4" cy="-21" r="3.8" fill="currentColor" />
                      <path d="M 1.5 -23 L 8 -22 L 5 -20 Z" fill="#EF4444" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <!-- Khung Card chứa câu hỏi luyện tập (Bo góc linh hoạt, tự động nâng lên khi bàn phím ảo iPhone bật) -->
          <div id="practice-card-wrapper" class="flex-1 flex flex-col justify-start sm:justify-center items-center w-full min-h-0 sm:min-h-[480px] my-1 sm:my-auto py-1 sm:py-2 transition-all duration-200">
            <div id="active-practice-card" class="relative w-full rounded-2xl sm:rounded-[2rem] bg-white dark:bg-slate-900 border-2 border-slate-200/90 dark:border-slate-800 p-4 sm:p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl flex flex-col justify-between overflow-hidden select-none transition-all duration-200">
              
              <!-- THANH ĐẾM NGƯỢC 20 GIÂY -->
              <div class="absolute top-0 left-0 right-0 h-1.5 bg-slate-200/30 dark:bg-slate-800/30 overflow-hidden">
                <div id="question-timer-bar" class="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 transition-[width] duration-75 ease-linear" style="width: 100%"></div>
              </div>

              <!-- Card Sub-header: Mode Tag + Đồng hồ đếm ngược -->
              <div class="flex items-center justify-between w-full mb-2 sm:mb-3 pt-0.5 sm:pt-1">
                <div id="card-mode-badge" class="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full ${modeBadgeClass} text-[10px] sm:text-[11px] font-bold border">
                  <span>${modeTitle}</span>
                </div>
                <span id="timer-text" class="text-[10px] sm:text-[11px] font-bold font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700">
                  ⏱️ 20s
                </span>
              </div>

              <!-- Main Question Body Container -->
              <div id="question-body-container" class="py-0.5 sm:py-1">
                ${questionBodyHtml}
              </div>

              <!-- Feedback Area (Hiển thị khi trả lời đúng / sai / hết giờ) -->
              <div id="feedback-area" class="mt-2.5 sm:mt-3 hidden"></div>

            </div>
          </div>
        </div>
      `;
    } else {
      // Đã có ngọn núi và người que: Chỉ cập nhật nội dung card mượt mà, KHÔNG gây giật màn hình
      const cardModeBadge = this.container.querySelector('#card-mode-badge');
      if (cardModeBadge) {
        cardModeBadge.className = `inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full ${modeBadgeClass} text-[10px] sm:text-[11px] font-bold border`;
        cardModeBadge.innerHTML = `<span>${modeTitle}</span>`;
      }

      const timerBar = this.container.querySelector('#question-timer-bar');
      if (timerBar) {
        timerBar.style.width = '100%';
        timerBar.className = 'h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 transition-[width] duration-75 ease-linear';
      }

      const timerText = this.container.querySelector('#timer-text');
      if (timerText) {
        timerText.textContent = '⏱️ 20s';
        timerText.className = 'text-[10px] sm:text-[11px] font-bold font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700';
      }

      const questionBodyContainer = this.container.querySelector('#question-body-container');
      if (questionBodyContainer) {
        questionBodyContainer.innerHTML = questionBodyHtml;
        questionBodyContainer.classList.remove('animate-fade-in');
        void questionBodyContainer.offsetWidth;
        questionBodyContainer.classList.add('animate-fade-in');
      }

      const feedbackArea = this.container.querySelector('#feedback-area');
      if (feedbackArea) {
        feedbackArea.className = 'mt-2.5 sm:mt-3 hidden';
        feedbackArea.innerHTML = '';
      }
    }

    this.bindEvents(item);
    this.updateProgressUI();

    // Kích hoạt Timer 20 giây
    this.startQuestionTimer(item.word);

    // Nếu là Mode 2 và audio đang bật, tự động phát âm ngay
    if (item.mode === "mode2_audio_to_en" && !this.isAudioDisabledForSession) {
      setTimeout(() => speechService.speak(item.word.word), 60);
    }
  }

  // MODE 1: Hiện nghĩa Tiếng Việt -> Gõ từ Tiếng Anh
  renderMode1(word) {
    const hint = `${word.word[0]}${"_ ".repeat(word.word.length - 2)}${word.word[word.word.length - 1]}`;
    return `
      <div class="text-center py-0.5 sm:py-1">
        <div class="mb-2 sm:mb-3">
          <span class="text-xs font-semibold text-slate-400 dark:text-slate-500">(${word.type})</span>
          <h3 class="text-lg sm:text-2xl font-black text-slate-900 dark:text-white mt-0.5 leading-snug">
            "${word.meaningVi}"
          </h3>
        </div>
        
        <div class="inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 font-mono text-[11px] sm:text-xs tracking-wider sm:tracking-widest text-slate-600 dark:text-slate-300 mb-2.5 sm:mb-4">
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
            autocapitalize="none"
            spellcheck="false"
            lang="en"
            inputmode="text"
            class="w-full text-center text-base sm:text-xl font-bold py-2.5 sm:py-3.5 px-3 sm:px-4 rounded-xl sm:rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-900 transition-all shadow-inner"
          />
          <button id="btn-submit-answer" class="w-full mt-2.5 sm:mt-3 py-3 sm:py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl sm:rounded-2xl shadow-md shadow-indigo-500/20 active:scale-[0.98] transition-all text-xs sm:text-sm">
            Kiểm tra đáp án ➔
          </button>
        </div>
      </div>
    `;
  }

  // MODE 2: Nghe Voice -> Gõ từ Tiếng Anh (Có nút "Không thể nghe lúc này")
  renderMode2(word) {
    return `
      <div class="text-center py-0.5 sm:py-1">
        <!-- Nút Loa Lớn để nghe lại -->
        <div class="my-2 sm:my-3">
          <button id="btn-play-audio" class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/25 transition-transform active:scale-95 group">
            <span class="text-2xl sm:text-3xl group-hover:scale-110 transition-transform">🔊</span>
          </button>
          <p class="text-[11px] sm:text-xs text-slate-400 mt-1 sm:mt-2">Bấm vào loa để nghe lại</p>
        </div>

        <!-- Ô nhập liệu & Nút kiểm tra -->
        <div class="w-full">
          <input 
            type="text" 
            id="vocab-input" 
            placeholder="Nghe và gõ lại từ..." 
            autocomplete="off"
            autocorrect="off"
            autocapitalize="none"
            spellcheck="false"
            lang="en"
            inputmode="text"
            class="w-full text-center text-base sm:text-xl font-bold py-2.5 sm:py-3.5 px-3 sm:px-4 rounded-xl sm:rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:bg-white dark:focus:bg-slate-900 transition-all shadow-inner"
          />
          <button id="btn-submit-answer" class="w-full mt-2.5 sm:mt-3 py-3 sm:py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-xl sm:rounded-2xl shadow-md shadow-emerald-500/20 active:scale-[0.98] transition-all text-xs sm:text-sm">
            Kiểm tra đáp án ➔
          </button>
        </div>

        <!-- NÚT: KHÔNG THỂ NGHE LÚC NÀY -->
        <div id="cant-listen-row" class="mt-2.5 sm:mt-4 pt-1.5 sm:pt-2 border-t border-slate-100 dark:border-slate-800">
          <button id="btn-cant-listen-now" class="text-[11px] sm:text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex items-center justify-center mx-auto space-x-1.5 py-1 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span>🔇</span>
            <span>Không thể nghe lúc này</span>
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
              type="button"
              data-option="${opt}"
              class="vocab-choice-btn w-full text-left p-3.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 active:scale-[0.98] active:border-indigo-500 transition-all flex items-center space-x-3 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm">
              <span class="choice-badge w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs flex items-center justify-center font-bold transition-colors shrink-0">
                ${String.fromCharCode(65 + idx)}
              </span>
              <span class="flex-1 leading-snug">${opt}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }

  updateAudioButtonUI() {
    const btn = this.container.querySelector('#btn-toggle-audio-status');
    if (!btn) return;
    if (!this.isAudioDisabledForSession) {
      btn.className = "flex items-center space-x-1 px-2.5 py-1 rounded-xl text-xs font-semibold border bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-300 transition-all";
      btn.title = "Đang bật âm thanh (Mẹo iPhone: Nếu không nghe thấy tiếng, hãy kiểm tra cần gạt rung ở cạnh máy)";
      btn.innerHTML = `
        <svg class="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
        <span>Âm thanh: Bật</span>
      `;
    } else {
      btn.className = "flex items-center space-x-1 px-2.5 py-1 rounded-xl text-xs font-semibold border bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 transition-all";
      btn.title = "Bấm để bật âm thanh";
      btn.innerHTML = `
        <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
        <span>Tắt âm</span>
      `;
    }
  }

  bindEvents(item) {
    const exitBtn = this.container.querySelector('#btn-exit-practice');
    if (exitBtn) {
      exitBtn.onclick = () => {
        this.handleExitPrompt();
      };
    }

    const toggleAudioStatusBtn = this.container.querySelector('#btn-toggle-audio-status');
    if (toggleAudioStatusBtn) {
      toggleAudioStatusBtn.onclick = () => {
        this.isAudioDisabledForSession = !this.isAudioDisabledForSession;
        this.updateAudioButtonUI();
        if (this.isAudioDisabledForSession) {
          this.handleCantListenNow();
        } else {
          this.renderCurrentQuestion();
        }
      };
    }

    const inputEl = document.getElementById('vocab-input');
    const submitBtn = document.getElementById('btn-submit-answer');
    const cantListenBtn = document.getElementById('btn-cant-listen-now');
    const playAudioBtn = document.getElementById('btn-play-audio');
    const playWordAudioBtn = document.getElementById('btn-play-word-audio');

    if (inputEl) {
      const cardWrapper = document.getElementById('practice-card-wrapper');

      const scrollToInput = () => {
        setTimeout(() => {
          const target = submitBtn || inputEl;
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }, 280);
      };

      inputEl.addEventListener('focus', () => {
        cardWrapper?.classList.add('keyboard-open');
        scrollToInput();
      });

      inputEl.addEventListener('blur', () => {
        setTimeout(() => {
          if (document.activeElement !== inputEl) {
            cardWrapper?.classList.remove('keyboard-open');
          }
        }, 150);
      });

      // Lắng nghe window.visualViewport trên iOS Safari để nhận biết tức thì khi bàn phím mở
      if (typeof window !== 'undefined' && window.visualViewport) {
        if (this.viewportHandler) {
          window.visualViewport.removeEventListener('resize', this.viewportHandler);
        }
        this.viewportHandler = () => {
          const isKeyboard = window.visualViewport.height < window.innerHeight * 0.82;
          if (isKeyboard && document.activeElement === inputEl) {
            cardWrapper?.classList.add('keyboard-open');
            scrollToInput();
          } else if (!isKeyboard) {
            cardWrapper?.classList.remove('keyboard-open');
          }
        };
        window.visualViewport.addEventListener('resize', this.viewportHandler, { passive: true });
      }

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
      let lastPlay = 0;
      const play = (e) => {
        e.stopPropagation();
        const now = Date.now();
        if (now - lastPlay < 500) return;
        lastPlay = now;
        if (window.navigator?.vibrate) window.navigator.vibrate(10);
        playAudioBtn.classList.add('scale-110');
        setTimeout(() => playAudioBtn.classList.remove('scale-110'), 350);
        speechService.speak(item.word.word);
      };
      playAudioBtn.addEventListener('click', play);
      playAudioBtn.addEventListener('touchend', play);
    }

    if (playWordAudioBtn) {
      let lastPlay = 0;
      const play = (e) => {
        e.stopPropagation();
        const now = Date.now();
        if (now - lastPlay < 500) return;
        lastPlay = now;
        if (window.navigator?.vibrate) window.navigator.vibrate(10);
        playWordAudioBtn.classList.add('scale-110');
        setTimeout(() => playWordAudioBtn.classList.remove('scale-110'), 350);
        speechService.speak(item.word.word);
      };
      playWordAudioBtn.addEventListener('click', play);
      playWordAudioBtn.addEventListener('touchend', play);
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
    if (this.isAnswerSubmitted || this.isQuestionTransitioning) return;
    this.recordActivity();
    this.isAnswerSubmitted = true;
    this.clearQuestionTimer();
    this.totalAttempts++;

    const cleanInput = (userInput || "").trim().toLowerCase();
    const targetWord = word.word.trim().toLowerCase();
    
    // Khử dấu tiếng Việt nếu bàn phím gõ Telex trên điện thoại tự động ghép dấu
    const normalizeInput = (str) => {
      return (str || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'd');
    };
    const isCorrect = (cleanInput === targetWord) || (normalizeInput(cleanInput) === targetWord);

    const feedbackArea = document.getElementById('feedback-area');
    if (feedbackArea) feedbackArea.classList.remove('hidden');

    const inputEl = document.getElementById('vocab-input');
    const submitBtn = document.getElementById('btn-submit-answer');
    const cantListenRow = document.getElementById('cant-listen-row');
    const cardWrapper = document.getElementById('practice-card-wrapper');
    if (inputEl) {
      inputEl.blur();
      inputEl.disabled = true;
    }
    if (cardWrapper) {
      cardWrapper.classList.remove('keyboard-open');
    }
    if (submitBtn) submitBtn.classList.add('hidden'); // Ẩn nút kiểm tra cũ để tránh thừa nút
    if (cantListenRow) cantListenRow.classList.add('hidden');

    if (isCorrect) {
      this.correctCount++;
      this.progressPoints = Math.min(this.targetPoints, this.progressPoints + 1);
      this.updateProgressUI(true);
      speechService.speak(word.word);
      if (window.navigator?.vibrate) window.navigator.vibrate(10);

      feedbackArea.className = "mt-4 rounded-2xl p-4 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100 animate-fade-in space-y-2.5 block";
      feedbackArea.innerHTML = `
        <div class="flex items-center justify-between gap-2 flex-wrap min-w-0">
          <div class="flex items-center space-x-2">
            <span class="text-sm sm:text-base font-black text-emerald-600 dark:text-emerald-400 whitespace-nowrap">✅ Chính xác!</span>
            <span class="text-[11px] sm:text-xs bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-extrabold px-2 py-0.5 rounded-full whitespace-nowrap">+1 nấc leo núi 🧗</span>
          </div>
          ${word.ipa ? `<span class="text-[11px] sm:text-xs font-mono text-emerald-700 dark:text-emerald-300 font-semibold px-2 py-0.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 break-words max-w-full text-right">${word.ipa}</span>` : ''}
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
      this.updateProgressUI(false);
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
        <div class="flex items-center justify-between gap-2 flex-wrap min-w-0">
          <div class="flex items-center space-x-2">
            <span class="text-sm sm:text-base font-black text-rose-600 dark:text-rose-400 whitespace-nowrap">❌ Chưa chính xác!</span>
            <span class="text-[11px] sm:text-xs bg-rose-500/20 text-rose-700 dark:text-rose-300 font-extrabold px-2 py-0.5 rounded-full whitespace-nowrap">-1 nấc trượt xuống ⚠️</span>
          </div>
          ${word.ipa ? `<span class="text-[11px] sm:text-xs font-mono text-rose-700 dark:text-rose-300 font-semibold px-2 py-0.5 rounded-lg bg-rose-500/10 border border-rose-500/20 break-words max-w-full text-right">${word.ipa}</span>` : ''}
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
    if (this.isAnswerSubmitted || this.isQuestionTransitioning) return;
    this.recordActivity();
    this.isAnswerSubmitted = true;
    this.clearQuestionTimer();
    this.totalAttempts++;

    const correctAnswer = (word.optionsVi && word.optionsVi.length > 0) ? word.optionsVi[0] : word.meaningVi;
    const isCorrect = (selectedOption === correctAnswer) || (selectedOption === word.meaningVi);
    const choiceBtns = this.container.querySelectorAll('.vocab-choice-btn');

    choiceBtns.forEach(btn => {
      btn.disabled = true;
      const opt = btn.getAttribute('data-option');
      const badge = btn.querySelector('.choice-badge');
      if (opt === correctAnswer || opt === word.meaningVi) {
        btn.classList.add('bg-emerald-100', 'border-emerald-500', 'text-emerald-900', 'dark:bg-emerald-950', 'dark:text-emerald-100');
        if (badge) {
          badge.className = 'choice-badge w-6 h-6 rounded-lg bg-emerald-600 text-white text-xs flex items-center justify-center font-bold shrink-0 shadow-xs';
        }
      } else if (btn === clickedBtn && !isCorrect) {
        btn.classList.add('bg-rose-100', 'border-rose-500', 'text-rose-900', 'dark:bg-rose-950', 'dark:text-rose-100');
        if (badge) {
          badge.className = 'choice-badge w-6 h-6 rounded-lg bg-rose-600 text-white text-xs flex items-center justify-center font-bold shrink-0 shadow-xs';
        }
      }
    });

    const feedbackArea = document.getElementById('feedback-area');
    if (feedbackArea) feedbackArea.classList.remove('hidden');

    if (isCorrect) {
      this.correctCount++;
      this.progressPoints = Math.min(this.targetPoints, this.progressPoints + 1);
      this.updateProgressUI(true);
      speechService.speak(word.word);
      if (window.navigator?.vibrate) window.navigator.vibrate(10);

      feedbackArea.className = "mt-4 rounded-2xl p-4 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100 animate-fade-in space-y-2.5 block";
      feedbackArea.innerHTML = `
        <div class="flex items-center justify-between gap-2 flex-wrap min-w-0">
          <div class="flex items-center space-x-2">
            <span class="text-sm sm:text-base font-black text-emerald-600 dark:text-emerald-400 whitespace-nowrap">✅ Xuất sắc!</span>
            <span class="text-[11px] sm:text-xs bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-extrabold px-2 py-0.5 rounded-full whitespace-nowrap">+1 nấc leo núi 🧗</span>
          </div>
          ${word.ipa ? `<span class="text-[11px] sm:text-xs font-mono text-emerald-700 dark:text-emerald-300 font-semibold px-2 py-0.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 break-words max-w-full text-right">${word.ipa}</span>` : ''}
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
      this.updateProgressUI(false);
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
        <div class="flex items-center justify-between gap-2 flex-wrap min-w-0">
          <div class="flex items-center space-x-2">
            <span class="text-sm sm:text-base font-black text-rose-600 dark:text-rose-400 whitespace-nowrap">❌ Chưa chính xác!</span>
            <span class="text-[11px] sm:text-xs bg-rose-500/20 text-rose-700 dark:text-rose-300 font-extrabold px-2 py-0.5 rounded-full whitespace-nowrap">-1 nấc trượt xuống ⚠️</span>
          </div>
          ${word.ipa ? `<span class="text-[11px] sm:text-xs font-mono text-rose-700 dark:text-rose-300 font-semibold px-2 py-0.5 rounded-lg bg-rose-500/10 border border-rose-500/20 break-words max-w-full text-right">${word.ipa}</span>` : ''}
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

    // Trừ 1 nấc leo núi (tối thiểu 0)
    this.progressPoints = Math.max(0, this.progressPoints - 1);
    this.updateProgressUI(false);

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
    const cardWrapper = document.getElementById('practice-card-wrapper');
    if (inputEl) {
      inputEl.blur();
      inputEl.disabled = true;
    }
    if (cardWrapper) {
      cardWrapper.classList.remove('keyboard-open');
    }
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
        <div class="flex items-center justify-between gap-2 flex-wrap min-w-0">
          <div class="flex items-center space-x-2">
            <span class="text-sm sm:text-base font-black text-amber-600 dark:text-amber-400 whitespace-nowrap">⏰ Hết 20 giây!</span>
            <span class="text-[11px] sm:text-xs bg-amber-500/20 text-amber-700 dark:text-amber-300 font-extrabold px-2 py-0.5 rounded-full whitespace-nowrap">-1 nấc trượt xuống ⚠️</span>
          </div>
          ${word.ipa ? `<span class="text-[11px] sm:text-xs font-mono text-amber-700 dark:text-amber-300 font-semibold px-2 py-0.5 rounded-lg bg-amber-500/10 border border-amber-500/20 break-words max-w-full text-right">${word.ipa}</span>` : ''}
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

    // Blur mọi element đang active để tránh focus tự động rơi vào option D ở câu tiếp theo
    if (typeof document !== 'undefined' && document.activeElement) {
      try {
        document.activeElement.blur();
      } catch (e) {}
    }

    // Đã đạt đủ điểm hoàn thành batch?
    if (this.progressPoints >= this.targetPoints) {
      this.finishSession();
      return;
    }

    this.isQuestionTransitioning = true;
    this.currentIndex++;
    if (this.currentIndex >= this.queue.length) {
      this.replenishQueue();
    }

    this.renderCurrentQuestion();

    // Shield: Chặn mọi ghost click / chạm đúp rò rỉ từ nút "Tiếp tục" trong 300ms đầu
    setTimeout(() => {
      this.isQuestionTransitioning = false;
    }, 300);
  }

  handleExitPrompt() {
    this.clearQuestionTimer();
    const isNewBatch = this.mode === 'new_batch';
    const confirmExit = window.confirm(
      isNewBatch
        ? `Tiến độ hiện tại: ${this.progressPoints} / ${this.targetPoints} nấc leo núi.\nNếu thoát bây giờ, bài luyện tập chưa hoàn tất và batch từ mới này sẽ KHÔNG được tính (coi như chưa học). Bạn có chắc chắn muốn thoát không?`
        : `Tiến độ hiện tại: ${this.progressPoints} / ${this.targetPoints} nấc leo núi.\nBạn có chắc chắn muốn tạm dừng phiên ôn tập không?`
    );
    if (confirmExit) {
      this.cleanup();
      this.recordActivity();
      if (this.accumulatedActiveSeconds > 0) {
        appState.recordStudyTime(this.accumulatedActiveSeconds);
      }
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
    if (this.viewportHandler && typeof window !== 'undefined' && window.visualViewport) {
      window.visualViewport.removeEventListener('resize', this.viewportHandler);
      this.viewportHandler = null;
    }
  }

  finishSession() {
    this.cleanup();
    this.recordActivity();
    if (this.accumulatedActiveSeconds > 0) {
      appState.recordStudyTime(this.accumulatedActiveSeconds);
    }

    const wordIds = this.words.map(w => w.id);
    const accuracy = Math.round((this.correctCount / Math.max(1, this.totalAttempts)) * 100);

    // Tính toán thời lượng và tốc độ phản xạ của phiên học
    const totalPracticeSec = Math.round(this.accumulatedActiveSeconds + (this.options.batchMeta?.absorbStudySeconds || 0));
    const sessionMin = Math.floor(totalPracticeSec / 60);
    const sessionSec = totalPracticeSec % 60;
    const sessionTimeFormatted = sessionMin > 0 ? `${sessionMin}p ${sessionSec}s` : `${sessionSec}s`;
    const speedPerWord = Math.max(1, Math.round(totalPracticeSec / Math.max(1, wordIds.length)));
    let speedEvaluation = speedPerWord < 45 
      ? '⚡ Siêu tốc' 
      : (speedPerWord <= 75 ? '🎯 Chuẩn tối ưu' : '⏳ Cần tập trung hơn');

    let hasRemainingReview = false;
    let disciplineStatus = null;
    let isStreakDone = false;

    // Cập nhật state hệ thống
    if (this.mode === "review") {
      disciplineStatus = appState.markReviewBatchComplete(wordIds);
      hasRemainingReview = disciplineStatus.needsReview && disciplineStatus.remainingReviewCount > 0;
    } else {
      // mode === "new_batch"
      // CHÍNH THỨC XÁC NHẬN VÀ LƯU 10 TỪ MỚI VÀO HỆ THỐNG KHI VƯỢT QUA 100% BÀI LUYỆN TẬP PHẢN XẠ
      const acceptedIds = this.options.batchMeta?.acceptedIds || wordIds;
      const skippedIds = this.options.batchMeta?.skippedIds || [];
      appState.markNewBatchComplete(acceptedIds, skippedIds);

      const practiceBonusXP = this.targetPoints * 2;
      if (practiceBonusXP > 0) {
        appState.addXP(practiceBonusXP);
        appState.saveState();
      }
      isStreakDone = appState.isTodayTaskComplete();
    }

    // Kích hoạt hiệu ứng pháo hoa giấy 2 bên & Kèn đồng chiến thắng ăn mừng!
    try {
      celebrationEngine.trigger();
    } catch (e) {
      console.warn('Lỗi hiệu ứng chúc mừng:', e);
    }

    // Xây dựng nội dung màn hình tổng kết
    let titleHtml = '';
    let descHtml = '';
    let iconEmoji = '🏆';
    let actionButtonsHtml = '';

    if (this.mode === 'review') {
      if (hasRemainingReview) {
        iconEmoji = '🧗';
        titleHtml = `Hoàn Thành Đợt ${this.options.batchMeta?.currentBatchIndex || 1}/${this.options.batchMeta?.totalBatches || 1}!`;
        descHtml = `Bạn đã chinh phục thành công toàn bộ ${this.targetPoints} nấc thử thách của đợt này (${wordIds.length} từ x 3 kỹ năng).<br/>Còn <strong class="text-amber-500 font-bold">${disciplineStatus.remainingReviewCount} từ</strong> nữa để hoàn tất toàn bộ bài ôn tập T-1.`;
        actionButtonsHtml = `
          <button id="btn-next-review-batch" class="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg shadow-orange-500/25 transition-all text-xs sm:text-sm flex items-center justify-center space-x-2">
            <span>🚀</span>
            <span>Ôn tiếp Đợt ${disciplineStatus.currentBatchIndex}/${disciplineStatus.totalBatches} (${disciplineStatus.currentReviewBatch.length} từ)</span>
          </button>
          <button id="btn-complete-session" class="w-full mt-2.5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold rounded-xl transition-all text-xs">
            Về Bảng Điều Khiển
          </button>
        `;
      } else {
        iconEmoji = '🏆';
        titleHtml = `Chinh Phục Thành Công Đỉnh Núi Kỷ Luật!`;
        descHtml = `Xuất sắc! Bạn đã vượt qua ${this.targetPoints} nấc thử thách (${disciplineStatus?.totalReviewCount || wordIds.length} từ x 3 kỹ năng) và cắm cờ chiến thắng đỉnh núi.<br/><strong class="text-indigo-600 dark:text-indigo-400">Hãy tiếp tục học ít nhất 1 batch 10 từ mới để bảo toàn chuỗi Streak hôm nay!</strong>`;
        actionButtonsHtml = `
          <button id="btn-open-new-batch" class="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 transition-all text-xs sm:text-sm flex items-center justify-center space-x-2">
            <span>✨</span>
            <span>Mở Khóa & Nạp 10 Từ Mới Ngay</span>
          </button>
          <button id="btn-complete-session" class="w-full mt-2.5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold rounded-xl transition-all text-xs">
            Quay lại Bảng Điều Khiển
          </button>
        `;
      }
    } else {
      // mode === 'new_batch'
      if (isStreakDone) {
        iconEmoji = '🔥';
        const groupTitle = this.options.batchMeta?.groupName ? ` Chủ Đề "${this.options.batchMeta.groupName}"` : ` 10 Từ Mới`;
        titleHtml = `Chinh Phục Đỉnh Núi${groupTitle} & Bảo Toàn Chuỗi!`;
        descHtml = `Bạn đã hoàn tất cả 2 nhiệm vụ: Ôn tập T-1 và Chinh phục đỉnh núi từ mới hôm nay (${this.targetPoints} nấc thực chiến).<br/>Chuỗi liên tục của bạn đã được bảo toàn ở mốc <strong class="text-amber-500 font-extrabold text-base">🔥 ${appState.state.streak} ngày</strong>!`;
        actionButtonsHtml = `
          <button id="btn-learn-more-batch" class="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 transition-all text-xs sm:text-sm flex items-center justify-center space-x-2">
            <span>✨</span>
            <span>${this.options.batchMeta?.groupName ? `Học Tiếp Chủ Đề Này (+15 XP)` : `Học Thêm 10 Từ Mới (+15 XP)`}</span>
          </button>
          <button id="btn-complete-session" class="w-full mt-2.5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold rounded-xl transition-all text-xs">
            Quay lại Bảng Điều Khiển
          </button>
        `;
      } else {
        iconEmoji = '⚡';
        const groupTitle = this.options.batchMeta?.groupName ? ` Chủ Đề "${this.options.batchMeta.groupName}"` : ` 10 Từ Mới`;
        titleHtml = `Chinh Phục Đỉnh Núi${groupTitle}!`;
        descHtml = `Bạn đã xuất sắc chinh phục ${this.targetPoints} nấc thử thách (3 kỹ năng phản xạ thực chiến)!<br/><strong class="text-amber-600 dark:text-amber-400">⚠️ Bạn cần hoàn thành bài Ôn tập T-1 để chính thức được tính giữ chuỗi Streak hôm nay!</strong>`;
        actionButtonsHtml = `
          <button id="btn-do-review-now" class="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg shadow-orange-500/25 transition-all text-xs sm:text-sm flex items-center justify-center space-x-2">
            <span>🚀</span>
            <span>Ôn tập T-1 để giữ chuỗi</span>
          </button>
          <button id="btn-complete-session" class="w-full mt-2.5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold rounded-xl transition-all text-xs">
            Quay lại Bảng Điều Khiển
          </button>
        `;
      }
    }

    this.container.innerHTML = `
      <div class="flex-1 flex flex-col items-center justify-center min-h-[calc(100dvh-230px)] md:min-h-[500px] w-full py-4 animate-fade-in">
        <div class="w-full max-w-md mx-auto">
          <div class="bg-white dark:bg-slate-900 rounded-[2rem] p-6 sm:p-8 text-center border-2 border-slate-200/90 dark:border-slate-800 shadow-xl">
            <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-tr from-amber-400 to-emerald-500 flex items-center justify-center text-white text-3xl shadow-lg">
              ${iconEmoji}
            </div>

            <h2 class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white mb-2">
              ${titleHtml}
            </h2>
            <p class="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mb-5 leading-relaxed">
              ${descHtml}<br/>
              Độ chính xác: <strong class="text-indigo-600 dark:text-indigo-400 text-base">${accuracy}%</strong> (${this.correctCount}/${this.totalAttempts} lượt)
            </p>

            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 mb-5 text-left">
              <div class="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-slate-200 dark:border-slate-700">
                <span class="text-slate-500">Thời gian & Tốc độ:</span>
                <span class="font-extrabold text-indigo-600 dark:text-indigo-400 flex items-center space-x-1">
                  <span>⏱️ ${sessionTimeFormatted} (${speedPerWord}s/từ • ${speedEvaluation})</span>
                </span>
              </div>
              <div class="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-slate-200 dark:border-slate-700">
                <span class="text-slate-500">Chuỗi ngày kiên trì (Streak):</span>
                <span class="font-extrabold text-amber-500 flex items-center space-x-1">
                  <span>🔥 ${appState.state.streak} ngày</span>
                </span>
              </div>
              <div class="flex items-center justify-between text-xs sm:text-sm py-1.5">
                <span class="text-slate-500">Tổng vốn từ đã nạp:</span>
                <span class="font-bold text-slate-800 dark:text-white">${appState.state.learnedWords.length} từ</span>
              </div>
            </div>

            ${actionButtonsHtml}
          </div>
        </div>
      </div>
    `;

    document.getElementById('btn-complete-session')?.addEventListener('click', () => {
      this.onCompleted();
    });

    document.getElementById('btn-next-review-batch')?.addEventListener('click', () => {
      if (typeof this.options.onContinueNextReviewBatch === 'function') {
        this.options.onContinueNextReviewBatch();
      } else {
        this.onCompleted();
      }
    });

    document.getElementById('btn-open-new-batch')?.addEventListener('click', () => {
      if (typeof this.options.onStartNewBatch === 'function') {
        this.options.onStartNewBatch();
      } else {
        this.onCompleted();
      }
    });

    document.getElementById('btn-learn-more-batch')?.addEventListener('click', () => {
      if (typeof this.options.onStartNewBatch === 'function') {
        this.options.onStartNewBatch();
      } else {
        this.onCompleted();
      }
    });

    document.getElementById('btn-do-review-now')?.addEventListener('click', () => {
      if (typeof this.options.onStartReview === 'function') {
        this.options.onStartReview();
      } else {
        this.onCompleted();
      }
    });
  }
}

