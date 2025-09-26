import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#141414] py-10 px-10'>
        <div className='md:w-[95%] w-[90%]' >
            <h1 className='text-white font-bold text-4xl md:text-4xl lg:text-4xl xl:text-5xl px-7 py-3'> Unlock the World of Artificial Intelligence</h1>
            <div className='flex flex-col md:flex-row px-5 py-5 gap-7'>
                <h1 className='text-white font-bold text-4xl md:text-4xl lg:text-5xl xl:text-5xl'>through Podcasts</h1>
                <p className='text-[#98989A] md:px-4 lg:px-2 py-3'>Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation.</p>
            </div>
        </div>      
      
    </div>
  )
}

export default Hero
