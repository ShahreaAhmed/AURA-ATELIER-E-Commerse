import { Heart, Landmark, Shield, Sparkles } from 'lucide-react';
import React from 'react';
import { motion } from "motion/react";

const About = () => {

    const coreValues = [
    {
      icon: <Sparkles className="w-5 h-5 text-accent" />,
      title: "Artisanal Craftsmanship",
      desc: "Every creation is hand-tailored and embellished by local master craftsmen preserving age-old South Asian weaving and embroidery heritages."
    },
    {
      icon: <Heart className="w-5 h-5 text-accent" />,
      title: "Sincere Sustainability",
      desc: "We prioritize natural organic long-staple cottons, premium Mulberry silks, and recycled wool blends to ensure our couture lives beautifully and responsibly."
    },
    {
      icon: <Shield className="w-5 h-5 text-accent" />,
      title: "Couture Quality",
      desc: "No mass production, no fast-fashion shortcuts. We develop garments designed to persist across generations as wearable heirlooms."
    }
  ];
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 animate-fade-in">
      {/* Editorial Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
          Our Heritage
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-secondary tracking-tight">
          AURA Atelier
        </h1>
        <div className="h-[2px] w-12 bg-primary mx-auto my-4" />
        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-light italic">
          "Where timeless traditional South Asian heritage converges seamlessly with polished modern Western silhouettes."
        </p>
      </div>

      {/* Main Narrative Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 text-xs sm:text-sm text-neutral-500 leading-relaxed font-light">
          <h2 className="playfair-display text-lg font-bold text-secondary">The Genesis of Aura</h2>
          <p>
            Established in 2026, AURA Atelier began as a quiet creative sanctuary with a singular, uncompromising vision: to design garments that are not merely clothing, but visual stories of fine craftsmanship.
          </p>
          <p>
            Our signature lies in the intricate balance of tradition and modernism. We take the exquisite hand-weaving methods of historic Jamdani and Banarasi weavers and marry them to highly structured contemporary blazers, jackets, and curated lifestyle separates.
          </p>
        </div>
        <div className="relative aspect-video md:aspect-square bg-neutral-100 rounded-3xl overflow-hidden shadow-inner">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800"
            alt="Tailoring workshop"
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-secondary/10" />
        </div>
      </div>

      {/* Core Values Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="playfair-display text-xl font-bold text-secondary">Our Core Pillars</h2>
          <p className="text-xs text-neutral-400 mt-1">The values that define our design ethos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((val, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-neutral-100 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 bg-brand-beige rounded-xl flex items-center justify-center">
                {val.icon}
              </div>
              <h3 className="playfair-display text-sm font-bold text-secondary">{val.title}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Banner */}
      <div className="bg-secondary text-[#FAF6F0] rounded-3xl p-8 sm:p-12 text-center space-y-6">
        <Landmark className="w-8 h-8 text-primary mx-auto animate-pulse" />
        <div className="space-y-2">
          <h3 className="playfair-display text-lg font-bold">Visit the Atelier Experience</h3>
          <p className="text-xs text-neutral-300 max-w-md mx-auto leading-relaxed">
            Discover bespoke tailoring fittings, inspect exquisite textiles firsthand, and enjoy an immersive personal styling consultation at our physical Flagship studio.
          </p>
        </div>
        <div className="text-[10px] tracking-widest text-primary font-bold uppercase">
          Banani Road 11, Dhaka, Bangladesh
        </div>
      </div>
    </div>
    );
};

export default About;