import Navbar from "./components/Navbar";
import Features from "./components/Features";
import About from "./components/About";
import EmailService from "./components/EmailService";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import Contact from "./components/ContactTemp.jsx"; // 1. Import the Contact page
import AboutPage from "./components/AboutPage";
import { Routes, Route } from "react-router-dom";
import DashboardPreview from "./components/DashboardPreview.jsx";
import HypaText from "./components/HypaText";
import HypaTrack from "./components/HypaTrack";
import HypaFi from "./components/HypaFi";
import Targetin from "./components/targetin.jsx";
import Kompania from "./components/Kompania";

function App() {

  // Spheres configuration
  const spheres = [
    { top: '10%', left: '5%', size: 'w-64 h-64', opacity: 'opacity-30' },
    { top: '60%', left: '80%', size: 'w-96 h-96', opacity: 'opacity-40' },
    { top: '40%', left: '45%', size: 'w-48 h-48', opacity: 'opacity-50' },
  ];

  // 2. Define the Home Page Component
  // We move the Hero and Spheres inside here so they don't show on the Contact page
  const HomePage = () => (
      <div>

      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center text-center md:py-32 py-10 px-5 h-screen">
        
        {/* --- NEW: The "White Images" Background Layer --- */}
        {/* Positioned absolutely so it doesn't move your text. Hidden on mobile. */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden">
          
          {/* Container pushing images to the right (Location as on image) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full flex items-center justify-center perspective-1000">
            <div className="relative w-full max-w-md transform rotate-[-6deg] translate-x-12 opacity-90">
              
              {/* Card 1: Main White Card (Behind) */}
              <div className="absolute top-0 right-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 w-80 h-96 z-10 transform translate-y-8">
                 {/* Fake UI Elements */}
                 <div className="h-4 w-24 bg-gray-100 rounded mb-6"></div>
                 <div className="space-y-4">
                    <div className="h-10 w-full bg-gray-50 rounded border border-gray-100"></div>
                    <div className="h-10 w-full bg-gray-50 rounded border border-gray-100"></div>
                    <div className="h-32 w-full bg-gray-50 rounded border border-gray-100 mt-4"></div>
                 </div>
              </div>

              {/* Card 2: Floating Action Card (Front) */}
              <div className="absolute top-20 right-40 bg-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-50 w-64 z-20 transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-black font-bold">H</div>
                  <div>
                    <div className="h-2 w-20 bg-gray-200 rounded mb-1"></div>
                    <div className="h-2 w-10 bg-gray-100 rounded"></div>
                  </div>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded mb-2"></div>
                <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                <div className="mt-4 flex gap-2">
                  <div className="h-8 w-1/2 bg-red-600 rounded-lg"></div>
                  <div className="h-8 w-1/2 bg-gray-100 rounded-lg"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* --- END NEW LAYER --- */}


        {/* Your Existing Text Content (Wrapped in z-10 to stay on top) */}
        <div className="relative z-10">
          <h2 className="text-red-600 font-bold tracking-widest uppercase mb-4 animate-fade-in">
            You Think It - We Create It
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 max-w-4xl leading-tight">
            We will take your enterprise to another digital level
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            We design and build customer-driven digital solutions that create measurable value for businesses.
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <button className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition">
              Get Started
            </button>
            <button className="border-2 border-gray-300 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white transition">
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* Rest of Home Page Sections */}
      <About />
      <DashboardPreview/>
      <Features />
      
      <EmailService />
      <ContactCTA />
    </div>
  );

  return (
   <div className="dotted-bg relative overflow-hidden ">
      {/* Background Spheres */}
      {spheres.map((s, i) => (
        <div 
          key={i}
          className={`bg-sphere-red ${s.size} ${s.opacity}`}
          style={{ top: s.top, left: s.left }}
        />
      ))}
      {/* Navbar stays outside Routes so it appears on all pages */}
      <Navbar/>

      {/* 3. Routing Logic */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/hypatext" element={<HypaText />} />
        <Route path="/hypatrack" element={<HypaTrack />} />
        <Route path="/hypafi" element={<HypaFi />} />
        <Route path="/targetin" element={<Targetin />} />
        <Route path="/kompania" element={<Kompania />} />
      </Routes>

      {/* Footer stays outside Routes so it appears on all pages */}
      <Footer />
    </div>
  );
}

export default App;