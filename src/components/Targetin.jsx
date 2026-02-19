import React from 'react';

export default function Targetin() {
  return (
    <div className="min-h-screen  p-4 md:p-8 font-sans text-slate-800">
      
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* 1. HERO HEADER (Spans Full Width) */}
        <div className="bg-[#00a651] text-white rounded-[2.5rem] p-10 md:p-20 shadow-sm relative overflow-hidden text-center md:text-left mt-30">
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              GET UP TO <span className="text-green-200">90%</span> OPEN RATE
            </h1>
            <p className="text-xl md:text-2xl text-green-50 font-medium max-w-2xl leading-relaxed">
              Unlike traditional SMS and email marketing, more people open their WhatsApp messages.
            </p>
            <div className="mt-10">
              <a 
                href="https://targetin.net/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#00a651] px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all shadow-lg transform hover:-translate-y-1"
              >
                Start Marketing Now
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
          {/* Decorative Circles from image */}
          <div className="absolute top-1/2 right-10 w-96 h-96 border-[20px] border-green-400/30 rounded-full hidden md:block"></div>
          <div className="absolute top-10 right-40 w-full h-full bg-green-400/10 rounded-full blur-3xl"></div>
        </div>

        {/* 2. FEATURES GRID (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          
          {/* Section Title */}
          <div className="md:col-span-4 text-center py-8">
            <h2 className="text-3xl font-bold text-slate-900">Experience WhatsApp Marketing Like Never Before</h2>
          </div>

          {/* Feature 1 */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-green-100 text-[#00a651] rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl">send</span>
            </div>
            <h3 className="font-bold text-lg mb-3">Send Thousands Of Messages</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Send thousands of WhatsApp messages to all contacts including contacts not saved in your address book.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-green-100 text-[#00a651] rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl">perm_media</span>
            </div>
            <h3 className="font-bold text-lg mb-3">Send Text, Video, Audio, PDF</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Send your publicity in any format such as text, images, videos, audio, pdf, vCard files and location.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-green-100 text-[#00a651] rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl">group_add</span>
            </div>
            <h3 className="font-bold text-lg mb-3">Import Multiple Contacts</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Import unlimited contacts and mobile numbers. Unlike our competitors, we do not charge based on number of contacts.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-green-100 text-[#00a651] rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl">download</span>
            </div>
            <h3 className="font-bold text-lg mb-3">Extract Contacts</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Extract Contacts from WhatsApp Groups, and easily add them to your WhatsApp Marketing sending list.
            </p>
          </div>
        </div>

        {/* 3. MARKETING SOFTWARE SECTION (Spans 2 Cols + 2 Side Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm items-center">
           <div className="order-2 md:order-1 relative">
             {/* Illustration Placeholder */}
             <div className="bg-green-50 rounded-[2rem] w-full h-80 flex items-center justify-center relative overflow-hidden">
                <span className="material-symbols-outlined text-9xl text-green-200">chat_bubble</span>
                <div className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3">
                   <div className="w-10 h-10 bg-green-500 rounded-full"></div>
                   <div className="h-2 w-24 bg-gray-200 rounded"></div>
                </div>
             </div>
           </div>
           
           <div className="order-1 md:order-2 space-y-6">
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
               Not Your Regular <span className="text-[#00a651]">Marketing Software</span>
             </h2>
             <p className="text-slate-600 text-lg">
               With over 2 Billion people using WhatsApp daily, TARGETIN will help you show your products and services to the maximum number of users to get high ROI.
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
               <div className="bg-gray-50 p-6 rounded-2xl">
                 <span className="material-symbols-outlined text-[#00a651] text-3xl mb-2">storefront</span>
                 <h4 className="font-bold text-slate-900">Market On WhatsApp</h4>
                 <p className="text-xs text-slate-500 mt-2">Tap into the potential of WhatsApp. Show your product to as many people as possible.</p>
               </div>
               <div className="bg-gray-50 p-6 rounded-2xl">
                 <span className="material-symbols-outlined text-[#00a651] text-3xl mb-2">reply_all</span>
                 <h4 className="font-bold text-slate-900">Get Replies Directly</h4>
                 <p className="text-xs text-slate-500 mt-2">Reach thousands of people, get their replies directly into your whatsapp.</p>
               </div>
             </div>

             <div className="pt-4">
               <button className="bg-[#00a651] text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition-colors">
                 REQUEST A DEMO
               </button>
             </div>
           </div>
        </div>

        {/* 4. PRICING SECTION (3 Distinct Cards) */}
        <div className="py-10">
          <h2 className="text-3xl font-bold text-center mb-2">Price List</h2>
          <p className="text-center text-slate-500 mb-10">Packages & Offers</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* STARTER */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-6">
                <span className="text-5xl font-extrabold text-slate-900">$22</span>
              </div>
              <h3 className="text-green-600 font-bold tracking-widest uppercase mb-2">STARTER</h3>
              <p className="text-xs text-slate-500 mb-6">Great for Startups and small businesses.</p>
              
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center text-sm text-slate-600 gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Import Contacts From Excel</li>
                <li className="flex items-center text-sm text-slate-600 gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Send Bulk WhatsApp Message</li>
                <li className="flex items-center text-sm text-slate-600 gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Send Personalized Messages</li>
                <li className="flex items-center text-sm text-slate-600 gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Send Up To 5,000 Messages/Month</li>
              </ul>
              
              <button className="w-full py-3 rounded-full bg-[#00a651] text-white font-bold hover:bg-green-700 transition-colors">
                Purchase now
              </button>
            </div>

            {/* DELUXE */}
            <div className="bg-white rounded-[2rem] p-8 shadow-lg border-2 border-[#00a651] relative flex flex-col hover:-translate-y-2 transition-transform duration-300 transform scale-105 z-10">
              <div className="absolute top-0 right-0 bg-[#00a651] text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-[1.8rem]">POPULAR</div>
              <div className="mb-6">
                <span className="text-5xl font-extrabold text-slate-900">$35</span>
              </div>
              <h3 className="text-green-600 font-bold tracking-widest uppercase mb-2">DELUXE</h3>
              <p className="text-xs text-slate-500 mb-6">Scale your business and reach more clients.</p>
              
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center text-sm text-slate-600 gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Import Contacts From Excel</li>
                <li className="flex items-center text-sm text-slate-600 gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Send Bulk WhatsApp Message</li>
                <li className="flex items-center text-sm text-slate-600 gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Send Personalized Messages</li>
                <li className="flex items-center text-sm text-slate-600 gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Extract Contacts From Groups</li>
                <li className="flex items-center text-sm text-slate-600 gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Send Up To 15,000 Messages/Month</li>
              </ul>
              
              <button className="w-full py-3 rounded-full bg-[#00a651] text-white font-bold hover:bg-green-700 transition-colors shadow-lg shadow-green-200">
                Purchase now
              </button>
            </div>

            {/* ULTIMATE */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-6">
                <span className="text-5xl font-extrabold text-slate-900">$90</span>
              </div>
              <h3 className="text-green-600 font-bold tracking-widest uppercase mb-2">ULTIMATE</h3>
              <p className="text-xs text-slate-500 mb-6">Go UNLIMITED on everything.</p>
              
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center text-sm text-slate-600 gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Import Contacts From Excel</li>
                <li className="flex items-center text-sm text-slate-600 gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Send Bulk WhatsApp Message</li>
                <li className="flex items-center text-sm text-slate-600 gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Send Personalized Messages</li>
                <li className="flex items-center text-sm text-slate-600 gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> Extract Contacts From Groups</li>
                <li className="flex items-center text-sm text-slate-600 gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check</span> <b>Send Unlimited Messages</b></li>
              </ul>
              
              <button className="w-full py-3 rounded-full bg-[#00a651] text-white font-bold hover:bg-green-700 transition-colors">
                Purchase now
              </button>
            </div>

          </div>
        </div>

        {/* 5. TESTIMONIALS / FOOTER CTA */}
        <div className="bg-slate-900 rounded-[2.5rem] p-10 text-center md:text-left text-white flex flex-col md:flex-row justify-between items-center gap-8">
           <div>
             <h2 className="text-2xl font-bold mb-2">What our users have to say?</h2>
             <div className="flex gap-1 text-green-500 mb-2">
               <span className="material-symbols-outlined">star</span>
               <span className="material-symbols-outlined">star</span>
               <span className="material-symbols-outlined">star</span>
               <span className="material-symbols-outlined">star</span>
               <span className="material-symbols-outlined">star</span>
             </div>
             <p className="text-slate-400 text-sm max-w-md">"Gotta love TARGETIN! It's really easy and simple. In just a click I could reach thousands of WhatsApp users."</p>
           </div>
           <button className="bg-[#00a651] hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold transition-colors">
             Read all Testimonials
           </button>
        </div>

      </div>
    </div>
  );
}