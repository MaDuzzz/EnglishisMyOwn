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
    const hasFbSession = this.hasFirebaseStoredSession();

    if (cachedUser && cachedUser.uid) {
      // Có sẵn phiên đăng nhập từ cache -> Mở khóa giao diện đã đăng nhập tức thì (0ms)
      this.state = {
        ...this.getDefaultState(cachedUser),
        ...(cachedProfile || {}),
        user: cachedUser
      };
      this.hasCachedSession = true;
      this.isAuthResolving = true; // Firebase đang âm thầm xác thực ngầm
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
        localStorage.setItem('eimo_auth_profile', JSON.stringify({
          cefrLevel: profile.cefrLevel || null,
          rankXP: profile.rankXP || 0,
          streak: profile.streak || 0,
          maxStreak: profile.maxStreak || 0,
          theme: profile.theme || 'dark',
          dailyReviewDone: profile.dailyReviewDone || false,
          dailyReviewDate: profile.dailyReviewDate || null,
          dailyNewBatchDone: profile.dailyNewBatchDone || false,
          dailyNewBatchDate: profile.dailyNewBatchDate || null
        }));
      } else {
        localStorage.removeItem('eimo_auth_profile');
      }
    } catch (e) {}
  }

  hasFirebaseStoredSession() {
    try {
      if (typeof window === 'undefined' || !window.localStorage) return false;
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && (key.startsWith('firebase:authUser:') || key.startsWith('firebase:host:'))) {
          return true;
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
      dailyNewBatchDone: false,
      dailyNewBatchDate: today,
      audioEnabled: true, // Điều khiển âm thanh toàn cục
      theme: "dark", // "dark" | "light"
      vocabGroups: VOCAB_GROUPS // Danh sách nhóm từ vựng (hỗ trợ sync với Firestore)
    };
  }

  // Tải dữ liệu người dùng từ Cloud Firestore
  async loadUserFromFirestore(uid) {
    if (!isFirebaseLive || !dbInstance || !uid) return;
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
        // Kiểm tra reset ngày mới và hình phạt
        this.applyDailyCheck();
        // Cập nhật lại Firestore nếu có thay đổi từ kiểm tra ngày
        await this.syncToFirestore();
        this.setCachedProfile(this.state);
      } else {
        // Tạo profile mới trên Firestore nếu lần đầu đăng nhập
        const initialDoc = {
          displayName: this.state.user?.displayName || "",
          email: this.state.user?.email || "",
          photoURL: this.state.user?.photoURL || "",
          createdAt: new Date().toISOString(),
          cefrLevel: null,
          rankXP: 0,
          streak: 0,
          learnedWords: [],
          dailyReviewDone: false,
          dailyReviewDate: this.getTodayString(),
          dailyNewBatchDone: false,
          dailyNewBatchDate: this.getTodayString(),
          audioEnabled: true
        };
        await setDoc(userRef, initialDoc, { merge: true });
        this.setCachedProfile(this.state);
      }
      this.notify();
    } catch (err) {
      console.error("❌ Lỗi khi tải dữ liệu từ Firestore:", err);
    }
  }

  // Kiểm tra ngày mới và áp dụng hình phạt kỷ luật
  applyDailyCheck() {
    const today = this.getTodayString();
    const yesterday = this.getYesterdayString();

    if (this.state.dailyReviewDate !== today) {
      this.state.dailyReviewDone = false;
      this.state.dailyReviewDate = today;
    }
    if (this.state.dailyNewBatchDate !== today) {
      this.state.dailyNewBatchDone = false;
      this.state.dailyNewBatchDate = today;
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
    this.state.streak = this.calculateCurrentStreak();
    this.state.maxStreak = this.calculateMaxStreak();
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
        learnedWords: this.state.learnedWords || [],
        dailyReviewDone: this.state.dailyReviewDone || false,
        dailyReviewDate: this.state.dailyReviewDate || this.getTodayString(),
        dailyNewBatchDone: this.state.dailyNewBatchDone || false,
        dailyNewBatchDate: this.state.dailyNewBatchDate || this.getTodayString(),
        audioEnabled: this.state.audioEnabled ?? true,
        theme: this.state.theme || "dark",
        updatedAt: new Date().toISOString()
      }, { merge: true });
    } catch (err) {
      console.warn("⚠️ Lỗi khi đồng bộ Firestore:", err);
    }
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

  // Phân tích trạng thái kỷ luật & Cơ chế Phạt (Penalty System)
  calculateDisciplineStatus() {
    const today = this.getTodayString();
    const yesterday = this.getYesterdayString();
    const lastActive = this.state.lastActiveDate;

    // Nếu chưa học từ nào
    if (this.state.learnedWords.length === 0) {
      return {
        needsReview: false,
        isPenalized: false,
        missedDays: 0,
        reviewWords: [],
        reason: "Chào mừng bạn! Hãy bắt đầu với 10 từ vựng đầu tiên."
      };
    }

    // Nếu hôm nay đã hoàn thành review
    if (this.state.dailyReviewDone) {
      return {
        needsReview: false,
        isPenalized: false,
        missedDays: 0,
        reviewWords: [],
        reason: "Tuyệt vời! Bạn đã hoàn thành bài ôn tập của ngày hôm nay."
      };
    }

    // Xác định số ngày bỏ quên (Missed Days)
    let missedDays = 0;
    if (lastActive && lastActive !== today && lastActive !== yesterday) {
      const lastDateObj = new Date(lastActive);
      const todayDateObj = new Date(today);
      const diffTime = Math.abs(todayDateObj - lastDateObj);
      missedDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) - 1;
    }

    // Gom danh sách từ cần review
    let reviewWords = [];
    let isPenalized = false;

    if (missedDays > 0) {
      // Có vi phạm: Phạt = Từ chưa review hôm trước + 10 từ random trong quá khứ
      isPenalized = true;
      const unreviewed = this.state.learnedWords.filter(w => w.learnedDate === lastActive);
      const historicalPool = this.state.learnedWords.filter(w => w.learnedDate !== lastActive);
      
      // Shuffle lấy 10 từ ngẫu nhiên
      const shuffled = [...historicalPool].sort(() => 0.5 - Math.random());
      const penaltyWords = shuffled.slice(0, 10);
      
      reviewWords = [...unreviewed, ...penaltyWords];
    } else {
      // Học đều đặn: Review các từ học từ phiên gần nhất
      reviewWords = this.state.learnedWords.filter(w => w.learnedDate === (lastActive || yesterday));
      if (reviewWords.length === 0) {
        // Fallback: nếu phiên trước không có, lấy 10 từ có reviewCount thấp nhất
        reviewWords = [...this.state.learnedWords]
          .sort((a, b) => a.reviewCount - b.reviewCount)
          .slice(0, 10);
      }
    }

    // Nếu reviewWords vẫn rỗng mà chưa hoàn thành review hôm nay, lấy tối đa 10 từ bất kỳ
    if (reviewWords.length === 0 && this.state.learnedWords.length > 0) {
      reviewWords = this.state.learnedWords.slice(0, 10);
    }

    return {
      needsReview: reviewWords.length > 0,
      isPenalized,
      missedDays,
      reviewWords,
      reason: isPenalized 
        ? `⚠️ Bạn đã bỏ quên ${missedDays} ngày! Hệ thống áp dụng hình phạt: Ôn lại ${reviewWords.length} từ (gồm từ phiên trước + 10 từ cũ ngẫu nhiên) để củng cố trí nhớ.`
        : `Bạn có ${reviewWords.length} từ cần ôn tập lại từ phiên hôm qua trước khi mở khoá 10 từ mới.`
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

  // Đánh dấu hoàn thành Review hôm nay
  markReviewComplete(reviewedWordIds) {
    const today = this.getTodayString();
    
    // Tăng reviewCount cho các từ vừa review
    this.state.learnedWords = this.state.learnedWords.map(w => {
      if (reviewedWordIds.includes(w.wordId)) {
        return {
          ...w,
          reviewCount: (w.reviewCount || 0) + 1,
          lastReviewedAt: new Date().toISOString()
        };
      }
      return w;
    });

    this.state.dailyReviewDone = true;
    this.state.dailyReviewDate = today;
    this.state.lastActiveDate = today;

    // Tăng +10 XP cho bài Review
    this.addXP(10);

    // Cập nhật streak nếu chưa cập nhật hôm nay
    this.updateStreak();
    this.saveState();
  }

  // Lấy danh sách ứng viên từ mới phong phú cho phiên thẩm thấu Giai đoạn 1
  getNewBatchCandidates() {
    const level = this.state.cefrLevel || "A1";
    const learnedIds = new Set((this.state.learnedWords || []).map(w => w.wordId));
    
    const unlearned = VOCAB_BANK.filter(w => !learnedIds.has(w.id));
    const primary = unlearned.filter(w => w.level === level);
    const secondary = unlearned.filter(w => w.level !== level);

    const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());
    return [...shuffle(primary), ...shuffle(secondary)];
  }

  // Đánh dấu hoàn thành học Batch 10 từ mới (kèm danh sách từ đã biết bỏ qua)
  markNewBatchComplete(newWordIds, skippedKnownWordIds = []) {
    const today = this.getTodayString();
    const existingIds = new Set((this.state.learnedWords || []).map(w => w.wordId));
    
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

    // Thêm cả 2 nhóm vào danh sách để lên lịch ôn tập T+1 vào ngày mai
    this.state.learnedWords.push(...newItems, ...knownItems);
    this.state.dailyNewBatchDone = true;
    this.state.dailyNewBatchDate = today;
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

  updateStreak() {
    this.state.streak = this.calculateCurrentStreak();
    this.state.maxStreak = this.calculateMaxStreak();
  }

  // Tính toán chuỗi ngày học liên tục (Streak) dựa trên dữ liệu thực tế
  calculateCurrentStreak() {
    const activeDates = new Set();
    (this.state.learnedWords || []).forEach(w => {
      if (w.learnedDate) activeDates.add(w.learnedDate);
    });
    if (this.state.lastActiveDate) {
      activeDates.add(this.state.lastActiveDate);
    }

    if (activeDates.size === 0) return 0;

    const today = this.getTodayString();
    const yesterday = this.getYesterdayString();

    let checkDateStr;
    if (activeDates.has(today)) {
      checkDateStr = today;
    } else if (activeDates.has(yesterday)) {
      checkDateStr = yesterday;
    } else {
      // Đã bỏ lỡ từ 2 ngày trở lên -> chuỗi bị đứt về 0
      return 0;
    }

    let streak = 0;
    const [year, month, day] = checkDateStr.split('-').map(Number);
    const curr = new Date(year, month - 1, day);

    while (true) {
      const yyyy = curr.getFullYear();
      const mm = String(curr.getMonth() + 1).padStart(2, '0');
      const dd = String(curr.getDate()).padStart(2, '0');
      const dateStr = `${yyyy}-${mm}-${dd}`;

      if (activeDates.has(dateStr)) {
        streak++;
        // Lùi về 1 ngày trước đó
        curr.setDate(curr.getDate() - 1);
      } else {
        break;
      }
    }

    return streak;
  }

  // Tính toán chuỗi ngày học liên tục dài nhất từ trước đến nay (Kỷ lục chuỗi)
  calculateMaxStreak() {
    const activeDates = new Set();
    (this.state.learnedWords || []).forEach(w => {
      if (w.learnedDate) activeDates.add(w.learnedDate);
    });
    if (this.state.lastActiveDate) {
      activeDates.add(this.state.lastActiveDate);
    }

    let calculatedMax = 0;
    if (activeDates.size > 0) {
      // Sắp xếp các ngày tăng dần theo thứ tự thời gian
      const sortedDates = Array.from(activeDates).sort();
      let currentStreak = 0;
      let prevDate = null;

      for (const dStr of sortedDates) {
        const [y, m, d] = dStr.split('-').map(Number);
        const currentDate = new Date(y, m - 1, d);

        if (!prevDate) {
          currentStreak = 1;
        } else {
          const diffTime = currentDate.getTime() - prevDate.getTime();
          const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
          if (diffDays === 1) {
            currentStreak++;
          } else if (diffDays === 0) {
            // Cùng 1 ngày
          } else {
            currentStreak = 1;
          }
        }

        if (currentStreak > calculatedMax) {
          calculatedMax = currentStreak;
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
      await this.loadUserFromFirestore(user.uid);
      this.setCachedProfile(this.state);
    } else {
      this.clearUser();
    }
  }

  clearUser() {
    this.isAuthResolving = false;
    this.hasCachedSession = false;
    this.setCachedUser(null);
    this.setCachedProfile(null);
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
}

export const appState = new StateManager();
