
import { useParams } from "react-router-dom";
import RestroInfo from "./RestroInfo";
import MenuAcordium from "./MenuAcordium";
import useRestroMenu from "../hooks/useRestroMenu";

const RestroMenu=()=>
{
          const {resId}=useParams();


          const {category,restrodetail,showindex,setshowindex}=useRestroMenu(resId);
       
        
   
        


       
          return (
                     <div className="p-4 bg_image">
                          <RestroInfo restrodetail={restrodetail}/>
                          {category.map((variant,index)=>
                          <MenuAcordium foodtype={variant} showitems={index===showindex} setshowindex={()=>setshowindex(index)} key={index}/> )}
                    </div>
          )
}
export default RestroMenu;