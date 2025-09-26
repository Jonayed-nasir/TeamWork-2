import React from 'react'

const Explorermenu = () => {
   const menu= [
  { "id": 1, "name": "All" },
  { "id": 2, "name": "Quantum Computing" },
  { "id": 3, "name": "AI Ethics" },
  { "id": 4, "name": "Space Exploration" },
  { "id": 5, "name": "Biotechnology" },
  { "id": 6, "name": "Renewable Energy" }
]

  return (
    <div className='flex flex-wrap space-x-4 space-y-2.5 md:gap-3.5 2xl:gap-20'>
        {menu.map((item,index)=>{
            return <div key={index} className='flex '>
                <li  className='list-none bg-gray-600 text-white w-max h-max px-4 py-2 rounded-xl'>{item.name}</li>
            </div>
        })}
    </div>
  )
}

export default Explorermenu