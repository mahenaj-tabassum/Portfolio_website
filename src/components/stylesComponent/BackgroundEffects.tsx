export default function BackgroundEffects() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Left sky-blue glow */}
      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />

      {/* Right violet glow */}
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
    </div>
  );
}
