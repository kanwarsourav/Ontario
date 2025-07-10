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
import WhyChooseUs from './components/WhyChooseUs'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Detail from './components/Detail'
import Enquirys from './components/Enquirys'
import Blogs from './components/Blogs'
import Water from './components/Water'
import Footer from './components/Footer'



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
      <WhyChooseUs/>
      <Detail/>
      <Enquirys/>
      <Blogs/>
      <Water/>
      <Footer/>
    </>
  )
}

export default App
