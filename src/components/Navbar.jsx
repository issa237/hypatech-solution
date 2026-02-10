export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <img 
          src="https://hypatechsolutions.com/wp-content/uploads/elementor/thumbs/cropped-Logo-Hypatech-EDITED-1-qcvyw2whr1oj8wp1ma729jjrajdtaba1kh21edoagw.png" 
          alt="Hypatech Logo" 
          className="h-10"
        />
      </div>
      <ul className="hidden md:flex gap-8 font-medium text-gray-700">
        <li className="hover:text-red-600 cursor-pointer">Home</li>
        <li className="hover:text-red-600 cursor-pointer">About us</li>
        <li className="hover:text-red-600 cursor-pointer font-bold text-red-600 underline">Our Company</li>
        <li className="hover:text-red-600 cursor-pointer">Contact Us</li>
      </ul>
      <button className="bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition">
        Ask a quote
      </button>
    </nav>
  );
}