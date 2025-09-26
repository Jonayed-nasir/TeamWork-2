import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css"
import Hero from './Hero';
import Introduction from './Introduction';
import News from './News';
import Future from './Future';
import Card from './Card';


function Blog() {
  return (
    <div>

      <div  className='text-white'>This is Blog Page</div>

      <Hero />
      <Introduction />
      <News />
      <Future />
      <Card />
      
    </div>
  )
}

export default Blog
