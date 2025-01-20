import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import mylistingReducer from "./mylisting/mylistingState";

export const store = configureStore({
  reducer: {
    user: userReducer,
    mylisting: mylistingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
