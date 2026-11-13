import { useEffect, useRef } from "react";
import Highlight from "../ui/Highlight.jsx";
import Icon from "../ui/Icons.jsx";
import { PAIN_POINTS } from "../../data/content.js";
import "./PainPoints.css";

const DELAY = 3000; // har slide ke beech ka time (ms)
const RESUME_AFTER = 4000; // touch ke baad dobara start hone ka time (ms)

export default function PainPoints() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const mq = window.matchMedia("(max-width: 820px)");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let timer = null;
    let resumeTimeout = null;
    let scrollTimeout = null;
    let index = 0;

    const getCards = () => slider.querySelectorAll(".pain-card");

    const slideTo = (i) => {
      const card = getCards()[i];
      if (!card) return;
      const left = card.offsetLeft - (slider.clientWidth - card.offsetWidth) / 2;
      slider.scrollTo({ left, behavior: "smooth" });
    };

    const next = () => {
      const total = getCards().length;
      if (!total) return;
      index = (index + 1) % total; // last ke baad wapas pehle par
      slideTo(index);
    };

    const start = () => {
      if (timer || !mq.matches || reduceMotion) return;
      timer = setInterval(next, DELAY);
    };

    const stop = () => {
      clearInterval(timer);
      timer = null;
    };

    // user swipe kare to ruk jao, chhodne ke baad dobara chalao
    const pauseThenResume = () => {
      stop();
      clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(start, RESUME_AFTER);
    };

    // manual swipe ke baad index sync rakho
    const onScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const cards = [...getCards()];
        const center = slider.scrollLeft + slider.clientWidth / 2;
        let best = { i: 0, d: Infinity };
        cards.forEach((c, i) => {
          const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - center);
          if (d < best.d) best = { i, d };
        });
        index = best.i;
      }, 100);
    };

    const onMqChange = () => (mq.matches ? start() : stop());
    const onVisibility = () => (document.hidden ? stop() : start());

    slider.addEventListener("touchstart", pauseThenResume, { passive: true });
    slider.addEventListener("pointerdown", pauseThenResume);
    slider.addEventListener("scroll", onScroll, { passive: true });
    mq.addEventListener("change", onMqChange);
    document.addEventListener("visibilitychange", onVisibility);

    start();

    // cleanup (component unmount par)
    return () => {
      stop();
      clearTimeout(resumeTimeout);
      clearTimeout(scrollTimeout);
      slider.removeEventListener("touchstart", pauseThenResume);
      slider.removeEventListener("pointerdown", pauseThenResume);
      slider.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", onMqChange);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div id="why">
      <h2 className="pain-title">
        Online shopping is a <Highlight>grind.</Highlight>
      </h2>
      <div className="pain-cards" ref={sliderRef}>
        {PAIN_POINTS.map((p) => (
          <div className="pain-card" key={p.title}>
            <div>
              <h4>{p.title}</h4>
              {p.text}
            </div>
            <Icon name={p.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}