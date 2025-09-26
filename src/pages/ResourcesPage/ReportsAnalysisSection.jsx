import React from 'react'

function ReportsAnalysisSection() {
  return (
    <div className='bg-[#1A1A1A]/10'>
        <section className='flex flex-col sm:flex-row items-center justify-between py-16 max-w-[90%] mx-auto gap-3'>
            <div>
                <p className='text-white font-medium text-[16px] tracking-tight bg-[#333333]/20 p-2 inline rounded'>Dive into the Details</p>
                <h2 className='text-white font-medium text-[28px] md:text-[44px] lg:text-[58px] tracking-tight mt-3'>In-Depth Reports and Analysis</h2>
            </div>
            <div className='border-1 border-[#262626]/50 p-3 rounded-[10px] bg-[#141414]/8 w-full sm:w-auto'>
                <div className='flex gap-3'>
                    <button className='hover:bg-[#262626] p-2 rounded-md border-1 border-[#262626]/50 text-[#98989A]/60 hover:text-white w-full cursor-pointer'>Whitepapers</button>
                    <button className='hover:bg-[#262626] p-2 rounded-md border-1 border-[#262626]/50 text-[#98989A]/60 hover:text-white w-full cursor-pointer'>Ebooks</button>
                    <button className='hover:bg-[#262626] p-2 rounded-md border-1 border-[#262626]/50 text-[#98989A]/60 hover:text-white w-full cursor-pointer'>Reports</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ReportsAnalysisSection