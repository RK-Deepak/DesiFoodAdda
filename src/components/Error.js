import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error=()=>
{
       const err=useRouteError();
     
       const {statusText,error}=err;
       return (
          <div className='flex flex-col gap-1 w-[100%] h-screen justify-center items-center'>
                    <h1 className='text-xl sm:text-4xl font-mono font-bold text-red-800'>{statusText}</h1>
                    <p className='text-lg sm:text-3xl font-mono font-bold text-red-500'>{error.message}</p>
                    <img src='https://i.imgur.com/ks9WhlU.gif' alt='error' className='h-[200px] w-[200px] md:h-[300px] md:w-[300px]'/>
                 
          </div>
       )
}
export default Error