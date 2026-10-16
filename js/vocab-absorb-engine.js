// ==============================================================================
// ĐỘNG CƠ THẨM THẤU & SÀNG LỌC TỪ MỚI (GIAI ĐOẠN 1: BATCH 10 TỪ MỚI)
// Trải nghiệm Flashcard vuốt trái (Đã biết/Bỏ qua) & vuốt phải (Từ mới cần học)
// Tối ưu hóa UI/UX cho Mobile (Touch Drag Physics, Audio, Haptic & Toast Feedback)
// Tự động lên lịch Ôn Tập Kỷ Luật (T+1) cho cả 2 nhóm từ
// ==============================================================================

import { speechService } from './speech.js';
import { appState } from './state.js';

export class VocabAbsorbEngine {
  constructor(containerElement, options = {}) {
    this.container = containerElement;
    this.onCompleted = options.onCompleted || (() => {});
    this.targetCount = options.targetCount || 10;
    this.candidates = options.candidates || [];
    this.acceptedWords = [];
    this.skippedWords = [];
    this.currentIndex = 0;
    this.isAnimating = false;
    this.autoSpeak = appState.state.audioEnabled ?? true;
  }

  start() {
    // Nếu chưa truyền danh sách ứng viên thì lấy từ kho state theo trình độ
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
      <div class="flex-1 flex flex-col items-center justify-center min-h-[calc(100dvh-210px)] md:min-h-[520px] w-full py-2 px-3 sm:px-4 animate-fade-in">
        <div class="w-full max-w-md mx-auto flex flex-col">
          
          <!-- Top Control Header -->
          <div class="mb-3">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center space-x-2">
                <button id="btn-exit-absorb" class="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors" title="Thoát phiên thẩm thấu">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
                <div class="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 border border-indigo-200/60 dark:border-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
                  <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                  <span>✨ Giai đoạn 1: Thẩm thấu</span>
                </div>
              </div>

              <!-- Nút Loa Auto-play -->
              <button id="btn-toggle-absorb-audio" class="flex items-center space-x-1 px-2.5 py-1 rounded-xl text-xs font-semibold border ${this.autoSpeak ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-300' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'} transition-all">
                <span>${this.autoSpeak ? '🔊 Tự đọc: Bật' : '🔇 Tự đọc: Tắt'}</span>
              </button>
            </div>

            <!-- Thanh tiến trình tìm kiếm 10 từ mới -->
            <div class="flex items-center justify-between text-xs font-bold mb-1.5 px-0.5">
              <span class="text-indigo-600 dark:text-indigo-400 flex items-center space-x-1">
                <span>🎯 Mục tiêu:</span>
                <span id="label-accepted-count" class="font-extrabold text-sm text-slate-900 dark:text-white">${this.acceptedWords.length}</span>
                <span class="text-slate-400">/ ${this.targetCount} từ mới</span>
              </span>
              <span id="label-skipped-count" class="text-slate-400 dark:text-slate-500 font-semibold text-[11px]">
                ⚡ Bỏ qua: ${this.skippedWords.length}
              </span>
            </div>

            <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden p-0.5 border border-slate-200/60 dark:border-slate-700/60">
              <div id="absorb-progress-bar" class="bg-gradient-to-r from-blue-500 via-indigo-600 to-emerald-400 h-full rounded-full transition-all duration-300" style="width: 0%"></div>
            </div>
          </div>

          <!-- Khu vực chứa Flashcard (Slot) -->
          <div id="flashcard-slot" class="relative w-full min-h-[420px] sm:min-h-[440px] flex items-center justify-center">
            <!-- Thẻ Flashcard động sẽ được chèn vào đây -->
          </div>

          <!-- Bottom Action Buttons (Tối ưu ngón tay cái trên Mobile) -->
          <div class="mt-3 flex items-center justify-between gap-2.5 sm:gap-3">
            <button id="btn-action-skip" class="flex-1 py-3 px-3 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-rose-500 hover:bg-rose-50/50 dark:hover:bg-rose-950/30 text-slate-700 dark:text-slate-200 active:scale-95 transition-all text-center flex flex-col items-center justify-center group shadow-sm">
              <div class="flex items-center space-x-1 text-rose-500 font-black text-sm sm:text-base">
                <span class="group-hover:-translate-x-0.5 transition-transform">👈</span>
                <span>Đã biết rồi</span>
              </div>
              <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium">Vuốt trái / Bỏ qua</span>
            </button>

            <button id="btn-action-audio" class="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-indigo-600 hover:bg-indigo-700 active:scale-90 text-white flex items-center justify-center text-xl sm:text-2xl shadow-lg shadow-indigo-500/25 transition-all shrink-0" title="Phát âm từ vựng">
              🔊
            </button>

            <button id="btn-action-accept" class="flex-1 py-3 px-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white active:scale-95 transition-all text-center flex flex-col items-center justify-center group shadow-lg shadow-emerald-500/25">
              <div class="flex items-center space-x-1 font-black text-sm sm:text-base">
                <span>Học từ này</span>
                <span class="group-hover:translate-x-0.5 transition-transform">👉</span>
              </div>
              <span class="text-[10px] text-emerald-100 font-medium">+1 Từ mới cần nạp</span>
            </button>
          </div>

          <!-- Gợi ý tương tác vuốt trên Mobile -->
          <p class="text-[11px] text-center text-slate-400 dark:text-slate-500 mt-2 font-medium select-none">
            💡 Vuốt card 👈 trái để bỏ qua • Vuốt 👉 phải để chọn làm từ mới
          </p>

          <!-- Toast Feedback Container -->
          <div id="absorb-toast-container" class="fixed bottom-20 left-1/2 -translate-x-1/2 pointer-events-none z-50 flex flex-col items-center gap-1.5"></div>
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
        btn.innerHTML = `<span>${this.autoSpeak ? '🔊 Tự đọc: Bật' : '🔇 Tự đọc: Tắt'}</span>`;
      }
    });

    this.container.querySelector('#btn-action-skip')?.addEventListener('click', () => {
      this.executeSwipe('left');
    });

    this.container.querySelector('#btn-action-accept')?.addEventListener('click', () => {
      this.executeSwipe('right');
    });

    this.container.querySelector('#btn-action-audio')?.addEventListener('click', () => {
      const currentWord = this.candidates[this.currentIndex];
      if (currentWord) {
        speechService.speak(currentWord.word);
        this.pulseSpeakerButton();
      }
    });

    // Hỗ trợ phím mũi tên trên Desktop / Laptop
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

    const collocationsList = word.collocations 
      ? word.collocations.split(',').map(c => c.trim()).filter(Boolean)
      : [];

    slot.innerHTML = `
      <div id="active-flashcard" class="flashcard-card animate-card-pop relative w-full rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 shadow-2xl shadow-indigo-500/5 backdrop-blur-xl flex flex-col justify-between select-none">
        
        <!-- Stamp Indicator: BỎ QUA (Vuốt Trái) -->
        <div class="stamp-skip absolute top-4 right-4 z-20 px-3 py-1 rounded-xl border-2 border-rose-500 bg-rose-500/10 text-rose-500 font-black text-xs sm:text-sm uppercase tracking-wider rotate-12 pointer-events-none opacity-0 transition-opacity">
          👈 Đã biết (Bỏ qua)
        </div>

        <!-- Stamp Indicator: TỪ MỚI (Vuốt Phải) -->
        <div class="stamp-accept absolute top-4 left-4 z-20 px-3 py-1 rounded-xl border-2 border-emerald-500 bg-emerald-500/10 text-emerald-500 font-black text-xs sm:text-sm uppercase tracking-wider -rotate-12 pointer-events-none opacity-0 transition-opacity">
          👉 Từ mới (+1)
        </div>

        <!-- Header Card: Category & Phân Loại -->
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-[11px] truncate max-w-[220px]">
            ${word.groupIcon || '💬'} ${word.groupName || 'Từ vựng thực chiến'}
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
        <div class="text-center my-2 sm:my-3">
          <div class="flex items-center justify-center space-x-2">
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
              ${word.word}
            </h2>
            <button class="btn-card-inline-audio p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-indigo-600 dark:text-indigo-400 transition-colors" title="Nghe phát âm">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
            </button>
          </div>
          ${word.ipa ? `<p class="text-indigo-600 dark:text-indigo-400 font-mono text-sm sm:text-base font-semibold mt-0.5">${word.ipa}</p>` : ''}
        </div>

        <!-- Nghĩa Tiếng Việt -->
        <div class="my-2 sm:my-3 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50/70 dark:from-slate-800/90 dark:to-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 text-center">
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Nghĩa tiếng Việt</span>
          <p class="text-base sm:text-lg font-black text-indigo-950 dark:text-indigo-200">
            ${word.meaningVi}
          </p>
        </div>

        <!-- Câu ví dụ thực tế -->
        ${word.example ? `
          <div class="my-1.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-left">
            <div class="flex items-start justify-between gap-1.5 mb-1">
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">💡 Ví dụ thực tế:</span>
              <button class="btn-example-audio p-1 text-slate-400 hover:text-indigo-600 transition-colors" title="Nghe câu ví dụ">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
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
          <div class="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Cụm từ liên quan:</span>
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
      this.bindCardGestures(card);

      // Gắn sự kiện click nghe phát âm trong card
      card.querySelector('.btn-card-inline-audio')?.addEventListener('click', (e) => {
        e.stopPropagation();
        speechService.speak(word.word);
        this.pulseSpeakerButton();
      });

      card.querySelector('.btn-example-audio')?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (word.example) speechService.speak(word.example);
      });
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

    const stampSkip = cardElement.querySelector('.stamp-skip');
    const stampAccept = cardElement.querySelector('.stamp-accept');

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

      // Nếu vuốt ngang chủ đạo, ngăn scroll dọc của trình duyệt
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
        if (e && e.cancelable) e.preventDefault();
      }

      const rot = (dx * 0.05).toFixed(2);
      cardElement.style.transform = `translate(${dx}px, ${dy * 0.25}px) rotate(${rot}deg)`;

      // Tính opacity của stamp
      const ratio = Math.min(Math.abs(dx) / 75, 1);
      if (dx < 0) {
        if (stampSkip) stampSkip.style.opacity = ratio;
        if (stampAccept) stampAccept.style.opacity = 0;
      } else {
        if (stampAccept) stampAccept.style.opacity = ratio;
        if (stampSkip) stampSkip.style.opacity = 0;
      }
    };

    const onEnd = () => {
      if (!isDragging || this.isAnimating) return;
      isDragging = false;
      const dx = currentX - startX;

      cardElement.style.transition = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.25s ease';

      if (dx > 70) {
        // Swipe Right -> Học từ này
        this.executeSwipe('right', cardElement);
      } else if (dx < -70) {
        // Swipe Left -> Đã biết rồi (Bỏ qua)
        this.executeSwipe('left', cardElement);
      } else {
        // Snap back về giữa
        cardElement.style.transform = 'translate(0px, 0px) rotate(0deg)';
        if (stampSkip) stampSkip.style.opacity = 0;
        if (stampAccept) stampAccept.style.opacity = 0;
      }
    };

    // Touch Events trên Mobile
    cardElement.addEventListener('touchstart', (e) => {
      const t = e.touches[0];
      onStart(t.clientX, t.clientY);
    }, { passive: true });

    cardElement.addEventListener('touchmove', (e) => {
      const t = e.touches[0];
      onMove(t.clientX, t.clientY, e);
    }, { passive: false });

    cardElement.addEventListener('touchend', () => {
      onEnd();
    });

    cardElement.addEventListener('touchcancel', () => {
      onEnd();
    });

    // Mouse Events trên Desktop
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

  executeSwipe(direction, cardEl = null) {
    if (this.isAnimating) return;
    this.isAnimating = true;

    const card = cardEl || this.container.querySelector('#active-flashcard');
    const stampSkip = card?.querySelector('.stamp-skip');
    const stampAccept = card?.querySelector('.stamp-accept');

    if (direction === 'right') {
      if (stampAccept) stampAccept.style.opacity = 1;
      if (card) {
        card.style.transition = 'transform 0.28s ease-in, opacity 0.25s ease-in';
        card.style.transform = 'translate(120vw, 20px) rotate(25deg)';
        card.style.opacity = '0';
      }
      if (window.navigator?.vibrate) window.navigator.vibrate(12);
    } else {
      if (stampSkip) stampSkip.style.opacity = 1;
      if (card) {
        card.style.transition = 'transform 0.28s ease-in, opacity 0.25s ease-in';
        card.style.transform = 'translate(-120vw, 20px) rotate(-25deg)';
        card.style.opacity = '0';
      }
      if (window.navigator?.vibrate) window.navigator.vibrate(8);
    }

    setTimeout(() => {
      this.handleDecision(direction);
    }, 260);
  }

  handleDecision(direction) {
    const word = this.candidates[this.currentIndex];
    if (direction === 'right') {
      this.acceptedWords.push(word);
      this.showToast(`✨ Đã nhận: "${word.word}" (+1 từ mới)`, 'emerald');
    } else {
      this.skippedWords.push(word);
      this.showToast(`✓ Đã biết: "${word.word}" (sẽ ôn T+1)`, 'slate');
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
    if (skippedLabel) skippedLabel.textContent = `⚡ Bỏ qua: ${this.skippedWords.length}`;

    const percent = Math.min(100, Math.round((this.acceptedWords.length / this.targetCount) * 100));
    if (progressBar) progressBar.style.width = `${percent}%`;
  }

  pulseSpeakerButton() {
    const btn = this.container.querySelector('#btn-action-audio');
    if (btn) {
      btn.classList.add('speaker-pulsing');
      setTimeout(() => btn.classList.remove('speaker-pulsing'), 600);
    }
  }

  showToast(message, color = 'emerald') {
    const container = this.container.querySelector('#absorb-toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    const isEmerald = color === 'emerald';
    toast.className = `px-3.5 py-1.5 rounded-full text-xs font-bold shadow-lg animate-fade-in ${
      isEmerald 
        ? 'bg-emerald-600 text-white shadow-emerald-500/30' 
        : 'bg-slate-800 text-slate-200 border border-slate-700 shadow-slate-900/40'
    }`;
    toast.textContent = message;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      setTimeout(() => toast.remove(), 260);
    }, 1200);
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
      this.finishSession();
    }
  }

  finishSession() {
    this.cleanup();

    const acceptedIds = this.acceptedWords.map(w => w.id);
    const skippedIds = this.skippedWords.map(w => w.id);

    // Lưu trạng thái vào state: Cả 10 từ mới và các từ đã biết đều được xếp lịch ôn T+1
    appState.markNewBatchComplete(acceptedIds, skippedIds);

    this.container.innerHTML = `
      <div class="flex-1 flex flex-col items-center justify-center min-h-[calc(100dvh-210px)] md:min-h-[520px] w-full py-4 px-3 sm:px-4 animate-fade-in">
        <div class="w-full max-w-lg mx-auto">
          <div class="bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl border border-slate-200/90 dark:border-slate-800 p-5 sm:p-8 text-center backdrop-blur-xl">
            
            <div class="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-emerald-400 via-teal-500 to-indigo-600 flex items-center justify-center text-white text-4xl shadow-lg shadow-emerald-500/25">
              🎉
            </div>

            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-2 leading-tight">
              Hoàn Thành Giai Đoạn 1!
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-5">
              Bạn đã thẩm thấu và công nhận thành công <span class="font-extrabold text-emerald-600 dark:text-emerald-400 text-base">${this.acceptedWords.length} từ mới</span> hôm nay.
            </p>

            <!-- Stats Grid -->
            <div class="grid grid-cols-2 gap-3 mb-5 text-left">
              <div class="p-3.5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/50">
                <span class="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">Từ mới đã chọn</span>
                <p class="text-2xl font-black text-emerald-950 dark:text-emerald-200 mt-0.5">
                  ${this.acceptedWords.length} <span class="text-xs font-normal text-emerald-600 dark:text-emerald-400">từ</span>
                </p>
              </div>
              <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                <span class="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Đã biết trước</span>
                <p class="text-2xl font-black text-slate-800 dark:text-slate-200 mt-0.5">
                  ${this.skippedWords.length} <span class="text-xs font-normal text-slate-500">từ</span>
                </p>
              </div>
            </div>

            <!-- Notice Kỷ luật T+1 -->
            <div class="p-3.5 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 text-left mb-5">
              <div class="flex items-center space-x-2 text-indigo-700 dark:text-indigo-300 font-bold text-xs mb-1">
                <span>🗓️ Lịch Ôn Tập Kỷ Luật (T+1):</span>
              </div>
              <p class="text-xs text-indigo-950 dark:text-indigo-200 leading-relaxed">
                Tất cả <strong>${this.acceptedWords.length} từ mới</strong> và <strong>${this.skippedWords.length} từ đã biết</strong> đều đã được xếp vào lịch ôn tập ngắt quãng vào ngày mai để củng cố trí nhớ dài hạn.
              </p>
            </div>

            <!-- Danh sách 10 từ vừa thẩm thấu (Gallery) -->
            <div class="text-left mb-6">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                📋 Danh sách từ mới vừa nạp (${this.acceptedWords.length} từ):
              </span>
              <div class="max-h-[220px] overflow-y-auto space-y-2 pr-1 divide-y divide-slate-100 dark:divide-slate-800">
                ${this.acceptedWords.map((w, idx) => `
                  <div class="pt-2 first:pt-0 flex items-center justify-between gap-2">
                    <div class="min-w-0">
                      <div class="flex items-center space-x-2">
                        <span class="text-xs font-bold text-slate-400">${idx + 1}.</span>
                        <span class="font-extrabold text-slate-900 dark:text-white text-sm truncate">${w.word}</span>
                        ${w.ipa ? `<span class="text-[11px] font-mono text-indigo-500 hidden sm:inline">${w.ipa}</span>` : ''}
                      </div>
                      <p class="text-xs text-slate-500 dark:text-slate-400 truncate pl-4">${w.meaningVi}</p>
                    </div>
                    <button data-word="${w.word}" class="btn-summary-audio p-2 rounded-xl bg-slate-100 hover:bg-indigo-50 dark:bg-slate-800 text-slate-600 hover:text-indigo-600 transition-colors shrink-0" title="Nghe phát âm">
                      🔊
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Action Button -->
            <button id="btn-finish-absorb" class="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/25 active:scale-[0.98] transition-all text-sm sm:text-base">
              🚀 Hoàn tất & Về Trang Chủ
            </button>
          </div>
        </div>
      </div>
    `;

    this.container.querySelectorAll('.btn-summary-audio').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.getAttribute('data-word');
        if (text) speechService.speak(text);
      });
    });

    this.container.querySelector('#btn-finish-absorb')?.addEventListener('click', () => {
      this.onCompleted();
    });
  }

  cleanup() {
    if (this.handleKeyDown) {
      window.removeEventListener('keydown', this.handleKeyDown);
      this.handleKeyDown = null;
    }
  }
}
