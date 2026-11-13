import Button from "../ui/Button.jsx";
import { NAV_LINKS } from "../../data/content.js";
import { CART } from "../../data/products.js";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <a className="logo" href="#top">bazaar</a>
      <div className="nav-right">
        {NAV_LINKS.map((l) => (
          <a key={l.href} className="nav-link" href={l.href}>{l.label}</a>
        ))}
        <a className="cartbtn" href="#cart" aria-label="Cart">
          Cart<b>{CART.items.length}</b>
        </a>
        <Button href="#shop">shop now</Button>
      </div>
    </nav>
  );
}
