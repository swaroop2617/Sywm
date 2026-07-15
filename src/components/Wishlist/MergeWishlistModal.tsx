import { useState } from "react";
import { useWishlist } from "../../Context/WishlistContext";
import WishlistSelector from "./WishlistSelector";

function MergeWishlistModal() {

  const { wishlists, mergeWishlists } = useWishlist();

  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const handleMerge = () => {

    if (!a || !b) return;

    if (a === b) return;

    mergeWishlists(a, b);

    alert("Merged Successfully");

    setA("");
    setB("");

  };

  return (

    <div className="bg-white p-6 rounded-xl shadow mt-10">

      <h2 className="text-2xl font-bold mb-5">
        Merge Wishlists
      </h2>

      <div className="space-y-4">

        <WishlistSelector
          wishlists={wishlists}
          value={a}
          onChange={setA}
        />

        <WishlistSelector
          wishlists={wishlists}
          value={b}
          onChange={setB}
        />

        <button
          onClick={handleMerge}
          className="bg-green-600 text-white px-5 py-2 rounded-lg"
        >
          Merge
        </button>

      </div>

    </div>

  );

}

export default MergeWishlistModal;