import React from 'react'
import trusted from '../assets/images/trustedcustomer.svg';
import aeroplane from '../assets/images/aeroplane.svg';
import list from '../assets/images/list.svg';

export default function OurCompany() {
    return (
        <>
            <div>
                <div class="max-w-7xl m-auto px-4 md:px-2 flex flex-wrap justify-between items-center py-12 ">
                    <div class="flex  items-center justify-center md:w-[50%] pt-5">
                        <img src={trusted} alt="" class="w-[75%] flex items-center justify-center" />
                    </div>
                    
                    <div class="flex flex-col gap-3 justify-center items-start md:w-[45%] mt-2 md:mt-0">
                        <h5 class="flex text-[#E64E37] font-medium gap-1"><div>
                            <img src={aeroplane} alt="" />
                        </div> Our Company
                        </h5>
                        <h2 class="text-[40px] font-bold text-[#002768] md:w-[80%] leading-none">Not Just Visas We Build International Careers</h2>
                        <p class="md:w-[70%] text-[#002768]">We don’t just help you get a visa — we guide you toward the right job, the right country, and the right future.</p>
                        <ul class="flex flex-col mt-3">
                            <div class="flex flex-wrap md:gap-4 text-[#002768]">
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
                            <div class="flex text-white py-1 px-10 mt-4 rounded-4xl bg-[#E64E37] cursor-pointer">
                                Learn More
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
