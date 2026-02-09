
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  wishlistCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ wishlistCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-[60] transition-all duration-300 ${
          scrolled || isOpen ? 'bg-[#FDFBF7] shadow-sm' : 'bg-[#FDFBF7]/90 backdrop-blur-md'
        } border-b border-[#E5E1DA]`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center z-[70]">
              <a href="#/" className="text-2xl font-bold tracking-tighter text-[#2D2926]" onClick={() => setIsOpen(false)}>
                IDDICO <span className="font-light italic text-[#B59410]">Fabriks</span>
              </a>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium hover:text-[#B59410] transition-colors duration-200 uppercase tracking-widest relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B59410] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4 z-[70]">
              <button className="p-2 hover:bg-[#E5E1DA] rounded-full transition-colors" aria-label="Search">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              {/* Wishlist Icon */}
              <button className="p-2 hover:bg-[#E5E1DA] rounded-full transition-colors relative" aria-label="Wishlist">
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${wishlistCount > 0 ? 'text-[#B59410] fill-current' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute top-0 right-0 h-4 w-4 bg-[#2D2926] text-white text-[10px] flex items-center justify-center rounded-full animate-in zoom-in duration-300">
                    {wishlistCount}
                  </span>
                )}
              </button>

              <button className="p-2 hover:bg-[#E5E1DA] rounded-full transition-colors relative" aria-label="Shopping Cart">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute top-0 right-0 h-4 w-4 bg-[#B59410] text-white text-[10px] flex items-center justify-center rounded-full">0</span>
              </button>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 hover:bg-[#E5E1DA] rounded-md focus:outline-none transition-transform active:scale-95"
                  aria-expanded={isOpen}
                  aria-label="Toggle navigation menu"
                >
                  <div className="relative w-6 h-6">
                    <span 
                      className={`absolute block h-0.5 w-full bg-current transform transition-all duration-300 ease-in-out ${
                        isOpen ? 'rotate-45 top-3' : 'top-1'
                      }`}
                    ></span>
                    <span 
                      className={`absolute block h-0.5 w-full bg-current transform transition-all duration-200 ease-in-out ${
                        isOpen ? 'opacity-0' : 'top-3'
                      }`}
                    ></span>
                    <span 
                      className={`absolute block h-0.5 w-full bg-current transform transition-all duration-300 ease-in-out ${
                        isOpen ? '-rotate-45 top-3' : 'top-5'
                      }`}
                    ></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu Overlay and Container */}
      <div 
        className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop Fade */}
        <div 
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Menu Slide-down and Fade */}
        <div 
          className={`absolute top-0 left-0 w-full bg-[#FDFBF7] shadow-xl transition-all duration-500 ease-in-out transform ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
        >
          <div className="pt-24 pb-12 px-6">
            <div className="flex flex-col items-center space-y-6">
              {NAV_LINKS.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-2xl font-semibold text-[#2D2926] hover:text-[#B59410] transition-all duration-300 uppercase tracking-[0.2em] transform ${
                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className={`pt-8 w-full border-t border-[#E5E1DA] flex justify-center space-x-8 transition-all duration-500 delay-300 ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                {/* Mobile Social Links */}
                <span className="text-xs uppercase tracking-widest text-gray-500 hover:text-[#B59410] cursor-pointer">Instagram</span>
                <span className="text-xs uppercase tracking-widest text-gray-500 hover:text-[#B59410] cursor-pointer">Journal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
