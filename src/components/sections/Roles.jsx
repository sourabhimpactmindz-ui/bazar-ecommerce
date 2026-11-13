import Button from "../ui/Button.jsx";
import Highlight from "../ui/Highlight.jsx";
import { ROLES } from "../../data/content.js";
import "./Roles.css";

export default function Roles() {
  const [before] = ROLES.title.split(ROLES.hlWord);
  return (
    <div className="roles" id="roles">
      <h2 className="roles-title">
        {before}
        <Highlight>{ROLES.hlWord}</Highlight>
      </h2>
      <p className="roles-text">{ROLES.text}</p>
      <Button href="#shop">watch a demo</Button>
      <div className="roles-cards">
        {ROLES.cards.map((c) => (
          <div className="role-card" key={c.tag}>
            <span className="role-tag">{c.tag}</span>
            <div>
              <h4>{c.title}</h4>
              <p>{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
