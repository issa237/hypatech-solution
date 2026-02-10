export default function ContactCTA() {
  return (
    <section className="py-20 px-10 bg-red-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-3/5 space-y-6">
          <h4 className="font-bold tracking-widest uppercase opacity-90 animate-pulse">
            Ready For Awesome Project With Us?
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Let's Talk About Your Project.
          </h2>
          <p className="text-red-100 text-lg max-w-xl">
            Hypa Tech is helping companies monitor, track and take action on projections 
            and growth to reduce losses and increase productivity.
          </p>
          <a 
            href="https://hypatechsolutions.com/contact/" 
            className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg"
          >
            Contact us
            <span>→</span>
          </a>
        </div>

        {/* Right Side: Visual Content */}
        <div className="w-full lg:w-2/5">
          <div className="relative">
            <img 
              src="https://hypatechsolutions.com/wp-content/uploads/2023/11/build-web-site.jpg" 
              alt="Build Web Site" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-white/20"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}