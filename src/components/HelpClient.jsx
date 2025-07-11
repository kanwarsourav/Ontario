import React from 'react';
import aeroplane from '../assets/images/aeroplane.svg';
import laptop from '../assets/images/laptopworking.svg';
import aeroplane1 from '../assets/images/aeroplane1.svg';
import student from '../assets/images/student.svg';
import business from '../assets/images/business.svg';

export default function HelpClient() {
    return (
        <>
            <div>
                <div className="max-w-7xl m-auto px-4 md:px-12 my-2 flex flex-col flex-wrap">
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="flex">
                            <img src={aeroplane} alt="Aeroplane" />
                        </div>
                        <h4 className="text-[#E64E37] text-lg font-medium">How We Help Clients</h4>
                        <h2 className="text-[40px] font-bold text-[#002768] lg:w-[40%]  leading-none">
                            Level with great visa serving polices
                        </h2>
                    </div>

                    <div className="flex flex-wrap justify-center  lg:justify-between gap-y-6 pb-6 mx-8 md:mx-0  mt-4  ">
                        <div className=" lg:w-[21%] bg-[#F0F2F6] flex justify-center p-5 pt-8 rounded-2xl flex-col transform transition-transform duration-300 hover:scale-105">
                            <div className="w-8 mb-2">
                                <img src={laptop} alt="Laptop Working" />
                            </div>
                            <h4 className="font-semibold text-xl text-[#002768] pb-1">Working Visa</h4>
                            <p className="text-[#002768] text-sm">
                                A visa is a conditional permission provided by a region to a foreigner to entry.
                            </p>
                            <div className="flex">
                                <div className="flex text-white py-1 px-6 mt-4 text-sm rounded-4xl bg-[#002768] hover:bg-[#E64E37] cursor-pointer">
                                    Read More
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-[21%] bg-[#FDF2F0] flex justify-center items-start p-5 pt-8 rounded-2xl flex-col transform transition-transform duration-300 hover:scale-105">
                            <div className="w-8 mb-2">
                                <img src={aeroplane1} alt="Aeroplane Icon" />
                            </div>
                            <h4 className="font-semibold text-xl text-[#E64E37] pb-1">Tourists Visa</h4>
                            <p className="text-[#002768] text-sm">
                                A visa is a conditional permission provided by a region to a foreigner to entry.
                            </p>
                            <div className="flex">
                                <div className="flex text-white py-1 px-6 mt-4 text-sm rounded-4xl bg-[#002768] hover:bg-[#E64E37] cursor-pointer">
                                    Read More
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-[21%] bg-[#F0F2F6] flex justify-center p-5 pt-8 rounded-2xl flex-col transform transition-transform duration-300 hover:scale-105">
                            <div className="w-8 mb-2">
                                <img src={student} alt="Student Icon" />
                            </div>
                            <h4 className="font-semibold text-xl text-[#002768] pb-1">Student Visa</h4>
                            <p className="text-[#002768] text-sm">
                                A visa is a conditional permission provided by a region to a foreigner to entry.
                            </p>
                            <div className="flex">
                                <div className="flex text-white py-1 px-6 mt-4 text-sm rounded-4xl bg-[#002768] hover:bg-[#E64E37] cursor-pointer">
                                    Read More
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-[21%] bg-[#FDF2F0] flex justify-center p-5 pt-8 rounded-2xl flex-col transform transition-transform duration-300 hover:scale-105">
                            <div className="w-8 mb-2">
                                <img src={business} alt="Business Icon" />
                            </div>
                            <h4 className="font-semibold text-xl text-[#E64E37] pb-1">Business Visa</h4>
                            <p className="text-[#002768] text-sm">
                                A visa is a conditional permission provided by a region to a foreigner to entry.
                            </p>
                            <div className="flex">
                                <div className="flex text-white py-1 px-6 mt-4 text-sm rounded-4xl bg-[#002768] hover:bg-[#E64E37] cursor-pointer">
                                    Read More
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
