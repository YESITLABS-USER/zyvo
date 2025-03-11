import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";

import contentSlice from "./slices/contentSlice";

import profileSlice from "./slices/profileSlice";
import hostuserSlice from "./slices/hostuserSlice";
import { commonSlice } from "./slices/commonSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    content: contentSlice,
    profile: profileSlice,
    hostuser: hostuserSlice,
    common : commonSlice.reducer,
  },
});

export default store;
