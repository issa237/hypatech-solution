import React from 'react';

export default function HypaText() {
  return (
    <div className="min-h-screen  p-4 md:p-8 font-sans text-slate-800">
      
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* HEADER / HERO SECTION */}
        <div className="relative flex flex-col items-center justify-center text-center md:py-40 py-10 px-5">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
            Hypa<span className="text-red-600">Text</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl">
            Unrivalled SMS services to reach your audience anywhere, on any network.
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-auto gap-4 md:gap-6">

          {/* 1. HERO CARD (Spans 2 cols, 2 rows) */}
          <div className="md:col-span-2 md:row-span-2 bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6 text-red-600">
                <span className="material-symbols-outlined text-2xl">send</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Send bulk SMS to all Networks</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Getting your messages across to your target audience anywhere on any network has become easier than ever before.
              </p>
            </div>
            {/* Decorative bg element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-red-50 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
            <div className="relative z-10 mt-8">
               <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-colors">
                 Start Campaign
               </button>
            </div>
          </div>

          {/* 2. CORE FEATURES (Spans 1 col) */}
          <div className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center space-y-4">
            <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider">Features</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-red-600">sms</span>
                <span className="font-semibold">SMS Service</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-red-600">graphic_eq</span>
                <span className="font-semibold">Voice Messages</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-red-600">quiz</span>
                <span className="font-semibold">Voice Quizzes</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-red-600">how_to_vote</span>
                <span className="font-semibold">SMS Voting</span>
              </li>
            </ul>
          </div>

          {/* 3. ANALYTICS (Spans 1 col) */}
          <div className="bg-slate-900 text-white rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-20">
               <span className="material-symbols-outlined text-6xl">analytics</span>
             </div>
             <h3 className="text-xl font-bold mb-2">Analyse Results</h3>
             <p className="text-slate-400 text-sm mb-6">Track delivery rates and engagement in real-time.</p>
             <div className="flex items-end gap-1 h-16">
               <div className="w-1/5 bg-red-500 rounded-t h-[40%]"></div>
               <div className="w-1/5 bg-red-500 rounded-t h-[70%]"></div>
               <div className="w-1/5 bg-red-500 rounded-t h-[50%]"></div>
               <div className="w-1/5 bg-white rounded-t h-[100%]"></div>
               <div className="w-1/5 bg-red-500 rounded-t h-[60%]"></div>
             </div>
          </div>

          {/* 4. BEAT COMPETITION (Spans 2 cols) */}
          <div className="md:col-span-2 bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-red-600">trending_up</span>
              Beat Your Competition
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-bold text-sm mb-1">Effective Comms</h4>
                <p className="text-xs text-slate-500">Communicate effectively about your services & products.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-bold text-sm mb-1">Crisis Alerts</h4>
                <p className="text-xs text-slate-500">Inform your customers instantly in case of incidents.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-bold text-sm mb-1">Guaranteed Delivery</h4>
                <p className="text-xs text-slate-500">Ensure the message reaches your target.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-bold text-sm mb-1">Low Cost</h4>
                <p className="text-xs text-slate-500">Deploy marketing campaigns at a lower cost.</p>
              </div>
            </div>
          </div>

          {/* 5. SOLUTIONS GRID (Spans 2 cols, 2 rows) */}
          <div className="md:col-span-2 md:row-span-2 bg-red-600 text-white rounded-[2rem] p-8 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Our Hypa Text Solutions</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined">cloud</span>
                  </div>
                  <h4 className="font-bold mb-1">Cloud Based</h4>
                  <p className="text-sm text-red-100">Accessible from anywhere on any device. Highly secured privacy.</p>
                </div>
                <div>
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined">api</span>
                  </div>
                  <h4 className="font-bold mb-1">API Integration</h4>
                  <p className="text-sm text-red-100">HTTP, SMPP, SMTP, Inbound and DLR APIs for your apps.</p>
                </div>
                <div>
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined">school</span>
                  </div>
                  <h4 className="font-bold mb-1">Little Training</h4>
                  <p className="text-sm text-red-100">Up and running in 2 hours. 100 Free SMS on signup.</p>
                </div>
                <div>
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined">support_agent</span>
                  </div>
                  <h4 className="font-bold mb-1">24/7 Support</h4>
                  <p className="text-sm text-red-100">Dedicated engineer and account manager available anytime.</p>
                </div>
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          </div>

          {/* 6. CAMPAIGN TYPES (Spans 1 col) */}
          <div className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg mb-4">Campaign Types</h3>
            <div className="space-y-4">
              <div className="p-3 border border-gray-100 rounded-xl">
                <h4 className="font-bold text-xs text-red-600 uppercase mb-1">SMS</h4>
                <p className="text-xs text-slate-600">Numeric & Alphanumeric. Up to 160 chars. Templates available.</p>
              </div>
              <div className="p-3 border border-gray-100 rounded-xl">
                <h4 className="font-bold text-xs text-red-600 uppercase mb-1">Voice & Polls</h4>
                <p className="text-xs text-slate-600">Up to 10 questions. 5 answers to choose. Instant feedback.</p>
              </div>
            </div>
          </div>

          {/* 7. CUSTOMER SATISFACTION (Spans 1 col) */}
          <div className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-shadow">
             <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
               <span className="material-symbols-outlined">sentiment_satisfied</span>
             </div>
             <h3 className="font-bold text-lg mb-2">Customer Loyalty</h3>
             <p className="text-sm text-slate-600 mb-4">Build loyalty through personal engagement.</p>
             <ul className="text-xs space-y-2 text-slate-500">
               <li>• Customize campaigns</li>
               <li>• Maintain relationships</li>
               <li>• Target effectively</li>
             </ul>
          </div>

          {/* 8. PRICING TABLE (Spans Full Width / 4 cols) */}
          <div className="md:col-span-4 bg-white rounded-[2rem] p-8 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Financial Offer</h3>
                <p className="text-slate-500">NB: All our offers send messages to all networks...</p>
              </div>
              <div className="mt-4 md:mt-0 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-bold">
                Cumulative SMS Service
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-xs uppercase text-slate-400 border-b border-gray-100">
                    <th className="py-3 px-4">Package</th>
                    <th className="py-3 px-4">Units</th>
                    <th className="py-3 px-4">Unit Price (XAF)</th>
                    <th className="py-3 px-4">Validity</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-slate-700">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 font-bold">HypaText 5K</td>
                    <td className="py-3 px-4">1 - 5,000</td>
                    <td className="py-3 px-4">9 XAF</td>
                    <td className="py-3 px-4 text-green-600">60 Days</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 font-bold">HypaText 10K - 40K</td>
                    <td className="py-3 px-4">10,000 - 40,000</td>
                    <td className="py-3 px-4">-</td>
                    <td className="py-3 px-4 text-green-600">90 Days</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 font-bold">HypaText 50K</td>
                    <td className="py-3 px-4">50,000</td>
                    <td className="py-3 px-4">8 XAF</td>
                    <td className="py-3 px-4 text-green-600">90 Days</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 font-bold">HypaText 100K</td>
                    <td className="py-3 px-4">100,000</td>
                    <td className="py-3 px-4">-</td>
                    <td className="py-3 px-4 text-green-600">120 Days</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 font-bold">HypaText 200K</td>
                    <td className="py-3 px-4">200,000</td>
                    <td className="py-3 px-4">7.75 XAF</td>
                    <td className="py-3 px-4 text-green-600">120 Days</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 font-bold">HypaText 300K</td>
                    <td className="py-3 px-4">300,000</td>
                    <td className="py-3 px-4">7.5 XAF</td>
                    <td className="py-3 px-4 text-green-600">120 Days</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 font-bold">HypaText 400K</td>
                    <td className="py-3 px-4">400,000</td>
                    <td className="py-3 px-4">7.25 XAF</td>
                    <td className="py-3 px-4 text-green-600">120 Days</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 font-bold">HypaText 500K</td>
                    <td className="py-3 px-4">500,000+</td>
                    <td className="py-3 px-4">7 XAF</td>
                    <td className="py-3 px-4 text-green-600">150 Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
        {/* END GRID */}
        
      </div>
    </div>
  );
}