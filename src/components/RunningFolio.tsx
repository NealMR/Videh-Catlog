// Fixed vertical running folio on left edge — like a luxury book spine
export default function RunningFolio() {
  return (
    <div className="fixed left-0 top-0 h-full z-40 pointer-events-none hidden lg:flex items-center justify-center">
      <div
        className="text-sm uppercase tracking-[0.4em] text-[#CCCCCC] select-none"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        VIDEH — MASTER PERFUME CATALOG — VOL. 01 — 2026
      </div>
    </div>
  );
}
