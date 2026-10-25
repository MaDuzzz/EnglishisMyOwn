// Trình điều khiển Khoá học Tiếng Anh Giao Tiếp Qua Phim & TV Shows (Cinema Shadowing Lab)
// Phương pháp Đa Giác Quan: Nhắm mắt nghe ngấm ➔ Xem phụ đề ➔ Mổ xẻ ngữ cảnh ➔ Shadowing nhại cảm xúc ➔ Quizz đục lỗ

import { COURSES_DATA } from './data/courses-data.js?v=7.1';
import { appState } from './state.js?v=7.1';
import { celebrationEngine } from './celebration.js?v=7.1';

// Helper bóc tách Google Drive File ID từ bất kỳ dạng link nào
export function extractDriveFileId(urlOrId) {
  if (!urlOrId) return "";
  const str = String(urlOrId).trim();
  // Khớp link dạng https://drive.google.com/file/d/FILE_ID/...
  const fileDMatch = str.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileDMatch) return fileDMatch[1];
  // Khớp link dạng id=FILE_ID
  const idMatch = str.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idMatch) return idMatch[1];
  // Nếu là ID thuần không chứa dấu gạch chéo
  if (/^[a-zA-Z0-9_-]{20,}$/.test(str)) return str;
  return str;
}

export class CoursesEngine {
  constructor(containerElement) {
    this.container = containerElement;
    this.currentView = "catalog"; // "catalog" | "lesson"
    this.selectedCourseId = COURSES_DATA[0].id;
    this.selectedLessonId = COURSES_DATA[0].modules[0].lessons[0].id;
    
    // Trạng thái Stepper 5 bước trong phòng học phim
    this.currentStep = 1; // 1: Nhắm mắt nghe, 2: Xem & Bắt từ, 3: Mổ xẻ câu, 4: Luyện nhại giọng, 5: Quizz đục lỗ
    this.isBlindCurtainOpen = false; // Ở Bước 1: Màn che hạ xuống mặc định
    this.blindListenCount = 0; // Đếm số lần nghe nhắm mắt
    this.subtitleMode = "bilingual"; // "bilingual" | "en" | "vi"
    
    // Shadowing Studio state
    this.shadowingLineIndex = 0;
    this.shadowedLineIds = new Set();
    this.isRecording = false;
    this.mediaRecorder = null;
    this.audioChunks = [];
    this.recordedAudioUrl = null;

    // Quiz state
    this.quizState = {
      currentIndex: 0,
      userAnswers: [],
      isFinished: false
    };
  }

  // Khởi động render
  render() {
    if (this.currentView === "catalog") {
      this.renderCatalog();
    } else {
      this.renderLesson();
    }
  }

