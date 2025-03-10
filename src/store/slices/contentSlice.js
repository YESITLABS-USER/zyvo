import { createSlice } from "@reduxjs/toolkit";
// import { KEYS } from "../../config/Constant";

const initialState = {
  privacyData: null,
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setPrivacyData: (state, action) => {
      state.privacyData = action.payload;
    },
  },
});

export const { setPrivacyData } = contentSlice.actions;

export default contentSlice.reducer;
