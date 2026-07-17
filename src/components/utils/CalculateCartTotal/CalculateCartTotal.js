import { SHIPPING_COST, TAX_RATE } from "../Constants/Constants";


export const CalculateCartTotal = (items, promoRate = 0) => {
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const discount = subtotal * promoRate;
  const taxableAmount = subtotal - discount;
  const tax = taxableAmount * TAX_RATE;
  const total =
    subtotal > 0 ? taxableAmount + tax + SHIPPING_COST : 0;

  return {
    subtotal,
    discount,
    tax,
    total,
  };
};