import { useEffect, useRef, useState } from "react";
import "./Highlight.css";

// Marker sweep that plays once when the text scrolls into view.
// dark: black block with yellow text (used on the big statement).
export default function Highlight({ dark = false, children }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setOn(true); return; }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setOn(true); io.disconnect(); }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} className={`hl${dark ? " dark" : ""}${on ? " on" : ""}`}>
      {children}
    </span>
  );
}
