import { useEffect, useRef } from 'react';

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const targetMouse = useRef({ x: 0.5, y: 0.5 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    let W = 0, H = 0;
    let t = 0;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e: MouseEvent) => {
      targetMouse.current = {
        x: e.clientX / W,
        y: e.clientY / H,
      };
    };
    window.addEventListener('mousemove', onMove);

    const NUM_LINES = 28;

    const draw = () => {
      // Lerp mouse for smooth follow
      mouse.current.x += (targetMouse.current.x - mouse.current.x) * 0.04;
      mouse.current.y += (targetMouse.current.y - mouse.current.y) * 0.04;

      // Transparent canvas — page backgrounds show through
      ctx.clearRect(0, 0, W, H);


      const mx = mouse.current.x;
      const my = mouse.current.y;

      for (let i = 0; i < NUM_LINES; i++) {
        const progress = i / (NUM_LINES - 1); // 0 to 1
        const baseY = progress * H;

        ctx.beginPath();
        // With mix-blend-mode: difference, white stroke will invert correctly on all backgrounds
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';

        ctx.lineWidth = 1.1;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        const steps = Math.ceil(W / 4);

        for (let s = 0; s <= steps; s++) {
          const x = (s / steps) * W;
          const nx = x / W; // normalized x 0-1

          // Distance from cursor in normalized space
          const dx = nx - mx;
          const dy = progress - my;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Distortion radius and strength
          const radius = 0.22;
          const strength = Math.max(0, 1 - dist / radius);
          const distortion = strength * strength * 38;

          // Directional push away from cursor
          const pushX = dist > 0.001 ? (dx / dist) * distortion : 0;
          const pushY = dist > 0.001 ? (dy / dist) * distortion * 2.2 : 0;

          // Base wave
          const freq1 = 2.2 + progress * 1.4;
          const freq2 = 1.1 + (1 - progress) * 0.9;
          const amp1 = 10 + progress * 8;
          const amp2 = 6 + (1 - progress) * 5;

          const wave =
            Math.sin(nx * Math.PI * freq1 + t * 0.55 + i * 0.3) * amp1 +
            Math.sin(nx * Math.PI * freq2 - t * 0.38 + i * 0.5) * amp2;

          const y = baseY + wave + pushY;

          if (s === 0) {
            ctx.moveTo(x + pushX, y);
          } else {
            ctx.lineTo(x + pushX, y);
          }
        }

        ctx.stroke();
      }

      t += 0.012;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[9000]"
      style={{ opacity: 0.12, mixBlendMode: 'difference' }}
    />
  );
}
