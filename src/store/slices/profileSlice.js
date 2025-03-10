import { createSlice } from "@reduxjs/toolkit";
import { KEYS } from "../../config/Constant";

const initialState = {
  profileData: null,
  showPersonaVerification: false
};

export const userSlice = createSlice({
  name: "guestProfile",
  initialState,
  reducers: {
    setGuestProfile: (state, action) => {
      state.profileData = action.payload;
      // Save user info to localStorage
      //   localStorage.setItem(KEYS.USER_INFO, JSON.stringify(action.payload));
    },
    addAboutMeToProfile: (state, action) => {
      state.profileData.about_me = action.payload.about_me;
    },
    addNameToProfile: (state, action) => {
      state.profileData.first_name = action.payload.first_name;
      state.profileData.last_name = action.payload.last_name;
    },
    addHobbyInProfile: (state, action) => {
      state.profileData.hobbies.push(action.payload.hobby_name);
      // Save user info to localStorage
      //   localStorage.setItem(KEYS.USER_INFO, JSON.stringify(action.payload));
    },
    updatedHobbyInProfile: (state, action) => {
      state.profileData.hobbies = state.profileData.hobbies.map((item, index) =>
        index === action.payload.index ? action.payload.hobby : item
      );
      // Save user info to localStorage
      //   localStorage.setItem(KEYS.USER_INFO, JSON.stringify(action.payload));
    },
    deleteHobbyFromProfile: (state, action) => {
      state.profileData.hobbies = state.profileData.hobbies.filter(
        (_, i) => i !== action.payload.index
      );
      // Save user info to localStorage
      //   localStorage.setItem(KEYS.USER_INFO, JSON.stringify(action.payload));
    },
    addPetInProfile: (state, action) => {
      state.profileData.pets.push(action.payload.pet_name);
      // Save user info to localStorage
      //   localStorage.setItem(KEYS.USER_INFO, JSON.stringify(action.payload));
    },
    updatedPetInProfile: (state, action) => {
      state.profileData.pets = state.profileData.pets.map((item, index) =>
        index === action.payload.index ? action.payload.pet_name : item
      );
      // Save user info to localStorage
      //   localStorage.setItem(KEYS.USER_INFO, JSON.stringify(action.payload));
    },
    deletePetFromProfile: (state, action) => {
      state.profileData.pets = state.profileData.pets.filter(
        (_, i) => i !== action.payload.index
      );
      // Save user info to localStorage
      //   localStorage.setItem(KEYS.USER_INFO, JSON.stringify(action.payload));
    },
    addWorkInProfile: (state, action) => {
      state.profileData.my_work.push(action.payload.work_name);
      // Save user info to localStorage
      //   localStorage.setItem(KEYS.USER_INFO, JSON.stringify(action.payload));
    },
    updatedWorkInProfile: (state, action) => {
      state.profileData.my_work = state.profileData.my_work.map((item, index) =>
        index === action.payload.index ? action.payload.work_name : item
      );
      // Save user info to localStorage
      //   localStorage.setItem(KEYS.USER_INFO, JSON.stringify(action.payload));
    },
    deleteWorkFromProfile: (state, action) => {
      state.profileData.my_work = state.profileData.my_work.filter(
        (_, i) => i !== action.payload.index
      );
      // Save user info to localStorage
      //   localStorage.setItem(KEYS.USER_INFO, JSON.stringify(action.payload));
    },
    addLanguageInProfile: (state, action) => {
      state.profileData.languages.push(action.payload.language_name);
      // Save user info to localStorage
      //   localStorage.setItem(KEYS.USER_INFO, JSON.stringify(action.payload));
    },
    updatedLanguageInProfile: (state, action) => {
      state.profileData.languages = state.profileData.languages.map(
        (item, index) =>
          index === action.payload.index ? action.payload.language_name : item
      );
      // Save user info to localStorage
      //   localStorage.setItem(KEYS.USER_INFO, JSON.stringify(action.payload));
    },
    deleteLanguageFromProfile: (state, action) => {
      state.profileData.languages = state.profileData.languages.filter(
        (_, i) => i !== action.payload.index
      );
      // Save user info to localStorage
      //   localStorage.setItem(KEYS.USER_INFO, JSON.stringify(action.payload));
    },
    addPlaceInProfile: (state, action) => {
      state.profileData.where_live.push(action.payload.place_name);
      // Save user info to localStorage
      //   localStorage.setItem(KEYS.USER_INFO, JSON.stringify(action.payload));
    },
    updatedPlaceInProfile: (state, action) => {
      state.profileData.where_live = state.profileData.where_live.map(
        (item, index) =>
          index === action.payload.index ? action.payload.place_name : item
      );
      // Save user info to localStorage
      //   localStorage.setItem(KEYS.USER_INFO, JSON.stringify(action.payload));
    },
    deletePlaceFromProfile: (state, action) => {
      state.profileData.where_live = state.profileData.where_live.filter(
        (_, i) => i !== action.payload.index
      );
      // Save user info to localStorage
      //   localStorage.setItem(KEYS.USER_INFO, JSON.stringify(action.payload));
    },
    addStreetToProfile: (state, action) => {
      state.profileData.street = action.payload.street_address;
    },
    addCityToProfile: (state, action) => {
      state.profileData.city = action.payload.city;
    },
    addStateToProfile: (state, action) => {
      state.profileData.state = action.payload.state;
    },
    addZipCodeToProfile: (state, action) => {
      state.profileData.zip_code = action.payload.zip_code;
    },
    openPersona: (state) => {
      state.showPersonaVerification = true;
    },
    closePersona: (state) => {
      state.showPersonaVerification = false;
    },
  },
});

export const {
  setGuestProfile,
  addAboutMeToProfile,
  addNameToProfile,
  addHobbyInProfile,
  updatedHobbyInProfile,
  deleteHobbyFromProfile,
  addPetInProfile,
  updatedPetInProfile,
  deletePetFromProfile,
  addWorkInProfile,
  updatedWorkInProfile,
  deleteWorkFromProfile,
  addLanguageInProfile,
  updatedLanguageInProfile,
  deleteLanguageFromProfile,
  addPlaceInProfile,
  updatedPlaceInProfile,
  deletePlaceFromProfile,
  addStreetToProfile,
  addCityToProfile,
  addStateToProfile,
  addZipCodeToProfile,
  openPersona,
  closePersona
} = userSlice.actions;

export default userSlice.reducer;
