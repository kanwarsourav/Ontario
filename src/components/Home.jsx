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
import FadeInSection from './FadeIn'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Home() {
  return (
    <>
  
      

      <FadeInSection direction="right"><Banner /></FadeInSection>
      <FadeInSection direction="left"><OurCompany /></FadeInSection>
      <FadeInSection direction="right"><WorkVisa /></FadeInSection>
      <FadeInSection direction="left"><HelpClient /></FadeInSection>
      <FadeInSection direction="right"><OurConsultancy /></FadeInSection>
      <FadeInSection direction="left"><Flags /></FadeInSection>
      <FadeInSection direction="right"><Testimonial /></FadeInSection>
      <FadeInSection direction="left"><WhyChooseUs /></FadeInSection>
      <FadeInSection direction="right"><Detail /></FadeInSection>
      <FadeInSection direction="left"><Enquirys /></FadeInSection>
      <FadeInSection direction="right"><Blogs /></FadeInSection>
      <FadeInSection direction="left"><Water /></FadeInSection>

  
    </>
  )
}
