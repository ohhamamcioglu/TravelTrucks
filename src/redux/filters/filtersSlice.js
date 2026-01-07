import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  type: "",
  features: [],
  page: 1,
  limit: 4,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
      state.page = 1;
    },
    setType(state, action) {
      state.type = action.payload;
      state.page = 1;
    },
    toggleFeature(state, action) {
      const feature = action.payload;
      if (state.features.includes(feature)) {
        state.features = state.features.filter((item) => item !== feature);
      } else {
        state.features.push(feature);
      }
      state.page = 1;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const {
  setLocation,
  setType,
  toggleFeature,
  setPage,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
