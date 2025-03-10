import { createSlice } from "@reduxjs/toolkit";
// import { KEYS } from "../../config/Constant";

const initialState = {
  userInfo: null,
  userType: "guest",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      // Save user info to localStorage
      //   localStorage.setItem(KEYS.USER_INFO, JSON.stringify(action.payload));
    },

    setUserType: (state, action) => {
      state.userType = action.payload;
    },
    clearUser: (state) => {
      state.userInfo = null;
      // Remove user info from localStorage
      // localStorage.removeItem(KEYS.USER_INFO);
    },
  },
});

export const { setUserInfo, clearUser, setUserType } = userSlice.actions;

export default userSlice.reducer;
