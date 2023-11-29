import { useEffect,useState } from "react";
import { Restro_menu_api } from "../utils/constant";
const useRestroMenu=(resId)=>
{
          
       
        
   
          const [category,setcategory]=useState([]);
          const [restrodetail,setrestrodetail]=useState([]);

          const [showindex,setshowindex]=useState(null);


          const fetchrestromenu=async ()=>
          {
               const dataobj=await fetch(Restro_menu_api +
               resId +
               "&submitAction=ENTER");

               

               const data= await dataobj.json();
               


            
             
               setrestrodetail(data?.data?.cards[0]?.card?.card?.info);

               let intitalCategory=data?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

              
               const finalcategory=intitalCategory.filter((category)=>category?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
               
               setcategory(finalcategory);

              
            
          }

          useEffect(()=>
          {
                fetchrestromenu();
          },[])

          return {category,restrodetail,showindex,setshowindex};
}
export default useRestroMenu;