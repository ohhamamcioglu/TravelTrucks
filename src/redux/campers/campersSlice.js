import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (params, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/campers`, { params });
      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        return { items: [], total: 0 };
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  items: [],
  total: 0,
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    resetCampers(state) {
      state.items = [];
      state.total = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.items;
        state.total = action.payload.total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetCampers } = campersSlice.actions;
export default campersSlice.reducer;
