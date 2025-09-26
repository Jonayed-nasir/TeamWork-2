import React from 'react'
import Explorermenu from './Explorer-menu'

const Explorer = () => {
    return (
        <section className='py-6 px-6 md:px-[50px]'>
            <div data-aos="fade-right" className='flex flex-col md:flex-row justify-between gap-3 items-center'>
                <div>
                    <p className='bg-gray-700 w-max px-4 py-2 rounded-sm'>Unlock the Power of</p>
                    <h2 className='text-[20px] sm:text-[30px] md:text-[40px] lg:text-[58px]'>FutureTech Features</h2>
                </div>

                <div className='bg-gray-800 px-4 py-2 rounded-xl w-max h-max'>
                    <p>Explore Resources <span className='font-bold text-amber-500 ml-2' >🡵</span></p>
                </div>
            </div>

            <div data-aos="fade-left" className='flex flex-col items-center justify-center py-6'>
                <div className='mx-auto'>
                <Explorermenu/>
            </div>
            </div>
        </section>
    )
}

export default Explorer