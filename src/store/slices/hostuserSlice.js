import { createSlice } from "@reduxjs/toolkit";
// import { KEYS } from "../../config/Constant";

const initialState = {
  addPropertyDetails: null,
  propertyId: null,
  userType: "host",
};

export const hostuserSlice = createSlice({
  name: "hostUser",
  initialState,
  reducers: {
    setAddPropertyDetails: (state, action) => {
      state.addPropertyDetails = {
        ...state.addPropertyDetails, // Preserve previous data
        ...action.payload, // Merge new data
      };
    },
    setPropertyId: (state, action) => {
      state.propertyId = action.payload; // Merge new data
    },

    setUserType: (state, action) => {
      state.userType = action.payload;
    },
    clearAddPropertyDetails: (state) => {
      state.addPropertyDetails = {}; // Reset to an empty object or initial state
    },
  },
});

export const {
  setAddPropertyDetails,
  clearAddPropertyDetails,
  setUserType,
  setPropertyId,
} = hostuserSlice.actions;

export default hostuserSlice.reducer;
