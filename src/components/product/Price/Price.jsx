import React from 'react';
import { FormatPrice } from '../../utils/FormatPrice/FormatPrice';

const Price = ({ amount, className = "" }) => {
    return (
        <span className={`playfair-display text-secondary ${className}`}>
            {FormatPrice(amount)}
        </span>
    );
};

export default Price;