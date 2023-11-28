import { useState } from "react"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import { formvalid } from "../utils/formvalid";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/Redux/Slices/UserSlice";




const Formx=()=>
{
          const [formadata,setformdata]=useState({
                    fname:"",
                  
                    password:"",
                    cpassword:"",
                    email:"",
                    remember:false


          })
          const [isLogin,setLogin]=useState(true);

          const [showpassword,setshowpassword]=useState(false);

          const [errormessage,seterrormessage]=useState("");

          const navigate=useNavigate();
          const dispatch=useDispatch();

          



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

          const value=formvalid(formadata.email,formadata.password,isLogin?null:formadata.cpassword);

         seterrormessage(value);
          
         
            if(value===null)
            {
              if(!isLogin)
              {
                createUserWithEmailAndPassword(auth, formadata.email, formadata.password)
                .then((userCredential) => {
                  // Signed up 
                  const user = userCredential.user;
                  console.log("HI",user);
                  navigate("/");
                  
            
                
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  seterrormessage(errorCode+" "+errorMessage);
                  
                 
                  // ..
                });
                 }
                 else //login
                 {
                   signInWithEmailAndPassword(auth, formadata.email, formadata.password)
                   .then((userCredential) => {
                   // Signed in 
                   const user = userCredential.user;
                   console.log("signed in",user);
                   dispatch(adduser({"usertoken":user.getIdToken,"email":user.email}));
                   navigate("/body")
                  
                   

                 ;


              
                  
                  
                  
     
      
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       seterrormessage("invalid user",errorCode);
     });
                 }
   

                 setTimeout(() => {
                        if(isLogin && formadata.email!=="")
                        {
                               setformdata({password:"",email:""});
                        }
                        else 
                        {
                                setformdata({password:"",email:"",fname:"",cpassword:"",remember:false});   
                        }
        
                        
                  }, 2000);
                          
                        
                      
              }

              {
                setTimeout(() => {
                       seterrormessage("")
                       
                }, 2000);
           }
       




}

function loginchanger()
{
        if(isLogin )
        {
               setformdata({password:"",email:""});
        }
        else 
        {
                setformdata({password:"",email:"",fname:"",cpassword:"",remember:false});   
        }
          setLogin((prev)=>!prev)
        
             

                
      
}

visibilepassword=()=>
{
        setshowpassword((prev)=>!prev);
}





          
          return (
                    <div className="flex min-h-screen justify-center items-center flex-col gap-2 my-3 bg_image">
                              
                              <form onSubmit={submithandler} className="border-l-2 border-t-2 border-slate-600 shadow-md shadow-slate-600 min-h-[350px] max-w-[28rem] w-[90%] p-2 flex flex-col gap-3 bg-gradient-to-r from-slate-500 via-gray-500 to-white h-64" noValidate>
                              <h1 className="font-bold text-2xl text-center underline text-black">{isLogin?"Login":"Sign Up"}</h1>
                         
                             {!isLogin? <div className="flex flex-col gap-1">

<label htmlFor="fname" className="font-semibold text-xs md:text-sm ">Full Name:</label>
<input type="text" name="fname" value={formadata.fname} onChange={changeHandler} id="fname" className="border border-slate-600 w-[90%] p-1 bg-slate-300 rounded-md outline-red-300"/>
</div>:""}


                              
                      <div className="flex flex-col gap-1">

                              <label htmlFor="emailid" className="font-semibold text-xs md:text-sm ">{isLogin ?"Username Or Email:":"Email:"}</label>
                     <input type="email" name="email" value={formadata.email} onChange={changeHandler} id="emailid" className="border border-slate-600 w-[90%] p-1 bg-slate-300 rounded-md outline-red-300" />
                      </div>
                    
                      <div className="flex flex-col gap-1">
                              <label htmlFor="pass" className="font-semibold text-sm ">Password:</label>
                              <div className="relative">
                              <input type={showpassword?"text":"password"} name="password" value={formadata.password} onChange={changeHandler}  id="pass" className="border border-slate-600 w-[90%] p-1 bg-slate-300 rounded-md outline-red-300" />
                              <span className="absolute top-[8px] right-12" onClick=
                              {visibilepassword}>{showpassword?<FaEyeSlash className="text-lg"/>:<FaEye className="text-lg"/>}</span>
                              </div>

                      </div>

                      {!isLogin? <div className="flex flex-col gap-1">

<label htmlFor="cpass" className="font-semibold text-xs md:text-sm ">Confirm Password:</label>
<div className="relative">
<input type={showpassword?"text":"password"} name="cpassword" value={formadata.cpassword} onChange={changeHandler} id="cpass" className="border border-slate-600 w-[90%] p-1 bg-slate-300 rounded-md outline-red-300"/>
<span className="absolute top-[8px] right-12" onClick={visibilepassword}>{showpassword?<FaEyeSlash className="text-lg"/>:<FaEye className="text-lg"/>}</span>
</div>
</div>:""}

                      <div className="flex gap-1 ">
                      <input type="checkbox" name="remember" checked={formadata.remember} onChange={changeHandler} id="checking" className="border border-slate-600 accent-green-500 "/>
                              <label htmlFor="checking" className="font-semibold text-sm ">Remember Me</label>
                         
                      </div>
                      <div className="flex   items-baseline gap-2">
                      <button className="w-fit py-1 px-3 bg-black  text-white rounded-md cursor-pointer">{isLogin?"Login":"Sign Up"}</button>
                      <NavLink to="" ><span className="font-semibold text-sm text-red-600 underline cursor-pointer">{isLogin && "Forgot Password"}</span></NavLink>
                      </div>
                      <div><p className=" font-bold text-red-800 text-xs">{errormessage}</p></div>
                      <div className="font-bold text-green-900 text-xs underline ">
                          <p  onClick={loginchanger} className=" cursor-pointer">{isLogin ? "Don't have account? Sign Up..":"Have Account Then..Sign In"}</p>
                           
                              </div>
                      <div>
                   
                      </div>
                      </form>
                     
                      
                    </div>

          )
}
export default Formx;