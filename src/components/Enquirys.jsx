import React from 'react'
import aeroplane from '../assets/images/aeroplane.svg';
import calling from '../assets/images/calling.svg';

export default function Enquirys() {
    return (
        <>
            <div className='bg-[#FFFAF9]'>
                <div className='max-w-7xl mx-auto px-4 md:px-12 py-20 flex  flex-wrap lg:flex-nowrap gap-y-5 '>
                    <div className='lg:w-[50%] flex flex-col gap-3'>
                        <h5 class="flex text-[#E64E37] font-medium gap-1"><div>
                            <img src={aeroplane} alt="" />
                        </div> Get Started with us
                        </h5>
                        <h2 class="text-[40px] font-bold text-[#002768] md:w-[70%] leading-none">Feel free to enquire about
                            any question you got</h2>
                        <p className='w-[85%]'>Our team is here to assist with any inquiries you have. We're ready to provide quick and helpful responses to make your experience seamless.</p>
                        <div class="flex">
                            <div class="flex text-white py-1 px-10 mt-4 rounded-4xl bg-[#E64E37] cursor-pointer transform transition-transform duration-300 hover:scale-105">
                                Let's Talk
                            </div>
                        </div>
                        <div><img src={calling} alt="" className='w-[70%] lg:w-[90%] mt-4' /></div>
                    </div>
                    <div className='lg:w-[50%] flex justify-center items-center'>
                        <div className='bg-white p-8 rounded-2xl shadow-lg '>
                            <h3 className='text-[26px] sm:text-[35px] font-bold text-[#002768] pb-2'>Get free assessment today!</h3>
                            <div className='flex flex-col gap-3'>
                                <input type="text" placeholder="Enter Name" class="px-4 py-2 w-full sm:w-92 rounded-2xl  border-2  border-[#FBDFDB] bg-[#FFF5F3] text-[#002768]   text-start">
                                </input>

                                <div className='flex gap-4'>
                                    <input type="email" placeholder="Your Email" class="px-4 py-2 w-full sm:w-44 rounded-2xl  border-2  border-[#FBDFDB] bg-[#FFF5F3] text-[#002768]  text-start">
                                    </input>
                                    <input type="number" placeholder="Phone Number" class="px-4 py-2 w-full sm:w-44 rounded-2xl  border-2  border-[#FBDFDB] bg-[#FFF5F3] text-[#002768]  text-start">
                                    </input>
                                </div>
                                <textarea   
                                    rows={4}
                                    placeholder="Write Message..."
                                    className="px-4 pb-18 w-full sm:w-92 rounded-2xl  border-2  border-[#FBDFDB] bg-[#FFF5F3] text-[#002768]  flex justify-start "
                                />

                                <div class="flex justify-center items-center ">
                                    <div class="flex justify-center items-center text-white py-1 px-10 mt-2 rounded-4xl bg-[#002768] cursor-pointer transform transition-transform duration-300 hover:scale-105">
                                        Send Message
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
