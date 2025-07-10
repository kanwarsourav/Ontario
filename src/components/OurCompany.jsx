import React from 'react';
import trusted from '../assets/images/trustedcustomer.svg';      // Main image (woman)
import grouppeople from '../assets/images/grouppeople.svg';      // Bottom-right image
import aeroplane from '../assets/images/aeroplane.svg';
import list from '../assets/images/list.svg';
import threeperson from '../assets/images/3person.svg';

export default function OurCompany() {
  return (
    <div>
      <div className="max-w-7xl m-auto px-4 md:px-12 flex flex-wrap justify-between items-center py-12">
        
        {/* LEFT: IMAGES */}
        <div className="relative flex items-center justify-center md:w-[50%] pt-5">
          {/* Main Image */}
          <img src={trusted} alt="Trusted" className="w-[60%] md:w-[75%] rounded-xl" />

          {/* Overlapping Image (Bottom Right) */}
          <div className="absolute bottom-[-20px] right-[10px] md:bottom-[-30px] md:right-[10px] w-52 h-36 md:w-80 md:h-64 bg-white rounded-4xl overflow-hidden border-4 border-white shadow-xl z-10">
            <img
              src={grouppeople}
              alt="People"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Badge */}
          <div
            className="absolute 
              top-[10%] right-[8%] sm:top-[15%] sm:right-[14%]
              md:top-[15%] md:right-[6%] lg:top-[17%] lg:right-[7%]
              bg-[#002768] text-white rounded-full 
              w-24 h-24 md:w-28 md:h-28 
              flex flex-col items-center justify-center 
              text-center text-xs md:text-sm 
              border-4 border-white z-20 shadow-xl"
          >
            <img src={threeperson} alt="badge" className="w-5 md:w-7 mb-1 " />
            <span className="text-base md:text-2xl font-bold leading-none">1000+</span>
            <span className="text-xs leading-tight">Trusted Customer</span>
          </div>
        </div>

        {/* RIGHT: TEXT */}
        <div className="flex flex-col gap-3 justify-center items-start md:w-[45%] mt-2 md:mt-0">
          <h5 className="flex text-[#E64E37] font-medium gap-2 items-center">
            <img src={aeroplane} alt="plane" /> Our Company
          </h5>
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#002768] md:w-[80%] leading-tight">
            Not Just Visas We Build International Careers
          </h2>
          <p className="md:w-[70%] text-[#002768]">
            We don’t just help you get a visa — we guide you toward the right job, the right country, and the right future.
          </p>
           <ul class="flex flex-col mt-3">
                            <div class="flex gap-4 text-[#002768]">
                                <li class="flex gap-2 items-center font-medium"><div>
                                    <img src={list} alt="" />
                                </div>Personalized Career Guidance</li>
                                <li class="flex gap-2 items-center font-medium"><div>
                                    <img src={list} alt="" />
                                </div>End-to-End Visa Support</li>
                            </div>
                            <ul>
                                <li class="flex gap-2 items-center font-medium text-[#002768]"><div>
                                    <img src={list} alt="" />
                                </div>Job-Oriented Approach</li>
                            </ul>
                        </ul>
          <div className="mt-4">
            <button className="bg-[#E64E37] text-white py-2 px-10 rounded-full hover:scale-105 transition-transform">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
