import React, { useEffect, useState } from 'react'

const Testomonial = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch('/data/testomonial.json').then((res) => res.json()).then((data) => setdata(data))
    }, [])
   
    return (
        <section className='py-6 px-6 md:px-[50px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {data.map((item, index) => {
                   return <div data-aos="fade-up" className='bg-gray-950 md:max-w-[300px] lg:max-w-[350px] px-2 md:px-6 space-y-3 py-6' key={index}>
                        <div className='flex gap-3'>
                            <img src={item.image} alt="" />
                            <div>
                                <h2>{item.name}</h2>
                                <p>{item.location}</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                {item.rating}
                            </div>
                        </div>
                        <div>
                            <p className='w-full md:w-[200px] lg:w-[350px]'>{item.text}</p>
                        </div>
                    </div>
                })}
            </div>
        </section>
    )
}

export default Testomonial