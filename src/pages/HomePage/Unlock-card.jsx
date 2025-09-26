import React, { useEffect, useState } from 'react'

const Unlockcard = () => {

    const [data, setdata] = useState([])
    useEffect(() => {
        fetch('/data/unlock.json').then((res) => res.json()).then((data) => setdata(data))

    }, [])
    return (
        <section className='py-6 px-6 md:px-[50px]'>
            <div className=''>
                {data.map((item, index) => {
                    return <div data-aos="fade-left" key={index} className='md:py-[30px] py-4 lg:py-[40px] 2xl:py-[80px]'>
                        <div className='flex flex-col lg:flex-row justify-between gap-2.5 md:gap-20'>
                            {/* left side */}
                            <div className='w-full lg:w-[18%] 2xl:w-[24%]'>
                                {/* ..............image............... */}
                                <img src={item.icon} alt="" />
                                {/* ..............text............... */}
                                <h2 className='mt-4'>{item.title}</h2>
                                <p className='text-[#98989A] mt-2 2xl:text-[20px] lg:text-[16px] md:text-[14px] text-[12px] w-full lg:min-w-[420px]  2xl:min-w-[519px]'>{item.description}</p>

                                <div className='flex flex-col items-center justify-center ml-2 md:ml-14'>
                                    <div className='bg-gray-800 px-4 py-2 rounded-xl min-w-max h-max leading-tight mt-5 text-center mx-auto'>
                                        <p className='text-[14px]'> {item.buttonText}<span className='font-bold text-amber-500 ml-2 text-[14px]' >🡵</span></p>
                                    </div>
                                </div>

                                {/* ..............buttom card............... */}
                                <div className='flex flex-col md:flex-row items-center gap-3 mt-8 w-full lg:w-[519px]'>
                                    <div>
                                        <p className='text-[#98989A]'>Downloaded By</p>
                                        <h2 className=''>{item.downloadedBy}</h2>
                                    </div>
                                    <div>
                                        <img src="/image/home/custommer.png" className='px-14' alt="" />
                                    </div>
                                </div>
                            </div>
                            {/* right side */}
                            <div className='w-full lg:w-[68%] 2xl:w-[75%] px-0 md:px-10'>
                                <div className='flex flex-col md:flex-row items-center gap-2 justify-between w-full 2xl:min-w-[917px]'>
                                    <h2 className='w-full md:min-w-[242px]'>{item.features.sectionTitle}</h2>
                                    <p className='text-[#98989A] max-w-[654px] '>{item.features.expertNote}</p>
                                </div>
                                {/* ..............image............... */}
                                <img src={item.features.image} alt="" />
                                {/* ..............text............... */}
                                <div className='flex flex-col md:flex-row gap-8 px-6 py-7'>
                                    <div className='w-[30%] space-y-2'>
                                        <p className='text-[#98989A]'>Total Ebooks</p>
                                        <h2>{item.features.textEbooks}</h2>
                                    </div>
                                    <div className='flex flex-col sm:flex-row sm:items-center gap-3.5 justify-between w-[70%]'>
                                        <div className='space-y-2'>
                                            <p className='text-[#98989A]'>Download Formats</p>
                                            <p>{item.features.downloadFormat}</p>
                                        </div>

                                        <div className='bg-gray-800 px-4 py-2 rounded-xl w-max h-max'>
                                            <p>Explore Resources <span className='font-bold text-amber-500 ml-2' >🡵</span></p>
                                        </div>
                                    </div>
                                </div>
                                {/* ..............buttom text............... */}
                                <div className='space-y-2 mt-11'>
                                    <p className='text-[#98989A]'>Average Author Expertise</p>
                                    <h2>{item.features.expertNote}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </section>
    )
}

export default Unlockcard