import React from 'react'
import aboutusbg from '../assets/images/aboutusbg.svg'
import aeroplane from '../assets/images/aeroplane.svg';

export default function AboutUs() {
    return (
        <>
            <div className=' bg-cover bg-center h-40 w-full bg-[#002768] flex  justify-center '
                style={{ backgroundImage: `url(${aboutusbg})` }}>

                <h2 className='flex justify-center items-center font-bold text-5xl text-white'>About Us</h2>
            </div >
            <div className='max-w-7xl mx-auto px-4 md:px-12 flex '>

                <div className='flex justify-center flex-wrap md:flex-nowrap gap-6 md:gap-14  py-6'>
                    <div className='flex flex-col gap-2 md:w-[45%]'>
                        <h5 className="flex text-[#E64E37] font-medium gap-2 items-center">
                            <img src={aeroplane} alt="plane" /> Company Intro
                        </h5>
                        <h2 className="text-[32px] md:text-[40px] font-bold text-[#002768] md:w-[80%] leading-tight">
                            We help Making your dream into Reality
                        </h2>
                    </div>
                    <div className='flex flex-col gap-3 md:w-[40%]'>
                        <p className=" text-[#002768]">
                            The Ontario Visa Consultancy was created to provide uniquely des igned premium services in the world of education and migration. As people are dreaming more.
                        </p>
                        <p className=" text-[#002768]">
                            The Ontario Visa Consultancy was created to provide uniquely des igned premium services in the world of education and migration. As people are dreaming more.
                        </p>
                    </div>
                </div>
                <div></div>
            </div>


        </>
    )
}
