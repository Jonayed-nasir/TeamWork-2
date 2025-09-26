import React, { useEffect, useState } from 'react'

const FeatureCard = () => {

    const [data, setdata] = useState([])
    useEffect(() => {
        fetch('/data/feauture.json').then((res) => res.json()).then((data) => setdata(data))

    }, [])
    return (
        <section className='py-6 px-6 md:px-[50px]'>
            <div >
                {data.map((item, index) => {
                    return <div data-aos="fade-down" key={index} className='mt-4 md:mt-20'>
                        <div className='flex md:flex-row flex-col justify-between gap-6 items-center'>
                            <div className=' w-full md:w-[40%]'>
                                <img className='px-4 py-4' src={item.icon} alt="" />
                                <div className='space-y-2'> 
                                    <h2 className='text-xl md:text-2xl lg:text-[30px] 2xl:text-[40px]'>{item.title}</h2>
                                    <p className='text-gray-500'>{item.description}</p>
                                </div>
                            </div>

                            <div className='space-y-3 space-x-1.5 grid grid-cols-1 sm:grid-cols-2 w-full md:w-[60%]'>
                                {item.features.map((item, index) => {
                                    return <div key={index} className='bg-[#242424fd] px-2 py-6 w-[200px] md:w-[250px] h-[130px] mx-auto'>
                                        <h2>{item.title}</h2>
                                        <p>{item.description}</p>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </section>
    )
}

export default FeatureCard