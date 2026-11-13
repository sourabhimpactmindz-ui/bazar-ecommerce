import Button from "../ui/Button.jsx";
import Mascot from "../ui/Mascot.jsx";
import "./Hero.css";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <h1>
        <span>Shopping</span> <span>made</span> <span>easy.</span>
      </h1>
      <p>bazaar handles the picking, payments and delivery so you can get back to your day.</p>
      <div className="hero-actions">
        <Button href="#shop">shop now</Button>
        <Button href="#why" variant="white">watch a demo</Button>
      </div>
      <Mascot className="hero-mascot" />
    </header>
  );
}
