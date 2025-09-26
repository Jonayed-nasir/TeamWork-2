import React, { useEffect, useState } from 'react'

const Herobuttom = () => {
    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch('/data/herob.json').then((res)=>res.json()).then((data)=>setdata(data))

    },[])

     const [data1,setdata1]=useState([])
    useEffect(()=>{
        fetch('/data/herob1.json').then((res)=>res.json()).then((data)=>setdata1(data))

    },[])
  return (
    <section data-aos="fade-right" className='py-6 px-6 md:px-[50px]'>
        <div className='flex flex-col md:flex-row justify-around gap-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  md:justify-between gap-4 space-x-2 md:gap-8 w-full md:w-[60%]'>
                {data.map((item,index)=>{
                    return <div key={index} className='bg-[#242424fd] px-8 py-2 w-full md:md:w-[250px] h-[70px] sm:h-[100px] mx-auto'>
                        <h2 className='text-center text-xl md:text-2xl lg:text-[40px]'>{item.item} <span className='text-amber-400 font-bold'>+</span> </h2>
                        <p className='text-gray-500 text-center'>{item.des}</p>
                    </div>
                })}
            </div>

            <div className='w-full md:w-[40%] px-9  lg:-mt-40 space-y-2'>
                <img src="/image/home/custommer.png" alt="" />
                <h3>Explore 1000+ resources</h3>
                <p>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                <div className='bg-gray-800 px-4 py-2 rounded-xl w-max'>
                    <p>Explore Resources <span className='font-bold text-amber-500 ml-2' >🡵</span></p>
                </div>
            </div>
        </div>

        <div className='py-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8'>
                {data1.map((item,index)=>{
                    return <div key={index} className='bg-[#242424fd] px-8 py-4  flex gap-4 items-center justify-between'>
                        <div className='space-y-1'>
                            <img src={item.image} alt="" />
                            <h2 className='mt-5'>{item.title}</h2>
                            <p className='mb-2 text-gray-500'>{item.subtitle}</p>
                            <p className='text-gray-600'>{item.description}</p>
                        </div>
                        <div>
                            <img src={item.icon} alt="" />
                        </div>
                    </div>
                })}
            </div>
        </div>
    </section>
  )
}

export default Herobuttom