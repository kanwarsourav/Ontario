import React from 'react'
import consultancy from '../assets/images/consultancybg.svg';
import aeroplane2 from '../assets/images/aeroplane2.svg';
import whitecircle from '../assets/images/whitecircle.svg';
import signing from '../assets/images/signing.svg';
import givingvisa from '../assets/images/givingvisa.svg';
import flyaero from '../assets/images/flyaero.svg';
export default function OurConsultancy() {
    return (
        <>
            <div class=" bg-cover bg-center h-full w-full   "
                style={{ backgroundImage: `url(${consultancy})` }}>
                <div class="max-w-7xl mx-auto  px-4 md:px-12 py-20 flex flex-wrap justify-center md:justify-start gap-4 lg:gap-0">
                    <div class="flex flex-col gap-3 lg:w-[50%] justify-center items-start">
                        <h5 class="flex text-white gap-1 font-medium"><img src={aeroplane2} alt="" />Our Consultancy</h5>
                        <h2 class="text-[40px] font-bold text-white leading-none">Unparalleled consultancy from experienced lawyer</h2>
                        <div className="flex p-1 border-1 gap-1.5 mt-4 border-white rounded-4xl justify-between items-center">
                            <div className="flex text-white py-1  px-6 text-sm rounded-4xl font-semibold bg-[#E64E37] cursor-pointer">
                                Apply Visa Online
                            </div>
                            <div className="flex text-[#002768] py-1 px-6  text-sm rounded-4xl font-semibold bg-white cursor-pointer">
                                Important information
                            </div>
                            <div className="flex text-[#002768] py-1 px-6  text-sm rounded-4xl font-semibold bg-white cursor-pointer">
                                Immigration Resources
                            </div>
                        </div>
                        <div class="flex flex-col gap-2 mt-2">
                            <h5 class="flex text-white gap-2 font-medium"><img src={whitecircle} alt="" />Personal information is protected.</h5>
                            <h5 class="flex text-white gap-2 font-medium"><img src={whitecircle} alt="" />Monitor your progress.</h5>
                            <h5 class="flex text-white gap-2 font-medium"><img src={whitecircle} alt="" />User-friendly experience start.</h5>
                        </div>
                    </div>
                    <div class="flex flex-col gap-6 lg:w-[50%] justify-center items-center">
                        <div>
                            <div>
                                <img src={signing} alt="" class="rounded-2xl" />
                            </div>
                        </div>
                        <div class="flex gap-6 justify-between items-center ">
                            <div>
                                <img src={givingvisa} alt="" class="rounded-2xl" />
                            </div>
                            <div>
                                <img src={flyaero} alt="" class="rounded-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
