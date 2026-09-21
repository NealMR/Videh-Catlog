import { useState, useEffect, useMemo, useCallback } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { perfumes } from '../data/perfumes';
import FragranceCard from '../components/FragranceCard';
import gsap from 'gsap';
import { ArrowRight, LayoutGrid, List, Search, X, ChevronDown, SlidersHorizontal } from 'lucide-react';
import CountUp from '../components/CountUp';

type ViewMode = 'grid' | 'ledger';

export default function Catalog() {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const initialSeason = queryParams.get('season') || 'all';

  // Filters State
  const [activeSeason, setActiveSeason] = useState(initialSeason);
  const [activeGender, setActiveGender] = useState('all');
  const [activeBrand, setActiveBrand] = useState('all');
  const [activeTime, setActiveTime] = useState('all');
  const [activeOccasion, setActiveOccasion] = useState('all');
  
  // UI State
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [visibleCount, setVisibleCount] = useState(24);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [brandSearch, setBrandSearch] = useState('');
  
  // Accordion State (all open by default)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    GENDER: true, TIME: true, OCCASION: true, BRAND: true
  });

  const toggleSection = (sec: string) => setOpenSections(prev => ({ ...prev, [sec]: !prev[sec] }));

  // Extracted Data
  const seasons = ['all', 'spring', 'summer', 'monsoon', 'winter'];
  const genders = ['all', ...Array.from(new Set(perfumes.map(p => p.gender)))];
  const brands = ['all', ...Array.from(new Set(perfumes.map(p => p.brand)))];
  const times = ['all', ...Array.from(new Set(perfumes.map(p => p.time))).filter(Boolean)];
  const occasionsRaw = Array.from(new Set(perfumes.flatMap(p => p.occasions)));
  const occasions = ['all', ...occasionsRaw];

  const filteredBrands = brands.filter(b => b === 'all' || b.toLowerCase().includes(brandSearch.toLowerCase()));

  // Sync URL Season
  useEffect(() => {
    const seasonQuery = queryParams.get('season') || 'all';
    if (seasonQuery !== activeSeason) setActiveSeason(seasonQuery);
  }, [location.search]);

  const handleSeasonChange = (season: string) => {
    setActiveSeason(season);
    navigate(season === 'all' ? '/catalog' : `/catalog?season=${season}`);
  };

  // Filter Logic
  const filteredPerfumes = useMemo(() =>
    perfumes.filter(p => {
      const matchSeason = activeSeason === 'all' || p.seasons.some(s => s.toLowerCase() === activeSeason);
      const matchGender = activeGender === 'all' || p.gender === activeGender;
      const matchBrand = activeBrand === 'all' || p.brand === activeBrand;
      const matchTime = activeTime === 'all' || p.time === activeTime;
      const matchOccasion = activeOccasion === 'all' || p.occasions.includes(activeOccasion);
      return matchSeason && matchGender && matchBrand && matchTime && matchOccasion;
    }),
    [activeSeason, activeGender, activeBrand, activeTime, activeOccasion]
  );

  // Reset pagination & animate on filter change
  useEffect(() => {
    setVisibleCount(24);
    gsap.fromTo('.perfume-item', { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.03, ease: 'power2.out', clearProps: 'all' }
    );
  }, [filteredPerfumes, viewMode]);

  const clearAll = useCallback(() => {
    setActiveGender('all');
    setActiveBrand('all');
    setActiveTime('all');
    setActiveOccasion('all');
    setBrandSearch('');
    handleSeasonChange('all');
  }, []);

  const hasFilters = activeGender !== 'all' || activeBrand !== 'all' || activeTime !== 'all' || activeOccasion !== 'all';

  // --- REUSABLE FILTER PANEL COMPONENT ---
  const FilterContent = () => (
    <div className="flex flex-col gap-10">
      {[
        { label: 'GENDER', values: genders, active: activeGender, set: setActiveGender },
        { label: 'TIME', values: times, active: activeTime, set: setActiveTime },
        { label: 'OCCASION', values: occasions, active: activeOccasion, set: setActiveOccasion },
        { label: 'BRAND', values: filteredBrands, active: activeBrand, set: setActiveBrand, isBrand: true },
      ].map(({ label, values, active, set, isBrand }) => {
        const isOpen = openSections[label];
        return (
          <div key={label} className="border-b border-[#EBEBEB] pb-6 last:border-0">
            <button 
              onClick={() => toggleSection(label)}
              className="w-full flex items-center justify-between text-sm uppercase tracking-[0.3em] text-[#111111] mb-4 font-sans group"
            >
              {label}
              <ChevronDown size={14} className={`text-[#AAAAAA] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
              {isBrand && (
                <div className="relative mb-4">
                  <Search size={12} className="absolute left-0 top-1/2 -translate-y-1/2 text-[#AAAAAA]" />
                  <input 
                    type="text" 
                    placeholder="Search brands..." 
                    value={brandSearch}
                    onChange={(e) => setBrandSearch(e.target.value)}
                    className="w-full bg-transparent border-b border-[#EBEBEB] text-sm pl-5 py-2 focus:outline-none focus:border-[#C8102E] transition-colors placeholder:text-[#CCCCCC]"
                  />
                </div>
              )}
              <ul className="space-y-3 overflow-y-auto pr-2 custom-scrollbar" style={{ maxHeight: isBrand ? '250px' : 'auto' }}>
                {values.map(v => (
                  <li key={v}>
                    <button
                      onClick={() => set(v)}
                      className={`text-sm tracking-wide text-left capitalize transition-colors flex items-center gap-2 ${
                        active === v ? 'text-[#C8102E] font-medium' : 'text-[#888888] hover:text-[#111111]'
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${active === v ? 'bg-[#C8102E]' : 'bg-transparent'}`} />
                      {v === 'all' ? `All ${label.toLowerCase()}s` : v}
                    </button>
                  </li>
                ))}
                {values.length === 0 && <p className="text-sm text-[#AAAAAA]">No brands found.</p>}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="relative z-10 min-h-screen text-[#111111] pt-24 bg-[#FAFAF8]">

      {/* ── MOBILE FILTER DRAWER ─── */}
      <div className={`fixed inset-0 z-[9999] bg-[#FAFAF8] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${mobileFilterOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex items-center justify-between px-8 py-6 border-b border-[#EBEBEB]">
          <span className="text-sm uppercase tracking-[0.3em]">Filters</span>
          <button onClick={() => setMobileFilterOpen(false)} className="p-2 -mr-2"><X size={20} strokeWidth={1} /></button>
        </div>
        <div className="h-[calc(100vh-80px)] overflow-y-auto px-8 py-8">
          <FilterContent />
          <div className="mt-12 pb-12">
            <button 
              onClick={() => setMobileFilterOpen(false)}
              className="w-full bg-[#111111] text-white uppercase tracking-[0.3em] text-sm py-4"
            >
              Show {filteredPerfumes.length} Results
            </button>
          </div>
        </div>
      </div>

      {/* ── PAGE HEADER ─── */}
      <header className="px-8 lg:px-12 pt-8 pb-6 border-b border-[#EBEBEB] flex flex-col md:flex-row md:items-end justify-between gap-6 bg-[#FAFAF8]">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-[#AAAAAA] mb-3">
            VIDEH / FRAGRANCE ARCHIVE
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-light tracking-tight capitalize mb-4">
            {activeSeason === 'all' ? 'The Catalog' : activeSeason}
          </h1>
          
          {/* Animated Counter */}
          <div className="flex items-baseline gap-3 text-[#111111]">
            <span className="text-3xl font-mono tracking-tighter">
              <CountUp to={filteredPerfumes.length} />
            </span>
            <span className="text-sm uppercase tracking-[0.3em] text-[#999999]">Entries Found</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setMobileFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm uppercase tracking-[0.2em] border border-[#EBEBEB] px-4 py-2"
          >
            <SlidersHorizontal size={14} /> Filters
          </button>

          <div className="hidden lg:flex items-center gap-1 border border-[#EBEBEB] p-1 bg-white">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 transition-colors duration-200 ${viewMode === 'grid' ? 'bg-[#111111] text-white' : 'text-[#999999] hover:text-[#111111]'}`}
              aria-label="Grid view"
            >
              <LayoutGrid size={14} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setViewMode('ledger')}
              className={`p-2 transition-colors duration-200 ${viewMode === 'ledger' ? 'bg-[#111111] text-white' : 'text-[#999999] hover:text-[#111111]'}`}
              aria-label="Ledger view"
            >
              <List size={14} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* ── SEASON NAVIGATION ─── */}
      <nav className="flex items-center px-8 lg:px-12 border-b border-[#EBEBEB] bg-[#FAFAF8] overflow-x-auto custom-scrollbar">
        {seasons.map((s) => (
          <button
            key={s}
            onClick={() => handleSeasonChange(s)}
            className={`py-5 px-6 first:pl-0 text-sm uppercase tracking-[0.3em] whitespace-nowrap transition-colors relative ${
              activeSeason === s ? 'text-[#111111]' : 'text-[#AAAAAA] hover:text-[#111111]'
            }`}
          >
            {s === 'all' ? 'All Seasons' : s}
            {activeSeason === s && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8102E] mx-6 first:ml-0" />
            )}
          </button>
        ))}
      </nav>

      <div className="flex flex-col lg:flex-row">

        {/* ── STICKY SIDEBAR FILTERS ─── */}
        <aside className="hidden lg:block w-72 flex-shrink-0 border-r border-[#EBEBEB] bg-[#FAFAF8]">
          <div className="sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto px-8 py-10 custom-scrollbar">
            <FilterContent />
          </div>
        </aside>

        {/* ── MAIN CONTENT ─── */}
        <main className="flex-grow px-8 lg:px-12 py-10">

          {/* Active filter chips */}
          {hasFilters && (
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { val: activeGender, clear: () => setActiveGender('all') },
                { val: activeTime, clear: () => setActiveTime('all') },
                { val: activeBrand, clear: () => setActiveBrand('all') },
                { val: activeOccasion, clear: () => setActiveOccasion('all') },
              ].filter(f => f.val !== 'all').map(({ val, clear }) => (
                <button
                  key={val}
                  onClick={clear}
                  className="text-[11px] uppercase tracking-[0.2em] border border-[#111111] px-3 py-1.5 hover:bg-[#C8102E] hover:border-[#C8102E] hover:text-white transition-all duration-200 flex items-center gap-2"
                >
                  {val} <span className="text-lg leading-none mb-0.5">×</span>
                </button>
              ))}
              <button onClick={clearAll} className="text-[11px] uppercase tracking-[0.2em] text-[#AAAAAA] hover:text-[#111111] px-3 py-1.5 ml-2 transition-colors">
                Clear All
              </button>
            </div>
          )}

          {/* Empty state */}
          {filteredPerfumes.length === 0 && (
            <div className="py-32 text-center border border-[#EBEBEB] bg-white">
              <p className="text-sm uppercase tracking-[0.3em] text-[#999999] mb-6">No Fragrances Match Criteria</p>
              <button onClick={clearAll} className="text-base uppercase tracking-[0.25em] border-b border-[#111111] pb-1 hover:text-[#C8102E] hover:border-[#C8102E] transition-colors">
                Reset Filters
              </button>
            </div>
          )}

          {/* ── GRID VIEW ─── */}
          {viewMode === 'grid' && filteredPerfumes.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredPerfumes.slice(0, visibleCount).map(p => (
                <div key={p.id} className="perfume-item">
                  <FragranceCard perfume={p} />
                </div>
              ))}
            </div>
          )}

          {/* ── LEDGER / TABLE VIEW ─── */}
          {viewMode === 'ledger' && filteredPerfumes.length > 0 && (
            <div className="border-t border-[#EBEBEB]">
              {/* Table header */}
              <div className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-[#EBEBEB] text-sm uppercase tracking-[0.3em] text-[#AAAAAA]">
                <div className="col-span-1">#</div>
                <div className="col-span-2">Brand</div>
                <div className="col-span-3">Name</div>
                <div className="col-span-2">Gender</div>
                <div className="col-span-2">Season</div>
                <div className="col-span-1">Time</div>
                <div className="col-span-1"></div>
              </div>
              {filteredPerfumes.slice(0, visibleCount).map((p) => (
                <Link
                  key={p.id}
                  to={`/fragrance/${p.slug}`}
                  data-cursor-label="VIEW"
                  className="perfume-item ledger-row grid grid-cols-12 gap-4 px-4 py-4 border-b border-[#EBEBEB] text-sm items-center hover:bg-white transition-colors"
                >
                  <div className="col-span-1 text-[#C8102E] font-mono text-sm">{p.id.padStart(3, '0')}</div>
                  <div className="col-span-2 text-[#666666] uppercase tracking-wider text-sm truncate">{p.brand}</div>
                  <div className="col-span-3 font-serif text-base font-light truncate">{p.name}</div>
                  <div className="col-span-2 text-base capitalize text-[#666666] truncate">{p.gender}</div>
                  <div className="col-span-2 text-base text-[#666666] truncate">{p.seasons.slice(0, 2).join(', ')}</div>
                  <div className="col-span-1 text-base text-[#666666] truncate">{p.time}</div>
                  <div className="col-span-1 text-right">
                    <ArrowRight size={12} strokeWidth={1} className="inline text-[#CCCCCC] group-hover:text-[#111111]" />
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {visibleCount < filteredPerfumes.length && (
            <div className="mt-16 flex justify-center pb-20">
              <button
                onClick={() => setVisibleCount(v => v + 24)}
                className="text-sm uppercase tracking-[0.3em] text-[#111111] border border-[#111111] px-12 py-4 hover:bg-[#111111] hover:text-white transition-all duration-300"
              >
                Load More
              </button>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
