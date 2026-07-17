import React from 'react';

const Newsletter = () => {
    return (
        <section className="bg-orange py-12 px-6 rounded-3xl max-w-7xl mx-auto text-center space-y-4 my-12">
      <span className="text-[10px] tracking-widest text-accent font-bold">THE CLUB AURA</span>
      <h2 className="playfair-display text-2xl sm:text-3xl font-bold text-secondary">Unlock 20% Off Your First Order</h2>
      <p className="text-xs text-neutral-500 max-w-md mx-auto leading-relaxed">
        Join our loyalty circle to receive early access to new collection drops, private lookbooks, and customized artisan stories. Use code <strong className="text-secondary">WELCOME20</strong> for a prompt discount!
      </p>
      <div className="flex max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email address"
          className="bg-white border border-neutral-200 rounded-l-xl px-4 py-3 text-xs w-full focus:outline-none focus:border-primary"
        />
        <button
        //   onClick={handleShopRedirect}
          className="bg-secondary hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-r-xl shrink-0 transition-colors"
        >
          REDEEM
        </button>
      </div>
    </section>
    );
};

export default Newsletter;