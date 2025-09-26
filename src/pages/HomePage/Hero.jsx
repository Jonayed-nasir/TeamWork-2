
const Hero = () => {
  return (
    <section data-aos="fade-left" className='py-6 px-6 md:px-[50px]'>
        <div className='flex'>
           <div className='flex flex-col justify-center items-center'>
             <div className='space-y-3.5'>
                <p className='text-gray-500'>Your Journey to Tomorrow Begins Here</p>
                <h2 className=' text-3xl md:text-[40px] lg:text-[70px] font-medium '>Explore the Frontiers of Artificial Intelligence</h2>
                <p className='text-gray-500 max-w-[800px]'>Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.</p>
            </div>
           </div>
            <div className='hero -mt-5'>
                <img src="/image/home/hero-banner.png" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero