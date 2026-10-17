// Trình phát âm thanh Đa Kênh (Dual-Engine Audio Service)
// Hỗ trợ tối ưu cho iOS Safari, chống ngắt tiếng khi iPhone gạt rung (Silent Switch)

class SpeechService {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.voice = null;
    this.audio = typeof Audio !== 'undefined' ? new Audio() : null;
    this._currentUtterance = null;
    this._isUnlocked = false;

    // Chế độ phát âm:
    // 'media': Dùng HTML5 Audio (Google TTS stream) - Chạy qua kênh Media Playback, KHÔNG BỊ TẮT bởi nút gạt rung iPhone!
    // 'native': Dùng Web Speech API native của trình duyệt
    this.engine = (typeof localStorage !== 'undefined' && localStorage.getItem('vocab_speech_engine')) || 'media';

    this.initVoice();
    this.setupAudioUnlock();
  }

  // Tự động mở khóa audio context trên iOS Safari ngay từ tương tác đầu tiên của người dùng
  setupAudioUnlock() {
    if (typeof window === 'undefined') return;

    const unlock = () => {
      if (this._isUnlocked) return;
      this._isUnlocked = true;

      // 1. Mở khóa Web Speech API (nếu có)
      if (this.synth) {
        try {
          const u = new SpeechSynthesisUtterance(' ');
          u.volume = 0.01;
          this.synth.speak(u);
        } catch (e) {}
      }

      // 2. Mở khóa HTML5 Audio element trên iOS
      if (this.audio) {
        try {
          // Đoạn âm thanh wav 1 mẫu im lặng để unlock kênh Media
          this.audio.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
          const p = this.audio.play();
          if (p !== undefined) {
            p.then(() => {
              this.audio.pause();
              this.audio.currentTime = 0;
            }).catch(() => {});
          }
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

        // Ưu tiên giọng tiếng Anh chuẩn Mỹ (en-US) tự nhiên
        this.voice = voices.find(v => v.lang === 'en-US' && (
          v.name.includes('Samantha') || 
          v.name.includes('Natural') || 
          v.name.includes('Google') || 
          v.name.includes('Aaron') ||
          v.name.includes('Daniel')
        ))
        || voices.find(v => v.lang === 'en-US')
        || voices.find(v => v.lang && v.lang.toLowerCase().startsWith('en'))
        || voices[0]
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

  // Phát âm chính
  speak(text, rate = 0.9) {
    const clean = this.cleanText(text);
    if (!clean) return;

    // Dừng mọi âm thanh đang phát dở
    this.stop();

    // Nếu chọn kênh 'media' (hoặc mặc định) và có kết nối mạng, phát qua Media Audio stream
    // Giúp iPhone phát ra loa to rõ ngay cả khi gạt nút rung / im lặng!
    if (this.engine === 'media' && navigator.onLine && clean.length <= 180) {
      this.speakMedia(clean, rate);
    } else {
      this.speakNative(clean, rate);
    }
  }

  // Kênh 1: Media Audio (Google TTS stream) - Vượt qua nút gạt rung của iOS
  speakMedia(text, rate = 0.9) {
    try {
      if (!this.audio) {
        this.audio = new Audio();
      }

      this.audio.pause();
      this.audio.currentTime = 0;

      const encoded = encodeURIComponent(text);
      // Sử dụng Google TTS API stream audio/mpeg trực tiếp
      const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=${encoded}`;

      this.audio.src = url;
      // Điều chỉnh tốc độ đọc (0.5x - 2.0x)
      this.audio.playbackRate = Math.max(0.6, Math.min(rate, 1.8));
      this.audio.preservesPitch = true;

      const playPromise = this.audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Media Audio play bị chặn hoặc lỗi mạng, tự động fallback sang Web Speech API:", err);
          this.speakNative(text, rate);
        });
      }
    } catch (err) {
      console.warn("Lỗi khởi chạy Media Audio, fallback sang Native:", err);
      this.speakNative(text, rate);
    }
  }

  // Kênh 2: Native Web Speech API - Dành cho khi offline hoặc câu dài
  speakNative(text, rate = 0.9) {
    if (!this.synth) {
      console.warn("Trình duyệt không hỗ trợ Web Speech API.");
      return;
    }

    try {
      // Workaround chống treo trên iOS Safari: Resume nếu đang paused
      if (this.synth.paused) {
        this.synth.resume();
      }
      this.synth.cancel();

      if (!this.voice) {
        this.initVoice();
      }

      const utterance = new SpeechSynthesisUtterance(text);
      if (this.voice) {
        utterance.voice = this.voice;
      }
      utterance.lang = 'en-US';
      utterance.rate = Math.max(0.6, Math.min(rate, 1.5));
      utterance.pitch = 1.0;

      // Giữ tham chiếu để tránh lỗi Safari Garbage Collector huỷ âm thanh giữa chừng
      this._currentUtterance = utterance;
      utterance.onend = () => {
        this._currentUtterance = null;
      };
      utterance.onerror = (e) => {
        console.warn("Lỗi SpeechSynthesisUtterance:", e);
        this._currentUtterance = null;
      };

      this.synth.speak(utterance);

      // Đảm bảo Safari không tự động pause
      if (this.synth.paused) {
        this.synth.resume();
      }
    } catch (err) {
      console.error("Lỗi khi phát âm native:", err);
    }
  }

  stop() {
    if (this.audio) {
      try {
        this.audio.pause();
        this.audio.currentTime = 0;
      } catch (e) {}
    }
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {}
    }
    this._currentUtterance = null;
  }

  // Cho phép chuyển đổi chế độ nếu cần
  setEngine(mode) {
    if (mode === 'media' || mode === 'native') {
      this.engine = mode;
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('vocab_speech_engine', mode);
      }
    }
  }

  getEngine() {
    return this.engine;
  }
}

export const speechService = new SpeechService();
