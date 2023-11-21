import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";

const AppStore=configureStore({
          reducer:
          {
                   cart:CartSlice,
          }
});

export default AppStore;