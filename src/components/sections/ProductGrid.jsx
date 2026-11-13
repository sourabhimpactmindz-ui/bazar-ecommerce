import ProductCard from "../shop/ProductCard.jsx";
import { PRODUCTS } from "../../data/products.js";
import "./ProductGrid.css";

export default function ProductGrid() {
  return (
    <div>
      <h2 className="picks-title">This week’s picks</h2>
      <div className="product-grid">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
