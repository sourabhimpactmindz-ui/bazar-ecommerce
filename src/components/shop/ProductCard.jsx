import "./ProductCard.css";

// Static card. Add an onAdd prop and wire it to the button when you add cart logic.
export default function ProductCard({ product }) {
  const { name, desc, price, emoji, bg } = product;
  return (
    <article className="product">
      <div className="product-thumb" style={{ background: bg }}>{emoji}</div>
      <h4>{name}</h4>
      <small>{desc}</small>
      <div className="product-row">
        <span>{price}</span>
        <button className="product-add" type="button" aria-label={`Add ${name} to cart`}>+</button>
      </div>
    </article>
  );
}
