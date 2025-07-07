import React from 'react'
import clock from '../assets/images/clock.svg'
import mail from '../assets/images/mail.svg'
import facebook from '../assets/images/facebook.svg'
import instagram from '../assets/images/instagram.svg'
import linkedin from '../assets/images/linkedin.svg'
export default function Detailnav() {
  return (
    <>
      <div class="bg-[#E64E37]">
        <div class="xl:w-11/12 max-w-7xl m-auto px-2 py-1 flex justify-between items-center">
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
              <div class="flex gap-2 items-center">
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
            <div>
              <img src={facebook} alt="" />
            </div>
            <div>
              <img src={instagram} alt="" />
            </div>
            <div>
              <img src={linkedin} alt="" />
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}
