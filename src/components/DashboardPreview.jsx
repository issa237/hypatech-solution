import React from 'react';

export default function DashboardPreview() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 relative z-10">
      
      {/* 1. HEADER SECTION */}
      <header className="relative flex flex-col items-center justify-center text-center md:py-20 py-10 px-5">
        <h1 className=" my-6 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Build your digital ecosystem
        </h1>
        <p className=" text-lg text-slate-600 max-w-2xl mb-6">
          A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-red-500/25">
            Get Started
          </button>
          {/* <button className="bg-white/50 backdrop-blur-sm border border-slate-300 hover:bg-white text-slate-900 px-6 py-2.5 rounded-full font-medium transition-colors">
            Browse Components
          </button> */}
        </div>
      </header>

     

      {/* 3. DASHBOARD GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* CARD 1: TOTAL ANALYTICS (Span 2) */}
        <div className="col-span-1 md:col-span-2 bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-xl hover:border-red-300 transition-all group">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-sm font-medium text-slate-500">Total Analytics</h3>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-slate-900">$15,231.89</span>
                <span className="text-sm font-medium text-green-600 flex items-center">
                  <span className="material-icons text-base mr-0.5">trending_up</span>
                  +20.1%
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">from last month</p>
            </div>
          </div>
          <div className="h-32 w-full mt-4 relative">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 100">
              <defs>
                <linearGradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#DC2626', stopOpacity: 0.3 }}></stop>
                  <stop offset="100%" style={{ stopColor: '#DC2626', stopOpacity: 0 }}></stop>
                </linearGradient>
              </defs>
              <path d="M0,80 C50,80 50,70 100,70 C150,70 150,85 200,85 C250,85 250,60 300,50 C350,40 350,10 400,0 V100 H0 Z" fill="url(#gradient)"></path>
              <path d="M0,80 C50,80 50,70 100,70 C150,70 150,85 200,85 C250,85 250,60 300,50 C350,40 350,10 400,0" fill="none" stroke="#DC2626" strokeLinecap="round" strokeWidth="3"></path>
              {[
                { cx: 100, cy: 70 }, { cx: 200, cy: 85 }, { cx: 300, cy: 50 }, { cx: 400, cy: 0 }
              ].map((dot, i) => (
                <circle key={i} className="fill-white stroke-red-600" cx={dot.cx} cy={dot.cy} r="4" strokeWidth="2"></circle>
              ))}
            </svg>
          </div>
        </div>

        {/* CARD 2: GROWTH (Span 2) */}
        <div className="col-span-1 md:col-span-2 bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-xl hover:border-red-300 transition-all">
          <div className="mb-6">
            <h3 className="text-sm font-medium text-slate-500">Growth</h3>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-900">+2,350</span>
              <span className="text-sm font-medium text-green-600 flex items-center">
                +180.1%
              </span>
            </div>
          </div>
          <div className="h-32 flex items-end justify-between gap-2 md:gap-4 px-2">
            {[40, 70, 50, 90, 60, 80, 45].map((h, i) => (
              <div key={i} className="w-full bg-slate-200 rounded-t-md hover:bg-red-500 transition-all duration-300" style={{ height: `${h}%` }}></div>
            ))}
            <div className="w-full bg-white rounded-t-md h-full shadow-[0_0_15px_rgba(255,255,255,0.5)] border border-slate-100"></div>
          </div>
        </div>

        {/* CARD 3: TEAM MEMBERS (Span 1) */}
        <div className="col-span-1 bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-xl hover:border-red-300 transition-all flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-medium text-slate-500 mb-1">Team Members</h3>
            <p className="text-xs text-slate-400 mb-6">Invite your team members to collaborate.</p>
            <div className="space-y-4">
              {[
                { name: "Sofia Davis", role: "Owner", email: "m@example.com", img: "https://i.pravatar.cc/150?u=1" },
                { name: "Jackson Lee", role: "Member", email: "p@example.com", img: "https://i.pravatar.cc/150?u=2" },
                { name: "Isabella Nguyen", role: "Member", email: "i@example.com", img: "https://i.pravatar.cc/150?u=3" }
              ].map((member, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img alt={member.name} className="w-8 h-8 rounded-full border border-slate-200" src={member.img} />
                    <div className="leading-none">
                      <p className="text-sm font-medium text-slate-900">{member.name}</p>
                      <p className="text-[10px] text-slate-500">{member.email}</p>
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 border border-slate-200 px-2 py-1 rounded cursor-pointer hover:bg-white flex items-center gap-1">
                    {member.role} <span className="material-icons text-[10px]">expand_more</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CARD 4: CHAT (Span 1) */}
        <div className="col-span-1 bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-xl hover:border-red-300 transition-all flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img alt="Sofia" className="w-8 h-8 rounded-full border border-slate-200" src="https://i.pravatar.cc/150?u=1" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">Sofia Davis</p>
                <p className="text-[10px] text-slate-500">Online</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-red-600 w-6 h-6 flex items-center justify-center rounded-full hover:bg-white transition-colors">
              <span className="material-icons text-sm">add</span>
            </button>
          </div>
          <div className="flex-1 space-y-4 text-xs">
            <div className="flex justify-start">
              <div className="bg-slate-100 text-slate-800 px-3 py-2 rounded-2xl rounded-tl-none max-w-[85%]">
                Hi, how can I help you today?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-red-600 text-white px-3 py-2 rounded-2xl rounded-tr-none max-w-[85%]">
                Hey, I'm having trouble with my account.
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-slate-100 text-slate-800 px-3 py-2 rounded-2xl rounded-tl-none max-w-[85%]">
                What seems to be the problem?
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100">
            <div className="bg-white border border-slate-200 rounded-full px-3 py-2 text-xs text-slate-400">
              Type a message...
            </div>
          </div>
        </div>

        {/* CARD 5: CALENDAR (Span 1) - NEW */}
        <div className="col-span-1 bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-xl hover:border-red-300 transition-all">
          <div className="flex items-center justify-between mb-4">
            <button className="p-1 hover:bg-white rounded-full text-slate-500"><span className="material-icons text-sm">chevron_left</span></button>
            <h3 className="text-sm font-medium text-slate-900">June 2023</h3>
            <button className="p-1 hover:bg-white rounded-full text-slate-500"><span className="material-icons text-sm">chevron_right</span></button>
          </div>
          <div className="grid grid-cols-7 text-center text-[10px] text-slate-400 mb-2">
            <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
          </div>
          <div className="grid grid-cols-7 text-center text-xs gap-y-3 gap-x-1">
            {[28, 29, 30, 31].map(d => <div key={d} className="text-slate-400">{d}</div>)}
            {[1, 2, 3, 4].map(d => <div key={d} className="text-slate-900">{d}</div>)}
            <div className="bg-red-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mx-auto shadow-sm">5</div>
            {[6, 7, 8, 9, 10].map(d => <div key={d} className="text-slate-900">{d}</div>)}
            <div className="bg-slate-200 rounded-full text-slate-500">11</div>
            <div className="bg-slate-200 rounded-full text-slate-500">12</div>
            <div className="bg-white border border-red-200 text-red-600 font-bold rounded-full w-6 h-6 flex items-center justify-center mx-auto shadow-sm">13</div>
            {[14, 15, 16, 17].map(d => <div key={d} className="text-slate-900">{d}</div>)}
          </div>
        </div>

        {/* CARD 6: MOVE GOAL (Span 1) - NEW */}
        <div className="col-span-1 bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-xl hover:border-red-300 transition-all flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Move Goal</h3>
            <p className="text-xs text-slate-500 mt-1">Set your daily activity goal.</p>
          </div>
          <div className="flex items-center justify-between my-6">
            <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white text-slate-500 transition-colors">
              <span className="material-icons text-sm">remove</span>
            </button>
            <div className="text-center">
              <span className="text-4xl font-bold text-slate-900 block">350</span>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Calories/Day</span>
            </div>
            <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white text-slate-500 transition-colors">
              <span className="material-icons text-sm">add</span>
            </button>
          </div>
          <div className="h-10 flex items-end justify-between gap-1 mb-4 px-2">
            {[40, 60, 30, 80, 50, 100, 70, 40].map((h, i) => (
              <div 
                key={i} 
                className={`w-2 rounded-sm ${h === 100 ? 'bg-red-600 shadow-md' : 'bg-slate-300'}`} 
                style={{ height: `${h}%` }}
              ></div>
            ))}
          </div>
          <button className="w-full bg-slate-900 text-white py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
            Set Goal
          </button>
        </div>

        {/* CARD 7: EXERCISE MINUTES (Span 2) - NEW */}
        <div className="col-span-1 md:col-span-2 bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-xl hover:border-red-300 transition-colors relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-sm font-bold text-slate-900">Exercise Minutes</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">Your exercise minutes are ahead of where you normally are.</p>
          </div>
          <div className="h-32 w-full absolute bottom-0 left-0 right-0">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 100">
              <defs>
                <linearGradient id="exercise-gradient" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.5 }}></stop>
                  <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0 }}></stop>
                </linearGradient>
              </defs>
              <path className="fill-white/20" d="M0,100 L0,80 C50,80 100,20 200,20 C300,20 350,90 400,90 L400,100 Z"></path>
              <path className="stroke-white/50 fill-none" d="M0,100 L0,80 C50,80 100,20 200,20 C300,20 350,90 400,90 L400,100" strokeWidth="1.5"></path>
              <path className="stroke-red-600" d="M150,100 Q200,-20 250,100" fill="none" strokeWidth="2"></path>
              <circle className="fill-red-600" cx="200" cy="40" r="3"></circle>
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
}