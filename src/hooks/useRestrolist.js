import React from 'react'
import { useState,useEffect } from 'react';
import { Restro_api } from '../utils/constant';
const useRestrolist=()=>
{
  
          const [restrolist,setrestrolist]=useState([]);

          const [searchtext,setsearchtext]=useState("");

         const fetchrestro = async (rating=null,name="")=>
          {
                    const dataobj=await fetch(Restro_api);

                    const data=await dataobj.json();
                  
                    const restroarray= data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                    
                    console.log(restroarray);

                  if(name!=="")
                  {
                    let filteredrestro=restroarray.filter((restro)=>restro?.info?.name && restro?.info?.name.toLowerCase().includes(name.toLowerCase()));
                    setrestrolist(filteredrestro);
                  }
                  else if(rating!==null)
                  {
                    
                    let filterrestro=restroarray.filter((restro)=>restro?.info?.avgRating>=rating);
                    setrestrolist(filterrestro);
                  }
                  else if(name==="")
                  {
                    setrestrolist(restroarray)
                  }
          }
          useEffect(()=>
          {
                    fetchrestro();
          }
          ,[])

          function searchrestro(e)
          {
                    const valuex=e.target.value;
                    
                    setsearchtext(valuex);
                    fetchrestro(null,valuex);
                   
                   


          }
          function buttonsearch()
          {
                    fetchrestro(null,searchtext);
          }

          return {buttonsearch,searchrestro,restrolist,searchtext,fetchrestro};
          
}
export default useRestrolist;