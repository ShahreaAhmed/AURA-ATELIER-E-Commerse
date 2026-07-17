import React from 'react';
import useCart from '../../../hooks/useCart';
import { CATEGORIES } from '../../utils/Constants/Constants';

const CategoryFilter = ({
    selectedCategory,
    onSelect
}) => {

    const { products } = useCart();
  const getCategoryCount = (category) => {
    if (category === "All") return products.length;
    return products.filter((p) => p.category === category).length;
  };
    return (
        <div className="flex flex-wrap gap-2.5">
            {CATEGORIES.map((category) => {
                const isSelected = selectedCategory === category;
                const count = getCategoryCount(category);
                return <button
                    key={category}
                    onClick={() => onSelect(category)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all duration-200 flex items-center gap-1.5 ${isSelected ? "bg-brand-charcoal text-[#FAF6F0] shadow-sm scale-[1.02]" : "bg-white border border-neutral-100 text-neutral-600 hover:border-neutral-300"}`}
                >
                    <span>{category}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${isSelected ? "bg-white/20 text-[#FAF6F0]" : "bg-neutral-100 text-neutral-400 font-bold"}`}>
                        {count}
                    </span>
                </button>;
            })}
        </div>
    );
};

export default CategoryFilter;