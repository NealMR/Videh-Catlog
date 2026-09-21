// Printer crop marks in all four corners of the viewport
export default function CropMarks() {

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
