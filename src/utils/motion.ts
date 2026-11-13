// Pointer-driven effects (tilt, spotlight, magnetic) only run for mouse users
// who haven't asked for reduced motion. Touch devices get the static UI.
export const canAnimate = () =>
  window.matchMedia("(prefers-reduced-motion: no-preference)").matches &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;
