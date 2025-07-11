import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/images/logo.svg';
import arrow from '../assets/images/arrowdown.svg';
import call from '../assets/images/call.svg';
import menuIcon from '../assets/images/menu.svg';
import closeIcon from '../assets/images/close.svg';
import '../App.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);         // animation trigger
  const [isVisible, setIsVisible] = useState(false);   // actual presence in DOM
  const [isClosing, setIsClosing] = useState(false);   // handle exit animation

  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const toggleDropdown = (menuName) => {
    setOpenDropdown(prev => (prev === menuName ? null : menuName));
  };

  const toggleMobileDropdown = (menuName) => {
    setMobileDropdown(prev => (prev === menuName ? null : menuName));
  };

  const handleHamburgerClick = () => {
    if (isVisible) {
      // closing
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsVisible(false);
        setIsClosing(false);
      }, 400); // match animation duration
    } else {
      // opening
      setIsVisible(true);
      setIsOpen(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const handleClickOutside = (event) => {
      const clickedOutsideMenu =
        mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target);
      const clickedOutsideToggle =
        toggleButtonRef.current && !toggleButtonRef.current.contains(event.target);

      if (clickedOutsideMenu && clickedOutsideToggle) {
        setMobileDropdown(null);
        handleHamburgerClick(); // animate close
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  // Optional: Prevent Body Scroll on Mobile Menu Open
  useEffect(() => {
    document.body.style.overflow = isVisible ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVisible]);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-3 flex justify-between items-center">
        <div className="cursor-pointer">
          <img src={logo} alt="Logo" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-[#002768] font-medium relative" ref={dropdownRef}>
          <li className="cursor-pointer">Home</li>
          <li className="relative cursor-pointer" onClick={() => toggleDropdown("company")}>
            <div className="flex items-center gap-1">
              About Us
              <img src={arrow} alt="" className={`transition-transform duration-200 ${openDropdown === "company" ? "rotate-180" : ""}`} />
            </div>
            {openDropdown === "company" && (
              <ul className="absolute top-full left-0 mt-2 w-48 bg-white border shadow-md rounded-md py-2 z-50">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Company</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Our Team</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Careers</li>
              </ul>
            )}
          </li>

          <li className="relative cursor-pointer" onClick={() => toggleDropdown("visas")}>
            <div className="flex items-center gap-1">
              Our Services
              <img src={arrow} alt="" className={`transition-transform duration-200 ${openDropdown === "visas" ? "rotate-180" : ""}`} />
            </div>
            {openDropdown === "visas" && (
              <ul className="absolute top-full left-0 mt-2 w-48 bg-white border shadow-md rounded-md py-2 z-50">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Work Visa</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tourist Visa</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Student Visa</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Business Visa</li>
              </ul>
            )}
          </li>

          <li className="relative cursor-pointer" onClick={() => toggleDropdown("resources")}>
            <div className="flex items-center gap-1">
              Blog
              <img src={arrow} alt="" className={`transition-transform duration-200 ${openDropdown === "resources" ? "rotate-180" : ""}`} />
            </div>
            {openDropdown === "resources" && (
              <ul className="absolute top-full left-0 mt-2 w-48 bg-white border shadow-md rounded-md py-2 z-50">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Resources</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">FAQs</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Guides</li>
              </ul>
            )}
          </li>

          <li className="cursor-pointer">Our Team</li>
        </ul>

        {/* Call Section */}
        <div className="hidden md:flex items-center gap-2 text-[#002768]">
          <img src={call} alt="Call" className="transform transition-transform duration-300 hover:scale-110 cursor-pointer" />
          <div>
            <h5 className="text-sm">Call Us Now</h5>
            <h5 className="font-semibold">+91 8699964265</h5>
          </div>
        </div>

        {/* Hamburger */}
        <div className="md:hidden" ref={toggleButtonRef}>
          <button onClick={handleHamburgerClick}>
            <img src={isVisible ? closeIcon : menuIcon} alt="Menu" className="w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isVisible && (
        <div
          ref={mobileDropdownRef}
          className={`md:hidden absolute top-full left-0 w-full bg-white px-4 pb-4 shadow z-40 
            ${isClosing ? 'animate-fadeOutDiagonal' : 'animate-fadeInDiagonal'}`}
        >
          <ul className="flex flex-col gap-4 text-[#002768] font-medium cursor-pointer">
            <li onClick={handleHamburgerClick}>Home</li>

            <li onClick={() => toggleMobileDropdown("company")} className="flex items-center gap-2">
              <span>About Us</span>
              <img src={arrow} alt="" className={`transition-transform duration-200 ${mobileDropdown === "company" ? "rotate-180" : ""}`} />
            </li>
            {mobileDropdown === "company" && (
              <ul className="ml-4 space-y-2 text-sm">
                <li>Company</li>
                <li>Our Team</li>
                <li>Careers</li>
              </ul>
            )}

            <li onClick={() => toggleMobileDropdown("visas")} className="flex items-center gap-2">
              <span>Our Services</span>
              <img src={arrow} alt="" className={`transition-transform duration-200 ${mobileDropdown === "visas" ? "rotate-180" : ""}`} />
            </li>
            {mobileDropdown === "visas" && (
              <ul className="ml-4 space-y-2 text-sm">
                <li>Work Visa</li>
                <li>Tourist Visa</li>
                <li>Student Visa</li>
                <li>Business Visa</li>
              </ul>
            )}

            <li onClick={() => toggleMobileDropdown("resources")} className="flex items-center gap-2">
              <span>Blog</span>
              <img src={arrow} alt="" className={`transition-transform duration-200 ${mobileDropdown === "resources" ? "rotate-180" : ""}`} />
            </li>
            {mobileDropdown === "resources" && (
              <ul className="ml-4 space-y-2 text-sm">
                <li>Resources</li>
                <li>FAQs</li>
                <li>Guides</li>
              </ul>
            )}

            <li onClick={handleHamburgerClick}>Our Team</li>

            <li className="flex items-center gap-2 pt-2 border-t mt-2">
              <img src={call} alt="Call" className="transform transition-transform duration-300 hover:scale-105" />
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
