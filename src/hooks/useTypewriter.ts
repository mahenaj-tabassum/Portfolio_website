// Detects the user's motion preference to ensure an accessible experience
const reduceMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

import { useEffect, useState } from "react";

/**
 * Custom hook that creates a typewriter animation for a sequence of roles.
 * Respects the user's reduced-motion preference and cleans up timers when the component unmounts.
 */
export function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  useEffect(() => {
    if (reduceMotion()) {
      setText(words[0]);
      return;
    }
    let w = 0;
    let i = 0;
    let deleting = false;
    let timer = 0;
    const step = () => {
      const word = words[w];
      i += deleting ? -1 : 1;
      setText(word.slice(0, i));
      let delay = deleting ? 40 : 85;
      if (!deleting && i === word.length) {
        deleting = true;
        delay = 1800;
      } else if (deleting && i === 0) {
        deleting = false;
        w = (w + 1) % words.length;
        delay = 350;
      }
      timer = window.setTimeout(step, delay);
    };
    timer = window.setTimeout(step, 700);
    return () => window.clearTimeout(timer);
  }, [words]);
  return text;
}
