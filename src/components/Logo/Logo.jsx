import React from 'react';

const Logo = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <div
            id="brand-logo"
            
            className="cursor-pointer group flex items-baseline gap-1"
          >
            <span className="playfair-display text-2xl font-bold tracking-wider text-secondary group-hover:text-primary transition-colors duration-300">
              AURA
            </span>
            <span className="plus-jakarta-sans text-[10px] tracking-[0.25em] text-neutral-400 font-semibold uppercase">
              Atelier
            </span>
          </div>
          </div>
    );
};

export default Logo;