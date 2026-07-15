import type { Product } from "../../types/product";

interface Props {
  product: Product;
  onAddToWishlist: (id: string) => void;
}

function ProductCard({ product, onAddToWishlist }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition">

      <img
        src={product.image}
        alt={product.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">

        <p className="text-sm text-blue-600 font-medium">
          {product.category}
        </p>

        <h2 className="text-lg font-bold mt-2">
          {product.title}
        </h2>

        <p className="text-gray-500 text-sm mt-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-4">

          <span className="text-xl font-bold text-green-600">
            ₹{product.price}
          </span>

          <span className="text-yellow-500">
            ⭐ {product.rating}
          </span>

        </div>

        <button
          onClick={() => onAddToWishlist(product.id)}
          className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Add To Wishlist
        </button>

      </div>

    </div>
  );
}

export default ProductCard;