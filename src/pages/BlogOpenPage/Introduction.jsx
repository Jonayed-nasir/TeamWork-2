import { ul } from 'framer-motion/client';
import React from 'react'
import { useEffect,useState } from 'react';


const Introduction = () => {
const [data,setdata]=useState([ ""])
useEffect(() => {
fetch('/data/data.json')
.then((res) => res.json())
.then((data) => setdata(data));
}, []);
console.log(data)

  return (
    <section className='py-7 px-5 bg-black '>
      <div className='flex md:flex-row flex-col gap-6'>
        <div className='md:w-[70%] w-full py-8  border-t-1 border-r-1 border-b-1 border-gray-800' data-aos="fade-right">
            <h3 className='text-white font-semibold px-7'>Introduction</h3> 
            <p className='text-gray-500
            py-6 px-6'>Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic accuracy to enhancing patient outcomes.</p>           

            <div>
              <h3 className='text-white font-semibold px-7'>Artificial Intelligence (AI)</h3> 
              <p className='text-gray-500
              py-6 px-6'>Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.</p>

              <p className='text-gray-500
              py-4 px-6'>Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.</p>
            </div>

            <div className='px-5 '>
              <h2 className='text-white font-semibold py-4'>Predictive Analytics and Disease Prevention</h2>
              <div className='gradient-bg'>
                <p className='text-gray-500'>The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system.</p>
                <div className='flex items-center justify-center'>
                  <button className='px-4 py-2 border-1 border-gray-700 text-white rounded '>Read Full Blog <span>↓</span></button>
                </div>
              </div>              
            </div> 
        </div>

      {/* right side */}

      <div className='md:w-[30%] w-full' data-aos="fade-left">
        <div className='flex gap-2 '>
          <div className='flex gap-1  bg-gray-900 py-2 px-3 rounded-3xl'>
            <div>
              💗
            </div>
              <p className='text-white'>24.5k</p>
          </div> 
                         

          <div className='flex gap-1 bg-gray-900 py-2 px-6 rounded-3xl'>
            <div>
              👁️ 
            </div>
              <p className='text-white'>50k</p>
            </div>

            <div className='flex gap-1 bg-gray-900 py-2 px-6 rounded-3xl'>
              <div className='text-white'>
                ⌲
              </div>
                <p className='text-white'>206</p>
              </div>   
            </div>

            <div className=' grid grid-cols-2 mt-8 space-y-4'>
              <div className='flex '>
                <div className=' items-center justify-center gap-3'>
                  <span className='text-gray-600'>Publication Date</span>
                  <h3 className='text-white'>October 15, 2023</h3>
                </div>
            
            </div>
            <div className=' '>
              <span className='text-gray-600'>Reading Time</span>
              <h3 className='text-white'>10 Min</h3>
            </div>

            <div className='space-y-1'>
              <span className='text-gray-600'>Category</span>
              <h3 className='text-white'>Healthcare</h3>
            </div>
 
            <div>
              <span className='text-gray-600'>Author Name</span>
              <h3 className='text-white'>Dr. Emily Walker</h3>
            </div>
          
          </div>
          
          <div className='mt-6'>
            <h2 className='text-gray-600'>Table of Contents</h2>
            <div className='bg-gray-900 rounded px-4 py-4 mt-4'>
              <div className='space-y-3 '>
                {data.map((item) => (
                  <ul className='flex gap-3'>
                    <span className='text-white'>•</span>
                    <li className='text-white'>{item.item}</li>
                  </ul>
                ))}


              </div>
            </div>
          </div>


        </div>
        

        

        
      </div>
    </section>
  )
}

export default Introduction
