import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import RestroInfo from "./RestroInfo";

const RestroMenu=()=>
{
          const {resId}=useParams();
       
        
   
          const [restromenu,setrestromenu]=useState([]);
          const [restrodetail,setrestrodetail]=useState([]);


          const fetchrestromenu=async ()=>
          {
               const dataobj=await fetch( "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3164945&lng=78.03219179999999&restaurantId=" +
               resId +
               "&submitAction=ENTER");

               

               const data= await dataobj.json();
               


               console.log(data);
             
               setrestrodetail(data?.data?.cards[0]?.card?.card?.info);
               console.log(data?.data?.cards[0]?.card?.card?.info);
          }

          useEffect(()=>
          {
                fetchrestromenu();
          },[])
          return (
                     <div className="p-4">
                          <RestroInfo restrodetail={restrodetail}/>
                    </div>
          )
}
export default RestroMenu;