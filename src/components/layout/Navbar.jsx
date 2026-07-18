import React, { useEffect, useState } from "react";
import Logo from "../logo/Logo";
import { NavLink, useNavigate } from "react-router";
import {
  Heart,
  Search,
  ShoppingBag,
  Menu,
  X,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const navigate = useNavigate();

  const {
    cartCount,
    wishlistCount,
    searchQuery,
    setSearchQuery,
    setSelectedCategory,
  } = useCart();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const handleNavClick = (route) => {
    setIsMobileMenuOpen(false); 
    if (route) {
      navigate(route);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    setSelectedCategory("All");
    navigate("/products");

    setIsSearchOpen(false);
  };

  const links = [
    {
      name: "HOME",
      path: "/",
    },
    {
      name: "SHOP COLLECTION",
      path: "/products",
    },
    {
      name: "MY WISHLIST",
      path: "/wishlist",
    },
    {
      name: "ABOUT US",
      path: "/about",
    },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-secondary text-[#FAF6F0] py-1.5 px-4 text-center text-[11px] tracking-[0.15em] font-medium flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
          <span>CELEBRATE FESTIVALS WITH 15% OFF — USE CODE: <strong className="text-primary">AURAATELIER20</strong></span>
        </div>

      {/* Navbar */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "top-0 bg-white/80 backdrop-blur-md border-b border-neutral-200 shadow-md"
            : "top-8 bg-transparent"
        }`}
      >
        <div className="navbar max-w-7xl mx-auto h-20 px-4 sm:px-6 lg:px-8">
          
          {/* Left Side */}
          <div className="navbar-start">
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="btn btn-ghost lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Logo */}
            <div
              onClick={() => handleNavClick("/")}
              className="cursor-pointer"
            >
              <Logo />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2">
              {links.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `relative text-xs tracking-[0.2em] uppercase font-semibold transition-colors ${
                        isActive
                          ? "text-secondary"
                          : "text-neutral-500 hover:text-secondary"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.name}
                        {isActive && (
                          <motion.div
                            layoutId="navbar-active"
                            className="absolute left-0 right-0 -bottom-2 h-[2px] bg-primary"
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right Side */}
          <div className="navbar-end flex items-center gap-4">
            
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-neutral-600 hover:text-secondary transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <button
              onClick={() => handleNavClick("/wishlist")}
              className="relative text-neutral-600 hover:text-secondary transition-colors"
              aria-label="Wishlist"
            >
              <Heart
                className={`w-5 h-5 ${
                  wishlistCount > 0
                    ? "fill-primary text-primary"
                    : ""
                }`}
              />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart */}
            <button
              onClick={() => handleNavClick("/cart")}
              className="relative text-neutral-600 hover:text-secondary transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-secondary text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search Drawer */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-neutral-200 shadow-lg"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                <form
                  onSubmit={handleSearchSubmit}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search products..."
                      className="w-full h-12 rounded-xl border border-neutral-200 bg-white pl-12 pr-12 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      autoFocus
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-500 hover:text-secondary"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="h-12 px-6 rounded-xl bg-secondary hover:bg-neutral-800 text-white text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition"
                  >
                    <span>Search</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer */}
      <div className="h-28"></div>
      
      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 left-0 bottom-0 z-50 w-80 bg-white shadow-2xl lg:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 border-b">
                <Logo />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn btn-ghost btn-circle"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation */}
              <ul className="menu p-5 gap-2 text-sm font-semibold uppercase">
                {links.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className={({ isActive }) =>
                        isActive
                          ? "text-secondary font-bold"
                          : "text-neutral-500"
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="border-t mt-4 p-5 space-y-4">
                {/* Wishlist */}
                <button
                  onClick={() => handleNavClick("/wishlist")}
                  className="w-full flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Wishlist
                  </span>
                  <span className="badge badge-neutral">
                    {wishlistCount}
                  </span>
                </button>

                {/* Cart */}
                <button
                  onClick={() => handleNavClick("/cart")}
                  className="w-full flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    Cart
                  </span>
                  <span className="badge badge-warning">
                    {cartCount}
                  </span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;