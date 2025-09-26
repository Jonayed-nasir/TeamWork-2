import React, { useEffect, useState } from 'react'

const Revelotioncard = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch('/data/revelotioncard.json').then((res) => res.json()).then((data) => setdata(data.sections))
    }, [])
    console.log(data)
    return (
        <section className='py-6 px-6 md:px-[50px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5'>
                {data.map((item, index) => {
                    return <div data-aos="fade-left" key={index} className=' bg-gray-900 px-5 py-4 rounded-xl'>
                        <div className='flex gap-10 items-center justify-between'>
                            <h2 className='text-white'>{item.title}</h2>
                            <img src={item.icon} className='w-[52px] h-[52px]' alt="" />

                        </div>
                        <p className='mt-6 text-[#98989A]'> {item.description}</p>
                    </div>
                }
                )}
            </div>
        </section>
    )
}

export default Revelotioncard