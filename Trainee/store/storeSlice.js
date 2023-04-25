import { createSlice } from "@reduxjs/toolkit";
import categoryStore from "./categoryStore";
import dishesStore from "./dishesStore";
import restaurantStore from "./restaurantStore";
import featureStore from "./featureStore";

const restaurant = restaurantStore.map((rest) => {
  const category = rest.category.map((id) => {
    return categoryStore.find((cat) => cat.id == id);
  });
  const dishes = rest.dishes.map((id) => {
    return dishesStore.find((dish) => dish.id == id);
  });
  return { ...rest, category, dishes };
});
const feature = featureStore.map((item) => {
  const rest = item.restaurant.map((id) => {
    return restaurant.find((rest) => rest.id == id);
  });
  return { ...item, restaurant: rest };
});

const initialState = {
  categoryStore,
  restaurantStore: restaurant,
  featureStore: feature,
};

const storeSlice = createSlice({
  name: "storeSlice",
  initialState,
  reducers: {},
});

export default storeSlice.reducer;
