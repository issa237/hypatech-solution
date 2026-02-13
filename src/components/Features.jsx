export default function Features() {
  const features = [
   {
    title: "HYPA HOST",
    desc: "Lightning-fast & reliable autoscaling hosting, Unlimited SSD webspace, bandwidth, free SSL.",
    img: "https://hypatechsolutions.com/wp-content/uploads/2023/10/Hypa-Host-e1698895243520.png",
    link: "https://hypatechsolutions.com/hypa-host-3/"
  },
  {
    title: "HYPA TEXT",
    desc: "With this solution, getting your message across to your target audience has become easier than ever.",
    img: "https://hypatechsolutions.com/wp-content/uploads/2023/10/Hypa-Text.png",
    link: "https://hypatechsolutions.com/hypa-text/"
  },
  {
    title: "HYPA TRACK",
    desc: "Manage your fleet with ease and stop losing your valuables by tracking them from your phone.",
    img: "https://hypatechsolutions.com/wp-content/uploads/2023/10/Hypa-Track.png",
    link: "https://hypatechsolutions.com/hypa-track/"
  },
  {
    title: "HYPA TECH",
    desc: "Cloud-based lead generation enabling businesses to gather info by offering free Wi-Fi.",
    img: "https://hypatechsolutions.com/wp-content/uploads/2023/10/Hypa-Tech.png",
    link: "https://hypatechsolutions.com/hypa-tech/"
  },
    {
    title: "HYPA HOST",
    desc: "Lightning-fast & reliable autoscaling hosting, Unlimited SSD webspace, bandwidth, free SSL.",
    img: "https://hypatechsolutions.com/wp-content/uploads/2023/10/Hypa-Host-e1698895243520.png",
    link: "https://hypatechsolutions.com/hypa-host-3/"
  },
  {
    title: "HYPA TEXT",
    desc: "With this solution, getting your message across to your target audience has become easier than ever.",
    img: "https://hypatechsolutions.com/wp-content/uploads/2023/10/Hypa-Text.png",
    link: "https://hypatechsolutions.com/hypa-text/"
  },
  {
    title: "HYPA TRACK",
    desc: "Manage your fleet with ease and stop losing your valuables by tracking them from your phone.",
    img: "https://hypatechsolutions.com/wp-content/uploads/2023/10/Hypa-Track.png",
    link: "https://hypatechsolutions.com/hypa-track/"
  },
  {
    title: "HYPA TECH",
    desc: "Cloud-based lead generation enabling businesses to gather info by offering free Wi-Fi.",
    img: "https://hypatechsolutions.com/wp-content/uploads/2023/10/Hypa-Tech.png",
    link: "https://hypatechsolutions.com/hypa-tech/"
  }
  ];

 


  return (
    <section className="md:py-20 py-10 ">

       


      <div className="max-w-7xl mx-auto md:px-10 px-5 text-center">
        <h4 className="text-redS-600 font-bold tracking-widest uppercase mb-2">Our Services</h4>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">The solutions we provide</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 md:gap-8 gap-4">
          {features.map((item, index) => (
            <div key={index} className="md:p-8 p-3 rounded-2xl border border-gray-100 bg-white hover:bg-white shadow-xl hover:shadow-none transition-all group">
             <div className="mb-6 overflow-hidden rounded-lg md:h-24 h-18 flex items-center justify-center">
      <img 
        src={item.img} 
        alt={item.title} 
        className="md:h-full h-[180%] object-contain group-hover:scale-110 transition-transform duration-500 md:pt-0 pt-3" 
      />
    </div>
              {/* <h3 className="md:text-xl text-xs font-bold mb-4">{item.title}</h3> */}
              {/* <p className="text-gray-600 md:text-sm text-[8px] leading-relaxed mb-6 font-bold">{item.desc}</p> */}
              <a href={item.link} className="text-redS-600 md:text-xl text-xs font-bold hover:underline">Click hier &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}