import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./Redux/taskSlice";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
export default store;
