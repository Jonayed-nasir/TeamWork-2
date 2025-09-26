import React from 'react'
import { CardData } from '../../../public/data/Switch'

const Card = () => {
  return (
    <div className=' bg-[#262626] py-10 px-10' >
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 '>{CardData.map((item,index)=> (
        <div className='lg:text-[18px] md:text-base text-sm text-[#98989A] bg-gray-900  py-8 px-6 rounded-2xl' key={index}>
          <div className='flex items-center justify-center'>
            <div className='space-y-2 mt-4'> 
              <h2 className='font-bold text-white px-5 '>{item.title}</h2>
              <p className='text-[#7E7E81] px-5 py-2 mt-3 text-sm'>{item.des}</p>                                
            </div>  
            <img className='px-4 md:-ml-20 -ml-6 md:-mt-12' src={item.Image} alt="" /> 
          </div>
                 
        </div>
        
        
      ))}


        
      </div>
    </div>
    )
}

export default Card
