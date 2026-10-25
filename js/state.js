// Quản lý trạng thái ứng dụng (State Management)
// Hoàn toàn không dùng LocalStorage - Lưu trữ và đồng bộ trực tiếp với Cloud Firestore

import { VOCAB_BANK, VOCAB_GROUPS } from './data/vocab-bank.js';
import { authInstance, dbInstance, isFirebaseLive } from './firebase-config.js';

export const RANK_TIERS = {
  "A1": { current: "A1", next: "A2", label: "A1 (Beginner)", nextLabel: "A2 (Elementary)", minDays: 15, requiredXP: 375 },
  "A2": { current: "A2", next: "B1", label: "A2 (Elementary)", nextLabel: "B1 (Intermediate)", minDays: 30, requiredXP: 750 },
  "B1": { current: "B1", next: "B2", label: "B1 (Intermediate)", nextLabel: "B2 (Upper-Intermediate)", minDays: 60, requiredXP: 1500 },
  "B2": { current: "B2", next: "C1", label: "B2 (Upper-Intermediate)", nextLabel: "C1 (Advanced)", minDays: 90, requiredXP: 2250 },
  "C1": { current: "C1", next: "Master", label: "C1 (Advanced)", nextLabel: "Mastery", minDays: 120, requiredXP: 3000 }
};

export class StateManager {
  constructor() {
    this.isAuthResolving = true;
    const cachedUser = this.getCachedUser();
    const cachedProfile = this.getCachedProfile();
    const cachedLearnedWords = this.getCachedLearnedWords();
    const hasFbSession = this.hasFirebaseStoredSession();

    if (cachedUser && cachedUser.uid) {
      // Khôi phục learnedWords từ cache để render tức thì 0ms trên mọi thiết bị
      const learnedWords = (cachedProfile && Array.isArray(cachedProfile.learnedWords) && cachedProfile.learnedWords.length > 0)
        ? cachedProfile.learnedWords
        : (Array.isArray(cachedLearnedWords) ? cachedLearnedWords : []);

      // Có sẵn phiên đăng nhập từ cache -> Mở khóa giao diện đã đăng nhập tức thì (0ms)
      this.state = {
        ...this.getDefaultState(cachedUser),
        ...(cachedProfile || {}),
        learnedWords,
        user: cachedUser
      };
      this.hasCachedSession = true;
      this.isAuthResolving = false; // Đã có user từ cache, mở thẳng giao diện học tập
    } else if (hasFbSession) {
      // Có phiên Firebase lưu trữ -> Chờ Firebase emit kết quả
      this.state = this.getDefaultState(null);
      this.hasCachedSession = false;
      this.isAuthResolving = true;
    } else {
      // Khách chưa từng đăng nhập hoặc đã đăng xuất
      this.state = this.getDefaultState(null);
      this.hasCachedSession = false;
      this.isAuthResolving = false;
    }
    this.listeners = [];
  }

