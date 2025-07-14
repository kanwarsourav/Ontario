import React, { useState, useEffect } from 'react';
import consultancy from '../assets/images/consultancybg.svg';
import aeroplane2 from '../assets/images/aeroplane2.svg';
import whitecircle from '../assets/images/whitecircle.svg';
import signing from '../assets/images/signing.svg';
import givingvisa from '../assets/images/givingvisa.svg';
import flyaero from '../assets/images/flyaero.svg';

export default function OurConsultancy() {
  const [openSection, setOpenSection] = useState(null);

  // Load from localStorage on mount
  useEffect(() => {
    const savedSection = localStorage.getItem('openSection');
    if (savedSection) {
      setOpenSection(savedSection);
    } else {
      // Optional: default to 'visa' if no previous value
      setOpenSection('visa');
    }
  }, []);

  // Update localStorage on change
  const toggleSection = (section) => {
    const newSection = openSection === section ? null : section;
    setOpenSection(newSection);
    localStorage.setItem('openSection', newSection || '');
  };

  return (
    <div
      className="bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${consultancy})` }}
    >
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
          <div className="flex p-1 gap-1.5 mt-4 md:border md:border-white rounded-4xl justify-center md:justify-between flex-col sm:flex-row md:flex-nowrap">
            {/* Apply Visa Online */}
            <button
              onClick={() => toggleSection('visa')}
              className={`flex py-1 px-10 text-sm rounded-4xl font-semibold cursor-pointer justify-center items-center transition-colors duration-200
                ${openSection === 'visa' ? 'bg-[#E64E37] text-white' : 'bg-white text-[#002768]'}`}
            >
              Apply Visa Online
            </button>

            {/* Important Information */}
            <button
              onClick={() => toggleSection('info')}
              className={`flex py-1 px-6 text-sm rounded-4xl font-semibold cursor-pointer justify-center items-center transition-colors duration-200
                ${openSection === 'info' ? 'bg-[#E64E37] text-white' : 'bg-white text-[#002768]'}`}
            >
              Important Information
            </button>

            {/* Immigration Resources */}
            <button
              onClick={() => toggleSection('resources')}
              className={`flex py-1 px-6 text-sm rounded-4xl font-semibold cursor-pointer justify-center items-center transition-colors duration-200
                ${openSection === 'resources' ? 'bg-[#E64E37] text-white' : 'bg-white text-[#002768]'}`}
            >
              Immigration Resources
            </button>
          </div>

          {/* Toggleable Descriptions */}
          {openSection === 'visa' && (
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
          )}
          {openSection === 'info' && (
            <div className="flex flex-col gap-2 mt-4">
              <h5 className="flex text-white gap-2 font-medium">
                <img src={whitecircle} alt="" /> Expert-Led Guidance.
              </h5>
              <h5 className="flex text-white gap-2 font-medium">
                <img src={whitecircle} alt="" /> Up-to-Date Visa Regulations.
              </h5>
              <h5 className="flex text-white gap-2 font-medium">
                <img src={whitecircle} alt="" /> Tailored Advice.
              </h5>
            </div>
          )}
          {openSection === 'resources' && (
            <div className="flex flex-col gap-2 mt-4">
              <h5 className="flex text-white gap-2 font-medium">
                <img src={whitecircle} alt="" /> Visa Guides & Checklists.
              </h5>
              <h5 className="flex text-white gap-2 font-medium">
                <img src={whitecircle} alt="" /> Legal Insights.
              </h5>
              <h5 className="flex text-white gap-2 font-medium">
                <img src={whitecircle} alt="" /> Document Templates.
              </h5>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6 lg:w-[50%] justify-center items-center">
          <img src={signing} alt="" className="rounded-2xl" />
          <div className="hidden gap-6 md:flex justify-center md:justify-between items-center">
            <img src={givingvisa} alt="" className="rounded-2xl" />
            <img src={flyaero} alt="" className="rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
