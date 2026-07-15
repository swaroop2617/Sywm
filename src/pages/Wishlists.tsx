import products from "../data/products.json";
import { useWishlist } from "../Context/WishlistContext";

import WishlistProducts from "../components/Wishlist/WishlistProducts";
import MergeWishlistModal from "../components/Wishlist/MergeWishlistModal";

function WishlistPage() {
  const {
    wishlists,
    removeProduct,
  } = useWishlist();

  if (wishlists.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">
          My Wishlists
        </h1>

        <div className="bg-white rounded-xl shadow p-8 text-center">
          <p className="text-gray-500 text-lg">
            No wishlists available.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-8">
        My Wishlists
      </h1>

      {wishlists.map((wishlist) => {

        const wishlistProducts = products.filter((product) =>
          wishlist.productIds.includes(product.id)
        );

        return (
          <div
            key={wishlist.id}
            className="bg-white rounded-xl shadow-md p-6 mb-8"
          >

            <div className="flex justify-between items-center border-b pb-4 mb-5">

              <div>
                <h2 className="text-2xl font-semibold">
                  {wishlist.name}
                </h2>

                <p className="text-gray-500 mt-1">
                  {wishlist.productIds.length} Item
                  {wishlist.productIds.length !== 1 ? "s" : ""}
                </p>
              </div>

            </div>

            <WishlistProducts
              products={wishlistProducts}
              onRemove={(productId) =>
                removeProduct(wishlist.id, productId)
              }
            />

          </div>
        );
      })}

      <MergeWishlistModal />

    </div>
  );
}

export default WishlistPage;