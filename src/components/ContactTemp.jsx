import React from 'react';

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800 overflow-hidden font-sans">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 bg-grid pointer-events-none opacity-50"></div>
      
      {/* Animated Blobs (Red Themed) */}
      <div className="blob-solid bg-red-600 w-96 h-96 -top-20 -right-20 mix-blend-multiply blur-3xl animate-float"></div>
      <div className="blob-solid bg-red-400 w-72 h-72 top-40 right-1/4 mix-blend-multiply blur-2xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="blob-solid bg-blue-300 w-80 h-80 bottom-0 -left-20 mix-blend-multiply blur-2xl opacity-50 animate-float" style={{animationDelay: '4s'}}></div>
      
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-red-600 mb-4 tracking-tight">Get in Touch</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to learn more about our services? We're here to help you transform your ideas into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Contact Info */}
          <div className="space-y-10">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-4">
              Contact Information
            </h2>

            {/* Office Address */}
            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-building text-xl"></i> {/* Ensure FontAwesome is loaded or use emoji/SVG */}
                📍
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-1">Our Office</h3>
                <p className="text-slate-600 leading-relaxed">
                  HypaTech Solutions<br/>
                  Westlands Commercial Center,<br/>
                  Nairobi, Kenya
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                📞
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-1">Phone</h3>
                <p className="text-slate-600">
                  <a className="hover:text-red-600 transition-colors block mb-1" href="tel:+254700000000">+254 712 345 678</a>
                  <span className="text-sm text-slate-500">Mon-Fri 8am-5pm</span>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                ✉️
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-1">Email</h3>
                <p className="text-slate-600">
                  <a className="hover:text-red-600 transition-colors font-medium" href="mailto:info@hypatechsolutions.com">info@hypatechsolutions.com</a>
                  <br/>
                  <span className="text-sm text-slate-500">We reply within 24 hours.</span>
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="font-bold text-lg text-slate-900 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a className="w-10 h-10 bg-slate-200 hover:bg-[#0077b5] hover:text-white text-slate-600 rounded-lg flex items-center justify-center transition-all duration-300" href="#">IN</a>
                <a className="w-10 h-10 bg-slate-200 hover:bg-[#1877F2] hover:text-white text-slate-600 rounded-lg flex items-center justify-center transition-all duration-300" href="#">FB</a>
                <a className="w-10 h-10 bg-slate-200 hover:bg-[#E4405F] hover:text-white text-slate-600 rounded-lg flex items-center justify-center transition-all duration-300" href="#">IG</a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100 relative">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700" htmlFor="name">Name</label>
                  <input className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-shadow" id="name" placeholder="Your Name" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700" htmlFor="email">Email</label>
                  <input className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-shadow" id="email" placeholder="your.email@company.com" type="email"/>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700" htmlFor="subject">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-shadow" id="subject" defaultValue="">
                  <option disabled value="">Select a subject</option>
                  <option value="software">Software Development</option>
                  <option value="ai">AI Solutions</option>
                  <option value="data">Data Analytics</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700" htmlFor="message">Message</label>
                <textarea className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-shadow resize-none" id="message" placeholder="Tell us about your project..." rows="4"></textarea>
              </div>

              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" type="button">
                Submit Inquiry
              </button>
            </form>
          </div>

        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="bg-white p-2 rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-slate-200">
              <iframe 
                className="grayscale hover:grayscale-0 transition-all duration-500 w-full h-full" 
                loading="lazy" 
                src="https://maps.google.com/maps?q=Westlands%20Commercial%20Center%2C%20Nairobi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                style={{border: 0}}
                title="HypaTech Solutions Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}