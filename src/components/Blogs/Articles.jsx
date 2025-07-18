import React from 'react'
import passport from '../../assets/images/passport.svg';
import indianman from '../../assets/images/indianman.svg';
import together from '../../assets/images/together.svg';
import { Link } from 'react-router-dom';


export default function Articles() {
    return (
        <>
            <div>
                <div className='max-w-7xl mx-auto px-4 md:px-12 py-20 flex flex-col flex-wrap lg:flex-nowrap gap-y-5'>
                    <div className='flex justify-center items-center flex-wrap mx-auto md:flex-nowrap  gap-5 lg:gap-20 '>
                        <div className='flex flex-col justify-center cursor-pointer transform transition-transform duration-300 hover:scale-105 '>
                            <Link to="/blogdetails" className="cursor-pointer">
                                <div className='flex  '>
                                    <img src={passport} alt="" />
                                </div>
                                <div className='flex'>
                                    <h5 className='text-[#E64E37] font-semibold'>Immigration Visa </h5><span className='text-[#002768]' > - 22 min read </span>
                                </div>
                                <p className=' text-[18px] font-semibold w-[80%] text-[#002768]'>What visa do you need to work legally in Singapore?</p>
                            </Link>
                        </div>
                        <div className='flex flex-col cursor-pointer transform transition-transform duration-300 hover:scale-105'>
                            <Link to="/blogdetails" className="cursor-pointer">
                                <div>
                                    <img src={indianman} alt="" />
                                </div>
                                <div className='flex'>
                                    <h5 className='text-[#E64E37] font-semibold'>Working Visa </h5><span className='text-[#002768]' > - 8 min read  </span>
                                </div>
                                <p className=' text-[18px] font-semibold w-[80%] text-[#002768]'>What visa do you need to work legally in Singapore?</p>
                            </Link>
                        </div>
                        <div className='flex flex-col cursor-pointer transform transition-transform duration-300 hover:scale-105'>
                            <Link to="/blogdetails" className="cursor-pointer">
                                <div className='flex'>
                                    <img src={together} alt="" />
                                </div>
                                <div className='flex'>
                                    <h5 className='text-[#E64E37] font-semibold'>PR Visa </h5><span className='text-[#002768]' > - 6 hours read </span>
                                </div>
                                <p className=' text-[18px] font-semibold w-[80%] text-[#002768]'>What visa do you need to work legally in Singapore?</p>
                            </Link>
                        </div>

                    </div>
                    <div className='flex justify-center items-center flex-wrap mx-auto md:flex-nowrap  gap-5 lg:gap-20 '>
                        <div className='flex flex-col justify-center cursor-pointer transform transition-transform duration-300 hover:scale-105 '>
                            <Link to="/blogdetails" className="cursor-pointer">
                                <div className='flex  '>
                                    <img src={passport} alt="" />
                                </div>
                                <div className='flex'>
                                    <h5 className='text-[#E64E37] font-semibold'>Immigration Visa </h5><span className='text-[#002768]' > - 22 min read </span>
                                </div>
                                <p className=' text-[18px] font-semibold w-[80%] text-[#002768]'>What visa do you need to work legally in Singapore?</p>
                            </Link>
                        </div>
                        <div className='flex flex-col cursor-pointer transform transition-transform duration-300 hover:scale-105'>
                            <Link to="/blogdetails" className="cursor-pointer">
                                <div>
                                    <img src={indianman} alt="" />
                                </div>
                                <div className='flex'>
                                    <h5 className='text-[#E64E37] font-semibold'>Working Visa </h5><span className='text-[#002768]' > - 8 min read  </span>
                                </div>
                                <p className=' text-[18px] font-semibold w-[80%] text-[#002768]'>What visa do you need to work legally in Singapore?</p>
                            </Link>
                        </div>
                        <div className='flex flex-col cursor-pointer transform transition-transform duration-300 hover:scale-105'>
                            <Link to="/blogdetails" className="cursor-pointer">
                                <div className='flex'>
                                    <img src={together} alt="" />
                                </div>
                                <div className='flex'>
                                    <h5 className='text-[#E64E37] font-semibold'>PR Visa </h5><span className='text-[#002768]' > - 6 hours read </span>
                                </div>
                                <p className=' text-[18px] font-semibold w-[80%] text-[#002768]'>What visa do you need to work legally in Singapore?</p>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
