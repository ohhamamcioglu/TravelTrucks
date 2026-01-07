import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filters/filtersSlice";
import campersReducer from "./campers/campersSlice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    campers: campersReducer,
  },
});
