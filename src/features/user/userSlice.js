import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./userService";

const initialState = {
  user: {},
  users: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const fetchUsers = createAsyncThunk("user/get", async (_, thunkAPI) => {
  try {
    const response = await getUsers();
    return response;
  } catch (err) {
    const message =
      (err.response && err.response.data && err.response.data.message) ||
      err.response ||
      err.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },

  extraReducers: (builders) => {
    builders
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload;
      });
  },
});

export default userSlice.reducer;
