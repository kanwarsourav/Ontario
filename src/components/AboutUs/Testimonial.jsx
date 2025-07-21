import React from 'react'
import aeroplane from '../../assets/images/aeroplane.svg';
import ronald from '../../assets/images/ronald.svg';
import oliver from '../../assets/images/oliver.svg';
import orangestar from '../../assets/images/orangestar.svg';


export default function Testimonial() {
  return (
    <>
      <div>
        <div className='max-w-7xl mx-auto px-4 md:px-12 py-10 gap-4 md:gap-0 flex justify-center md:justify-between items-center flex-wrap lg:flex-nowrap'>
          <div className='flex flex-col justify-center items-center md:items-start lg:pl-14'>
            <h4 className="flex gap-1 text-[#E64E37] text-lg font-medium justify-center items-center md:justify-start "> 
              <div>
              <img src={aeroplane} alt="" />
            </div> Clients Testimonials</h4>
            <h2 className=" text-[36px] font-bold text-[#002768] lg:w-[70%] text-center md:text-left leading-tight">
              What customers saying about The Ontario
            </h2>
          </div>
          <div className='flex justify-center gap-5 flex-wrap md:flex-nowrap'>
            <div className="w-[70%] md:w-[40%] bg-white  border-gray-200 rounded-2xl shadow-md p-6  transform transition-transform duration-300 hover:scale-105 h-full">
              <img src={ronald} alt="" className="w-16 h-16 rounded-full  object-cover mb-3" />
              <h4 className="font-semibold text-[#002768] text-base">Ronald richards</h4>
              <p className="text-gray-500 text-sm ">Finance Manager </p>
              <div className='flex gap-1 py-2 text-[#E64E37]'>
                <img src={orangestar} alt="" />
                <img src={orangestar} alt="" />
                <img src={orangestar} alt="" />
                <img src={orangestar} alt="" />
                <img src={orangestar} alt="" />
              </div>
              <p className="text-[#002768] text-sm leading-snug">Their team's expertise and commitment to quality helped us improve efficiency across the board</p>
            </div>
            <div className="bg-white w-[70%] md:w-[40%] border-gray-200 rounded-2xl shadow-md p-6  transform transition-transform duration-300 hover:scale-105 h-full">
              <img src={oliver} alt="" className="w-16 h-16 rounded-full  object-cover mb-3" />
              <h4 className="font-semibold text-[#002768] text-base">Oliver spaltn</h4>
              <p className="text-gray-500 text-sm ">CEO at D.B.A Pvt. Ltd</p>
              <div className='flex gap-1 py-2'>
                <img src={orangestar} alt="" />
                <img src={orangestar} alt="" />
                <img src={orangestar} alt="" />
                <img src={orangestar} alt="" />
                <img src={orangestar} alt="" />
              </div>
              <p className="text-[#002768] text-sm leading-snug">Their team's expertise and commitment to quality helped us improve efficiency across the board</p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
