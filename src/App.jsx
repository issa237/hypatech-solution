import Navbar from "./components/Navbar";
import Features from "./components/Features";
import About from "./components/About";
import EmailService from "./components/EmailService";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
function App() {

    const spheres = [
    { top: '10%', left: '5%', size: 'w-64 h-64', opacity: 'opacity-30' },
    { top: '60%', left: '80%', size: 'w-96 h-96', opacity: 'opacity-40' },
    { top: '40%', left: '45%', size: 'w-48 h-48', opacity: 'opacity-50' },
  ];

  return (
    <div className="min-h-screen dotted-bg relative overflow-hidden">
        {spheres.map((s, i) => (
        <div 
          key={i}
          className={`bg-sphere-red ${s.size} ${s.opacity}`}
          style={{ top: s.top, left: s.left }}
        />
      ))}
      <Navbar />
      
      

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-32 px-5 ">
      <div >
        <h2 className="text-red-600 font-bold tracking-widest uppercase mb-4 animate-fade-in">
          You Think It - We Create It
        </h2>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 max-w-4xl leading-tight">
          We will take your enterprise to another digital level
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl">
          We design and build customer-driven digital solutions that create measurable value for businesses.
        </p>
        <div className="mt-10 flex gap-4">
          <button className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition">
            Get Started
          </button>
          <button className="border-2 border-gray-300 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white transition">
            Learn More
          </button>
        </div>
        </div>
      </header>
      <About />
      <Features />
      <EmailService />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default App;