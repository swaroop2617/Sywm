import ProductCard from "./ProductCard";
import type { Product } from "../../types/product";

interface Props {
  products: Product[];
  onAddToWishlist: (id: string) => void;
}

function ProductGrid({
  products,
  onAddToWishlist,
}: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToWishlist={onAddToWishlist}
        />
      ))}
    </div>
  );
}

export default ProductGrid;