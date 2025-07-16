import React from 'react'
import aboutusbg from '../../assets/images/aboutusbg.svg'

export default function WorkVisa() {
  return (
    <>
        <div className=' bg-cover bg-center h-40 w-full bg-[#002768] flex flex-col justify-center '
                      style={{ backgroundImage: `url(${aboutusbg})` }}>
      
                      <h2 className='flex justify-center items-center font-bold text-5xl text-white'>Work visa Processing</h2>
                      <h5 className='flex justify-center items-center font-bold text-sm text-white'>HOME | Work Visa Processing</h5>
                  </div >
    </>
  )
}
