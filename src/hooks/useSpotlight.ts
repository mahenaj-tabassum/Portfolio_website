import { useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { canAnimate } from "../utils/motion";

/**
 * Feeds the cursor position to the `.spot-card` styles in index.css
 * (via the --mx / --my CSS variables) so the border glows where the pointer is.
 */
export default function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  const onPointerMove = (e: ReactPointerEvent<T>) => {
    const el = ref.current;
    if (!el || !canAnimate()) return;

    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return { ref, onPointerMove };
}
