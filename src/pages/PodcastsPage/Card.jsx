import React from 'react';
import { CardData } from '../../../public/data/switch';

const Card = () => {
  return (
    <div  className=' bg-[#141414] lg:[95%] md:w-full w-[95%] py-5 px-10'>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-5'>{CardData.map((item,index)=> (
        <div key={index}>
          <img data-aos="flip-up" src={item.Image} alt="" />
          <h2 className='font-semibold py-4 text-white '>{item.title}</h2>
          <p className='lg:text-[18px] md:text-base text-sm text-[#98989A]'>{item.des}</p>
          <div className='py-5'>
            <button className='text-[#98989A] bg-[#262626] rounded-2xl lg:px-24 md:px-4 px-22 py-3 '>{item.mybtn} <span className='text-[#FFD11A] text-2xl '>↗</span></button>           
          </div>
        </div>
      ))}
        
      </div>
    </div>
  )
}

export default Card

