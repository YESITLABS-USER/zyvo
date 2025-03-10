import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { setUserInfo } from "../store/slices/userSlice";

import { api, guestApi } from "../utils/api";

import { useState } from "react";
import { KEYS } from "../config/Constant";
import {
  setGuestHome,
  setGuestWishlistData,
} from "../store/slices/commonSlice";
// import { KEYS } from "../config/Constant";

export default function useCommon() {
  const dispatch = useDispatch();
  const [manualLoading, setManualLoading] = useState(false);

  const { mutateAsync: guestHomeData } = useMutation({
    mutationKey: ["get_home_data", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post("get_home_data", payload);
        const { data } = response;

        if (data?.data) {
          setTimeout(() => {
            dispatch(setGuestHome(data?.data));
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

  const { mutateAsync: getPropertyDetails } = useMutation({
    mutationKey: ["get_home_property_details", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post(
          "get_home_property_details",
          payload
        );
        const { data } = response;

        // if (data?.data) {
        //   setTimeout(() => {
        //     dispatch(setGuestHome(data?.data));
        //   }, 1000);
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

  const { mutateAsync: getPropertyReviews } = useMutation({
    mutationKey: ["filter_property_reviews", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post(
          "filter_property_reviews",
          payload
        );
        const { data } = response;

        // if (data?.data) {
        //   setTimeout(() => {
        //     dispatch(setGuestHome(data?.data));
        //   }, 1000);
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

  const { mutateAsync: guestWishlistData } = useMutation({
    mutationKey: ["get_wishlist", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post("get_wishlist", payload);
        const { data } = response;

        if (data?.data) {
          setTimeout(() => {
            dispatch(setGuestWishlistData(data?.data));
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

  const { mutateAsync: saveItemInWishlist } = useMutation({
    mutationKey: ["save_item_in_wishlist", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post("save_item_in_wishlist", payload);
        const { data } = response;

        // if (data?.data) {
        //   setTimeout(() => {
        //     dispatch(setGuestWishlistData(data?.data));
        //   }, 1000);
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

  const { mutateAsync: createNewWishlist } = useMutation({
    mutationKey: ["create_wishlist", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post("create_wishlist", payload);
        const { data } = response;

        // if (data?.data) {
        //   setTimeout(() => {
        //     dispatch(setGuestWishlistData(data?.data));
        //   }, 1000);
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

  const { mutateAsync: getSavedItemsInWishlist } = useMutation({
    mutationKey: ["get_saved_item_wishlist", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post(
          "get_saved_item_wishlist",
          payload
        );
        const { data } = response;

        // if (data?.data) {
        //   setTimeout(() => {
        //     dispatch(setGuestWishlistData(data?.data));
        //   }, 1000);
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

  const { mutateAsync: deleteWishlist } = useMutation({
    mutationKey: ["delete_wishlist", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post("delete_wishlist", payload);
        const { data } = response;

        // if (data?.data) {
        //   setTimeout(() => {
        //     dispatch(setGuestWishlistData(data?.data));
        //   }, 1000);
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

  const { mutateAsync: removeItemFromWishlist } = useMutation({
    mutationKey: ["remove_item_from_wishlist", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post(
          "remove_item_from_wishlist",
          payload
        );
        const { data } = response;

        // if (data?.data) {
        //   setTimeout(() => {
        //     dispatch(setGuestWishlistData(data?.data));
        //   }, 1000);
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

  //for get all card

  const { mutateAsync: getAllSavedCard } = useMutation({
    mutationKey: ["get_user_cards", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post("get_user_cards", payload);
        const { data } = response;

        // if (data?.data) {
        //   setTimeout(() => {
        //     dispatch(setGuestWishlistData(data?.data));
        //   }, 1000);
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
  //

  const { mutateAsync: saveCardStripe } = useMutation({
    mutationKey: ["save_card_stripe", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post("save_card_stripe", payload);
        const { data } = response;

        // if (data?.data) {
        //   setTimeout(() => {
        //     dispatch(setGuestWishlistData(data?.data));
        //   }, 1000);
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

  //

  const { mutateAsync: setPrefferCard } = useMutation({
    mutationKey: ["set_preferred_card", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post("set_preferred_card", payload);
        const { data } = response;

        // if (data?.data) {
        //   setTimeout(() => {
        //     dispatch(setGuestWishlistData(data?.data));
        //   }, 1000);
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
  //

  const { mutateAsync: getSavedAddress } = useMutation({
    mutationKey: ["same_as_mailing_address", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post(
          "same_as_mailing_address",
          payload
        );
        const { data } = response;

        // if (data?.data) {
        //   setTimeout(() => {
        //     dispatch(setGuestWishlistData(data?.data));
        //   }, 1000);
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

  const { mutateAsync: bookHostProverty } = useMutation({
    mutationKey: ["book_property", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post("book_property", payload);
        const { data } = response;

        // if (data?.data) {
        //   setTimeout(() => {
        //     dispatch(setGuestWishlistData(data?.data));
        //   }, 1000);
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
    isLoading,
    guestHomeData,
    getPropertyDetails,
    getPropertyReviews,
    guestWishlistData,
    saveItemInWishlist,
    createNewWishlist,
    getSavedItemsInWishlist,
    deleteWishlist,
    removeItemFromWishlist,
    getAllSavedCard,
    saveCardStripe,
    setPrefferCard,
    getSavedAddress,
    bookHostProverty,
  };
}
