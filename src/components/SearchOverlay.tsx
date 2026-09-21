import { useState, useEffect, useRef } from 'react';
import { perfumes } from '../data/perfumes';
import type { Perfume } from '../data/perfumes';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Perfume[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo('.search-overlay', { opacity: 0 }, { opacity: 1, duration: 0.4 });
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const lowerQuery = query.toLowerCase();
    const filtered = perfumes.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) ||
      p.brand.toLowerCase().includes(lowerQuery) ||
      p.topNotes.some(n => n.toLowerCase().includes(lowerQuery)) ||
      p.heartNotes.some(n => n.toLowerCase().includes(lowerQuery)) ||
      p.baseNotes.some(n => n.toLowerCase().includes(lowerQuery)) ||
      p.occasions.some(o => o.toLowerCase().includes(lowerQuery)) ||
      p.seasons.some(s => s.toLowerCase().includes(lowerQuery)) ||
      p.time.toLowerCase().includes(lowerQuery) ||
      p.gender.toLowerCase().includes(lowerQuery)
    );
    setResults(filtered.slice(0, 10)); // Limit to 10 for performance
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="search-overlay fixed inset-0 z-[100] bg-white flex flex-col pt-32 px-6 lg:px-12 text-[#111111]">
      <button 
        onClick={onClose}
        className="absolute top-8 right-6 lg:right-12 text-base uppercase tracking-[0.2em] hover:text-[#999999] transition-colors"
      >
        Close
      </button>

      <div className="container mx-auto max-w-4xl w-full flex flex-col h-full">
        <h2 className="text-base uppercase tracking-[0.3em] text-[#999999] mb-12">Search The Archive</h2>
        
        <input 
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What are you looking for?"
          className="w-full text-3xl md:text-5xl font-serif font-light border-b border-[#E5E5E5] pb-6 outline-none placeholder:text-[#E5E5E5] bg-transparent"
        />

        <div className="mt-12 overflow-y-auto flex-grow pb-24 custom-scrollbar">
          {query.trim() && results.length === 0 && (
             <div className="text-center py-20">
               <p className="text-sm uppercase tracking-[0.2em] text-[#666666] mb-4">No Fragrances Found</p>
               <button onClick={() => setQuery('')} className="text-base uppercase tracking-[0.2em] border-b border-[#111111] pb-1">Try Another Search</button>
             </div>
          )}

          {results.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {results.map(p => (
                <Link 
                  to={`/fragrance/${p.slug}`} 
                  key={p.id} 
                  onClick={onClose}
                  className="group flex items-center gap-8 border border-transparent hover:border-[#E5E5E5] p-4 transition-colors"
                >
                  <div className="w-20 h-24 bg-[#F7F7F7] flex-shrink-0 flex items-center justify-center">
                    <span className="font-serif text-xl font-light text-[#999999]">V</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-light mb-1">{p.name}</h4>
                    <p className="text-base uppercase tracking-[0.2em] text-[#666666]">{p.brand}</p>
                    <p className="text-sm uppercase tracking-[0.2em] text-[#999999] mt-3">{p.gender}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
