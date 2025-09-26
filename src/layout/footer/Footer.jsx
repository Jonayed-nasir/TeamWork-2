import React, { useEffect, useState } from 'react'

function Footer() {
     const [data, setdata] = useState([])
      useEffect(() => {
          fetch('/data/footer.json').then((res) => res.json()).then((data) => setdata(data))
  
      }, [])
  return (
    <section className='py-6 px-6 md:px-[50px]'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {
          data.map((item,index)=>{
            return <div key={index} >
              <h2 className='text-white font-bold text-[18px] md:text-2xl'>{item.title}</h2>
              <div className='space-y-2 py-4'>
                {item.items.map((item,index)=>{
                  return <ul key={index}>
                    <li className='text-[#666666] list-none text-[15px] 2xl:text-[18px]'>{item.name}</li>
                    </ul>
                })}
              </div>
            </div>
          })
        }
      </div>

      <div  className='flex flex-col md:flex-row lg:justify-between lg:items-center gap-3 mt-2 md:mt-8 py-6 '>
        <div className='flex gap-4 text-[#666666]'>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <img src="/icon.png" alt="" />
        </div>
        <p className='text-[#666666]'>© 2024 FutureTech. All rights reserved.</p>
      </div>
    </section>
  )
}

export default Footer
