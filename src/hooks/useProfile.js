import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { setUserInfo } from "../store/slices/userSlice";

import { guestApi } from "../utils/api";

import { useState } from "react";
import {
  setGuestProfile,
  addHobbyInProfile,
  updatedHobbyInProfile,
  deleteHobbyFromProfile,
  addPetInProfile,
  updatedPetInProfile,
  deletePetFromProfile,
  updatedWorkInProfile,
  addWorkInProfile,
  deleteWorkFromProfile,
  updatedLanguageInProfile,
  addLanguageInProfile,
  deleteLanguageFromProfile,
  addPlaceInProfile,
  updatedPlaceInProfile,
  deletePlaceFromProfile,
  addAboutMeToProfile,
  addNameToProfile,
} from "../store/slices/profileSlice";
// import { KEYS } from "../config/Constant";

export default function useProfile() {
  const dispatch = useDispatch();
  const [manualLoading, setManualLoading] = useState(false);

  const { mutateAsync: getUserProfile } = useMutation({
    mutationKey: ["get_user_profile", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post("get_user_profile", payload);
        const { data } = response;
        // console.log(data?.data, "data comes form api hitting");

        if (data?.data) {
          // Dispatch user info to Redux store after a slight delay
          setTimeout(() => {
            dispatch(setGuestProfile(data?.data));
          }, 1000);
        }

        return {
          ...data,
          message: data?.message,
        };
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "An unknown error occurred";
        throw new Error(errorMessage);
      } finally {
        setManualLoading(false);
      }
    },
  });

  const { mutateAsync: addAboutMe } = useMutation({
    mutationKey: ["add_about_me", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post("add_about_me", payload);
        const { data } = response;
        // console.log(data?.data, "data comes form api hitting");

        setTimeout(() => {
          dispatch(addAboutMeToProfile(payload));
        }, 1000);

        return {
          ...data,
          message: data?.message,
        };
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "An unknown error occurred";
        throw new Error(errorMessage);
      } finally {
        setManualLoading(false);
      }
    },
  });

  const { mutateAsync: addName } = useMutation({
    mutationKey: ["add_update_name", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post("add_update_name", payload);
        const { data } = response;
        // console.log(data?.data, "data comes form api hitting");

        setTimeout(() => {
          dispatch(addNameToProfile(payload));
        }, 1000);

        return {
          ...data,
          message: data?.message,
        };
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "An unknown error occurred";
        throw new Error(errorMessage);
      } finally {
        setManualLoading(false);
      }
    },
  });

  const { mutateAsync: addHobby } = useMutation({
    mutationKey: ["add_hobby", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post("add_hobby", payload);
        const { data } = response;
        // console.log(data?.data, "data comes form api hitting");

        if (payload.index) {
          setTimeout(() => {
            dispatch(updatedHobbyInProfile(payload));
          }, 1000);
        } else {
          setTimeout(() => {
            dispatch(addHobbyInProfile(payload));
          }, 1000);
        }

        return {
          ...data,
          message: data?.message,
        };
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "An unknown error occurred";
        throw new Error(errorMessage);
      } finally {
        setManualLoading(false);
      }
    },
  });

  const { mutateAsync: deleteHobby } = useMutation({
    mutationKey: ["delete_hobby", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post("delete_hobby", payload);
        const { data } = response;
        // console.log(data?.data, "data comes form api hitting");

        // if (data?.data) {

        // Dispatch user info to Redux store after a slight delay
        setTimeout(() => {
          dispatch(deleteHobbyFromProfile(payload));
        }, 1000);
        // }

        return {
          ...data,
          message: data?.message,
        };
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "An unknown error occurred";
        throw new Error(errorMessage);
      } finally {
        setManualLoading(false);
      }
    },
  });

  const { mutateAsync: addPet } = useMutation({
    mutationKey: ["add_pet", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post("add_pet", payload);
        const { data } = response;
        // console.log(data?.data, "data comes form api hitting");

        if (payload.index) {
          setTimeout(() => {
            dispatch(updatedPetInProfile(payload));
          }, 1000);
        } else {
          setTimeout(() => {
            dispatch(addPetInProfile(payload));
          }, 1000);
        }

        return {
          ...data,
          message: data?.message,
        };
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "An unknown error occurred";
        throw new Error(errorMessage);
      } finally {
        setManualLoading(false);
      }
    },
  });

  const { mutateAsync: deletePet } = useMutation({
    mutationKey: ["delete_pet", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post("delete_pet", payload);
        const { data } = response;
        // console.log(data?.data, "data comes form api hitting");

        // if (data?.data) {

        // Dispatch user info to Redux store after a slight delay
        setTimeout(() => {
          dispatch(deletePetFromProfile(payload));
        }, 1000);
        // }

        return {
          ...data,
          message: data?.message,
        };
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "An unknown error occurred";
        throw new Error(errorMessage);
      } finally {
        setManualLoading(false);
      }
    },
  });

  const { mutateAsync: addWork } = useMutation({
    mutationKey: ["add_my_work", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post("add_my_work", payload);
        const { data } = response;
        // console.log(data?.data, "data comes form api hitting");

        if (payload.index) {
          setTimeout(() => {
            dispatch(updatedWorkInProfile(payload));
          }, 1000);
        } else {
          setTimeout(() => {
            dispatch(addWorkInProfile(payload));
          }, 1000);
        }

        return {
          ...data,
          message: data?.message,
        };
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "An unknown error occurred";
        throw new Error(errorMessage);
      } finally {
        setManualLoading(false);
      }
    },
  });

  const { mutateAsync: deleteWork } = useMutation({
    mutationKey: ["delete_my_work", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post("delete_my_work", payload);
        const { data } = response;
        // console.log(data?.data, "data comes form api hitting");

        // if (data?.data) {

        // Dispatch user info to Redux store after a slight delay
        setTimeout(() => {
          dispatch(deleteWorkFromProfile(payload));
        }, 1000);
        // }

        return {
          ...data,
          message: data?.message,
        };
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "An unknown error occurred";
        throw new Error(errorMessage);
      } finally {
        setManualLoading(false);
      }
    },
  });

  const { mutateAsync: addLanguage } = useMutation({
    mutationKey: ["add_language", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post("add_language", payload);
        const { data } = response;
        // console.log(data?.data, "data comes form api hitting");

        if (payload.index) {
          setTimeout(() => {
            dispatch(updatedLanguageInProfile(payload));
          }, 1000);
        } else {
          setTimeout(() => {
            dispatch(addLanguageInProfile(payload));
          }, 1000);
        }

        return {
          ...data,
          message: data?.message,
        };
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "An unknown error occurred";
        throw new Error(errorMessage);
      } finally {
        setManualLoading(false);
      }
    },
  });

  const { mutateAsync: deleteLanguage } = useMutation({
    mutationKey: ["delete_language", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post("delete_language", payload);
        const { data } = response;
        // console.log(data?.data, "data comes form api hitting");

        // if (data?.data) {

        // Dispatch user info to Redux store after a slight delay
        setTimeout(() => {
          dispatch(deleteLanguageFromProfile(payload));
        }, 1000);
        // }

        return {
          ...data,
          message: data?.message,
        };
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "An unknown error occurred";
        throw new Error(errorMessage);
      } finally {
        setManualLoading(false);
      }
    },
  });

  const { mutateAsync: addPlace } = useMutation({
    mutationKey: ["add_live_place", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post("add_live_place", payload);
        const { data } = response;
        // console.log(data?.data, "data comes form api hitting");

        if (payload.index) {
          setTimeout(() => {
            dispatch(updatedPlaceInProfile(payload));
          }, 1000);
        } else {
          setTimeout(() => {
            dispatch(addPlaceInProfile(payload));
          }, 1000);
        }

        return {
          ...data,
          message: data?.message,
        };
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "An unknown error occurred";
        throw new Error(errorMessage);
      } finally {
        setManualLoading(false);
      }
    },
  });

  const { mutateAsync: deletePlace } = useMutation({
    mutationKey: ["delete_live_place", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post("delete_live_place", payload);
        const { data } = response;
        // console.log(data?.data, "data comes form api hitting");

        // if (data?.data) {

        // Dispatch user info to Redux store after a slight delay
        setTimeout(() => {
          dispatch(deletePlaceFromProfile(payload));
        }, 1000);
        // }

        return {
          ...data,
          message: data?.message,
        };
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "An unknown error occurred";
        throw new Error(errorMessage);
      } finally {
        setManualLoading(false);
      }
    },
  });

  const isLoading = manualLoading;
  return {
    getUserProfile,
    addAboutMe,
    addName,
    isLoading,
    addHobby,
    deleteHobby,
    addPet,
    deletePet,
    addWork,
    deleteWork,
    addLanguage,
    deleteLanguage,
    addPlace,
    deletePlace,
  };
}
