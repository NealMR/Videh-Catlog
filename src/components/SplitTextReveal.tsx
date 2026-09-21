import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Reveals text character by character on scroll enter
export default function SplitTextReveal({
  text,
  className = '',
  delay = 0,
  as: Tag = 'h2',
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Split into spans per character
    const chars = text.split('').map((char) => {
      const span = document.createElement('span');
      span.style.display = 'inline-block';
      span.style.overflow = 'hidden';
      span.textContent = char === ' ' ? '\u00A0' : char;
      return span;
    });

    el.innerHTML = '';
    chars.forEach((c) => el.appendChild(c));

    const anim = gsap.fromTo(
      chars,
      { y: '110%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 0.8,
        stagger: 0.025,
        ease: 'power3.out',
        delay,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
        },
      }
    );

    return () => {
      anim.kill();
    };
  }, [text, delay]);

  return <Tag ref={ref as any} className={className}>{text}</Tag>;
}
