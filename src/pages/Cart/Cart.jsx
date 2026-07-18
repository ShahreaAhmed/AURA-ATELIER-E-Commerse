import React, { useState } from 'react';
import { useNavigate } from "react-router";
import { Tag, Sparkles, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import useCart from '../../hooks/useCart';
import CartSummary from '../../components/cart/CartSummary/CartSummary';
import EmptyCart from '../../components/cart/EmptyCart/EmptyCart';
import CartItem from '../../components/cart/CartItem/CartItem';

const Cart = () => {
    const navigate = useNavigate();
    const {
        cart,
        cartCount,
        cartSubtotal,
        removeFromCart,
        updateCartQuantity,
        appliedPromo,
        applyPromoCode,
        promoDiscount = 0,
        addToast
    } = useCart();

    const [promoInput, setPromoInput] = useState("");
    const [isOrderComplete, setIsOrderComplete] = useState(false);
    const [isSubmittingCheckout, setIsSubmittingCheckout] = useState(false);

    // Cart calculations
    const discountAmount = (cartSubtotal * promoDiscount) / 100;
    const shippingCost = cartCount > 0 ? 120 : 0;
    const taxCost = (cartSubtotal - discountAmount) * 0.05;
    const finalTotal = cartSubtotal - discountAmount + shippingCost + taxCost;

    const handleApplyPromo = (e) => {
        e.preventDefault();
        if (promoInput.trim() !== "") {
            applyPromoCode(promoInput);
        } else {
            if (addToast) addToast("Please enter a valid promo code.");
        }
    };

    const handleCheckout = () => {
        setIsSubmittingCheckout(true);

        // Simulate an API call delay
        setTimeout(() => {
            setIsSubmittingCheckout(false);
            setIsOrderComplete(true);
        }, 1500);
    };

    // Render success screen if order is complete
    if (isOrderComplete) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-xl mx-auto bg-white border border-neutral-100 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl my-8"
            >
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto border border-emerald-100 shadow-sm">
                    <Check className="w-8 h-8 stroke-[3]" />
                </div>

                <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
                        Purchase Completed
                    </span>
                    <h2 className="playfair-display text-2xl sm:text-3xl font-bold text-secondary">
                        Your Order is Packing
                    </h2>
                    <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mx-auto">
                        Thank you for shopping at AURA. We have received your order details, and our local tailored dispatch office is carefully preparing your garments.
                    </p>
                </div>

                <div className="bg-neutral-50 rounded-2xl p-4 text-left divide-y divide-neutral-200/60 text-xs space-y-3">
                    <div className="flex justify-between font-semibold text-secondary pt-1">
                        <span>Reference code:</span>
                        <span className="font-mono text-[11px]">#AU-{Math.floor(1e5 + Math.random() * 9e5)}</span>
                    </div>
                    <div className="flex justify-between pt-3">
                        <span>Garment Count:</span>
                        <span>{cartCount} units</span>
                    </div>
                    <div className="flex justify-between pt-3 font-bold text-secondary">
                        <span>Final Paid Total:</span>
                        <span className="font-serif text-sm">৳{finalTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                </div>

                <button
                    onClick={() => {
                        window.location.reload();
                    }}
                    className="w-full bg-secondary hover:bg-neutral-800 text-white py-3 px-6 rounded-xl text-xs uppercase tracking-wider font-bold transition-colors"
                >
                    Browse New Apparel
                </button>
            </motion.div>
        );
    }

    // Render cart page
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-8 animate-fade-in">
            <div className="space-y-1">
                <h1 className="font-serif text-3xl font-semibold text-secondary">Your Atelier Bag</h1>
                <p className="text-xs text-neutral-400">
                    Manage, review, and configure selected apparel units in your cart.
                </p>
            </div>

            {cart.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Cart list */}
                    <div className="lg:col-span-8 space-y-4">
                        <div className="bg-white border border-neutral-100 rounded-2xl divide-y divide-neutral-100 overflow-hidden shadow-sm">
                            <AnimatePresence>
                                {cart.map((item) => (
                                    <CartItem
                                        key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                                        item={item}
                                        onUpdateQuantity={(newQty) => updateCartQuantity(item.product.id, item.selectedSize, item.selectedColor, newQty)}
                                        onRemove={() => removeFromCart(item.product.id, item.selectedSize, item.selectedColor)}
                                    />
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Cart and Totals sidebar */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Promo Code input */}
                        <div className="bg-white border border-neutral-100 rounded-2xl p-5 shadow-sm space-y-4">
                            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-700">
                                <Tag className="w-4 h-4 text-accent" />
                                <span>Apply Promotional Code</span>
                            </div>

                            <form onSubmit={handleApplyPromo} className="flex gap-2">
                                <input
                                    type="text"
                                    value={promoInput}
                                    onChange={(e) => setPromoInput(e.target.value)}
                                    placeholder="e.g. WELCOME20, OXIVOS10"
                                    className="bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-2 text-xs text-secondary placeholder-neutral-400 focus:outline-none focus:border-primary w-full"
                                />
                                <button
                                    type="submit"
                                    className="bg-secondary hover:bg-neutral-800 text-white font-bold text-xs uppercase px-4 py-2 rounded-lg transition-colors shrink-0"
                                >
                                    APPLY
                                </button>
                            </form>

                            {appliedPromo && (
                                <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 text-[11px] font-bold px-3 py-2 rounded-lg flex items-center justify-between">
                                    <span className="flex items-center gap-1">
                                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                                        <span>Promo Applied: {appliedPromo} ({promoDiscount}% Off)</span>
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Calculations and summary */}
                        <CartSummary
                            subtotal={cartSubtotal}
                            discount={discountAmount}
                            promoDiscount={promoDiscount}
                            shippingCost={shippingCost}
                            taxCost={taxCost}
                            finalTotal={finalTotal}
                            onCheckout={handleCheckout}
                            isSubmittingCheckout={isSubmittingCheckout}
                        />
                    </div>
                </div>
            ) : (
                <EmptyCart onBrowse={() => navigate("/products")} />
            )}
        </div>
    );
};

export default Cart;