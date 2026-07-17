import { Minus, Plus } from 'lucide-react';
import React from 'react';

const QuantityButton = ({
  quantity,
  onDecrease,
  onIncrease
}) => {
    return (
        <div className="flex items-center border border-neutral-200 rounded-xl overflow-hidden bg-neutral-50 shrink-0">
      <button
    onClick={onDecrease}
    className="px-3 py-2 text-xs font-bold text-neutral-600 hover:bg-neutral-100 transition-colors"
  >
        <Minus className="w-3.5 h-3.5" />
      </button>
      <span className="px-4 font-bold text-xs text-brand-charcoal text-center min-w-[24px]">
        {quantity}
      </span>
      <button
    onClick={onIncrease}
    className="px-3 py-2 text-xs font-bold text-neutral-600 hover:bg-neutral-100 transition-colors"
  >
        <Plus className="w-3.5 h-3.5" />
      </button>
    </div>
    );
};

export default QuantityButton;