  // ==========================================
  // VIEW 1: CATALOG (DANH MỤC KHÓA HỌC PHIM)
  // ==========================================
  renderCatalog() {
    this.currentView = "catalog";
    
    // Tính toán tiến độ học viên
    const totalLessons = COURSES_DATA.flatMap(c => c.modules.flatMap(m => m.lessons)).length;
    const completedCount = (appState.state.completedCourseLessons || []).length;
    const totalProgressPercent = totalLessons ? Math.round((completedCount / totalLessons) * 100) : 0;

    this.container.innerHTML = `
      <div class="space-y-6 sm:space-y-8 animate-fade-in max-w-5xl mx-auto w-full pb-10">
        <!-- 1. CINEMA HERO BANNER -->
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6 sm:p-8 text-white shadow-2xl border border-indigo-500/20">
          <div class="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-rose-500/15 blur-3xl pointer-events-none"></div>
          <div class="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-indigo-500/15 blur-3xl pointer-events-none"></div>

          <div class="relative z-10 space-y-3">
            <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <span>🎬 Cinema Shadowing Lab</span>
              <span>•</span>
              <span>Giao Tiếp Thực Chiến</span>
            </div>

            <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              Học Tiếng Anh Giao Tiếp Qua Phim Kinh Điển
            </h1>

            <p class="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Trải nghiệm phương pháp đa giác quan qua các trích đoạn ngắn (< 3 phút) từ <strong>Friends</strong>, <strong>How I Met Your Mother</strong> và <strong>MasterChef</strong>. Luyện nghe ngấm, bắt trọn ngữ điệu và nhại giọng cảm xúc theo từng nhân vật.
            </p>

            <!-- 5-Step Process Bar Preview -->
            <div class="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-bold text-slate-300">
              <span class="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10">1. 🙈 Nhắm mắt nghe</span>
              <span>➔</span>
              <span class="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10">2. 🎬 Xem phụ đề</span>
              <span>➔</span>
              <span class="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10">3. 🔍 Mổ xẻ câu</span>
              <span>➔</span>
              <span class="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10">4. 🎙️ Shadowing</span>
              <span>➔</span>
              <span class="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10">5. 📝 Quizz đục lỗ</span>
            </div>

            <!-- Stats Bar -->
            <div class="pt-4 mt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs">
              <div class="flex items-center space-x-2">
                <span class="text-amber-400 font-bold">🏆 Tiến độ:</span>
                <span class="font-mono font-bold text-white">${completedCount}/${totalLessons} trích đoạn</span>
                <span class="px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[10px] font-mono">(${totalProgressPercent}%)</span>
              </div>
              <div class="w-32 bg-slate-800 rounded-full h-2 overflow-hidden">
                <div class="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full transition-all duration-500" style="width: ${totalProgressPercent}%"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. DANH SÁCH CÁC KHOÁ HỌC PHIM (COURSE CARDS) -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h2 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center space-x-2">
              <span>🍿</span>
              <span>Chọn Series Phim Yêu Thích</span>
            </h2>
            <span class="text-xs text-slate-500 dark:text-slate-400 font-semibold">${COURSES_DATA.length} Series có sẵn</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            ${COURSES_DATA.map(course => {
              const allCourseLessons = course.modules.flatMap(m => m.lessons);
              const courseCompleted = allCourseLessons.filter(l => appState.isCourseLessonComplete(l.id)).length;
              const coursePercent = allCourseLessons.length ? Math.round((courseCompleted / allCourseLessons.length) * 100) : 0;

              return `
                <div class="group bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
                  <div class="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-gradient-to-tr ${course.color} opacity-10 group-hover:opacity-20 blur-xl transition-opacity"></div>
                  
                  <div>
                    <div class="flex items-start justify-between mb-4">
                      <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr ${course.color} text-white flex items-center justify-center text-2xl shadow-lg shadow-orange-500/10">
                        ${course.icon}
                      </div>
                      <span class="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80">
                        ${course.badge}
                      </span>
                    </div>

                    <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                      ${course.title}
                    </h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                      ${course.description}
                    </p>

                    <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2 text-[11px] text-slate-500 dark:text-slate-400">
                      <div class="flex items-center justify-between">
                        <span>🎯 Cấp độ: <strong class="text-slate-700 dark:text-slate-200">${course.level}</strong></span>
                        <span>🎬 ${allCourseLessons.length} trích đoạn</span>
                      </div>
                      <div class="flex items-center justify-between">
                        <span>Đã học: <strong class="text-amber-600 dark:text-amber-400 font-mono">${courseCompleted}/${allCourseLessons.length}</strong></span>
                        <span class="font-mono font-bold">${coursePercent}%</span>
                      </div>
                      <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div class="bg-gradient-to-r ${course.color} h-1.5 rounded-full transition-all duration-300" style="width: ${coursePercent}%"></div>
                      </div>
                    </div>
                  </div>

                  <div class="mt-5 pt-3">
                    <button 
                      data-course-id="${course.id}"
                      class="btn-select-course w-full py-3 bg-gradient-to-r ${course.color} hover:opacity-95 text-white font-bold rounded-2xl text-xs sm:text-sm shadow-md active:scale-98 transition-all flex items-center justify-center space-x-1.5">
                      <span>Vào Học Series Này</span>
                      <span>➔</span>
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;

    // Gắn sự kiện chọn khóa học
    this.container.querySelectorAll('.btn-select-course').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedCourseId = btn.getAttribute('data-course-id');
        const course = COURSES_DATA.find(c => c.id === this.selectedCourseId) || COURSES_DATA[0];
        this.selectedLessonId = course.modules[0].lessons[0].id;
        this.currentStep = 1;
        this.isBlindCurtainOpen = false;
        this.blindListenCount = 0;
        this.quizState = { currentIndex: 0, userAnswers: [], isFinished: false };
        this.renderLesson();
      });
    });
  }

  // ==========================================
  // VIEW 2: CINEMA SHADOWING ROOM (PHÒNG HỌC PHIM)
  // ==========================================
  renderLesson() {
    this.currentView = "lesson";

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

    // Link Google Drive (ưu tiên link do người dùng tự nhập nếu có)
    const effectiveDriveLink = appState.getLessonDriveLink(currentLesson);
    const driveFileId = extractDriveFileId(effectiveDriveLink);
    const isCompleted = appState.isCourseLessonComplete(currentLesson.id);

    this.container.innerHTML = `
      <div class="space-y-5 animate-fade-in max-w-5xl mx-auto w-full pb-16">
        <!-- 1. TOP HEADER & BREADCRUMB -->
        <div class="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div class="flex items-center space-x-2 min-w-0">
            <button id="btn-back-to-catalog" class="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center space-x-1 transition-all active:scale-95">
              <span>‹</span>
              <span>Danh mục phim</span>
            </button>
            <span class="text-slate-300 dark:text-slate-700">|</span>
            <div class="min-w-0">
              <div class="flex items-center space-x-2">
                <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 truncate">${course.shortTitle}</span>
                <span class="text-[10px] text-slate-400">• ${currentLesson.episode}</span>
              </div>
              <h2 class="text-sm sm:text-base font-black text-slate-900 dark:text-white truncate">
                ${currentLesson.title}
              </h2>
            </div>
          </div>

          <div class="flex items-center space-x-2 shrink-0">
            ${isCompleted ? `
              <span class="px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 flex items-center space-x-1">
                <span>✓</span>
                <span>Đã Hoàn Thành (+25 XP)</span>
              </span>
            ` : `
              <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                ⏳ Đang Học
              </span>
            `}

            <!-- Nút đổi link Google Drive cá nhân -->
            <button id="btn-toggle-custom-drive" class="px-2.5 py-1.5 rounded-xl text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center space-x-1" title="Nhập link Google Drive cá nhân của bạn">
              <span>🔗</span>
              <span class="hidden sm:inline">Đổi link Drive</span>
            </button>
          </div>
        </div>

        <!-- Custom Drive Link Modal / Input Box (Hidden by default) -->
        <div id="custom-drive-input-box" class="hidden bg-indigo-50 dark:bg-indigo-950/50 p-4 rounded-2xl border border-indigo-200 dark:border-indigo-800 text-xs animate-fade-in space-y-2">
          <div class="flex items-center justify-between">
            <strong class="font-bold text-indigo-950 dark:text-indigo-200">🔗 Nhúng Video Từ Google Drive Cá Nhân</strong>
            <span class="text-[10px] text-indigo-600 dark:text-indigo-400">Yêu cầu: Quyền xem "Bất kỳ ai có đường liên kết"</span>
          </div>
          <div class="flex items-center gap-2">
            <input 
              id="input-custom-drive-url" 
              type="text" 
              placeholder="Dán link Google Drive (https://drive.google.com/file/d/...)" 
              value="${effectiveDriveLink !== currentLesson.videoDriveUrl ? effectiveDriveLink : ''}"
              class="flex-1 px-3 py-2 rounded-xl border border-indigo-200 dark:border-indigo-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-indigo-500" />
            <button id="btn-save-custom-drive" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold rounded-xl text-xs shadow-md transition-all shrink-0">
              Lưu & Phát
            </button>
            <button id="btn-reset-custom-drive" class="px-3 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold rounded-xl text-xs transition-all shrink-0">
              Mặc định
            </button>
          </div>
        </div>

        <!-- 2. GUIDED 5-STEP STEPPER TABS -->
        <div class="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none no-scrollbar w-full" id="cinema-stepper-tabs">
          <button data-step="1" class="cinema-step-btn shrink-0 px-3.5 py-2 rounded-2xl text-xs font-bold transition-all flex items-center space-x-1.5 ${this.currentStep === 1 ? 'bg-indigo-600 text-white shadow-md' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'}">
            <span>🙈</span>
            <span>1. Nhắm Mắt Nghe</span>
          </button>
          <button data-step="2" class="cinema-step-btn shrink-0 px-3.5 py-2 rounded-2xl text-xs font-bold transition-all flex items-center space-x-1.5 ${this.currentStep === 2 ? 'bg-indigo-600 text-white shadow-md' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'}">
            <span>🎬</span>
            <span>2. Xem & Bắt Từ</span>
          </button>
          <button data-step="3" class="cinema-step-btn shrink-0 px-3.5 py-2 rounded-2xl text-xs font-bold transition-all flex items-center space-x-1.5 ${this.currentStep === 3 ? 'bg-indigo-600 text-white shadow-md' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'}">
            <span>🔍</span>
            <span>3. Mổ Xẻ Câu</span>
          </button>
          <button data-step="4" class="cinema-step-btn shrink-0 px-3.5 py-2 rounded-2xl text-xs font-bold transition-all flex items-center space-x-1.5 ${this.currentStep === 4 ? 'bg-indigo-600 text-white shadow-md' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'}">
            <span>🎙️</span>
            <span>4. Luyện Nhại Giọng</span>
          </button>
          <button data-step="5" class="cinema-step-btn shrink-0 px-3.5 py-2 rounded-2xl text-xs font-bold transition-all flex items-center space-x-1.5 ${this.currentStep === 5 ? 'bg-indigo-600 text-white shadow-md' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'}">
            <span>📝</span>
            <span>5. Quizz Đục Lỗ</span>
          </button>
        </div>

        <!-- 3. MAIN CINEMA PLAYER & STEP CONTENT -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          <!-- Cột Trái: VIDEO PLAYER & MÀN CHE NHẮM MẮT (2 Cột) -->
          <div class="lg:col-span-2 space-y-4">
            <div class="relative bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl aspect-video w-full flex items-center justify-center group">
              <!-- Video Frame Google Drive -->
              ${driveFileId ? `
                <iframe 
                  id="drive-video-frame"
                  src="https://drive.google.com/file/d/${driveFileId}/preview" 
                  class="w-full h-full border-0 absolute inset-0" 
                  allow="autoplay; encrypted-media; fullscreen" 
                  allowfullscreen>
                </iframe>
              ` : `
                <div class="text-center p-6 text-slate-400 text-xs">
                  Chưa có link video Google Drive. Bấm "Đổi link Drive" ở trên để gắn link của bạn.
                </div>
              `}

              <!-- 🙈 BLACKOUT BLIND LISTENING CURTAIN OVERLAY -->
              <div id="blind-listening-curtain" class="${(this.currentStep === 1 && !this.isBlindCurtainOpen) ? 'flex' : 'hidden'} absolute inset-0 bg-slate-950/98 backdrop-blur-md z-20 flex-col items-center justify-center p-6 text-center text-white space-y-4 transition-all duration-300">
                <div class="w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-500 to-rose-500 text-white flex items-center justify-center text-3xl shadow-xl shadow-indigo-500/20 animate-pulse">
                  🎧
                </div>
                
                <div class="space-y-1 max-w-md">
                  <h4 class="text-base sm:text-lg font-black text-amber-300">
                    Đang Trong Chế Độ Nhắm Mắt Nghe Ngấm
                  </h4>
                  <p class="text-xs text-slate-300 leading-relaxed">
                    Hãy nhắm mắt lại! Bấm Play trên video, lắng nghe trọn vẹn ngữ điệu, chỗ ngắt nghỉ, tiếng thở dài và cảm xúc bùng nổ của nhân vật.
                  </p>
                </div>

                <!-- Fake Soundwave Visualizer -->
                <div class="flex items-center space-x-1.5 h-8 py-1">
                  <span class="w-1 bg-indigo-400 rounded-full animate-pulse h-4"></span>
                  <span class="w-1 bg-amber-400 rounded-full animate-pulse h-7" style="animation-delay: 150ms"></span>
                  <span class="w-1 bg-rose-400 rounded-full animate-pulse h-5" style="animation-delay: 300ms"></span>
                  <span class="w-1 bg-emerald-400 rounded-full animate-pulse h-8" style="animation-delay: 100ms"></span>
                  <span class="w-1 bg-indigo-400 rounded-full animate-pulse h-6" style="animation-delay: 200ms"></span>
                  <span class="w-1 bg-amber-400 rounded-full animate-pulse h-3" style="animation-delay: 250ms"></span>
                </div>

                <div class="flex flex-wrap items-center justify-center gap-2.5 pt-2">
                  <button id="btn-count-listen" class="px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/40 text-xs font-bold transition-all active:scale-95 flex items-center space-x-1">
                    <span>👂 Đã nghe:</span>
                    <span id="label-listen-count" class="font-mono text-white">${this.blindListenCount}/2 lượt</span>
                  </button>

                  <button id="btn-toggle-eye" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all active:scale-95 flex items-center space-x-1">
                    <span>👁️</span>
                    <span>Tạm mở mắt xem</span>
                  </button>

                  <button id="btn-proceed-step-2" class="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold shadow-md transition-all active:scale-95 flex items-center space-x-1">
                    <span>Sang Bước 2 (Xem Phụ Đề)</span>
                    <span>➔</span>
                  </button>
                </div>
              </div>

              <!-- Nút kéo màn che lại nếu đang ở Bước 1 và đã mở mắt -->
              ${this.currentStep === 1 && this.isBlindCurtainOpen ? `
                <button id="btn-reclose-eye" class="absolute top-3 right-3 z-30 px-3 py-1.5 bg-black/80 text-amber-300 rounded-xl text-xs font-bold backdrop-blur-md border border-amber-500/30 hover:bg-black transition-all flex items-center space-x-1">
                  <span>🙈</span>
                  <span>Hạ Màn Che Lại</span>
                </button>
              ` : ''}
            </div>

            <!-- Bối cảnh trích đoạn phim (Context Card) -->
            <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
              <div class="flex items-center space-x-2 text-xs font-bold text-amber-600 dark:text-amber-400">
                <span>💡</span>
                <span>Bối Cảnh Trích Đoạn (Context)</span>
              </div>
              <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                ${currentLesson.context}
              </p>
            </div>
          </div>

          <!-- Cột Phải: NỘI DUNG TƯƠNG TÁC TỪNG BƯỚC (1 Cột) -->
          <div class="space-y-4">
            <div class="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              ${this.renderStepContent(currentLesson)}
            </div>
          </div>
        </div>

        <!-- 4. DANH SÁCH BÀI HỌC CÙNG SERIES (DRAWER/LIST BÊN DƯỚI) -->
        <div class="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <h3 class="text-sm font-black text-slate-900 dark:text-white flex items-center space-x-2">
            <span>📑</span>
            <span>Các Trích Đoạn Trong Series "${course.shortTitle}"</span>
          </h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${course.modules[0].lessons.map((les, idx) => {
              const isLesDone = appState.isCourseLessonComplete(les.id);
              const isCurrent = les.id === this.selectedLessonId;

              return `
                <button 
                  data-lesson-id="${les.id}"
                  class="btn-switch-lesson p-3.5 rounded-2xl text-left transition-all border flex items-center justify-between ${isCurrent ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-300 dark:border-indigo-700 text-indigo-950 dark:text-indigo-200 font-bold' : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100'}">
                  <div class="flex items-center space-x-3 min-w-0 pr-2">
                    <span class="w-6 h-6 rounded-lg ${isCurrent ? 'bg-indigo-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'} text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      ${idx + 1}
                    </span>
                    <div class="min-w-0">
                      <div class="text-xs truncate">${les.title}</div>
                      <div class="text-[10px] text-slate-400">${les.duration} • ${les.episode}</div>
                    </div>
                  </div>
                  ${isLesDone ? '<span class="text-emerald-500 font-bold text-xs shrink-0">✓ Xong</span>' : '<span class="text-xs text-slate-400 shrink-0">Chưa học</span>'}
                </button>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;

    this.bindLessonEvents(currentLesson);
  }

  // ==========================================
  // RENDER NỘI DUNG TƯƠNG ỨNG CHO 5 BƯỚC
  // ==========================================
  renderStepContent(currentLesson) {
    switch (this.currentStep) {
      case 1:
        return this.renderStep1Blind(currentLesson);
      case 2:
        return this.renderStep2Subtitles(currentLesson);
      case 3:
        return this.renderStep3DeepBreakdown(currentLesson);
      case 4:
        return this.renderStep4Shadowing(currentLesson);
      case 5:
        return this.renderStep5Quiz(currentLesson);
      default:
        return this.renderStep1Blind(currentLesson);
    }
  }

  // BƯỚC 1: NHẮM MẮT NGHE NGẤM
  renderStep1Blind(currentLesson) {
    return `
      <div class="space-y-4 animate-fade-in">
        <div class="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs">
          <span>🎧 BƯỚC 1: LUYỆN TAI THUẦN TÚY</span>
        </div>

        <h3 class="text-base font-black text-slate-900 dark:text-white">
          Nhắm Mắt Nghe Full 1 - 2 Lần
        </h3>

        <div class="space-y-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80">
            <strong class="text-slate-900 dark:text-white block mb-1">🎯 Mục tiêu bước này:</strong>
            Không nhìn hình, không đọc chữ. Hãy để bộ não tập trung hoàn toàn vào tần số âm thanh, ngữ điệu vui buồn, cao trào và tiếng cười của nhân vật.
          </div>

          <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-800/60 text-amber-900 dark:text-amber-200">
            <strong class="block mb-1">💡 Câu hỏi thử thách gợi ý:</strong>
            <ul class="list-disc list-inside space-y-1">
              <li>Bạn nghe thấy mấy người đang nói chuyện với nhau?</li>
              <li>Tâm trạng nhân vật lúc này là gì: tức giận, đùa cợt hay cuống cuồng?</li>
              <li>Từ hoặc câu nào được lặp đi lặp lại to nhất trong clip?</li>
            </ul>
          </div>
        </div>

        <div class="pt-2">
          <button id="btn-next-to-step2" class="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-2xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-1.5">
            <span>Tôi Đã Nghe Xong ➔ Xem Phụ Đề</span>
            <span>➔</span>
          </button>
        </div>
      </div>
    `;
  }

  // BƯỚC 2: XEM & BẮT TỪ MỚI (SUBTITLE WATCH)
  renderStep2Subtitles(currentLesson) {
    return `
      <div class="space-y-4 animate-fade-in">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-1.5 text-indigo-600 dark:text-indigo-400 font-bold text-xs">
            <span>🎬 BƯỚC 2: XEM CÙNG PHỤ ĐỀ</span>
          </div>

          <!-- Toggle Subtitle Mode -->
          <div class="flex items-center p-0.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-[10px] font-bold">
            <button data-sub="bilingual" class="sub-toggle-btn px-2 py-1 rounded-lg ${this.subtitleMode === 'bilingual' ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-xs' : 'text-slate-500'}">Song ngữ</button>
            <button data-sub="en" class="sub-toggle-btn px-2 py-1 rounded-lg ${this.subtitleMode === 'en' ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-xs' : 'text-slate-500'}">EN</button>
            <button data-sub="vi" class="sub-toggle-btn px-2 py-1 rounded-lg ${this.subtitleMode === 'vi' ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-xs' : 'text-slate-500'}">VI</button>
          </div>
        </div>

        <h3 class="text-base font-black text-slate-900 dark:text-white">
          Từ Mới & Cụm Hay Trong Clip
        </h3>

        <!-- Danh sách từ vựng hay được trích xuất -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${currentLesson.keyVocabulary.map(v => `
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs">
              <div class="flex items-center justify-between">
                <strong class="text-indigo-600 dark:text-indigo-400 font-bold text-sm">${v.word}</strong>
                <span class="text-[10px] font-mono text-slate-400">${v.ipa}</span>
              </div>
              <div class="text-slate-700 dark:text-slate-300 mt-0.5">${v.meaningVi}</div>
              <div class="text-[10px] text-amber-600 dark:text-amber-400 mt-1 italic font-medium">"${v.exampleInClip}"</div>
            </div>
          `).join('')}
        </div>

        <!-- Hộp phụ đề cuộn xem toàn bộ câu thoại -->
        <div class="space-y-2 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div class="text-xs font-bold text-slate-700 dark:text-slate-300">Lời thoại toàn bài (${currentLesson.dialogue.length} câu):</div>
          <div class="max-h-56 overflow-y-auto pr-1 space-y-2 scrollbar-thin text-xs">
            ${currentLesson.dialogue.map(d => `
              <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <span class="font-bold text-indigo-600 dark:text-indigo-400">${d.speaker}:</span>
                ${(this.subtitleMode === 'bilingual' || this.subtitleMode === 'en') ? `<div class="text-slate-900 dark:text-white font-medium mt-0.5">${d.en}</div>` : ''}
                ${(this.subtitleMode === 'bilingual' || this.subtitleMode === 'vi') ? `<div class="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">${d.vi}</div>` : ''}
              </div>
            `).join('')}
          </div>
        </div>

        <div class="pt-2">
          <button id="btn-next-to-step3" class="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-2xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-1.5">
            <span>Tiếp Tục: Mổ Xẻ Từng Câu & Ngữ Cảnh</span>
            <span>➔</span>
          </button>
        </div>
      </div>
    `;
  }

  // BƯỚC 3: MỔ XẺ TỪNG CÂU & NGỮ CẢNH (DEEP CONTEXT BREAKDOWN)
  renderStep3DeepBreakdown(currentLesson) {
    return `
      <div class="space-y-4 animate-fade-in">
        <div class="flex items-center space-x-1.5 text-indigo-600 dark:text-indigo-400 font-bold text-xs">
          <span>🔍 BƯỚC 3: HIỂU SÂU BẢN CHẤT</span>
        </div>

        <h3 class="text-base font-black text-slate-900 dark:text-white">
          Mổ Xẻ Ngữ Cảnh Từng Câu Thoại
        </h3>
        <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          Tìm hiểu tại sao nhân vật lại nói như vậy, sắc thái cảm xúc và mẹo nối âm / nuốt âm của người bản xứ.
        </p>

        <!-- Danh sách câu thoại chi tiết -->
        <div class="space-y-3 max-h-96 overflow-y-auto pr-1 scrollbar-thin">
          ${currentLesson.dialogue.map((d, idx) => `
            <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
                  ${d.speaker}
                </span>
                <span class="text-[10px] font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded-md border border-rose-200 dark:border-rose-900">
                  🎭 ${d.tone}
                </span>
              </div>

              <div>
                <div class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug">
                  "${d.en}"
                </div>
                <div class="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  ${d.vi}
                </div>
              </div>

              ${d.pronunciationTip ? `
                <div class="text-[11px] p-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 border border-amber-200/60 dark:border-amber-800/60">
                  🗣️ <strong>Mẹo phát âm:</strong> ${d.pronunciationTip}
                </div>
              ` : ''}

              ${d.contextNote ? `
                <div class="text-[11px] text-slate-500 dark:text-slate-400 italic">
                  💡 ${d.contextNote}
                </div>
              ` : ''}

              <div class="pt-1 flex items-center justify-end">
                <button 
                  data-speak-text="${encodeURIComponent(d.en)}"
                  class="btn-speak-line px-2.5 py-1 rounded-lg bg-slate-200/80 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center space-x-1 transition-all active:scale-95">
                  <span>🔊 Nghe đọc chậm</span>
                </button>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="pt-2">
          <button id="btn-next-to-step4" class="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-2xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-1.5">
            <span>Sẵn Sàng Sang Bước 4: Luyện Nhại Giọng</span>
            <span>➔</span>
          </button>
        </div>
      </div>
    `;
  }

  // BƯỚC 4: LUYỆN NHẠI GIỌNG CẢM XÚC (SHADOWING STUDIO)
  renderStep4Shadowing(currentLesson) {
    const lines = currentLesson.dialogue;
    const currentLine = lines[this.shadowingLineIndex] || lines[0];
    const isLineDone = this.shadowedLineIds.has(currentLine.id);

    return `
      <div class="space-y-4 animate-fade-in">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-1.5 text-indigo-600 dark:text-indigo-400 font-bold text-xs">
            <span>🎙️ BƯỚC 4: SHADOWING NHẠI CẢM XÚC</span>
          </div>
          <span class="text-xs font-bold text-amber-600 dark:text-amber-400 font-mono">
            Câu ${this.shadowingLineIndex + 1}/${lines.length}
          </span>
        </div>

        <h3 class="text-base font-black text-slate-900 dark:text-white">
          Nhại Lại Từng Câu Cùng Diễn Viên
        </h3>

        <!-- Thẻ câu thoại đang luyện Shadowing -->
        <div class="p-4 rounded-2xl bg-gradient-to-br from-indigo-900/10 via-slate-50 to-indigo-950/10 dark:from-indigo-950/40 dark:via-slate-800 dark:to-indigo-950/40 border border-indigo-200 dark:border-indigo-800/80 space-y-3">
          <div class="flex items-center justify-between text-xs">
            <span class="font-extrabold text-indigo-600 dark:text-indigo-400">${currentLine.speaker}</span>
            <span class="px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 font-semibold text-[10px]">
              🎭 ${currentLine.tone}
            </span>
          </div>

          <div class="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-snug">
            "${currentLine.en}"
          </div>
          <div class="text-xs text-slate-600 dark:text-slate-300">
            ${currentLine.vi}
          </div>

          ${currentLine.pronunciationTip ? `
            <div class="text-xs p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 border border-amber-200/80 dark:border-amber-800">
              ⚡ <strong>Hướng dẫn ngắt nghỉ:</strong> ${currentLine.pronunciationTip}
            </div>
          ` : ''}

          <!-- Bộ điều khiển thu âm và nghe lại -->
          <div class="pt-2 flex flex-wrap items-center gap-2">
            <button 
              data-speak-text="${encodeURIComponent(currentLine.en)}"
              class="btn-speak-line px-3.5 py-2 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold transition-all active:scale-95 flex items-center space-x-1">
              <span>🔊</span>
              <span>Nghe đọc mẫu</span>
            </button>

            <button 
              id="btn-record-shadow"
              class="px-4 py-2 rounded-xl ${this.isRecording ? 'bg-rose-600 text-white animate-pulse' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'} text-xs font-bold transition-all active:scale-95 flex items-center space-x-1.5">
              <span>${this.isRecording ? '⏹️' : '🎙️'}</span>
              <span>${this.isRecording ? 'Dừng thu âm' : 'Bấm thu âm nhại'}</span>
            </button>

            ${this.recordedAudioUrl ? `
              <button id="btn-playback-shadow" class="px-3.5 py-2 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold transition-all active:scale-95 flex items-center space-x-1">
                <span>▶️</span>
                <span>Nghe lại giọng mình</span>
              </button>
            ` : ''}

            <button 
              id="btn-mark-line-done"
              class="ml-auto px-3 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 ${isLineDone ? 'bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-600'}">
              <span>${isLineDone ? '✓ Đã luyện câu này' : 'Đánh dấu đã nhại'}</span>
            </button>
          </div>
        </div>

        <!-- Điều hướng qua lại giữa các câu -->
        <div class="flex items-center justify-between pt-1">
          <button 
            id="btn-prev-shadow-line" 
            ${this.shadowingLineIndex === 0 ? 'disabled class="opacity-40 cursor-not-allowed text-xs font-bold text-slate-400"' : 'class="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"'}>
            ‹ Câu trước
          </button>

          <span class="text-[11px] text-slate-400 font-mono">
            Đã luyện: ${this.shadowedLineIds.size}/${lines.length} câu
          </span>

          <button 
            id="btn-next-shadow-line" 
            class="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
            ${this.shadowingLineIndex < lines.length - 1 ? 'Câu tiếp theo ›' : 'Làm Quiz ngay ➔'}
          </button>
        </div>

        <!-- Các câu thoại bất hủ (Golden Phrases) -->
        ${currentLesson.goldenPhrases ? `
          <div class="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-xs space-y-1.5 mt-2">
            <div class="font-extrabold text-amber-800 dark:text-amber-300">🌟 Câu thoại bất hủ cần thuộc lòng:</div>
            ${currentLesson.goldenPhrases.map(gp => `
              <div>
                <strong class="text-slate-900 dark:text-white">"${gp.phrase}"</strong>: ${gp.meaning}
                <div class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">📌 ${gp.usageTip}</div>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <div class="pt-2">
          <button id="btn-next-to-step5" class="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-2xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-1.5">
            <span>Tiến Vào Bước 5: Quizz Đục Lỗ (+25 XP)</span>
            <span>➔</span>
          </button>
        </div>
      </div>
    `;
  }

  // BƯỚC 5: QUIZZ ĐỤC LỖ & TỪ MỚI
  renderStep5Quiz(currentLesson) {
    const quizzes = currentLesson.quizzes || [];
    if (quizzes.length === 0) {
      return `<p class="text-xs text-slate-400">Đang cập nhật bài tập cho trích đoạn này...</p>`;
    }

    if (this.quizState.isFinished) {
      return this.renderQuizFinished(currentLesson);
    }

    const q = quizzes[this.quizState.currentIndex];
    const total = quizzes.length;
    const progress = Math.round(((this.quizState.currentIndex) / total) * 100);

    return `
      <div class="space-y-4 animate-fade-in" id="quiz-question-box">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-1.5 text-indigo-600 dark:text-indigo-400 font-bold text-xs">
            <span>📝 BƯỚC 5: THỬ THÁCH ĐỤC LỖ (${q.type === 'cloze' ? 'Đục Lỗ Câu' : 'Từ Vựng'})</span>
          </div>
          <span class="text-xs font-bold text-amber-600 dark:text-amber-400 font-mono">
            Câu ${this.quizState.currentIndex + 1} / ${total}
          </span>
        </div>

        <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
          <div class="bg-indigo-600 h-1.5 rounded-full transition-all" style="width: ${progress}%"></div>
        </div>

        <h4 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed">
          ${q.question}
        </h4>

        ${q.sentence ? `
          <div class="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800 text-amber-950 dark:text-amber-200 text-sm font-mono font-bold text-center">
            ${q.sentence}
          </div>
        ` : ''}

        <div class="space-y-2 pt-1" id="course-quiz-options">
          ${q.options.map((opt, idx) => `
            <button 
              data-index="${idx}"
              class="quiz-cinema-opt-btn w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 hover:bg-indigo-50/40 dark:hover:bg-indigo-950/30 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 transition-all flex items-center space-x-3 active:scale-98">
              <span class="w-6 h-6 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold flex items-center justify-center shrink-0">
                ${String.fromCharCode(65 + idx)}
              </span>
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>

        <div id="course-quiz-feedback" class="hidden"></div>
      </div>
    `;
  }

  renderQuizFinished(currentLesson) {
    const quizzes = currentLesson.quizzes;
    const correctCount = this.quizState.userAnswers.filter(a => a.isCorrect).length;
    const total = quizzes.length;
    const percent = Math.round((correctCount / total) * 100);

    // Kích hoạt pháo hoa và cộng điểm hoàn thành
    try {
      celebrationEngine.trigger();
    } catch (e) {}

    // Đánh dấu hoàn thành bài học
    appState.markCourseLessonComplete(currentLesson.id);

    return `
      <div class="text-center py-6 animate-fade-in space-y-4">
        <div class="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center text-3xl mx-auto shadow-xl shadow-orange-500/20">
          🏆
        </div>

        <div>
          <h4 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
            Chinh Phục Thành Công Trích Đoạn!
          </h4>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Bạn đã xuất sắc vượt qua cả 5 giai đoạn đa giác quan và cắm cờ kỷ luật!
          </p>
        </div>

        <div class="inline-flex items-center space-x-2 px-4 py-2 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
          <span>🎯 Điểm số:</span>
          <span class="font-mono text-base">${percent}%</span>
          <span>(${correctCount}/${total} câu đúng)</span>
          <span class="text-amber-500 ml-2">🎉 +25 XP</span>
        </div>

        <div class="flex flex-col sm:flex-row justify-center gap-2 pt-2">
          <button id="btn-cinema-retry-quiz" class="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all">
            Làm lại Quiz
          </button>
          <button id="btn-finish-to-catalog" class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-md active:scale-95">
            Về Danh Mục Khóa Học
          </button>
        </div>
      </div>
    `;
  }

  // ==========================================
  // XỬ LÝ SỰ KIỆN TRONG PHÒNG HỌC PHIM
  // ==========================================
  bindLessonEvents(currentLesson) {
    // 1. Nút quay lại Catalog
    document.getElementById('btn-back-to-catalog')?.addEventListener('click', () => {
      this.renderCatalog();
    });

    // 2. Chuyển đổi giữa 5 Stepper Tabs
    this.container.querySelectorAll('.cinema-step-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const step = parseInt(btn.getAttribute('data-step'), 10);
        this.currentStep = step;
        this.renderLesson();
      });
    });

    // 3. Sự kiện Màn che nhắm mắt (Bước 1)
    document.getElementById('btn-count-listen')?.addEventListener('click', () => {
      this.blindListenCount = Math.min(2, this.blindListenCount + 1);
      const label = document.getElementById('label-listen-count');
      if (label) label.textContent = `${this.blindListenCount}/2 lượt`;
    });

    document.getElementById('btn-toggle-eye')?.addEventListener('click', () => {
      this.isBlindCurtainOpen = true;
      const curtain = document.getElementById('blind-listening-curtain');
      if (curtain) curtain.classList.add('hidden');
      this.renderLesson();
    });

    document.getElementById('btn-reclose-eye')?.addEventListener('click', () => {
      this.isBlindCurtainOpen = false;
      this.renderLesson();
    });

    document.getElementById('btn-proceed-step-2')?.addEventListener('click', () => {
      this.currentStep = 2;
      this.renderLesson();
    });

    document.getElementById('btn-next-to-step2')?.addEventListener('click', () => {
      this.currentStep = 2;
      this.renderLesson();
    });

    document.getElementById('btn-next-to-step3')?.addEventListener('click', () => {
      this.currentStep = 3;
      this.renderLesson();
    });

    document.getElementById('btn-next-to-step4')?.addEventListener('click', () => {
      this.currentStep = 4;
      this.renderLesson();
    });

    document.getElementById('btn-next-to-step5')?.addEventListener('click', () => {
      this.currentStep = 5;
      this.renderLesson();
    });

    // 4. Toggle phụ đề ở Bước 2
    this.container.querySelectorAll('.sub-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.subtitleMode = btn.getAttribute('data-sub');
        this.renderLesson();
      });
    });

    // 5. Nút nghe đọc câu bằng Web Speech API
    this.container.querySelectorAll('.btn-speak-line').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = decodeURIComponent(btn.getAttribute('data-speak-text') || '');
        if (text && 'speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = 'en-US';
          utterance.rate = 0.85; // đọc hơi chậm để nghe rõ ngữ điệu
          window.speechSynthesis.speak(utterance);
        }
      });
    });

    // 6. Shadowing Studio Events (Bước 4)
    const lines = currentLesson.dialogue;
    document.getElementById('btn-prev-shadow-line')?.addEventListener('click', () => {
      if (this.shadowingLineIndex > 0) {
        this.shadowingLineIndex--;
        this.recordedAudioUrl = null;
        this.renderLesson();
      }
    });

    document.getElementById('btn-next-shadow-line')?.addEventListener('click', () => {
      if (this.shadowingLineIndex < lines.length - 1) {
        this.shadowingLineIndex++;
        this.recordedAudioUrl = null;
        this.renderLesson();
      } else {
        this.currentStep = 5;
        this.renderLesson();
      }
    });

    document.getElementById('btn-mark-line-done')?.addEventListener('click', () => {
      const curLine = lines[this.shadowingLineIndex];
      if (curLine) {
        if (this.shadowedLineIds.has(curLine.id)) {
          this.shadowedLineIds.delete(curLine.id);
        } else {
          this.shadowedLineIds.add(curLine.id);
        }
        this.renderLesson();
      }
    });

    // Microphone Recording for Shadowing
    const recBtn = document.getElementById('btn-record-shadow');
    if (recBtn) {
      recBtn.addEventListener('click', () => {
        if (!this.isRecording) {
          this.startShadowRecording();
        } else {
          this.stopShadowRecording();
        }
      });
    }

    // Playback user recording
    document.getElementById('btn-playback-shadow')?.addEventListener('click', () => {
      if (this.recordedAudioUrl) {
        const audio = new Audio(this.recordedAudioUrl);
        audio.play().catch(e => console.warn('Không thể phát âm thanh thu âm:', e));
      }
    });

    // 7. Quiz Events (Bước 5)
    this.bindQuizEvents(currentLesson);

    // 8. Custom Drive Input Toggle & Save
    document.getElementById('btn-toggle-custom-drive')?.addEventListener('click', () => {
      const box = document.getElementById('custom-drive-input-box');
      box?.classList.toggle('hidden');
    });

    document.getElementById('btn-save-custom-drive')?.addEventListener('click', () => {
      const input = document.getElementById('input-custom-drive-url');
      const url = input?.value?.trim() || "";
      if (url) {
        appState.setCustomLessonDriveLink(currentLesson.id, url);
        this.renderLesson();
      }
    });

    document.getElementById('btn-reset-custom-drive')?.addEventListener('click', () => {
      appState.setCustomLessonDriveLink(currentLesson.id, "");
      this.renderLesson();
    });

    // 9. Nút chuyển đổi bài học cùng Series
    this.container.querySelectorAll('.btn-switch-lesson').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedLessonId = btn.getAttribute('data-lesson-id');
        this.currentStep = 1;
        this.isBlindCurtainOpen = false;
        this.blindListenCount = 0;
        this.quizState = { currentIndex: 0, userAnswers: [], isFinished: false };
        this.renderLesson();
      });
    });

    // Nút hoàn tất trở về Catalog
    document.getElementById('btn-finish-to-catalog')?.addEventListener('click', () => {
      this.renderCatalog();
    });

    document.getElementById('btn-cinema-retry-quiz')?.addEventListener('click', () => {
      this.quizState = { currentIndex: 0, userAnswers: [], isFinished: false };
      this.renderLesson();
    });
  }

  // Thu âm thử giọng bằng Microphone
  async startShadowRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.audioChunks = [];
      this.mediaRecorder = new MediaRecorder(stream);
      
      this.mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) this.audioChunks.push(e.data);
      };

      this.mediaRecorder.onstop = () => {
        const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
        this.recordedAudioUrl = URL.createObjectURL(audioBlob);
        this.isRecording = false;
        this.renderLesson();
      };

      this.mediaRecorder.start();
      this.isRecording = true;
      this.renderLesson();
    } catch (err) {
      alert("Không thể truy cập microphone. Vui lòng cấp quyền micro trên trình duyệt để ghi âm nhại giọng.");
      this.isRecording = false;
    }
  }

  stopShadowRecording() {
    if (this.mediaRecorder && this.isRecording) {
      this.mediaRecorder.stop();
      this.mediaRecorder.stream.getTracks().forEach(track => track.stop());
    }
  }

  // Xử lý bài trắc nghiệm đục lỗ
  bindQuizEvents(currentLesson) {
    const quizOptions = document.getElementById('course-quiz-options');
    if (!quizOptions) return;

    const quizzes = currentLesson.quizzes;
    const q = quizzes[this.quizState.currentIndex];

    quizOptions.querySelectorAll('.quiz-cinema-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedIdx = parseInt(btn.getAttribute('data-index'), 10);
        const isCorrect = selectedIdx === q.correctIndex;
        
        this.quizState.userAnswers.push({
          questionIndex: this.quizState.currentIndex,
          selectedIdx,
          isCorrect
        });

        // Vô hiệu hóa các nút
        quizOptions.querySelectorAll('.quiz-cinema-opt-btn').forEach(b => {
          b.disabled = true;
          const idx = parseInt(b.getAttribute('data-index'), 10);
          if (idx === q.correctIndex) {
            b.classList.add('bg-emerald-100', 'border-emerald-500', 'text-emerald-900', 'dark:bg-emerald-950', 'dark:text-emerald-100');
          } else if (idx === selectedIdx && !isCorrect) {
            b.classList.add('bg-rose-100', 'border-rose-500', 'text-rose-900', 'dark:bg-rose-950', 'dark:text-rose-100');
          }
        });

        const feedback = document.getElementById('course-quiz-feedback');
        if (feedback) {
          feedback.classList.remove('hidden');
          if (isCorrect) {
            feedback.className = "mt-3 p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100 text-xs animate-fade-in block";
            feedback.innerHTML = `
              <div class="flex items-center justify-between">
                <div>
                  <div class="font-bold text-sm">✅ Xuất sắc! Chính xác!</div>
                  <p class="mt-0.5 leading-relaxed">${q.explanation}</p>
                </div>
                <button id="btn-next-cinema-quiz" class="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white rounded-xl font-bold text-xs shadow-md transition-all shrink-0 ml-3">
                  Tiếp tục ➔
                </button>
              </div>
            `;
          } else {
            feedback.className = "mt-3 p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-100 text-xs animate-fade-in block";
            feedback.innerHTML = `
              <div class="flex items-center justify-between">
                <div>
                  <div class="font-bold text-sm">❌ Chưa chính xác!</div>
                  <p class="mt-0.5 leading-relaxed">${q.explanation}</p>
                </div>
                <button id="btn-next-cinema-quiz" class="px-3.5 py-2 bg-rose-600 hover:bg-rose-700 active:scale-95 text-white rounded-xl font-bold text-xs shadow-md transition-all shrink-0 ml-3">
                  Tiếp tục ➔
                </button>
              </div>
            `;
          }

          document.getElementById('btn-next-cinema-quiz')?.addEventListener('click', () => {
            if (this.quizState.currentIndex < quizzes.length - 1) {
              this.quizState.currentIndex++;
              this.renderLesson();
            } else {
              this.quizState.isFinished = true;
              this.renderLesson();
            }
          });
        }
      });
    });
  }
}
