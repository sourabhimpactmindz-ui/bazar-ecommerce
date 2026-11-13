import useInView from "../../hooks/useInView.js";
import { CART } from "../../data/products.js";
import "./CartPanel.css";

export default function CartPanel() {
  const [ref, seen] = useInView(0.3);
  return (
    <div className="cart-stage" id="cart" ref={ref}>
      <div className={`cart-card${seen ? " on" : ""}`}>
        <div className="cart-who">
          <div className="cart-avatar">{CART.customer[0]}</div>
          <div>
            {CART.customer}
            <small>{CART.role}</small>
          </div>
          <div className="cart-amount">
            {CART.total}
            <small>{CART.totalLabel}</small>
          </div>
        </div>
        <p className="cart-group">{CART.groupLabel}</p>
        <ul className="cart-lines">
          {CART.items.map((i, idx) => (
            <li key={i.id} style={{ "--i": idx }}>
              <span className="cart-dot" style={{ background: i.bg }}>{i.emoji}</span>
              <span className="cart-name">
                {i.name}
                <small>{i.sub}</small>
              </span>
              {i.tag && <span className="cart-tag">{i.tag}</span>}
              <em>{i.price}</em>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
