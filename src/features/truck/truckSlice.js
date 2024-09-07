import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTrucks } from "./truckService";

const initialState = {
  truck: {},
  trucks: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const fetchTrucks = createAsyncThunk(
  "truck/get",
  async (_, thunkAPI) => {
    try {
      return await getTrucks();
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.data ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const truckSlice = createSlice({
  name: "truck",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrucks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTrucks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(fetchTrucks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.trucks = action.payload;
      });
  },
});

export default truckSlice.reducer;
