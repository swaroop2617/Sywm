import type { Wishlist } from "../../Context/WishlistContext";
import WishlistCard from "./WishlistCard";

interface Props {
  wishlists: Wishlist[];
  onSelect: (id: string) => void;
}

function WishlistList({ wishlists, onSelect }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {wishlists.map((wishlist) => (
        <WishlistCard
          key={wishlist.id}
          wishlist={wishlist}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default WishlistList;