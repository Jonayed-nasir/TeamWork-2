import React from 'react'
import Hero from './Hero'
import Herobuttom from './Herobuttom'
import Feature from './Feature'
import FeatureCard from './Feature-card'
import Explorer from './Explorer'
import Explorercard from './Explorer-card'
import Unlock from './Unlock'
import Unlockcard from './Unlock-card'
import Real from './Real'
import Testomonial from './Testomonial'
import Revelotion from './Revelotion'
import Revelotioncard from './Revelotion-card'

function Home() {
  return (
    <div className='text-white max-w-[1920px] mx-auto overflow-hidden' >
      <Hero/>
      <Herobuttom/>
      <Feature/>
      <FeatureCard/>
      <Explorer/>
      <Explorercard/>
      <Unlock/>
      <Unlockcard/>
      <Real/>
      <Testomonial/>
      <Revelotion/>
      <Revelotioncard/>
    </div>
  )
}

export default Home
