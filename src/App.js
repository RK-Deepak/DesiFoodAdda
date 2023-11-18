
import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import MainBody from './components/MainBody';
import  Footer  from './components/Footer';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import RestroList from './components/RestroList';



export const App=()=>
{
   return (
          <div className='app'>
          <Header/>
          <Outlet/>
          <Footer/>
          </div>
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
         }

      ],
      errorElement:<Error/>
     
    }
      

])

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter}/>);