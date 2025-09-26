import React from "react";

function ResourcePageLastSection() {
  const LastCards = [
    {
      heading: "Resource Access",
      img: "/data/images/resources/Button.png",
      text: "Visitors can access a wide range of resources, including ebooks, whitepapers, reports.",
    },
    {
      heading: "Community Forum",
      img: "/data/images/resources/Button.png",
      text: "Join our active community forum to discuss industry trends and collaborate with peers.",
    },
    {
      heading: "Tech Events",
      img: "/data/images/resources/Button.png",
      text: "Stay updated on upcoming tech events, webinars and conferences to enhance your knowledge.",
    },
  ];
  return (
    <div>
      <section className="max-w-[90%] mx-auto py-4 md:py-16 flex flex-col gap-4 lg:gap-16">
        <div className="flex gap-4 lg:gap-16">
          <div className="">
            <img src="/data/images/resources/lastlogo.png" alt="logo" />
          </div>
          <div>
            <p className="text-white font-medium text-[16px] tracking-tight bg-[#333333]/20 p-2 inline rounded">
              Learn, Connect, and Innovate
            </p>
            <h2 className="text-white font-medium text-[28px] md:text-[44px] lg:text-[58px] tracking-tight mt-3">
              Be Part of the Future Tech Revolution
            </h2>
            <p className="text-[#98989A]/60">
              Immerse yourself in the world of future technology. Explore our
              comprehensive resources, connect with fellow tech enthusiasts, and
              drive innovation in the industry. Join a dynamic community of
              forward-thinkers.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-1 border-[#262626]/50 p-4 rounded-2xl bg-[#141414]/8">
          {LastCards.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 border-1 border-[#262626]/50 p-4 rounded-2xl">
              <div className="flex items-center justify-between">
                <h5 className="text-white font-semibold text-[14px] md:text-[16px] lg:text-[18px]">{item.heading}</h5>
                <img src={item.img} alt="" />
              </div>
              <p className="text-[#98989A]/60">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ResourcePageLastSection;
