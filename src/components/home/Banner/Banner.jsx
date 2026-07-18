import { ArrowRight, Sparkles } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import useCart from "../../../hooks/useCart";

const Banner = () => {
  const navigate = useNavigate();
  const { setSelectedCategory } = useCart();

  const handleShopRedirect = (category) => {
    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory("All");
    }
    navigate("/products");
  };

  return (
    <div className="space-y-16">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden rounded-3xl mx-4 my-4">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1600"
            alt="Banner Background"
            className="w-full h-full object-cover object-center scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/20 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 md:py-32 flex flex-col items-start text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-6"
          >
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 bg-[#FAF6F0]/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#FAF6F0]/20 text-primary text-[10px] uppercase tracking-[0.2em] font-semibold">
              <Sparkles className="w-3.5 h-3.5 animate-spin" />
              <span>THE FESTIVE COUTURE RELEASE</span>
            </div>

            {/* Display Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide leading-tight text-[#FAF6F0]">
              Traditional Craft. <br />
              <strong className="font-serif font-semibold text-primary">
                Modern Silhouette.
              </strong>
            </h1>

            {/* Paragraph */}
            <p className="text-sm sm:text-base text-neutral-200 font-light leading-relaxed max-w-lg">
              Explore our new seasonal edit celebrating the rich tapestry of
              Bangladeshi textile heritage. Handwoven Jamdanis, fine organic
              Panjabis, and precision-tailored western coordinates.
            </p>

            {/* Call to Actions btn*/}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => handleShopRedirect()}
                className="bg-primary hover:bg-accent text-secondary px-8 py-3 text-xs uppercase tracking-[0.15em] font-bold rounded-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Browse Store</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleShopRedirect("Ethnic Wear")}
                className="bg-transparent hover:bg-white/10 text-white border border-white/40 px-8 py-3 text-xs uppercase tracking-[0.15em] font-bold rounded-lg transition-all duration-300"
              >
                Explore Ethnic Heritage
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Banner;