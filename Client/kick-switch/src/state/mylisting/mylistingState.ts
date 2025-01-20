import { createSlice } from "@reduxjs/toolkit";

interface mylistingState {
  refresh: boolean;
}

const initialState: mylistingState = {
  refresh: false,
};

const mylistingSlice = createSlice({
  name: "mylisting",
  initialState,
  reducers: {
    refresh: (state) => {
      state.refresh = !state.refresh;
    },
  },
});

export const { refresh } = mylistingSlice.actions;
export default mylistingSlice.reducer;
