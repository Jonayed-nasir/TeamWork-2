import { div } from 'framer-motion/client'
import React from 'react'

function ResourcePageCards() {
    const Cards = [
        {
            img: "/data/images/resources/firstcard.png",
            title: "FutureTech Trends 2024",
            subTitle: "An ebook that predicts upcoming technology trends for the next year, including AI developments",
            btn1: "View Details",
            btn2: "Download PDF Now"
        },
        {
            img: "/data/images/resources/secondcard.png",
            title: "Space Exploration Ebook",
            subTitle: "An ebook that predicts upcoming technology trends for the next year, including AI developments",
            btn1: "View Details",
            btn2: "Download PDF Now"
        },
        {
            img: "/data/images/resources/thelastcard.png",
            title: "Quantum Computing Whitepaper",
            subTitle: "An in-depth whitepaper exploring the principles, applications.",
            btn1: "View Details",
            btn2: "Download PDF Now"
        },
    ]
  return (
    <div className="border-y-1 border-[#262626]/50">
        <section className='max-w-[90%] mx-auto py-4 md:py-16'>
            <div className='flex flex-col md:flex-row gap-4 w-[100%]'>
                {Cards.map((item, index)=> (
                    <div key={index} className='flex flex-col gap-3  lg:w-[33%] border-r-1 border-[#262626]/50 last:border-0 p-4 lg:p-12 lg:last:pr-0 lg:first:pl-0'>
                        <img src={item.img} alt="" className='w-full max-h-[230px] object-cover rounded-2xl'/>
                        <h6 className='text-white'>{item.title}</h6>
                        <p className='text-[#98989A]/60'>{item.subTitle}</p>
                        <div className='flex justify-between gap-6'>
                            <button className='hover:bg-[#262626] p-2 rounded-md border-1 border-[#262626]/50 text-[#98989A]/60 hover:text-white w-full cursor-pointer'>{item.btn1}</button>
                            <button className='hover:bg-[#262626] p-2 rounded-md border-1 border-[#262626]/50 text-[#98989A]/60 hover:text-white w-full cursor-pointer'>{item.btn2}</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default ResourcePageCards