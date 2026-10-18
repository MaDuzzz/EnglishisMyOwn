// Trình phát âm thanh Chuẩn iOS Safari & iPhone (Headphones & Built-in Speaker)
// Tối ưu hoá triệt để chống nghẽn hàng đợi, chống Safari Garbage Collection và hỗ trợ kiểm tra âm thanh

class SpeechService {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.voice = null;
    this.audioCtx = null;
    this._activeUtterances = new Set();
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

      // 1. Mở khóa Web Audio Context
      try {
        const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
        if (AudioCtxClass && !this.audioCtx) {
          this.audioCtx = new AudioCtxClass();
        }
        if (this.audioCtx && this.audioCtx.state === 'suspended') {
          this.audioCtx.resume().catch(() => {});
        }
      } catch (e) {}

      // 2. Mở khóa Web Speech API bằng một utterance rỗng
      if (this.synth) {
        try {
          if (this.synth.paused) this.synth.resume();
          const u = new SpeechSynthesisUtterance(' ');
          u.volume = 0.01;
          this.synth.speak(u);
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

        // Ưu tiên giọng tiếng Anh chuẩn Mỹ (en-US) tự nhiên chất lượng cao
        this.voice = voices.find(v => v.lang === 'en-US' && (
          v.name.includes('Samantha') || 
          v.name.includes('Natural') || 
          v.name.includes('Google') || 
          v.name.includes('Aaron') ||
          v.name.includes('Daniel') ||
          v.name.includes('Nicky') ||
          v.name.includes('Fred')
        ))
        || voices.find(v => v.lang === 'en-US')
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

  // Phát âm thanh tiếng Anh chuẩn (Đồng bộ trực tiếp trong User Gesture)
  speak(text, rate = 0.9) {
    const clean = this.cleanText(text);
    if (!clean) return;

    if (!this.synth) {
      console.warn("Trình duyệt không hỗ trợ Web Speech API.");
      return;
    }

    try {
      // 1. Đánh thức AudioContext nếu đang sleep
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume().catch(() => {});
      }

      // 2. Chống kẹt trạng thái paused trên iOS Safari
      if (this.synth.paused) {
        this.synth.resume();
      }

      // 3. Nếu đang phát âm thanh cũ, huỷ để nói từ mới
      if (this.synth.speaking) {
        this.synth.cancel();
      }

      if (!this.voice) {
        this.initVoice();
      }

      const utterance = new SpeechSynthesisUtterance(clean);
      utterance.lang = 'en-US';
      utterance.rate = Math.max(0.6, Math.min(rate, 1.3));
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      if (this.voice) {
        utterance.voice = this.voice;
      }

      // 4. Giữ tham chiếu mạnh chống Safari Garbage Collector huỷ âm thanh giữa chừng
      this._activeUtterances.add(utterance);
      utterance.onend = () => {
        this._activeUtterances.delete(utterance);
      };
      utterance.onerror = (e) => {
        console.warn("Lỗi phát âm:", e);
        this._activeUtterances.delete(utterance);
      };

      // 5. Phát âm đồng bộ ngay lập tức
      this.synth.speak(utterance);

      // 6. Safeguard cho Safari nếu bị paused
      if (this.synth.paused) {
        this.synth.resume();
      }
    } catch (err) {
      console.error("Lỗi khi phát âm native:", err);
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
      gain1.gain.setValueAtTime(0.18, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc1.connect(gain1);
      gain1.connect(this.audioCtx.destination);
      osc1.start(now);
      osc1.stop(now + 0.18);

      // Tone 2: E5 (659.25 Hz)
      const osc2 = this.audioCtx.createOscillator();
      const gain2 = this.audioCtx.createGain();
      osc2.frequency.setValueAtTime(659.25, now + 0.1);
      gain2.gain.setValueAtTime(0.2, now + 0.1);
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
      this.speak("Hello! English audio is working properly.");
    }, 220);
  }

  stop() {
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {}
    }
    this._activeUtterances.clear();
  }
}

export const speechService = new SpeechService();
