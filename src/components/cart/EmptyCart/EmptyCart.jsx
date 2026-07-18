import React from 'react';
import { ShoppingBag } from "lucide-react";
import { motion } from "motion/react";

const EmptyCart = ({ onBrowse }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border border-neutral-100 rounded-3xl p-16 text-center space-y-4 max-w-lg mx-auto"
        >
            <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center text-primary mx-auto shadow-inner">
                <ShoppingBag className="w-6 h-6" />
            </div>

            <div className="space-y-1">
                <h3 className="playfair-display text-xl font-bold text-secondary">Your Bag is Empty</h3>
                <p className="text-xs text-neutral-400 max-w-sm mx-auto leading-relaxed">
                    You haven't added any premium clothes to your bag yet. Explore our handcrafted ethnic and modern silhouettes to begin.
                </p>
            </div>

            <button
                onClick={onBrowse}
                className="bg-secondary hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg transition-colors inline-block"
            >
                Start Exploring Collection
            </button>
        </motion.div>
    );
};

export default EmptyCart;