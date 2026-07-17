import { Compass, HeartHandshake, ShieldCheck } from "lucide-react";
import React from "react";

const TrustedSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-white border border-neutral-100 rounded-3xl p-8 sm:p-12 shadow-sm">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-14 h-14 bg-orange rounded-2xl flex items-center justify-center text-accent">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-lg font-bold text-brand-charcoal">Design Integrity</h3>
          <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
            Every detail is meticulously planned from fiber to finish. We balance comfort, elegance, and longevity.
          </p>
        </div>


        <div className="flex flex-col items-center space-y-4 border-y md:border-y-0 md:border-x border-neutral-100 py-8 md:py-0">
          <div className="w-14 h-14 bg-orange rounded-2xl flex items-center justify-center text-accent">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-lg font-bold text-brand-charcoal">Artisanal Support</h3>
          <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
            We directly partner with local weaver guilds, paying above-market fair-trade wages to keep cultural weaving alive.
          </p>
        </div>


        <div className="flex flex-col items-center space-y-4">
          <div className="w-14 h-14 bg-orange rounded-2xl flex items-center justify-center text-accent">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-lg font-bold text-brand-charcoal">Ethical Sourcing</h3>
          <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
            Using organic yarns, herbal dyes, and zero-waste cutting rooms to minimize our footprint and respect our climate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
