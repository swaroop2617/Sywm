import type { Wishlist } from "../../Context/WishlistContext";

interface Props {
  wishlists: Wishlist[];
  value: string;
  onChange: (id: string) => void;
}

function WishlistSelector({
  wishlists,
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 rounded-lg w-full"
    >
      <option value="">Select Wishlist</option>

      {wishlists.map((wishlist) => (
        <option
          key={wishlist.id}
          value={wishlist.id}
        >
          {wishlist.name}
        </option>
      ))}
    </select>
  );
}

export default WishlistSelector;