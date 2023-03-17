import React from 'react'
import HeroSection from './components/HeroSection';

const About = () => {
  const data = {
    name: "My Ecomm Store"
  }
  return (
    <HeroSection  myData={data}/>
  )
}

export default About;