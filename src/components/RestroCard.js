import React from 'react'

const RestroCard=(props)=>

{
           console.log(props?.restrodata)
          const {avgRating,areaName,cloudinaryImageId,name,locality,sla}=props?.restrodata ?? {};
        
          
 return (

          <div className='flex flex-col border  max-w-[250px] max-h-[300px] p-2'>
                 <div>
                    <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} alt='restroimage' className='max-w-[200px] max-h-[130px] mx-auto rounded-md' />
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
export default RestroCard;