import React from 'react';
import { motion } from "motion/react";

const ProductGallery = ({
    images,
    activeImage,
    onChange,
    productName
}) => {
    return (
        <div className="space-y-4">
            <div className="aspect-[3/4] bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-100">
                <motion.img
                    key={activeImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    src={activeImage}
                    alt={productName}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                />
            </div>

            {
                /* Multiple Image */
            }
            {images && images.length > 1 && <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((imgUrl, index) => <button
                    key={index}
                    onClick={() => onChange(imgUrl)}
                    className={`relative w-20 h-24 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${activeImage === imgUrl ? "border-primary scale-95" : "border-transparent opacity-75 hover:opacity-100"}`}
                >
                    <img
                        src={imgUrl}
                        alt={`${productName} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                </button>)}
            </div>}
        </div>
    );
};

export default ProductGallery;