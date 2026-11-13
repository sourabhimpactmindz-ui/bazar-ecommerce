import Button from "../ui/Button.jsx";
import Highlight from "../ui/Highlight.jsx";
import Icon from "../ui/Icons.jsx";
import { PROMISES } from "../../data/content.js";
import "./WinCta.css";

export default function WinCta() {
  return (
    <section className="win">
      <div>
        <h2>
          We win when you’re <Highlight>happy.</Highlight>
        </h2>
        <p className="win-text">We’re not selling you more stuff. We’re helping you find the right one.</p>
      </div>
      <ul>
        {PROMISES.map((p) => (
          <li key={p.text}>
            <Icon name={p.icon} />
            {p.text}
          </li>
        ))}
      </ul>
      <div className="cta">
        <h2>Ready to fill your first cart?</h2>
        <Button href="#shop" variant="yellow">shop now</Button>
      </div>
    </section>
  );
}
