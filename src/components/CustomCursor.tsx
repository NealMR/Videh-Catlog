import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState('');
  const [visible, setVisible] = useState(false);
  const pos = useRef({ x: 0, y: 0 });


  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
      // Dot snaps instantly
      gsap.to(cursorDotRef.current, { x: e.clientX, y: e.clientY, duration: 0, overwrite: true });
      // Ring follows with lag
      gsap.to(cursorRingRef.current, { x: e.clientX, y: e.clientY, duration: 0.4, ease: 'power2.out', overwrite: true });
      gsap.to(cursorLabelRef.current, { x: e.clientX + 18, y: e.clientY + 18, duration: 0.4, ease: 'power2.out', overwrite: true });
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    // Detect hoverable links and cards
    const onLinkEnter = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const lbl = target.dataset.cursorLabel || 'VIEW';
      setLabel(lbl);
      gsap.to(cursorRingRef.current, { scale: 2.5, duration: 0.3, ease: 'power2.out' });
      gsap.to(cursorDotRef.current, { opacity: 0, duration: 0.2 });
    };

    const onLinkLeave = () => {
      setLabel('');
      gsap.to(cursorRingRef.current, { scale: 1, duration: 0.3, ease: 'power2.out' });
      gsap.to(cursorDotRef.current, { opacity: 1, duration: 0.2 });
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    // Attach to interactive elements
    const addListeners = () => {
      const els = document.querySelectorAll('a, button, [data-cursor]');
      els.forEach(el => {
        el.addEventListener('mouseenter', onLinkEnter as any);
        el.addEventListener('mouseleave', onLinkLeave as any);
      });
    };
    addListeners();

    // Re-attach on DOM changes
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.style.cursor = '';
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#111111] pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ opacity: visible ? 1 : 0 }}
      />
      {/* Ring */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-8 h-8 border border-[#111111] pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 flex items-center justify-center"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {/* Crosshair lines */}
        <div className="absolute w-full h-px bg-[#11111120]" />
        <div className="absolute h-full w-px bg-[#11111120]" />
      </div>
      {/* Label */}
      <div
        ref={cursorLabelRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] text-sm uppercase tracking-[0.2em] font-medium text-[#111111] transition-opacity duration-200"
        style={{ opacity: label ? 1 : 0 }}
      >
        {label}
      </div>
    </>
  );
}
