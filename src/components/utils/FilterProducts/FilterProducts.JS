export const filterProducts = (products, category, priceRange, stockOnly) => {
  return products.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;

    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];

    const matchesStock = !stockOnly || product.inStock;

    return matchesCategory && matchesPrice && matchesStock;
  });
};
