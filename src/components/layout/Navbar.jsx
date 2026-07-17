import React from 'react';
import Logo from '../logo/Logo';
import { NavLink } from 'react-router';
import { Heart, Search, ShoppingBag } from 'lucide-react';

const Navbar = () => {
    const links = <>
        <li><NavLink>HOME</NavLink></li> 
        <li><NavLink>SHOP COLLECTION</NavLink></li>
        <li><NavLink>MY WISHLIST</NavLink></li>
        <li><NavLink>ABOUT</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className=" btn-ghost text-xl"><Logo></Logo></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {links}
    </ul>
  </div>
  {/* <div className="navbar-end">
    <a className="btn">Button</a>
  </div> */}

  <div className="navbar-end flex items-center gap-4 sm:gap-6">
            {/* Search Trigger */}
            <button
            //   onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-neutral-600 hover:text-brand-charcoal transition-colors p-1.5"
              aria-label="Toggle Search"
            >
              <Search className="w-4.5 h-4.5" />
            </button>

            {/* Wishlist */}
            <button
            //   onClick={() => handleNavClick("wishlist")}
              className="relative text-neutral-600 hover:text-brand-charcoal transition-colors p-1.5"
              aria-label="Wishlist"
            >
              <Heart 
            //   className={`w-4.5 h-4.5 ${wishlistCount > 0 ? "fill-brand-gold text-brand-gold" : ""}`} 
                />
              {/* {wishlistCount > 0 && ( */}
                <span className="absolute -top-1 -right-1 bg-brand-charcoal text-[#FAF6F0] text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {/* {wishlistCount} */}
                </span>
              {/* )} */}
              
            </button>

             {/* Cart */}
            <button
            //   onClick={() => handleNavClick("cart")}
              className="relative text-neutral-600 hover:text-brand-charcoal transition-colors p-1.5"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-4.5 h-4.5" />
              {/* {cartCount > 0 && ( */}
                <span className="absolute -top-1 -right-1 bg-brand-gold text-brand-charcoal text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  
                </span>
              {/* )} */}
            </button>
            </div>
</div>
    );
};

export default Navbar;