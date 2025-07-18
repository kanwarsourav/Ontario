import React from 'react';
import consultbg from '../../assets/images/consultbg.svg';
import star from '../../assets/images/star.svg';
import halfstar from '../../assets/images/halfstar.svg';
import girl from '../../assets/images/chooseus.png';

import aeroplane from '../../assets/images/aeroplane.svg';
import globe from '../../assets/images/globe.svg';
import process from '../../assets/images/process.svg';
import bikefast from '../../assets/images/bikefast.svg';
import support from '../../assets/images/support.svg';

export default function WhyChooseUs() {
    return (
        <div className="max-w-7xl mx-auto px-4  lg:px-10 xl:px-16 2xl:px-20 py-10">
            <div className="flex flex-wrap gap-12 justify-center lg:justify-between items-center">

                {/* LEFT: Rating Card */}
                <div className="relative  md:w-[50%] lg:w-[40%] xl:w-[38%] flex justify-center items-center lg:justify-start">
                    <div
                        className="relative rounded-2xl overflow-hidden shadow-lg pt-8 pb-20 px-6 text-white flex flex-col items-start bg-cover bg-center w-full max-w-[400px] min-h-[480px]"
                        style={{ backgroundImage: `url(${consultbg})` }}
                    >
                        <div className='flex flex-col justify-center items-center'>
                        {/* Tag */}
                        <span className="bg-white text-[#002768] font-semibold text-sm px-4 py-1 rounded-full mb-4">
                            Creating Great Opportunities
                        </span>

                        {/* Title */}
                        <h3 className="text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px] font-bold text-center leading-snug w-[90%] mb-32">
                            We help Making your dream into Reality
                        </h3>
</div>
                        {/* Rating + Avatars */}
                        <div className="flex items-center gap-4 mb-4">
                            <div className="text-[30px] sm:text-[36px] lg:text-[40px] font-bold text-white">4.6</div>
                            <div className="flex items-center -space-x-3">
                                <img
                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                    alt="avatar1"
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white"
                                />
                                <img
                                    src="https://randomuser.me/api/portraits/women/44.jpg"
                                    alt="avatar2"
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white"
                                />
                                <img
                                    src="https://randomuser.me/api/portraits/men/56.jpg"
                                    alt="avatar3"
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white"
                                />
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#002768] text-white flex items-center justify-center text-xs font-bold border-2 border-white">
                                    12+
                                </div>
                            </div>
                        </div>

                        {/* Star Rating */}
                        <div className="flex gap-1">
                            <img src={star} alt="star" className="w-5 h-5" />
                            <img src={star} alt="star" className="w-5 h-5" />
                            <img src={star} alt="star" className="w-5 h-5" />
                            <img src={star} alt="star" className="w-5 h-5" />
                            <img src={halfstar} alt="half star" className="w-5 h-5" />
                        </div>
                    </div>

                    {/* Overlapping Girl Image */}
                    <img
                        src={girl}
                        alt="girl"
                        className="absolute bottom-[-2px] sm:bottom-[-4px] right-[-30px] sm:right-[-10px] md:right-[-100px] lg:right-[-40px] w-[180px]  sm:w-[250px] md:w-[250px] lg:w-[250px] z-10"
                    />
                </div>

                {/* RIGHT: Features Section */}
                <div className="w-full md:w-[80%] lg:w-[48%] flex flex-col items-center gap-6 text-center md:text-left">
                    <div className="flex flex-col gap-2 pb-3 items-center md:items-start">
                        <h5 className="flex text-[#E64E37] justify-center items-center gap-2 font-medium">
                            <img src={aeroplane} alt="Aeroplane" className="w-5 h-5" />
                            Why choose us
                        </h5>
                        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold text-[#002768] leading-tight md:w-[90%]">
                            We ensure prompt services for visa & Immigration
                        </h2>
                    </div>

                    <div className="flex flex-col gap-6 w-full">
                        <div className="flex   sm:justify-start gap-6">
                            <div className="flex flex-col items-center sm:items-start gap-2 w-[100%] sm:w-[48%]">
                                <img src={globe} alt="Globe Icon" />
                                <h4 className="font-bold text-[#002768]">Global Connection</h4>
                                <p className="text-sm w-[100%] md:w-[80%] text-center sm:text-left">
                                    A broad term for global interconnectedness and communication.
                                </p>
                            </div>
                            <div className="flex flex-col items-center sm:items-start gap-2 w-[100%] sm:w-[48%]">
                                <img src={process} alt="Process Icon" />
                                <h4 className="font-bold text-[#002768]">Expertise visa Processing</h4>
                                <p className="text-sm w-[100%] md:w-[80%] text-center sm:text-left">
                                    A broad term for global interconnectedness and communication.
                                </p>
                            </div>
                        </div>
                        <div className="flex  sm:justify-start gap-6">
                            <div className="flex flex-col items-center sm:items-start gap-2 w-[100%] sm:w-[48%]">
                                <img src={bikefast} alt="Bike Icon" />
                                <h4 className="font-bold text-[#002768]">Fastest Working Process</h4>
                                <p className="text-sm w-[100%] md:w-[80%] text-center sm:text-left">
                                    A broad term for global interconnectedness and communication.
                                </p>
                            </div>
                            <div className="flex flex-col items-center sm:items-start gap-2 w-[100%] sm:w-[48%]">
                                <img src={support} alt="Support Icon" />
                                <h4 className="font-bold text-[#002768]">Expert Support Panel</h4>
                                <p className="text-sm w-[100%] md:w-[80%] text-center sm:text-left">
                                    A broad term for global interconnectedness and communication.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
