import type { Product } from "../../types/product";

interface Props {
    products: Product[];
    onRemove: (id: string) => void;
}

function WishlistProducts({
    products,
    onRemove,
}: Props) {

    if (products.length === 0) {
        return (
            <div className="text-center text-gray-500 py-8">
                Wishlist is Empty
            </div>
        );
    }

    return (

        <div className="space-y-4">

            {products.map(product => (

                <div
                    key={product.id}
                    className="flex justify-between items-center border rounded-xl p-4 hover:shadow-md"
                >

                    <div className="flex gap-4 items-center">

                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-24 h-24 rounded-lg object-cover"
                        />

                        <div>

                            <h3 className="font-bold text-lg">
                                {product.title}
                            </h3>

                            <p className="text-gray-500">
                                {product.category}
                            </p>

                            <p className="font-semibold text-green-600 mt-2">
                                ₹{product.price}
                            </p>

                        </div>

                    </div>

                    <button
                        onClick={() => onRemove(product.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                        Remove
                    </button>

                </div>

            ))}

        </div>

    );

}

export default WishlistProducts;