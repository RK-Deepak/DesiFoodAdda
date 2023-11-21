import { useState } from "react"
import { NavLink } from "react-router-dom";


const Formx=()=>
{
          const [formadata,setformdata]=useState({
                    fname:"",
                    lname:"",
                    password:"",
                    cpassword:"",
                    email:"",
                    remember:false


          })
          const [isLogin,setLogin]=useState(true);

          function changeHandler(e)
          {
             const {name,type,checked,value}=e.target;

             setformdata((prev)=>
           (
                    {
                        ...prev,
                          [name]:type=="checkbox"?checked:value
                    }
                  
           ))
                
                  
}

function submithandler(e)
{
          e.preventDefault();
          console.log(formadata);

          setformdata(null)
}

function loginchanger()
{
          setLogin((prev)=>!prev)
}


          
          return (
                    <div className="flex min-h-screen justify-center items-center flex-col gap-2 my-3 login_bg">
                              
                              <form onSubmit={submithandler} className="border-l-2 border-t-2 border-slate-600 shadow-md shadow-slate-600 min-h-[300px] max-w-[25rem] w-[90%] p-2 flex flex-col gap-3 bg-gradient-to-r from-violet-500 to-fuchsia-500">
                              <h1 className="font-bold text-xl underline text-black">{isLogin?"Login":"Sign Up"}</h1>
                      <div className="flex flex-col gap-1">
                              <label htmlFor="emailid" className="font-semibold text-xs md:text-sm ">Username Or Email:</label>
                     <input type="email" name="email" value={formadata.email} onChange={changeHandler} id="emailid" className="border border-slate-600 w-[90%] p-1 bg-slate-300 rounded-md outline-red-300"/>
                      </div>
                      <div className="flex flex-col gap-1">
                              <label htmlFor="pass" className="font-semibold text-sm ">Password:</label>
                              <input type="password" name="password" value={formadata.password} onChange={changeHandler}  id="pass" className="border border-slate-600 w-[90%] p-1 bg-slate-300 rounded-md outline-red-300" />
                      </div>
                      <div className="flex gap-1 ">
                      <input type="checkbox" name="remember" checked={formadata.remember} onChange={changeHandler} id="checking" className="border border-slate-600 accent-green-500 "/>
                              <label htmlFor="checking" className="font-semibold text-sm ">Remember Me</label>
                         
                      </div>
                      <div className="flex   items-baseline gap-2">
                      <button className="w-fit py-1 px-3 bg-black  text-white rounded-md cursor-pointer">Login</button>
                      <NavLink to="" ><span className="font-semibold text-sm text-red-600 underline cursor-pointer">Forgot Password</span></NavLink>
                      </div>
                      <div className="font-bold text-green-900 text-xs underline ">
                          <p  onClick={loginchanger} className=" cursor-pointer">{isLogin ? "Don't have account? Sign Up..":"Have account then..Sign In"}</p>
                           
                              </div>
                      <div>
                   
                      </div>
                      </form>
                     
                      
                    </div>

          )
}
export default Formx;