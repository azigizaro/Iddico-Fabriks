
import React from 'react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2D2926] text-[#FDFBF7] py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold mb-6 tracking-tighter">
              IDDICO <span className="font-light italic text-[#B59410]">Fabriks</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your global partner in premium textiles. Sourcing excellence since 1994.
            </p>
            <div className="flex space-x-4">
              {/* Mock Social Icons */}
              <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#B59410] transition-colors cursor-pointer">f</div>
              <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#B59410] transition-colors cursor-pointer">ig</div>
              <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#B59410] transition-colors cursor-pointer">in</div>
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest font-semibold mb-6 text-[#B59410]">Shop</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#/shop" className="hover:text-white transition-colors">All Fabrics</a></li>
              <li><a href="#/shop" className="hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href="#/shop" className="hover:text-white transition-colors">Wholesale</a></li>
              <li><a href="#/shop" className="hover:text-white transition-colors">Custom Printing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest font-semibold mb-6 text-[#B59410]">Information</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              {NAV_LINKS.map(link => (
                <li key={link.label}><a href={link.href} className="hover:text-white transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest font-semibold mb-6 text-[#B59410]">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">Subscribe to receive textile trends and new collections.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-b border-gray-600 focus:border-[#B59410] py-2 flex-1 outline-none text-sm"
              />
              <button className="ml-4 text-xs uppercase tracking-widest font-bold text-[#B59410] hover:text-white transition-colors">Join</button>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>© 2024 Iddico Fabriks. All rights reserved. Designed for the discerning designer.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
