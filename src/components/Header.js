import { NavLink } from "react-router-dom";
import logo from "../assets/logomain.png"
import { FaHamburger } from "react-icons/fa"
import { useEffect, useState } from "react";
import { FaPersonWalkingArrowRight } from "react-icons/fa6";
import { GiStrikingArrows } from "react-icons/gi";

const Header=()=>

{

          const [hamburger,sethamburger]=useState(true);

          function menubarfn()
          {
                    
                    sethamburger((prev)=>!prev);

          }
          //when screensize changes i toggle the humburger visiblity

          useEffect(() => {
                    const handleResize = () => {
                      sethamburger(window.innerWidth >= 280);
                    };
                    
                     // Event listener for window resize
 window.addEventListener("resize", handleResize);
                            
                 
                    // Cleanup function to remove the event listener when the component is unmounted
                    return () => {
                              window.removeEventListener("resize", handleResize);
                           
                            };   
                 }, []);

               
  return (
          <div className="flex justify-between items-center px-9 border-b-2 py-1  border-slate-600   w-[100%] m-auto bg-white sticky top-0 ">
                    <div>
                     <img src={logo} alt="logo" className="h-[80px] "/>
                    </div>
                    <div  id="list relative ">
                     <ul className={`gap-3 text-lg font-bold flex-col  ${hamburger?'hidden':'flex absolute  max-w-[600px] right-[1.25rem] top-[70px] p-5 '} sm:flex-row sm:flex sm:bg-transparent sm:border-none sm:left-0 sm:top-0 sm:p-0 sm:static`} >
                     <NavLink to="/"> <li className={`hover:text-red-400 p-[6px] rounded-md bg-slate-500 ${!hamburger?'bg-slate-800 text-white':'bg-transparent'} sm:bg-transparent` }>Home</li></NavLink>
                            <NavLink to="/restro" > <li className={`hover:text-red-400  p-[6px]  rounded-md  bg-slate-500 ${!hamburger?'bg-slate-800 text-white':'bg-transparent'} sm:bg-transparent` }>FoodAdda</li></NavLink>
                             <NavLink to="/about"> <li className={`hover:text-red-400  p-[6px]  rounded-md bg-slate-500 ${!hamburger?'bg-slate-800 text-white':'bg-transparent'} sm:bg-transparent` }>About Me</li></NavLink>
                              <li className={`hover:text-red-400 p-[6px]  rounded-md bg-slate-500 ${!hamburger?'bg-slate-800 text-white':'bg-transparent'} sm:bg-transparent` }>Cart</li>
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