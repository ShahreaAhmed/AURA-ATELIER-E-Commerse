export const SortProducts = (products, sortBy) => {
  const sorted = [...products];

  switch (sortBy) {
    case "price-low-high":
      return sorted.sort((a, b) => a.price - b.price);

    case "price-high-low":
      return sorted.sort((a, b) => b.price - a.price);

    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);

    case "featured":
    default:
      return sorted.sort(
        (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
      );
  }
};