import ProductCard from "./ProductCard";
import { products } from "../data/products";

function Products() {
  return (
    <section className="overflow-y-auto">
      <ul className="grid grid-cols-3 gap-4 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
}

export default Products;
