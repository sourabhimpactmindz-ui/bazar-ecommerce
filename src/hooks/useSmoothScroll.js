import { useEffect } from "react";
import Lenis from "lenis";

// Eased, slightly delayed scrolling for wheel / trackpad.
// Touch devices keep native scrolling. Skipped when the user prefers reduced motion.
// Tune the feel with `duration` (higher = more delay) in the options below.
export default function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      anchors: true, // #links glide to their section
    });

    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
}
