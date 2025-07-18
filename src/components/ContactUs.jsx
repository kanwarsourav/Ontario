import React from 'react';
import Header from './ContactUs/Header';
import mailIcon from '../assets/images/mail.svg';
import callIcon from '../assets/images/call.svg';
import locationIcon from '../assets/images/location.svg';
import contactImage from '../assets/images/contactus.svg'; // Your uploaded image

export default function ContactUs() {
  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto px-4 md:px-14 py-10">

        {/* TOP CONTACT BOXES */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <img src={mailIcon} alt="Mail Icon" className="w-12 h-12 mb-4 bg-[#E64E37] rounded-3xl p-2" />
            <h4 className="text-[#002768] font-semibold text-lg mb-2">Send Us Mail</h4>
            <p className="text-sm text-gray-700">theontariooverseasvisa@gmail.com</p>
            <p className="text-sm text-gray-700">theontariooverseasvisa@gmail.com</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <img src={callIcon} alt="Call Icon" className="w-12 h-12 mb-4" />
            <h4 className="text-[#002768] font-semibold text-lg mb-2">Call Us Anytime</h4>
            <p className="text-sm text-gray-700">+91 8699964265</p>
            <p className="text-sm text-gray-700">+91 8699964265</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <img src={locationIcon} alt="Location Icon" className="w-12 h-12 mb-4 bg-[#E64E37] rounded-3xl p-2" />
            <h4 className="text-[#002768] font-semibold text-lg mb-2">Visit Our Office</h4>
            <p className="text-sm text-gray-700">28 Street, New York City</p>
            <p className="text-sm text-gray-700">United States of America</p>
          </div>
        </div>

        {/* CONTACT SECTION (Image + Form) */}
        <div className="flex flex-col lg:flex-row items-center  justify-between">
          
          {/* LEFT SIDE IMAGE */}
          

          {/* RIGHT SIDE FORM */}
          <div className="w-full  flex justify-between flex-wrap lg:flex-nowrap bg-[#FDF2F0] rounded-xl  shadow-md">
            <div className='w-full lg:w-[50%] p-6 md:p-10'>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#002768] mb-2">
              Drop Us A line
            </h2>
            <p className="text-center text-[#002768] mb-6">
              Immigway Visa Agency will help you to solve your problem
            </p>
            <div className="flex justify-center mb-8">
              <div className="w-16 h-[2px] bg-[#E64E37] rounded" />
            </div>

            <form className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Name*"
                  className="flex-1 p-3 rounded-2xl border border-[#002768] focus:outline-none "
                />
                <input
                  type="text"
                  placeholder="Phone No"
                  className="flex-1 p-3 rounded-2xl border border-[#002768] focus:outline-none  "
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="E-mail*"
                  className="flex-1 p-3 rounded-2xl border border-[#002768] focus:outline-none  "
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="flex-1 p-3 rounded-2xl border border-[#002768] focus:outline-none  "
                />
              </div>

              <textarea
                rows="5"
                placeholder="Text"
                className="w-full p-4 rounded-xl border border-[#002768] resize-none focus:outline-none"
              />

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#E64E37] hover:bg-[#d33b2a] transition text-white font-semibold px-8 py-2 rounded-2xl"
                >
                  CONTACT US
                </button>
              </div>
            </form>
            </div>
             <div className="w-full h-auto lg:w-[46%] -pt-8">
            <img src={contactImage} alt="Contact Illustration" className="w-full  h-auto" />
          </div>
          </div>
         
        </div>

      </div>
    </>
  );
}
