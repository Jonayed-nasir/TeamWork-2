import React from 'react'
import { NewsData } from '../../../public/data/Switch'

const News = () => {
  return (
    <div className='lg:[95%] md:w-[95%] w-[90%] py-5 px-10'>
      <h2 className='font-semibold py-4 lg:text-[30px] md:text-[24px] text-[20px] text-[#CCCCCC]'>Similar News</h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-10'> {NewsData.map((item,index)=> (
        <div key={index}>
          <h2 className='font-semibold py-4 lg:text-[30px] md:text-[24px] text-[20px] text-[#CCCCCC]'></h2>
          <img data-aos="flip-up" src={item.Image} alt="" />
          <h2 className='font-semibold py-4 text-white '>{item.title}</h2>
          <p className='lg:text-[18px] md:text-base text-sm text-[#98989A]'>{item.des}</p>
          <div className='flex gap-5 mt-3 '>
            <p className='lg:text-[18px] md:text-base text-sm text-[#98989A] bg-gray-900 px-4 py-2 rounded-full'>{item.des2}</p>
            <p className='lg:text-[18px] md:text-base text-sm text-[#98989A] bg-gray-900 px-4 py-2 rounded-full'>{item.des3}</p>
            <button className='text-[#98989A] bg-gray-900 rounded lg:px-24 md:px-10 px-2 lg-py-4 md:py-3 py-2'>{item.mybtn}</button>
          </div>
        </div>
      ))}
        
      </div>
    </div>
  )
}

export default News
