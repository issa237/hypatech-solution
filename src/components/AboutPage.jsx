import React from 'react';

export default function AboutPage() {
  return (
    <div className="font-sans text-slate-600  relative overflow-hidden">
      
      {/* Background Grid & Orbs */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}>
      </div>
      
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="floating-orb w-96 h-96 -top-20 -left-20 bg-red-500/20"></div>
        <div className="floating-orb w-[30rem] h-[30rem] bottom-0 right-0 bg-red-500/10 translate-x-1/3 translate-y-1/3"></div>
        <div className="floating-orb w-64 h-64 top-1/2 left-1/4 bg-red-400/10"></div>
      </div>

      <main className="relative z-10 container mx-auto px-6 py-20 space-y-32">
        
        {/* Header Section */}
        <section className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-red-600"></span>
            Since 2018
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
            Pioneering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Digital Future</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We don't just build software; we architect ecosystems that allow businesses to scale efficiently through innovation and expertise.
          </p>
        </section>

        {/* Who We Are Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-red-500 to-orange-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <img 
              alt="Team collaborating" 
              className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px] border border-slate-200" 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Who We Are</h2>
              <div className="w-24 h-1.5 bg-red-600 rounded-full mb-6"></div>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                HypaTech Solutions has established itself as a leading technology solutions provider. Born from a collective of visionary developers and strategists, we have grown into a powerhouse of digital innovation.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
              <div>
                <span className="block text-4xl font-extrabold text-red-600 mb-1">6+</span>
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Years Exp.</span>
              </div>
              <div>
                <span className="block text-4xl font-extrabold text-red-600 mb-1">100+</span>
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Projects</span>
              </div>
              <div>
                <span className="block text-4xl font-extrabold text-red-600 mb-1">5</span>
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Offices</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-slate-100 hover:border-red-300 transition-all duration-300 group">
            <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-red-600 text-3xl">flag</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To empower businesses worldwide by delivering robust, scalable technology solutions that drive efficiency and growth.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-slate-100 hover:border-red-300 transition-all duration-300 group">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-orange-500 text-3xl">visibility</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To shape the digital future by setting the standard for innovation. We envision a world where technology is seamless.
            </p>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Expertise</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Delivering cutting-edge solutions across the digital spectrum.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
              <span className="material-symbols-outlined text-5xl text-red-600 mb-6">code</span>
              <h4 className="text-xl font-bold mb-3 text-slate-900">Web Development</h4>
              <p className="text-slate-600">Creating responsive, high-performance web applications tailored to your business needs.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-purple-500"></div>
              <span className="material-symbols-outlined text-5xl text-purple-500 mb-6">smartphone</span>
              <h4 class="text-xl font-bold mb-3 text-slate-900">App Development</h4>
              <p className="text-slate-600">Building native and cross-platform mobile experiences that engage users on the go.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-pink-500"></div>
              <span className="material-symbols-outlined text-5xl text-pink-500 mb-6">trending_up</span>
              <h4 class="text-xl font-bold mb-3 text-slate-900">Digital Marketing</h4>
              <p className="text-slate-600">Data-driven strategies to boost your online presence and convert visitors into loyal customers.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}