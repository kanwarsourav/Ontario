import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import arrow from '../assets/images/arrowdown.svg';
import call from '../assets/images/call.svg';
import menuIcon from '../assets/images/menu.svg';
import closeIcon from '../assets/images/close.svg';
import '../App.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsVisible(false);
        setIsClosing(false);
        setMobileDropdown(null);
      }, 400);
    } else {
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
        handleHamburgerClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  useEffect(() => {
    document.body.style.overflow = isVisible ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVisible]);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-3 flex justify-between items-center">

        <Link to="/" className="cursor-pointer">
          <img src={logo} alt="Logo" />
        </Link>

        <ul className="hidden md:flex items-center gap-10 text-[#002768] font-medium relative" ref={dropdownRef}>
          <Link to="/" className="cursor-pointer">Home</Link>

          <li className="relative cursor-pointer">
            <Link to="/about" className="cursor-pointer">About Us</Link>
          </li>

          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setOpenDropdown("visas")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-center gap-1">
              <Link to="/ourservices" className="flex items-center gap-1">
                Our Services
                <img
                  src={arrow}
                  alt=""
                  className={`transition-transform duration-200 ${openDropdown === "visas" ? "rotate-180" : ""}`}
                />
              </Link>
            </div>
            {openDropdown === "visas" && (
              <ul className="absolute top-full left-0 w-48 bg-white border shadow-md rounded-md py-2 z-50">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><Link to="/workvisa" className="cursor-pointer">Work Visa</Link></li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tourist Visa</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Student Visa</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Business Visa</li>
              </ul>
            )}
          </li>

          <li className="relative cursor-pointer" onClick={() => toggleDropdown("resources")}>
            <div className="flex items-center gap-1">
              Blog
              <img
                src={arrow}
                alt=""
                className={`transition-transform duration-200 ${openDropdown === "resources" ? "rotate-180" : ""}`}
              />
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

        <div className="hidden md:flex items-center gap-2 text-[#002768]">
          <img src={call} alt="Call" className="hover:scale-110 cursor-pointer transition-transform duration-300" />
          <div>
            <h5 className="text-sm">Call Us Now</h5>
            <h5 className="font-semibold">+91 8699964265</h5>
          </div>
        </div>

        <div className="md:hidden" ref={toggleButtonRef}>
          <button onClick={handleHamburgerClick}>
            <img src={isVisible ? closeIcon : menuIcon} alt="Menu" className="w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isVisible && (
        <div
          ref={mobileDropdownRef}
          className={`md:hidden absolute top-full left-0 w-full bg-white px-4 pb-4 shadow z-40 
            ${isClosing ? 'animate-fadeOutDiagonal' : 'animate-fadeInDiagonal'}`}
        >
          <ul className="flex flex-col gap-4 text-[#002768] font-medium cursor-pointer">
            <Link to="/" onClick={handleHamburgerClick}>Home</Link>

            <Link to="/about" onClick={handleHamburgerClick}>About Us</Link>

            <li onClick={() => toggleMobileDropdown("visas")} className="flex items-center gap-2">
              <Link to="/ourservices" onClick={handleHamburgerClick}>Our Services</Link>
              <img
                src={arrow}
                alt=""
                className={`transition-transform duration-200 ${mobileDropdown === "visas" ? "rotate-180" : ""}`}
              />
            </li>
            {mobileDropdown === "visas" && (
              <ul className="ml-4 text-sm">
                <li onClick={handleHamburgerClick}><Link to="/workvisa" className="cursor-pointer">Work Visa</Link></li>
                <li onClick={handleHamburgerClick}>Tourist Visa</li>
                <li onClick={handleHamburgerClick}>Student Visa</li>
                <li onClick={handleHamburgerClick}>Business Visa</li>
              </ul>
            )}

            <li onClick={() => toggleMobileDropdown("resources")} className="flex items-center gap-2">
              <span>Blog</span>
              <img
                src={arrow}
                alt=""
                className={`transition-transform duration-200 ${mobileDropdown === "resources" ? "rotate-180" : ""}`}
              />
            </li>
            {mobileDropdown === "resources" && (
              <ul className="ml-4 space-y-2 text-sm">
                <li onClick={handleHamburgerClick}>Resources</li>
                <li onClick={handleHamburgerClick}>FAQs</li>
                <li onClick={handleHamburgerClick}>Guides</li>
              </ul>
            )}

            <li onClick={handleHamburgerClick}>Our Team</li>

            <li className="flex items-center gap-2 pt-2 border-t mt-2">
              <img src={call} alt="Call" className="hover:scale-105 transition-transform duration-300" />
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
