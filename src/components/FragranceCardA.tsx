import { Link } from 'react-router-dom';
import type { Perfume } from '../data/perfumes';

export default function FragranceCardA({ perfume }: { perfume: Perfume }) {
  const topNotes = perfume.topNotes.slice(0, 4).join(' · ');

  return (
    <Link to={`/fragrance/${perfume.slug}`} className="group block w-full h-full" data-cursor-label="VIEW">
      <div className="relative h-full min-h-[360px] bg-[#FDFCF8] border border-[#E8E6DF] flex flex-col overflow-hidden transition-all duration-500 group-hover:border-[#111111]">

        {/* Animated top bar */}
        <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#C8102E] group-hover:w-full transition-all duration-700 ease-out" />

        {/* Header */}
        <div className="flex justify-between items-start px-7 pt-7">
          <span className="text-sm uppercase tracking-[0.3em] text-[#AAAAAA]">{perfume.brand}</span>
          <span className="text-sm font-mono text-[#C8102E]">{String(perfume.id).padStart(3, '0')}</span>
        </div>

        {/* Name — large hero */}
        <div className="flex-grow flex items-center px-7 py-8">
          <h3
            className="font-serif font-light leading-[1.1] tracking-tight text-[#111111]"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
          >
            {perfume.name}
          </h3>
        </div>

        {/* Divider */}
        <div className="mx-7 h-px bg-[#E8E6DF] group-hover:bg-[#CCCCCC] transition-colors duration-500" />

        {/* Footer */}
        <div className="px-7 py-6 flex flex-col gap-3">
          <p className="text-base text-[#888888] leading-relaxed line-clamp-1">{topNotes}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm uppercase tracking-[0.25em] text-[#999999]">{perfume.gender}</span>
            <span className="text-sm uppercase tracking-[0.2em] text-[#C8102E] opacity-0 group-hover:opacity-100 transition-opacity duration-300">VIEW →</span>
          </div>
        </div>

      </div>
    </Link>
  );
}
