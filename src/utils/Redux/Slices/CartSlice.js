import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const CartSlice=createSlice(
          {
                    name:"cart",
                    initialState:{
                              items:[]
                    },
                    reducers:
                    {
                              additem:(state,action)=>
                              {
                                        state.items.push(action.payload);
                              },
                              removeitem:(state,action)=>
                              {
                                  const remaining= state.items.filter((item)=>(item?.card?.info?.id)!==action.payload);
                                  console.log(remaining);
                                  return {
                                        ...state,
                                        items:remaining,
                                  }
                                  
                              },
                              clearcart:(state)=>
                              {
                                 state.items.length=0;
                              }
                    }
          }
)

export default CartSlice.reducer;

export const {additem,removeitem,clearcart}=CartSlice.actions;