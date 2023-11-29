import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { clearcart, removeitem } from "../utils/Redux/Slices/CartSlice";
import logomain from "../assets/logomain.png";
import pikaimage from "../assets/pika.gif" // Import the logomain image


const Cart = () => {
  const cartdata = useSelector((store) => store.cart.items);
 
  const dispatch = useDispatch();



  const emptycart = () => {
    dispatch(clearcart());
  };
 
  const deleteitem=(id)=>
  {
          console.log(id);
          dispatch(removeitem(id))
  }
  const netamount = cartdata.reduce((acc, itemCard) => {
    return acc + (itemCard?.card?.info?.price?itemCard?.card?.info?.price/ 100:256)*itemCard.quantity;
  }, 0);
  console.log(cartdata);

  if (cartdata.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen flex-col ">
        <img  src={pikaimage} alt="" className="max-h-[300px] max-w-[500px] relative left-[20px]" />
        <NavLink to="/restro">
          <button className="font-bold bg-violet-500 text-white text-md px-3 py-2 rounded-md">Start Eating</button>
        </NavLink>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center my-3 font-bold text-xl underline font-mono">Your Cart</h1>
      <div className="flex justify-between w-full sm:w-[80%] border-2 border-slate-700 mx-auto my-4 p-3 gap-3 flex-col sm:flex-row">
        <div className="flex flex-col w-full sm:border-r-2 border-slate-700 sm:pr-8">
          {cartdata.map((itemCard) => (
            <div className='flex justify-between border-b-2 border-slate-600 my-3 pb-4 gap-2 items-center flex-col sm:flex-row' key={itemCard?.card?.info?.id}>
              <div className='flex gap-1 flex-col items-center sm:items-start'>
                <p className='font-bold text-md sm:text-lg underline '>{itemCard?.card?.info?.name}</p>
                <p className='max-w-[80%] font-semibold text-xs sm:text-sm text-slate-700'>
                  {itemCard?.card?.info?.description || "This is one of the delicious dishes you can ever have in life.."}
                </p>
                <p className='font-bold text-sm text-green-400 underline'>Cost/Item ₹{itemCard?.card?.info?.price? itemCard?.card?.info?.price / 100:"256"}</p>
              </div>
              <div className='relative'>
                {itemCard?.card?.info?.imageId ? (
                  <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${itemCard?.card?.info?.imageId}`} className='max-w-[120px] max-h-[120px] rounded-md' />
                ) : (
                  <img src={logomain} alt='logo' className='max-w-[120px] max-h-[120px]' />
                )}
                <div className='px-2 py-1 text-white bg-black font-bold text-sm absolute bottom-0 left-[20%] rounded-md w-fit'>
                  <span className="text-red-500" onClick={()=>deleteitem(itemCard?.card?.info?.id)}>Remove-</span>
                </div>
              </div>
              <div className="py-1 px-2 rounded-md bg-black "><p className="text-bold text-white flex gap-1"><span>⚔️</span>{itemCard?.quantity}</p></div>
            </div>
           
          ))}
          
         
        </div>
        <div className="w-full sm:w-[40%] flex flex-col gap-3">
          <h2 className="font-bold font-mono text-xl text-center underline">Order Summary</h2>
          <div className="flex flex-col justify-evenly gap-3">
            <p className="font-bold">Amount Of Your Order: ₹{netamount}</p>
            <p className="font-bold">Shipping Charges: ₹34</p>
            <p className="font-bold">Net Amount: ₹{netamount + 34}</p>
          </div>
          <div className="flex flex-col gap-1">
            <button className="font-bold text-white py-2 px-3 bg-green-400 rounded-md">CheckOut</button>
            <button className="font-bold text-white py-2 px-3 bg-violet-400 rounded-md" onClick={() => emptycart()}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
