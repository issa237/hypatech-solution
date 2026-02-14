import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const getLinkClass = ({ isActive }) => 
    isActive 
      ? "text-red-600 font-bold cursor-pointer" 
      : "hover:text-red-600 cursor-pointer text-gray-700 transition-colors";

  return (
    <nav className="sticky top-0 z-50 w-full px-4 py-4 md:px-6 md:py-6">
      
      {/* Glass Surface Container */}
      <div className="max-w-7xl mx-auto rounded-full px-6 py-3 flex justify-between items-center transition-all duration-300
                      bg-white/40 backdrop-blur-md border border-white/30 shadow-lg backdrop-saturate-150">
        
        {/* 1. LEFT: Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <img 
            src="https://hypatechsolutions.com/wp-content/uploads/elementor/thumbs/cropped-Logo-Hypatech-EDITED-1-qcvyw2whr1oj8wp1ma729jjrajdtaba1kh21edoagw.png" 
            alt="Hypatech Logo" 
            className="h-10"
          />
        </div>

        {/* 2. CENTER: Desktop Links */}
        {/* "flex-1 justify-center" forces this block to take up all available center space */}
        <ul className="hidden md:flex flex-1 justify-center gap-8 font-medium">
          <li><NavLink to="/" className={getLinkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={getLinkClass}>About us</NavLink></li>
         
          <li><NavLink to="/contact" className={getLinkClass}>Contact Us</NavLink></li>
        </ul>
        
        {/* 3. RIGHT: Button & Mobile Toggle */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <button className="hidden md:block bg-red-600 text-white px-5 py-2 rounded-full font-bold hover:bg-red-700 transition text-sm shadow-md">
            Ask a quote
          </button>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none p-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden max-w-7xl mx-auto mt-2 rounded-2xl p-2 animate-fade-in-down
                        bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl">
          <ul className="flex flex-col p-4 gap-4 font-medium text-gray-800">
            <li><NavLink to="/" className={getLinkClass} onClick={() => setIsOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" className={getLinkClass} onClick={() => setIsOpen(false)}>About us</NavLink></li>
            <li><NavLink to="/services" className={getLinkClass} onClick={() => setIsOpen(false)}>Our Company</NavLink></li>
            <li><NavLink to="/contact" className={getLinkClass} onClick={() => setIsOpen(false)}>Contact Us</NavLink></li>
            {/* Added Button here for Mobile since it's hidden in the navbar on small screens */}
            <li className="pt-2">
              <button className="w-full bg-red-600 text-white px-5 py-3 rounded-xl font-bold hover:bg-red-700 transition">
                Ask a quote
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}