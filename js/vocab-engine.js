// Động cơ Học & Ôn tập từ vựng (Vocabulary Engine)
// Hỗ trợ 3 chế độ: Dịch ngược (Mode 1), Nghe chép chính tả (Mode 2), Nhận diện trắc nghiệm (Mode 3)
// Tích hợp tính năng: "Không thể nghe lúc này" (Audio Bypass) & Web Speech API

import { speechService } from './speech.js';
import { appState } from './state.js';
import { VOCAB_BANK } from './data/vocab-bank.js';

export class VocabPracticeEngine {
  constructor(containerElement, options = {}) {
    this.container = containerElement;
    this.mode = options.mode || "review"; // "review" | "new_batch"
    this.words = options.words || []; // Danh sách object từ VOCAB_BANK
    this.onCompleted = options.onCompleted || (() => {});
    
    this.queue = [];
    this.currentIndex = 0;
    this.correctCount = 0;
    this.isAudioDisabledForSession = false; // Cờ "Không thể nghe lúc này"
  }

  start() {
    if (!this.words || this.words.length === 0) {
      this.renderEmptyState();
      return;
    }

    // Xây dựng hàng đợi câu hỏi (Mỗi từ được phân bổ vào các mode tương ứng)
    this.buildQueue();
    this.currentIndex = 0;
    this.correctCount = 0;
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

  renderEmptyState() {
    this.container.innerHTML = `
      <div class="flex-1 flex flex-col items-center justify-center min-h-[calc(100dvh-230px)] md:min-h-[500px] w-full py-4 animate-fade-in">
        <div class="w-full max-w-lg mx-auto">
          <div class="bg-white dark:bg-slate-900 rounded-[2rem] p-6 sm:p-8 text-center border border-slate-200/90 dark:border-slate-800 shadow-xl">
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

  renderCurrentQuestion() {
    if (this.currentIndex >= this.queue.length) {
      this.finishSession();
      return;
    }

    const item = this.queue[this.currentIndex];
    const total = this.queue.length;
    const progress = Math.round(((this.currentIndex) / total) * 100);

    // Header chung cho tất cả các mode
    const headerHtml = `
      <div class="flex items-center justify-between mb-3.5">
        <div class="flex items-center space-x-2">
          <button id="btn-exit-practice" class="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors" title="Tạm dừng phiên học">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          <span class="px-2.5 py-0.5 text-[11px] font-black rounded-lg uppercase tracking-wider ${this.mode === 'review' ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300'}">
            ${this.mode === 'review' ? '🔄 Ôn Tập Kỷ Luật' : '⚡ Luyện Tập: 10 Từ Mới (Giai đoạn 2)'}
          </span>
          <span class="text-xs font-semibold text-slate-400">${this.currentIndex + 1} / ${total}</span>
        </div>

        <!-- Nút Trạng thái Loa (Bật/Tắt Audio) -->
        <button id="btn-toggle-audio-status" title="${this.isAudioDisabledForSession ? 'Âm thanh đang tắt (Click để bật lại)' : 'Âm thanh đang bật'}" class="flex items-center space-x-1 px-2.5 py-1 rounded-xl text-xs font-semibold border ${this.isAudioDisabledForSession ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900 text-rose-600' : 'bg-slate-100 dark:bg-slate-800 border-slate-200/80 dark:border-slate-700 text-slate-600 dark:text-slate-300'} hover:opacity-80 transition-all">
          <span>${this.isAudioDisabledForSession ? '🔇 Tắt loa' : '🔊 Loa bật'}</span>
        </button>
      </div>

      <!-- Thanh tiến độ siêu mỏng, sắc nét -->
      <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 mb-5 overflow-hidden">
        <div class="bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 h-full rounded-full transition-all duration-300" style="width: ${progress}%"></div>
      </div>
    `;

    // Render theo mode tương ứng
    let contentHtml = "";
    if (item.mode === "mode1_vn_to_en") {
      contentHtml = this.renderMode1(item.word);
    } else if (item.mode === "mode2_audio_to_en") {
      contentHtml = this.renderMode2(item.word);
    } else {
      contentHtml = this.renderMode3(item.word);
    }

    this.container.innerHTML = `
      <div class="flex-1 flex flex-col items-center justify-center min-h-[calc(100dvh-230px)] md:min-h-[500px] w-full py-2 sm:py-4 animate-fade-in">
        <div class="w-full max-w-xl mx-auto">
          <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200/90 dark:border-slate-800 p-5 sm:p-7 backdrop-blur-xl">
            ${headerHtml}
            ${contentHtml}
            <div id="feedback-area" class="mt-4 hidden"></div>
          </div>
        </div>
      </div>
    `;

    this.bindEvents(item);

    // Nếu là Mode 2 và audio đang bật, tự động phát âm lần đầu
    if (item.mode === "mode2_audio_to_en" && !this.isAudioDisabledForSession) {
      setTimeout(() => speechService.speak(item.word.word), 300);
    }
  }

  // MODE 1: Hiện nghĩa Tiếng Việt -> Gõ từ Tiếng Anh
  renderMode1(word) {
    const hint = `${word.word[0]}${"_ ".repeat(word.word.length - 2)}${word.word[word.word.length - 1]}`;
    return `
      <div class="text-center py-1">
        <span class="text-[11px] uppercase tracking-wider font-extrabold text-indigo-500 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-md border border-indigo-200/60 dark:border-indigo-900/60">
          Chế độ 1: Dịch nghĩa & Điền từ
        </span>
        <div class="mt-4 mb-2">
          <span class="text-xs font-semibold text-slate-400 dark:text-slate-500">(${word.type})</span>
          <h3 class="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white mt-1 leading-snug">
            "${word.meaningVi}"
          </h3>
        </div>
        
        <div class="inline-flex items-center px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 font-mono text-xs tracking-widest text-slate-600 dark:text-slate-300 mb-5">
          Gợi ý: ${hint} (${word.word.length} ký tự)
        </div>

        <!-- Ô nhập liệu -->
        <div class="max-w-md mx-auto">
          <input 
            type="text" 
            id="vocab-input" 
            placeholder="Gõ từ tiếng Anh tại đây..." 
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            class="w-full text-center text-lg md:text-xl font-bold py-3.5 px-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-900 transition-all shadow-inner"
          />
          <button id="btn-submit-answer" class="w-full mt-3.5 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-2xl shadow-md shadow-indigo-500/20 active:scale-[0.98] transition-all text-sm">
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
        <span class="text-[11px] uppercase tracking-wider font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-200/60 dark:border-emerald-900/60">
          Chế độ 2: Nghe & Chép chính tả
        </span>

        <!-- Nút Loa Lớn để nghe lại -->
        <div class="my-5">
          <button id="btn-play-audio" class="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/25 transition-transform active:scale-95 group">
            <span class="text-3xl group-hover:scale-110 transition-transform">🔊</span>
          </button>
          <p class="text-xs text-slate-400 mt-2">Bấm vào biểu tượng loa để nghe lại</p>
        </div>

        <!-- Ô nhập liệu -->
        <div class="max-w-md mx-auto">
          <input 
            type="text" 
            id="vocab-input" 
            placeholder="Nghe và gõ lại từ..." 
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            class="w-full text-center text-lg md:text-xl font-bold py-3.5 px-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:bg-white dark:focus:bg-slate-900 transition-all shadow-inner"
          />
          <button id="btn-submit-answer" class="w-full mt-3.5 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-2xl shadow-md shadow-emerald-500/20 active:scale-[0.98] transition-all text-sm">
            Kiểm tra đáp án ➔
          </button>
        </div>

        <!-- NÚT ĐẶC BIỆT: KHÔNG THỂ NGHE LÚC NÀY -->
        <div class="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800">
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
    // Xáo trộn thứ tự 4 lựa chọn để đáp án đúng không cố định ở vị trí A
    options = options.sort(() => 0.5 - Math.random());

    return `
      <div class="py-1">
        <div class="text-center mb-5">
          <span class="text-[11px] uppercase tracking-wider font-extrabold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-md border border-blue-200/60 dark:border-blue-900/60">
            Chế độ 3: Nhận diện phản xạ nhanh
          </span>
          <div class="flex items-center justify-center space-x-2.5 mt-3">
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
          Chọn nghĩa Tiếng Việt chính xác nhất:
        </p>

        <!-- 4 Option buttons -->
        <div class="space-y-2.5 max-w-md mx-auto" id="options-group">
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
    document.getElementById('btn-exit-practice')?.addEventListener('click', () => {
      this.onCompleted();
    });

    const inputEl = document.getElementById('vocab-input');
    const submitBtn = document.getElementById('btn-submit-answer');
    const cantListenBtn = document.getElementById('btn-cant-listen-now');
    const playAudioBtn = document.getElementById('btn-play-audio');
    const playWordAudioBtn = document.getElementById('btn-play-word-audio');
    const toggleAudioStatusBtn = document.getElementById('btn-toggle-audio-status');

    // Focus vào input nếu có
    if (inputEl) {
      inputEl.focus();
      inputEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          this.handleTextAnswer(inputEl.value, item.word);
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

    // Toggle Audio Status ở thanh công cụ phía trên
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

    // Xử lý nút: KHÔNG THỂ NGHE LÚC NÀY
    if (cantListenBtn) {
      cantListenBtn.addEventListener('click', () => {
        this.handleCantListenNow();
      });
    }

    // Gắn sự kiện cho các lựa chọn trắc nghiệm (Mode 3)
    const choiceBtns = this.container.querySelectorAll('.vocab-choice-btn');
    choiceBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const selected = btn.getAttribute('data-option');
        this.handleChoiceAnswer(selected, item.word, btn);
      });
    });
  }

  // Xử lý sự kiện "Không thể nghe lúc này"
  handleCantListenNow() {
    this.isAudioDisabledForSession = true;

    // Chuyển đổi toàn bộ các câu hỏi Mode 2 (nghe) còn lại trong hàng đợi sang Mode 1 hoặc Mode 3
    for (let i = this.currentIndex; i < this.queue.length; i++) {
      if (this.queue[i].mode === "mode2_audio_to_en") {
        this.queue[i].mode = (i % 2 === 0) ? "mode1_vn_to_en" : "mode3_en_to_vn";
      }
    }

    // Hiển thị thông báo Toast nhẹ nhàng
    const feedbackArea = document.getElementById('feedback-area');
    feedbackArea.className = "mt-4 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900 text-amber-800 dark:text-amber-200 text-sm animate-fade-in block";
    feedbackArea.innerHTML = `
      <div class="flex items-center space-x-2">
        <span class="text-lg">🔇</span>
        <span><strong>Đã tắt bài tập nghe cho phiên này.</strong> Các câu tiếp theo sẽ tự động chuyển sang dạng đọc hiểu và điền từ!</span>
      </div>
    `;

    // Nhảy ngay sang câu kế tiếp sau 1.2 giây
    setTimeout(() => {
      this.currentIndex++;
      this.renderCurrentQuestion();
    }, 1200);
  }

  // Xử lý đáp án dạng gõ text (Mode 1 & Mode 2)
  handleTextAnswer(userInput, word) {
    const cleanInput = (userInput || "").trim().toLowerCase();
    const targetWord = word.word.trim().toLowerCase();
    const isCorrect = cleanInput === targetWord;

    const feedbackArea = document.getElementById('feedback-area');
    feedbackArea.classList.remove('hidden');

    if (isCorrect) {
      this.correctCount++;
      speechService.speak(word.word); // Phát âm chuẩn khi trả lời đúng
      feedbackArea.className = "mt-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-sm animate-fade-in block";
      feedbackArea.innerHTML = `
        <div class="flex items-start justify-between">
          <div>
            <div class="font-bold flex items-center space-x-1.5 text-base">
              <span>✅ Chính xác!</span>
              <span class="text-xs bg-emerald-200 dark:bg-emerald-900 px-2 py-0.5 rounded text-emerald-900 dark:text-emerald-100">${word.ipa || ""}</span>
            </div>
            <p class="mt-1 text-xs opacity-90"><strong>Ví dụ:</strong> ${word.example}</p>
          </div>
          <button id="btn-next-question" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs shadow transition-all ml-3">
            Tiếp tục ➔
          </button>
        </div>
      `;
    } else {
      feedbackArea.className = "mt-4 p-4 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200 text-sm animate-fade-in block";
      feedbackArea.innerHTML = `
        <div class="flex items-start justify-between">
          <div>
            <div class="font-bold text-base">❌ Chưa chính xác!</div>
            <p class="mt-1 text-xs">Đáp án đúng là: <strong class="text-sm underline font-mono text-rose-950 dark:text-rose-100">${word.word}</strong> (${word.ipa || ""})</p>
            <p class="mt-1 text-xs opacity-90"><strong>Ví dụ:</strong> ${word.example}</p>
          </div>
          <button id="btn-next-question" class="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-bold text-xs shadow transition-all ml-3">
            Đã hiểu ➔
          </button>
        </div>
      `;
    }

    // Vô hiệu hóa nút kiểm tra cũ
    const submitBtn = document.getElementById('btn-submit-answer');
    if (submitBtn) submitBtn.disabled = true;

    // Lắng nghe sự kiện chuyển câu
    document.getElementById('btn-next-question')?.addEventListener('click', () => {
      this.currentIndex++;
      this.renderCurrentQuestion();
    });
  }

  // Xử lý đáp án dạng chọn trắc nghiệm (Mode 3)
  handleChoiceAnswer(selectedOption, word, clickedBtn) {
    const correctAnswer = (word.optionsVi && word.optionsVi.length > 0) ? word.optionsVi[0] : word.meaningVi;
    const isCorrect = (selectedOption === correctAnswer) || (selectedOption === word.meaningVi);
    const choiceBtns = this.container.querySelectorAll('.vocab-choice-btn');

    // Highlight các nút đúng/sai
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
    feedbackArea.classList.remove('hidden');

    if (isCorrect) {
      this.correctCount++;
      speechService.speak(word.word);
      feedbackArea.className = "mt-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-sm animate-fade-in block";
      feedbackArea.innerHTML = `
        <div class="flex items-center justify-between">
          <span>✅ Xuất sắc! Nhận diện từ chuẩn xác.</span>
          <button id="btn-next-question" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs shadow transition-all ml-3">
            Tiếp tục ➔
          </button>
        </div>
      `;
    } else {
      feedbackArea.className = "mt-4 p-4 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200 text-sm animate-fade-in block";
      feedbackArea.innerHTML = `
        <div class="flex items-center justify-between">
          <span>❌ Hãy ghi nhớ: <strong>${word.word}</strong> = <strong>${word.meaningVi}</strong></span>
          <button id="btn-next-question" class="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-bold text-xs shadow transition-all ml-3">
            Đã hiểu ➔
          </button>
        </div>
      `;
    }

    document.getElementById('btn-next-question')?.addEventListener('click', () => {
      this.currentIndex++;
      this.renderCurrentQuestion();
    });
  }

  finishSession() {
    const wordIds = this.words.map(w => w.id);
    const totalQuestions = this.queue.length;
    const accuracy = Math.round((this.correctCount / totalQuestions) * 100);

    // Cập nhật state hệ thống
    if (this.mode === "review") {
      appState.markReviewComplete(wordIds);
    } else {
      const practiceBonusXP = this.correctCount * 2;
      if (practiceBonusXP > 0) {
        appState.addXP(practiceBonusXP);
        appState.saveState();
      }
    }

    this.container.innerHTML = `
      <div class="flex-1 flex flex-col items-center justify-center min-h-[calc(100dvh-230px)] md:min-h-[500px] w-full py-4 animate-fade-in">
        <div class="w-full max-w-lg mx-auto">
          <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 text-center">
            <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-tr from-amber-400 to-emerald-500 flex items-center justify-center text-white text-3xl shadow-lg">
              🏆
            </div>

            <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">
              ${this.mode === 'review' ? 'Hoàn Thành Bài Ôn Tập Kỷ Luật!' : 'Hoàn Thành Toàn Bộ Batch 10 Từ Mới!'}
            </h2>
            <p class="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
              ${this.mode === 'review' ? 'Bạn đã hoàn tất bài ôn tập hôm nay.' : 'Bạn đã xuất sắc hoàn thành cả 2 Giai đoạn: Thẩm thấu & Luyện tập phản xạ 3 dạng bài.'}<br/>
              Độ chính xác: <strong class="text-indigo-600 dark:text-indigo-400 text-base">${accuracy}%</strong> (${this.correctCount}/${totalQuestions} câu)
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
