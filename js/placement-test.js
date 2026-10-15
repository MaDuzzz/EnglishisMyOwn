// Trình điều khiển bài Placement Test 10 câu phân loại trình độ CEFR
import { PLACEMENT_QUESTIONS, calculateLevel } from './data/placement-questions.js';
import { appState } from './state.js';

export class PlacementTestEngine {
  constructor(containerElement, onCompletedCallback) {
    this.container = containerElement;
    this.onCompleted = onCompletedCallback;
    this.currentIndex = 0;
    this.userAnswers = []; // { questionId, selectedIndex, isCorrect }
  }

  start() {
    this.currentIndex = 0;
    this.userAnswers = [];
    this.renderQuestion();
  }

  renderQuestion() {
    const q = PLACEMENT_QUESTIONS[this.currentIndex];
    const total = PLACEMENT_QUESTIONS.length;
    const progressPercent = Math.round(((this.currentIndex) / total) * 100);

    const formattedQuestion = q.question.replace(
      /_{3,}/g, 
      '<span class="inline-block px-3 py-0.5 mx-1 border-b-2 border-indigo-500 bg-indigo-50/80 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 rounded-lg font-black tracking-widest">______</span>'
    );

    this.container.innerHTML = `
      <div class="flex-1 flex flex-col items-center justify-center min-h-[calc(100dvh-230px)] md:min-h-[500px] w-full py-2 sm:py-6 animate-fade-in">
        <div class="w-full max-w-xl mx-auto">
          <div class="bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl shadow-indigo-500/5 border border-slate-200/90 dark:border-slate-800 p-5 sm:p-8 backdrop-blur-xl transition-all">
          
          <!-- Top Header & Progress -->
          <div class="mb-5 sm:mb-6">
            <div class="flex items-center justify-between mb-2.5">
              <div class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
                <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                <span>🎯 Placement Test</span>
              </div>
              <span class="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-black">
                Câu ${this.currentIndex + 1} / ${total}
              </span>
            </div>

            <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden p-0.5 border border-slate-200/60 dark:border-slate-700/60">
              <div class="bg-gradient-to-r from-blue-500 via-indigo-600 to-emerald-400 h-full rounded-full transition-all duration-300" style="width: ${progressPercent}%"></div>
            </div>
          </div>

          <!-- Question Badge & Text -->
          <div class="mb-6">
            <div class="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center space-x-1.5">
              <span>Độ khó mục tiêu:</span>
              <span class="text-indigo-600 dark:text-indigo-400 font-black">${q.level}</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-relaxed">
              ${formattedQuestion}
            </h3>
          </div>

          <!-- Options List -->
          <div class="space-y-3 mb-6" id="test-options-container">
            ${q.options.map((opt, idx) => `
              <button 
                data-index="${idx}"
                class="test-option-btn w-full text-left p-4 sm:p-4.5 rounded-2xl border-2 border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-500 hover:bg-indigo-50/40 dark:hover:bg-indigo-950/40 active:scale-[0.98] transition-all flex items-center justify-between group shadow-sm">
                <div class="flex items-center space-x-3.5">
                  <span class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-indigo-600 group-hover:text-white transition-colors flex items-center justify-center font-black text-sm shrink-0 shadow-inner">
                    ${String.fromCharCode(65 + idx)}
                  </span>
                  <span class="text-base sm:text-lg font-semibold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    ${opt}
                  </span>
                </div>
                <div class="w-6 h-6 rounded-full border-2 border-slate-300 dark:border-slate-700 group-hover:border-indigo-600 group-hover:bg-indigo-600 flex items-center justify-center transition-all shrink-0">
                  <svg class="w-3.5 h-3.5 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

    // Gắn sự kiện chọn đáp án
    const optionBtns = this.container.querySelectorAll('.test-option-btn');
    optionBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (window.navigator?.vibrate) window.navigator.vibrate(10);
        const selectedIndex = parseInt(btn.getAttribute('data-index'), 10);
        this.handleSelect(selectedIndex);
      });
    });
  }

  handleSelect(selectedIndex) {
    const q = PLACEMENT_QUESTIONS[this.currentIndex];
    const isCorrect = selectedIndex === q.correctIndex;

    this.userAnswers.push({
      questionId: q.id,
      selectedIndex,
      isCorrect
    });

    if (this.currentIndex < PLACEMENT_QUESTIONS.length - 1) {
      this.currentIndex++;
      this.renderQuestion();
    } else {
      this.showResult();
    }
  }

  showResult() {
    const correctCount = this.userAnswers.filter(a => a.isCorrect).length;
    const result = calculateLevel(correctCount);

    // Lưu cấp độ vào state
    appState.setLevel(result.level);

    this.container.innerHTML = `
      <div class="flex-1 flex flex-col items-center justify-center min-h-[calc(100dvh-230px)] md:min-h-[500px] w-full py-4 animate-fade-in">
        <div class="w-full max-w-xl mx-auto">
          <div class="bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 text-center">
            <div class="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-tr from-emerald-400 to-indigo-600 flex items-center justify-center text-white text-4xl shadow-lg shadow-indigo-500/25">
              🎉
            </div>

            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-2">
              Kết Quả Xếp Lớp CEFR
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
              Bạn đã trả lời đúng <span class="font-extrabold text-indigo-600 dark:text-indigo-400 text-base">${correctCount} / 10</span> câu hỏi.
            </p>

            <!-- Rank Card -->
            <div class="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-800/80 dark:to-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 rounded-2xl p-5 sm:p-6 mb-6 text-left">
              <div class="flex items-center space-x-3 mb-2.5">
                <span class="px-3.5 py-1.5 bg-indigo-600 text-white font-black rounded-xl text-lg tracking-wider shadow-sm">
                  ${result.level}
                </span>
                <h4 class="text-lg sm:text-xl font-black text-slate-800 dark:text-white">
                  ${result.label}
                </h4>
              </div>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                ${result.description}
              </p>
            </div>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button id="btn-start-learning" class="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-500/25 active:scale-[0.98] transition-all">
                🚀 Bắt đầu học Batch 10 từ đầu tiên!
              </button>
              <button id="btn-retake-test" class="w-full sm:w-auto px-6 py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-2xl transition-colors">
                Làm lại bài test
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    document.getElementById('btn-start-learning').addEventListener('click', () => {
      if (this.onCompleted) this.onCompleted(result.level);
    });

    document.getElementById('btn-retake-test').addEventListener('click', () => {
      this.start();
    });
  }
}
