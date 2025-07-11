import React, { useState } from 'react';
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
        <div className="max-w-7xl mx-auto px-4 md:px-14 py-10 flex-wrap lg:flex-nowrap gap-4 lg:gap-0 flex justify-between">
          {/* Logo Section */}
          <div className="flex flex-col gap-6 lg:w-[24%]">
            <div>
            <img src={logo} alt="" />
            </div>
            <p className="text-white w-[75%]">
              Open doors to international opportunities and grow your career without borders.
            </p>
            <div className="flex gap-4">
              <img
                src={circlefb}
                alt=""
                className="cursor-pointer transform transition-transform duration-300 hover:scale-115"
              />
              <img
                src={circleinsta}
                alt=""
                className="cursor-pointer transform transition-transform duration-300 hover:scale-115"
              />
              <img
                src={circlein}
                alt=""
                className="cursor-pointer transform transition-transform duration-300 hover:scale-115"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:w-[17%]">
            <h3 className="text-white font-semibold text-[22px]">Quick Links</h3>
            <ul className="flex flex-col gap-2 mt-2 md:mt-4">
              {['About Us', 'Our Team', 'Contact Us', 'Blogs'].map((label) => (
                <li
                  key={label}
                  className="text-white flex gap-1 text-[18px] items-center cursor-pointer"
                  onClick={() => setActiveLink(label)}
                >
                  <div>
                    <img src={orangeaeroplane} alt="" />
                  </div>
                  <span className="relative group">
                    {label}
                    <span
                      className={`
                        absolute left-0 -bottom-0.5 h-[2px] bg-white transition-all duration-300
                        ${isActive(label) ? 'w-full' : 'w-0 group-hover:w-full'}
                      `}
                    ></span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:w-[17%]">
            <h3 className="text-white font-semibold text-[22px]">Our Services</h3>
            <ul className="flex flex-col gap-2 mt-2 md:mt-4">
              {['Work Visa', 'Tourist Visa', 'Student Visa', 'Business Visa'].map((label) => (
                <li
                  key={label}
                  className="text-white flex gap-1 text-[18px] items-center cursor-pointer"
                  onClick={() => setActiveLink(label)}
                >
                  <div>
                    <img src={orangeaeroplane} alt="" />
                  </div>
                  <span className="relative group">
                    {label}
                    <span
                      className={`
                        absolute left-0 -bottom-0.5 h-[2px] bg-white transition-all duration-300
                        ${isActive(label) ? 'w-full' : 'w-0 group-hover:w-full'}
                      `}
                    ></span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:w-[27%]">
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

      {/* Footer Bottom Bar */}
      <div className="bg-[#E64E37] flex justify-center items-center py-1 text-white">
        <h4>Copyright © 2025 All Rights Reserved.</h4>
      </div>
    </>
  );
}
