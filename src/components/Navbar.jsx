import React from 'react'
import logo from '../assets/images/logo.svg'
import arrow from '../assets/images/arrowdown.svg'
import call from '../assets/images/call.svg'
import '../App.css'
export default function Navbar() {
  return (
    <>
      <div>
        <div class="max-w-7xl m-auto px-2 flex justify-between items-center py-3">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <ul class="flex items-center gap-12 text-[#002768]">
              <li>Home</li>
              <li>About Us</li>
              <li class="flex items-center">Our Services <img src={arrow} alt="" class="flex items-center" /></li>
              <li>Blog</li>
              <li>Our Team</li>
            </ul>
          </div>
          <div class="flex items-center gap-2">
            <div>
              <img src={call} alt="" />
            </div>
            <div class="text-[#002768]">
              <h5>Call Us Now</h5>
              <h5 class="font-medium">+91 8699964265</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
