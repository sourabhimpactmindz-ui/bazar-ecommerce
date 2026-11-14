import { useState } from "react";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { name, price, image, stock } = product;
  const [imgFailed, setImgFailed] = useState(false);

  const showImage = image && !imgFailed;
  const inStock = stock === "available";

  return (
    <article className="product">
      <div className="product-thumb">
        {showImage ? (
          <img
            className="product-img"
            src={image}
            alt={name}
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <span className="product-fallback" aria-hidden="true">
            {name?.charAt(0).toUpperCase()}
          </span>
        )}
      </div>

      <h4>{name}</h4>
      <small className={inStock ? "stock stock--in" : "stock stock--out"}>
        {inStock ? "In stock" : "Out of stock"}
      </small>

      <div className="product-row">
        <span>₹{Number(price).toLocaleString("en-IN")}</span>
        <button
          className="product-add"
          type="button"
          disabled={!inStock}
          aria-label={inStock ? `Add ${name} to cart` : `${name} is out of stock`}
        >
          +
        </button>
      </div>
    </article>
  );
}
