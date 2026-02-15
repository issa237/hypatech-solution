import React from 'react';

export default function HypaFi() {
  return (
    <div className="min-h-screen  p-4 md:p-8 font-sans text-slate-800">
      
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* HEADER SECTION */}
        <div className="text-center md:text-left mb-8">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
            Hypa<span className="text-red-600">Fi</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl">
            Jumpstart your business. A centralized, cloud-based lead generation solution.
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-auto gap-4 md:gap-6">

          {/* 1. HERO CARD: What is HypaFi (Spans 2 cols, 2 rows) */}
          <div className="md:col-span-2 md:row-span-2 bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6 text-red-600">
                <span className="material-symbols-outlined text-2xl">wifi_tethering</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Cloud-Based Lead Generation</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Enable businesses to gather info on potential clientele by offering free Wi-Fi. Manage all your networks remotely and change adverts or splash page contents from wherever.
              </p>
              
              {/* Social Login Icons */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="text-xs font-bold text-slate-400 uppercase mb-3">Login via Social Media</p>
                <div className="flex gap-4 text-2xl text-slate-600">
                  <i className="fab fa-facebook hover:text-[#1877F2] transition-colors"></i>
                  <i className="fab fa-twitter hover:text-[#1DA1F2] transition-colors"></i>
                  <i className="fab fa-google hover:text-[#DB4437] transition-colors"></i>
                  <i className="fab fa-linkedin hover:text-[#0A66C2] transition-colors"></i>
                  <i className="fab fa-instagram hover:text-[#E4405F] transition-colors"></i>
                  <i className="fab fa-windows hover:text-[#0078D6] transition-colors"></i>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 mt-8">
               <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-colors flex items-center gap-2">
                 Get Started
                 <span className="material-symbols-outlined text-sm">arrow_forward</span>
               </button>
            </div>
          </div>

          {/* 2. GDPR COMPLIANCE (Spans 2 cols) */}
          <div className="md:col-span-2 bg-slate-900 text-white rounded-[2rem] p-8 shadow-sm flex items-center justify-between relative overflow-hidden">
             <div className="relative z-10 max-w-md">
               <div className="flex items-center gap-2 mb-2">
                 <span className="material-symbols-outlined text-green-400">verified_user</span>
                 <h3 className="font-bold text-lg">GDPR Compliant</h3>
               </div>
               <p className="text-slate-400 text-sm">
                 HypaFi is fully compliant with the General Data Protection Regulation. Your client's data is secure and managed responsibly.
               </p>
             </div>
             <div className="absolute right-[-20px] top-[-20px] opacity-10">
               <span className="material-symbols-outlined text-9xl">gavel</span>
             </div>
          </div>

          {/* 3. CORE FEATURE: Nurture (Spans 1 col) */}
          <div className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-shadow">
             <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
               <span className="material-symbols-outlined">favorite</span>
             </div>
             <h3 className="font-bold text-lg mb-2">Nurture & Engage</h3>
             <p className="text-sm text-slate-600">
               Familiarize customers with your brand, incentivize purchases, and encourage social media interaction.
             </p>
          </div>

          {/* 4. CORE FEATURE: Target Audience (Spans 1 col) */}
          <div className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-shadow">
             <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
               <span className="material-symbols-outlined">ads_click</span>
             </div>
             <h3 className="font-bold text-lg mb-2">Target Audience</h3>
             <p className="text-sm text-slate-600">
               Use Wi-Fi advertising to show personalized messages and manage what users see about your business.
             </p>
          </div>

          {/* 5. VISUAL CONTENT (Spans 2 cols, 2 rows) */}
          <div className="md:col-span-2 md:row-span-2 bg-red-600 text-white rounded-[2rem] p-8 shadow-sm relative overflow-hidden flex flex-col justify-center">
            <div className="relative z-10 text-center">
              <span className="material-symbols-outlined text-6xl mb-4 text-red-200">play_circle</span>
              <h3 className="text-3xl font-bold mb-4">Feature Relevant Content</h3>
              <p className="text-red-100 text-lg max-w-md mx-auto mb-8">
                Display images and video advertising in the right moment. Target customers while they are in your location with in-store discounts and special offers.
              </p>
              <div className="flex justify-center gap-4">
                 <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-bold">Video Ads</div>
                 <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-bold">Splash Pages</div>
              </div>
            </div>
            {/* Abstract Shapes */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500 to-red-700 -z-0"></div>
            <div className="absolute bottom-[-50px] left-[-50px] w-48 h-48 bg-white opacity-10 rounded-full blur-2xl"></div>
          </div>

          {/* 6. LOYALTY (Spans 1 col) */}
          <div className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-shadow">
             <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
               <span className="material-symbols-outlined">loyalty</span>
             </div>
             <h3 className="font-bold text-lg mb-2">Customer Loyalty</h3>
             <p className="text-sm text-slate-600">
               Target customized email marketing to returning users to keep them interested and coming back.
             </p>
          </div>

          {/* 7. TARGETED MARKETING (Spans 1 col) */}
          <div className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-shadow">
             <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
               <span className="material-symbols-outlined">campaign</span>
             </div>
             <h3 className="font-bold text-lg mb-2">Targeted Marketing</h3>
             <p className="text-sm text-slate-600">
               Promote your business for free! Generate new leads and drive traffic to your website.
             </p>
          </div>

          {/* 8. BRAND AWARENESS (Spans 2 cols) */}
          <div className="md:col-span-2 bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow flex items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center">
               <span className="material-symbols-outlined text-3xl">psychology</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">AI Powered Brand Awareness</h3>
              <p className="text-slate-600 text-sm">
                Reach millions of users and build your brand by constantly reminding them of your services using AI-powered Wi-Fi advertising.
              </p>
            </div>
          </div>

          {/* 9. CULTURE / CLOSING (Spans 2 cols) */}
          <div className="md:col-span-2 bg-gray-200 rounded-[2rem] p-8 flex items-center justify-center text-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Our Culture</h3>
              <p className="text-slate-600 italic">"We strive to work with the best."</p>
            </div>
          </div>

        </div>
        {/* END GRID */}
        
      </div>
    </div>
  );
}