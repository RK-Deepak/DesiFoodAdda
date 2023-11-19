import React from 'react'
import { Restro_image } from '../utils/constant';
import RestroMenuShimmer from './RestroMenuShimmer';
import logomain from "../assets/logomain.png"
function RestroInfo(props) {

          console.log(props);

          const {name,avgRating,city,areaName,costForTwoMessage,cuisines,totalRatingsString,cloudinaryImageId
          }=props.restrodetail;


          

  return  props.restrodetail.length!==0?(
    <div className='flex p-4 my-4 border-2 border-slate-600 justify-between w-[70%] mx-auto items-center rounded-md bg-orange-200 flex-col sm:flex-row  gap-2 sm:gap-2'>
          <div className='flex gap-2 flex-col '>
          <div className='flex gap-1 flex-col items-center sm:items-start'>
          <h2 className='font-bold text-lg sm:text-2xl text-red-500 underline'>{name}</h2>
          <p className='font-semibold text-sm sm:text-md text-slate-400'>{city},{areaName}</p>
          </div>
          <div className='flex gap-1 flex-col items-center sm:items-start' >
           <p className='font-bold text-slate-800 text-sm'>{costForTwoMessage}</p>
           <p className='font-bold text-slate-800 text-sm'>{cuisines?cuisines.join(','):"Indian"}</p>
           <p className='font-semibold text-green-500 underline'>{avgRating?"Ratings:-":""}{avgRating}</p>
          </div>
          </div>
          <div className='flex flex-col gap-1'>
             <div className='p-2 bg-red-500 rounded-md flex items-center justify-center'>
            <img src={(Restro_image+cloudinaryImageId)? Restro_image+cloudinaryImageId:logomain} alt='restroimage' className='max-w-[150px] max-h-[150px] rounded-md 'loading='lazy' />
            </div>
             <p className='font-semibold text-green-500 underline'>Rated By:-{totalRatingsString}</p>
          </div>
          


    </div>
  ):<RestroMenuShimmer/>
}

export default RestroInfo