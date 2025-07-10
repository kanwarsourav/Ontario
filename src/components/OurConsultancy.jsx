import React, { useState } from 'react';
import consultancy from '../assets/images/consultancybg.svg';
import aeroplane2 from '../assets/images/aeroplane2.svg';
import whitecircle from '../assets/images/whitecircle.svg';
import signing from '../assets/images/signing.svg';
import givingvisa from '../assets/images/givingvisa.svg';
import flyaero from '../assets/images/flyaero.svg';

export default function OurConsultancy() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(prev => (prev === section ? null : section));
    };

    return (
        <div className="bg-cover bg-center w-full"
            style={{ backgroundImage: `url(${consultancy})` }}>
            <div className="max-w-7xl mx-auto px-4 md:px-12 py-20 flex flex-wrap justify-center md:justify-start gap-4 lg:gap-0">

                {/* Left Section */}
                <div className="flex flex-col gap-3 lg:w-[50%] justify-center items-start">
                    <h5 className="flex text-white gap-1 font-medium">
                        <img src={aeroplane2} alt="" /> Our Consultancy
                    </h5>
                    <h2 className="text-[40px] font-bold text-white leading-none">
                        Unparalleled consultancy from experienced lawyer
                    </h2>

                    {/* Toggle Buttons */}
                    <div className="flex p-1 border gap-1.5 mt-4 border-white rounded-4xl justify-center md:justify-between flex-wrap md:flex-nowrap items-center">
                        <div
                            className="flex text-white py-1 px-6 text-sm rounded-4xl font-semibold bg-[#E64E37] cursor-pointer"
                            onClick={() => toggleSection('visa')}>
                            Apply Visa Online
                        </div>
                        <div
                            className="flex text-[#002768] py-1 px-6 text-sm rounded-4xl font-semibold bg-white cursor-pointer"
                            onClick={() => toggleSection('info')}>
                            Important Information
                        </div>
                        <div
                            className="flex text-[#002768] py-1 px-6 text-sm rounded-4xl font-semibold bg-white cursor-pointer"
                            onClick={() => toggleSection('resources')}>
                            Immigration Resources
                        </div>
                    </div>

                    {/* Toggleable Descriptions */}
                    {openSection === 'visa' && (
                        <p className="mt-4 text-white text-sm bg-[#ffffff1a] p-4 rounded-xl w-[86%]">
                            Start your visa application online with a simple and secure form. Upload your documents and get real-time updates.
                        </p>
                    )}
                    {openSection === 'info' && (
                        <p className="mt-4 text-white text-sm bg-[#ffffff1a] p-4 rounded-xl w-[86%]">
                            Get all the latest updates about visa policies, travel restrictions, and government advisories.
                        </p>
                    )}
                    {openSection === 'resources' && (
                        <p className="mt-4 text-white text-sm bg-[#ffffff1a] p-4 rounded-xl w-[86%]">
                            Access comprehensive immigration guides, document checklists, and country-specific visa requirements.
                        </p>
                    )}

                    {/* Features */}
                    <div className="flex flex-col gap-2 mt-4">
                        <h5 className="flex text-white gap-2 font-medium">
                            <img src={whitecircle} alt="" /> Personal information is protected.
                        </h5>
                        <h5 className="flex text-white gap-2 font-medium">
                            <img src={whitecircle} alt="" /> Monitor your progress.
                        </h5>
                        <h5 className="flex text-white gap-2 font-medium">
                            <img src={whitecircle} alt="" /> User-friendly experience start.
                        </h5>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-col gap-6 lg:w-[50%] justify-center items-center">
                    <img src={signing} alt="" className="rounded-2xl" />
                    <div className="flex gap-6 flex-wrap md:flex-nowrap justify-center md:justify-between items-center">
                        <img src={givingvisa} alt="" className="rounded-2xl" />
                        <img src={flyaero} alt="" className="rounded-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
}
