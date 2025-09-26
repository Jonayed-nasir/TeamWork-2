import React from 'react'

function ResourcesPageHeroSection() {
    const CountSection = [
        {
            count: "300",
            text: "Resources available",
        },
         {
            count: "12k",
            text: "Total Downloads",
        },
         {
            count: "10k",
            text: "Active Users",
        },
         {
            count: "100",
            text: "Countries Accesses Our Content ",
        },
    ]
  return (
    <>
        <section className='py-6 md:py-8'>
            <div className='max-w-[90%]  mx-auto hidden sm:block'>
                <h1 className='text-white font-medium md:text-[55px] lg:text-[80px]'>Unlock a World of</h1>
                <div className='flex items-center gap-10'>
                    <h1 className='text-white font-medium md:text-[55px] lg:text-[80px]'>Knowledge</h1>
                    <p className='text-[#98989A]/60'>Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. <span className='md:hidden lg:inline'> Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation.</span></p>
                </div>
            </div>
            <div className='max-w-[90%] mx-auto sm:invisible'>
                <h1 className='text-white font-medium text-[28px] mb-4'>Unlock a World of <br /> Knowledge</h1>
                    <p className='text-[#98989A]/60 text-[14px]'>Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence.</p>
            </div>
        </section>
        <section className='sm:-mt-14'>
                <div className='grid grid-cols-2 lg:grid-cols-4 text-center'>
                  {CountSection.map((item, index)=> (
                    <div key={index} className='flex-col p-10 border-1 border-[#262626]/50'>
                        <h2 className='text-white font-semibold text-[24px] md:text-[40px] lg:text-[60px]'>{item.count}<span className='text-[#FFD11A] font-semibold'>+</span></h2>
                        <p className='text-[#98989A]/60 text-[14px] md:text-[16px] lg:text-[18px]'>{item.text}</p>
                    </div>
                  ))}
                </div>
        </section>
    </>
  )
}

export default ResourcesPageHeroSection