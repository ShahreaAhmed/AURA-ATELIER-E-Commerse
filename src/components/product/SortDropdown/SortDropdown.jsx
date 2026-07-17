import { ArrowUpDown } from 'lucide-react';
import React from 'react';

const SortDropdown = ({
    value,
    onChange
}) => {
    return (
        <div className="relative flex items-center bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-1.5">
            <ArrowUpDown className="w-3.5 h-3.5 text-neutral-400 mr-2" />
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="bg-transparent text-xs font-bold uppercase tracking-wider text-neutral-700 outline-none cursor-pointer py-1 pr-2"
            >
                <option value="featured">Featured Sorting</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="rating">Top Rated First</option>
            </select>
        </div>
    );
};

export default SortDropdown;