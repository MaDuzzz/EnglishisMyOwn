// Trình phát âm thanh bằng Web Speech API (Hoàn toàn miễn phí, chạy native trên trình duyệt)
class SpeechService {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.voice = null;
    this.initVoice();
  }

  initVoice() {
    if (!this.synth) return;
    const setVoice = () => {
      const voices = this.synth.getVoices();
      // Ưu tiên giọng tiếng Anh chuẩn Mỹ (en-US)
      this.voice = voices.find(v => v.lang === 'en-US' && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Aaron')))
                || voices.find(v => v.lang === 'en-US')
                || voices.find(v => v.lang.startsWith('en'))
                || null;
    };

    setVoice();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = setVoice;
    }
  }

  speak(text, rate = 0.9) {
    if (!this.synth) {
      console.warn("Trình duyệt không hỗ trợ Web Speech API.");
      return;
    }

    try {
      this.synth.cancel(); // Dừng câu trước đó nếu đang đọc dở
      const utterance = new SpeechSynthesisUtterance(text);
      if (this.voice) {
        utterance.voice = this.voice;
      }
      utterance.lang = 'en-US';
      utterance.rate = rate; // Đọc với tốc độ vừa phải, rõ ràng cho người học
      utterance.pitch = 1.0;
      this.synth.speak(utterance);
    } catch (err) {
      console.error("Lỗi khi phát âm:", err);
    }
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
  }
}

export const speechService = new SpeechService();
