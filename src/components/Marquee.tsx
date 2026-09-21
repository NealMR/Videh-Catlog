// Horizontal ticker marquee with continuous smooth scroll
export default function Marquee({ text, speed }: { text: string; speed?: number }) {
  const items = Array(8).fill(text);
  
  // Calculate duration based on text length to guarantee a perfectly uniform, slow reading speed across all pages.
  // Approx 1.8 seconds per character ensures it glides luxuriously.
  const calculatedSpeed = speed || Math.max(60, text.length * 1.8);

  return (
    <div className="overflow-hidden whitespace-nowrap border-t border-b border-[#EBEBEB] py-4 bg-[#FAFAF8]">
      <div
        className="inline-flex gap-0"
        style={{
          animation: `marquee ${calculatedSpeed}s linear infinite`,
        }}
      >
        {items.map((t, i) => (
          <span
            key={i}
            className="text-base uppercase tracking-[0.3em] text-[#999999] px-8 flex-shrink-0"
          >
            {t} <span className="text-[#CCCCCC] mx-6">·</span>
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {items.map((t, i) => (
          <span
            key={`dup-${i}`}
            className="text-base uppercase tracking-[0.3em] text-[#999999] px-8 flex-shrink-0"
          >
            {t} <span className="text-[#CCCCCC] mx-6">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
