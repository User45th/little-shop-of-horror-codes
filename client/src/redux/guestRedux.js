import { createSlice } from "@reduxjs/toolkit";

const guestSlice = createSlice({
  name: "guest",
  initialState: {
    error: false,
    username: null,
    email: null,
    password: null,
  },
  reducers: {
    registerSuccess: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    registerFailure: (state) => {
      state.error = true;
    },
  },
});

export const { registerStart, registerSuccess, registerFailure } =
  guestSlice.actions;
export default guestSlice.reducer;
