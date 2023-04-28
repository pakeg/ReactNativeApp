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
    },
    removeFromCard(state, { payload: { id, restaurant } }) {
      state.dishes = state.dishes.filter((dish) => {
        return dish.id != id || dish.restaurant != restaurant;
      });
    },
  },
});
export const infoAboutRestaurantCart = (state) => {
  const restaurant = state.cartSlice.dishes.map((dish) => {
    return state.storeSlice.restaurantStore.find(
      (res) => res.name == dish.restaurant
    );
  });
  return restaurant;
};
export const infoAboutCart = (state) => {
  const info = state.cartSlice.dishes.reduce(
    (cur, next) => {
      return {
        summ: cur.summ + next.price * next.count,
        count: cur.count + next.count,
      };
    },
    { summ: 0, count: 0 }
  );

  const orderGroupByRest = state.cartSlice.dishes.reduce((acc, next) => {
    if (!acc[next.restaurant]) acc[next.restaurant] = [];
    acc[next.restaurant].push(next);
    return acc;
  }, {});

  return { ...info, orderGroupByRest };
};
export const { addToCard, removeFromCard } = cartSlice.actions;
export default cartSlice.reducer;
