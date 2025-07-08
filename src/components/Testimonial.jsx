import React from 'react'
import aeroplane from '../assets/images/aeroplane.svg';

export default function Testimonial() {
    return (
        <>
            <div className="bg-[#F0F2F6">
                <div class="max-w-7xl m-auto px-4 md:px-2 py-12 ">
                    <div class="flex flex-col justify-center items-center gap-4">
                        <div className="flex justify-center items-center gap-2">
                            <img src={aeroplane} alt="Aeroplane" />
                            <h4 className="text-[#E64E37] text-lg font-medium">Clients Testimonials</h4>
                        </div>
                        <h2 class="text-[40px] font-bold text-[#002768] lg:w-[40%] text-center leading-none">What customers saying about The Ontario</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
