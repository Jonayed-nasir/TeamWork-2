import React, { useEffect, useState } from 'react'
const Explorercard = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch('/data/explorer.json').then((res) => res.json()).then((data) => setdata(data))

    }, [])
    return (
        <section className='py-6 px-6 md:px-[50px]'>

            {data.map((item, index) => {
                return <div key={index}>
                    <div data-aos="fade-right" className='flex flex-col lg:flex-row justify-between '>

                        <div className='flex items-center gap-1 w-[32%]'>
                            <img src={item.image} className='p-10' alt="" />
                            <div>
                                <h2>{item.author}</h2>
                                <p className='text-gray-500'>{item.category}</p>
                            </div>
                        </div>

                        <div className=' md:w-[68%] flex items-center justify-between'>
                            <div className='space-y-2.5'>
                                <p  className='text-[#98989A]'>{item.date}</p>
                                <h2>{item.title}</h2>
                                <p className='text-[#98989A]'>{item.description}</p>
                                <div className='flex items-center text-[#98989A] gap-2'>
                                    <div className='flex gap-2'>
                                        <div>❤️</div>
                                        <div>{item.likes}</div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <div>💬</div>
                                        <div>{item.comments}</div>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <div className='-rotate-45 text-xl -mt-2'>➤</div>
                                        <div>{item.shares}</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src="/image/home/button.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            })}
          
        </section>
    )
}

export default Explorercard