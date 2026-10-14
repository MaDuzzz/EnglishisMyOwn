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

    this.container.innerHTML = `
      <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 max-w-2xl mx-auto transition-all animate-fade-in">
        <!-- Progress Bar -->
        <div class="mb-6">
          <div class="flex items-center justify-between text-xs md:text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">
            <span>Bài Đánh Giá Xếp Lớp (Placement Test)</span>
            <span class="text-indigo-600 dark:text-indigo-400 font-bold">Câu ${this.currentIndex + 1} / ${total}</span>
          </div>
          <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
            <div class="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full transition-all duration-300" style="width: ${progressPercent}%"></div>
          </div>
        </div>

        <!-- Question Badge & Text -->
        <div class="mb-6">
          <span class="inline-block px-2.5 py-1 text-xs font-semibold rounded-md bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 mb-3">
            Độ khó mục tiêu: ${q.level}
          </span>
          <h3 class="text-lg md:text-xl font-bold text-slate-800 dark:text-white leading-relaxed">
            ${q.question}
          </h3>
        </div>

        <!-- Options List -->
        <div class="space-y-3 mb-6" id="test-options-container">
          ${q.options.map((opt, idx) => `
            <button 
              data-index="${idx}"
              class="test-option-btn w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 hover:bg-indigo-50/40 dark:hover:bg-indigo-950/30 transition-all flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <span class="flex items-center space-x-3">
                <span class="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center font-bold text-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  ${String.fromCharCode(65 + idx)}
                </span>
                <span class="text-slate-800 dark:text-slate-200 font-medium">${opt}</span>
              </span>
            </button>
          `).join('')}
        </div>

        <div class="text-xs text-slate-400 dark:text-slate-500 text-center">
          💡 Chọn đáp án phản xạ tự nhiên nhất của bạn để có kết quả xếp lớp chuẩn xác nhất.
        </div>
      </div>
    `;

    // Gắn sự kiện chọn đáp án
    const optionBtns = this.container.querySelectorAll('.test-option-btn');
    optionBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
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
      <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-8 max-w-2xl mx-auto text-center animate-fade-in">
        <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-tr from-emerald-400 to-indigo-600 flex items-center justify-center text-white text-3xl shadow-lg">
          🎉
        </div>

        <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
          Kết Quả Xếp Lớp Của Bạn
        </h2>
        <p class="text-slate-500 dark:text-slate-400 mb-6">
          Bạn đã trả lời đúng <span class="font-bold text-indigo-600 dark:text-indigo-400">${correctCount} / 10</span> câu hỏi.
        </p>

        <!-- Rank Card -->
        <div class="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 rounded-2xl p-6 mb-8 text-left">
          <div class="flex items-center space-x-4 mb-3">
            <span class="px-3 py-1 bg-indigo-600 text-white font-extrabold rounded-lg text-lg tracking-wider">
              ${result.level}
            </span>
            <h4 class="text-xl font-bold text-slate-800 dark:text-white">
              ${result.label}
            </h4>
          </div>
          <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            ${result.description}
          </p>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button id="btn-start-learning" class="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5">
            🚀 Bắt đầu học Batch 10 từ đầu tiên!
          </button>
          <button id="btn-retake-test" class="w-full sm:w-auto px-6 py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-xl transition-colors">
            Làm lại bài test
          </button>
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
