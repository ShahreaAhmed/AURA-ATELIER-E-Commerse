import { Heart, ShoppingBag } from 'lucide-react';
import React, { useState } from 'react';
import SizeSelector from '../SizeSelector/SizeSelector';
import ColorSelector from '../ColorSelector/ColorSelector';
import useCart from '../../../hooks/useCart';

const ProductAction = ({ product }) => {

    const { addToCart, toggleWishlist, isInWishlist } = useCart();
    const isFav = isInWishlist(product.id);
    const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "M");
    const [selectedColor, setSelectedColor] = useState(product.colors[0] || "Default");
    const [quantity, setQuantity] = useState(1);
    const handleAddToCart = () => {
        if (!product.inStock) return;
        addToCart(product, quantity, selectedSize, selectedColor);
    };
    return (
        <div className="space-y-6 pt-4">
            {
                /* Color Selector */
            }
            <ColorSelector
                colors={product.colors}
                selectedColor={selectedColor}
                onChange={setSelectedColor}
            />

            {
                /* Size Selector */
            }
            {product.sizes[0] !== "One Size" && <SizeSelector
                sizes={product.sizes}
                selectedSize={selectedSize}
                onChange={setSelectedSize}
            />}

            {
                /* QUANTITY & ACTIONS */
            }
            {product.inStock && <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                    Quantity
                </span>
                <div className="flex flex-wrap items-center gap-4">
                    {
                        /* Quantity control */
                    }
                    <div className="flex items-center border border-neutral-200 rounded-xl overflow-hidden bg-neutral-50 shrink-0">
                        <button
                            type="button"
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="px-3.5 py-2 text-sm font-bold text-neutral-600 hover:bg-neutral-100 transition-colors"
                        >
                            -
                        </button>
                        <span className="px-4 font-bold text-sm text-secondary text-center min-w-[24px]">
                            {quantity}
                        </span>
                        <button
                            type="button"
                            onClick={() => setQuantity(quantity + 1)}
                            className="px-3.5 py-2 text-sm font-bold text-neutral-600 hover:bg-neutral-100 transition-colors"
                        >
                            +
                        </button>
                    </div>

                    {
                        /* Add to Cart Action */
                    }
                    <button
                        onClick={handleAddToCart}
                        className="flex-1 bg-secondary hover:bg-neutral-800 text-[#FAF6F0] py-3.5 px-6 rounded-xl text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]"
                    >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Cart</span>
                    </button>

                    {
                        /* Wishlist toggle button */
                    }
                    <button
                        onClick={() => toggleWishlist(product)}
                        className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all ${isFav ? "border-red-200 bg-red-50 text-red-500" : "border-neutral-200 text-neutral-600 hover:bg-neutral-50"}`}
                        title={isFav ? "Remove from Wishlist" : "Add to Wishlist"}
                    >
                        <Heart className={`w-4 h-4 ${isFav ? "fill-red-500" : ""}`} />
                    </button>
                </div>
            </div>}
        </div>
    );
};

export default ProductAction;