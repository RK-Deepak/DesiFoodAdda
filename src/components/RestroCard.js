import React from 'react'
import { Restro_image } from '../utils/constant';

const RestroCard=(props)=>

{
         
          const {avgRating,areaName,cloudinaryImageId,name,locality,sla}=props?.restrodata ?? {};
        
          
 return (

          <div className='flex flex-col border  max-w-[250px] max-h-[300px] p-2 relative '>
                 <div>
                    <img src={Restro_image+cloudinaryImageId} alt='restroimage' className='max-w-[200px] max-h-[130px] mx-auto rounded-md' />
                 </div>
                 <div className='flex flex-col gap-1'>
                    <h1 className='font-bold text-md text-green-500'>{name}</h1>
                    <p className='text-sm text-slate-800 font-semibold'>{areaName},{locality}</p>
                    <p className='font-bold '>{avgRating}</p>
                    <p className='font-bold text-xs'>Delivery Time:-<span>{sla?.slaString}</span></p>

                 </div>
          </div>
 )
} 
  
export const PromotedRestroLabelled=(RestroCard)=>
{

          return (props)=>
          (
                     ( 
                     <div className='relative'>
                              <RestroCard {...props}/>
                              <div className='absolute top-0 left-0 bg-black text-white px-2 py-1'>
                                        <label className=' '>Promoted</label>
                              </div>
                    </div>
                    )
          )
}

export default RestroCard;