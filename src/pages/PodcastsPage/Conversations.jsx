import React from 'react'

const Conversations = () => {
  return (
    <div className='flex md:flex-row flex-col bg-[#141414] w-full  '>
      <div className='lg:w-[95%] md:w-[50%] w-[95%] px-3 md:px-5 py-8 border-gray-700 border-t-1 border-r-1 border-b-1 rounded '>
        <img className='lg:px-20 md:px-8 py-3' src="/public/data/Image/Logo2.png" data-aos="fade-down-right" alt="" />
        <div className='flex lg:gap-3 md:gap-3  px-5 py-4'>
          <h2 className='text-white lg:text-3xl md:text-2xl text-2xl lg:px-18 md:px-6 sm:px-5 font-semibold'>AI Conversations</h2>
          <p className='py-2' data-aos="fade-up-left">⭐⭐⭐⭐⭐</p>
        </div>
        <div className='bg-gray-800 py-3 rounded lg:w-[80%] md:w-[90%] lg:px-10 md:px-4 '>
          <span className='text-[#98989A] text-sm lg:px-12 md:px-7 px-6 '>Host</span>      
          <div className='flex gap-5 px-6 '>
            <h3 className='text-white text-sm mt-5 lg:px-6 md:px-1 '>Mark Anderson</h3>
            <button className='text-[#98989A] bg-gray-900 px-7 py-3 rounded-2xl  '>Listen Podcast <span className='text-[#FFD11A] '>↗</span></button>
          </div>
        </div>
      </div>

      {/* right side */}

      <div className='bg-[#141414] lg:w-[95%] md:w-[50%] w-[95%] px-3 md:px-5 py-8 border-gray-700 border-t-1 border-b-1 rounded '>
        <div className='px-3 py-3 ' data-aos="fade-left">
          <img src="/public/data/Image/Conversations.png" alt="" />
        </div>
        <div>
          <h2 className='text-white font-semibold px-5 py-2'>Engage in thought-provoking conversations with leading experts.</h2>
          <p className='text-[#98989A] px-5 text-sm'>Mark discusses the future of AI, the impact on society, and how it's shaping industries worldwide. Engage in thought-provoking conversations with leading experts.</p>
        </div>

        <div className='grid lg"grid-cols-3 md:grid-cols-3 grid-cols-1 px-4 py-5 gap-3'>
          <div className='lg:px-7 md:px-3 px-5 py-3 bg-gray-900 rounded-2xl'>
            <span className='text-[#98989A] text-sm'>Total Episodes</span>
            <h2 className='text-white text-sm'>40</h2>
          </div>

          <div className='lg:px-7 md:px-3 px-5 py-2 bg-gray-900 rounded-2xl'>
            <span className='text-[#98989A] text-sm'>Average Episode Length</span>
            <h2 className='text-white text-sm'>40min</h2>
          </div>

          <div className='lg:px-7 md:px-3 px-5 py-2 bg-gray-900 rounded-2xl'>
            <span className='text-[#98989A] text-sm'>Release Frequency</span>
            <h2 className='text-white text-sm'>Monthly</h2>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Conversations
