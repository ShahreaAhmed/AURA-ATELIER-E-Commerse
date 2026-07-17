import { useState, useMemo } from "react";
import { PRODUCTS } from "../data/products";
import { filterProducts } from "../utils/filterProducts";
import { searchProducts } from "../utils/searchProducts";
import { sortProducts } from "../utils/sortProducts";

export const useProducts = () => {
    const [category, setCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [priceRange, setPriceRange] = useState([0, 40000]);
    const [stockOnly, setStockOnly] = useState(false);
    const [sortBy, setSortBy] = useState("featured");

    const allProducts = PRODUCTS;

    const filteredAndSortedProducts = useMemo(() => {
        let result = allProducts;

        result = filterProducts(result, category, priceRange, stockOnly);
        result = searchProducts(result, searchQuery);
        result = sortProducts(result, sortBy);

        return result;
    }, [category, searchQuery, priceRange, stockOnly, sortBy]);

    const featuredProducts = useMemo(() => {
        return allProducts.filter((product) => product.featured);
    }, [allProducts]);

    return {
        products: filteredAndSortedProducts,
        allProducts,
        featuredProducts,
        category,
        setCategory,
        searchQuery,
        setSearchQuery,
        priceRange,
        setPriceRange,
        stockOnly,
        setStockOnly,
        sortBy,
        setSortBy,
    };
};