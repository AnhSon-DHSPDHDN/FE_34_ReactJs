import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  profileUser: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuth = true;
      state.profileUser = {
        username: action.payload.username,
      };
      console.log(state, "state reducer ne!!");
      console.log(action, "action reducer ne!!");
    },
  },
});

export const { loginSuccess } = authSlice.actions;
export default authSlice.reducer;
