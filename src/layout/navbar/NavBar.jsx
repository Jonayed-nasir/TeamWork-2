import React, { memo, useEffect, useState } from 'react'
import logos from '/Logo.png'
import { Link } from 'react-router'
import Responsive from './Responsive'
function NavBar() {
  const [data,setdata]=useState([])
  const [isOpen,setIsopen] = useState(false)
  useEffect(()=>{
    const response=fetch("/data/navbar.json").then((res)=>{
      return res.json()
    }).then((data)=>setdata(data))
  },[])
  return (
    <div>
      <nav className='text-center bg-gray-800 py-1.5 text-white'>Subscribe to our Newsletter For New & latest Blogs and Resources <span className='font-bold text-amber-500 ml-2' >🡵</span></nav>


      {/* navmenu */}

      <div className='w-full md:max-w-[1600px] mx-auto px-8 md:px-12 py-3 bg-black'>
        <nav className='flex gap-5 justify-between items-center'>
          {/* .......................logo............................. */}

          <div className='flex items-center gap-2'>
            <img src={logos} alt="" className='z-40 w-[60px] h-[60px]' />
            <h2 className='font-bold text-white text-2xl'>FureTech</h2>
          </div>

          {/* .............................Navitem.................................... */}
          <ul className='hidden md:flex gap-3 lg:gap-[30px]'>
            {
              data.map((item) => {
                return <Link className='cursor-pointer text-[16px] hover:text-gray-400 transition-all duration-200 text-white' to={`${item.item == "Home" ? "/" : (item.item).toLowerCase()}`} key={item.id}>
                  {item.item}
                </Link>

              }
              )

            }
          </ul>

          {/* ......................button....................... */}
          <Link to="/contact" className='hidden md:block cursor-pointer px-4 py-2 bg-[#FFD11A] text-black rounded-xl'>Contact Us</Link>

          {/* .....................Responsive navItem............. */}
          {isOpen ? (
            <div className='md:hidden flex'>
              <Responsive data={data} isOpen={isOpen} setIsopen={setIsopen} />
            </div>
          ) : ('')}

          <div className='bg-red-600 text-white px-4 py-2 rounded md:hidden flex' onClick={() => setIsopen(!isOpen)}>
            O
          </div>
        </nav>

      </div>
    </div>
  )
}

export default memo(NavBar)
