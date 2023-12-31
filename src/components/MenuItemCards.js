import React, { useState } from 'react'
import logomain from "../assets/logomain.png"
import { useDispatch, useSelector } from 'react-redux'
import { additem,removeitem } from '../utils/Redux/Slices/CartSlice';


function MenuItemCards({itemCards}) {

  const dispatch=useDispatch();

  const data=useSelector((store)=>store.cart.items);
  const handleadd=(itemCard)=>
  {
    
        dispatch(additem(itemCard));
  }
  const deleteitem=(id)=>
  {
        
          dispatch(removeitem(id))
  }


const findquantity=(data,itemCard)=>
{
    const existingIndex=data.findIndex((item)=>item?.card?.info?.id===itemCard?.card?.info?.id);

    if(existingIndex!==-1)
    {
      return data[existingIndex].quantity;
    }
    else 
    {
      return 0;
    }
}
  


        

         return  (

    //  </div>
    <div className='flex flex-col gap-1'>
      {
        itemCards.map((itemCard)=>
        (
          <div  className='flex justify-between border-b-2 border-slate-600 my-3 pb-4  gap-2 items-center flex-col sm:flex-row' key={itemCard?.card?.info?.id}>
             <div className='flex gap-1 flex-col  items-center sm:items-start'>
     <p className='font-bold text-md sm:text-lg underline '>{itemCard?.card?.info?.name}</p>
    <p className='max-w-[80%] fomt-semibold  text-xs sm:text-sm text-slate-700'>{itemCard?.card?.info?.description?itemCard?.card?.info?.description:"This is one of the delicious dish u can have ever had in life.."}</p>
     <p className='font-bold text-sm text-green-400 underline'>Cost/Item ₹{itemCard?.card?.info?.price?itemCard?.card?.info?.price/100:"256"}</p>
      </div>
      <div className='relative'>
        {itemCard?.card?.info?.imageId?<img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+itemCard?.card?.info?.imageId} className='max-w-[120px] max-h-[120px] rounded-md'/ >:<img src={logomain} alt='logo' className='max-w-[120px] max-h-[120px]'/>}
        {data.length!==0?
        <div className='flex gap-1 bg-black p-1 w-fit rounded-md absolute bottom-0 left-[25%] justify-between items-center'>
          <span onClick={()=>deleteitem(itemCard?.card?.info?.id)} className='text-lg font-bold text-white border-r-1 pr-2'>-</span>
          <span className='font-bold text-white'>
  {data.length === 0
    ? 0
    : findquantity(data,itemCard)}
</span>

          <span  className='text-lg font-bold text-white border-l-1 pl-2' onClick={()=>handleadd(itemCard)}>+</span>
        </div>:
        <div className='px-2 py-1 text-white bg-black font-bold text-sm absolute bottom-0 left-[30%] rounded-md w-fit' onClick={()=>handleadd(itemCard)}>
          
          <span >Add +</span>
        </div>
        }
      
        
      </div>
          </div>
        )
        )
      }
    </div>
  )

}

export default MenuItemCards;