import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HypaHostImg from '../media/Hypa-Host.png';
import HypaTextImg from '../media/Hypa-Text.png';
import HypaTrackImg from '../media/Hypa-Track-150x150.png';
import HypaDigitalImg from '../media/HYPA DIGITAL.png';
import HypaTechImg from '../media/Hypa-Tech-150x150.png';
import Targeting from '../media/targeting.png';

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      title: "HYPA HOST",
      desc: "Lightning-fast & reliable autoscaling hosting, Unlimited SSD webspace, bandwidth, free SSL.",
      img: HypaHostImg,
      link: "https://hypatechsolutions.com/hypa-host-3/",
      isExternal: true
    },
    {
      title: "HYPA TEXT",
      desc: "With this solution, getting your message across to your target audience has become easier than ever.",
      img: HypaTextImg,
      link: "/hypatext",
      isExternal: false
    },
    {
      title: "HYPA TRACK",
      desc: "Manage your fleet with ease and stop losing your valuables by tracking them from your phone.",
      img: HypaTrackImg,
      link: "/hypatrack",
      isExternal: false
    },
    {
      title: "TARGETIN",
      desc: "Experience WhatsApp Marketing Like Never Before. Get up to 90% Open Rate.",
      img: Targeting,
      link: "/targetin",
      isExternal: false
    },
    {
      title: "KOMPANIA",
      desc: "An Advanced Company Management System. Have A 360° View Of Your Company from a single screen.",
      img: HypaDigitalImg,
      link: "/kompania",
      isExternal: false
    },
    {
      title: "HYPA FI",
      desc: "Cloud-based lead generation enabling businesses to gather info by offering free Wi-Fi.",
      img: HypaTechImg,
      link: "/Hypafi",
      isExternal: false
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.getAttribute('data-index')));
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Changed to 0.5 so it triggers when the text is nicely in the middle
      }
    );

    const elements = document.querySelectorAll('.scroll-feature');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="relative w-full bg-slate-950">
      
      {/* 1. STICKY BACKGROUND LAYER - Uses 'sticky' not 'fixed' */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0 pointer-events-none">
        {features.map((item, index) => (
          <div 
            key={`bg-${index}`} 
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              activeIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Blurred Abstract Background Image */}
            <img 
              src={item.img} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-40 scale-110"
            />
            {/* Dark Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent"></div>
            
            {/* Crisp Featured Image on the Right */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[80%] hidden lg:flex items-center justify-center p-20">
              <img 
                src={item.img} 
                alt={item.title} 
                className="max-h-full object-contain drop-shadow-2xl animate-fade-in-down"
              />
            </div>
          </div>
        ))}
      </div>

      {/* 2. SCROLLING CONTENT LAYER */}
      {/* The -mt-[100vh] is CRITICAL. It pulls this content up over the sticky background */}
      <div className="relative z-10 -mt-[100vh]">
        {features.map((item, index) => (
          <div 
            key={`content-${index}`}
            data-index={index}
            className="scroll-feature flex min-h-screen items-center px-6 md:px-20 max-w-7xl mx-auto"
          >
            {/* Text Content Box */}
            <div className={`max-w-xl transition-all duration-700 delay-100 ${activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-10'}`}>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-red-600 rounded-full"></div>
                <h4 className="text-red-500 font-bold tracking-widest uppercase text-sm">Our Solutions</h4>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                {item.title}
              </h2>
              
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                {item.desc}
              </p>
              
              {/* Conditional Link Rendering */}
              {item.isExternal ? (
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-red-500/25 group pointer-events-auto"
                >
                  Discover More
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              ) : (
                <Link 
                  to={item.link}
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-red-500/25 group pointer-events-auto"
                >
                  Discover More
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}