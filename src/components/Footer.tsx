import { Link } from 'react-router-dom';
import { perfumes } from '../data/perfumes';
import Marquee from './Marquee';

const brands = [...new Set(perfumes.map(p => p.brand))];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#EBEBEB] bg-[#FAFAF8] text-[#111111]">
      <Marquee text={brands.join(' · ')} />

      <div className="px-8 lg:px-16 py-20">
        <div className="flex flex-col md:flex-row justify-between gap-16">

          {/* Brand */}
          <div className="flex-shrink-0">
            <img
              src="https://static.wixstatic.com/media/9b8598_067d80599dd947778e31725ae2bcdc82~mv2.png/v1/fill/w_216,h_216,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/VIDEH%20LOGO%20FILE%20NEW%2010.png"
              alt="VIDEH"
              className="h-8 object-contain mb-4"
            />
            <p className="text-sm uppercase tracking-[0.3em] text-[#AAAAAA]">Perfume Catalog</p>
            <p className="text-sm uppercase tracking-[0.3em] text-[#AAAAAA] mt-1">Vol. 01 — 2026</p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-4 text-sm uppercase tracking-[0.3em]">
            <p className="text-[#AAAAAA] mb-2">NAVIGATE</p>
            <Link to="/catalog" className="text-[#666666] hover:text-[#111111] transition-colors">Catalog</Link>
            <Link to="/catalog?season=spring" className="text-[#666666] hover:text-[#111111] transition-colors">Spring</Link>
            <Link to="/catalog?season=summer" className="text-[#666666] hover:text-[#111111] transition-colors">Summer</Link>
            <Link to="/catalog?season=monsoon" className="text-[#666666] hover:text-[#111111] transition-colors">Monsoon</Link>
            <Link to="/catalog?season=winter" className="text-[#666666] hover:text-[#111111] transition-colors">Winter</Link>
          </nav>

          {/* Archive info */}
          <div className="text-sm uppercase tracking-[0.3em] text-[#AAAAAA] leading-loose">
            <p className="mb-2 text-[#666666]">ARCHIVE</p>
            <p>{perfumes.length} Fragrances</p>
            <p>4 Seasons</p>
            <p>{brands.length} Brands</p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#E5E5E5] px-8 lg:px-16 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm uppercase tracking-[0.4em] text-[#AAAAAA]">© 2026 VIDEH — DIGITAL FRAGRANCE ARCHIVE</p>
        <p className="text-sm uppercase tracking-[0.4em] text-[#AAAAAA]">CATALOG ONLY — NOT FOR COMMERCIAL USE</p>
      </div>
    </footer>
  );
}
