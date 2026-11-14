
import ProductCard from "../shop/ProductCard.jsx";
import "./ProductGrid.css";
import { useGetProductsQuery } from "../../Api/productsApi.js";

export default function ProductGrid() {

    const {
        data: response,
        isLoading,
        isError
    } = useGetProductsQuery();

    const products = response?.Products || [];

    if (isLoading) {
        return <p>Loading products...</p>;
    }

    if (isError) {
        return <p>Failed to load products.</p>;
    }

    return (
        <div>
            <h2 className="picks-title">This week's picks</h2>

            <div className="product-grid">

                {products.length > 0 ? (
                    products.map((p) => (
                        <ProductCard
                            key={p._id}
                            product={p}
                        />
                    ))
                ) : (
                    <p>Products Not Available</p>
                )}

            </div>
        </div>
    );
}
