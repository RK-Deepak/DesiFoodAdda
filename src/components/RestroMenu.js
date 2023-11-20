import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import RestroInfo from "./RestroInfo";
import MenuAcordium from "./MenuAcordium";

const RestroMenu=()=>
{
          const {resId}=useParams();
       
        
   
          const [category,setcategory]=useState([]);
          const [restrodetail,setrestrodetail]=useState([]);

          const [showindex,setshowindex]=useState(null);


          const fetchrestromenu=async ()=>
          {
               const dataobj=await fetch( "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3164945&lng=78.03219179999999&restaurantId=" +
               resId +
               "&submitAction=ENTER");

               

               const data= await dataobj.json();
               


               console.log(data);
             
               setrestrodetail(data?.data?.cards[0]?.card?.card?.info);

               let intitalCategory=data?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

              
               const finalcategory=intitalCategory.filter((category)=>category?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
               console.log("restro",finalcategory)
               setcategory(finalcategory);

               console.log(data?.data?.cards[0]?.card?.card?.info);
            
          }

          useEffect(()=>
          {
                fetchrestromenu();
          },[])
          return (
                     <div className="p-4 bg_image">
                          <RestroInfo restrodetail={restrodetail}/>
                          {category.map((variant,index)=>
                          <MenuAcordium foodtype={variant} showitems={index===showindex} setshowindex={()=>setshowindex(index)}/>)}
                    </div>
          )
}
export default RestroMenu;