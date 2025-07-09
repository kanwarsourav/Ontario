import React from 'react';
import rating from '../assets/images/rating.png';
import aeroplane from '../assets/images/aeroplane.svg';
import globe from '../assets/images/globe.svg';
import process from '../assets/images/process.svg';
import bikefast from '../assets/images/bikefast.svg';
import support from '../assets/images/support.svg';

export default function WhyChooseUs() {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-12">
            <div className="flex flex-wrap gap-8 justify-center md:justify-between items-center">

                {/* Left image */}
                <div className="w-full md:w-[48%] flex justify-center">
                    <img src={rating} alt="Rating" className="max-w-full" />
                </div>

                {/* Right content */}
                <div className="w-full md:w-[48%] flex flex-col items-center gap-6 text-center md:text-left">

                    {/* Heading section */}
                    <div className="flex flex-col gap-2 pb-3 items-center md:items-start">
                        <h5 className="flex text-[#E64E37] justify-center items-center gap-2 font-medium">
                            <img src={aeroplane} alt="Aeroplane" className="w-5 h-5" />
                            Our Consultancy
                        </h5>
                        <h2 className="text-[32px] md:text-[40px] font-bold text-[#002768] leading-tight md:w-[90%]">
                            We ensure prompt services for visa & Immigration
                        </h2>
                    </div>

                    {/* Cards section */}
                    <div className="flex flex-col gap-6 w-full">

                        {/* First row */}
                        <div className="flex flex-wrap justify-center sm:flex-nowrap gap-6">
                            <div className="flex flex-col items-center sm:items-start gap-2 w-[50%]">
                                <img src={globe} alt="Globe Icon" />
                                <h4 className="font-bold text-[#002768]">Global Connection</h4>
                                <p className="text-sm text-center sm:text-left md:w-[80%]">
                                    A broad term for global interconnectedness and communication.
                                </p>
                            </div>
                            <div className="flex flex-col items-center sm:items-start gap-2 w-[50%]">
                                <img src={process} alt="Globe Icon" />
                                <h4 className="font-bold text-[#002768]">Expertise visa Processing</h4>
                                <p className="text-sm text-center sm:text-left md:w-[80%]">
                                    A broad term for global interconnectedness and communication.
                                </p>
                            </div>
                        </div>

                        {/* Second row */}
                        <div className="flex flex-wrap justify-center sm:flex-nowrap gap-6">
                            <div className="flex flex-col items-center sm:items-start gap-2 w-[50%]">
                                <img src={bikefast} alt="Globe Icon" />
                                <h4 className="font-bold text-[#002768]">Fastest Working Process
                                </h4>
                                <p className="text-sm text-center sm:text-left md:w-[80%]">
                                    A broad term for global interconnectedness and communication.
                                </p>
                            </div>
                            <div className="flex flex-col items-center sm:items-start gap-2 w-[50%]">
                                <img src={support} alt="Globe Icon" />
                                <h4 className="font-bold text-[#002768]">Expert Support Panel
                                </h4>
                                <p className="text-sm text-center sm:text-left md:w-[80%]">
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
