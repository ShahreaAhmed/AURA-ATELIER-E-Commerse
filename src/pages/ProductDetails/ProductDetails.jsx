import { useParams } from "react-router";
import useCart from "../../hooks/useCart";
import { useEffect, useState } from "react";
import { ChevronLeft, Star } from "lucide-react";
import ProductGallery from "../../components/product/ProductGallery/ProductGallery";
import ProductInfo from "../../components/product/ProductInfo/ProductInfo";
import ProductCard from "../../components/product/ProductCard/ProductCard";
import ProductAction from "../../components/product/ProductAction/ProductAction";
import { useNavigate } from "react-router";

const ProductDetails = () => {
    const navigate = useNavigate();
  const { id } = useParams();
  const {
    products,
    selectedProductId,
    setActivePage
  } = useCart();

  const product = products.find(
  (p)=>p.id === Number(id)
);
  const [activeImage, setActiveImage] = useState(() => product ? product.image : "");
  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedProductId, product]);
  if (!product) {
    return <div className="text-center py-12 text-neutral-400">No product selected</div>;
  }
  const recommendations = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-12 animate-fade-in">
      
      {
    /* Back Button */
  }
      <button
    onClick={() => navigate("/products")}
    className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-secondary font-bold uppercase tracking-wider group transition-colors cursor-pointer"
  >
        <ChevronLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
        <span>Back to collection</span>
      </button>

      {
    /* Main Grid: Details split */
  }
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {
    /* Left: Gallery */
  }
        <div className="lg:col-span-7">
          <ProductGallery
    images={product.images || [product.image]}
    activeImage={activeImage}
    onChange={setActiveImage}
    productName={product.name}
  />
        </div>

        {
    /* Right: Info and Actions */
  }
        <div className="lg:col-span-5 space-y-6 divide-y divide-neutral-100/60">
          <ProductInfo product={product} />
          <ProductAction product={product} />
        </div>
      </div>

      {
    /* Customer Reviews Feed */
  }
      <div className="bg-white border border-neutral-100 rounded-3xl p-8 sm:p-12 space-y-6 shadow-sm">
        <h3 className="font-serif text-lg font-bold text-secondary flex items-center gap-2">
          <span>Customer Reviews</span>
          <span className="text-xs bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded">
            {product.reviews.length}
          </span>
        </h3>

        {product.reviews.length > 0 ? <div className="divide-y divide-neutral-100 space-y-6">
            {product.reviews.map((rev, index) => <div key={index} className="pt-6 first:pt-0 space-y-2">
                <div className="flex items-center justify-between gap-4">
                  <h4 className="font-sans text-sm font-semibold text-secondary">{rev.user}</h4>
                  <span className="text-[10px] text-neutral-400 font-medium">{rev.date}</span>
                </div>
                <div className="flex text-primary gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`w-3 h-3 ${i < rev.rating ? "fill-primary text-primary" : "text-neutral-200"}`} />)}
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed font-light italic">
                  "{rev.comment}"
                </p>
              </div>)}
          </div> : <div className="text-center py-6 text-neutral-400 space-y-2">
            <p className="text-xs">No reviews listed yet for this apparel item.</p>
            <p className="text-[10px]">Be the first to share your fitting feedback once purchased!</p>
          </div>}
      </div>

      {
    /* Recommendations */
  }
      {recommendations.length > 0 && <div className="space-y-6">
          <div>
            <span className="text-[9px] tracking-widest text-primary uppercase font-bold block mb-1">Pairs Nicely With</span>
            <h3 className="font-serif text-xl font-bold text-secondary">Recommended Creations</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendations.map((prod) => <ProductCard key={prod.id} product={prod} />)}
          </div>
        </div>}

    </div>;
};
export default ProductDetails;
