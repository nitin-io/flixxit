import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: {}, token: null },
  reducers: {
    saveCredentials: (state, action) => {
      state.token = action.payload.token;
      state.user = { ...action.payload.user };
    },
    removeCredentials: (state) => {
      state.token = null;
      state.user = {};
    },
  },
});

export const { saveCredentials, removeCredentials } = authSlice.actions;

export default authSlice.reducer;
