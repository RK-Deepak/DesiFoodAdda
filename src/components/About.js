import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import minephoto from "../assets/mine.jpeg"
import logomain from "../assets/logomain.png"


const About=()=>
{
   
  
    return (
          <div className='flex justify-evenly p-6 items-center flex-wrap-reverse gap-3 '>
                    <div className='flex flex-col gap-2 items-center'>
                    <h1 className='font-bold text-2xl sm:text-4xl font-serif'>RK_<spam className=" text-slate-800">Deepak Verma</spam></h1>
                    <p className='text-slate-600 font-serif font-semibold justify-center text-sm sm:text-lg'>Hi,I am a frontend developer,who loves to build scalable application from point 0 .<br>
                    </br>This app is developed by me using React and some external libraries..</p>
                    <div className='flex gap-1'>
                              <FaLinkedin className='  text-3xl sm:text-5xl text-blue-400 '/>
                              <FaGithub className=' text-3xl sm:text-5xl text-slate-800'/>
                              <FaInstagram className=' text-3xl sm:text-5xl text-red-700'/>
                              <FaFacebook className=' text-3xl sm:text-5xl text-blue-600'/>
                    </div>
                    </div>
                    <div className='border-2 border-violet-500 rounded-full p-2 bg-green-300'>
                         <img src={minephoto || logomain} alt='mine' className='max-w-[200px] sm:max-w-[300px] rounded-full' loading='eager'/>
                    </div>
          </div>
    )
}
export default About;