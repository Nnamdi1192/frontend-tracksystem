import { configureStore } from "@reduxjs/toolkit";
import truckReducer from "../features/truck/truckSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    truck: truckReducer,
    user: userReducer,
  },
});
