import React from 'react'
import trusted from '../assets/images/trustedcustomer.svg';
import aeroplane from '../assets/images/aeroplane.svg';
import list from '../assets/images/list.svg';
import threeperson from '../assets/images/3person.svg';

export default function OurCompany() {
    return (
        <>
            <div>
                <div class="max-w-7xl m-auto px-4 md:px-2 flex flex-wrap justify-between items-center py-12 ">
                    <div className="relative flex items-center justify-center md:w-[50%] pt-5">
                        <img src={trusted} alt="Trusted" className="w-[90%] md:w-[75%] rounded-xl" />

                        {/* BADGE */}
                        <div
                            className="absolute 
        top-[10%] right-[8%] sm:top-[15%] sm:right-[14%]
        md:top-[15%] md:right-[6%] lg:top-[17%] lg:right-[15%]
        bg-[#002768] text-white rounded-full 
        w-24 h-24 md:w-28 md:h-28 
        flex flex-col items-center justify-center 
        text-center text-xs md:text-sm 
        border-4 border-white z-10"
                            style={{
                                boxShadow: '0 10px 30px rgba(0, 39, 104, 0.5)', // deep blue shadow
                            }}
                        >
                            {/* Badge Icon */}
                            <img src={threeperson} alt="badge" className="w-5 md:w-7 mb-1" />

                            {/* Text */}
                            <span className="text-base md:text-2xl font-bold leading-none">1000+</span>
                            <span className="text-xs leading-tight">Trusted Customer</span>
                        </div>
                    </div>

                    <div class="flex flex-col gap-3 justify-center items-start md:w-[45%] mt-2 md:mt-0">
                        <h5 class="flex text-[#E64E37] font-medium gap-1"><div>
                            <img src={aeroplane} alt="" />
                        </div> Our Company
                        </h5>
                        <h2 class="text-[40px] font-bold text-[#002768] md:w-[80%] leading-none">Not Just Visas We Build International Careers</h2>
                        <p class="md:w-[70%] text-[#002768]">We don’t just help you get a visa — we guide you toward the right job, the right country, and the right future.</p>
                        <ul class="flex flex-col mt-3">
                            <div class="flex flex-wrap gap-2 md:gap-4 text-[#002768]">
                                <li class="flex gap-2 items-center"><div>
                                    <img src={list} alt="" />
                                </div>Personalized Career Guidance</li>
                                <li class="flex gap-2 items-center"><div>
                                    <img src={list} alt="" />
                                </div>End-to-End Visa Support</li>
                            </div>
                            <ul>
                                <li class="flex gap-2 items-center text-[#002768]"><div>
                                    <img src={list} alt="" />
                                </div>Job-Oriented Approach</li>
                            </ul>
                        </ul>
                        <div class="flex">
                            <div class="flex text-white py-1 px-10 mt-4 rounded-4xl bg-[#E64E37] cursor-pointer transform transition-transform duration-300 hover:scale-105">
                                Learn More
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
