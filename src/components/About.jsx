export default function About() {


  
  return (
    <section className="md:py-20 py-5 md:px-10 px-0">

       
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Image Content */}
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <img 
              src="https://hypatechsolutions.com/wp-content/uploads/2023/04/innovative-business-technology.jpg" 
              alt="Innovative Business Technology" 
              className="md:rounded-2xl rounded-none shadow-2xl md:w-full w-[500px] md:h-auto h-[200px] object-cover"
              loading="lazy"
            />
            {/* Decorative red accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600/10 rounded-full -z-10"></div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full lg:w-1/2 space-y-6 fex items-center justify-center text-center md:text-left">
          <h4 className="text-red-600 font-bold tracking-widest uppercase">
            ABOUT US
          </h4>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            We Are Hypa Tech
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            We believe that what unites successful companies in the new normal era is an adaptive digital heart. 
            A digital service around which businesses, competitive advantage and growth are built.
          </p>
          {/* <p className="text-gray-600 leading-relaxed">
            We support you in both the day-to-day running of your business and the creation of growth. 
            We provide services for financial management, customer acquisition, brand awareness, 
            digital presence, security, business development and guidance.
          </p> */}
          <button className="flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition group">
            Discover More
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}