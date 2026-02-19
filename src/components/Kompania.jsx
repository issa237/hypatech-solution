import React from 'react';

export default function Kompania() {
  return (
    <div className="min-h-screen  p-4 md:p-8 font-sans text-slate-800">
      
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* HEADER SECTION */}
        <div className="relative flex flex-col items-center justify-center text-center md:py-50 py-10 px-5">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 max-w-4xl leading-tight mb-4">
            Kompania
          </h1>
          <p className="text-xl text-red-600 max-w-2xl">
            An Advanced Company Management System. Keep working, stay mobile.
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-auto gap-4 md:gap-6">

          {/* 1. HERO CARD: 360 VIEW (Spans 2 cols, 2 rows) */}
          <div className="md:col-span-2 md:row-span-2 bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-6 text-[#06a5db]">
                <span className="material-symbols-outlined text-2xl">hub</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Have A 360° View Of Your Company</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                From a single dashboard, access all your vital business metrics. Manage Sales, Stock, Suppliers, Clients, and Employees in one unified system designed to give you total control.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                   <span className="material-symbols-outlined text-[#06a5db]">inventory_2</span>
                   <span className="font-bold text-sm text-slate-700">Stock & Inventory</span>
                </div>
                <div className="flex items-center gap-2">
                   <span className="material-symbols-outlined text-[#06a5db]">point_of_sale</span>
                   <span className="font-bold text-sm text-slate-700">POS System</span>
                </div>
                <div className="flex items-center gap-2">
                   <span className="material-symbols-outlined text-[#06a5db]">account_balance</span>
                   <span className="font-bold text-sm text-slate-700">Accounting</span>
                </div>
                <div className="flex items-center gap-2">
                   <span className="material-symbols-outlined text-[#06a5db]">badge</span>
                   <span className="font-bold text-sm text-slate-700">HR & Payroll</span>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 mt-8">
               <button className="bg-[#06a5db] text-white px-6 py-3 rounded-xl font-bold hover:bg-cyan-700 transition-colors flex items-center gap-2">
                 Request Demo
                 <span className="material-symbols-outlined text-sm">arrow_forward</span>
               </button>
            </div>
          </div>

          {/* 2. POS SYSTEM (Spans 2 cols) */}
          <div className="md:col-span-2 bg-[#0f1e23] text-white rounded-[2rem] p-8 shadow-sm flex flex-col justify-center relative overflow-hidden">
             <div className="relative z-10">
               <div className="flex items-center gap-3 mb-4">
                 <span className="material-symbols-outlined text-cyan-400 text-3xl">shopping_cart_checkout</span>
                 <h3 className="font-bold text-2xl">Advanced POS</h3>
               </div>
               <p className="text-slate-400 text-sm mb-6 max-w-lg">
                 Whether for Retail or Hospitality, handle transactions with ease. Includes barcode scanning, touch-screen interface, cash drawer management, and multi-terminal support.
               </p>
               <div className="flex flex-wrap gap-2">
                 <span className="text-xs bg-slate-800 px-3 py-1 rounded-full border border-slate-700">Multi-Payment</span>
                 <span className="text-xs bg-slate-800 px-3 py-1 rounded-full border border-slate-700">Restaurant Mode</span>
                 <span className="text-xs bg-slate-800 px-3 py-1 rounded-full border border-slate-700">Offline Capable</span>
                 <span className="text-xs bg-slate-800 px-3 py-1 rounded-full border border-slate-700">Secure Logon</span>
               </div>
             </div>
             {/* Abstract Shapes */}
             <div className="absolute right-[-20px] bottom-[-40px] opacity-10">
               <span className="material-symbols-outlined text-9xl">receipt_long</span>
             </div>
          </div>

          {/* 3. INVENTORY (Spans 1 col) */}
          <div className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-shadow">
             <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
               <span className="material-symbols-outlined">warehouse</span>
             </div>
             <h3 className="font-bold text-lg mb-2">Inventory</h3>
             <p className="text-sm text-slate-600 mb-4">
               Track stock from supplier to client. Manage multi-warehouse setups, loss prevention, and stock levels in real-time.
             </p>
             <ul className="text-xs space-y-1 text-slate-500">
               <li>• Real-time Lookup</li>
               <li>• Stock Transfers</li>
               <li>• Min/Max Levels</li>
             </ul>
          </div>

          {/* 4. ACCOUNTING (Spans 1 col) */}
          <div className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-shadow">
             <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
               <span className="material-symbols-outlined">calculate</span>
             </div>
             <h3 className="font-bold text-lg mb-2">Accounting</h3>
             <p className="text-sm text-slate-600 mb-4">
               Put your enterprise on auto-pilot. Manage income, expenses, invoices, and generate balance sheets automatically.
             </p>
             <ul className="text-xs space-y-1 text-slate-500">
               <li>• General Ledger</li>
               <li>• Profit & Loss</li>
               <li>• Tax Management</li>
             </ul>
          </div>

          {/* 5. MULTI-SITE CONNECTIVITY (Spans 2 cols) */}
          <div className="md:col-span-2 bg-[#06a5db] text-white rounded-[2rem] p-8 shadow-sm relative overflow-hidden flex items-center">
            <div className="relative z-10 w-full">
              <h3 className="text-2xl font-bold mb-2">Enterprise Connectivity</h3>
              <p className="text-cyan-50 text-sm leading-relaxed mb-6 max-w-md">
                Connect your Head Office to all Branch Offices via secure tunnels. Manage your business from wherever, whenever, with centralized data control.
              </p>
              
              <div className="flex justify-between items-center w-full max-w-md bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                 <div className="text-center">
                   <span className="material-symbols-outlined block mb-1">domain</span>
                   <span className="text-xs font-bold">Head Office</span>
                 </div>
                 <div className="h-0.5 flex-1 bg-white/30 mx-4 relative">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#06a5db] px-2 text-[10px]">Secure Tunnel</div>
                 </div>
                 <div className="text-center">
                   <span className="material-symbols-outlined block mb-1">store</span>
                   <span className="text-xs font-bold">Branches</span>
                 </div>
              </div>
            </div>
          </div>

          {/* 6. HR & PAYROLL (Spans 2 cols) */}
          <div className="md:col-span-2 bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6 items-center">
               <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-3xl">badge</span>
               </div>
               <div>
                 <h3 className="text-xl font-bold mb-2">Employees & Payroll</h3>
                 <p className="text-slate-600 text-sm mb-4">
                   Analyse individual performance and control access levels. Automatically generate payrolls and track check-ins/check-outs.
                 </p>
                 <div className="flex gap-3">
                   <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded">Biometric Login</span>
                   <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded">Performance KPIs</span>
                 </div>
               </div>
            </div>
          </div>

          {/* 7. CUSTOMERS (Spans 1 col) */}
          <div className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-shadow">
             <div className="w-10 h-10 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mb-4">
               <span className="material-symbols-outlined">face</span>
             </div>
             <h3 className="font-bold text-lg mb-2">Customers</h3>
             <p className="text-sm text-slate-600 mb-2">
               Keep track of clientele, manage store cards, and set credit limits.
             </p>
          </div>

          {/* 8. REPORTING (Spans 1 col) */}
          <div className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-shadow">
             <div className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-4">
               <span className="material-symbols-outlined">pie_chart</span>
             </div>
             <h3 className="font-bold text-lg mb-2">Deep Reporting</h3>
             <p className="text-sm text-slate-600 mb-2">
               Get drill-down reports on Sales, Inventory, and Financial performance with a few clicks.
             </p>
          </div>

        </div>
        {/* END GRID */}
        
      </div>
    </div>
  );
}