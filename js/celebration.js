// ==============================================================================
// CELEBRATION ENGINE (Hiệu ứng pháo hoa giấy & Kèn chiến thắng)
// - Pháo hoa giấy (Confetti Side Cannons): Bắn 2 bên góc dưới màn hình hướng vào giữa
// - Tiếng kèn chúc mừng (Celebratory Trumpet Fanfare): Tổng hợp Web Audio 2 bè kèn đồng
// - Haptic Vibrate: Rung phản hồi ăn mừng trên mobile
// - Chịu lỗi 100% offline (Fallback Canvas Confetti khi không có mạng)
// ==============================================================================

import { speechService } from './speech.js';
import { appState } from './state.js';

class CelebrationEngine {
  constructor() {
    this.audioCtx = null;
    this.isFiring = false;
  }

  // Khởi tạo hoặc tái sử dụng AudioContext an toàn trên iOS Safari
  getAudioContext() {
    if (speechService && speechService.audioCtx) {
      if (speechService.audioCtx.state === 'suspended') {
        speechService.audioCtx.resume().catch(() => {});
      }
      return speechService.audioCtx;
    }

    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (AudioCtxClass) {
        this.audioCtx = new AudioCtxClass();
      }
    }

    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume().catch(() => {});
    }

    return this.audioCtx;
  }

  // ----------------------------------------------------------------------------
  // 1. TIẾNG KÈN CHÚC MỪNG (CELEBRATORY TRUMPET FANFARE) & POPPER
  // ----------------------------------------------------------------------------
  playTrumpetFanfare() {
    // Kiểm tra cài đặt âm thanh toàn cục
    if (appState && appState.state && appState.state.audioEnabled === false) {
      return;
    }

    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;

      // Master Gain để kiểm soát âm lượng tổng
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.35, now);
      masterGain.connect(ctx.destination);

      // --- Tiếng nổ pháo giấy (Party Poppers: Trái & Phải) ---
      this.playPopperSound(ctx, masterGain, now);
      this.playPopperSound(ctx, masterGain, now + 0.08);

      // --- Kèn Đồng Chiến Thắng (Brass Trumpet Fanfare - 2 Bè Hòa Âm) ---
      // Giai điệu: C5 -> C5 -> C5 -> G5 -> E5 -> G5 -> C6 (Triumph Hold)
      // Bè đệm (Horn): G4 -> G4 -> G4 -> E5 -> C5 -> E5 -> G5
      const notesVoice1 = [
        { freq: 523.25, time: 0.04, dur: 0.10 }, // C5
        { freq: 523.25, time: 0.17, dur: 0.10 }, // C5
        { freq: 523.25, time: 0.30, dur: 0.10 }, // C5
        { freq: 783.99, time: 0.43, dur: 0.36 }, // G5 (Dài)
        { freq: 659.25, time: 0.85, dur: 0.13 }, // E5
        { freq: 783.99, time: 1.00, dur: 0.13 }, // G5
        { freq: 1046.50, time: 1.15, dur: 0.95, vibrato: true } // C6 (Đỉnh cao ngân vang)
      ];

      const notesVoice2 = [
        { freq: 392.00, time: 0.04, dur: 0.10 }, // G4
        { freq: 392.00, time: 0.17, dur: 0.10 }, // G4
        { freq: 392.00, time: 0.30, dur: 0.10 }, // G4
        { freq: 659.25, time: 0.43, dur: 0.36 }, // E5
        { freq: 523.25, time: 0.85, dur: 0.13 }, // C5
        { freq: 659.25, time: 1.00, dur: 0.13 }, // E5
        { freq: 783.99, time: 1.15, dur: 0.95, vibrato: true } // G5
      ];

      // Phát bè 1 (Kèn chính - Âm sắc sáng)
      notesVoice1.forEach(n => {
        this.synthesizeBrassNote(ctx, masterGain, now + n.time, n.freq, n.dur, 0.45, n.vibrato || false, 3);
      });

      // Phát bè 2 (Kèn bè - Âm sắc ấm, bè quãng 3/5 hòa âm)
      notesVoice2.forEach(n => {
        this.synthesizeBrassNote(ctx, masterGain, now + n.time, n.freq, n.dur, 0.35, n.vibrato || false, -3);
      });

    } catch (err) {
      console.warn('Không thể phát kèn chúc mừng:', err);
    }
  }

  // Bộ tổng hợp một nốt kèn đồng (Brass Trumpet Synthesis)
  synthesizeBrassNote(ctx, destination, startTime, frequency, duration, volume, addVibrato = false, detuneCents = 0) {
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gainNode = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    // Sóng răng cưa (sawtooth) giàu hài âm đặc trưng của kèn đồng
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(frequency, startTime);
    osc1.detune.setValueAtTime(detuneCents, startTime);

    // Sóng tam giác (triangle) bổ sung độ dày và ấm cho thân kèn
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(frequency, startTime);
    osc2.detune.setValueAtTime(-detuneCents, startTime);

    // Bộ lọc Lowpass mô phỏng tiếng mở vòm môi kèn (Tongue Articulation & Brass Bite)
    filter.type = 'lowpass';
    filter.Q.setValueAtTime(3.0, startTime);
    filter.frequency.setValueAtTime(400, startTime);
    // Vòm môi mở nhanh tạo tiếng "Taa" đanh giòn
    filter.frequency.exponentialRampToValueAtTime(Math.min(4200, frequency * 4.5), startTime + 0.035);
    // Ổn định ở âm sắc đồng ấm áp
    filter.frequency.exponentialRampToValueAtTime(Math.min(2200, frequency * 2.2), startTime + duration);

    // Envelope biên độ (Attack nhanh, Sustain rõ ràng, Release êm)
    gainNode.gain.setValueAtTime(0.0001, startTime);
    gainNode.gain.linearRampToValueAtTime(volume, startTime + 0.025);
    gainNode.gain.setValueAtTime(volume * 0.9, startTime + duration * 0.7);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration + 0.12);

    // Kỹ thuật ngân rung (Vibrato) ở nốt kết thúc hoành tráng
    if (addVibrato) {
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(5.8, startTime); // Tần số rung 5.8Hz tự nhiên
      lfoGain.gain.setValueAtTime(0, startTime);
      // Rung bắt đầu nhẹ nhàng sau 0.2s của nốt ngân
      lfoGain.gain.setValueAtTime(0, startTime + 0.2);
      lfoGain.gain.linearRampToValueAtTime(frequency * 0.025, startTime + 0.5);

      lfo.connect(osc1.frequency);
      lfo.connect(osc2.frequency);
      lfo.start(startTime + 0.2);
      lfo.stop(startTime + duration + 0.15);
    }

    // Kết nối chuỗi xử lý âm thanh
    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(destination);

    osc1.start(startTime);
    osc2.start(startTime);
    osc1.stop(startTime + duration + 0.15);
    osc2.stop(startTime + duration + 0.15);
  }

  // Tiếng nổ ống pháo giấy (Party Popper Snap/Pop)
  playPopperSound(ctx, destination, startTime) {
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'triangle';
      // Pitch drop cực nhanh tạo tiếng "Bốp!"
      osc.frequency.setValueAtTime(320, startTime);
      osc.frequency.exponentialRampToValueAtTime(50, startTime + 0.06);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, startTime);
      filter.Q.setValueAtTime(1.5, startTime);

      gain.gain.setValueAtTime(0.28, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.07);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(destination);

      osc.start(startTime);
      osc.stop(startTime + 0.08);
    } catch (e) {}
  }

  // ----------------------------------------------------------------------------
  // 2. HIỆU ỨNG PHÁO HOA GIẤY 2 BÊN (CONFETTI SIDE CANNONS)
  // ----------------------------------------------------------------------------
  triggerConfettiCannons() {
    const festiveColors = [
      '#3b82f6', // Indigo / Blue
      '#10b981', // Emerald
      '#f59e0b', // Amber / Gold
      '#ec4899', // Pink
      '#8b5cf6', // Purple
      '#ef4444', // Red
      '#06b6d4', // Cyan
      '#ffd700'  // Shining Gold
    ];

    // Cách 1: Sử dụng thư viện canvas-confetti nếu đã nạp
    if (typeof window !== 'undefined' && typeof window.confetti === 'function') {
      const fire = window.confetti;

      // Đợt 1: Bắn góc 2 bên ngay lập tức (t = 0)
      fire({
        particleCount: 55,
        angle: 60,
        spread: 60,
        startVelocity: 50,
        origin: { x: 0, y: 0.82 },
        colors: festiveColors,
        zIndex: 9999
      });

      fire({
        particleCount: 55,
        angle: 120,
        spread: 60,
        startVelocity: 50,
        origin: { x: 1, y: 0.82 },
        colors: festiveColors,
        zIndex: 9999
      });

      // Đợt 2: Bắn bổ sung sau 240ms với góc rộng hơn
      setTimeout(() => {
        fire({
          particleCount: 45,
          angle: 55,
          spread: 75,
          startVelocity: 55,
          origin: { x: 0.05, y: 0.78 },
          colors: festiveColors,
          zIndex: 9999
        });

        fire({
          particleCount: 45,
          angle: 125,
          spread: 75,
          startVelocity: 55,
          origin: { x: 0.95, y: 0.78 },
          colors: festiveColors,
          zIndex: 9999
        });
      }, 240);

      // Đợt 3: Mưa sao giấy vàng trung tâm sau 480ms
      setTimeout(() => {
        fire({
          particleCount: 35,
          spread: 100,
          startVelocity: 35,
          origin: { x: 0.5, y: 0.55 },
          colors: ['#ffd700', '#f59e0b', '#ec4899', '#3b82f6'],
          zIndex: 9999
        });
      }, 480);

      return;
    }

    // Cách 2: Fallback Canvas Confetti thuần chạy 100% offline không cần CDN
    this.runFallbackConfettiCannons(festiveColors);
  }

  // Bộ mô phỏng pháo hoa giấy Canvas thuần (Zero-dependency Fallback)
  runFallbackConfettiCannons(colors) {
    if (typeof document === 'undefined') return;

    const canvas = document.createElement('canvas');
    canvas.id = 'fallback-celebration-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '99999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const particles = [];
    const createBurst = (originX, originY, baseAngle) => {
      for (let i = 0; i < 45; i++) {
        const rad = (baseAngle + (Math.random() * 40 - 20)) * (Math.PI / 180);
        const speed = 12 + Math.random() * 14;
        particles.push({
          x: originX,
          y: originY,
          vx: Math.cos(rad) * speed,
          vy: -Math.sin(rad) * speed,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 6 + Math.random() * 6,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 12,
          opacity: 1,
          gravity: 0.38,
          drag: 0.98
        });
      }
    };

    // Bắn đợt 1 từ 2 góc dưới
    createBurst(20, height * 0.85, 60);
    createBurst(width - 20, height * 0.85, 120);

    // Bắn đợt 2 sau 220ms
    setTimeout(() => {
      createBurst(30, height * 0.80, 55);
      createBurst(width - 30, height * 0.80, 125);
    }, 220);

    let animationFrame = null;
    const startTime = performance.now();

    const render = (time) => {
      ctx.clearRect(0, 0, width, height);

      const elapsed = time - startTime;
      if (elapsed > 2800 || particles.length === 0) {
        if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
        return;
      }

      particles.forEach((p, idx) => {
        p.vx *= p.drag;
        p.vy *= p.drag;
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
        if (elapsed > 1600) {
          p.opacity = Math.max(0, p.opacity - 0.02);
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      });

      animationFrame = requestAnimationFrame(render);
    };

    animationFrame = requestAnimationFrame(render);
  }

  // ----------------------------------------------------------------------------
  // 3. HÀM GỌI ĂN MỪNG TỔNG HỢP (COMBINED CELEBRATION TRIGGER)
  // ----------------------------------------------------------------------------
  trigger() {
    // 1. Bắn pháo hoa giấy 2 bên
    this.triggerConfettiCannons();

    // 2. Kèn chúc mừng
    this.playTrumpetFanfare();

    // 3. Rung máy phản xạ vui mừng trên điện thoại (Haptic celebration pattern)
    if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
      try {
        window.navigator.vibrate([40, 50, 40, 50, 120]);
      } catch (e) {}
    }
  }
}

export const celebrationEngine = new CelebrationEngine();
