import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dishes: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCard(state, action) {
      state.dishes.push(action.payload);
      console.log(action);
    },
    removeFromCard(state, { payload: { id } }) {
      state.dishes = state.dishes.filter((dish) => {
        return dish.id == id;
      });
    },
  },
});

export const { addToCard } = cartSlice.actions;
export default cartSlice.reducer;
