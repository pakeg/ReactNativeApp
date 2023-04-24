import { createSlice } from "@reduxjs/toolkit";
import categoryStore from "./categoryStore";
import dishesStore from "./dishesStore";
import restaurantStore from "./restaurantStore";

const initialState = { categoryStore, dishesStore, restaurantStore };

const storeSlice = createSlice({
  name: "storeSlice",
  initialState,
  reducers: {},
});

export default storeSlice.reducer;
