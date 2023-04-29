export const categoryRestaurant = (state, id) => {
  const restaurant = state.storeSlice.restaurantStore.filter((rest) => {
    const catId = rest.category.map((cat) => {
      if (cat.id == id) return cat.id;
    });
    return catId.includes(id);
  });
  return restaurant;
};

export default [
  {
    id: 1,
    name: "thai",
    imgSrc: "thai.jpg",
  },
  {
    id: 2,
    name: "desserts",
    imgSrc: "desserts.jpeg",
  },
  {
    id: 3,
    name: "asian",
    imgSrc: "asian.jpg",
  },
  {
    id: 4,
    name: "burger",
    imgSrc: "burger.jpg",
  },
  {
    id: 5,
    name: "pizza",
    imgSrc: "pizza.jpg",
  },
  {
    id: 6,
    name: "shushi",
    imgSrc: "sushi.jpg",
  },
];
