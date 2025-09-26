import React from 'react'

const Revelotion = () => {
  return (
    <section className='py-6 px-6 md:px-[50px]'>
        <div data-aos="fade-right" className='flex  items-center gap-3 md:gap-11 flex-col md:flex-row space-y-2 '>
            <div className='flex flex-col items-center justify-center'>
                {/* logo */}

                <img src="/Logo.png" alt="" />
            </div>
            <div className='space-y-4 mt-6 md:mt-0'>
                <p className='bg-[#333333] text-white w-max px-4 py-2 rounded-xl'>Learn, Connect, and Innovate</p>
                <h2 className='text-[20px] text-white md:text-[30px] lg:text-[40px] 2xl:text-[58px]'>Be Part of the Future Tech Revolution</h2>
                <p className='text-[#7E7E81]'>Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.</p>
            </div>
        </div>
    </section>
  )
}

export default Revelotion