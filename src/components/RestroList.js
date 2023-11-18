import { useEffect, useState } from "react";
import React from 'react'
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
import useRestrolist from "../hooks/useRestrolist";



const RestroList=()=>
{
        const {buttonsearch,searchrestro,restrolist,searchtext,fetchrestro}=useRestrolist()

          if(restrolist.length===0)
          {
                    return  (
                    <div className="my-4">
                        <Shimmer/>
                    </div>
                   
                  )
                   
          }
         
         
          return (
                    <div className="my-4" >
                              <div className="flex flex-col gap-1 justify-center w-full items-center  ">
                     <div className="flex gap-1 flex-wrap  ">
                     <input type="text" value={searchtext} onChange={searchrestro} className="border-2 rounded-md border-slate-800 w-[70%] sm:w-[20rem] py-1 px-1"/>
                     <button className="py-1 px-3 bg-green-500 rounded-md text-white" onClick={buttonsearch}>Search</button>
                     </div>
                     <div className="flex gap-2">
                     <button className="py-1 px-3 bg-slate-500 rounded-md text-white" onClick={()=>fetchrestro(4)}>Top Rated Restraurant</button>
                     <button className="py-1 px-3 bg-slate-500 rounded-md text-white" onClick={()=>fetchrestro()}>All Restro</button>
                     </div>
                     </div>
                    <div className="flex justify-evenly gap-3 flex-wrap p-2">
                            {restrolist.map((restro)=>
                            {
                              return <RestroCard key={restro?.info?.id} restrodata={restro?.info}/>
                            })}
                    </div>
                    </div>
          )

}
export default RestroList;