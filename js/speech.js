// Trình phát âm thanh Chuẩn iOS Safari & iPhone (Headphones & Built-in Speaker)
// Thiết kế Dual-Engine chịu lỗi toàn diện (Fault-Tolerant Hybrid):
// 1. Primary Engine: Studio Audio MP3 (dict.youdao.com chuẩn US English)
//    - Phát âm thanh phòng thu người bản xứ 100% tự nhiên, rõ ràng, to và chuẩn xác.
//    - Không bị ảnh hưởng bởi lỗi kẹt hàng đợi Web Speech API trên iOS Safari.
//    - Hoạt động mượt mà qua cả Tai nghe (AirPods/EarPods) và Loa ngoài iPhone.
// 2. Fallback Engine: Web Speech API (window.speechSynthesis)
//    - Tự động kích hoạt khi offline hoặc khi đọc câu ví dụ dài.
//    - Loại bỏ hoàn toàn utterance rỗng gây đóng băng engine trên WebKit.
//    - Chống Safari Garbage Collection và xử lý bất đồng bộ cancel() an toàn.

class SpeechService {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.voice = null;
    this.audioCtx = null;
    this.currentAudio = null;
    this._isUnlocked = false;

    this.initVoice();
    this.setupAudioUnlock();
  }

  // Tự động mở khóa audio pipeline trên iOS Safari ngay từ tương tác chạm đầu tiên
  setupAudioUnlock() {
    if (typeof window === 'undefined') return;

    const unlock = () => {
      if (this._isUnlocked) return;
      this._isUnlocked = true;

      // 1. Mở khóa Web Audio Context bằng buffer câm 1-sample chuẩn Apple
      try {
        const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
        if (AudioCtxClass && !this.audioCtx) {
          this.audioCtx = new AudioCtxClass();
        }
        if (this.audioCtx) {
          if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume().catch(() => {});
          }
          const buffer = this.audioCtx.createBuffer(1, 1, 22050);
          const source = this.audioCtx.createBufferSource();
          source.buffer = buffer;
          source.connect(this.audioCtx.destination);
          source.start(0);
        }
      } catch (e) {}

      // 2. Đánh thức Web Speech API (tuyệt đối KHÔNG gọi speak(' ') vì sẽ làm treo iOS daemon)
      if (this.synth) {
        try {
          if (this.synth.paused) this.synth.resume();
        } catch (e) {}
      }

      window.removeEventListener('touchstart', unlock, true);
      window.removeEventListener('touchend', unlock, true);
      window.removeEventListener('click', unlock, true);
    };

    window.addEventListener('touchstart', unlock, { capture: true, passive: true });
    window.addEventListener('touchend', unlock, { capture: true, passive: true });
    window.addEventListener('click', unlock, { capture: true, passive: true });
  }

  initVoice() {
    if (!this.synth) return;
    const setVoice = () => {
      try {
        const voices = this.synth.getVoices() || [];
        if (!voices || voices.length === 0) return;

        // Ưu tiên giọng tiếng Anh chuẩn Mỹ (en-US)
        this.voice = voices.find(v => (v.lang === 'en-US' || v.lang === 'en_US') && (
          v.name.includes('Samantha') || 
          v.name.includes('Natural') || 
          v.name.includes('Google') || 
          v.name.includes('Aaron') ||
          v.name.includes('Daniel') ||
          v.name.includes('Nicky')
        ))
        || voices.find(v => v.lang === 'en-US' || v.lang === 'en_US')
        || voices.find(v => v.lang && v.lang.toLowerCase().startsWith('en'))
        || null;
      } catch (err) {
        console.warn("Lỗi khi nạp danh sách voice:", err);
      }
    };

    setVoice();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = setVoice;
    }
  }

  cleanText(text) {
    if (!text) return '';
    return text
      .toString()
      .replace(/<[^>]*>/g, '') // Bỏ thẻ HTML
      .replace(/[\*\_\#\~\`]/g, '') // Bỏ ký tự markdown
      .replace(/\s+/g, ' ')
      .trim();
  }

  // Phát âm thanh Native Studio Audio qua thẻ HTML5 Audio
  speakAudioSource(word) {
    return new Promise((resolve, reject) => {
      try {
        if (this.currentAudio) {
          try {
            this.currentAudio.pause();
            this.currentAudio.currentTime = 0;
          } catch (e) {}
          this.currentAudio = null;
        }

        // Endpoint từ vựng US English chuẩn cao cấp (type=2 là US, type=1 là UK)
        const url = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(word)}&type=2`;
        const audio = new Audio(url);
        audio.preload = 'auto';
        this.currentAudio = audio;

        let finished = false;
        const done = (isSuccess, err) => {
          if (finished) return;
          finished = true;
          if (this.currentAudio === audio) this.currentAudio = null;
          if (isSuccess) resolve(true);
          else reject(err || new Error('Audio playback failed'));
        };

        audio.onended = () => done(true);
        audio.onerror = (e) => done(false, e);

        // Timeout 1.2s nếu mạng chập chờn để chuyển sang Web Speech API
        const timer = setTimeout(() => {
          done(false, new Error('Audio load timeout'));
        }, 1200);

        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => clearTimeout(timer))
            .catch((err) => {
              clearTimeout(timer);
              done(false, err);
            });
        }
      } catch (err) {
        reject(err);
      }
    });
  }

  // Phát âm qua Web Speech API dự phòng (Harden cho iOS Safari)
  speakSynth(clean, rate = 0.9) {
    if (!this.synth) return;

    try {
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume().catch(() => {});
      }

      if (this.synth.paused) {
        this.synth.resume();
      }

      const utterance = new SpeechSynthesisUtterance(clean);
      utterance.lang = 'en-US';
      utterance.rate = Math.max(0.65, Math.min(rate, 1.2));
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      if (this.voice) {
        utterance.voice = this.voice;
      }

      // Giữ tham chiếu toàn cục chống Safari Garbage Collection
      if (typeof window !== 'undefined') {
        window.__activeUtterance = utterance;
      }

      utterance.onend = () => {
        if (typeof window !== 'undefined' && window.__activeUtterance === utterance) {
          window.__activeUtterance = null;
        }
      };

      utterance.onerror = (e) => {
        console.warn("Lỗi Web Speech:", e);
        if (typeof window !== 'undefined' && window.__activeUtterance === utterance) {
          window.__activeUtterance = null;
        }
      };

      if (this.synth.speaking) {
        this.synth.cancel();
        setTimeout(() => {
          this.synth.speak(utterance);
          if (this.synth.paused) this.synth.resume();
        }, 40);
      } else {
        this.synth.speak(utterance);
        if (this.synth.paused) this.synth.resume();
      }
    } catch (err) {
      console.warn("Lỗi khi phát âm native synth:", err);
    }
  }

  // Phát âm thanh tiếng Anh (Tự động chọn Studio Audio cho từ vựng hoặc Web Speech cho câu)
  async speak(text, rate = 0.9) {
    const clean = this.cleanText(text);
    if (!clean) return;

    // Đánh thức Web Audio Context
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume().catch(() => {});
    }

    // Từ vựng đơn hoặc cụm từ ngắn (<= 4 từ): Ưu tiên âm thanh phòng thu bản xứ chuẩn US
    const words = clean.split(/\s+/);
    if (words.length <= 4) {
      try {
        await this.speakAudioSource(clean);
        return;
      } catch (err) {
        // Fallback sang Web Speech API nếu lỗi hoặc offline
        console.log("Chuyển sang Web Speech API fallback:", err?.message || err);
      }
    }

    // Câu dài hoặc khi Audio Source lỗi
    this.speakSynth(clean, rate);
  }

  // Phát tiếng chuông báo Web Audio hai âm điệu (Kiểm tra phần cứng loa / tai nghe)
  playChime() {
    try {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtxClass) return;
      if (!this.audioCtx) {
        this.audioCtx = new AudioCtxClass();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const now = this.audioCtx.currentTime;

      // Tone 1: C5 (523.25 Hz)
      const osc1 = this.audioCtx.createOscillator();
      const gain1 = this.audioCtx.createGain();
      osc1.frequency.setValueAtTime(523.25, now);
      gain1.gain.setValueAtTime(0.2, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc1.connect(gain1);
      gain1.connect(this.audioCtx.destination);
      osc1.start(now);
      osc1.stop(now + 0.18);

      // Tone 2: E5 (659.25 Hz)
      const osc2 = this.audioCtx.createOscillator();
      const gain2 = this.audioCtx.createGain();
      osc2.frequency.setValueAtTime(659.25, now + 0.1);
      gain2.gain.setValueAtTime(0.22, now + 0.1);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc2.connect(gain2);
      gain2.connect(this.audioCtx.destination);
      osc2.start(now + 0.1);
      osc2.stop(now + 0.35);
    } catch (e) {
      console.warn("Lỗi phát chuông thử nghiệm:", e);
    }
  }

  // Chức năng chẩn đoán & thử nghiệm âm thanh hoàn chỉnh
  testAudio() {
    this.playChime();
    setTimeout(() => {
      this.speak("Hello! Welcome to English is My Own");
    }, 180);
  }

  stop() {
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch (e) {}
      this.currentAudio = null;
    }
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {}
    }
  }
}

export const speechService = new SpeechService();
