import type { ReactNode } from "react";

// A small browser window around a screenshot. Colors come from theme
// variables, so it looks right in both dark and light mode.
const BrowserFrame = ({ children }: { children: ReactNode }) => (
  <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-soft)]">
    <div
      className="flex items-center gap-1.5 border-b border-[var(--border)] bg-[var(--surface-strong)] px-3 py-2.5"
      aria-hidden="true"
    >
      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
      <span className="ml-2 h-5 flex-1 rounded-full bg-[var(--surface)]" />
    </div>

    {children}
  </div>
);

export default BrowserFrame;
