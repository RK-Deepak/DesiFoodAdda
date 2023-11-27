import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";
import UserSlice from "./Slices/UserSlice";

const AppStore=configureStore({
          reducer:
          {
                   cart:CartSlice,
                   user:UserSlice
          }
});

export default AppStore;