import React from 'react';
import { Heart, Star, Eye, ShoppingCart } from "lucide-react";
import { motion } from "motion/react";
import useCart from '../../hooks/useCart';

const ProductCard = ({product}) => {

  const { setSelectedProductId, setActivePage, toggleWishlist, isInWishlist, addToCart } = useCart();
  const isFav = isInWishlist(product.id);
  const handleCardClick = () => {
    setSelectedProductId(product.id);
    setActivePage("details");
  };
  const handleQuickAdd = (e) => {
    e.stopPropagation();
    const defaultSize = product.sizes[0] || "M";
    const defaultColor = product.colors[0] || "Default";
    addToCart(product, 1, defaultSize, defaultColor);
  };
  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    toggleWishlist(product);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      onClick={handleCardClick}
      className="group cursor-pointer flex flex-col bg-white border border-neutral-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      {
        /* Image Gallery Wrapper */
      }
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {
          /* Hover overlay actions */
        }
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={handleWishlistToggle}
            className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-800 hover:bg-brand-charcoal hover:text-white shadow-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-[50ms]"
            title={isFav ? "Remove from Wishlist" : "Add to Wishlist"}
          >
            <Heart className={`w-4 h-4 ${isFav ? "fill-red-500 text-red-500" : ""}`} />
          </button>

          <button
            onClick={handleCardClick}
            className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-800 hover:bg-brand-charcoal hover:text-white shadow-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-[100ms]"
            title="View Details"
          >
            <Eye className="w-4 h-4" />
          </button>

          {product.inStock && <button
            onClick={handleQuickAdd}
            className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-800 hover:bg-brand-charcoal hover:text-white shadow-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-[150ms]"
            title="Quick Add to Cart"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>}
        </div>

        {
          /* Tag Badges */
        }
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
          {product.featured && <span className="bg-brand-gold text-brand-charcoal text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
            Featured
          </span>}
          {!product.inStock && <span className="bg-neutral-800/90 backdrop-blur-sm text-[#FAF6F0] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
            Sold Out
          </span>}
        </div>

        {
          /* Floating Heart Icon for Mobile touch (static instead of hover-only) */
        }
        <button
          onClick={handleWishlistToggle}
          className="absolute top-3 right-3 md:hidden w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-800 shadow-md"
          aria-label="Add to Wishlist"
        >
          <Heart className={`w-3.5 h-3.5 ${isFav ? "fill-red-500 text-red-500" : ""}`} />
        </button>
      </div>

      {
        /* Content details */
      }
      <div className="p-4 flex flex-col flex-1">
        {
          /* Category & Rating */
        }
        <div className="flex items-center justify-between gap-2 text-[10px] tracking-wider uppercase font-semibold text-neutral-400 mb-1">
          <span>{product.category}</span>
          <div className="flex items-center gap-0.5 text-brand-gold-dark font-medium">
            <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
            <span>{product.rating}</span>
          </div>
        </div>

        {
          /* Title */
        }
        <h3 className="font-serif text-sm font-semibold text-brand-charcoal group-hover:text-brand-gold-dark transition-colors line-clamp-1 mb-1.5">
          {product.name}
        </h3>

        {
          /* Price & Stock status */
        }
        <div className="mt-auto flex items-baseline justify-between gap-2 pt-2 border-t border-neutral-50">
          <span className="font-sans text-xs text-neutral-400">Price</span>
          <span className="font-serif text-[15px] font-bold text-brand-charcoal">
            ৳{product.price.toLocaleString()}
          </span>
        </div>
      </div>
    </motion.div>
    );
};

export default ProductCard;