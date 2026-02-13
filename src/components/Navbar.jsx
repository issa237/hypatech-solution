import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      {/* Main Navbar Container */}
      <div className="flex justify-between items-center md:px-10 px-5 py-5">
        
        {/* 1. Logo (Stays Left) */}
        <div className="flex items-center gap-2">
          <img 
            src="https://hypatechsolutions.com/wp-content/uploads/elementor/thumbs/cropped-Logo-Hypatech-EDITED-1-qcvyw2whr1oj8wp1ma729jjrajdtaba1kh21edoagw.png" 
            alt="Hypatech Logo" 
            className="h-10"
          />
        </div>

        {/* 2. Middle: Desktop Links & Mobile Button */}
        {/* On small screens, the Button moves to the middle because the Links are hidden */}
        <div className="flex-1 flex justify-center md:justify-end md:mr-8">
          <ul className="hidden md:flex gap-8 font-medium text-gray-700">
            <li className="hover:text-red-600 cursor-pointer">Home</li>
            <li className="hover:text-red-600 cursor-pointer">About us</li>
            <li className="hover:text-red-600 cursor-pointer font-bold text-red-600 underline">Our Company</li>
            <li className="hover:text-red-600 cursor-pointer">Contact Us</li>
          </ul>
          
          {/* "Ask a Quote" Button - Centered on Mobile via flex-1 */}
          <button className="bg-red-600 text-white px-5 py-2 rounded-full font-bold hover:bg-red-700 transition text-sm md:text-base">
            Ask a quote
          </button>
        </div>

        {/* 3. Mobile Menu Icon (Right side on small screens) */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none p-2"
          >
            {/* Hamburger / Close Icon */}
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

      {/* 4. Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in-down">
          <ul className="flex flex-col p-5 gap-4 font-medium text-gray-700">
            <li className="hover:text-red-600 cursor-pointer py-2 border-b border-gray-50">Home</li>
            <li className="hover:text-red-600 cursor-pointer py-2 border-b border-gray-50">About us</li>
            <li className="hover:text-red-600 cursor-pointer py-2 border-b border-gray-50 font-bold text-red-600">Our Company</li>
            <li className="hover:text-red-600 cursor-pointer py-2">Contact Us</li>
          </ul>
        </div>
      )}
    </nav>
  );
}