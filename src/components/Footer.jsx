export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <img 
            src="https://hypatechsolutions.com/wp-content/uploads/elementor/thumbs/cropped-Logo-Hypatech-EDITED-1-qcvyw2whr1oj8wp1ma729jjrajdtaba1kh21edoagw.png" 
            alt="Hypatech Logo" 
            className="h-10 brightness-0 invert"
          />
          <p className="text-sm leading-relaxed">
            Hypa Tech is helping companies monitor, track and take action on projections 
            and growth to reduce losses and increase productivity.
          </p>
          <div className="flex gap-4">
            {/* Social Icons (Placeholders for Facebook, Twitter, LinkedIn) */}
            <span className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition cursor-pointer">FB</span>
            <span className="p-2 bg-gray-800 rounded-full hover:bg-red-400 transition cursor-pointer">TW</span>
            <span className="p-2 bg-gray-800 rounded-full hover:bg-red-700 transition cursor-pointer">IN</span>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Useful Links</h3>
          <ul className="space-y-4 text-sm">
            <li className="hover:text-red-400 cursor-pointer">Home</li>
            <li className="hover:text-red-400 cursor-pointer">About HypaTech</li>
            <li className="hover:text-red-400 cursor-pointer">Services</li>
            <li className="hover:text-red-400 cursor-pointer">Careers</li>
            <li className="hover:text-red-400 cursor-pointer">References</li>
            <li className="hover:text-red-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Our Company */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Our Company</h3>
          <ul className="space-y-4 text-sm">
            <li className="hover:text-red-400 cursor-pointer">Hypa Host</li>
            <li className="hover:text-red-400 cursor-pointer">Hypa Text</li>
            <li className="hover:text-red-400 cursor-pointer">Hypa Track</li>
            <li className="hover:text-red-400 cursor-pointer">Hypa Tech</li>
          </ul>
        </div>

        {/* Contact Info / Newsletter */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Stay Connected</h3>
          <p className="text-sm mb-4">Subscribe to our newsletter for the latest digital solutions.</p>
          <div className="flex flex-col gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-gray-800 border-none rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
            />
            <button className="bg-red-600 text-white py-2 rounded-lg font-bold hover:bg-red-700 transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        © 2026 Hypatech Solutions. All rights reserved.
      </div>
    </footer>
  );
}