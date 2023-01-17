import { configureStore } from "@reduxjs/toolkit";

function appReducer(state = {}, action) {
  return state;
}

export default configureStore({
  reducer: { root: appReducer },
});
