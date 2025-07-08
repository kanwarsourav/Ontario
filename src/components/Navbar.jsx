import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import arrow from '../assets/images/arrowdown.svg';
import call from '../assets/images/call.svg';
import menuIcon from '../assets/images/menu.svg';
import closeIcon from '../assets/images/close.svg';
import '../App.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-3 flex justify-between items-center">
       
        <div class="cursor-pointer">
          <img src={logo} alt="Logo"  />
        </div>

       
        <ul className="hidden md:flex items-center gap-10 text-[#002768] font-medium">
          <li class="cursor-pointer">Home</li>
          <li class="cursor-pointer">About Us</li>
          <li className="flex items-center gap-1 cursor-pointer">
            Our Services <img src={arrow} alt="" />
          </li>
          <li class="cursor-pointer">Blog</li>
          <li class="cursor-pointer">Our Team</li>
        </ul>

       
        <div className="hidden md:flex items-center gap-2 text-[#002768]">
          <img src={call} alt="Call"  />
          <div>
            <h5 className="text-sm">Call Us Now</h5>
            <h5 className="font-semibold">+91 8699964265</h5>
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src={isOpen ? closeIcon : menuIcon} alt="Menu" className="w-6" />
          </button>
        </div>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow">
          <ul className="flex flex-col gap-4 text-[#002768] font-medium cursor-pointer">
            <li class="cursor-pointer">Home</li>
            <li class="cursor-pointer">About Us</li>
            <li className="flex items-center gap-1">Our Services <img src={arrow} alt="" /></li>
            <li class="cursor-pointer">Blog</li>
            <li class="cursor-pointer">Our Team</li>
            <li className="flex items-center gap-2 pt-2 border-t mt-2 ">
              <img src={call} alt="Call"  />
              <div>
                <h5 className="text-sm">Call Us Now</h5>
                <h5 className="font-semibold text-sm">+91 8699964265</h5>
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
