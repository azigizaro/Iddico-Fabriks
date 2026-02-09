
import React from 'react';
import { PRODUCTS } from '../constants';

interface ProductGridProps {
  wishlist: string[];
  onToggleWishlist: (id: string) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ wishlist, onToggleWishlist }) => {
  return (
    <section id="shop" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-4">Curated Selection</h2>
            <p className="text-[#5C5753]">Filter through our finest textile categories</p>
          </div>
          <div className="mt-8 md:mt-0 flex space-x-6">
            {['All', 'Silk', 'Cotton', 'Linen', 'Prints'].map(cat => (
              <button key={cat} className="text-sm uppercase tracking-widest hover:text-[#B59410] border-b border-transparent hover:border-[#B59410] pb-1 transition-all">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {PRODUCTS.map((product) => {
            const isWishlisted = wishlist.includes(product.id);
            return (
              <div key={product.id} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#F3EFEC] mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Wishlist Button */}
                  <button 
                    onClick={() => onToggleWishlist(product.id)}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-all transform hover:scale-110 active:scale-90"
                    aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 transition-colors ${isWishlisted ? 'text-[#B59410] fill-current' : 'text-gray-400'}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                    <button className="bg-white text-[#2D2926] px-6 py-3 text-xs uppercase tracking-widest shadow-lg hover:bg-[#B59410] hover:text-white transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium mb-1">{product.name}</h3>
                    <p className="text-sm text-[#B59410] italic mb-2">{product.category}</p>
                    <p className="text-sm text-[#5C5753] line-clamp-1">{product.description}</p>
                  </div>
                  <p className="font-semibold text-lg">${product.price.toFixed(2)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
