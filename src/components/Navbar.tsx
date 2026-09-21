import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import gsap from 'gsap';
import SearchOverlay from './SearchOverlay';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo('.menu-item', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out' });
    } else if (!searchOpen) {
      document.body.style.overflow = '';
    }
  }, [menuOpen, searchOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 border-b ${
          scrolled || menuOpen
            ? 'border-[#E5E5E5] py-4 bg-[#FDFCF8]'
            : 'border-transparent py-6 bg-transparent'
        }`}
      >
        <div className="px-8 lg:px-16 flex justify-between items-center">

          <Link to="/" className="z-50 flex items-center" data-cursor-label="">
            <img
              src="https://static.wixstatic.com/media/9b8598_067d80599dd947778e31725ae2bcdc82~mv2.png/v1/fill/w_216,h_216,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/VIDEH%20LOGO%20FILE%20NEW%2010.png"
              alt="VIDEH"
              className="h-7 md:h-9 object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className={`hidden md:flex items-center gap-10 text-[12px] uppercase tracking-[0.3em] font-medium transition-colors duration-700 ${scrolled ? 'text-[#666666]' : 'text-[#8A8885]'}`}>
            <Link to="/catalog" className="hover:text-[#C8102E] transition-colors" data-cursor-label="">CATALOG</Link>
            <Link to="/catalog?season=spring" className="hover:text-[#C8102E] transition-colors" data-cursor-label="">SEASONS</Link>
            <button
              onClick={() => setSearchOpen(true)}
              className="hover:text-[#C8102E] transition-colors tracking-[0.3em]"
              data-cursor-label="SEARCH"
            >
              SEARCH
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden z-50 text-sm uppercase tracking-[0.3em] font-medium text-[#666666] hover:text-[#111111] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div className={`fixed inset-0 z-40 bg-[#FDFCF8] flex flex-col items-center justify-center transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center gap-10">
          {[
            { label: 'Catalog', to: '/catalog' },
            { label: 'Seasons', to: '/catalog?season=spring' },
          ].map(({ label, to }) => (
            <Link key={label} to={to} className="menu-item font-serif text-5xl font-light tracking-tight hover:text-[#C8102E] transition-colors">
              {label}
            </Link>
          ))}
          <button
            className="menu-item font-serif text-5xl font-light tracking-tight hover:text-[#C8102E] transition-colors"
            onClick={() => { setMenuOpen(false); setSearchOpen(true); }}
          >
            Search
          </button>
        </nav>
        <p className="menu-item absolute bottom-8 text-sm uppercase tracking-[0.4em] text-[#AAAAAA]">
          VIDEH — VOL. 01 — 2026
        </p>
      </div>

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
