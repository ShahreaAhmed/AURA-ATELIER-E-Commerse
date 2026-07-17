import React, { useState } from 'react';
import { motion } from "motion/react";
import Rating from '../Rating/Rating';

const ProductInfo = ({ product }) => {

    const [activeTab, setActiveTab] = useState("details");
    return (
        <div className="space-y-6">
      {
    /* Header specs */
  }
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold-dark bg-brand-gold/10 px-2.5 py-1 rounded-md">
            {product.category}
          </span>
          
          <div className="flex items-center gap-1.5 text-xs font-semibold">
            {product.inStock ? <>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-emerald-600">In Stock</span>
              </> : <>
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="text-neutral-500">Temporarily Sold Out</span>
              </>}
          </div>
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-charcoal leading-tight">
          {product.name}
        </h1>

        {
    /* Ratings & Stars */
  }
        <div className="flex items-center gap-3 pt-1">
          <Rating rating={product.rating} />
          <span className="text-xs text-neutral-400">
            ({product.reviews.length} Customer reviews)
          </span>
        </div>
      </div>

      {
    /* Pricing */
  }
      <div className="py-4 border-y border-neutral-100 flex items-baseline justify-between">
        <span className="text-xs text-neutral-400 uppercase tracking-widest font-semibold">Atelier Pricing</span>
        <span className="font-serif text-3xl font-bold text-brand-charcoal">
          ৳{product.price.toLocaleString()}
        </span>
      </div>

      {
    /* Main Description */
  }
      <p className="text-xs text-neutral-500 leading-relaxed font-light">
        {product.description}
      </p>

      {
    /* Editorial Tabs */
  }
      <div className="space-y-4 pt-4 border-t border-neutral-100">
        <div className="flex gap-6 border-b border-neutral-100 pb-2">
          {["details", "materials", "shipping"].map((tab) => <button
    key={tab}
    onClick={() => setActiveTab(tab)}
    className={`text-xs font-bold uppercase tracking-wider pb-1 relative capitalize ${activeTab === tab ? "text-brand-charcoal" : "text-neutral-400"}`}
  >
              {tab === "details" ? "The Story" : tab === "materials" ? "Fabric & Care" : "Shipping & Returns"}
              {activeTab === tab && <motion.div
    layoutId="tab-underline"
    className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold"
  />}
            </button>)}
        </div>

        <div className="min-h-[80px] text-xs leading-relaxed text-neutral-500">
          {activeTab === "details" && <div className="space-y-2">
              <p>Our {product.name} is a fine statement of artisanal identity, engineered specifically for durability and lightweight breathability.</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Durable structure crafted for regular, comfortable wear</li>
                <li>Reinforced lock-stitched seams and smooth piping details</li>
                <li>Sourced directly under fair-trade criteria</li>
              </ul>
            </div>}
          {activeTab === "materials" && <div className="space-y-2">
              <p>Hand-sourced from natural organic crops using low-emission mechanical processing. We recommend delicate hand-washing to maintain fabric structural integrity.</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>100% natural, premium biological fibers</li>
                <li>Herbal-infused organic dyeing process</li>
                <li>Dry clean recommended, or cold hand wash with neutral soap</li>
              </ul>
            </div>}
          {activeTab === "shipping" && <div className="space-y-2">
              <p>Complimentary delivery to major metropolitans inside Bangladesh within 48-72 hours. Standard international postage estimated 7-14 shipping days.</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Free tracked shipping for orders above ৳5,000</li>
                <li>Hassle-free 7-day returns for unused garments</li>
                <li>Pre-paid returns label included in shipment box</li>
              </ul>
            </div>}
        </div>
      </div>
    </div>
    );
};

export default ProductInfo;