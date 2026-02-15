import React from 'react';

export default function HypaTrack() {
  return (
    <div className="min-h-screen  p-4 md:p-8 font-sans text-slate-800">
      
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* HEADER SECTION */}
        <div className="text-center md:text-left mb-8">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
            Hypa<span className="text-red-600">Track</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl">
            Track │ Monitor │ Secure. Manage your fleet with ease no matter the size.
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-auto gap-4 md:gap-6">

          {/* 1. HERO CARD (Spans 2 cols, 2 rows) */}
          <div className="md:col-span-2 md:row-span-2 bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6 text-red-600">
                <span className="material-symbols-outlined text-2xl">location_on</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Experience Digital Innovation</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Stop losing valuables. Track them easily from your phone. Make your activities visible online with our GPS tracking solutions.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Car', 'Truck', 'Bike', 'Luggage', 'Child', 'Cargo'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Map Background Decoration */}
            <div className="absolute right-0 bottom-0 w-full h-64 opacity-10 pointer-events-none">
               <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M0,100 L20,80 L40,85 L60,40 L100,20" fill="none" stroke="red" strokeWidth="2" />
                 <circle cx="60" cy="40" r="3" fill="red" />
               </svg>
            </div>
            <div className="relative z-10">
               <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-colors flex items-center gap-2">
                 <span className="material-symbols-outlined">my_location</span>
                 Start Tracking
               </button>
            </div>
          </div>

          {/* 2. CORE SERVICES (Spans 1 col) */}
          <div className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center space-y-4">
            <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider">Our Solutions</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="bg-red-50 p-2 rounded-lg text-red-600"><span className="material-symbols-outlined">directions_car</span></div>
                <span className="font-bold text-sm">Car Tracking</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-red-50 p-2 rounded-lg text-red-600"><span className="material-symbols-outlined">person_pin</span></div>
                <span className="font-bold text-sm">Personal Tracking</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-red-50 p-2 rounded-lg text-red-600"><span className="material-symbols-outlined">local_shipping</span></div>
                <span className="font-bold text-sm">Fleet Management</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-red-50 p-2 rounded-lg text-red-600"><span className="material-symbols-outlined">satellite_alt</span></div>
                <span className="font-bold text-sm">GPS Solutions</span>
              </li>
            </ul>
          </div>

          {/* 3. SECURITY HIGHLIGHT (Spans 1 col) */}
          <div className="bg-slate-900 text-white rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
             <div className="absolute top-0 right-0 p-6 opacity-20">
               <span className="material-symbols-outlined text-6xl">security</span>
             </div>
             <div>
               <h3 className="text-xl font-bold mb-2">Increased Security</h3>
               <p className="text-slate-400 text-sm">If your vehicle is stolen, login to the system and track it instantly for recovery.</p>
             </div>
             <div className="mt-4">
               <div className="h-1 w-full bg-slate-700 rounded overflow-hidden">
                 <div className="h-full bg-green-500 w-3/4"></div>
               </div>
               <div className="flex justify-between text-xs text-slate-500 mt-1">
                 <span>Status</span>
                 <span className="text-green-500">Secured</span>
               </div>
             </div>
          </div>

          {/* 4. OPTIMISATION (Spans 2 cols) */}
          <div className="md:col-span-2 bg-red-600 text-white rounded-[2rem] p-8 shadow-sm relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">Route Optimisation</h3>
                <p className="text-red-100 text-sm leading-relaxed mb-4">
                  View vehicle locations in real-time. Send ideal routes to drivers to avoid delays and save time.
                </p>
                <div className="flex gap-4">
                  <div className="bg-white/20 px-3 py-1 rounded-lg text-xs font-bold">Real-time</div>
                  <div className="bg-white/20 px-3 py-1 rounded-lg text-xs font-bold">No Delays</div>
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                 <div className="flex items-center gap-3 mb-2">
                   <span className="material-symbols-outlined text-yellow-300">warning</span>
                   <span className="text-xs font-bold">Traffic Alert Avoided</span>
                 </div>
                 <div className="h-2 bg-white/20 rounded-full w-full mb-2">
                   <div className="h-full bg-white w-2/3 rounded-full"></div>
                 </div>
                 <p className="text-xs text-red-100">ETA Improved by 15 mins</p>
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* 5. FUEL COSTS (Spans 1 col) */}
          <div className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-shadow">
             <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
               <span className="material-symbols-outlined">local_gas_station</span>
             </div>
             <h3 className="font-bold text-lg mb-2">Reduced Fuel Costs</h3>
             <p className="text-sm text-slate-600 mb-3">Monitor driver behavior like harsh acceleration and idling to improve MPG.</p>
             <div className="text-xs font-bold text-green-600 flex items-center">
               <span className="material-symbols-outlined text-sm mr-1">trending_down</span>
               Save up to 20%
             </div>
          </div>

          {/* 6. DAILY REPORTS (Spans 1 col) */}
          <div className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-shadow">
             <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
               <span className="material-symbols-outlined">assessment</span>
             </div>
             <h3 className="font-bold text-lg mb-2">Daily Reports</h3>
             <p className="text-sm text-slate-600">Get a 360-degree view of travel history and statistics delivered directly to your email.</p>
          </div>

          {/* 7. SAFETY & SERVICE (Spans 2 cols) */}
          <div className="md:col-span-2 bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-6">Additional Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Feature A */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-slate-700">
                  <span className="material-symbols-outlined">health_and_safety</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Improved Safety</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Drivers take fewer risks when monitored, reducing accidents and expensive repair bills.
                  </p>
                </div>
              </div>

              {/* Feature B */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-slate-700">
                  <span className="material-symbols-outlined">support_agent</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Customer Service</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Provide accurate ETAs and dispatch the closest vehicle for prompt service.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* 8. PERSONAL TRACKING CTA (Spans 2 cols) */}
          <div className="md:col-span-2 bg-slate-50 border border-slate-100 rounded-[2rem] p-8 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Personal Tracking Solutions</h3>
              <p className="text-sm text-slate-500">Keep your LOVED ones even more secured.</p>
            </div>
            <button className="bg-white border border-slate-200 text-slate-900 px-6 py-2 rounded-full font-bold text-sm hover:bg-slate-100 transition-colors">
              Learn More
            </button>
          </div>

        </div>
        {/* END GRID */}
        
      </div>
    </div>
  );
}
