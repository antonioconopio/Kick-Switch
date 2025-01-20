import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  isAuthenticated: boolean;
  user: {
    id: number;
    username: string;
    email: string;
    fullname: string;
    password: string;
  };
  token: string;
}

const initialState: UserState = {
  user: {
    id: -1,
    username: "",
    email: "",
    fullname: "",
    password: "",
  },
  isAuthenticated: false,
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { token, user } = action.payload;
      state.isAuthenticated = true;
      state.token = token;
      state.user = user;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = "";
      state.user = {
        id: -1,
        username: "",
        email: "",
        fullname: "",
        password: "",
      };
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
