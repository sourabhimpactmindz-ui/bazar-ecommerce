import CartPanel from "../shop/CartPanel.jsx";
import Highlight from "../ui/Highlight.jsx";
import { SHOP_COPY } from "../../data/content.js";
import "./ShopIntro.css";

export default function ShopIntro() {
  return (
    <div className="shop-intro" id="shop">
      <CartPanel />
      <div className="shop-copy">
        <h2>
          <Highlight dark>{SHOP_COPY.title}</Highlight>
        </h2>
        {SHOP_COPY.blocks.map((b) => (
          <div className="shop-block" key={b.head}>
            <h3>{b.head}</h3>
            <p>{b.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
