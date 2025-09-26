import React from 'react'
import {Accordion, AccordionItem} from "@heroui/react";
const Ask = () => {
    const defaultContent = "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making."
    return (
        <section className='py-6 px-6 md:px-[50px]'>
            <div className='flex flex-col md:flex-row gap-8 md:justify-between md:items-center'>
                <div data-aos="fade-up" className='space-y-2.5 space-x-2.5'>
                    <img src="/image/contact/ask.png" alt="" />
                    <h2 className='sm:text-[25px] text-[20px] md:text-[30px] lg:text-[40px] 2xl:text-[58px] font-bold text-white w-full lg:max-w-[300px] xl:max-w-[450px] 2xl:max-w-[519px]'>Get in Touch with AI Podcasts</h2>
                    <p className='text-[#98989A]'>If the question is not available on our FAQ section, Feel free to contact us personally, we will resolve your respective doubts. </p>

                    <button className='shadow-sm text-white mt-4 px-4 py-2'>Ask Qustion</button>
                </div>
                <div data-aos="fade-down" className='w-full text-white lg:max-w-[600px] xl:max-w-[700px] 2xl:max-w-[917px] space-y-6 space-x-6'>
                    <Accordion className='bg-gray-500 px-5 text-white rounded-2xl py-5'>
                        <AccordionItem key="1"  className='text-white'  aria-label="Accordion 1" title="What is AI?">
                            {defaultContent}
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Accordion 2" title="How can I listen to your podcasts?">
                            {defaultContent}
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Are your podcasts free to listen to?">
                            {defaultContent}
                        </AccordionItem>

                         <AccordionItem key="4" aria-label="Accordion 4" title="Can I download episodes to listen offline?">
                            {defaultContent}
                        </AccordionItem>

                         <AccordionItem key="5" aria-label="Accordion 5" title="How often do you release new episodes?">
                            {defaultContent}
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Ask