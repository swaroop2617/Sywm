import products from "../data/products.json";

import ProductGrid from "../components/Product/ProductGrid";
import WishlistProducts from "../components/Wishlist/WishlistProducts";
import MergeWishlistModal from "../components/Wishlist/MergeWishlistModal";

import { useWishlist } from "../Context/WishlistContext";

function Home() {
  const {
    wishlists,
    addProduct,
    removeProduct,
  } = useWishlist();

  const wishlist = wishlists[0];

  const wishlistProducts = products.filter((product) =>
    wishlist.productIds.includes(product.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">

      <h1 className="text-3xl font-bold mb-8">
        Featured Products
      </h1>

      <ProductGrid
        products={products}
        onAddToWishlist={(id) =>
          addProduct(wishlist.id, id)
        }
      />

      <div className="mt-10">

        <WishlistProducts
          products={wishlistProducts}
          onRemove={(id) =>
            removeProduct(wishlist.id, id)
          }
        />

      </div>

      <MergeWishlistModal />

    </div>
  );
}

export default Home;