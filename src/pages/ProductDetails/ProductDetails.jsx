// import { ChevronLeft } from 'lucide-react';
// import React from 'react';

// const ProductDetails = () => {

//       const {
//     products,
//     selectedProductId,
//     setActivePage
//   } = useCart();
//   const product = products.find((p) => p.id === selectedProductId) || products[0];
//   const [activeImage, setActiveImage] = useState(() => product ? product.image : "");
//   useEffect(() => {
//     if (product) {
//       setActiveImage(product.image);
//     }
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [selectedProductId, product]);
//   if (!product) {
//     return <div className="text-center py-12 text-neutral-400">No product selected</div>;
//   }
//   const recommendations = products.filter(
//     (p) => p.category === product.category && p.id !== product.id
//   ).slice(0, 4);
//     return (
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-12 animate-fade-in">
      
//       {
//     /* Back Button */
//   }
//       <button
//     onClick={() => setActivePage("products")}
//     className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-brand-charcoal font-bold uppercase tracking-wider group transition-colors cursor-pointer"
//   >
//         <ChevronLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
//         <span>Back to collection</span>
//       </button>

//       {
//     /* Main Grid: Details split */
//   }
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
//         {
//     /* Left: Gallery */
//   }
//         <div className="lg:col-span-7">
//           <ProductGallery
//     images={product.images || [product.image]}
//     activeImage={activeImage}
//     onChange={setActiveImage}
//     productName={product.name}
//   />
//         </div>

//         {
//     /* Right: Info and Actions */
//   }
//         <div className="lg:col-span-5 space-y-6 divide-y divide-neutral-100/60">
//           <ProductInfo product={product} />
//           <ProductActions product={product} />
//         </div>
//       </div>

//       {
//     /* Customer Reviews Feed */
//   }
//       <div className="bg-white border border-neutral-100 rounded-3xl p-8 sm:p-12 space-y-6 shadow-sm">
//         <h3 className="font-serif text-lg font-bold text-brand-charcoal flex items-center gap-2">
//           <span>Customer Reviews</span>
//           <span className="text-xs bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded">
//             {product.reviews.length}
//           </span>
//         </h3>

//         {product.reviews.length > 0 ? <div className="divide-y divide-neutral-100 space-y-6">
//             {product.reviews.map((rev, index) => <div key={index} className="pt-6 first:pt-0 space-y-2">
//                 <div className="flex items-center justify-between gap-4">
//                   <h4 className="font-sans text-sm font-semibold text-brand-charcoal">{rev.user}</h4>
//                   <span className="text-[10px] text-neutral-400 font-medium">{rev.date}</span>
//                 </div>
//                 <div className="flex text-brand-gold gap-0.5">
//                   {Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`w-3 h-3 ${i < rev.rating ? "fill-brand-gold text-brand-gold" : "text-neutral-200"}`} />)}
//                 </div>
//                 <p className="text-xs text-neutral-500 leading-relaxed font-light italic">
//                   "{rev.comment}"
//                 </p>
//               </div>)}
//           </div> : <div className="text-center py-6 text-neutral-400 space-y-2">
//             <p className="text-xs">No reviews listed yet for this apparel item.</p>
//             <p className="text-[10px]">Be the first to share your fitting feedback once purchased!</p>
//           </div>}
//       </div>

//       {
//     /* Recommendations */
//   }
//       {recommendations.length > 0 && <div className="space-y-6">
//           <div>
//             <span className="text-[9px] tracking-widest text-brand-gold uppercase font-bold block mb-1">Pairs Nicely With</span>
//             <h3 className="font-serif text-xl font-bold text-brand-charcoal">Recommended Creations</h3>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {recommendations.map((prod) => <ProductCard key={prod.id} product={prod} />)}
//           </div>
//         </div>}

//     </div>
//     );
// };

// export default ProductDetails;


import React from 'react';

const ProductDetails = () => {
    return (
        <div>
            <h1>product details</h1>
        </div>
    );
};

export default ProductDetails;<h1>product details</h1>