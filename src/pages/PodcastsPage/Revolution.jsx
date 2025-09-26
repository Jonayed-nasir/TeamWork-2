import React from 'react'

const Revolution = () => {
  return (
    <div className='flex md:flex-row flex-col bg-[#141414] w-full '>
      <div className='lg:w-[95%] md:w-[50%] w-[95%] px-3 md:px-5 py-8 border-gray-700 border-t-1 border-r-1 border-b-1 rounded '>
        <img className='lg:px-20 md:px-8 py-3' src="/public/data/Image/Logo1.png" data-aos="fade-down-right" alt="" />
        <div className='flex lg:gap-3 md:gap-3  px-5 py-4'>
          <h2 className='text-white lg:text-3xl md:text-2xl text-2xl lg:px-18 md:px-6 sm:px-5 font-semibold'>AI Conversations</h2>
          <p className='py-2' data-aos="fade-up-left">⭐⭐⭐⭐⭐</p>
        </div>
        <div className='bg-gray-800 py-3 rounded lg:w-[80%] md:w-[90%] lg:px-10 md:px-4 '>
          <span className='text-[#98989A] text-sm lg:px-12 md:px-7 px-6 '>Host</span>      
          <div className='flex gap-5 px-6 '>
            <h3 className='text-white text-sm mt-5 lg:px-6 md:px-1 '>Dr. Sarah Mitchell</h3>
            <button className='text-[#98989A] bg-[#262626] px-6 py-3 rounded-2xl  '>Listen Podcast <span className='text-[#FFD11A]  '>↗</span></button>
          </div>
        </div>
      </div>

      {/* right side */}

      <div className='bg-[#141414] lg:w-[95%] md:w-[50%] w-[95%] px-3 md:px-5 py-8 border-gray-700 border-t-1 border-b-1 rounded '>
        <div className='px-3 py-3 ' data-aos="fade-left">
          <img className='' src="/public/data/Image/Revolution.png" alt="" />
        </div>
        <div>
          <h2 className='text-white font-semibold px-5 py-2'>Delves into the transformative impact of AI</h2>
          <p className='text-[#98989A] px-5 text-sm'>Join Dr. Sarah Mitchell as she delves into the transformative impact of AI on industries, featuring expert interviews and real-world case studies. Explore the possibilities of AI in healthcare, finance, and more.</p>
        </div>

        <div className='grid lg"grid-cols-3 md:grid-cols-3 grid-cols-1 px-4 py-5 gap-3'>
          <div className='lg:px-7 md:px-3 px-5 py-3 bg-gray-900 rounded-2xl'>
            <span className='text-[#98989A] text-sm'>Total Episodes</span>
            <h2 className='text-white text-sm'>50</h2>
          </div>

          <div className='lg:px-7 md:px-3 px-5 py-2 bg-gray-900 rounded-2xl'>
            <span className='text-[#98989A] text-sm'>Average Episode Length</span>
            <h2 className='text-white text-sm'>30 min</h2>
          </div>

          <div className='lg:px-7 md:px-3 px-5 py-2 bg-gray-900 rounded-2xl'>
            <span className='text-[#98989A] text-sm'>Release Frequency</span>
            <h2 className='text-white text-sm'>Weekly</h2>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Revolution
