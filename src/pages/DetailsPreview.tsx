import { Link } from 'react-router-dom';

const mockPerfume = {
  brand: 'AMOUAGE',
  name: 'Bracken Woman',
  gender: 'For Women',
  topNotes: ['Fern', 'Wild Berries'],
  heartNotes: ['Chamomile', 'Leather', 'Narcissus'],
  baseNotes: ['Birch', 'Vetiver', 'Patchouli']
};

export default function DetailsPreview() {
  return (
    <div className="min-h-screen bg-[#E5E5E5] text-[#111111] p-8 font-sans flex flex-col gap-24">
      
      <div className="text-center mb-8">
        <h1 className="text-3xl font-serif">5 Design Directions for the Details Page</h1>
        <p className="text-[#666666] mt-2 uppercase tracking-widest text-xs">Without using photos</p>
      </div>

      {/* ── OPTION 1: THE RADAR / GEOMETRIC (Concentric Circles) ── */}
      <section className="bg-[#FAFAF8] shadow-2xl overflow-hidden rounded-sm">
        <div className="border-b border-[#EBEBEB] p-4 text-xs font-bold uppercase tracking-widest bg-white">Option 1: The Olfactory Rings (Geometric)</div>
        <div className="flex flex-col lg:flex-row min-h-[70vh]">
          <div className="w-full lg:w-1/2 p-16 flex flex-col justify-center border-r border-[#EBEBEB]">
            <p className="text-xs uppercase tracking-[0.4em] text-[#AAAAAA] mb-4">{mockPerfume.brand}</p>
            <h2 className="text-7xl font-serif font-light leading-none mb-6">{mockPerfume.name}</h2>
            <p className="text-sm uppercase tracking-[0.3em] text-[#666666]">{mockPerfume.gender}</p>
          </div>
          <div className="w-full lg:w-1/2 bg-[#F5F4F0] p-16 flex items-center justify-center relative overflow-hidden">
            {/* Abstract visual representation of notes */}
            <div className="relative w-[400px] h-[400px] flex items-center justify-center">
              {/* Base */}
              <div className="absolute inset-8 rounded-full border-4 border-[#111111] flex items-end justify-center pb-8">
                <span className="text-[10px] uppercase tracking-widest text-[#111111] bg-[#F5F4F0] px-2">Base: {mockPerfume.baseNotes.join(', ')}</span>
              </div>
              {/* Heart */}
              <div className="absolute inset-20 rounded-full border border-[#666666] flex items-end justify-center pb-6">
                <span className="text-[10px] uppercase tracking-widest text-[#666666] bg-[#F5F4F0] px-2">Heart: {mockPerfume.heartNotes.join(', ')}</span>
              </div>
              {/* Top */}
              <div className="absolute inset-32 rounded-full border border-dashed border-[#AAAAAA] flex items-end justify-center pb-4">
                <span className="text-[10px] uppercase tracking-widest text-[#AAAAAA] bg-[#F5F4F0] px-2">Top: {mockPerfume.topNotes.join(', ')}</span>
              </div>
              <div className="w-4 h-4 rounded-full bg-[#C8102E]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── OPTION 2: THE EDITORIAL SPLIT (High Contrast) ── */}
      <section className="bg-[#FAFAF8] shadow-2xl overflow-hidden rounded-sm">
        <div className="border-b border-[#EBEBEB] p-4 text-xs font-bold uppercase tracking-widest bg-white">Option 2: The Editorial Split (High Contrast)</div>
        <div className="flex flex-col lg:flex-row min-h-[70vh]">
          <div className="w-full lg:w-1/2 bg-[#0E0D0C] text-white p-16 flex flex-col justify-between relative overflow-hidden">
            {/* Wave Texture */}
            <div 
              className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100 Q 250 50 500 100 T 1000 100 T 1500 100 T 2000 100' stroke='white' stroke-width='0.5' fill='none' opacity='0.5'/%3E%3Cpath d='M0 150 Q 250 100 500 150 T 1000 150 T 1500 150 T 2000 150' stroke='white' stroke-width='0.5' fill='none' opacity='0.3'/%3E%3Cpath d='M0 200 Q 250 150 500 200 T 1000 200 T 1500 200 T 2000 200' stroke='white' stroke-width='0.5' fill='none' opacity='0.2'/%3E%3C/svg%3E")`,
                backgroundSize: '100% 200px'
              }} 
            />
            <div className="relative z-10 h-full flex flex-col justify-between">
            <p className="text-xs uppercase tracking-[0.4em] text-[#888888]">{mockPerfume.brand}</p>
            <h2 className="text-[8vw] font-serif font-light leading-[0.9] tracking-tight">{mockPerfume.name}</h2>
            <p className="text-sm uppercase tracking-[0.3em] text-[#C8102E]">{mockPerfume.gender}</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-16 flex flex-col justify-center gap-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#C8102E] mb-4">Top Notes</p>
              <p className="text-4xl font-serif font-light text-[#111111]">{mockPerfume.topNotes.join(' · ')}</p>
            </div>
            <div className="ml-12">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#C8102E] mb-4">Heart Notes</p>
              <p className="text-4xl font-serif font-light text-[#555555]">{mockPerfume.heartNotes.join(' · ')}</p>
            </div>
            <div className="ml-24">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#C8102E] mb-4">Base Notes</p>
              <p className="text-4xl font-serif font-light text-[#999999]">{mockPerfume.baseNotes.join(' · ')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OPTION 3: THE TYPOGRAPHIC PYRAMID ── */}
      <section className="bg-[#FAFAF8] shadow-2xl overflow-hidden rounded-sm">
        <div className="border-b border-[#EBEBEB] p-4 text-xs font-bold uppercase tracking-widest bg-white">Option 3: The Literal Pyramid</div>
        <div className="min-h-[70vh] flex flex-col items-center justify-center p-16 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#AAAAAA] mb-6">{mockPerfume.brand}</p>
          <h2 className="text-6xl font-serif font-light mb-16">{mockPerfume.name}</h2>
          
          <div className="flex flex-col items-center gap-10 w-full max-w-4xl mx-auto border-t border-[#EBEBEB] pt-16">
            <div className="text-center">
              <p className="text-[9px] uppercase tracking-[0.5em] text-[#C8102E] mb-3">Top Notes (Ephemeral)</p>
              <p className="text-xl font-light text-[#888888]">{mockPerfume.topNotes.join(' — ')}</p>
            </div>
            <div className="text-center w-3/4 border-t border-[#EBEBEB] pt-10">
              <p className="text-[9px] uppercase tracking-[0.5em] text-[#C8102E] mb-3">Heart Notes (Core)</p>
              <p className="text-3xl font-serif font-light text-[#555555]">{mockPerfume.heartNotes.join(' — ')}</p>
            </div>
            <div className="text-center w-full border-t border-[#EBEBEB] pt-10">
              <p className="text-[9px] uppercase tracking-[0.5em] text-[#C8102E] mb-3">Base Notes (Foundation)</p>
              <p className="text-5xl font-serif font-light text-[#111111]">{mockPerfume.baseNotes.join(' — ')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OPTION 4: THE PERIODIC TABLE / LEDGER ── */}
      <section className="bg-[#FAFAF8] shadow-2xl overflow-hidden rounded-sm">
        <div className="border-b border-[#EBEBEB] p-4 text-xs font-bold uppercase tracking-widest bg-white">Option 4: The Scientific Ledger</div>
        <div className="min-h-[70vh] p-16 flex flex-col">
          <header className="mb-16 border-b border-[#111111] pb-8 flex justify-between items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#AAAAAA] mb-4">{mockPerfume.brand}</p>
              <h2 className="text-7xl font-serif font-light leading-none">{mockPerfume.name}</h2>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-[0.4em] text-[#C8102E] mb-2">FORMULA PROFILE</p>
              <p className="text-sm text-[#111111] font-mono">ID: 019 / {mockPerfume.gender.toUpperCase()}</p>
            </div>
          </header>

          <div className="grid grid-cols-3 gap-8 flex-grow">
            {/* Top */}
            <div className="border border-[#EBEBEB] flex flex-col">
              <div className="bg-[#111111] text-white text-[10px] uppercase tracking-widest p-3">01 / Top Notes</div>
              <div className="p-8 grid grid-cols-2 gap-4 flex-grow content-start">
                {mockPerfume.topNotes.map(n => (
                  <div key={n} className="aspect-square border border-[#EBEBEB] flex items-center justify-center p-4 text-center bg-white shadow-sm hover:border-[#C8102E] transition-colors">
                    <span className="text-sm font-serif">{n}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Heart */}
            <div className="border border-[#EBEBEB] flex flex-col">
              <div className="bg-[#555555] text-white text-[10px] uppercase tracking-widest p-3">02 / Heart Notes</div>
              <div className="p-8 grid grid-cols-2 gap-4 flex-grow content-start">
                {mockPerfume.heartNotes.map(n => (
                  <div key={n} className="aspect-square border border-[#EBEBEB] flex items-center justify-center p-4 text-center bg-white shadow-sm hover:border-[#C8102E] transition-colors">
                    <span className="text-sm font-serif">{n}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Base */}
            <div className="border border-[#EBEBEB] flex flex-col">
              <div className="bg-[#AAAAAA] text-white text-[10px] uppercase tracking-widest p-3">03 / Base Notes</div>
              <div className="p-8 grid grid-cols-2 gap-4 flex-grow content-start">
                {mockPerfume.baseNotes.map(n => (
                  <div key={n} className="aspect-square border border-[#EBEBEB] flex items-center justify-center p-4 text-center bg-white shadow-sm hover:border-[#C8102E] transition-colors">
                    <span className="text-sm font-serif">{n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OPTION 5: THE AURA / SCENT CLOUD ── */}
      <section className="bg-[#FAFAF8] shadow-2xl overflow-hidden rounded-sm relative">
        <div className="absolute top-0 w-full z-20 border-b border-[#EBEBEB] p-4 text-xs font-bold uppercase tracking-widest bg-white/50 backdrop-blur-md">Option 5: The Scent Aura</div>
        
        {/* CSS Mesh Gradient to represent the scent */}
        <div className="absolute inset-0 z-0 opacity-40" 
          style={{ 
            background: 'radial-gradient(circle at 20% 30%, rgba(200,16,46,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(17,17,17,0.1) 0%, transparent 50%)',
            filter: 'blur(40px)'
          }} 
        />

        <div className="relative z-10 min-h-[70vh] flex items-center p-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-[#111111] mb-6">{mockPerfume.brand}</p>
            <h2 className="text-8xl font-serif font-light mb-12">{mockPerfume.name}</h2>
            
            <div className="flex gap-12 border-t border-[#111111]/20 pt-8">
              <div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-[#C8102E] mb-2">TOP</p>
                <p className="text-sm text-[#111111]">{mockPerfume.topNotes.join(', ')}</p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-[#C8102E] mb-2">HEART</p>
                <p className="text-sm text-[#111111]">{mockPerfume.heartNotes.join(', ')}</p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-[#C8102E] mb-2">BASE</p>
                <p className="text-sm text-[#111111]">{mockPerfume.baseNotes.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
