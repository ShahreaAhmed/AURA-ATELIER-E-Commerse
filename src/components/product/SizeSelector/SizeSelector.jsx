import React from 'react';

const SizeSelector = ({
    sizes,
    selectedSize,
    onChange
}) => {
    return (
        <div className="space-y-2.5">
            <div className="flex justify-between items-baseline">
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                    Select Size
                </span>
                <span className="text-[10px] text-neutral-400 font-medium underline cursor-pointer hover:text-accent">
                    Size Guide & Fit
                </span>
            </div>
            <div className="flex flex-wrap gap-2">
                {sizes.map((size) => {
                    const isSelected = selectedSize === size;
                    return <button
                        key={size}
                        type="button"
                        onClick={() => onChange(size)}
                        className={`min-w-[44px] h-10 px-3 flex items-center justify-center rounded-xl text-xs font-bold tracking-wider transition-all duration-200 border ${isSelected ? "bg-secondary text-[#FAF6F0] border-secondary scale-[1.03]" : "bg-white border-neutral-200 text-neutral-600 hover:border-neutral-400"}`}
                    >
                        {size}
                    </button>;
                })}
            </div>
        </div>
    );
};

export default SizeSelector;