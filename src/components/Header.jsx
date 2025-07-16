import React from 'react'
import clock from '../assets/images/clock.svg'
import mail from '../assets/images/mail.svg'
import facebook from '../assets/images/facebook.svg'
import instagram from '../assets/images/instagram.svg'
import linkedin from '../assets/images/linkedin.svg'
import '../App.css'
export default function Header() {
  return (
    <>
      <div className="bg-[#E64E37]">
        <div className=" max-w-7xl m-auto  px-4 md:px-12 py-1 flex justify-between items-center">
          <div className="flex gap-5">
            <div className="flex gap-2 items-center">
              <div>
                <img src={clock} alt="" />
              </div>
              <div className="text-white">
                <h5>08:00am to 09:00pm</h5>
              </div>
            </div>
            <div>
              <div className=" gap-2 items-center hidden md:flex">
                <div>
                  <img src={mail} alt="" />
                </div>
                <div className="text-white">
                  <h5>theontariooverseasvisa@gmail.com</h5>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="cursor-pointer"> 
              <img src={facebook} alt="" />
            </div>
            <div className="cursor-pointer">
              <img src={instagram} alt="" />
            </div>
            <div className="cursor-pointer">
              <img src={linkedin} alt="" />
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}
