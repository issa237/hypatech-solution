export default function Features() {
  const features = [
    {
      title: "HYPA HOST",
      desc: "Lightning-fast & reliable autoscaling hosting, Unlimited SSD webspace, bandwidth, free SSL.",
      icon: "🌐",
      link: "https://hypatechsolutions.com/hypa-host-3/"
    },
    {
      title: "HYPA TEXT",
      desc: "Getting your message across to your target audience, wherever they are and on whatever network.",
      icon: "📱",
      link: "https://hypatechsolutions.com/hypa-text/"
    },
    {
      title: "HYPA TRACK",
      desc: "Manage your fleet with ease and stop losing your valuables by tracking them from your phone.",
      icon: "📍",
      link: "https://hypatechsolutions.com/hypa-track/"
    },
    {
      title: "HYPA TECH",
      desc: "Cloud-based lead generation enabling businesses to gather info by offering free Wi-Fi.",
      icon: "📶",
      link: "https://hypatechsolutions.com/hypa-tech/"
    },
    {
      title: "HYPAFI",
      desc: "Cloud-based lead generation enabling businesses to gather info by offering free Wi-Fi.",
      icon: "📶",
      link: "https://hypatechsolutions.com/hypa-tech/"
    },
    {
      title: "TARGETING",
      desc: "Cloud-based lead generation enabling businesses to gather info by offering free Wi-Fi.",
      icon: "📶",
      link: "https://hypatechsolutions.com/hypa-tech/"
    },
    {
      title: "KOMPANIA",
      desc: "Cloud-based lead generation enabling businesses to gather info by offering free Wi-Fi.",
      icon: "📶",
      link: "https://hypatechsolutions.com/hypa-tech/"
    },
    {
      title: "IJIMI",
      desc: "Cloud-based lead generation enabling businesses to gather info by offering free Wi-Fi.",
      icon: "📶",
      link: "https://hypatechsolutions.com/hypa-tech/"
    }
  ];

 


  return (
    <section className="py-20 ">

       


      <div className="max-w-7xl mx-auto px-10 text-center">
        <h4 className="text-redS-600 font-bold tracking-widest uppercase mb-2">Our Services</h4>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">The solutions we provide</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div key={index} className="p-8 rounded-2xl border border-gray-100 bg-white hover:bg-white shadow-xl hover:shadow-none transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.desc}</p>
              <a href={item.link} className="text-redS-600 font-bold hover:underline">Discover More &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}