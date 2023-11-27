
import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import MainBody from './components/MainBody';
import  Footer  from './components/Footer';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import RestroList from './components/RestroList';
import RestroMenu from './components/RestroMenu';
import { Provider } from 'react-redux';
import AppStore from './utils/Redux/AppStore';
import Cart from './components/Cart';
import ScrollToTop from './components/ScrollToTop';
import Formx from './components/Formx';
import pikathunder from "./assets/picka_thunder.gif"
import { useState ,useEffect} from 'react';






export const App=()=>
{

   const [loading,setloading]=useState(true);





 

   useEffect(()=>
   {
 
     const cleartime=setTimeout(()=>
     {
       setloading(false);
     
 
     },3000)
 
     return ()=>clearTimeout(cleartime);
 
   },[]);


   if(loading)
   {
          return(
          <div className='flex justify-center items-center min-h-screen flex-col-reverse bg-green-600 gap-2'>
           <img src={pikathunder} alt='' />
           <p className='font-bold text-lg underline sm:text-3xl text-red-800 font-serif'>Welcome To DesiFoodAdda..</p>
          </div>)
   }

   return (
           <Provider store={AppStore}>
         
          <div className='app'>
          <ScrollToTop></ScrollToTop>
          <Header/>
          <Outlet/>
          <Footer/>
          </div>
          
          
          </Provider>
          
   )
}

const approuter=createBrowserRouter([
    {
      path:"/",
      element:<App/>,
      children:[
         {
            path:"/",
            element:<MainBody/>,

         },
         {
            path:"/about",
            element:<About/>
         },
         {
            path:"/restro",
            element:<RestroList/>
         },
         {
            path:"/menu/:resId",
            element:<RestroMenu/>
         },
         {
            path:"/cart",
            element:<Cart/>
         },
         {
            path:"/formx",
            element:<Formx/>
         }
        

      ],
      errorElement:<Error/>
     
    },
   
  
      

])



const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter}/>);