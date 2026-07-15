import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";

export interface Wishlist {
  id: string;
  name: string;
  productIds: string[];
}

interface WishlistContextType {
  wishlists: Wishlist[];

  createWishlist: (name: string) => void;

  deleteWishlist: (wishlistId: string) => void;

  addProduct: (
    wishlistId: string,
    productId: string
  ) => void;

  removeProduct: (
    wishlistId: string,
    productId: string
  ) => void;

  mergeWishlists: (
    wishlistAId: string,
    wishlistBId: string
  ) => void;
}

const WishlistContext =
  createContext<WishlistContextType | null>(null);

const STORAGE_KEY = "wishlist-store";

interface Props {
  children: ReactNode;
}

export function WishlistProvider({ children }: Props) {
  const [wishlists, setWishlists] = useState<Wishlist[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      return JSON.parse(saved);
    }

    // Default wishlist
    return [
      {
        id: crypto.randomUUID(),
        name: "My Wishlist",
        productIds: [],
      },
    ];
  });

  // Save automatically whenever wishlist changes
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(wishlists)
    );
  }, [wishlists]);

  // Create Wishlist
  const createWishlist = (name: string) => {
    const exists = wishlists.some(
      (wishlist) =>
        wishlist.name.toLowerCase() ===
        name.toLowerCase()
    );

    if (exists) return;

    const newWishlist: Wishlist = {
      id: crypto.randomUUID(),
      name,
      productIds: [],
    };

    setWishlists((prev) => [...prev, newWishlist]);
  };

  // Delete Wishlist
  const deleteWishlist = (wishlistId: string) => {
    setWishlists((prev) =>
      prev.filter(
        (wishlist) => wishlist.id !== wishlistId
      )
    );
  };

  // Add Product
  const addProduct = (
    wishlistId: string,
    productId: string
  ) => {
    setWishlists((prev) =>
      prev.map((wishlist) => {
        if (wishlist.id !== wishlistId)
          return wishlist;

        if (
          wishlist.productIds.includes(productId)
        ) {
          return wishlist;
        }

        return {
          ...wishlist,
          productIds: [
            ...wishlist.productIds,
            productId,
          ],
        };
      })
    );
  };

  // Remove Product
  const removeProduct = (
    wishlistId: string,
    productId: string
  ) => {
    setWishlists((prev) =>
      prev.map((wishlist) => {
        if (wishlist.id !== wishlistId)
          return wishlist;

        return {
          ...wishlist,
          productIds:
            wishlist.productIds.filter(
              (id) => id !== productId
            ),
        };
      })
    );
  };

  // Merge Wishlists
  const mergeWishlists = (
    wishlistAId: string,
    wishlistBId: string
  ) => {
    if (wishlistAId === wishlistBId) return;

    const wishlistA = wishlists.find(
      (wishlist) => wishlist.id === wishlistAId
    );

    const wishlistB = wishlists.find(
      (wishlist) => wishlist.id === wishlistBId
    );

    if (!wishlistA || !wishlistB) return;

    const mergedProducts = [
      ...new Set([
        ...wishlistA.productIds,
        ...wishlistB.productIds,
      ]),
    ];

    const mergedWishlist: Wishlist = {
      id: crypto.randomUUID(),
      name: `${wishlistA.name} + ${wishlistB.name}`,
      productIds: mergedProducts,
    };

    setWishlists((prev) => [
      ...prev,
      mergedWishlist,
    ]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlists,

        createWishlist,

        deleteWishlist,

        addProduct,

        removeProduct,

        mergeWishlists,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
}