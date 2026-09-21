import { useParams, Link } from 'react-router-dom';
import { perfumes } from '../data/perfumes';
import { useEffect, useState, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FragranceCard from '../components/FragranceCard';
import Marquee from '../components/Marquee';

gsap.registerPlugin(ScrollTrigger);

export default function FragranceDetails() {
  const { slug } = useParams();
  const perfume = perfumes.find(p => p.slug === slug);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = Math.min(window.innerWidth * 0.8, 500);
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // Initial page load reveal
    gsap.fromTo('.detail-reveal',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power2.out', delay: 0.3 }
    );

    // Cinematic scroll reveal for the Olfactory Pyramid
    gsap.fromTo('.pyramid-layer',
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.pyramid-container',
          start: 'top 80%',
        }
      }
    );
  }, [slug]);

  if (!perfume) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-8">
        <p className="text-sm uppercase tracking-[0.4em] text-[#AAAAAA] mb-6">404 — NOT FOUND</p>
        <h2 className="text-4xl font-serif font-light mb-10">Fragrance Not Found</h2>
        <Link to="/catalog" className="text-base uppercase tracking-[0.3em] border-b border-[#111111] pb-1 hover:text-[#C8102E] hover:border-[#C8102E] transition-colors">
          Return to Archive
        </Link>
      </div>
    );
  }

  const related = perfumes.map(p => {
    if (p.id === perfume?.id) return { ...p, score: -1, sharedNotes: [] };
    
    let score = 0;
    const sharedNotes: string[] = [];
    
    // 1. Brand Affinity (+4 points)
    if (p.brand === perfume?.brand) score += 4;
    
    // 2. Gender Affinity (+2 points)
    if (p.gender === perfume?.gender) score += 2;

    // 3. Olfactory Architecture Weighting
    // We weight base notes heavier than top notes, as they form the dry-down signature.
    
    const checkMatch = (notesA: string[] = [], notesB: string[] = [], weight: number) => {
      notesA.forEach(note => {
        if (notesB.includes(note)) {
          score += weight;
          sharedNotes.push(note);
        }
      });
    };

    // Base Notes (+5 points)
    checkMatch(perfume?.baseNotes, p.baseNotes, 5);
    // Heart Notes (+3 points)
    checkMatch(perfume?.heartNotes, p.heartNotes, 3);
    // Top Notes (+1 point)
    checkMatch(perfume?.topNotes, p.topNotes, 1);
    
    // Cross-layer matches (e.g., Top note matching a Heart note) (+1 point)
    const allNotesMain = [...(perfume?.topNotes||[]), ...(perfume?.heartNotes||[]), ...(perfume?.baseNotes||[])];
    const allNotesP = [...p.topNotes, ...p.heartNotes, ...p.baseNotes];
    allNotesMain.forEach(note => {
       if (allNotesP.includes(note) && !sharedNotes.includes(note)) {
         score += 1;
         sharedNotes.push(note);
       }
    });

    // 4. Environmental Affinity (+2 point per shared season)
    if (p.seasons.some(s => perfume?.seasons.includes(s))) score += 2;
    
    // 5. Time of Day (+1 point)
    if (p.time && perfume?.time && p.time.includes(perfume.time)) score += 1;

    return { ...p, score, sharedNotes: [...new Set(sharedNotes)] };
  }).sort((a, b) => b.score - a.score).slice(0, 12).filter(p => p.score > 0);

  return (
    <div className="relative z-10 min-h-screen text-[#111111] pt-24 bg-[#FAFAF8]">

      {/* ── BREADCRUMB ─── */}
      <div className="detail-reveal px-8 lg:px-16 py-4 border-b border-[#EBEBEB] flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-[#AAAAAA]">
        <Link to="/catalog" className="hover:text-[#111111] transition-colors flex items-center gap-2">
          <ArrowLeft size={10} strokeWidth={1} /> ARCHIVE
        </Link>
        <span>/</span>
        <span className="text-[#999999]">{perfume.brand}</span>
        <span>/</span>
        <span className="text-[#111111]">{perfume.name}</span>
      </div>

      {/* ── TWO-COLUMN MASTER GRID ─── */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10 min-h-[80vh]">
        
        {/* LEFT COLUMN: STICKY HERO */}
        <div className="lg:col-span-5 relative">
          <div className="lg:sticky lg:top-32">
            
            <div className="mb-12 flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-[#AAAAAA] font-light">
              <span className="font-mono text-2xl text-[#C8102E]">#{perfume.id.padStart(3, '0')}</span>
              <span className="w-8 h-px bg-[#EBEBEB]" />
              <span>Archive Data</span>
            </div>

            <p 
              className="text-sm md:text-base uppercase tracking-[0.6em] text-[#888888] font-medium mb-6"
              style={{ viewTransitionName: `brand-${perfume.slug}`, width: 'max-content' }}
            >
              {perfume.brand}
            </p>
            
            <h1
              className="text-[clamp(5rem,7vw,8.5rem)] font-serif font-light leading-[0.9] tracking-tight text-[#111111] m-0 block"
              style={{ viewTransitionName: `title-${perfume.slug}`, width: 'max-content', maxWidth: '100%' }}
            >
              {perfume.name}
            </h1>

          </div>
        </div>

        {/* RIGHT COLUMN: DATA & OLFACTORY */}
        <div className="lg:col-span-7 flex flex-col gap-20 pt-8 lg:pt-0">
          
          {/* Specs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-[#EBEBEB] py-10 detail-reveal">
            <div>
              <span className="block text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#AAAAAA] mb-3">Gender</span>
              <span className="text-sm uppercase tracking-widest text-[#111111] font-medium">{perfume.gender}</span>
            </div>
            <div>
              <span className="block text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#AAAAAA] mb-3">Wear Time</span>
              <span className="text-sm uppercase tracking-widest text-[#111111] font-medium">{perfume.time}</span>
            </div>
            <div>
              <span className="block text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#AAAAAA] mb-3">Application</span>
              <span className="text-sm uppercase tracking-widest text-[#111111] font-medium">{perfume.sprays}</span>
            </div>
            <div>
              <span className="block text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[#AAAAAA] mb-3">Complexity</span>
              <span className="text-sm uppercase tracking-widest text-[#111111] font-medium">{perfume.topNotes.length + perfume.heartNotes.length + perfume.baseNotes.length} Notes</span>
            </div>
          </div>

          {/* Olfactory Architecture */}
          <div className="detail-reveal">
            <p className="text-xs uppercase tracking-[0.5em] text-[#AAAAAA] mb-12">Olfactory Architecture</p>
            
            <div className="flex flex-col gap-16">
              
              <div className="border-l-2 border-[#C8102E] pl-6 md:pl-10 relative">
                <h3 className="text-xs uppercase tracking-[0.4em] text-[#C8102E] mb-4">01 — Top Notes</h3>
                <p className="text-4xl md:text-5xl font-serif font-light text-[#111111] leading-snug">{perfume.topNotes.join(' · ')}</p>
              </div>

              <div className="border-l-2 border-[#555555] pl-6 md:pl-10 relative">
                <h3 className="text-xs uppercase tracking-[0.4em] text-[#555555] mb-4">02 — Heart Notes</h3>
                <p className="text-4xl md:text-5xl font-serif font-light text-[#111111] leading-snug">{perfume.heartNotes.join(' · ')}</p>
              </div>

              <div className="border-l-2 border-[#111111] pl-6 md:pl-10 relative">
                <h3 className="text-xs uppercase tracking-[0.4em] text-[#111111] mb-4">03 — Base Notes</h3>
                <p className="text-4xl md:text-5xl font-serif font-light text-[#111111] leading-snug">{perfume.baseNotes.join(' · ')}</p>
              </div>

            </div>
          </div>

          {/* Environments */}
          <div className="pt-12 border-t border-[#EBEBEB] detail-reveal">
            <p className="text-xs uppercase tracking-[0.5em] text-[#AAAAAA] mb-8">Optimal Environments</p>
            
            <div className="flex flex-wrap gap-3">
              {perfume.seasons.map(s => (
                <Link key={s} to={`/catalog?season=${s.toLowerCase()}`} className="text-xs uppercase tracking-widest border border-[#111111] text-[#111111] px-6 py-3.5 hover:bg-[#111111] hover:text-white transition-colors">
                  {s}
                </Link>
              ))}
              {perfume.occasions.map(o => (
                <span key={o} className="text-xs uppercase tracking-widest bg-[#F5F5F5] text-[#555555] px-6 py-3.5">
                  {o}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── MARQUEE SEPARATOR ─── */}
      <Marquee text={`${perfume.brand} · ${perfume.name} · ${perfume.topNotes.slice(0,3).join(' · ')} · ${perfume.heartNotes.slice(0,3).join(' · ')}`} />

      {/* ── RELATED FRAGRANCES: CINEMATIC CAROUSEL ─── */}
      {related.length > 0 && (
        <div className="py-24 border-t border-[#111111] bg-[#0E0D0C] text-white overflow-hidden relative group/section">
          
          {/* Subtle Topographical Background lines (reusing noise/texture aesthetic) */}
          <div 
            className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100 Q 250 50 500 100 T 1000 100 T 1500 100 T 2000 100' stroke='white' stroke-width='0.5' fill='none' opacity='0.5'/%3E%3Cpath d='M0 150 Q 250 100 500 150 T 1000 150 T 1500 150 T 2000 150' stroke='white' stroke-width='0.5' fill='none' opacity='0.3'/%3E%3Cpath d='M0 200 Q 250 150 500 200 T 1000 200 T 1500 200 T 2000 200' stroke='white' stroke-width='0.5' fill='none' opacity='0.2'/%3E%3C/svg%3E")`,
              backgroundSize: '100% 200px'
            }} 
          />

          <div className="px-8 lg:px-16 flex items-end justify-between mb-16 relative z-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.5em] text-[#AAAAAA] mb-4">SIMILAR PROFILES</p>
              <h3 className="text-4xl md:text-5xl font-serif font-light text-[#F0EDE8]">Related Archives</h3>
            </div>
            
            <Link to="/catalog" className="hidden lg:flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-[#888888] hover:text-white transition-colors group">
              Explore All <ArrowRight size={14} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="relative group/carousel">
            
            {/* Absolute Left Navigation Button */}
            <button 
              onClick={() => scrollCarousel('left')}
              className="hidden md:flex absolute left-4 lg:left-6 top-[calc(50%-24px)] -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-[#0E0D0C] border border-white/20 items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
              aria-label="Scroll left"
            >
              <ArrowLeft size={20} strokeWidth={1.5} />
            </button>

            {/* Absolute Right Navigation Button */}
            <button 
              onClick={() => scrollCarousel('right')}
              className="hidden md:flex absolute right-4 lg:right-6 top-[calc(50%-24px)] -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-[#0E0D0C] border border-white/20 items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
              aria-label="Scroll right"
            >
              <ArrowRight size={20} strokeWidth={1.5} />
            </button>

            <div 
              ref={carouselRef}
              className="flex overflow-x-auto gap-4 md:gap-6 px-8 lg:px-16 pb-12 pt-4 snap-x snap-mandatory custom-scrollbar relative z-10" 
              style={{ 
                scrollbarWidth: 'none', 
                WebkitOverflowScrolling: 'touch',
                maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)' 
              }}
            >
            {related.map(p => (
              <div key={p.id} className="w-[75vw] sm:w-[280px] lg:w-[320px] flex-shrink-0 snap-start group relative">
                {/* 
                  Instead of standard FragranceCard, we use a sleek minimalist dark card
                  just for this related section, providing a stunning visual contrast
                */}
                <Link to={`/fragrance/${p.slug}`} viewTransition className="block h-[340px] border border-white/20 bg-[#151413] hover:bg-[#1A1918] transition-colors duration-500 flex flex-col justify-between p-6 md:p-8 relative overflow-hidden">
                  
                  {/* Subtle red background glow on hover */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,16,46,0.15)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="relative z-10 flex-grow">
                    <div className="flex justify-between items-start mb-8">
                      <span className="font-mono text-[10px] text-[#C8102E]">{p.id.padStart(3, '0')}</span>
                      <ArrowRight size={16} strokeWidth={1} className="text-white opacity-50 group-hover:opacity-100 group-hover:-rotate-45 transition-all duration-300" />
                    </div>
                    
                    <span 
                      className="text-[9px] uppercase tracking-[0.4em] text-[#888888] font-medium leading-tight mb-3 block"
                      style={{ viewTransitionName: `brand-${p.slug}`, width: 'max-content' }}
                    >
                      {p.brand}
                    </span>
                    <h4 
                      className="font-serif font-light text-3xl text-[#F0EDE8] leading-tight mb-8 line-clamp-2"
                      style={{ viewTransitionName: `title-${p.slug}`, width: 'max-content', maxWidth: '100%' }}
                    >
                      {p.name}
                    </h4>

                    {/* Visual Relationship Explainer (Stacked Vertically) */}
                    {p.sharedNotes.length > 0 && (
                      <div className="flex flex-col items-start gap-2">
                        {p.sharedNotes.slice(0, 3).map(note => (
                          <span key={note} className="text-[9px] uppercase tracking-[0.25em] font-medium px-3 py-2 bg-white/5 text-white border border-white/5 rounded-sm">
                            Matches: {note}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 mt-auto pt-8">
                    <div className="h-[1px] w-full bg-[#C8102E]/80 mb-6" />
                    <div className="flex flex-col gap-4">
                      <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#AAAAAA] flex items-center justify-between">
                        <span className="text-[#666666] w-20">Notes</span>
                        <span className="text-right truncate flex-1 tracking-widest">
                          {p.topNotes.slice(0, 1).concat(p.heartNotes.slice(0, 1)).join(' · ')}
                        </span>
                      </p>
                      <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#AAAAAA] flex items-center justify-between">
                        <span className="text-[#666666] w-20">Seasons</span>
                        <span className="text-right truncate flex-1 tracking-widest">{p.seasons.join(', ')}</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        </div>
      )}

    </div>
  );
}
