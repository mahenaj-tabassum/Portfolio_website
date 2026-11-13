import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router";

/**
 * Keeps scrolling correct now that the site has more than one page:
 *  - /#about            -> scrolls to the section (smooth on the same page,
 *                          instant when arriving from another page)
 *  - new page, no hash  -> starts at the top
 *  - browser back/fwd   -> the browser restores its own position
 */
const ScrollManager = () => {
  const { pathname, hash, key } = useLocation();
  const navType = useNavigationType();
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    const isFirstLoad = prevPath.current === null;
    const pathChanged = prevPath.current !== pathname;
    prevPath.current = pathname;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));

      if (target) {
        const smooth = !reduceMotion && !isFirstLoad && !pathChanged;
        target.scrollIntoView({ behavior: smooth ? "smooth" : "instant" });
        return;
      }
    }

    // Back / forward: let the browser put the page where it was
    if (navType === "POP") return;

    if (pathChanged) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash, key, navType]);

  return null;
};

export default ScrollManager;
