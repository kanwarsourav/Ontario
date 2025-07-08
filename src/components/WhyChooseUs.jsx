import React from 'react'
import rating from '../assets/images/rating.png';
import aeroplane from '../assets/images/aeroplane.svg';
import globe from '../assets/images/globe.svg';

export default function WhyChooseUs() {
    return (
        <>
            <div>
                <div className='max-w-7xl mx-auto px-4 md:px-12 py-20 flex'>
                    <div className=' '>
                        <img src={rating} alt="" />
                    </div>
                    <div>
                        <div className='flex flex-col gap-2'>
                            <h5 class="flex text-[#E64E37] gap-1 font-medium"><img src={aeroplane} alt="" />Our Consultancy</h5>
                            <h2 className='text-[40px] font-bold text-[#002768] md:w-[80%] leading-none'>We ensure prompt services for visa & Immigration</h2>
                        </div>
                        <div>
                            <div className='flex'>
                                <div>
                                    <div>
                                        <img src={globe} alt="" />
                                    </div>
                                    <h4 className='font-bold'>Global Connection</h4>
                                    <p className='w-[70%]'>A broad term for global interconnectedness and communication.</p>
                                </div>
                                <div>
                                    <div>
                                        <img src={globe} alt="" />
                                    </div>
                                    <h4 className='font-bold'>Global Connection</h4>
                                    <p className='w-[70%]'>A broad term for global interconnectedness and communication.</p>
                                </div>
                                
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
