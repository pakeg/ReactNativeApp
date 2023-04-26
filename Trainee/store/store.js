import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "./storeSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: { storeSlice, cartSlice },
});

export default store;
