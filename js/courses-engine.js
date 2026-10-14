// Trình điều khiển Khoá học Video (Google Drive Embed), Quiz 15-20 câu & AI Speaking Action Hub
import { COURSES_DATA } from './data/courses-data.js';

export class CoursesEngine {
  constructor(containerElement) {
    this.container = containerElement;
    this.selectedCourseId = COURSES_DATA[0].id;
    this.selectedLessonId = COURSES_DATA[0].modules[0].lessons[0].id;
    this.quizState = {
      currentIndex: 0,
      userAnswers: [],
      isFinished: false
    };
  }

  render() {
    const course = COURSES_DATA.find(c => c.id === this.selectedCourseId) || COURSES_DATA[0];
    let currentLesson = null;
    for (const m of course.modules) {
      const l = m.lessons.find(item => item.id === this.selectedLessonId);
      if (l) {
        currentLesson = l;
        break;
      }
    }
    if (!currentLesson) {
      currentLesson = course.modules[0].lessons[0];
      this.selectedLessonId = currentLesson.id;
    }

    this.container.innerHTML = `
      <div class="space-y-8 animate-fade-in">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Cột Trái & Giữa: Video Player & AI Speaking & Quiz (2 cột) -->
          <div class="lg:col-span-2 space-y-8">
            <!-- 📺 1. VIDEO PLAYER (Google Drive Preview) -->
            <div class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl">
              <div class="aspect-video w-full bg-slate-950 relative">
                <!-- Google Drive Preview Embed -->
                <iframe 
                  id="drive-video-frame"
                  src="https://drive.google.com/file/d/${currentLesson.videoDriveId}/preview" 
                  class="w-full h-full border-0" 
                  allow="autoplay; encrypted-media" 
                  allowfullscreen>
                </iframe>
              </div>

              <div class="p-6">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
                    ⏱️ Thời lượng: ${currentLesson.duration}
                  </span>
                  <span class="text-xs text-slate-400">Google Drive Streaming Player</span>
                </div>
                <h2 class="text-xl md:text-2xl font-black text-slate-900 dark:text-white">
                  ${currentLesson.title}
                </h2>
                ${currentLesson.notes ? `
                  <div class="mt-4 p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 text-xs md:text-sm text-blue-900 dark:text-blue-200 leading-relaxed">
                    💡 <strong>Trọng tâm bài học:</strong> ${currentLesson.notes}
                  </div>
                ` : ''}
              </div>
            </div>

            <!-- 🎙️ 2. PHÒNG THỰC HÀNH NÓI VỚI AI (ACTION HUB) -->
            <div class="bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 rounded-3xl p-6 md:p-8 text-white shadow-xl border border-indigo-800/50">
              <div class="flex items-center space-x-3 mb-4">
                <span class="text-3xl">🎙️</span>
                <div>
                  <h3 class="text-lg md:text-xl font-black">Phòng Luyện Phản Xạ Nói Cùng AI (Voice Mode)</h3>
                  <p class="text-xs text-indigo-200">Thực hành hỏi đáp 1-1 với ChatGPT hoặc Gemini theo prompt mẫu chuẩn xác.</p>
                </div>
              </div>

              <!-- Hướng dẫn 3 bước -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div class="bg-white/10 rounded-xl p-3 border border-white/10">
                  <div class="text-xs font-bold text-indigo-300 mb-1">Bước 1</div>
                  <div class="text-xs">Bấm <strong>Sao chép Prompt</strong> bên dưới.</div>
                </div>
                <div class="bg-white/10 rounded-xl p-3 border border-white/10">
                  <div class="text-xs font-bold text-indigo-300 mb-1">Bước 2</div>
                  <div class="text-xs">Mở app <strong>ChatGPT</strong> hoặc <strong>Gemini</strong>.</div>
                </div>
                <div class="bg-white/10 rounded-xl p-3 border border-white/10">
                  <div class="text-xs font-bold text-indigo-300 mb-1">Bước 3</div>
                  <div class="text-xs">Dán prompt, nhấn biểu tượng <strong>Voice 🎙️</strong> và nói!</div>
                </div>
              </div>

              <!-- Prompt Box -->
              <div class="relative bg-slate-950/80 rounded-2xl p-4 border border-indigo-500/30 mb-6">
                <div class="flex items-center justify-between text-xs text-indigo-400 mb-2 font-mono">
                  <span>PROMPT MẪU CHO BÀI HỌC NÀY</span>
                  <span class="text-emerald-400">✅ Có giao thức sửa lỗi STT</span>
                </div>
                <pre class="text-xs text-slate-300 font-mono whitespace-pre-wrap max-h-48 overflow-y-auto pr-2 scrollbar-thin">${currentLesson.aiPrompt}</pre>
              </div>

              <!-- Action Buttons -->
              <div class="flex flex-wrap items-center gap-3">
                <button id="btn-copy-prompt" class="px-5 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl text-sm shadow-lg transition-all flex items-center space-x-2">
                  <span>📋</span>
                  <span id="copy-btn-text">Sao chép Prompt</span>
                </button>
                <a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition-all flex items-center space-x-2">
                  <span>🤖</span>
                  <span>Mở ChatGPT</span>
                </a>
                <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" class="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all flex items-center space-x-2">
                  <span>✨</span>
                  <span>Mở Gemini</span>
                </a>
              </div>
            </div>

            <!-- 📝 3. MINI QUIZ ÔN TẬP NGỮ PHÁP (15 - 20 CÂU) -->
            <div class="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-xl" id="lesson-quiz-section">
              <div class="flex items-center justify-between mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <h3 class="text-lg md:text-xl font-black text-slate-900 dark:text-white flex items-center space-x-2">
                    <span>📝</span>
                    <span>Bài Tập Củng Cố Ngữ Pháp (${currentLesson.quizzes.length} câu)</span>
                  </h3>
                  <p class="text-xs text-slate-400 mt-1">Làm trắc nghiệm để khắc sâu phản xạ trước khi vào phòng nói AI.</p>
                </div>
                <span class="text-xs font-bold px-3 py-1 bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 rounded-lg">
                  Chất lượng cao
                </span>
              </div>

              <div id="quiz-runner-container"></div>
            </div>
          </div>

          <!-- Cột Phải: Danh sách Bài học / Modules (1 cột) -->
          <div class="space-y-6">
            <div class="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xl sticky top-20">
              <h3 class="font-extrabold text-slate-900 dark:text-white text-base mb-4 flex items-center space-x-2">
                <span>📑</span>
                <span>Nội Dung Khoá Học</span>
              </h3>

              <div class="space-y-4 max-h-[calc(100vh-250px)] overflow-y-auto pr-1 scrollbar-thin">
                ${course.modules.map(mod => `
                  <div>
                    <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      ${mod.title}
                    </h4>
                    <div class="space-y-1.5">
                      ${mod.lessons.map(les => `
                        <button 
                          data-lesson-id="${les.id}"
                          class="lesson-select-btn w-full text-left p-3 rounded-xl transition-all text-xs font-semibold flex items-start space-x-2.5 ${les.id === this.selectedLessonId ? 'bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}">
                          <span class="mt-0.5">${les.id === this.selectedLessonId ? '▶️' : '📄'}</span>
                          <span class="flex-1 leading-snug">${les.title}</span>
                        </button>
                      `).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    this.bindEvents(currentLesson);
    this.renderQuiz(currentLesson);
  }

  bindEvents(currentLesson) {
    // Chuyển khoá học
    this.container.querySelectorAll('.course-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedCourseId = btn.getAttribute('data-course-id');
        const course = COURSES_DATA.find(c => c.id === this.selectedCourseId);
        this.selectedLessonId = course.modules[0].lessons[0].id;
        this.quizState = { currentIndex: 0, userAnswers: [], isFinished: false };
        this.render();
      });
    });

    // Chuyển bài học
    this.container.querySelectorAll('.lesson-select-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedLessonId = btn.getAttribute('data-lesson-id');
        this.quizState = { currentIndex: 0, userAnswers: [], isFinished: false };
        this.render();
      });
    });

    // Copy Prompt
    const copyBtn = document.getElementById('btn-copy-prompt');
    const copyText = document.getElementById('copy-btn-text');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(currentLesson.aiPrompt).then(() => {
          copyText.textContent = "✅ Đã sao chép vào Clipboard!";
          copyBtn.classList.replace('bg-indigo-500', 'bg-emerald-600');
          setTimeout(() => {
            copyText.textContent = "Sao chép Prompt";
            copyBtn.classList.replace('bg-emerald-600', 'bg-indigo-500');
          }, 2500);
        });
      });
    }
  }

  renderQuiz(currentLesson) {
    const quizContainer = document.getElementById('quiz-runner-container');
    if (!quizContainer) return;

    const quizzes = currentLesson.quizzes;
    if (!quizzes || quizzes.length === 0) {
      quizContainer.innerHTML = `<p class="text-xs text-slate-400">Đang cập nhật bài tập cho bài học này...</p>`;
      return;
    }

    if (this.quizState.isFinished) {
      this.renderQuizSummary(quizContainer, quizzes);
      return;
    }

    const q = quizzes[this.quizState.currentIndex];
    const total = quizzes.length;
    const progress = Math.round(((this.quizState.currentIndex) / total) * 100);

    quizContainer.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between text-xs text-slate-500 font-semibold mb-2">
          <span>Câu ${this.quizState.currentIndex + 1} / ${total}</span>
          <span class="text-indigo-600 font-bold">${progress}% hoàn thành</span>
        </div>
        <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 mb-4 overflow-hidden">
          <div class="bg-indigo-600 h-2 rounded-full transition-all" style="width: ${progress}%"></div>
        </div>

        <h4 class="text-base font-bold text-slate-800 dark:text-white leading-relaxed">
          ${q.question}
        </h4>

        <div class="space-y-2.5 pt-2" id="quiz-options-group">
          ${q.options.map((opt, idx) => `
            <button 
              data-index="${idx}"
              class="quiz-opt-btn w-full text-left p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 hover:bg-indigo-50/40 dark:hover:bg-indigo-950/30 text-sm font-medium text-slate-700 dark:text-slate-300 transition-all flex items-center space-x-3">
              <span class="w-6 h-6 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold flex items-center justify-center">
                ${String.fromCharCode(65 + idx)}
              </span>
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>

        <div id="quiz-feedback" class="mt-4 hidden"></div>
      </div>
    `;

    const optBtns = quizContainer.querySelectorAll('.quiz-opt-btn');
    optBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedIdx = parseInt(btn.getAttribute('data-index'), 10);
        this.handleQuizAnswer(selectedIdx, q, quizContainer, currentLesson);
      });
    });
  }

  handleQuizAnswer(selectedIdx, q, quizContainer, currentLesson) {
    const isCorrect = selectedIdx === q.correctIndex;
    this.quizState.userAnswers.push({
      questionId: q.id,
      selectedIdx,
      isCorrect
    });

    const optBtns = quizContainer.querySelectorAll('.quiz-opt-btn');
    optBtns.forEach(btn => {
      btn.disabled = true;
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      if (idx === q.correctIndex) {
        btn.classList.add('bg-emerald-100', 'border-emerald-500', 'text-emerald-900', 'dark:bg-emerald-950', 'dark:text-emerald-100');
      } else if (idx === selectedIdx && !isCorrect) {
        btn.classList.add('bg-rose-100', 'border-rose-500', 'text-rose-900', 'dark:bg-rose-950', 'dark:text-rose-100');
      }
    });

    const feedback = document.getElementById('quiz-feedback');
    feedback.classList.remove('hidden');

    if (isCorrect) {
      feedback.className = "mt-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100 text-xs animate-fade-in block";
      feedback.innerHTML = `
        <div class="flex items-start justify-between">
          <div>
            <div class="font-bold text-sm">✅ Chính xác!</div>
            <p class="mt-1 leading-relaxed">${q.explanation}</p>
          </div>
          <button id="btn-next-quiz" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs shadow transition-all ml-3 flex-shrink-0">
            Câu tiếp ➔
          </button>
        </div>
      `;
    } else {
      feedback.className = "mt-4 p-4 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-100 text-xs animate-fade-in block";
      feedback.innerHTML = `
        <div class="flex items-start justify-between">
          <div>
            <div class="font-bold text-sm">❌ Giải thích chi tiết:</div>
            <p class="mt-1 leading-relaxed">${q.explanation}</p>
          </div>
          <button id="btn-next-quiz" class="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-bold text-xs shadow transition-all ml-3 flex-shrink-0">
            Đã hiểu ➔
          </button>
        </div>
      `;
    }

    document.getElementById('btn-next-quiz')?.addEventListener('click', () => {
      if (this.quizState.currentIndex < currentLesson.quizzes.length - 1) {
        this.quizState.currentIndex++;
        this.renderQuiz(currentLesson);
      } else {
        this.quizState.isFinished = true;
        this.renderQuiz(currentLesson);
      }
    });
  }

  renderQuizSummary(quizContainer, quizzes) {
    const correctCount = this.quizState.userAnswers.filter(a => a.isCorrect).length;
    const total = quizzes.length;
    const percent = Math.round((correctCount / total) * 100);

    quizContainer.innerHTML = `
      <div class="text-center py-6 animate-fade-in">
        <div class="text-4xl mb-3">🎯</div>
        <h4 class="text-xl font-black text-slate-800 dark:text-white mb-1">
          Hoàn thành bài tập củng cố!
        </h4>
        <p class="text-sm text-slate-500 mb-6">
          Điểm số: <strong class="text-indigo-600 text-base">${percent}%</strong> (${correctCount}/${total} câu đúng)
        </p>

        <div class="flex justify-center gap-3">
          <button id="btn-retry-quiz" class="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-bold transition-all">
            Làm lại từ đầu
          </button>
        </div>
      </div>
    `;

    document.getElementById('btn-retry-quiz')?.addEventListener('click', () => {
      this.quizState = { currentIndex: 0, userAnswers: [], isFinished: false };
      const course = COURSES_DATA.find(c => c.id === this.selectedCourseId);
      const lesson = course.modules[0].lessons.find(l => l.id === this.selectedLessonId) || course.modules[0].lessons[0];
      this.renderQuiz(lesson);
    });
  }
}
