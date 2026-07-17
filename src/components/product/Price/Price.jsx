import React from 'react';
import { FormatPrice } from '../../utils/FormatPrice/FormatPrice';

const Price = ({ amount, className = "" }) => {
    return (
        <span className={`font-serif text-brand-charcoal ${className}`}>
      {FormatPrice(amount)}
    </span>
    );
};

export default Price;