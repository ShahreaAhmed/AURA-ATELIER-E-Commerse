import React from 'react';
import useCart from '../../hooks/useCart';
import { Compass } from "lucide-react";
import { motion } from "motion/react";

const NotFound = () => {
    const { setActivePage } = useCart();
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white border border-neutral-100 rounded-3xl p-16 text-center space-y-6 max-w-lg mx-auto shadow-sm"
  >
        <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center text-brand-gold mx-auto shadow-inner">
          <Compass className="w-6 h-6 animate-spin-slow text-accent" />
        </div>
        
        <div className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
            Error 404
          </span>
          <h2 className="playfair-display text-2xl font-bold text-secondary">
            Lost in the Atelier
          </h2>
          <p className="text-xs text-neutral-400 max-w-sm mx-auto leading-relaxed">
            We couldn't locate the couture path you were seeking. The collection is vast, but let us guide you back to safety.
          </p>
        </div>

        <button
    onClick={() => setActivePage("home")}
    className="bg-secondary hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-colors inline-block"
  >
          Return to Home
        </button>
      </motion.div>
    </div>
    );
};

export default NotFound;