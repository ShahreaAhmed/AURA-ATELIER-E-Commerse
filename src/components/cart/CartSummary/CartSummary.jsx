import { ArrowRight, ShieldCheck } from 'lucide-react';
import React from 'react';

const CartSummary = ({
    subtotal,
    discount,
    promoDiscount,
    shippingCost,
    taxCost,
    finalTotal,
    onCheckout,
    isSubmittingCheckout
}) => {
    return (
        <div className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="playfair-display text-sm font-bold text-secondary pb-3 border-b border-neutral-100">
                Order Summary
            </h3>

            <div className="space-y-3 text-xs text-neutral-500 font-medium">
                <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="text-neutral-800 font-semibold">৳{subtotal.toLocaleString()}</span>
                </div>

                {promoDiscount > 0 && <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Discount ({promoDiscount}%):</span>
                    <span>- ৳{discount.toLocaleString()}</span>
                </div>}

                <div className="flex justify-between">
                    <span>Courier Delivery:</span>
                    <span className="text-neutral-800 font-semibold">
                        {shippingCost === 0 ? <strong className="text-emerald-600 font-semibold uppercase">Free Shipping</strong> : `\u09F3${shippingCost}`}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span>VAT / Tax (5%):</span>
                    <span className="text-neutral-800 font-semibold">৳{taxCost.toLocaleString()}</span>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex justify-between items-baseline font-bold text-secondary">
                    <span className="text-sm">Final Order Total:</span>
                    <span className="playfair-display text-xl">৳{finalTotal.toLocaleString()}</span>
                </div>
            </div>

            {
                /* Checkout CTA */
            }
            <button
                onClick={onCheckout}
                disabled={isSubmittingCheckout}
                className="w-full bg-secondary hover:bg-neutral-800 text-[#FAF6F0] font-bold text-xs uppercase tracking-[0.15em] py-3.5 rounded-xl flex items-center justify-center gap-2 mt-2 shadow-md hover:shadow-lg transition-all"
            >
                {isSubmittingCheckout ? <span>Processing Checkout...</span> : <>
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                </>}
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-neutral-400 text-center pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-gold-dark" />
                <span>Secure payment.</span>
            </div>
        </div>
    );
};

export default CartSummary;