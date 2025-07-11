import React from 'react'
import aeroplane from '../assets/images/aeroplane.svg';
import passport from '../assets/images/passport.svg';
import indianman from '../assets/images/indianman.svg';
import together from '../assets/images/together.svg';

export default function Blogs() {
    return (
        <>
            <div>
                <div className='max-w-7xl mx-auto px-4 md:px-12 py-20 flex flex-col flex-wrap lg:flex-nowrap gap-y-5'>
                    <div className=" flex flex-col justify-center items-center text-center mb-5">
                        <h4 className="flex gap-1 text-[#E64E37] text-lg font-medium"> <div>
                            <img src={aeroplane} alt="" />
                        </div>Latest Blogs</h4>
                        <h2 className=" text-[36px] font-bold text-[#002768]  leading-tight">
                            News & Updates
                        </h2>
                    </div>
                    <div className='flex justify-center items-center flex-wrap mx-auto md:flex-nowrap  gap-5 md:gap-20 '>
                        <div className='flex flex-col justify-center cursor-pointer transform transition-transform duration-300 hover:scale-105 '>
                            <div className='flex  '>
                                <img src={passport} alt=""  />
                            </div>
                            <div className='flex'>
                            <h5 className='text-[#E64E37] font-semibold'>Immigration Visa </h5><span className='text-[#002768]' > - 22 min read </span>
                            </div>
                            <p className=' text-[18px] font-semibold w-[80%] text-[#002768]'>What visa do you need to work legally in Singapore?</p>
                        </div>
                        <div className='flex flex-col cursor-pointer transform transition-transform duration-300 hover:scale-105'>
                            <div>
                                <img src={indianman} alt=""  />
                            </div>
                            <div className='flex'>
                            <h5 className='text-[#E64E37] font-semibold'>Working Visa </h5><span className='text-[#002768]' > - 8 min read  </span>
                            </div>
                            <p className=' text-[18px] font-semibold w-[80%] text-[#002768]'>What visa do you need to work legally in Singapore?</p>
                        </div>
                        <div className='flex flex-col cursor-pointer transform transition-transform duration-300 hover:scale-105'>
                            <div className='flex'>
                                <img src={together} alt="" />
                            </div>
                            <div className='flex'>
                            <h5 className='text-[#E64E37] font-semibold'>PR Visa </h5><span className='text-[#002768]' > - 6 hours read </span>
                            </div>
                            <p className=' text-[18px] font-semibold w-[80%] text-[#002768]'>What visa do you need to work legally in Singapore?</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
