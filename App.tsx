
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';

// Simple Hash Router Implementation
const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0); // Reset scroll on path change
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentPath) {
      case '#/shop':
      case '#/collections':
        return <ProductGrid />;
      case '#/about':
        return (
          <section className="py-32 container mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold mb-8">Our Heritage</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-[#5C5753] leading-relaxed">
              <p>Iddico Fabriks began as a small family atelier with a passion for quality textiles. Today, we stand as a global beacon for luxury fabrics, serving fashion houses, interior designers, and home crafters alike.</p>
              <p>Every meter of fabric in our collection is handpicked for its texture, durability, and ethical footprint. We believe that what you wear and what you live in should tell a story of excellence.</p>
              <img src="https://picsum.photos/seed/about-img/1200/600" alt="Atelier" className="rounded-lg shadow-xl my-12" />
            </div>
          </section>
        );
      case '#/contact':
        return (
          <section className="py-32 container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-white p-12 shadow-sm border border-[#E5E1DA]">
              <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <p className="text-[#5C5753] mb-6">Have a specific request or looking for wholesale partnerships? Reach out to our concierge team.</p>
                  <div className="space-y-4 text-sm">
                    <p><strong>Address:</strong> 124 Textile Row, Fashion District</p>
                    <p><strong>Phone:</strong> +1 (555) IDDICO-FAB</p>
                    <p><strong>Email:</strong> concierge@iddico.com</p>
                  </div>
                </div>
                <form className="space-y-6">
                  <input type="text" placeholder="Full Name" className="w-full border-b border-[#E5E1DA] py-3 outline-none focus:border-[#B59410]" />
                  <input type="email" placeholder="Email Address" className="w-full border-b border-[#E5E1DA] py-3 outline-none focus:border-[#B59410]" />
                  <textarea placeholder="Your Message" rows={4} className="w-full border-b border-[#E5E1DA] py-3 outline-none focus:border-[#B59410] resize-none"></textarea>
                  <button className="w-full bg-[#2D2926] text-white py-4 uppercase tracking-widest text-sm hover:bg-[#B59410] transition-colors">Send Inquiry</button>
                </form>
              </div>
            </div>
          </section>
        );
      default:
        return (
          <>
            <Hero />
            <div id="home-collections" className="py-24 bg-[#FDFBF7]">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                         <img src="https://picsum.photos/seed/fabric-detail/800/1000" alt="Detail" className="w-full h-[600px] object-cover shadow-2xl" />
                         <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#B59410]/10 backdrop-blur-sm p-8 border border-[#B59410]/20 hidden lg:block">
                            <span className="text-4xl font-bold text-[#B59410]">100%</span>
                            <p className="text-xs uppercase tracking-widest mt-2">Organic & Sustainable</p>
                         </div>
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-5xl font-bold leading-tight">Mastery in <br/><span className="italic serif font-normal">Every Thread.</span></h2>
                        <p className="text-[#5C5753] text-lg leading-relaxed">We travel the world to find weavers who share our vision. From the hills of Como for silk to the vibrant markets of West Africa for authentic wax prints, our quality is unparalleled.</p>
                        <div className="grid grid-cols-2 gap-8 pt-8">
                            <div>
                                <h4 className="font-bold text-xl mb-2">Artisan Made</h4>
                                <p className="text-sm text-[#5C5753]">Supporting traditional weaving communities worldwide.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl mb-2">Expert Care</h4>
                                <p className="text-sm text-[#5C5753]">Guided advice for every textile you purchase.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProductGrid />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {renderContent()}
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
