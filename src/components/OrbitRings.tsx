export default function OrbitRings() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
    >
      <div className="relative w-[560px] h-[560px] max-w-[90vw] max-h-[90vw]">
        <div className="absolute inset-0 rounded-full border border-ion/15 animate-orbit" />
        <div className="absolute inset-[60px] rounded-full border border-gamma/20 animate-orbitSlow" />
        <div className="absolute inset-[120px] rounded-full border border-ion/10 animate-orbit" />
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-ion shadow-glow" />
        <span className="absolute bottom-[60px] right-0 w-1.5 h-1.5 rounded-full bg-gamma shadow-glow-violet" />
      </div>
    </div>
  );
}
