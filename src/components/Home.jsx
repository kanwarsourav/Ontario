  import React from 'react'

  import OurCompany from './Home/OurCompany'
  import WorkVisa from './Home/WorkVisa'
  import HelpClient from './Home/HelpClient'
  import OurConsultancy from './Home/OurConsultancy'
  import Flags from './Home/Flags'
  import Testimonial from './Home/Testimonial'
  import WhyChooseUs from './Home/WhyChooseUs'
  import Detail from './Home/Detail'
  import Enquirys from './Home/Enquirys'
  import Blogs from './Home/Blogs'
  import Water from './Home/Water'
  import Banner from './Home/Banner'


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
