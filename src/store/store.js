import { configureStore } from "@reduxjs/toolkit";
import tasksSliceReducer from "./taskSlice";
export const store = configureStore({
  reducer: {
    tasks: tasksSliceReducer,
  },
});
