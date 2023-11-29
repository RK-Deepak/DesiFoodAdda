import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logomain.png"
import { FaHamburger } from "react-icons/fa"
import {  useContext, useEffect, useRef, useState } from "react";
import { FaPersonWalkingArrowRight } from "react-icons/fa6";
import { GiStrikingArrows } from "react-icons/gi";
import {  useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { removeuser } from "../utils/Redux/Slices/UserSlice";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { document, document } from "postcss";





const Header=()=>

{

         

          const cartitem=useSelector((state)=>state.cart.items);

          const userinfo=useSelector((state)=>state.user);

          const [hamburger,sethamburger]=useState(true);
         
          const navigate=useNavigate();

          const dispatch=useDispatch();

     
         


         
        

          function menubarfn()
          {
                    
                    sethamburger((prev)=>!prev);

          }
          //when screensize changes i toggle the humburger visiblity
       

          useEffect(() => {
            const handleResize = () => {
                sethamburger(window.innerWidth >= 280);
            };

         
        
            window.addEventListener("resize", handleResize);
           
        
 
        
            return () => {
                window.removeEventListener("resize", handleResize);
              
            };
        }, []);
        
  
                 console.log("carts item--",cartitem);

                 let totalquanity=cartitem.reduce((acc,curr)=>
                 {
                       return (acc+curr.quantity);
                 },0)

                 function handlesignbutton()
                 {
                  sethamburger(true);

               


signOut(auth).then(() => {
  // Sign-out successful.
  dispatch(removeuser());
  navigate("/");
}).catch((error) => {
  // An error happened.
  navigate("/error");
});
                    
                 }
              

             
               

               
  return (
          <div className="flex justify-between items-center px-9 border-b-2 py-1  border-slate-600   w-[100%] m-auto bg-white sticky top-0 z-10 ">
                    <div>
                     <img src={logo} alt="logo" className="h-[80px] "/>
                    </div>

                   
                   <div  id="list relative ">
                    
                    <ul id="dance" className={`gap-3 text-md sm:text-lg font-bold flex-col  ${hamburger?'hidden':'flex absolute  max-w-[600px] right-[1.25rem] top-[70px] p-5 '} sm:flex-row sm:flex sm:bg-transparent sm:border-none sm:left-0 sm:top-0 sm:p-0 sm:static ` } >
                     <NavLink to="/body"> <li className={`hover:text-red-400 p-[6px] rounded-md bg-slate-500 ${!hamburger?'bg-slate-800 text-white':'bg-transparent'} sm:bg-transparent` } onClick={()=>sethamburger(true)} >Home</li></NavLink>
                            <NavLink to="/restro" > <li className={`hover:text-red-400  p-[6px]  rounded-md  bg-slate-500 ${!hamburger?'bg-slate-800 text-white':'bg-transparent'} sm:bg-transparent` } onClick={()=>sethamburger(true)} >FoodAdda</li></NavLink>
                             <NavLink to="/about"> <li className={`hover:text-red-400  p-[6px]  rounded-md bg-slate-500 ${!hamburger?'bg-slate-800 text-white':'bg-transparent'} sm:bg-transparent` } onClick={()=>sethamburger(true)} >About Me</li></NavLink>
                           {userinfo!==null && <NavLink to="/cart"> <li className={`hover:text-red-400 p-[6px]  rounded-md bg-slate-500 ${!hamburger?'bg-slate-800 text-white':'bg-transparent'} sm:bg-transparent` } onClick={()=>sethamburger(true)} >Cart<span className="text-sm text-violet-600"> ({totalquanity})</span></li></NavLink>}
                              <NavLink to="/formx"> <li className={`hover:text-red-400 p-[6px]  rounded-md bg-slate-500 ${!hamburger?'bg-slate-800 text-white':'bg-transparent'} sm:bg-transparent`  } onClick={handlesignbutton}>{userinfo===null ? "Sign In":"Sign Out" }</li></NavLink>
                           
                     </ul>
                
                    </div>
                      <div className="flex justify-center items-center sm:hidden w-[40px] aspect-square bg-gray-400 rounded-full hover:bg-red-500 relative z-10" >
                    {!hamburger?<GiStrikingArrows className="text-4xl absolute top-11 -left-2 rotate-[70deg]" />:""}       
                    {hamburger?<FaHamburger className="text-2xl"  onClick={menubarfn}/>:<FaPersonWalkingArrowRight className="text-2xl"  onClick={menubarfn}/>}
                    </div>
                  
          </div> 
  )
}
 
export default Header;