import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import useCart from '../../../hooks/useCart';
import ProductCard from '../../product/ProductCard/ProductCard';

const FeaturedProducts = () => {
  const navigate = useNavigate(); 
  
  const { products, setSelectedCategory } = useCart(); 
  
  const featuredProducts = products.filter((p) => p.featured);
  
  const handleShopRedirect = () => {
    setSelectedCategory("All");
    navigate("/products"); 
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 mb-8">
        <div>
          <span className="text-[10px] tracking-[0.2em] font-bold text-primary uppercase block mb-1 plus-jakarta-sans">
            Handpicked Essentials
          </span>
          <h2 className="playfair-display text-2xl sm:text-3xl font-semibold text-secondary">
            Featured Masterpieces
          </h2>
        </div>
        <button
          onClick={handleShopRedirect}
          className="text-xs text-accent hover:text-secondary font-bold uppercase tracking-wider flex items-center gap-1 group transition-colors"
        >
          <span>View All Products</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;