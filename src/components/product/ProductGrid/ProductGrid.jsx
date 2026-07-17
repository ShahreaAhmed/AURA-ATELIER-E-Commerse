import React from 'react';
import { motion } from "motion/react";
import ProductCard from '../ProductCard/ProductCard';
import { ShoppingBag } from 'lucide-react';

const ProductGrid = ({
    products,
    isLoading = false,
    onClearFilters,
    searchQuery = "",
    selectedCategory = "All"
}) => {
    if (isLoading) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, idx) => <div key={idx} className="bg-white border border-neutral-100 rounded-xl overflow-hidden p-4 space-y-4 animate-pulse">
                    <div className="aspect-[3/4] bg-neutral-100 rounded-lg w-full" />
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <div className="h-3 bg-neutral-100 rounded w-1/4" />
                            <div className="h-3 bg-neutral-100 rounded w-1/8" />
                        </div>
                        <div className="h-4 bg-neutral-100 rounded w-3/4" />
                        <div className="h-3 bg-neutral-100 rounded w-1/2 pt-2" />
                    </div>
                </div>)}
            </div>)
    }
    if (products.length === 0) {
        return <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white border border-neutral-100 rounded-3xl p-16 text-center space-y-4 max-w-lg mx-auto my-12"
        >
            <div className="w-16 h-16 bg-neutral-50 rounded-full flex items-center justify-center text-neutral-400 mx-auto">
                <ShoppingBag className="w-6 h-6" />
            </div>
            <h3 className="plus-jakarta-sans text-xl font-bold text-secondary">No Products Found</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
                We couldn't find any premium attire matching "<strong className="text-secondary">{searchQuery}</strong>" in the <strong className="text-secondary">{selectedCategory}</strong> collection.
            </p>
            {onClearFilters && <button
                onClick={onClearFilters}
                className="bg-secondary hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-lg transition-colors inline-block"
            >
                Clear Search & Filters
            </button>}
        </motion.div>;
    }
    return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
    
};

export default ProductGrid;