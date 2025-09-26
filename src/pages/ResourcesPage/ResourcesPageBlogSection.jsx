import React from "react";

function ResourcesPageBlogSection() {
  return (
    <div className="border-y-1 border-[#262626]/50">
      <section className="flex flex-col md:flex-row items-center justify-between py-4 md:py-16 max-w-[90%] mx-auto gap-4 lg:gap-16">
        <div className="w-full md:w-[45%] mb-6 p-4">
          <img
            src="/data/images/resources/quantumcomputingicon.png"
            alt="Quantum Computing Icon"
          />
          <h3 className="text-white text-[21px] md:text-[30px] lg:text-[40px] -tracking-[3%]">
            Quantum Computing Whitepaper
          </h3>
          <p className="text-[#98989A]/60 text-[14px] md:text-[16px] lg:text-[18px]">
            Provides technical specifications and requirements for implementing
            quantum computing systems.
          </p>
        </div>
         <div className="w-px bg-[#262626]/50 mx-6 self-stretch"></div>
        <div className="w-full mb-6 px-4">
          <img
            src="/data/images/resources/quantumcomputingimage.png" className="w-fit"
            alt="Quantum Computing Image"
          />
          <div className="flex flex-col xl:flex-row gap-3 py-3 justify-between xl:items-center">
            <div className="xl:w-[70%]">
              <h4 className="text-white text-[18px] md:text-[20px] lg:text-[26px] tracking-tight mb-3">
                Quantum Computing Whitepaper
              </h4>
              <p className="text-[#98989A]/60 text-14px md:text-[16px] lg:text-[18px]">
                An in-depth whitepaper exploring the principles, applications,
                and potential impact of quantum computing.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-[#262626] rounded-[8px] border-1 p-2 h-fit cursor-pointer w-full md:w-fit justify-center">
              <span className="text-[#98989A]/60">Download PDF Now</span>
              <img
                src="/data/images/resources/arrowicon.png"
                alt="Download Icon"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2"> 
            <div className="bg-[#1A1A1A] p-2 lg:p-4 rounded-[13px]">
              <p className="text-[#98989A]/60">Publication Date</p>
              <h5 className="text-white font-medium">July 2023</h5>
            </div>
            <div className="bg-[#1A1A1A] p-2 lg:p-4 rounded-[13px]">
              <p className="text-[#98989A]/60">Category</p>
              <h5 className="text-white font-medium">Quantum Computing</h5>
            </div>
            <div className="bg-[#1A1A1A] p-2 lg:p-4 rounded-[13px]">
              <p className="text-[#98989A]/60">Author</p>
              <h5 className="text-white font-medium">Dr. Quantum</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-between py-4 md:py-16 max-w-[90%] mx-auto gap-4 lg:gap-16">
        <div className="w-full md:w-[45%] mb-6 p-4">
          <img
            src="/data/images/resources/spaceexplorationicon.png"
            alt="Space Exploration Icon"
          />
          <h3 className="text-white text-[21px] md:text-[30px] lg:text-[40px] -tracking-[3%]">
            Space Exploration Whitepaper
          </h3>
          <p className="text-[#98989A]/60 text-[14px] md:text-[16px] lg:text-[18px]">
            Explores Mars colonization, asteroid resource potential, and space tourism.
          </p>
        </div>
         <div className="w-px bg-[#262626]/50 mx-6 self-stretch"></div>
        <div className="w-full mb-6 px-4">
          <img
            src="/data/images/resources/SpaceExplorationImage.png" className="w-fit"
            alt="Space Exploration Image"
          />
          <div className="flex flex-col xl:flex-row gap-3 py-3 justify-between xl:items-center">
            <div className="xl:w-[70%]">
              <h4 className="text-white text-[18px] md:text-[20px] lg:text-[26px] tracking-tight mb-3">
                Space Exploration Whitepaper
              </h4>
              <p className="text-[#98989A]/60 text-14px md:text-[16px] lg:text-[18px]">
                An in-depth whitepaper covering the latest advancements in space exploration, including Mars missions and asteroid mining.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-[#262626] rounded-[8px] border-1 p-2 h-fit cursor-pointer w-full md:w-fit justify-center">
              <span className="text-[#98989A]/60">Download PDF Now</span>
              <img
                src="/data/images/resources/arrowicon.png"
                alt="Download Icon"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2"> 
            <div className="bg-[#1A1A1A] p-2 lg:p-4 rounded-[13px]">
              <p className="text-[#98989A]/60">Publication Date</p>
              <h5 className="text-white font-medium">September 2023</h5>
            </div>
            <div className="bg-[#1A1A1A] p-2 lg:p-4 rounded-[13px]">
              <p className="text-[#98989A]/60">Category</p>
              <h5 className="text-white font-medium">Space Exploration</h5>
            </div>
            <div className="bg-[#1A1A1A] p-2 lg:p-4 rounded-[13px]">
              <p className="text-[#98989A]/60">Author</p>
              <h5 className="text-white font-medium">FutureTech Space Division</h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResourcesPageBlogSection;
