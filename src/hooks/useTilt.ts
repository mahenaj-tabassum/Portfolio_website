import { useEffect, useRef } from "react";
import { canAnimate } from "../utils/motion";

/**
 * Tilts the referenced element in 3D, following the cursor.
 * Listens on the element's parent, so the parent should be the hover area
 * and should not be the element that has its own transform animation.
 */
export default function useTilt<T extends HTMLElement>(max = 7) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    const host = el?.parentElement;
    if (!el || !host || !canAnimate()) return;

    let raf = 0;

    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = host.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${-py * max}deg) rotateY(${px * max}deg)`;
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.transform = "";
    };

    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, [max]);

  return ref;
}
