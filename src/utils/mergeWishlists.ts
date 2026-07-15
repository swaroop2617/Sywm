export type Wishlist = {
  id: string;
  name: string;
  productIds: string[];
  createdAt: Date;
};

export function mergeWishlists(
  wishlistA: Wishlist,
  wishlistB: Wishlist
): Wishlist {
  const mergedProductIds = [
    ...new Set([
      ...wishlistA.productIds,
      ...wishlistB.productIds,
    ]),
  ];

  return {
    id: crypto.randomUUID(),
    name: `${wishlistA.name} + ${wishlistB.name}`,
    productIds: mergedProductIds,
    createdAt: new Date(),
  };
}