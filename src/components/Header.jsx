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
      <div class="bg-[#E64E37]">
        <div class=" max-w-7xl m-auto px-2 py-1 flex justify-between items-center">
          <div class="flex gap-5">
            <div class="flex gap-2 items-center">
              <div>
                <img src={clock} alt="" />
              </div>
              <div class="text-white">
                <h5>08:00am to 09:00pm</h5>
              </div>
            </div>
            <div>
              <div class=" gap-2 items-center hidden md:flex">
                <div>
                  <img src={mail} alt="" />
                </div>
                <div class="text-white">
                  <h5>theontariooverseasvisa@gmail.com</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="cursor-pointer"> 
              <img src={facebook} alt="" />
            </div>
            <div class="cursor-pointer">
              <img src={instagram} alt="" />
            </div>
            <div class="cursor-pointer">
              <img src={linkedin} alt="" />
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}
