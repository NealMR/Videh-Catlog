import { Link } from 'react-router-dom';
import type { Perfume } from '../data/perfumes';

export default function FragranceCardC({ perfume }: { perfume: Perfume }) {
  return (
    <Link to={`/fragrance/${perfume.slug}`} className="group block w-full h-full" data-cursor-label="VIEW">
      <div className="relative h-full min-h-[360px] flex overflow-hidden bg-[#FDFCF8] border border-[#E8E6DF] transition-all duration-500 group-hover:border-[#111111]">

        {/* LEFT SPINE */}
        <div className="relative flex-shrink-0 w-12 border-r border-[#E8E6DF] group-hover:border-[#111111] group-hover:bg-[#111111] transition-all duration-500 flex flex-col items-center justify-between py-6">
          <div
            className="text-sm uppercase tracking-[0.3em] text-[#BBBBBB] group-hover:text-[#555555] transition-colors duration-500"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            {perfume.brand.slice(0, 14).toUpperCase()}
          </div>
          <span className="text-sm font-mono text-[#C8102E]" style={{ writingMode: 'vertical-rl' }}>
            {String(perfume.id).padStart(3, '0')}
          </span>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-grow flex flex-col p-7 min-w-0">

          {/* Name */}
          <h3
            className="font-serif font-light leading-tight tracking-tight text-[#111111] mb-4"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}
          >
            {perfume.name}
          </h3>

          {/* Gender · time */}
          <p className="text-sm uppercase tracking-[0.3em] text-[#AAAAAA] mb-7">
            {perfume.gender}&nbsp;·&nbsp;{perfume.time}
          </p>

          {/* Notes rows */}
          <div className="flex-grow space-y-4 border-t border-[#E8E6DF] pt-5">
            {[
              { abbr: 'T', label: 'Top', notes: perfume.topNotes },
              { abbr: 'H', label: 'Heart', notes: perfume.heartNotes },
              { abbr: 'B', label: 'Base', notes: perfume.baseNotes },
            ].map(({ abbr, notes }) => (
              <div key={abbr} className="flex items-baseline gap-3">
                <span className="text-base font-mono text-[#C8102E] flex-shrink-0 w-4">{abbr}</span>
                <p className="text-base text-[#666666] leading-snug line-clamp-1 font-light">
                  {notes.slice(0, 4).join(', ')}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom strip */}
          <div className="mt-6 pt-5 border-t border-[#E8E6DF] flex items-center justify-between">
            <p className="text-sm uppercase tracking-[0.2em] text-[#AAAAAA] line-clamp-1">
              {perfume.occasions.slice(0, 2).join(' · ')}
            </p>
            <span className="text-sm uppercase tracking-[0.2em] text-[#C8102E] opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
          </div>
        </div>

      </div>
    </Link>
  );
}
