// ==============================================================================
// ĐỘNG CƠ THẨM THẤU & SÀNG LỌC TỪ MỚI (GIAI ĐOẠN 1: BATCH 10 TỪ MỚI)
// Trải nghiệm Flashcard thuần cảm ứng cử chỉ (Gesture-driven):
// - Vuốt Trái: ĐỒNG Ý HỌC TỪ MỚI (Viền xanh lá phát sáng, thẻ nghiêng trái, mờ dần theo độ vuốt)
// - Vuốt Phải: ĐÃ BIẾT RỒI (Viền đỏ phát sáng, thẻ nghiêng phải, mờ dần theo độ vuốt)
// - Animation nghiêng tự nhiên (Pendulum tilt) theo cử chỉ vuốt
// - Giao diện tối giản, tập trung 100% vào thẻ từ vựng
// - Tự động lên lịch Ôn Tập Kỷ Luật (T+1) cho cả 2 nhóm từ
// ==============================================================================

import { speechService } from './speech.js';
import { appState } from './state.js';
import { VocabPracticeEngine } from './vocab-engine.js';

export class VocabAbsorbEngine {
  constructor(containerElement, options = {}) {
    this.container = containerElement;
    this.onCompleted = options.onCompleted || (() => {});
    this.onStartPractice = options.onStartPractice || null;
    this.targetCount = options.targetCount || 10;
    this.candidates = options.candidates || [];
    this.acceptedWords = [];
    this.skippedWords = [];
    this.currentIndex = 0;
    this.isAnimating = false;
    this.autoSpeak = appState.state.audioEnabled ?? true;
  }

  start() {
    if (!this.candidates || this.candidates.length === 0) {
      this.candidates = appState.getNewBatchCandidates();
    }

    if (!this.candidates || this.candidates.length === 0) {
      this.renderEmptyState();
      return;
    }

    this.acceptedWords = [];
    this.skippedWords = [];
    this.currentIndex = 0;
    this.isAnimating = false;

    this.renderFrame();
    this.renderCard();
  }

