import Mascot from "../ui/Mascot.jsx";
import { TECH } from "../../data/content.js";
import "./TechHumans.css";

export default function TechHumans() {
  return (
    <div className="tech">
      <div className="tech-head">
        <h2>{TECH.title}</h2>
        <Mascot className="tech-mascot" />
      </div>
      <div className="tech-features">
        {TECH.features.map((f) => (
          <div key={f.label}>
            <div className="tech-icon" style={{ background: f.color }}>{f.icon}</div>
            <b>{f.label}</b> — {f.text}
          </div>
        ))}
      </div>
    </div>
  );
}
