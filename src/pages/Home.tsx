import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { perfumes } from '../data/perfumes';
import { ArrowRight } from 'lucide-react';
import FragranceCard from '../components/FragranceCard';
import Marquee from '../components/Marquee';
import MagneticButton from '../components/MagneticButton';
import CountUp from '../components/CountUp';

gsap.registerPlugin(ScrollTrigger);

const SEASONS = [
  { label: 'SPRING',  num: '01', slug: 'spring',  desc: 'Fresh florals & citrus' },
  { label: 'SUMMER',  num: '02', slug: 'summer',  desc: 'Light musks & aquatics' },
  { label: 'MONSOON', num: '03', slug: 'monsoon', desc: 'Earthy petrichor & spice' },
  { label: 'WINTER',  num: '04', slug: 'winter',  desc: 'Deep ouds & ambers' },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cinematic Master Timeline
      const tl = gsap.timeline();

      // 1. Initial State (prevent FOUC)
      gsap.set('.hero-wave', { opacity: 0, scale: 1.1 });
      gsap.set('.hero-glow', { opacity: 0 });
      gsap.set('.hero-word', { y: '115%', rotateZ: 4, transformOrigin: 'top left' });
      gsap.set('.hero-fade', { opacity: 0, y: 20 });

      // 2. Play Sequence
      tl.to('.hero-wave', {
        opacity: 0.2,
        scale: 1,
        duration: 3,
        ease: 'power2.out',
      }, 0.1)
      .to('.hero-word', {
        y: '0%',
        rotateZ: 0,
        duration: 1.6,
        stagger: 0.15,
        ease: 'power4.out',
      }, 0.3)
      .to('.hero-glow', {
        opacity: 1,
        duration: 2,
        ease: 'power2.inOut',
      }, 1)
      .to('.hero-fade', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
      }, 1.2);

      // 3. Scroll reveals for elements further down the page
      gsap.utils.toArray<HTMLElement>('.reveal').forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' } }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const seasonalFeatured = SEASONS.map(s => {
    return (
      perfumes.find(p => p.seasons.map(x => x.toLowerCase()).includes(s.label.toLowerCase()) && p.featured) ||
      perfumes.find(p => p.seasons.map(x => x.toLowerCase()).includes(s.label.toLowerCase()))
    );
  }).filter(Boolean) as (typeof perfumes[0])[];

  const brands = [...new Set(perfumes.map(p => p.brand))];

  return (
    <div className="w-full text-[#111111] overflow-hidden">

      {/* ═══ HERO — full dark screen ═══════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-between bg-[#0E0D0C] overflow-hidden group/section"
      >
        {/* Subtle Topographical Background lines */}
        <div 
          className="hero-wave absolute inset-0 z-0 pointer-events-none" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100 Q 250 50 500 100 T 1000 100 T 1500 100 T 2000 100' stroke='white' stroke-width='0.5' fill='none' opacity='0.5'/%3E%3Cpath d='M0 150 Q 250 100 500 150 T 1000 150 T 1500 150 T 2000 150' stroke='white' stroke-width='0.5' fill='none' opacity='0.3'/%3E%3Cpath d='M0 200 Q 250 150 500 200 T 1000 200 T 1500 200 T 2000 200' stroke='white' stroke-width='0.5' fill='none' opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: '100% 200px'
          }} 
        />

        {/* Subtle radial center glow */}
        <div className="hero-glow absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(200,16,46,0.07) 0%, transparent 70%)' }}
        />

        {/* Top nav-spacer + label */}
        <div className="relative z-10 px-8 lg:px-16 pt-32 flex justify-between items-start">
          <p className="hero-fade text-[11px] uppercase tracking-[0.5em] text-[#4A4845]">
            EST. 2026
          </p>
          <p className="hero-fade text-[11px] uppercase tracking-[0.5em] text-[#4A4845]">
            VOL. 01
          </p>
        </div>

        {/* Massive heading */}
        <div className="relative z-10 px-8 lg:px-16 pb-0 flex-grow flex items-center">
          <div className="w-full">
            {['THE', 'FRAGRANCE', 'ARCHIVE.'].map((word, i) => (
              <div key={i} className="overflow-hidden leading-[0.95]">
                <span
                  className="hero-word block font-serif font-light text-[#F0EDE8] tracking-tight"
                  style={{ fontSize: 'clamp(4rem, 14vw, 13rem)' }}
                >
                  {word}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="relative z-10 px-8 lg:px-16 pb-12 mt-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <p className="hero-fade text-[13px] text-[#5A5855] max-w-xs leading-relaxed tracking-wide">
            A curated index of fragrances organized<br />by season, occasion and character.
          </p>
          <div className="hero-fade">
            <MagneticButton>
              <Link
                to="/catalog"
                className="group inline-flex items-center gap-5 border border-[#2E2C2A] px-10 py-5 text-[11px] uppercase tracking-[0.35em] text-[#A09C97] hover:border-[#C8102E] hover:text-[#F0EDE8] transition-all duration-500"
              >
                OPEN CATALOG
                <ArrowRight size={12} strokeWidth={1} className="group-hover:translate-x-1 transition-transform duration-500" />
              </Link>
            </MagneticButton>
          </div>
        </div>

        {/* Stats row */}
        <div className="relative z-10 border-t border-[#1E1C1A] px-8 lg:px-16 py-8 grid grid-cols-3 divide-x divide-[#1E1C1A]">
          {[
            { val: perfumes.length, label: 'FRAGRANCES' },
            { val: 4, label: 'SEASONS' },
            { val: brands.length, label: 'BRANDS' },
          ].map(({ val, label }) => (
            <div key={label} className="hero-fade px-6 first:pl-0">
              <div className="text-3xl font-serif font-light text-[#F0EDE8] tabular-nums mb-1">
                <CountUp to={val} />
              </div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#4A4845]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ MARQUEE ════════════════════════════════════════════════ */}
      <Marquee text="VIDEH FRAGRANCE ARCHIVE · SPRING · SUMMER · MONSOON · WINTER · DISCOVER YOUR SCENT" />

      {/* ═══ SEASONS — editorial list ═══════════════════════════════ */}
      <section className="relative z-10 bg-[#FAFAF8] pb-16">
        <div className="px-8 lg:px-16 pt-20 pb-10 reveal">
          <p className="text-[11px] uppercase tracking-[0.5em] text-[#AAAAAA] mb-4">DISCOVER BY SEASON</p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#111111]">Four Collections</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-8 lg:px-16">
          {SEASONS.map(({ label, num, slug, desc }) => (
            <Link
              key={slug}
              to={`/catalog?season=${slug}`}
              className="reveal group relative h-64 md:h-[22rem] border border-[#EBEBEB] bg-white p-10 flex flex-col justify-between overflow-hidden hover:border-[#C8102E] transition-colors duration-500"
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-[11px] text-[#C8102E]">{num}</span>
                <div className="w-10 h-10 rounded-full border border-[#EBEBEB] flex items-center justify-center overflow-hidden group-hover:border-[#C8102E] group-hover:bg-[#C8102E] transition-colors duration-500">
                  <ArrowRight size={14} className="text-[#AAAAAA] group-hover:text-white transition-colors duration-300 transform -translate-x-full group-hover:translate-x-0" />
                </div>
              </div>
              <div>
                <h3 className="font-serif font-light text-4xl mb-4 text-[#111111]">{label}</h3>
                <p className="text-[12px] uppercase tracking-[0.2em] text-[#999999]">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══ FEATURED ═══════════════════════════════════════════════ */}
      <section className="relative z-10 bg-[#0E0D0C] py-24 px-8 lg:px-16 overflow-hidden group/section">
        
        {/* Subtle Topographical Background lines */}
        <div 
          className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100 Q 250 50 500 100 T 1000 100 T 1500 100 T 2000 100' stroke='white' stroke-width='0.5' fill='none' opacity='0.5'/%3E%3Cpath d='M0 150 Q 250 100 500 150 T 1000 150 T 1500 150 T 2000 150' stroke='white' stroke-width='0.5' fill='none' opacity='0.3'/%3E%3Cpath d='M0 200 Q 250 150 500 200 T 1000 200 T 1500 200 T 2000 200' stroke='white' stroke-width='0.5' fill='none' opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: '100% 200px'
          }} 
        />

        <div className="flex items-end justify-between mb-14 reveal relative z-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.5em] text-[#4A4845] mb-4">SELECTED ENTRIES</p>
            <h2 className="text-4xl font-serif font-light text-[#F0EDE8]">Featured Fragrances</h2>
          </div>
          <Link to="/catalog" className="hidden md:flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-[#5A5855] hover:text-[#A09C97] transition-colors group">
            View All <ArrowRight size={11} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 reveal relative z-10">
          {seasonalFeatured.map((p, i) => (
            <div key={p.id} className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8102E] mb-3 font-mono">{SEASONS[i].label}</span>
              <FragranceCard perfume={p} />
            </div>
          ))}
        </div>
      </section>

      {/* ═══ FULL ARCHIVE CTA ═══════════════════════════════════════ */}
      <section className="relative z-10 bg-[#FAFAF8] py-40 flex flex-col items-center text-center px-8 reveal">
        <p className="text-[11px] uppercase tracking-[0.5em] text-[#AAAAAA] mb-8">THE COMPLETE COLLECTION</p>
        <h2
          className="font-serif font-light tracking-tight mb-16 leading-tight text-[#111111]"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
        >
          {perfumes.length} Fragrances.<br />One Archive.
        </h2>
        <MagneticButton>
          <Link
            to="/catalog"
            className="group inline-flex items-center gap-6 bg-[#111111] text-[#F0EDE8] px-14 py-6 text-[11px] uppercase tracking-[0.35em] hover:bg-[#C8102E] transition-all duration-500"
          >
            EXPLORE THE FULL CATALOG
            <ArrowRight size={13} strokeWidth={1} className="group-hover:translate-x-1 transition-transform duration-500" />
          </Link>
        </MagneticButton>
      </section>

    </div>
  );
}
