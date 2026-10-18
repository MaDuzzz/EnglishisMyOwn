// Trình phát âm thanh Chuẩn iOS Safari & iPhone (Headphones & Built-in Speaker)
// Thiết kế Dual-Engine chịu lỗi toàn diện (Fault-Tolerant Hybrid):
// 1. Primary Engine: Studio & Neural Audio MP3 (Google TTS & Youdao Audio chuẩn US English)
//    - Phát âm thanh phòng thu người bản xứ 100% tự nhiên, rõ ràng, to và chuẩn xác.
//    - Tự động tối ưu: Từ vựng dùng Youdao Studio Audio, Câu ví dụ dùng Google Translate Neural TTS.
//    - Không bị ảnh hưởng bởi lỗi kẹt hàng đợi Web Speech API trên iOS Safari.
//    - Hoạt động mượt mà qua cả Tai nghe (AirPods/EarPods) và Loa ngoài iPhone.
// 2. Fallback Engine: Web Speech API (window.speechSynthesis)
//    - Tự động kích hoạt khi offline hoặc khi mất kết nối mạng.
//    - Bảo vệ WebKit iOS chống crash bằng cách không gán enhanced voice gây câm tiếng.
//    - Chống Safari Garbage Collection và xử lý bất đồng bộ an toàn.

class SpeechService {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.voice = null;
    this.audioCtx = null;
    this.currentAudio = null;
    this._isUnlocked = false;
    this._playSessionId = 0;

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
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, '&')
      .replace(/<[^>]*>/g, '') // Bỏ thẻ HTML
      .replace(/[\*\_\#\~\`]/g, '') // Bỏ ký tự markdown
      .replace(/^[\s"“'”«»\(\)\[\]]+|[\s"“'”«»\(\)\[\]]+$/g, '') // Bỏ dấu ngoặc kép, ngoặc đơn bọc ngoài cùng
      .replace(/\s+/g, ' ')
      .trim();
  }

  // Lấy danh sách URL âm thanh MP3 ưu tiên theo loại nội dung (từ vựng vs câu ví dụ)
  getAudioUrls(text) {
    const encoded = encodeURIComponent(text);
    const words = text.split(/\s+/);

    // Với từ vựng / cụm từ ngắn (<= 3 từ):
    //   1. Youdao dictvoice (phát âm bản xứ chuẩn phòng thu US chất lượng cao nhất)
    //   2. Google Translate TTS (dự phòng)
    // Với câu ví dụ dài (> 3 từ):
    //   1. Google Translate TTS (ngữ điệu câu chuẩn, nối âm mượt mà)
    //   2. Youdao dictvoice (dự phòng)
    if (words.length <= 3) {
      return [
        `https://dict.youdao.com/dictvoice?audio=${encoded}&type=2`,
        `https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=${encoded}`
      ];
    } else {
      return [
        `https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=${encoded}`,
        `https://dict.youdao.com/dictvoice?audio=${encoded}&type=2`
      ];
    }
  }

  // Phát một URL âm thanh cụ thể
  playAudioUrl(url, sessionId) {
    return new Promise((resolve, reject) => {
      if (sessionId && this._playSessionId !== sessionId) {
        return reject(new Error('Session cancelled'));
      }

      try {
        if (this.currentAudio) {
          try {
            this.currentAudio.pause();
            this.currentAudio.currentTime = 0;
          } catch (e) {}
          this.currentAudio = null;
        }

        const audio = new Audio();
        audio.referrerPolicy = 'no-referrer';
        audio.preload = 'auto';
        this.currentAudio = audio;

        let finished = false;
        let timer = null;

        const done = (isSuccess, err) => {
          if (finished) return;
          finished = true;
          if (timer) {
            clearTimeout(timer);
            timer = null;
          }
          if (this.currentAudio === audio) this.currentAudio = null;
          if (isSuccess) resolve(true);
          else reject(err || new Error('Audio playback failed'));
        };

        audio.onended = () => done(true);
        audio.onerror = (e) => done(false, e);

        // Timeout 2.5s nếu mạng chập chờn để chuyển nguồn dự phòng
        timer = setTimeout(() => {
          done(false, new Error('Audio load timeout'));
        }, 2500);

        audio.src = url;
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              if (sessionId && this._playSessionId !== sessionId) {
                try { audio.pause(); } catch (e) {}
                done(false, new Error('Session cancelled'));
                return;
              }
              // Bắt đầu phát thành công, hủy timeout chờ kết thúc bài phát
              if (timer) {
                clearTimeout(timer);
                timer = null;
              }
            })
            .catch((err) => {
              done(false, err);
            });
        }
      } catch (err) {
        reject(err);
      }
    });
  }

  // Phát Native Studio Audio qua danh sách URL ưu tiên
  async speakAudioSource(text, sessionId) {
    const urls = this.getAudioUrls(text);
    for (const url of urls) {
      if (sessionId && this._playSessionId !== sessionId) return;
      try {
        await this.playAudioUrl(url, sessionId);
        return true;
      } catch (err) {
        if (sessionId && this._playSessionId !== sessionId) return;
        console.warn("Nguồn audio lỗi, thử nguồn tiếp theo:", err?.message || err);
      }
    }
    throw new Error('Tất cả nguồn Audio MP3 đều thất bại');
  }

  // Phát âm qua Web Speech API dự phòng (Harden chống lỗi iOS Safari)
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

      // WebKit bug 225344: Trên iOS, gán utterance.voice khiến Web Speech API câm tiếng hoàn toàn.
      // Chỉ gán utterance.voice trên các thiết bị không phải iOS (Android, Windows, Mac desktop).
      const isIOS = typeof navigator !== 'undefined' && (
        /iPad|iPhone|iPod/.test(navigator.userAgent || '') ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
      );

      if (!isIOS && this.voice) {
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
        }, 50);
      } else {
        this.synth.speak(utterance);
        if (this.synth.paused) this.synth.resume();
      }
    } catch (err) {
      console.warn("Lỗi khi phát âm native synth:", err);
    }
  }

  // Phát âm thanh tiếng Anh (Tự động phát âm thanh phòng thu / neural MP3 cho cả từ và câu, fallback Web Speech)
  async speak(text, rate = 0.9) {
    const clean = this.cleanText(text);
    if (!clean) return;

    const playSessionId = ++this._playSessionId;
    this.stop();

    // Đánh thức Web Audio Context nếu đang suspended
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume().catch(() => {});
    }

    try {
      await this.speakAudioSource(clean, playSessionId);
      return;
    } catch (err) {
      if (this._playSessionId !== playSessionId) return;
      console.log("Audio Source fallback sang Web Speech API:", err?.message || err);
      this.speakSynth(clean, rate);
    }
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
