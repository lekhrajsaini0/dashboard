import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Slice/DashSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
