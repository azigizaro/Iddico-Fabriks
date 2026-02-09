
import React from 'react';
import { PRODUCTS } from '../constants';

const ProductGrid: React.FC = () => {
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
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#F3EFEC] mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
