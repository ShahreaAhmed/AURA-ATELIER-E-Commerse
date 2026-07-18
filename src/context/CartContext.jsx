import React, { createContext, useEffect, useState } from 'react';
import { toast } from "react-hot-toast";

const  CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [activePage, setActivePage] = useState("home");
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  
  useEffect(() => {
    fetch("/productsData.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch product data");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoadingProducts(false);
      })
      .catch((err) => {
        console.error("Error loading product data:", err);
        setLoadingProducts(false);
      });
  }, []);

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("aura_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [wishlist, setWishlist] = useState(() => {
    const savedWish = localStorage.getItem("aura_wishlist");
    return savedWish ? JSON.parse(savedWish) : [];
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [appliedPromo, setAppliedPromo] = useState("");
  const [promoDiscount, setPromoDiscount] = useState(0);
  const toasts = [];
  useEffect(() => {
    localStorage.setItem("aura_cart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    localStorage.setItem("aura_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
  const addToast = (message, type = "success") => {
    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    } else {
      toast(message, {
        icon: 'ℹ️',
      });
    }
  };
  const removeToast = (id) => {
    toast.dismiss(id);
  };
  const addToCart = (product, quantity, size, color) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === size && item.selectedColor === color
      );
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        addToast(`Updated ${product.name} quantity in cart.`, "info");
        return updated;
      } else {
        addToast(`Added ${product.name} (${size}, ${color}) to cart.`, "success");
        return [...prevCart, { product, quantity, selectedSize: size, selectedColor: color }];
      }
    });
  };
  const removeFromCart = (productId, size, color) => {
    const item = cart.find(
      (i) => i.product.id === productId && i.selectedSize === size && i.selectedColor === color
    );
    if (item) {
      addToast(`Removed ${item.product.name} from cart.`, "info");
    }
    setCart(
      (prevCart) => prevCart.filter(
        (item2) => !(item2.product.id === productId && item2.selectedSize === size && item2.selectedColor === color)
      )
    );
  };
  const updateCartQuantity = (productId, size, color, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, size, color);
      return;
    }
    setCart(
      (prevCart) => prevCart.map(
        (item) => item.product.id === productId && item.selectedSize === size && item.selectedColor === color ? { ...item, quantity } : item
      )
    );
  };
  const toggleWishlist = (product) => {
    setWishlist((prevWish) => {
      const exists = prevWish.some((item) => item.id === product.id);
      if (exists) {
        addToast(`Removed ${product.name} from Wishlist.`, "info");
        return prevWish.filter((item) => item.id !== product.id);
      } else {
        addToast(`Added ${product.name} to Wishlist.`, "success");
        return [...prevWish, product];
      }
    });
  };
  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };
  const applyPromoCode = (code) => {
    const formatted = code.trim().toUpperCase();
    if (formatted === "AURAATELIER20") {
      setAppliedPromo("AURAATELIER20");
      setPromoDiscount(15);
      addToast("Promo code AURAATELIER20 applied! 15% discount added.", "success");
      return true;
    } else if (formatted === "OXIVOSNEW") {
      setAppliedPromo("OXIVOSNEW");
      setPromoDiscount(10);
      addToast("Promo code OXIVOSNEW applied! 10% discount added.", "success");
      return true;
    } else if (formatted === "FASHION5") {
      setAppliedPromo("FASHION5");
      setPromoDiscount(5);
      addToast("Promo code FASHION5 applied! 5% discount added.", "success");
      return true;
    }
    addToast("Invalid promo code.", "info");
    return false;
  };
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = wishlist.length;
  const cartSubtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage, selectedProductId]);
  return <CartContext.Provider
    value={{
      activePage,
      setActivePage,
      selectedProductId,
      setSelectedProductId,
      products,
      loadingProducts,
      cart,
      wishlist,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      toggleWishlist,
      isInWishlist,
      searchQuery,
      setSearchQuery,
      selectedCategory,
      setSelectedCategory,
      cartCount,
      wishlistCount,
      cartSubtotal,
      appliedPromo,
      applyPromoCode,
      promoDiscount,
      toasts,
      addToast,
      removeToast
    }}
  >
      {children}
    </CartContext.Provider>;
    }

export default CartContext;