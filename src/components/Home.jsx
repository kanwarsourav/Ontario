import React from 'react'

import OurCompany from './OurCompany'
import WorkVisa from './WorkVisa'
import HelpClient from './HelpClient'
import OurConsultancy from './OurConsultancy'
import Flags from './Flags'
import Testimonial from './Testimonial'
import WhyChooseUs from './WhyChooseUs'
import Detail from './Detail'
import Enquirys from './Enquirys'
import Blogs from './Blogs'
import Water from './Water'
import Banner from './Banner'


import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Home() {
  return (
    <>
  
      <Banner />
      <OurCompany />
      <WorkVisa />
      <HelpClient />
      <OurConsultancy />
      <Flags />
      <Testimonial />
      <WhyChooseUs />
      <Detail />
      <Enquirys />
      <Blogs />
      <Water />

      

  
    </>
  )
}