  renderEmptyState() {
    this.container.innerHTML = `
      <div class="flex-1 flex flex-col items-center justify-center min-h-[calc(100dvh-230px)] md:min-h-[500px] w-full py-4 animate-fade-in">
        <div class="w-full max-w-lg mx-auto">
          <div class="bg-white dark:bg-slate-900 rounded-[2rem] p-6 sm:p-8 text-center border border-slate-200/90 dark:border-slate-800 shadow-xl">
            <div class="text-4xl mb-4">🏆</div>
            <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-2">Đã Nạp Hết Kho Từ Vựng!</h3>
            <p class="text-slate-500 dark:text-slate-400 text-sm mb-6">Bạn đã thẩm thấu toàn bộ các từ vựng hiện có trong hệ thống. Hãy duy trì chuỗi kỷ luật ôn tập hàng ngày nhé!</p>
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

  renderFrame() {
    this.container.innerHTML = `
      <div class="flex-1 flex flex-col w-full max-w-md mx-auto px-1 sm:px-4 animate-fade-in">
        
        <!-- Top Control Header (Hình 2: Đặt ngay sát header chính Hình 1, không nằm trên card) -->
        <div class="w-full pt-0.5 pb-2">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center space-x-2">
                <button id="btn-exit-absorb" class="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors" title="Thoát phiên học">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
                <div class="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
                  <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                  <span>Thẩm thấu từ mới</span>
                </div>
              </div>

              <!-- Nút Loa Tự Đọc SVG rõ ràng -->
              <button id="btn-toggle-absorb-audio" title="${this.autoSpeak ? 'Đang bật tự đọc (Mẹo iPhone: Nếu không nghe thấy tiếng, hãy kiểm tra cần gạt rung ở cạnh máy)' : 'Bấm để bật tự đọc'}" class="flex items-center space-x-1 px-2.5 py-1 rounded-xl text-xs font-semibold border ${this.autoSpeak ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-300' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'} transition-all">
                <svg class="w-3.5 h-3.5 ${this.autoSpeak ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                <span>${this.autoSpeak ? 'Tự đọc: Bật' : 'Tự đọc: Tắt'}</span>
              </button>
            </div>

            <!-- Thanh tiến trình tìm kiếm 10 từ mới -->
            <div class="flex items-center justify-between text-xs font-bold mb-1.5 px-0.5">
              <span class="text-indigo-600 dark:text-indigo-400 flex items-center space-x-1">
                <span>Mục tiêu:</span>
                <span id="label-accepted-count" class="font-extrabold text-sm text-slate-900 dark:text-white">${this.acceptedWords.length}</span>
                <span class="text-slate-400">/ ${this.targetCount} từ mới</span>
              </span>
              <span id="label-skipped-count" class="text-slate-400 dark:text-slate-500 font-semibold text-[11px]">
                Bỏ qua: ${this.skippedWords.length}
              </span>
            </div>

            <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden p-0.5 border border-slate-200/60 dark:border-slate-700/60">
              <div id="absorb-progress-bar" class="bg-gradient-to-r from-blue-500 via-indigo-600 to-emerald-400 h-full rounded-full transition-all duration-300" style="width: 0%"></div>
            </div>
        </div>

        <!-- Khu vực chứa Flashcard: Căn giữa tự nhiên ở không gian còn lại bên dưới -->
        <div class="flex-1 flex items-center justify-center w-full min-h-[460px] sm:min-h-[480px] my-auto py-2">
          <div id="flashcard-slot" class="relative w-full flex items-center justify-center">
            <!-- Thẻ Flashcard động sẽ được chèn vào đây -->
          </div>
        </div>
      </div>
    `;

    // Gắn sự kiện các nút điều khiển chung
    this.container.querySelector('#btn-exit-absorb')?.addEventListener('click', () => {
      this.handleExitPrompt();
    });

    this.container.querySelector('#btn-toggle-absorb-audio')?.addEventListener('click', () => {
      this.autoSpeak = !this.autoSpeak;
      const btn = this.container.querySelector('#btn-toggle-absorb-audio');
      if (btn) {
        btn.className = `flex items-center space-x-1 px-2.5 py-1 rounded-xl text-xs font-semibold border ${this.autoSpeak ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-300' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'} transition-all`;
        btn.innerHTML = `
          <svg class="w-3.5 h-3.5 ${this.autoSpeak ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
          <span>${this.autoSpeak ? 'Tự đọc: Bật' : 'Tự đọc: Tắt'}</span>
        `;
      }
    });

    // Hỗ trợ phím mũi tên trên Desktop: Mũi tên trái = Học từ mới, Mũi tên phải = Đã biết
    this.handleKeyDown = (e) => {
      if (this.isAnimating) return;
      if (e.key === 'ArrowLeft') {
        this.executeSwipe('left');
      } else if (e.key === 'ArrowRight') {
        this.executeSwipe('right');
      } else if (e.key === ' ' || e.key === 'Spacebar') {
        const currentWord = this.candidates[this.currentIndex];
        if (currentWord) speechService.speak(currentWord.word);
      }
    };
    window.addEventListener('keydown', this.handleKeyDown);
  }

  renderCard() {
    const slot = this.container.querySelector('#flashcard-slot');
    if (!slot) return;

    const word = this.candidates[this.currentIndex];
    if (!word) {
      this.finishSession();
      return;
    }

    // Làm sạch tên nhóm (loại bỏ phần tiếng Anh trong ngoặc đơn nếu có để không bị tràn dòng)
    const cleanGroupName = (word.groupName || 'Từ vựng thực chiến')
      .replace(/\(.*?\)/g, '')
      .trim();

    const collocationsList = word.collocations 
      ? word.collocations.split(',').map(c => c.trim()).filter(Boolean)
      : [];

    slot.innerHTML = `
      <div id="active-flashcard" class="flashcard-card animate-card-pop relative w-full rounded-[2rem] bg-white dark:bg-slate-900 border-2 border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl flex flex-col justify-between select-none overflow-hidden transition-[border-color,box-shadow]">
        
        <!-- Dải phát sáng bên trái: XANH LÁ (Vuốt Trái = ĐỒNG Ý HỌC TỪ MỚI) -->
        <div class="edge-indicator-left absolute left-0 top-0 bottom-0 w-3 sm:w-3.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 opacity-0 pointer-events-none transition-opacity duration-75 shadow-[0_0_20px_rgba(16,185,129,0.9)]"></div>

        <!-- Dải phát sáng bên phải: ĐỎ (Vuốt Phải = ĐÃ BIẾT RỒI) -->
        <div class="edge-indicator-right absolute right-0 top-0 bottom-0 w-3 sm:w-3.5 bg-gradient-to-l from-rose-600 via-rose-500 to-rose-400 opacity-0 pointer-events-none transition-opacity duration-75 shadow-[0_0_20px_rgba(244,63,94,0.9)]"></div>

        <!-- Lớp phủ Gradient mờ dần theo hướng vuốt -->
        <div class="swipe-fade-overlay absolute inset-0 pointer-events-none opacity-0 transition-opacity"></div>

        <!-- Header Card: Category & Phân Loại -->
        <div class="relative z-10 flex items-center justify-between gap-2 mb-3">
          <span class="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-[11px] truncate max-w-[210px]">
            ${word.groupIcon || '💬'} ${cleanGroupName}
          </span>
          <div class="flex items-center space-x-1.5 shrink-0">
            <span class="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-bold text-[10px] uppercase">
              ${word.type || 'term'}
            </span>
            <span class="px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 font-bold text-[10px]">
              ${word.level || 'A2'}
            </span>
          </div>
        </div>

        <!-- Main Word Typography & IPA -->
        <div class="relative z-10 text-center my-3 sm:my-4">
          <div class="flex items-center justify-center space-x-2">
            <h2 class="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
              ${word.word}
            </h2>
            <button class="btn-card-inline-audio p-2 rounded-full hover:bg-indigo-50 dark:hover:bg-slate-800 text-indigo-600 dark:text-indigo-400 transition-transform active:scale-90" title="Nghe phát âm">
              <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
            </button>
          </div>
          ${word.ipa ? `<p class="text-indigo-600 dark:text-indigo-400 font-mono text-sm sm:text-base font-semibold mt-1">${word.ipa}</p>` : ''}
        </div>

        <!-- Khối Nghĩa Tiếng Việt -->
        <div class="relative z-10 my-2 sm:my-3 p-4 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-blue-50/70 dark:from-slate-800/90 dark:to-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 text-center">
          <span class="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">Nghĩa tiếng Việt</span>
          <p class="text-lg sm:text-xl font-black text-indigo-950 dark:text-indigo-200">
            ${word.meaningVi}
          </p>
        </div>

        <!-- Khối Ví dụ thực tế -->
        ${word.example ? `
          <div class="relative z-10 my-2 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-left">
            <div class="flex items-start justify-between gap-1.5 mb-1">
              <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Ví dụ thực tế:</span>
              <button class="btn-example-audio p-1 text-slate-400 hover:text-indigo-600 transition-colors" title="Nghe ví dụ">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
              </button>
            </div>
            <p class="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 italic leading-relaxed">
              "${word.example}"
            </p>
            ${word.exampleVi ? `<p class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">${word.exampleVi}</p>` : ''}
          </div>
        ` : ''}

        <!-- Cụm từ Collocations đi kèm (nếu có) -->
        ${collocationsList.length > 0 ? `
          <div class="relative z-10 mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
            <div class="flex flex-wrap gap-1.5">
              ${collocationsList.slice(0, 3).map(c => `
                <span class="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-medium">
                  ${c}
                </span>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;

    const card = slot.querySelector('#active-flashcard');
    if (card) {
      // Gỡ bỏ animation entry sau khi chạy xong để transform rotate khi vuốt không bị CSS animation cản trở
      card.addEventListener('animationend', () => {
        card.classList.remove('animate-card-pop');
      }, { once: true });
      setTimeout(() => card.classList.remove('animate-card-pop'), 300);

      this.bindCardGestures(card);

      // Gắn sự kiện click / tap nghe phát âm trong card
      const wordAudioBtn = card.querySelector('.btn-card-inline-audio');
      if (wordAudioBtn) {
        let lastTime = 0;
        const playWord = (e) => {
          e.stopPropagation();
          const now = Date.now();
          if (now - lastTime < 500) return;
          lastTime = now;
          if (window.navigator?.vibrate) window.navigator.vibrate(10);
          wordAudioBtn.classList.add('scale-125', 'text-indigo-500');
          setTimeout(() => wordAudioBtn.classList.remove('scale-125', 'text-indigo-500'), 350);
          speechService.speak(word.word);
        };
        wordAudioBtn.addEventListener('click', playWord);
        wordAudioBtn.addEventListener('touchend', playWord);
      }

      const exAudioBtn = card.querySelector('.btn-example-audio');
      if (exAudioBtn) {
        let lastTime = 0;
        const playEx = (e) => {
          e.stopPropagation();
          const now = Date.now();
          if (now - lastTime < 500) return;
          lastTime = now;
          if (window.navigator?.vibrate) window.navigator.vibrate(10);
          exAudioBtn.classList.add('scale-125', 'text-indigo-500');
          setTimeout(() => exAudioBtn.classList.remove('scale-125', 'text-indigo-500'), 350);
          if (word.example) speechService.speak(word.example);
        };
        exAudioBtn.addEventListener('click', playEx);
        exAudioBtn.addEventListener('touchend', playEx);
      }
    }

    // Tự động phát âm khi thẻ xuất hiện nếu bật loa
    if (this.autoSpeak && word) {
      setTimeout(() => {
        speechService.speak(word.word);
      }, 120);
    }
  }

  bindCardGestures(cardElement) {
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;
    let isDragging = false;

    const edgeLeft = cardElement.querySelector('.edge-indicator-left');
    const edgeRight = cardElement.querySelector('.edge-indicator-right');
    const fadeOverlay = cardElement.querySelector('.swipe-fade-overlay');

    const onStart = (clientX, clientY) => {
      if (this.isAnimating) return;
      isDragging = true;
      startX = clientX;
      startY = clientY;
      currentX = clientX;
      currentY = clientY;
      cardElement.style.transition = 'none';
    };

    const onMove = (clientX, clientY, e) => {
      if (!isDragging || this.isAnimating) return;
      currentX = clientX;
      currentY = clientY;
      const dx = currentX - startX;
      const dy = currentY - startY;

      // Ngăn chặn cuộn trang dọc khi người dùng đang vuốt ngang
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 6) {
        if (e && e.cancelable) e.preventDefault();
      }

      // Card di chuyển và xoay nghiêng rõ nét theo chiều vuốt (hệ số 0.10 thay vì 0.04 để mắt thấy rõ độ nghiêng tự nhiên)
      const rot = (dx * 0.10).toFixed(2);
      cardElement.style.transform = `translate(${dx}px, ${dy * 0.2}px) rotate(${rot}deg)`;

      // Tỉ lệ kéo từ 0 đến 1 (đạt 1 tại khoảng cách 80px)
      const ratio = Math.min(Math.abs(dx) / 80, 1);

      if (dx < 0) {
        // VUỐT SANG TRÁI (ĐỒNG Ý HỌC TỪ MỚI):
        // Viền XANH LÁ bên trái sáng bừng, màu đậm rõ nét, mờ dần theo tỉ lệ thuận với độ vuốt
        if (edgeLeft) edgeLeft.style.opacity = String(ratio);
        if (edgeRight) edgeRight.style.opacity = '0';

        cardElement.style.borderLeftColor = `rgba(16, 185, 129, ${Math.min(1, ratio * 1.5)})`;
        cardElement.style.borderRightColor = '';
        cardElement.style.boxShadow = `-${Math.round(ratio * 22)}px 0 ${Math.round(ratio * 38)}px rgba(16, 185, 129, ${ratio * 0.75}), 0 10px 25px -5px rgba(0, 0, 0, 0.12)`;

        if (fadeOverlay) {
          fadeOverlay.style.background = `linear-gradient(to right, rgba(16, 185, 129, ${ratio * 0.55}) 0%, rgba(16, 185, 129, ${ratio * 0.28}) 35%, rgba(16, 185, 129, ${ratio * 0.10}) 65%, transparent 92%)`;
          fadeOverlay.style.opacity = '1';
        }

        // Mờ dần flashcard theo tỉ lệ thuận với độ vuốt
        cardElement.style.opacity = String(Math.max(0.35, 1 - (ratio * 0.5)));
      } else if (dx > 0) {
        // VUỐT SANG PHẢI (ĐÃ BIẾT RỒI):
        // Viền ĐỎ bên phải sáng bừng, màu đậm rõ nét, mờ dần theo tỉ lệ thuận với độ vuốt
        if (edgeRight) edgeRight.style.opacity = String(ratio);
        if (edgeLeft) edgeLeft.style.opacity = '0';

        cardElement.style.borderRightColor = `rgba(244, 63, 94, ${Math.min(1, ratio * 1.5)})`;
        cardElement.style.borderLeftColor = '';
        cardElement.style.boxShadow = `${Math.round(ratio * 22)}px 0 ${Math.round(ratio * 38)}px rgba(244, 63, 94, ${ratio * 0.75}), 0 10px 25px -5px rgba(0, 0, 0, 0.12)`;

        if (fadeOverlay) {
          fadeOverlay.style.background = `linear-gradient(to left, rgba(244, 63, 94, ${ratio * 0.55}) 0%, rgba(244, 63, 94, ${ratio * 0.28}) 35%, rgba(244, 63, 94, ${ratio * 0.10}) 65%, transparent 92%)`;
          fadeOverlay.style.opacity = '1';
        }

        // Mờ dần flashcard theo tỉ lệ thuận với độ vuốt
        cardElement.style.opacity = String(Math.max(0.35, 1 - (ratio * 0.5)));
      } else {
        this.resetCardStyles(cardElement);
      }
    };

    const onEnd = () => {
      if (!isDragging || this.isAnimating) return;
      isDragging = false;
      const dx = currentX - startX;

      if (dx < -65) {
        // Vuốt sang TRÁI -> ĐỒNG Ý HỌC TỪ MỚI
        this.executeSwipe('left', cardElement);
      } else if (dx > 65) {
        // Vuốt sang PHẢI -> ĐÃ BIẾT RỒI
        this.executeSwipe('right', cardElement);
      } else {
        // Trượt trở lại vị trí ban đầu (Snap back)
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

    // Touch Events trên Mobile
    cardElement.addEventListener('touchstart', (e) => {
      if (e.target.closest('button, .btn-card-inline-audio, .btn-example-audio, a')) return;
      const t = e.touches[0];
      onStart(t.clientX, t.clientY);
    }, { passive: true });

    cardElement.addEventListener('touchmove', (e) => {
      if (e.target.closest('button, .btn-card-inline-audio, .btn-example-audio, a')) return;
      const t = e.touches[0];
      onMove(t.clientX, t.clientY, e);
    }, { passive: false });

    cardElement.addEventListener('touchend', () => {
      onEnd();
    });

    cardElement.addEventListener('touchcancel', () => {
      onEnd();
    });

    // Mouse Drag trên Desktop
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

  resetCardStyles(cardElement) {
    cardElement.style.transform = 'translate(0px, 0px) rotate(0deg)';
    cardElement.style.opacity = '1';
    cardElement.style.boxShadow = '';
    cardElement.style.borderLeftColor = '';
    cardElement.style.borderRightColor = '';
    const edgeLeft = cardElement.querySelector('.edge-indicator-left');
    const edgeRight = cardElement.querySelector('.edge-indicator-right');
    const fadeOverlay = cardElement.querySelector('.swipe-fade-overlay');
    if (edgeLeft) edgeLeft.style.opacity = '0';
    if (edgeRight) edgeRight.style.opacity = '0';
    if (fadeOverlay) fadeOverlay.style.opacity = '0';
  }

  executeSwipe(direction, cardEl = null) {
    if (this.isAnimating) return;
    this.isAnimating = true;

    const card = cardEl || this.container.querySelector('#active-flashcard');
    const edgeLeft = card?.querySelector('.edge-indicator-left');
    const edgeRight = card?.querySelector('.edge-indicator-right');

    const fadeOverlay = card?.querySelector('.swipe-fade-overlay');

    if (direction === 'left') {
      // Bay sang TRÁI (Đồng ý học từ mới - Xanh lá đậm rõ nét)
      if (edgeLeft) edgeLeft.style.opacity = '1';
      if (fadeOverlay) {
        fadeOverlay.style.background = 'linear-gradient(to right, rgba(16, 185, 129, 0.65) 0%, rgba(16, 185, 129, 0.35) 45%, transparent 90%)';
        fadeOverlay.style.opacity = '1';
      }
      if (card) {
        card.style.transition = 'transform 0.28s ease-in, opacity 0.25s ease-in, box-shadow 0.25s ease-in';
        card.style.transform = 'translate(-120vw, 20px) rotate(-22deg)';
        card.style.opacity = '0';
        card.style.boxShadow = '-30px 0 50px rgba(16, 185, 129, 0.75)';
      }
      if (window.navigator?.vibrate) window.navigator.vibrate(12);
    } else {
      // Bay sang PHẢI (Đã biết rồi - Đỏ đậm rõ nét)
      if (edgeRight) edgeRight.style.opacity = '1';
      if (fadeOverlay) {
        fadeOverlay.style.background = 'linear-gradient(to left, rgba(244, 63, 94, 0.65) 0%, rgba(244, 63, 94, 0.35) 45%, transparent 90%)';
        fadeOverlay.style.opacity = '1';
      }
      if (card) {
        card.style.transition = 'transform 0.28s ease-in, opacity 0.25s ease-in, box-shadow 0.25s ease-in';
        card.style.transform = 'translate(120vw, 20px) rotate(22deg)';
        card.style.opacity = '0';
        card.style.boxShadow = '30px 0 50px rgba(244, 63, 94, 0.75)';
      }
      if (window.navigator?.vibrate) window.navigator.vibrate(8);
    }

    setTimeout(() => {
      this.handleDecision(direction);
    }, 260);
  }

  handleDecision(direction) {
    const word = this.candidates[this.currentIndex];
    if (direction === 'left') {
      // Vuốt trái = ĐỒNG Ý HỌC TỪ MỚI
      this.acceptedWords.push(word);
    } else {
      // Vuốt phải = ĐÃ BIẾT RỒI
      this.skippedWords.push(word);
    }

    this.updateProgressUI();

    // Đã đủ 10 từ mới?
    if (this.acceptedWords.length >= this.targetCount) {
      this.finishSession();
      return;
    }

    // Chuyển sang candidate tiếp theo
    this.currentIndex++;
    if (this.currentIndex >= this.candidates.length) {
      // Đã duyệt hết từ trong kho
      this.finishSession();
      return;
    }

    this.isAnimating = false;
    this.renderCard();
  }

  updateProgressUI() {
    const acceptedLabel = this.container.querySelector('#label-accepted-count');
    const skippedLabel = this.container.querySelector('#label-skipped-count');
    const progressBar = this.container.querySelector('#absorb-progress-bar');

    if (acceptedLabel) acceptedLabel.textContent = this.acceptedWords.length;
    if (skippedLabel) skippedLabel.textContent = `Bỏ qua: ${this.skippedWords.length}`;

    const percent = Math.min(100, Math.round((this.acceptedWords.length / this.targetCount) * 100));
    if (progressBar) progressBar.style.width = `${percent}%`;
  }


  handleExitPrompt() {
    if (this.acceptedWords.length === 0) {
      this.cleanup();
      this.onCompleted();
      return;
    }

    const confirmExit = window.confirm(
      `Bạn đã chọn được ${this.acceptedWords.length} / ${this.targetCount} từ mới.\nBạn có muốn lưu các từ này vào lịch học và thoát không?`
    );

    if (confirmExit) {
      this.cleanup();
      const acceptedIds = this.acceptedWords.map(w => w.id);
      const skippedIds = this.skippedWords.map(w => w.id);
      appState.markNewBatchComplete(acceptedIds, skippedIds);
      this.onCompleted();
    }
  }

  finishSession() {
    this.cleanup();

    const acceptedIds = this.acceptedWords.map(w => w.id);
    const skippedIds = this.skippedWords.map(w => w.id);

    // Lưu trạng thái: Cả 10 từ mới và các từ đã biết đều được xếp lịch ôn T+1
    appState.markNewBatchComplete(acceptedIds, skippedIds);

    const practiceWords = this.acceptedWords.length > 0 
      ? this.acceptedWords 
      : this.candidates.slice(0, 10);

    // Tự động chuyển thẳng sang Giai đoạn 2: Luyện tập phản xạ (không hiển thị màn hình hỏi ý kiến)
    this.startStage2Practice(practiceWords);
  }

  startStage2Practice(practiceWords) {
    if (this.onStartPractice) {
      this.onStartPractice(practiceWords);
      return;
    }
    const practiceEngine = new VocabPracticeEngine(this.container, {
      mode: "new_batch",
      words: practiceWords,
      targetPoints: 30,
      onCompleted: () => {
        this.onCompleted();
      }
    });
    practiceEngine.start();
  }

  cleanup() {
    if (this.handleKeyDown) {
      window.removeEventListener('keydown', this.handleKeyDown);
      this.handleKeyDown = null;
    }
  }
}
