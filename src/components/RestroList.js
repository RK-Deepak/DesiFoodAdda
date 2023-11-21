import { useEffect, useState } from "react";
import React from 'react'
import RestroCard, { PromotedRestroLabelled } from "./RestroCard";
import Shimmer from "./Shimmer";
import useRestrolist from "../hooks/useRestrolist";
import { NavLink } from "react-router-dom";



const RestroList=()=>
{
        const {buttonsearch,searchrestro,restrolist,searchtext,fetchrestro}=useRestrolist();

        const PromtedRestro=PromotedRestroLabelled(RestroCard);
       

          if(restrolist.length===0)
          {
                    return  (
                    <div className="my-4">
                        <Shimmer/>
                    </div>
                   
                  )
                   
          }
         
         
          return (
                    <div className="my-5" >
                              <div className="flex flex-col gap-2 justify-center w-full items-center  ">
                     <div className="flex gap-1 flex-wrap  ">
                     <input type="text" value={searchtext} onChange={searchrestro} className="border-2 rounded-md border-slate-800 w-[70%] sm:w-[20rem] py-1 px-1"/>
                     <button className="py-1 px-3 bg-green-500 rounded-md text-white" onClick={buttonsearch}>Search</button>
                     </div>
                     <div className="flex gap-2">
                     <button className="py-1 px-3 bg-slate-500 rounded-md text-white" onClick={()=>fetchrestro(4)}>Top Rated Restraurant</button>
                     <button className="py-1 px-3 bg-slate-500 rounded-md text-white" onClick={()=>fetchrestro()}>All Restro</button>
                     </div>
                     </div>
                    <div className="flex justify-around gap-5 flex-wrap p-2 my-3">
                            {
                            restrolist.map((restro)=>
                            
                    (
                    
                            <NavLink to={"/menu/"+ restro?.info?.id} key={restro?.info?.id}>{restro?.info?.promoted?<PromtedRestro restrodata={restro?.info}/>:<RestroCard  restrodata={restro?.info}/>}</NavLink>
                              
                            ))}
                    </div>
                    </div>
          )

}
export default RestroList;