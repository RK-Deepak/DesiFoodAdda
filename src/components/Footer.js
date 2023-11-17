import React from 'react'
import downloadapp from "../assets/downloadApp.png"
 const Footer=()=> {
  return (
          <div className='footer border border-slate-800 bg-slate-600 p-4 py-7 my-2'>
          <div className='flex items-baseline justify-evenly'>
           <div className='flex flex-col items-center '>
            <p className='font-bold text-3xl text-white font-serif'>DesiFoodAdda</p>
            <img src={downloadapp} alt='downloadapp' className='max-w-[200px]' loading='lazy'></img>
            </div>
           <div className=' flex-col gap-2 hidden sm:flex '>
            <h3 className='font-bold text-red-300'>Services</h3>
            <p className='text-sm font-semibold text-white'>Franchise</p>
            <p className='text-sm font-semibold text-white'>Investors</p>
            <p  className='text-sm font-semibold text-white'>Business</p>
            <p className='text-sm font-semibold text-white'>Restraurants Services</p>
           </div>
           <div className=' flex-col gap-2 hidden sm:flex'>
           <h3 className='font-bold text-red-300'>About</h3>
            <p className='text-sm font-semibold text-white'>Our Story</p>
            <p className='text-sm font-semibold text-white'>Benefits</p>
            <p className='text-sm font-semibold text-white'>Teams</p>
            <p className='text-sm font-semibold text-white'>Opportunuty</p>
           </div>
           <div className=' flex-col gap-2 hidden sm:flex'>
            <h3 className='font-bold text-red-300'>Help</h3>
            <p className='text-sm font-semibold text-white'>COntact Us</p>
            <p className='text-sm font-semibold text-white'>FAQ's</p>
           </div>
          </div>
          <hr></hr>
          <div className='flex  justify-evenly p-2 items-center w-[100%] mx-auto flex-wrap '>
           <p className='text-sm font-semibold text-white'>Terms & Conditions</p>
           <p className='text-sm font-semibold text-white'>Privacy Policy</p>
           <p className='text-sm font-semibold text-white text-center md:text-justify'>This website is featured and developed by <span className='underline'>RK_Deepak Verma</span>:-<span className='text-black'> vermadeepak626@gmail.com</span></p>
          </div>
        </div>
  )
}

export default Footer;


