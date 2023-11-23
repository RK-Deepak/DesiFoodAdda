import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Each item will have the structure { card: { info: {...} }, quantity: 1 }
  },
  reducers: {
    additem: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item?.card?.info?.id === action.payload?.card?.info?.id
      );

      if (existingItemIndex !== -1) {
        // If the item already exists, increase its quantity
        state.items[existingItemIndex].quantity += 1;
      } else {
        // If the item doesn't exist, add it to the state with quantity 1
        state.items.push({ card: action.payload.card, quantity: 1 });
      }
    },
    removeitem: (state, action) => {

        const existingItemIndex=state.items.findIndex(
            (item)=>item?.card?.info?.id===action.payload
            
        )

        if(existingItemIndex!==-1)
        {
            
                state.items[existingItemIndex].quantity-=1;
            
            if(state.items[existingItemIndex].quantity===0)
            {
                state.items.splice(existingItemIndex,1);
            }
        }

   
      return state;
       
    },
    clearcart: (state) => {
      state.items.length = 0;
    },
  },
});

export default CartSlice.reducer;

export const { additem, removeitem, clearcart } = CartSlice.actions;
