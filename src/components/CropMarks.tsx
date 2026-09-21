// Printer crop marks in all four corners of the viewport
export default function CropMarks() {
  const size = 16;
  const gap = 6;

  const mark = (pos: string) => {
    const isTop = pos.includes('top');
    const isLeft = pos.includes('left');
    return (
      <div
        className={`fixed z-[9997] pointer-events-none ${pos}`}
        style={{
          top: isTop ? gap : undefined,
          bottom: !isTop ? gap : undefined,
          left: isLeft ? gap : undefined,
          right: !isLeft ? gap : undefined,
        }}
      >
        {/* Horizontal arm */}
        <div
          className="absolute bg-[#CCCCCC]"
          style={{
            width: size,
            height: 1,
            top: 0,
            left: isLeft ? 0 : undefined,
            right: !isLeft ? 0 : undefined,
          }}
        />
        {/* Vertical arm */}
        <div
          className="absolute bg-[#CCCCCC]"
          style={{
            height: size,
            width: 1,
            top: 0,
            left: isLeft ? 0 : undefined,
            right: !isLeft ? 0 : undefined,
          }}
        />
      </div>
    );
  };

  return (
    <>
      {/* Top-left */}
      <div className="fixed top-2 left-2 z-[9997] pointer-events-none w-4 h-4">
        <div className="absolute top-0 left-0 w-full h-px bg-[#CCCCCC]" />
        <div className="absolute top-0 left-0 h-full w-px bg-[#CCCCCC]" />
      </div>
      {/* Top-right */}
      <div className="fixed top-2 right-2 z-[9997] pointer-events-none w-4 h-4">
        <div className="absolute top-0 right-0 w-full h-px bg-[#CCCCCC]" />
        <div className="absolute top-0 right-0 h-full w-px bg-[#CCCCCC]" />
      </div>
      {/* Bottom-left */}
      <div className="fixed bottom-2 left-2 z-[9997] pointer-events-none w-4 h-4">
        <div className="absolute bottom-0 left-0 w-full h-px bg-[#CCCCCC]" />
        <div className="absolute bottom-0 left-0 h-full w-px bg-[#CCCCCC]" />
      </div>
      {/* Bottom-right */}
      <div className="fixed bottom-2 right-2 z-[9997] pointer-events-none w-4 h-4">
        <div className="absolute bottom-0 right-0 w-full h-px bg-[#CCCCCC]" />
        <div className="absolute bottom-0 right-0 h-full w-px bg-[#CCCCCC]" />
      </div>
    </>
  );
}
