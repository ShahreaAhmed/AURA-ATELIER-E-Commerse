import { ArrowRight } from 'lucide-react';
import React from 'react';
import useCart from '../../../hooks/useCart';

const Category = () => {

    const { setActivePage, setSelectedCategory } = useCart();

    const handleShopRedirect = (category) => {
        setSelectedCategory(category);
        setActivePage("products");
    };
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    /* Box 1 */
                }
                <div className="relative aspect-[16/10] sm:aspect-[2/1] md:aspect-auto rounded-3xl overflow-hidden bg-neutral-100 group">
                    <img
                        src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800"
                        alt="Ethnic Couture"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/30 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                        <span className="text-[9px] tracking-widest text-brand-gold uppercase font-bold block">Heritage Craft</span>
                        <h3 className="font-serif text-lg sm:text-xl font-bold">Classic Festive Cotton Edit</h3>
                        <p className="text-xs text-neutral-300 font-light max-w-sm">
                            Discover organic, intricately embroidered traditional Panjabis perfect for formal and festive occasions.
                        </p>
                        <button
                            onClick={() => handleShopRedirect("Ethnic Wear")}
                            className="text-xs text-brand-gold font-bold uppercase tracking-wider flex items-center gap-1 pt-2 hover:underline"
                        >
                            <span>Shop Ethnic Wear</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>

                {
                    /* Box 2 */
                }
                <div className="relative aspect-[16/10] sm:aspect-[2/1] md:aspect-auto rounded-3xl overflow-hidden bg-neutral-100 group">
                    <img
                        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
                        alt="Contemporary Tailoring"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/30 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                        <span className="text-[9px] tracking-widest text-brand-gold uppercase font-bold block">Modern Sartorial</span>
                        <h3 className="font-serif text-lg sm:text-xl font-bold">Tailored Outerwear & Denim</h3>
                        <p className="text-xs text-neutral-300 font-light max-w-sm">
                            Clean cut jackets, tailored blazers, and luxury accessories curated for contemporary lifestyle.
                        </p>
                        <button
                            onClick={() => handleShopRedirect("Western Wear")}
                            className="text-xs text-brand-gold font-bold uppercase tracking-wider flex items-center gap-1 pt-2 hover:underline"
                        >
                            <span>Shop Western Coordinates</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Category;