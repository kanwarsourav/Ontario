import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import footerbg from '../assets/images/footerbg.svg';
import circlefb from '../assets/images/circlefb.svg';
import circleinsta from '../assets/images/circleinsta.svg';
import circlein from '../assets/images/circlein.svg';
import orangeaeroplane from '../assets/images/orangeaeroplane.svg';

export default function Footer() {
  const [activeLink, setActiveLink] = useState(null);
  const isActive = (label) => activeLink === label;

  return (
    <>
      <div
        className="bg-cover bg-center h-full w-full bg-[#002768]"
        style={{ backgroundImage: `url(${footerbg})` }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-14 py-10  flex-wrap lg:flex-nowrap gap-4 lg:gap-0 flex md:justify-between">

          {/* Logo Section */}
          <div className="flex flex-col gap-6 lg:w-[24%]">
            <div>
              <Link to="/" className="cursor-pointer">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <p className="text-white w-[75%] md:w-[60%] lg:w-[75%]">
              Open doors to international opportunities and grow your career without borders.
            </p>
            <div className="flex gap-4">
              <img src={circlefb} alt="Facebook" className="cursor-pointer hover:scale-115 transition-transform duration-300" />
              <img src={circleinsta} alt="Instagram" className="cursor-pointer hover:scale-115 transition-transform duration-300" />
              <img src={circlein} alt="LinkedIn" className="cursor-pointer hover:scale-115 transition-transform duration-300" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-[50%] md:w-[25%] lg:w-[17%]">
            <h3 className="text-white font-semibold text-[22px]">Quick Links</h3>
            <ul className="flex flex-col gap-2 mt-2 md:mt-4">
              <li onClick={() => setActiveLink('About Us')} className="text-white flex gap-1 items-center text-[18px] cursor-pointer">
                <img src={orangeaeroplane} alt="" />
                <span className="relative group">
                  <Link to="/about" className="cursor-pointer">About Us</Link>
                  <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-white transition-all duration-300 ${isActive('About Us') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </span>
              </li>

              <li onClick={() => setActiveLink('Blogs')} className="text-white flex gap-1 items-center text-[18px] cursor-pointer">
                <img src={orangeaeroplane} alt="" />
                <span className="relative group">
                  <Link to="/blogs" className="cursor-pointer">Blogs</Link>
                  <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-white transition-all duration-300 ${isActive('Blogs') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </span>
              </li>

              <li onClick={() => setActiveLink('Contact Us')} className="text-white flex gap-1 items-center text-[18px] cursor-pointer">
                <img src={orangeaeroplane} alt="" />
                <span className="relative group cursor-pointer">
                  <Link to="/contactus" className="cursor-pointer">Contact Us</Link>
                  <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-white transition-all duration-300 ${isActive('Contact Us') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </span>
              </li>

            </ul>
          </div>

          {/* Our Services */}
          <div className=" md:w-[25%] lg:w-[17%]">
            <h3 className="text-white font-semibold text-[22px]">Our Services</h3>
            <ul className="flex flex-col gap-2 mt-2 md:mt-4">
              <li onClick={() => setActiveLink('Work Visa')} className="text-white flex gap-1 items-center text-[18px] cursor-pointer">
                <img src={orangeaeroplane} alt="" />
                <span className="relative group">
                  <Link to="/workvisa" className="cursor-pointer">Work Visa</Link>
                  <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-white transition-all duration-300 ${isActive('Work Visa') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </span>
              </li>
              <li onClick={() => setActiveLink('Tourist Visa')} className="text-white flex gap-1 items-center text-[18px] cursor-pointer">
                <img src={orangeaeroplane} alt="" />
                <span className="relative group">
                  <Link to="/touristvisa" className="cursor-pointer">Tourist Visa</Link>
                  <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-white transition-all duration-300 ${isActive('Tourist Visa') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </span>
              </li>
              <li onClick={() => setActiveLink('Student Visa')} className="text-white flex gap-1 items-center text-[18px] cursor-pointer">
                <img src={orangeaeroplane} alt="" />
                <span className="relative group">
                  <Link to="/studentvisa" className="cursor-pointer">Student Visa</Link>
                  <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-white transition-all duration-300 ${isActive('Student Visa') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </span>
              </li>
              <li onClick={() => setActiveLink('Business Visa')} className="text-white flex gap-1 items-center text-[18px] cursor-pointer">
                <img src={orangeaeroplane} alt="" />
                <span className="relative group">
                  <Link to="/businessvisa" className="cursor-pointer">Business Visa</Link>
                  <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-white transition-all duration-300 ${isActive('Business Visa') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:w-[30%] lg:w-[27%]">
            <h3 className="text-white font-semibold text-[22px]">Subscribe Our Newsletter</h3>
            <p className="text-white w-[90%] mt-2">
              Enter your email address to get latest updates and offers from us.
            </p>
            <div className="relative w-full sm:w-60 mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 pr-10 w-full border-2 border-[#FBDFDB] bg-[#FFF5F3] text-[#002768] rounded"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#002768] cursor-pointer">
                ➔
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#E64E37] flex justify-center items-center py-1 text-white">
        <h4>Copyright © 2025 All Rights Reserved.</h4>
      </div>
    </>
  );
}
