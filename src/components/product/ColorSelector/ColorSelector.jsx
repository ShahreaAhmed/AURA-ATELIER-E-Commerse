import React from 'react';

const ColorSelector = ({
  colors,
  selectedColor,
  onChange
}) => {
    return (
        <div className="space-y-2.5">
      <span className="text-xs font-bold uppercase tracking-wider text-brand-charcoal block">
        Select Color: <strong className="text-neutral-500 font-normal">{selectedColor}</strong>
      </span>
      <div className="flex flex-wrap gap-2.5">
        {colors.map((color) => {
    const isSelected = selectedColor === color;
    return <button
      key={color}
      type="button"
      onClick={() => onChange(color)}
      className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all duration-200 flex items-center gap-1.5 ${isSelected ? "bg-brand-charcoal text-[#FAF6F0] border-brand-charcoal scale-[1.03]" : "bg-white border-neutral-200 text-neutral-600 hover:border-neutral-400"}`}
    >
              {color}
            </button>;
  })}
      </div>
    </div>
    );
};

export default ColorSelector;