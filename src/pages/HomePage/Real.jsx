import React from 'react'

const Real = () => {
    return (
        <section className='py-6 px-6 md:px-[50px]'>
            <div className='flex flex-col md:flex-row justify-between gap-3 items-center'>
                <div>
                    <p className='bg-gray-700 w-max px-4 py-2 rounded-sm'>What Our Readers Say</p>
                    <h2 className='text-[20px] sm:text-[30px] md:text-[40px] lg:text-[58px]'>Real Words from Real Readers</h2>
                </div>

                <div className='bg-gray-800 px-4 py-2 rounded-xl w-max h-max'>
                    <p>View All Testimonials <span className='font-bold text-amber-500 ml-2' >🡵</span></p>
                </div>
            </div>
        </section>
    )
}

export default Real