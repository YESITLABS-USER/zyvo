import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";

import contentSlice from "./slices/contentSlice";

import profileSlice from "./slices/profileSlice";
import hostuserSlice from "./slices/hostuserSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    content: contentSlice,
    profile: profileSlice,
    hostuser: hostuserSlice,
  },
});

export default store;
