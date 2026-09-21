import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const curtainRef = useRef<HTMLDivElement>(null);
  const curtain2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Page enter: curtain wipes out
    const tl = gsap.timeline();
    tl.set(curtainRef.current, { scaleY: 1, transformOrigin: 'top' })
      .set(curtain2Ref.current, { scaleY: 1, transformOrigin: 'top' })
      .to(curtain2Ref.current, { scaleY: 0, duration: 1.2, ease: 'power3.inOut', delay: 0.15 })
      .to(curtainRef.current, { scaleY: 0, duration: 1.4, ease: 'power3.inOut' }, '-=0.8');

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      {/* Page curtain layer 2 (slightly delayed, different color) */}
      <div
        ref={curtain2Ref}
        className="fixed inset-0 z-[200] pointer-events-none bg-[#999999]"
        style={{ transformOrigin: 'top' }}
      />
      {/* Page curtain layer 1 */}
      <div
        ref={curtainRef}
        className="fixed inset-0 z-[199] pointer-events-none bg-[#111111]"
        style={{ transformOrigin: 'top' }}
      />
      {children}
    </>
  );
}
