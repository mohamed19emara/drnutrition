import React from 'react'
import Slide from '../../components/Slide/Slide'
import AutoTypingText from '../../components/content/AutoTypingText'
import HeroSection from '../../components/HeroSection/HeroSection.js'
import Services from '../../components/services/Services'

const HomePage = () => {
  return (
    <div className='text-center'>
      <Slide/>
      <AutoTypingText/>
      <HeroSection />
      <Services/>
    </div>
  )
}

export default HomePage