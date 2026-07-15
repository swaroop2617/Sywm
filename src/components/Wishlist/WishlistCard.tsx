import type { Wishlist } from "../../Context/WishlistContext";

interface Props {
  wishlist: Wishlist;
  onSelect: (id: string) => void;
}

function WishlistCard({
  wishlist,
  onSelect,
}: Props) {
  return (
    <div
      onClick={() => onSelect(wishlist.id)}
      className="bg-white border rounded-xl shadow-sm p-5 cursor-pointer hover:border-blue-500 hover:shadow-md transition"
    >
      <h3 className="text-lg font-bold text-gray-800">
        {wishlist.name}
      </h3>

      <p className="text-gray-500 mt-2">
        {wishlist.productIds.length} Product
        {wishlist.productIds.length !== 1 ? "s" : ""}
      </p>
    </div>
  );
}

export default WishlistCard;