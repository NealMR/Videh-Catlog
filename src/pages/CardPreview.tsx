import { perfumes } from '../data/perfumes';
import FragranceCardA from '../components/FragranceCardA';
import FragranceCardB from '../components/FragranceCardB';
import FragranceCardC from '../components/FragranceCardC';

// Pick 3 sample perfumes with good names
const samples = [
  perfumes.find(p => p.name.toLowerCase().includes('memoir')) ||
  perfumes.find(p => p.brand.toLowerCase().includes('amouage')) ||
  perfumes[20],
  perfumes.find(p => p.brand.toLowerCase().includes('chanel')) ||
  perfumes[40],
  perfumes.find(p => p.brand.toLowerCase().includes('dior')) ||
  perfumes[60],
].filter(Boolean) as typeof perfumes;

const CARDS = [
  {
    id: 'A',
    label: 'Option A',
    subtitle: 'Name-First Typography',
    desc: 'Large serif name is the hero. Clean, minimal, maximum whitespace. Brand and notes are secondary.',
    Component: FragranceCardA,
  },
  {
    id: 'B',
    label: 'Option B',
    subtitle: 'Data Pyramid',
    desc: 'Split zones — identity on top, full olfactory pyramid below. Information-rich but structured.',
    Component: FragranceCardB,
  },
  {
    id: 'C',
    label: 'Option C',
    subtitle: 'Vertical Spine',
    desc: 'Brand runs vertically like a book spine. Most architectural and editorial of the three.',
    Component: FragranceCardC,
  },
];

export default function CardPreview() {
  return (
    <div className="relative z-10 min-h-screen bg-[#FDFCF8] pt-28 pb-24 px-8 lg:px-16">

      {/* Header */}
      <div className="mb-16 border-b border-[#E5E5E5] pb-10">
        <p className="text-sm uppercase tracking-[0.4em] text-[#AAAAAA] mb-4">DESIGN PREVIEW</p>
        <h1 className="text-5xl font-serif font-light tracking-tight mb-4">Card Comparison</h1>
        <p className="text-sm text-[#999999] max-w-lg">
          Three distinct card designs shown side by side. Each option uses the same perfume data.
          Tell us which one you want and we'll apply it to the full catalog.
        </p>
      </div>

      {/* One section per card style */}
      {CARDS.map(({ id, label, subtitle, desc, Component }) => (
        <div key={id} className="mb-24">

          {/* Section label */}
          <div className="flex items-baseline gap-6 mb-3">
            <span className="text-base font-mono text-[#C8102E] uppercase tracking-wider">{label}</span>
            <h2 className="text-2xl font-serif font-light">{subtitle}</h2>
          </div>
          <p className="text-sm text-[#999999] mb-10 max-w-lg">{desc}</p>

          {/* 3 sample cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#E5E5E5]">
            {samples.slice(0, 3).map(p => (
              <div key={p.id} className="bg-[#FDFCF8]">
                <Component perfume={p} />
              </div>
            ))}
          </div>

        </div>
      ))}

    </div>
  );
}
