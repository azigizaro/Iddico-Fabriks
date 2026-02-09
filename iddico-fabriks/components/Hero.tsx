
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-20">
      {/* Background with texture/overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/fabric-hero/1920/1080" 
          alt="Luxury Fabric Background" 
          className="w-full h-full object-cover opacity-60 grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <span className="text-[#B59410] uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">New Collection 2024</span>
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
            Elegance <br />
            <span className="italic font-light serif text-[#5C5753]">Woven with Care.</span>
          </h1>
          <p className="text-lg text-[#5C5753] mb-10 max-w-md leading-relaxed">
            Discover a curated world of premium textiles. From royal mulberry silks to artisan-crafted African prints, we bring you the finest fabrics for your every creation.
          </p>
          <div className="flex space-x-4">
            <a href="#/shop" className="bg-[#2D2926] text-white px-8 py-4 rounded-sm text-sm uppercase tracking-widest hover:bg-[#B59410] transition-colors duration-300">
              Shop The Collection
            </a>
            <a href="#/about" className="border border-[#2D2926] text-[#2D2926] px-8 py-4 rounded-sm text-sm uppercase tracking-widest hover:bg-[#2D2926] hover:text-white transition-all duration-300">
              Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
