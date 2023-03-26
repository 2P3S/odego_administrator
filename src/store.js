import { configureStore, createAction } from "@reduxjs/toolkit";

const increament = createAction("INCREMENT");
const decreament = createAction("DECREMENT");

function counter(state = 0, action) {
  switch (action.type) {
    case increament.type:
      return state + 1;
    case decreament.type:
      return state - 1;
    default:
      return state;
  }
}

const store = configureStore({
  reducer: counter,
});

document.getElementById("increment").addEventListener("click", () => {
  store.dispatch(increament());
});

export default store;
