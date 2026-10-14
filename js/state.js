// Quản lý trạng thái ứng dụng (State Management)
// Hỗ trợ đồng bộ đa chiều (Firebase Firestore + LocalStorage)

import { VOCAB_BANK } from './data/vocab-bank.js';
import { authInstance, dbInstance, isFirebaseLive } from './firebase-config.js';

const STORAGE_KEY = "ENGLISH_IS_MY_OWN_STATE_V1";

export const RANK_TIERS = {
  "A1": { current: "A1", next: "A2", label: "A1 (Beginner)", nextLabel: "A2 (Elementary)", requiredXP: 100 },
  "A2": { current: "A2", next: "B1", label: "A2 (Elementary)", nextLabel: "B1 (Intermediate)", requiredXP: 250 },
  "B1": { current: "B1", next: "B2", label: "B1 (Intermediate)", nextLabel: "B2 (Upper-Intermediate)", requiredXP: 600 },
  "B2": { current: "B2", next: "C1", label: "B2 (Upper-Intermediate)", nextLabel: "C1 (Advanced)", requiredXP: 1200 },
  "C1": { current: "C1", next: "Master", label: "C1 (Advanced)", nextLabel: "Mastery", requiredXP: 2500 }
};

export class StateManager {
  constructor() {
    this.state = this.loadInitialState();
    this.listeners = [];
  }

  loadInitialState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    const today = this.getTodayString();
    const yesterday = this.getYesterdayString();

    let defaultState = {
      user: null, // { uid, displayName, email, photoURL }
      cefrLevel: null, // "A1" | "A2" | "B1" | "B2"
      rankXP: 0, // Điểm kinh nghiệm tích lũy của rank hiện tại
      lastActiveDate: null, // "YYYY-MM-DD"
      lastPenaltyCheckDate: null, // Ngày kiểm tra phạt gần nhất
      lastPenaltyNotice: null, // Thông báo phạt gần nhất
      streak: 0,
      learnedWords: [], // Array of { wordId, learnedDate, reviewCount, lastReviewedAt }
      dailyReviewDone: false,
      dailyReviewDate: null,
      dailyNewBatchDone: false,
      dailyNewBatchDate: null,
      audioEnabled: true // Điều khiển âm thanh toàn cục (hỗ trợ "Không thể nghe lúc này")
    };

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        defaultState = { ...defaultState, ...parsed };
      } catch (e) {
        console.error("Lỗi khi đọc state từ localStorage:", e);
      }
    }

    // Reset trạng thái theo ngày mới
    if (defaultState.dailyReviewDate !== today) {
      defaultState.dailyReviewDone = false;
      defaultState.dailyReviewDate = today;
    }
    if (defaultState.dailyNewBatchDate !== today) {
      defaultState.dailyNewBatchDone = false;
      defaultState.dailyNewBatchDate = today;
    }

    // ÁP DỤNG HÌNH PHẠT TỤT PROGRESS x2 NẾU BỎ NGÀY HỌC (LOOSE STREAK)
    if (defaultState.lastActiveDate && defaultState.lastActiveDate !== today && defaultState.lastActiveDate !== yesterday) {
      if (defaultState.lastPenaltyCheckDate !== today) {
        const lastDateObj = new Date(defaultState.lastActiveDate);
        const todayDateObj = new Date(today);
        const diffTime = Math.abs(todayDateObj - lastDateObj);
        const missedDays = Math.max(1, Math.floor(diffTime / (1000 * 60 * 60 * 24)) - 1);
        
        // Bình thường 1 ngày tăng 25 XP (10 review + 15 batch mới).
        // Bỏ 1 ngày bị phạt x2 phần tăng: 25 * 2 = 50 XP/ngày!
        const penaltyXP = missedDays * 50;
        const oldXP = defaultState.rankXP || 0;
        defaultState.rankXP = Math.max(0, oldXP - penaltyXP);
        defaultState.lastPenaltyNotice = `⚠️ Bạn đã bỏ lỡ ${missedDays} ngày! Bị trừ -${penaltyXP} XP (Phạt x2 phần tăng hàng ngày).`;
        defaultState.lastPenaltyCheckDate = today;
        defaultState.streak = 0; // Reset streak
      }
    }

    return defaultState;
  }

  saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    this.notify();
    this.syncToFirestore();
  }

  async syncToFirestore() {
    if (!isFirebaseLive || !dbInstance || !this.state.user) return;
    try {
      const { doc, setDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
      const userRef = doc(dbInstance, "users", this.state.user.uid);
      await setDoc(userRef, {
        displayName: this.state.user.displayName,
        email: this.state.user.email,
        cefrLevel: this.state.cefrLevel,
        lastActiveDate: this.state.lastActiveDate,
        streak: this.state.streak,
        learnedWords: this.state.learnedWords,
        dailyReviewDone: this.state.dailyReviewDone,
        dailyReviewDate: this.state.dailyReviewDate,
        dailyNewBatchDone: this.state.dailyNewBatchDone,
        dailyNewBatchDate: this.state.dailyNewBatchDate,
        updatedAt: new Date().toISOString()
      }, { merge: true });
    } catch (err) {
      console.warn("Lỗi khi đồng bộ Firestore:", err);
    }
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
      // ⚠️ Có vi phạm (Bỏ quên ngày học): Phạt = Từ chưa review hôm trước + 10 từ random trong quá khứ
      isPenalized = true;
      const unreviewed = this.state.learnedWords.filter(w => w.learnedDate === lastActive);
      const historicalPool = this.state.learnedWords.filter(w => w.learnedDate !== lastActive);
      
      // Shuffle lấy 10 từ ngẫu nhiên
      const shuffled = [...historicalPool].sort(() => 0.5 - Math.random());
      const penaltyWords = shuffled.slice(0, 10);
      
      reviewWords = [...unreviewed, ...penaltyWords];
    } else {
      // Học đều đặn: Review các từ học từ phiên gần nhất (ngày hôm qua hoặc ngày cuối cùng học)
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

  // Đánh dấu hoàn thành học Batch 10 từ mới
  markNewBatchComplete(newWordIds) {
    const today = this.getTodayString();
    
    const newItems = newWordIds.map(id => ({
      wordId: id,
      learnedDate: today,
      reviewCount: 0,
      lastReviewedAt: new Date().toISOString()
    }));

    // Thêm các từ mới vào danh sách đã học
    this.state.learnedWords.push(...newItems);
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

    return {
      level,
      nextLevel: tier.next,
      currentLabel: tier.label,
      nextLabel: tier.nextLabel,
      currentXP,
      requiredXP,
      percent,
      remainingXP: Math.max(0, requiredXP - currentXP),
      penaltyNotice: this.state.lastPenaltyNotice,
      levelUpNotice: this.state.lastLevelUpNotice
    };
  }

  updateStreak() {
    const today = this.getTodayString();
    const yesterday = this.getYesterdayString();
    
    if (!this.state.lastActiveDate) {
      this.state.streak = 1;
    } else if (this.state.lastActiveDate === yesterday) {
      this.state.streak += 1;
    } else if (this.state.lastActiveDate !== today) {
      // Đứt chuỗi streak
      this.state.streak = 1;
    }
  }

  setUser(user) {
    this.state.user = user;
    this.saveState();
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
}

export const appState = new StateManager();
