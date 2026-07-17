import { Minus, Plus, Trash2 } from 'lucide-react';
import React from 'react';
import { motion } from "motion/react";

const CartItem = ({
    item,
    onUpdateQuantity,
    onRemove
}) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
            {
                /* Item photo */
            }
            <div className="w-16 h-20 bg-neutral-50 rounded-lg overflow-hidden shrink-0 border border-neutral-100">
                <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                />
            </div>

            {
                /* Item Details */
            }
            <div className="flex-1 space-y-1 w-full">
                <span className="text-[9px] font-bold text-brand-gold uppercase tracking-widest block">
                    {item.product.category}
                </span>
                <h3 className="font-serif text-sm font-semibold text-brand-charcoal line-clamp-1">
                    {item.product.name}
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-400 font-medium">
                    {item.selectedSize && <span>Size: <strong className="text-neutral-700 font-bold">{item.selectedSize}</strong></span>}
                    {item.selectedColor && <span>Color: <strong className="text-neutral-700 font-bold">{item.selectedColor}</strong></span>}
                </div>
            </div>

            {
                /* Price and Quantity */
            }
            <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-neutral-100/80">

                {
                    /* Quantity Controller */
                }
                <div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden bg-neutral-50">
                    <button
                        onClick={() => onUpdateQuantity(item.quantity - 1)}
                        className="px-2.5 py-1.5 text-xs font-bold text-neutral-500 hover:bg-neutral-100 transition-colors"
                    >
                        <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-3 font-semibold text-xs text-brand-charcoal text-center min-w-[20px]">
                        {item.quantity}
                    </span>
                    <button
                        onClick={() => onUpdateQuantity(item.quantity + 1)}
                        className="px-2.5 py-1.5 text-xs font-bold text-neutral-500 hover:bg-neutral-100 transition-colors"
                    >
                        <Plus className="w-3 h-3" />
                    </button>
                </div>

                {
                    /* Total Price */
                }
                <div className="text-right min-w-[80px]">
                    <p className="font-serif text-sm font-bold text-brand-charcoal">
                        ৳{(item.product.price * item.quantity).toLocaleString()}
                    </p>
                    <p className="text-[10px] text-neutral-400 font-medium">
                        ৳{item.product.price.toLocaleString()} each
                    </p>
                </div>

                {
                    /* Delete Trigger */
                }
                <button
                    onClick={onRemove}
                    className="text-neutral-400 hover:text-red-500 p-1.5 rounded-lg hover:bg-neutral-50 transition-colors"
                    title="Remove product"
                >
                    <Trash2 className="w-4 h-4" />
                </button>

            </div>
        </motion.div>
    );
};

export default CartItem;