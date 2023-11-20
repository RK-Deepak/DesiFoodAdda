import React, { useState } from 'react'
import MenuItemCards from './MenuItemCards';

function MenuAcordium({foodtype,showitems,setshowindex}) {
          console.log(foodtype)

          const {title,itemCards}=foodtype?.card?.card;

          //this condition the showlocalitems let collapse on click and not let happen anything in showindex even is not null becuase to open we need both conditions

          const [showitemslocal,setshoowitemslocal]=useState(false);

         
          const settingitems=()=>
          {
            setshowindex();
            setshoowitemslocal((prev)=>!prev);
          }
         
         
  return (
    <div className='my-2  '  >
          <div className='w-[70%] border-2 border-slate-600 mx-auto flex flex-col   p-2 rounded-md bg-orange-200 shadow-md shadow-slate-600 '>
          <div className='flex items-center justify-between  ' onClick={settingitems} >
          <span className=' text-md font-bold underline'>{title}({itemCards.length})</span>
          <span className='text-xl font-bold' >{showitemslocal && showitems?'😞':'😝'}</span>
          </div>
          
         <div>
          
                    
                {showitemslocal && showitems && <MenuItemCards itemCards={itemCards} /> }  

          
          </div>
           </div>
          
          </div>
  )
}

export default MenuAcordium