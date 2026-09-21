import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Counts up from 0 to a target number when scrolled into view
export default function CountUp({ to, suffix = '', className = '' }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { val: 0 };
    const anim = gsap.to(obj, {
      val: to,
      duration: 1.5,
      ease: 'power2.out',
      onUpdate: () => { el.textContent = `${Math.round(obj.val)}${suffix}`; },
      scrollTrigger: { trigger: el, start: 'top 90%' },
    });

    return () => {
      anim.kill();
      return;
    };
  }, [to, suffix]);

  return <span ref={ref} className={className}>0{suffix}</span>;
}
