import React from 'react'
import { Input } from "@heroui/react";
import {Textarea} from "@heroui/react";

const ContactForm = () => {
    return (
        <div className='flex flex-col md:flex-row gap-8 md:justify-between md:items-center'>
            <div data-aos="fade-right">
                <img src="/image/contact/contact.png" alt="" />
                <h2 className='sm:text-[25px] text-[20px] md:text-[30px] lg:text-[40px] 2xl:text-[58px] font-bold text-white w-full lg:max-w-[300px] xl:max-w-[450px] 2xl:max-w-[519px]'>Get in Touch with AI Podcasts</h2>
            </div>
            <div data-aos="fade-left" className='w-full lg:max-w-[600px] xl:max-w-[700px] 2xl:max-w-[917px] space-y-6 space-x-6'>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <div className='w-full lg:w-[50%]'>
                        <h3 className='text-white font-bold text-xl w-full'>First Name</h3>
                        <Input className='bg-transparent' placeholder='Enter Last Name' label="Email" type="email" />
                    </div>
                      <div className='w-full lg:w-[50%] bg-black'>
                        <h3 className='text-white font-bold text-xl w-full'>First Name</h3>
                        <Input label="Email" type="email" placeholder='Enter Last Name' />
                    </div>
               
                </div>

                  <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <div className='w-full lg:w-[50%]'>
                        <h3 className='text-white font-bold text-xl w-full'>Email</h3>
                        <Input className='bg-transparent' label="Email" placeholder='Enter your Email' type="email" />
                    </div>
                      <div className='w-full lg:w-[50%]'>
                        <h3 className='text-white font-bold text-xl w-full'>Phone Number</h3>
                        <Input label="Email" type="number" placeholder='Enter Phone Number' />
                    </div>
               
                </div>

                <div className='w-full'>
                    <div>
                        <h3 className='text-white font-bold text-xl w-full'>Message</h3>
                        <Textarea color='secondary' size='lg' className="w-full" label="Description" placeholder="Enter your description" />;
                    </div>
                </div>

                <div className='w-full'>
                    <div className='flex flex-wrap space-x-4 space-y-4 justify-between '>
                        <p className='text-[14px] md:text-[16px] 2xl:text-[18px] text-white'>I agree with Terms of Use and Privacy Policy</p>
                        <button className='px-6 py-2 cursor-pointer bg-amber-500 rounded-xl'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm