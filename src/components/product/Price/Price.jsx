import React from 'react';

const Price = ({ amount, className = "" }) => {
    return (
        <span className={`font-serif text-brand-charcoal ${className}`}>
      {formatPrice(amount)}
    </span>;
    );
};

export default Price;