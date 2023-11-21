
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
//YEH AISE HE ARROR DIKHA RHA 




export const App=()=>
{
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
        

      ],
      errorElement:<Error/>
     
    },
    {
      path:"/formx",
      element:<Formx/>
   }
  
      

])

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter}/>);