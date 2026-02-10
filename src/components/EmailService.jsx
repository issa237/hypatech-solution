export default function EmailService() {
  return (
    <section className="py-20 px-10 ">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h4 className="text-red-600 font-bold tracking-widest uppercase">
            me@mybrand.com
          </h4>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Boost your business with professional e-mail
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Create your vibe with a custom email address. Get ultra-secure email hosting with simple to use, ad-free webmail.
          </p>
          <button className="flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition group">
            Discover More
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Right Side: Image Content */}
        <div className="w-full lg:w-1/2">
          <div className="relative group">
            <img 
              src="https://hypatechsolutions.com/wp-content/uploads/2023/10/hypa-brand.jpg" 
              alt="Professional Email Branding" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}