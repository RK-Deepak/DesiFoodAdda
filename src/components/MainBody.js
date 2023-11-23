import React, { useEffect, useState }  from 'react'
import { FaStar } from "react-icons/fa";
import mainimage from "../assets/desi.jpg"
import downloadapp from "../assets/downloadApp.png"
import res_1 from "../assets/res_1.jpg"
import res_2 from "../assets/res_2.jpg"
import res_3 from "../assets/res_3.jpg"
import res_4 from "../assets/res_4.jpg"
import in_1 from "../assets/in_1.jpg"
import in_2 from "../assets/in_2.jpg"
import in_3 from "../assets/in_3.jpg"
import in_4 from "../assets/in_4.jpg"


import useOnlineStatus from "../hooks/useOnlineStatus";
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';


const MainBody=()=>
{
  const {onlinestatus}=useOnlineStatus();





 
  return (
    <div>
          <div className='flex justify-evenly  items-center max-w-[95vw] mx-auto p-3 bg-white font-serif flex-wrap  '>
          <div className="flex  items-center justify-center gap-1 fixed top-[6rem] right-[30%] left-[31%] z-0"><span className="font-bold text-xs sm:text-xl ">Online Status:</span><span>{onlinestatus?"💚":"🔴"}</span></div>
                    <div className='p-5 flex flex-col gap-1'>
                         <div className='flex flex-col justify-evenly min-h-[300px] '>
                           <h1 className='text-2xl md:text-4xl font-bold font-serif text-green-700 ' >Swaad Woh ,<br></br><span className='text-red-800'> Jo Aapko Yaad Rahe 😜</span></h1>
                           <p className='text-slate-800 text-sm sm:text-lg'>Khana Woh nhi jo aap jeene ke liye khao,<br></br>
                               Khana Woh hai jiske liye aap jeena chaho...<br></br>
                              <span className=' text-xl md:text-2xl font-bold text-green-700 underline'>Paise Aapke Swad Hamara</span>
                           </p>
                          <NavLink to="/restro"><button className=' px-4 py-2 md:px-8 md:py-4 bg-slate-600 w-fit rounded-full  text-white text-md md:text-lg font-bold' >Order Now</button></NavLink>
                         </div>
                         <div className='flex flex-col gap-1'>
                           <div className='flex'>
                              <FaStar className='text-slate-500'/>
                              <FaStar className='text-slate-500'/>
                              <FaStar className='text-slate-500'/>
                              <FaStar className='text-slate-500'/>
                              <FaStar className='text-slate-500'/>
                           </div>
                           <div className='flex flex-col  gap-1 my-2'>
                              <p className='text-black font-bold text-sm md:text-lg '>5 Star Rating</p>
                              <p className='text-slate-500 text-xs font-semibold md:text-sm'>On Basis of 2000 Reviews</p>

                           </div>
                         </div>
                    </div>
                    <div className=''> 
        
                               <img src={mainimage} alt='mainimage' className='border border-white rounded-full max-w-[500px] w-[100%] ' loading='eager'/> 
                    </div>
          </div>
          <div className='w-[85vw] h-[280px] bg-green-300 mx-auto my-6 flex justify-evenly items-center p-4 rounded-md'>
             <div className='flex flex-col gap-2'>
              <p className=' text-lg md:text-2xl font-bold text-slate-500 font-serif'>Download the app to deliver your food in minutes<br></br><span className='text-black '>Try this out</span></p>
              <button className='py-4 px-6 bg-black text-white rounded-md md:w-fit'>Download Now</button>
             </div>
             <div>
              <img src={downloadapp} alt='app' className='max-w-[200px] hidden md:block ' loading='lazy'/>
             </div>
          </div>
          <div className='flex flex-col max-w-[95vw] my-4 mx-auto'>
            <div className='flex w-[90%] justify-between mx-auto my-2 p-3'>
          <h2 className='font-bold text-2xl underline '>Restraurants</h2>
            <NavLink to="/restro"><button className=' px-2 py-2 md:px-8  bg-slate-600 w-fit rounded-full md:py-3 text-white'>Show All</button></NavLink>
            </div>
            <div className='flex justify-evenly flex-wrap gap-4 md:gap-2 '>
            <div className='flex justify-center items-center flex-col restro_trans hover:scale-110 hover:shadow-lg hover:shadow-slate-500 '>
              <img src={res_1} alt='restro' className='w-[250px] h-[200px] rounded-md' loading='lazy'/>
              <p className='font-bold font-mono'>Apna Dhaba</p>
            </div>
            <div className='flex justify-center items-center flex-col restro_trans hover:scale-110 hover:shadow-lg hover:shadow-slate-500 '>
              <img src={res_2} alt='restro' className='w-[250px] h-[200px] rounded-md' loading='lazy'/>
              <p className='font-bold font-mono'>Swaad</p>
            </div>
            <div className='flex justify-center items-center flex-col restro_trans hover:scale-110 hover:shadow-lg hover:shadow-slate-500 '>
              <img src={res_3} alt='restro' className='w-[250px] h-[200px] rounded-md' loading='lazy'/>
              <p className='font-bold font-mono'>Balle Balle</p>
            </div>
            <div className='flex justify-center items-center flex-col restro_trans hover:scale-110 hover:shadow-lg hover:shadow-slate-500 '>
              <img src={res_4} alt='restro' className='w-[250px] h-[200px] rounded-md' loading='lazy'/>
              <p className='font-bold font-mono'>Janta Dhaba</p>
            </div>
            </div>
            
          </div>

          <div className='w-[90%] mx-auto p-4 flex flex-col gap-3'>
            <h3 className='font-bold  text-lg sm:text-xl text-center hover:underline '>#DesiFoodDhaba On Instagram <span className='text-2xl text-red-600'> #Desi_Hai</span></h3>
            <div className='flex justify-evenly flex-wrap gap-4 md:gap-2 '>
            <div className='flex justify-center items-center flex-col restro_trans hover:scale-110 hover:shadow-lg hover:shadow-slate-500 '>
              <img src={in_1} alt='insta' className='w-[250px] h-[200px] rounded-md grayscale hover:grayscale-0' loading='lazy'/>
          
            </div>
            <div className='flex justify-center items-center flex-col restro_trans hover:scale-110 hover:shadow-lg hover:shadow-slate-500 '>
              <img src={in_2} alt='insta' className='w-[250px] h-[200px] rounded-md grayscale hover:grayscale-0' loading='lazy'/>
             
            </div>
            <div className='flex justify-center items-center flex-col restro_trans hover:scale-110 hover:shadow-lg hover:shadow-slate-500 '>
              <img src={in_3} alt='insta' className='w-[250px] h-[200px] rounded-md grayscale hover:grayscale-0' loading='lazy'/>
           
            </div>
            <div className='flex justify-center items-center flex-col restro_trans hover:scale-110 hover:shadow-lg hover:shadow-slate-500 '>
              <img src={in_4} alt='insta' className='w-[250px] h-[200px] rounded-md grayscale hover:grayscale-0' loading='lazy'/>
             
            </div>
            </div>
          </div>

          
          
          </div>
  )
}
export default MainBody;