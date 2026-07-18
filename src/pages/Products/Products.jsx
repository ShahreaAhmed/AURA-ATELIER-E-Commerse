import React, { useEffect, useState } from 'react';
import ProductGrid from '../../components/product/ProductGrid/ProductGrid';
import { Heart, RefreshCw, SlidersHorizontal } from 'lucide-react';
import SearchBar from '../../components/product/SearchBar/SearchBar';
import SortDropdown from '../../components/product/SortDropdown/SortDropdown';
import CategoryFilter from '../../components/product/CategoryFilter/CategoryFilter';
import { motion, AnimatePresence } from "motion/react";
import useCart from '../../hooks/useCart';



const Products = ({ isWishlistMode = false }) => {
    const {
        products,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        wishlist,
        setActivePage
    } = useCart();

    const [sortBy, setSortBy] = useState("featured");
    const [showFilters, setShowFilters] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 550);
        return () => clearTimeout(timer);
    }, [selectedCategory, sortBy, searchQuery, isWishlistMode]);

    const filteredProducts = isWishlistMode ? wishlist : products.filter((product) => {
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === "price-low-high") return a.price - b.price;
        if (sortBy === "price-high-low") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        return 0;
    });

    const handleClearFilters = () => {
        setSelectedCategory("All");
        setSearchQuery("");
        setSortBy("featured");
    };

    if (isWishlistMode) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-8 animate-fade-in">
                <div className="space-y-1">
                    <h1 className="font-serif text-3xl font-semibold text-brand-charcoal">Your Saved Favorites</h1>
                    <p className="text-xs text-neutral-400">
                        A persistent collection of attire you have favorited during browsing.
                    </p>
                </div>

                {wishlist.length > 0 ? (
                    <ProductGrid products={wishlist} isLoading={isLoading} />
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-white border border-neutral-100 rounded-3xl p-16 text-center space-y-4 max-w-lg mx-auto"
                    >
                        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                            <Heart className="w-6 h-6 fill-red-500" />
                        </div>

                        <div className="space-y-1">
                            <h3 className="font-serif text-xl font-bold text-brand-charcoal">Wishlist is Empty</h3>
                            <p className="text-xs text-neutral-400 max-w-sm mx-auto leading-relaxed">
                                Save elegant items as you browse so you can review and add them to your cart later.
                            </p>
                        </div>

                        <button
                            onClick={() => setActivePage("products")}
                            className="bg-brand-charcoal hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg transition-colors inline-block animate-pulse-subtle"
                        >
                            Find Beautiful Garments
                        </button>
                    </motion.div>
                )}
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-8 animate-fade-in">
            {/* Page Title */}
            <div className="text-center space-y-2">
                <span className="text-[10px] tracking-[0.25em] font-bold text-brand-gold uppercase block">
                    Curated Atelier Closet
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-charcoal">
                    Shop The Collection
                </h1>
                <p className="text-xs text-neutral-500 max-w-lg mx-auto">
                    Explore garments of unparalleled craftsmanship, meticulously tailored with high-grade organic fabrics and timeless silhouettes.
                </p>
            </div>

            {/* Control Panel Bar */}
            <div className="bg-white border border-neutral-100 rounded-2xl p-4 shadow-sm flex flex-col lg:flex-row gap-4 items-center justify-between">

                {/* Search */}
                <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="Search products by name, cloth type..." />

                {/* Right side controls */}
                <div className="flex flex-wrap w-full lg:w-auto items-center justify-end gap-3">

                    {/* Categories toggle */}
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className={`px-4 py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${showFilters || selectedCategory !== "All" ? "bg-brand-gold/10 border-brand-gold text-brand-charcoal" : "bg-white border-neutral-200 text-neutral-600 hover:border-neutral-400"}`}
                    >
                        <SlidersHorizontal className="w-4 h-4" />
                        <span>Categories</span>
                    </button>

                    {/* Sorting */}
                    <SortDropdown value={sortBy} onChange={setSortBy} />

                    {/* Reset Filters button */}
                    {(selectedCategory !== "All" || searchQuery !== "" || sortBy !== "featured") && (
                        <button
                            onClick={handleClearFilters}
                            className="text-xs text-neutral-400 hover:text-brand-charcoal font-semibold underline flex items-center gap-1 cursor-pointer"
                        >
                            <RefreshCw className="w-3 h-3" />
                            <span>Reset Filters</span>
                        </button>
                    )}
                </div>
            </div>

            {/* Categories Row */}
            <AnimatePresence>
                {(showFilters || selectedCategory !== "All") && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden flex flex-wrap gap-2.5 pb-2"
                    >
                        <CategoryFilter selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Product Grid Board */}
            <div className="space-y-6">
                {!isLoading && sortedProducts.length > 0 && (
                    <div className="flex items-center justify-between text-xs text-neutral-400 font-medium tracking-wider">
                        <span>Showing {sortedProducts.length} premium products</span>
                        {selectedCategory !== "All" && (
                            <span>Category: <strong className="text-brand-charcoal">{selectedCategory}</strong></span>
                        )}
                    </div>
                )}

                <ProductGrid
                    products={sortedProducts}
                    isLoading={isLoading}
                    onClearFilters={handleClearFilters}
                    searchQuery={searchQuery}
                    selectedCategory={selectedCategory}
                />
            </div>
        </div>
    );
};

export default Products;