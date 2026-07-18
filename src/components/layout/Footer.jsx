import React from "react";
import {
  Mail,
  Phone,
  Globe,
  Shield,
  Sparkles,
  Truck,
  RefreshCw,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-[#FAF6F0] pt-16 pb-8 border-t border-neutral-900 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-neutral-800">
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-neutral-900 rounded-xl text-primary shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold tracking-wider text-sm uppercase">
                Global Shipping
              </h4>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                Free standard shipping on orders above ৳5,000. Express courier
                options available at checkout.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-3 bg-neutral-900 rounded-xl text-primary shrink-0">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold tracking-wider text-sm uppercase">
                Easy 7-Day Returns
              </h4>
              <p className="text-xs text-[#A3A3A3] mt-1 leading-relaxed">
                Unwashed, unworn clothes can be returned within 7 days for a
                full store credit or replacement.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-3 bg-neutral-900 rounded-xl text-primary shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold tracking-wider text-sm uppercase">
                100% Authentic Quality
              </h4>
              <p className="text-xs text-[#A3A3A3] mt-1 leading-relaxed">
                We design and manufacture our apparel in partnership with local
                cottage artisans using fine organic yarns.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 py-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-2xl font-bold tracking-wider text-[#FAF6F0]">
                AURA
              </span>
              <span className="plus-jakarta-sans text-[10px] tracking-[0.25em] text-brand-gold font-semibold uppercase">
                Atelier
              </span>
            </div>
            <p className="text-sm text-[#A3A3A3] leading-relaxed max-w-sm">
              An elegant fusion of traditional craft and contemporary tailoring.
              We build clothing that is meant to be lived in, treasured, and
              passed down.
            </p>
            <div className="space-y-3">
              <h5 className="text-xs tracking-[0.15em] uppercase font-semibold text-brand-gold">
                Subscribe to the atelier
              </h5>
              <div className="flex max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-neutral-900 border border-neutral-800 rounded-l-lg px-4 py-2 text-xs text-[#FAF6F0] placeholder-neutral-500 focus:outline-none focus:border-brand-gold w-full"
                />
                <button className="bg-primary hover:bg-accent text-secondary px-4 py-2 text-xs font-bold rounded-r-lg transition-colors">
                  JOIN
                </button>
              </div>
            </div>
          </div>

          {/* Categories Links */}
          <div className="space-y-4">
            <h5 className="text-xs tracking-[0.15em] uppercase font-bold text-[#FAF6F0] border-l-2 border-primary pl-3">
              COLLECTIONS
            </h5>
            <ul className="space-y-2.5 text-sm text-[#A3A3A3]">
              <li>
                <button
                  // onClick={() => handleShopCategory("Ethnic Wear")}
                  className="hover:text-primary transition-colors"
                >
                  Ethnic Wear (Panjabi, Saree)
                </button>
              </li>
              <li>
                <button
                  // onClick={() => handleShopCategory("Western Wear")}
                  className="hover:text-primary transition-colors"
                >
                  Western Wear (Blazers, Jackets)
                </button>
              </li>
              <li>
                <button
                  //  onClick={() => handleShopCategory("Footwear")}
                  className="hover:text-primary transition-colors"
                >
                  Fine Footwear
                </button>
              </li>
              <li>
                <button
                  // onClick={() => handleShopCategory("Accessories")}
                  className="hover:text-primary transition-colors"
                >
                  Premium Leather Goods
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h5 className="text-xs tracking-[0.15em] uppercase font-bold text-[#FAF6F0] border-l-2 border-primary pl-3">
              CUSTOMER ASSISTANCE
            </h5>
            <ul className="space-y-2.5 text-sm text-[#A3A3A3]">
              <li>
                <span className="hover:text-brand-gold cursor-pointer transition-colors">
                  Size Guide & Tailoring
                </span>
              </li>
              <li>
                <span className="hover:text-brand-gold cursor-pointer transition-colors">
                  Artisan Heritage Story
                </span>
              </li>
              <li>
                <span className="hover:text-brand-gold cursor-pointer transition-colors">
                  Store Locator
                </span>
              </li>
              <li>
                <span className="hover:text-brand-gold cursor-pointer transition-colors">
                  Sustainability Commitment
                </span>
              </li>
            </ul>
          </div>
        </div>


        {/* Legal Disclaimer */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-neutral-800 text-[11px] text-[#737373] tracking-wider">
          <p>© {new Date().getFullYear()} AURA Atelier. All Rights Reserved.</p>
          <p className="mt-2 sm:mt-0 flex items-center gap-1">
            <span>Created by Shahrea Ahmed</span>
            {/* <span className="font-semibold text-neutral-400">Oxivos Frontend Round 1 Task</span> */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
