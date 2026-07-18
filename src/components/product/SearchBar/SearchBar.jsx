import { Search } from 'lucide-react';
import React from 'react';

const SearchBar = ({
  value,
  onChange,
  placeholder = "Search collection..."
}) => {
    return (
        <div className="relative w-full lg:max-w-md">
      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-neutral-400" />
      <input
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    className="w-full pl-11 pr-10 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all duration-300"
  />
      {value && <button
    onClick={() => onChange("")}
    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-neutral-400 hover:text-neutral-600"
  >
          Clear
        </button>}
    </div>
    );
};

export default SearchBar;