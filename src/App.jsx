import React from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import OurCompany from './components/OurCompany'
import WorkVisa from './components/WorkVisa'
import HelpClient from './components/HelpClient'
import OurConsultancy from './components/OurConsultancy'
import Flags from './components/Flags'
import Testimonial from './components/Testimonial'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {


  return (
    <>
      <Header />
      <Navbar/>
      <Banner/>
      <OurCompany/>
      <WorkVisa/>
      <HelpClient/>
      <OurConsultancy/>
      <Flags/>
      <Testimonial/>
    </>
  )
}

export default App