  getCachedUser() {
    try {
      if (typeof window === 'undefined' || !window.localStorage) return null;
      const data = localStorage.getItem('eimo_auth_user');
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  }

  getCachedProfile() {
    try {
      if (typeof window === 'undefined' || !window.localStorage) return null;
      const data = localStorage.getItem('eimo_auth_profile');
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  }

  getCachedLearnedWords() {
    try {
      if (typeof window === 'undefined' || !window.localStorage) return [];
      const data = localStorage.getItem('eimo_learned_words');
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  setCachedUser(user) {
    try {
      if (typeof window === 'undefined' || !window.localStorage) return;
      if (user && user.uid) {
        localStorage.setItem('eimo_auth_user', JSON.stringify({
          uid: user.uid,
          displayName: user.displayName || '',
          email: user.email || '',
          photoURL: user.photoURL || ''
        }));
      } else {
        localStorage.removeItem('eimo_auth_user');
      }
    } catch (e) {}
  }

  setCachedProfile(profile) {
    try {
      if (typeof window === 'undefined' || !window.localStorage) return;
      if (profile) {
        const learnedWords = Array.isArray(profile.learnedWords) ? profile.learnedWords : [];
        try {
          localStorage.setItem('eimo_learned_words', JSON.stringify(learnedWords));
        } catch (e) {
          console.warn("Lưu eimo_learned_words thất bại:", e);
        }
        localStorage.setItem('eimo_auth_profile', JSON.stringify({
          cefrLevel: profile.cefrLevel || null,
          rankXP: profile.rankXP || 0,
          streak: profile.streak || 0,
          maxStreak: profile.maxStreak || 0,
          lastActiveDate: profile.lastActiveDate || null,
          lastPenaltyCheckDate: profile.lastPenaltyCheckDate || null,
          lastPenaltyNotice: profile.lastPenaltyNotice || null,
          theme: profile.theme || 'dark',
          dailyReviewDone: profile.dailyReviewDone || false,
          dailyReviewDate: profile.dailyReviewDate || null,
          dailyReviewedWordIds: profile.dailyReviewedWordIds || [],
          dailyReviewPastDate: profile.dailyReviewPastDate || null,
          dailyNewBatchDone: profile.dailyNewBatchDone || false,
          dailyNewBatchDate: profile.dailyNewBatchDate || null,
          todayNewWordsCount: profile.todayNewWordsCount || 0,
          completedStreakDates: profile.completedStreakDates || [],
          completedCourseLessons: profile.completedCourseLessons || [],
          customLessonDriveLinks: profile.customLessonDriveLinks || {},
          learnedWords: learnedWords
        }));
      } else {
        localStorage.removeItem('eimo_auth_profile');
        localStorage.removeItem('eimo_learned_words');
      }
    } catch (e) {}
  }

  hasFirebaseStoredSession() {
    try {
      if (typeof window === 'undefined' || !window.localStorage) return false;
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        // Chỉ nhận diện phiên đăng nhập thật khi có key firebase:authUser:...
        // KHÔNG kiểm tra firebase:host vì đây chỉ là metadata kết nối của Firebase cho mọi khách ghé thăm
        if (key && key.startsWith('firebase:authUser:')) {
          const val = localStorage.getItem(key);
          if (val && val !== 'null' && val !== '{}' && val !== 'undefined') {
            return true;
          }
        }
      }
    } catch (e) {}
    return false;
  }

  getDefaultState(user = null) {
    const today = this.getTodayString();
    return {
      user: user, // { uid, displayName, email, photoURL }
      cefrLevel: null, // "A1" | "A2" | "B1" | "B2"
      rankXP: 0, // Điểm kinh nghiệm tích lũy của rank hiện tại
      lastActiveDate: null, // "YYYY-MM-DD"
      lastPenaltyCheckDate: null, // Ngày kiểm tra phạt gần nhất
      lastPenaltyNotice: null, // Thông báo phạt gần nhất
      streak: 0,
      maxStreak: 0,
      learnedWords: [], // Array of { wordId, learnedDate, reviewCount, lastReviewedAt }
      dailyReviewDone: false,
      dailyReviewDate: today,
      dailyReviewedWordIds: [], // Danh sách wordId đã được ôn tập hôm nay
      dailyReviewPastDate: null, // Ngày quá khứ (T-n, khác T-1) được chọn ngẫu nhiên cho buổi ôn tập hôm nay
      dailyNewBatchDone: false,
      dailyNewBatchDate: today,
      todayNewWordsCount: 0, // Số từ mới đã hoàn thành bài luyện tập hôm nay
      completedStreakDates: [], // Danh sách các ngày ("YYYY-MM-DD") đã hoàn thành CẢ 2 nhiệm vụ (Review T-1 + Học 10 từ mới)
      completedCourseLessons: [], // Danh sách ID bài học phim đã hoàn thành
      customLessonDriveLinks: {}, // Bản đồ lessonId -> link Google Drive do người dùng tự cấu hình
      dailyStudyTimeMap: {}, // Bản đồ thời gian học thực tế "YYYY-MM-DD" -> số giây (seconds)
      audioEnabled: true, // Điều khiển âm thanh toàn cục
      theme: "dark", // "dark" | "light"
      vocabGroups: VOCAB_GROUPS // Danh sách nhóm từ vựng (hỗ trợ sync với Firestore)
    };
  }

  // Tải dữ liệu người dùng từ Cloud Firestore
  async loadUserFromFirestore(uid) {
    if (!isFirebaseLive || !dbInstance || !uid) return false;
    try {
      const { doc, getDoc, setDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
      const userRef = doc(dbInstance, "users", uid);
      const snap = await getDoc(userRef);

      if (snap.exists()) {
        const remoteData = snap.data();
        this.state = {
          ...this.getDefaultState(this.state.user),
          ...remoteData,
          user: this.state.user // Đảm bảo giữ user auth hiện tại
        };
        if (!Array.isArray(this.state.dailyReviewedWordIds)) {
          this.state.dailyReviewedWordIds = [];
        }
        if (!Array.isArray(this.state.completedStreakDates)) {
          this.state.completedStreakDates = [];
        }
        if (!Array.isArray(this.state.completedCourseLessons)) {
          this.state.completedCourseLessons = [];
        }
        if (!this.state.customLessonDriveLinks || typeof this.state.customLessonDriveLinks !== 'object') {
          this.state.customLessonDriveLinks = {};
        }
        if (!Array.isArray(this.state.learnedWords)) {
          this.state.learnedWords = [];
        }
        if (!this.state.dailyStudyTimeMap || typeof this.state.dailyStudyTimeMap !== 'object') {
          this.state.dailyStudyTimeMap = {};
        }
        // Kiểm tra reset ngày mới và hình phạt
        this.applyDailyCheck();
        // Cập nhật lại Firestore nếu có thay đổi từ kiểm tra ngày
        await this.syncToFirestore();
        this.setCachedProfile(this.state);
        this.notify();
        return true;
      } else {
        // Tạo profile mới trên Firestore nếu lần đầu đăng nhập
        const initialDoc = {
          displayName: this.state.user?.displayName || "",
          email: this.state.user?.email || "",
          photoURL: this.state.user?.photoURL || "",
          createdAt: new Date().toISOString(),
          cefrLevel: this.state.cefrLevel || null,
          rankXP: this.state.rankXP || 0,
          streak: this.state.streak || 0,
          maxStreak: this.state.maxStreak || 0,
          learnedWords: this.state.learnedWords || [],
          dailyReviewDone: false,
          dailyReviewDate: this.getTodayString(),
          dailyReviewedWordIds: [],
          dailyNewBatchDone: false,
          dailyNewBatchDate: this.getTodayString(),
          todayNewWordsCount: 0,
          completedStreakDates: [],
          audioEnabled: true
        };
        await setDoc(userRef, initialDoc, { merge: true });
        this.setCachedProfile(this.state);
        this.notify();
        return true;
      }
    } catch (err) {
      console.error("❌ Lỗi khi tải dữ liệu từ Firestore:", err);
      this.lastSyncError = err;
      return false;
    }
  }

  // Kiểm tra ngày mới và áp dụng hình phạt kỷ luật
  applyDailyCheck() {
    const today = this.getTodayString();
    const yesterday = this.getYesterdayString();

    if (this.state.dailyReviewDate !== today) {
      this.state.dailyReviewDone = false;
      this.state.dailyReviewDate = today;
      this.state.dailyReviewedWordIds = [];
      this.state.dailyReviewPastDate = null;
    }
    if (this.state.dailyNewBatchDate !== today) {
      this.state.dailyNewBatchDone = false;
      this.state.dailyNewBatchDate = today;
      this.state.todayNewWordsCount = 0;
    }

    // Tự động khởi tạo completedStreakDates từ lịch sử nếu tài khoản cũ chưa có mảng này
    if (!Array.isArray(this.state.completedStreakDates) || this.state.completedStreakDates.length === 0) {
      const dateCounts = {};
      (this.state.learnedWords || []).forEach(w => {
        if (w.learnedDate && w.learnedDate < today) {
          dateCounts[w.learnedDate] = (dateCounts[w.learnedDate] || 0) + 1;
        }
      });
      // Những ngày trong quá khứ đã nạp >= 10 từ mới được tính là ngày giữ chuỗi hợp lệ
      const pastDates = Object.keys(dateCounts).filter(d => dateCounts[d] >= 10);
      this.state.completedStreakDates = pastDates;
    }

    // ÁP DỤNG HÌNH PHẠT TỤT PROGRESS x2 NẾU BỎ NGÀY HỌC (LOSE STREAK)
    if (this.state.lastActiveDate && this.state.lastActiveDate !== today && this.state.lastActiveDate !== yesterday) {
      if (this.state.lastPenaltyCheckDate !== today) {
        const lastDateObj = new Date(this.state.lastActiveDate);
        const todayDateObj = new Date(today);
        const diffTime = Math.abs(todayDateObj - lastDateObj);
        const missedDays = Math.max(1, Math.floor(diffTime / (1000 * 60 * 60 * 24)) - 1);
        
        // Bình thường 1 ngày tăng 25 XP (10 review + 15 batch mới).
        // Bỏ 1 ngày bị phạt x2 phần tăng: 25 * 2 = 50 XP/ngày!
        const penaltyXP = missedDays * 50;
        const oldXP = this.state.rankXP || 0;
        this.state.rankXP = Math.max(0, oldXP - penaltyXP);
        this.state.lastPenaltyNotice = `⚠️ Bạn đã bỏ lỡ ${missedDays} ngày! Bị trừ -${penaltyXP} XP (Phạt x2 phần tăng hàng ngày).`;
        this.state.lastPenaltyCheckDate = today;
      }
    }

    // Tự động tính toán streak và kỷ lục maxStreak từ lịch sử hoạt động học tập thực tế
    this.updateStreak();
  }

  // Lưu trạng thái: Đồng bộ với Cloud Firestore và lưu bộ đệm LocalStorage
  saveState() {
    this.setCachedProfile(this.state);
    this.notify();
    this.syncToFirestore();
  }

  async syncToFirestore() {
    if (!isFirebaseLive || !dbInstance || !this.state.user?.uid) return;
    try {
      const { doc, setDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
      const userRef = doc(dbInstance, "users", this.state.user.uid);
      await setDoc(userRef, {
        displayName: this.state.user.displayName || "",
        email: this.state.user.email || "",
        photoURL: this.state.user.photoURL || "",
        cefrLevel: this.state.cefrLevel || null,
        rankXP: this.state.rankXP || 0,
        lastActiveDate: this.state.lastActiveDate || null,
        lastPenaltyCheckDate: this.state.lastPenaltyCheckDate || null,
        lastPenaltyNotice: this.state.lastPenaltyNotice || null,
        streak: this.state.streak || 0,
        maxStreak: this.state.maxStreak || 0,
        learnedWords: this.state.learnedWords || [],
        dailyReviewDone: this.state.dailyReviewDone || false,
        dailyReviewDate: this.state.dailyReviewDate || this.getTodayString(),
        dailyReviewedWordIds: this.state.dailyReviewedWordIds || [],
        dailyReviewPastDate: this.state.dailyReviewPastDate || null,
        dailyNewBatchDone: this.state.dailyNewBatchDone || false,
        dailyNewBatchDate: this.state.dailyNewBatchDate || this.getTodayString(),
        todayNewWordsCount: this.state.todayNewWordsCount || 0,
        completedStreakDates: this.state.completedStreakDates || [],
        completedCourseLessons: this.state.completedCourseLessons || [],
        customLessonDriveLinks: this.state.customLessonDriveLinks || {},
        dailyStudyTimeMap: this.state.dailyStudyTimeMap || {},
        audioEnabled: this.state.audioEnabled ?? true,
        theme: this.state.theme || "dark",
        updatedAt: new Date().toISOString()
      }, { merge: true });
    } catch (err) {
      console.warn("⚠️ Lỗi khi đồng bộ Firestore:", err);
    }
  }

  // Ghi nhận thời gian học thực tế (tính theo giây) cho ngày hôm nay
  recordStudyTime(seconds) {
    if (!seconds || seconds <= 0) return;
    const today = this.getTodayString();
    if (!this.state.dailyStudyTimeMap || typeof this.state.dailyStudyTimeMap !== 'object') {
      this.state.dailyStudyTimeMap = {};
    }
    const current = this.state.dailyStudyTimeMap[today] || 0;
    this.state.dailyStudyTimeMap[today] = current + Math.round(seconds);
    this.saveState();
  }

  // Lấy thời gian học thực tế của một ngày (trả về giây)
  getDailyStudyTime(dateStr, wordCount = 0) {
    if (!dateStr) return 0;
    const map = this.state.dailyStudyTimeMap || {};
    if (map[dateStr] !== undefined && map[dateStr] > 0) {
      return map[dateStr];
    }
    // Dữ liệu quá khứ trước khi có tính năng bấm giờ: ước tính benchmark hợp lý 45s / từ
    if (wordCount > 0 && dateStr < this.getTodayString()) {
      return wordCount * 45;
    }
    return 0;
  }

  // Lấy danh mục các nhóm từ vựng
  getVocabGroups() {
    return this.state.vocabGroups || VOCAB_GROUPS;
  }

  // Tải các nhóm từ vựng từ Cloud Firestore (Chỉ đọc ngầm nếu có bản cập nhật từ server)
  async loadVocabGroupsFromFirestore() {
    if (!isFirebaseLive || !dbInstance) return;
    try {
      const { collection, getDocs } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
      const groupsCol = collection(dbInstance, "vocab_groups");
      const snap = await getDocs(groupsCol);
      if (!snap.empty && snap.docs.length >= VOCAB_GROUPS.length) {
        const remoteGroups = [];
        snap.forEach(docSnap => {
          remoteGroups.push({ groupId: docSnap.id, ...docSnap.data() });
        });
        if (remoteGroups.length > 0) {
          this.state.vocabGroups = remoteGroups;
          this.notify();
          console.log(`✅ Đã tải ${remoteGroups.length} nhóm từ vựng từ Cloud Firestore.`);
        }
      }
    } catch (err) {
      console.log("ℹ️ Đang sử dụng kho 700 từ vựng chuẩn tích hợp (PWA Offline Bundle).");
    }
  }

  // Đồng bộ toàn bộ các nhóm từ vựng lên Cloud Firestore (1 doc / nhóm để tối ưu quota)
  async syncVocabGroupsToFirestore() {
    if (!isFirebaseLive || !dbInstance) {
      throw new Error("Chưa kết nối Firebase! Vui lòng kiểm tra cấu hình secret trên GitHub.");
    }
    const { doc, setDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
    const groups = this.state.vocabGroups || VOCAB_GROUPS;
    let totalWords = 0;

    for (const group of groups) {
      const groupRef = doc(dbInstance, "vocab_groups", group.groupId);
      const payload = {
        groupId: group.groupId,
        name: group.name,
        icon: group.icon,
        category: group.category || "daily",
        level: group.level || "A2",
        description: group.description || "",
        words: group.words || [],
        updatedAt: new Date().toISOString()
      };
      await setDoc(groupRef, payload, { merge: true });
      totalWords += (group.words || []).length;
    }

    return {
      success: true,
      groupCount: groups.length,
      wordCount: totalWords
    };
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(fn => fn(this.state));
  }

  getTodayString() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  getYesterdayString() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // Phân tích trạng thái kỷ luật & Chia đợt ôn tập (10 từ/đợt)
  // Cơ chế mới: Ôn toàn bộ từ T-1 + Chọn ngẫu nhiên 1 ngày trong quá khứ (T-2, T-3, ..., T-n khác T-1)
  calculateDisciplineStatus() {
    const today = this.getTodayString();
    const yesterday = this.getYesterdayString();

    // 1. Nếu chưa học từ nào trong hệ thống
    if (!this.state.learnedWords || this.state.learnedWords.length === 0) {
      return {
        needsReview: false,
        isPenalized: false,
        missedDays: 0,
        tMinus1Date: null,
        randomPastDate: null,
        tMinus1Count: 0,
        randomPastCount: 0,
        totalReviewCount: 0,
        completedReviewCount: 0,
        remainingReviewCount: 0,
        currentReviewBatch: [],
        currentBatchIndex: 0,
        totalBatches: 0,
        allReviewWords: [],
        reviewWords: [],
        reason: "Chào mừng bạn! Hãy bắt đầu với 10 từ vựng đầu tiên."
      };
    }

    // 2. Tìm tất cả các ngày đã học trong quá khứ trước hôm nay (< today)
    const pastLearningDates = Array.from(new Set(
      this.state.learnedWords
        .map(w => w.learnedDate)
        .filter(d => d && d < today)
    )).sort();

    // Nếu chưa từng có ngày học nào trước hôm nay (tức là chỉ mới bắt đầu học hôm nay)
    if (pastLearningDates.length === 0) {
      return {
        needsReview: false,
        isPenalized: false,
        missedDays: 0,
        tMinus1Date: null,
        randomPastDate: null,
        tMinus1Count: 0,
        randomPastCount: 0,
        totalReviewCount: 0,
        completedReviewCount: 0,
        remainingReviewCount: 0,
        currentReviewBatch: [],
        currentBatchIndex: 0,
        totalBatches: 0,
        allReviewWords: [],
        reviewWords: [],
        reason: "Bạn vừa bắt đầu hôm nay! Chưa có từ vựng ngày hôm qua để ôn tập."
      };
    }

    // Ngày học gần nhất trước hôm nay (T-1)
    const tMinus1Date = pastLearningDates[pastLearningDates.length - 1];

    // Các ngày cũ hơn T-1 (T-2, T-3, ..., T-n)
    const olderDates = pastLearningDates.slice(0, pastLearningDates.length - 1);

    // Xác định số ngày bỏ quên giữa tMinus1Date và today
    let missedDays = 0;
    if (tMinus1Date < yesterday) {
      const lastDateObj = new Date(tMinus1Date);
      const todayDateObj = new Date(today);
      const diffTime = Math.abs(todayDateObj - lastDateObj);
      missedDays = Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24)) - 1);
    }
    const isPenalized = missedDays > 0;

    // 3. Xác định ngày quá khứ ngẫu nhiên T-n (khác T-1) nếu lịch sử có từ 2 ngày học trở lên
    let randomPastDate = null;
    if (olderDates.length > 0) {
      // Nếu hôm nay đã chọn 1 ngày quá khứ và ngày đó vẫn hợp lệ trong olderDates
      if (this.state.dailyReviewPastDate && olderDates.includes(this.state.dailyReviewPastDate)) {
        randomPastDate = this.state.dailyReviewPastDate;
      } else {
        // Chọn ngẫu nhiên 1 ngày từ olderDates và cố định cho cả ngày hôm nay
        const randIdx = Math.floor(Math.random() * olderDates.length);
        randomPastDate = olderDates[randIdx];
        this.state.dailyReviewPastDate = randomPastDate;
        this.setCachedProfile(this.state);
      }
    } else {
      this.state.dailyReviewPastDate = null;
    }

    // 4. Gom danh sách từ cần review cho hôm nay:
    // a) Toàn bộ từ học ở phiên gần nhất T-1
    const tMinus1Words = this.state.learnedWords.filter(w => w.learnedDate === tMinus1Date);

    // b) Từ học ở phiên ngẫu nhiên T-n (khác T-1)
    let randomPastWords = [];
    if (randomPastDate) {
      const candidates = this.state.learnedWords.filter(w => w.learnedDate === randomPastDate);
      if (candidates.length <= 10) {
        randomPastWords = candidates;
      } else {
        // Nếu ngày đó học > 10 từ: ưu tiên lấy 10 từ có reviewCount thấp nhất (hoặc ôn cách đây lâu nhất)
        randomPastWords = [...candidates]
          .sort((a, b) => (a.reviewCount || 0) - (b.reviewCount || 0))
          .slice(0, 10);
      }
    }

    let allReviewWords = [...tMinus1Words, ...randomPastWords];
    if (allReviewWords.length === 0) {
      allReviewWords = [...this.state.learnedWords]
        .sort((a, b) => (a.reviewCount || 0) - (b.reviewCount || 0))
        .slice(0, 10);
    }

    // Khử trùng lặp ID
    const uniqueReviewMap = new Map();
    allReviewWords.forEach(w => {
      const wid = w.wordId || w.id;
      if (wid && !uniqueReviewMap.has(wid)) {
        uniqueReviewMap.set(wid, w);
      }
    });
    const pool = Array.from(uniqueReviewMap.values());

    // Kiểm tra danh sách ID đã hoàn thành ôn tập HÔM NAY
    const reviewedTodaySet = new Set(this.state.dailyReviewedWordIds || []);

    // Danh sách từ CÒN LẠI chưa ôn tập hôm nay
    const remainingReviewWords = pool.filter(w => !reviewedTodaySet.has(w.wordId || w.id));

    const totalReviewCount = pool.length;
    const remainingReviewCount = remainingReviewWords.length;
    const completedReviewCount = totalReviewCount - remainingReviewCount;

    // QUY TẮC BATCHING: Chia nhỏ 10 từ / lần review
    const BATCH_SIZE = 10;
    const totalBatches = Math.ceil(totalReviewCount / BATCH_SIZE);
    const currentBatchIndex = totalBatches === 0 ? 0 : Math.min(totalBatches, Math.floor(completedReviewCount / BATCH_SIZE) + 1);
    const currentReviewBatch = remainingReviewWords.slice(0, BATCH_SIZE);

    const needsReview = remainingReviewCount > 0;

    // Tự động đồng bộ cờ dailyReviewDone
    if (!needsReview && totalReviewCount > 0) {
      if (!this.state.dailyReviewDone) {
        this.state.dailyReviewDone = true;
        this.state.dailyReviewDate = today;
      }
    }

    return {
      needsReview,
      isPenalized,
      missedDays,
      tMinus1Date,
      randomPastDate,
      tMinus1Count: tMinus1Words.length,
      randomPastCount: randomPastWords.length,
      totalReviewCount,
      completedReviewCount,
      remainingReviewCount,
      currentReviewBatch,
      currentBatchIndex,
      totalBatches,
      allReviewWords: pool,
      reviewWords: currentReviewBatch, // Tương thích ngược với các thành phần cũ
      reason: isPenalized 
        ? `⚠️ Bạn đã bỏ quên ${missedDays} ngày! Hệ thống yêu cầu ôn tập ${totalReviewCount} từ (${tMinus1Words.length} từ ngày ${tMinus1Date}${randomPastDate ? ` + ${randomPastWords.length} từ ngày cũ ${randomPastDate}` : ''}) chia làm ${totalBatches} đợt (10 từ/đợt) để khôi phục chuỗi.`
        : randomPastDate
          ? `Bạn có ${totalReviewCount} từ cần ôn tập (${tMinus1Words.length} từ ngày ${tMinus1Date} + ${randomPastWords.length} từ ngày cũ ${randomPastDate}). Hệ thống chia thành ${totalBatches} đợt (10 từ/lần review) để bạn củng cố trí nhớ dài hạn.`
          : `Bạn có ${totalReviewCount} từ cần ôn tập lại từ phiên ngày ${tMinus1Date} trước khi mở khoá 10 từ mới.`
    };
  }

  // Lấy 10 từ mới phù hợp với trình độ người dùng chưa từng học
  getNewBatchWords() {
    const level = this.state.cefrLevel || "A1";
    const learnedIds = new Set(this.state.learnedWords.map(w => w.wordId));
    
    // Ưu tiên từ thuộc level hiện tại
    let pool = VOCAB_BANK.filter(w => w.level === level && !learnedIds.has(w.id));
    
    // Nếu hết từ của level này, mở rộng sang level kế tiếp
    if (pool.length < 10) {
      pool = VOCAB_BANK.filter(w => !learnedIds.has(w.id));
    }

    return pool.slice(0, 10);
  }

  // Đánh dấu hoàn thành 1 batch từ vựng trong bài Review hôm nay
  markReviewBatchComplete(reviewedWordIds = []) {
    const today = this.getTodayString();
    
    // Ghi nhận các ID vừa review vào dailyReviewedWordIds hôm nay
    const currentSet = new Set(this.state.dailyReviewedWordIds || []);
    reviewedWordIds.forEach(id => currentSet.add(id));
    this.state.dailyReviewedWordIds = Array.from(currentSet);

    // Tăng reviewCount và cập nhật lastReviewedAt cho các từ vừa review
    this.state.learnedWords = (this.state.learnedWords || []).map(w => {
      const wid = w.wordId || w.id;
      if (reviewedWordIds.includes(wid)) {
        return {
          ...w,
          reviewCount: (w.reviewCount || 0) + 1,
          lastReviewedAt: new Date().toISOString(),
          lastReviewedDate: today
        };
      }
      return w;
    });

    this.state.lastActiveDate = today;

    // Tăng +10 XP cho mỗi batch ôn tập hoàn thành
    this.addXP(10);

    // Kiểm tra xem đã hoàn thành toàn bộ các đợt review hôm nay chưa
    const discipline = this.calculateDisciplineStatus();
    if (!discipline.needsReview) {
      this.state.dailyReviewDone = true;
      this.state.dailyReviewDate = today;
    }

    // Cập nhật streak
    this.updateStreak();
    this.saveState();

    return discipline;
  }

  // Tương thích ngược: markReviewComplete gọi trực tiếp markReviewBatchComplete
  markReviewComplete(reviewedWordIds = []) {
    return this.markReviewBatchComplete(reviewedWordIds);
  }

  // Lấy danh sách ứng viên từ mới phong phú cho phiên thẩm thấu Giai đoạn 1
  getNewBatchCandidates() {
    const level = this.state.cefrLevel || "A1";
    const learnedIds = new Set((this.state.learnedWords || []).map(w => w.wordId || w.id));
    
    const unlearned = VOCAB_BANK.filter(w => !learnedIds.has(w.id));
    const primary = unlearned.filter(w => w.level === level);
    const secondary = unlearned.filter(w => w.level !== level);

    const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());
    return [...shuffle(primary), ...shuffle(secondary)];
  }

  // Lấy danh sách ứng viên từ mới theo Chủ Đề chỉ định cho phiên thẩm thấu Giai đoạn 1
  getNewBatchCandidatesForGroup(groupId) {
    const learnedIds = new Set((this.state.learnedWords || []).map(w => w.wordId || w.id));
    const groups = this.getVocabGroups();
    const group = groups.find(g => g.groupId === groupId);
    if (!group) return [];

    // Gắn metadata nhóm cho từng từ để đảm bảo đầy đủ trường groupName, groupIcon, category
    const allGroupWords = (group.words || []).map(w => ({
      ...w,
      groupId: group.groupId,
      groupName: group.name,
      groupIcon: group.icon,
      category: group.category || "daily"
    }));

    const unlearned = allGroupWords.filter(w => !learnedIds.has(w.id));
    const learned = allGroupWords.filter(w => learnedIds.has(w.id));

    const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

    // Nếu còn từ chưa học, ưu tiên các từ chưa học lên trước để học batch mới
    if (unlearned.length > 0) {
      return [...unlearned, ...shuffle(learned)];
    }

    // Nếu đã học xong toàn bộ nhóm, xáo trộn từ đã học để học lại/ôn luyện
    return shuffle(learned);
  }

  // Đánh dấu hoàn thành học Batch 10 từ mới (kèm danh sách từ đã biết bỏ qua)
  markNewBatchComplete(newWordIds, skippedKnownWordIds = []) {
    const today = this.getTodayString();
    const existingIds = new Set((this.state.learnedWords || []).map(w => w.wordId || w.id));
    
    // 10 từ mới cần học (status: "learning")
    const newItems = newWordIds
      .filter(id => !existingIds.has(id))
      .map(id => ({
        wordId: id,
        learnedDate: today,
        reviewCount: 0,
        status: "learning",
        lastReviewedAt: new Date().toISOString()
      }));

    // Các từ đã biết (bỏ qua khi thẩm thấu), cũng lưu vào để review T+1 (status: "known")
    const knownItems = skippedKnownWordIds
      .filter(id => !existingIds.has(id) && !newWordIds.includes(id))
      .map(id => ({
        wordId: id,
        learnedDate: today,
        reviewCount: 1,
        status: "known",
        lastReviewedAt: new Date().toISOString()
      }));

    // Cập nhật các từ đã có trong danh sách nếu được học lại
    this.state.learnedWords = (this.state.learnedWords || []).map(w => {
      const wid = w.wordId || w.id;
      if (newWordIds.includes(wid)) {
        return {
          ...w,
          reviewCount: (w.reviewCount || 0) + 1,
          lastReviewedAt: new Date().toISOString(),
          lastReviewedDate: today
        };
      }
      return w;
    });

    // Thêm cả 2 nhóm vào danh sách để lên lịch ôn tập T+1 vào ngày mai
    this.state.learnedWords.push(...newItems, ...knownItems);
    this.state.dailyNewBatchDone = true;
    this.state.dailyNewBatchDate = today;
    this.state.todayNewWordsCount = (this.state.todayNewWordsCount || 0) + newWordIds.length;
    this.state.lastActiveDate = today;

    // Tăng +15 XP cho việc nạp xong 10 từ mới
    this.addXP(15);

    this.updateStreak();
    this.saveState();
  }

  addXP(amount) {
    this.state.rankXP = (this.state.rankXP || 0) + amount;
    this.checkLevelUp();
  }

  checkLevelUp() {
    const current = this.state.cefrLevel || "A1";
    const tier = RANK_TIERS[current];
    if (!tier || !tier.next || tier.next === "Mastery" || tier.next === "C1+") return;

    if (this.state.rankXP >= tier.requiredXP) {
      this.state.rankXP -= tier.requiredXP;
      this.state.cefrLevel = tier.next;
      this.state.lastLevelUpNotice = `🎉 CHÚC MỪNG! Bạn đã thăng hạng lên ${tier.next}!`;
    }
  }

  getRankProgress() {
    const level = this.state.cefrLevel || "A1";
    const tier = RANK_TIERS[level] || RANK_TIERS["A1"];
    const currentXP = Math.max(0, this.state.rankXP || 0);
    const requiredXP = tier.requiredXP;
    const percent = Math.min(100, Math.round((currentXP / requiredXP) * 100));
    const completedDays = Math.min(tier.minDays, Math.floor(currentXP / 25));

    return {
      level,
      nextLevel: tier.next,
      currentLabel: tier.label,
      nextLabel: tier.nextLabel,
      minDays: tier.minDays,
      completedDays,
      remainingDays: Math.max(0, tier.minDays - completedDays),
      currentXP,
      requiredXP,
      percent,
      remainingXP: Math.max(0, requiredXP - currentXP),
      penaltyNotice: this.state.lastPenaltyNotice,
      levelUpNotice: this.state.lastLevelUpNotice
    };
  }

  // Kiểm tra xem ngày hôm nay đã hoàn thành nhiệm vụ để tính/giữ chuỗi chưa:
  // QUY TẮC: BẮT BUỘC ĐỦ CẢ HAI:
  // 1. Hoàn thành toàn bộ ôn tập từ vựng T-1 (dailyReviewDone = true hoặc không có từ T-1 cần ôn)
  // 2. Hoàn thành ít nhất 1 lần (batch 10 từ) mới (dailyNewBatchDone = true)
  isTodayTaskComplete() {
    if (!this.state.learnedWords || this.state.learnedWords.length === 0) {
      return false;
    }

    // Điều kiện 1: Đã hoàn tất bài ôn tập T-1 (hoặc không có từ T-1 cần ôn)
    const discipline = this.calculateDisciplineStatus();
    const reviewSatisfied = (!discipline.needsReview) || (this.state.dailyReviewDone === true);

    // Điều kiện 2: Đã nạp và hoàn thành ít nhất 1 batch (10 từ) mới hôm nay
    const newBatchSatisfied = (this.state.dailyNewBatchDone === true) || 
      ((this.state.todayNewWordsCount || 0) >= 10) ||
      (this.state.learnedWords.filter(w => w.learnedDate === this.getTodayString()).length >= 10);

    return reviewSatisfied && newBatchSatisfied;
  }

  updateStreak() {
    const today = this.getTodayString();
    const isComplete = this.isTodayTaskComplete();

    const datesSet = new Set(this.state.completedStreakDates || []);
    if (isComplete) {
      datesSet.add(today);
    } else {
      datesSet.delete(today);
    }
    this.state.completedStreakDates = Array.from(datesSet);

    this.state.streak = this.calculateCurrentStreak();
    this.state.maxStreak = this.calculateMaxStreak();
  }

  // Tính toán chuỗi ngày học liên tục (Streak) dựa trên quy tắc hoàn thành cả 2 nhiệm vụ
  calculateCurrentStreak() {
    const today = this.getTodayString();
    const yesterday = this.getYesterdayString();

    const completedSet = new Set(this.state.completedStreakDates || []);
    if (this.isTodayTaskComplete()) {
      completedSet.add(today);
    } else {
      completedSet.delete(today);
    }

    if (completedSet.size === 0) return 0;

    // Điểm bắt đầu tính chuỗi:
    // - Nếu hôm nay đã hoàn thành cả 2 nhiệm vụ: đếm lùi từ hôm nay
    // - Nếu hôm nay đang diễn ra (chưa hoàn thành), nhưng hôm qua ĐÃ hoàn thành: chuỗi vẫn giữ từ hôm qua
    // - Nếu hôm qua KHÔNG hoàn thành: chuỗi đứt -> 0
    let startDateStr = null;
    if (completedSet.has(today)) {
      startDateStr = today;
    } else if (completedSet.has(yesterday)) {
      startDateStr = yesterday;
    } else {
      return 0; // Đã mất chuỗi
    }

    let streak = 0;
    const [year, month, day] = startDateStr.split('-').map(Number);
    const curr = new Date(year, month - 1, day);

    while (true) {
      const yyyy = curr.getFullYear();
      const mm = String(curr.getMonth() + 1).padStart(2, '0');
      const dd = String(curr.getDate()).padStart(2, '0');
      const dateStr = `${yyyy}-${mm}-${dd}`;

      if (completedSet.has(dateStr)) {
        streak++;
        curr.setDate(curr.getDate() - 1);
      } else {
        break;
      }
    }

    return streak;
  }

  // Tính toán chuỗi ngày học liên tục dài nhất từ trước đến nay (Kỷ lục chuỗi)
  calculateMaxStreak() {
    const completedSet = new Set(this.state.completedStreakDates || []);
    if (this.isTodayTaskComplete()) {
      completedSet.add(this.getTodayString());
    }

    let calculatedMax = 0;
    if (completedSet.size > 0) {
      const sortedDates = Array.from(completedSet).sort();
      let currentRun = 0;
      let prevDate = null;

      for (const dStr of sortedDates) {
        const [y, m, d] = dStr.split('-').map(Number);
        const currentDate = new Date(y, m - 1, d);

        if (!prevDate) {
          currentRun = 1;
        } else {
          const diffTime = currentDate.getTime() - prevDate.getTime();
          const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
          if (diffDays === 1) {
            currentRun++;
          } else if (diffDays === 0) {
            // trùng ngày
          } else {
            currentRun = 1;
          }
        }

        if (currentRun > calculatedMax) {
          calculatedMax = currentRun;
        }
        prevDate = currentDate;
      }
    }

    const currentStreak = this.calculateCurrentStreak();
    const storedMax = Number(this.state.maxStreak || 0);
    return Math.max(calculatedMax, storedMax, currentStreak);
  }

  async setUser(user) {
    this.isAuthResolving = false;
    this.state.user = user;
    if (user && user.uid) {
      this.hasCachedSession = true;
      this.setCachedUser(user);
      if (typeof document !== 'undefined') {
        document.documentElement.classList.add('user-cached', 'user-authenticated');
      }
      try {
        await this.loadUserFromFirestore(user.uid);
      } catch (err) {
        console.error("Lỗi đồng bộ hồ sơ người dùng:", err);
      }
      this.setCachedProfile(this.state);
      this.notify();
    } else {
      this.clearUser();
    }
  }

  clearUser() {
    this.isAuthResolving = false;
    this.hasCachedSession = false;
    this.setCachedUser(null);
    this.setCachedProfile(null);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem('eimo_learned_words');
      }
    } catch (e) {}
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('user-cached', 'user-authenticated');
    }
    const currentTheme = this.state.theme || "dark";
    this.state = this.getDefaultState(null);
    this.state.theme = currentTheme;
    this.notify();
  }

  setLevel(level) {
    this.state.cefrLevel = level;
    this.state.rankXP = 0; // Reset XP khi làm lại bài test xếp lớp
    this.saveState();
  }

  setAudioEnabled(enabled) {
    this.state.audioEnabled = enabled;
    this.saveState();
  }

  setTheme(theme) {
    this.state.theme = theme;
    this.saveState();
  }

  // Quản lý tiến độ học phim & Khóa học
  markCourseLessonComplete(lessonId) {
    if (!lessonId) return;
    const completedSet = new Set(this.state.completedCourseLessons || []);
    const isFirstTime = !completedSet.has(lessonId);
    completedSet.add(lessonId);
    this.state.completedCourseLessons = Array.from(completedSet);
    if (isFirstTime) {
      this.addXP(25); // Thưởng +25 XP khi hoàn thành bài học phim
    }
    this.saveState();
  }

  isCourseLessonComplete(lessonId) {
    if (!lessonId) return false;
    return (this.state.completedCourseLessons || []).includes(lessonId);
  }

  setCustomLessonDriveLink(lessonId, url) {
    if (!lessonId) return;
    if (!this.state.customLessonDriveLinks || typeof this.state.customLessonDriveLinks !== 'object') {
      this.state.customLessonDriveLinks = {};
    }
    this.state.customLessonDriveLinks[lessonId] = (url || "").trim();
    this.saveState();
  }

  getLessonDriveLink(lesson) {
    if (!lesson) return "";
    return this.state.customLessonDriveLinks?.[lesson.id] || lesson.videoDriveUrl || lesson.videoDriveId || "";
  }
}

export const appState = new StateManager();
