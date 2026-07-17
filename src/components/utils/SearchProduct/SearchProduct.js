export const SearchProducts = (products, query) => {
  if (!query) return products;

  const lowerQuery = query.toLowerCase().trim();

  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery),
  );
};
