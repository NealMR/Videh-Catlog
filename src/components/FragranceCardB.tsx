import { Link } from 'react-router-dom';
import type { Perfume } from '../data/perfumes';

export default function FragranceCardB({ perfume }: { perfume: Perfume }) {
  return (
    <Link
      to={`/fragrance/${perfume.slug}`}
      viewTransition
      className="group block w-full h-full cursor-pointer"
      style={{ willChange: 'transform' }}
    >
      <div className="relative h-full min-h-[420px] flex flex-col bg-white border border-[#EAEAEA] overflow-hidden transition-all duration-500 group-hover:bg-[#0E0D0C] group-hover:border-[#0E0D0C] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]">

        {/* Hover Wave Texture */}
        <div 
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity duration-700" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100 Q 250 50 500 100 T 1000 100 T 1500 100 T 2000 100' stroke='white' stroke-width='0.5' fill='none' opacity='0.5'/%3E%3Cpath d='M0 150 Q 250 100 500 150 T 1000 150 T 1500 150 T 2000 150' stroke='white' stroke-width='0.5' fill='none' opacity='0.3'/%3E%3Cpath d='M0 200 Q 250 150 500 200 T 1000 200 T 1500 200 T 2000 200' stroke='white' stroke-width='0.5' fill='none' opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: '100% 120px'
          }} 
        />

        {/* Red sweep top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C8102E] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out z-10" />

        {/* ── IDENTITY ── */}
        <div className="px-7 pt-8 pb-7 border-b border-[#F2F2F2] group-hover:border-white/10 transition-colors duration-500 relative">
          <div className="flex items-start justify-between mb-5">
            <span 
              className="text-[10px] uppercase tracking-[0.4em] text-[#BBBBBB] group-hover:text-[#666666] font-medium leading-tight max-w-[72%] block transition-colors duration-500"
              style={{ viewTransitionName: `brand-${perfume.slug}`, width: 'max-content' }}
            >
              {perfume.brand}
            </span>
            <span className="text-[10px] font-mono text-[#C8102E] flex-shrink-0 ml-2">
              {String(perfume.id).padStart(3, '0')}
            </span>
          </div>

          <h3
            className="font-serif font-light leading-[1.1] tracking-tight text-[#111111] group-hover:text-white transition-colors duration-500"
            style={{ 
              fontSize: 'clamp(1.5rem, 2.6vw, 2.2rem)',
              viewTransitionName: `title-${perfume.slug}`,
              width: 'max-content',
              maxWidth: '100%'
            }}
          >
            {perfume.name}
          </h3>

          <p className="mt-3 text-[11px] uppercase tracking-[0.3em] text-[#AAAAAA] group-hover:text-[#555555] transition-colors duration-500">
            {perfume.gender}&nbsp;·&nbsp;{perfume.time}
          </p>

          {/* Bottom sweep line */}
          <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#C8102E] group-hover:w-full transition-all duration-700" />
        </div>

        {/* ── OLFACTORY PYRAMID ── */}
        <div className="flex-grow px-7 py-7 flex flex-col justify-between relative z-10">
          {[
            { code: 'TOP',   notes: perfume.topNotes,   cls: 'text-[#1A1A1A] group-hover:text-white' },
            { code: 'HEART', notes: perfume.heartNotes, cls: 'text-[#555555] group-hover:text-[#CCCCCC]' },
            { code: 'BASE',  notes: perfume.baseNotes,  cls: 'text-[#888888] group-hover:text-[#888888]' },
          ].map(({ code, notes, cls }) => (
            <div key={code}>
              <p className="text-[9px] uppercase tracking-[0.5em] text-[#C8102E] mb-1.5">{code}</p>
              <p className={`text-[13px] font-light leading-snug line-clamp-1 transition-colors duration-500 ${cls}`}>
                {notes.length > 0 ? notes.slice(0, 5).join(', ') : '—'}
              </p>
            </div>
          ))}
        </div>

        {/* ── FOOTER ── */}
        <div className="border-t border-[#F2F2F2] group-hover:border-white/10 transition-colors duration-500 px-7 py-5 flex items-center justify-between relative z-10">
          <div className="flex flex-wrap gap-1.5">
            {perfume.seasons.slice(0, 3).map(s => (
              <span
                key={s}
                className="text-[9px] uppercase tracking-[0.3em] text-[#AAAAAA] border border-[#EAEAEA] group-hover:bg-[#C8102E]/10 px-2.5 py-1 group-hover:border-[#C8102E] group-hover:text-[#C8102E] transition-all duration-500"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="w-7 h-7 flex items-center justify-center border border-[#EAEAEA] group-hover:bg-[#C8102E] group-hover:border-[#C8102E] transition-all duration-500 flex-shrink-0">
            <span className="text-[11px] text-[#CCCCCC] group-hover:text-white transition-colors duration-500">→</span>
          </div>
        </div>

      </div>
    </Link>
  );
}
