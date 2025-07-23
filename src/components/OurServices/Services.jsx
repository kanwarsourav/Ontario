import React from 'react';
import aeroplane from '../../assets/images/aeroplane.svg';
import workingvisa from '../../assets/images/workingvisa.svg';
import studentvisa from '../../assets/images/studentvisa.svg';
import touristsvisa from '../../assets/images/touristsvisa.svg';
import { FaSuitcase, FaPlane, FaGraduationCap, FaUserTie } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Services() {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-10">
            <div className="text-center mb-10 flex justify-center items-center flex-col">
                <h5 className="flex justify-center items-center gap-2 text-[#E64E37] text-sm font-medium">
                    <img src={aeroplane} alt="" className="w-4 h-4" />
                    Our Services
                </h5>
                <h2 className="text-[#002768] font-bold text-[32px] md:text-[40px] mt-1 md:w-[45%] leading-none">
                    Choose Your Required Services from our list
                </h2>
            </div>

            {/* Responsive Card Grid */}
            <div className="flex flex-wrap justify-center gap-6">
                {/* Card 1 */}
                <div className="w-full sm:w-[47%] lg:w-[23%] bg-white rounded-xl shadow-md overflow-hidden flex flex-col duration-300 hover:scale-105 transition-transform">
                    <Link to="/workvisa" >
                    <div className='p-2'>
                        <img src={workingvisa} alt="Working Visa" />
                    </div>
                    <div className="flex items-start justify-between p-4">
                        <div>
                            <h3 className="text-md font-semibold text-[#002768]">Working Visa</h3>
                            <p className="text-sm text-gray-500 mt-1">
                                A visa is a conditional permission provided by a region to a foreigner to enter.
                            </p>
                        </div>
                        <div className="bg-[#002768] text-white p-2 rounded-full -mt-11 mr-3">
                            <FaSuitcase size={20} />
                        </div>
                    </div>
                    <div className="p-4 pt-0  ">
                        
                        <button className="w-full bg-[#EF5533] text-white rounded-full py-2 text-sm font-semibold cursor-pointer">
                           Read More
                        </button>
                        
                    </div>
                    </Link>
                </div>

                {/* Card 2 */}
                <div className="w-full sm:w-[47%] lg:w-[23%] bg-white rounded-xl shadow-md overflow-hidden flex flex-col duration-300 hover:scale-105 transition-transform">
                    <Link to="/touristvisa" >
                    <div className='p-2'>
                        <img src={touristsvisa} alt="Tourists Visa" />
                    </div>
                    <div className="flex items-start justify-between p-4">
                        <div>
                            <h3 className="text-md font-semibold text-[#002768]">Tourists Visa</h3>
                            <p className="text-sm text-gray-500 mt-1">
                                A visa is a conditional permission provided by a region to a foreigner to enter.
                            </p>
                        </div>
                        <div className="bg-[#002768] text-white p-2 rounded-full -mt-11 mr-3">
                            <FaPlane size={20} />
                        </div>
                    </div>
                    <div className="p-4 pt-0">
                       
                        <button className="w-full bg-[#EF5533] text-white rounded-full py-2 text-sm font-semibold cursor-pointer">
                           Read More
                        </button>
                        
                    </div>
                    </Link>
                </div>

                {/* Card 3 */}
                <div className="w-full sm:w-[47%] lg:w-[23%] bg-white rounded-xl shadow-md overflow-hidden flex flex-col duration-300 hover:scale-105 transition-transform">
                    <Link to="/studentvisa" >
                    <div className='p-2'>
                        <img src={studentvisa} alt="Student Visa" />
                    </div>
                    <div className="flex items-start justify-between p-4">
                        <div>
                            <h3 className="text-md font-semibold text-[#002768]">Student Visa</h3>
                            <p className="text-sm text-gray-500 mt-1">
                                A visa is a conditional permission provided by a region to a foreigner to enter.
                            </p>
                        </div>
                        <div className="bg-[#002768] text-white p-2 rounded-full -mt-11 mr-3">
                            <FaGraduationCap size={20} />
                        </div>
                    </div>
                    <div className="p-4 pt-0">
                       
                        <button className="w-full bg-[#EF5533] text-white rounded-full py-2 text-sm font-semibold cursor-pointer">
                           Read More
                        </button>
                        
                    </div>
                    </Link>
                </div>

                {/* Card 4 */}
                <div className="w-full sm:w-[47%] lg:w-[23%] bg-white rounded-xl shadow-md overflow-hidden flex flex-col duration-300 hover:scale-105 transition-transform">
                    <Link to="/businessvisa" >
                    <div className='p-2'>
                        <img src={workingvisa} alt="Business Visa" />
                    </div>
                    <div className="flex items-start justify-between p-4">
                        <div>
                            <h3 className="text-md font-semibold text-[#002768]">Business Visa</h3>
                            <p className="text-sm text-gray-500 mt-1">
                                A visa is a conditional permission provided by a region to a foreigner to enter.
                            </p>
                        </div>
                        <div className="bg-[#002768] text-white p-2 rounded-full -mt-11 mr-3">
                            <FaUserTie size={20} />
                        </div>
                    </div>
                    <div className="p-4 pt-0">
                        
                        <button className="w-full bg-[#EF5533] text-white rounded-full py-2 text-sm font-semibold cursor-pointer">
                           Read More
                        </button>
                        
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
