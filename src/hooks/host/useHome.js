import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";

import { useState } from "react";
import { guestApi } from "../../utils/api";

export default function useHome() {
  const dispatch = useDispatch();
  const [manualLoading, setManualLoading] = useState(false);

  const { mutateAsync: getHomeList } = useMutation({
    mutationKey: ["get_properties_lists", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post("get_properties_lists", payload);
        const { data } = response;

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

  const { mutateAsync: addPropertyHost } = useMutation({
    mutationKey: ["store_property_details", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post("store_property_details", payload);
        const { data } = response;

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

  /// get update all value of this

  const { mutateAsync: getPropertyDetails } = useMutation({
    mutationKey: ["get_property_details", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post("get_property_details", payload);
        const { data } = response;

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

  const { mutateAsync: updateProperyDetails } = useMutation({
    mutationKey: ["update_property_details", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.put("update_property_details", payload);
        const { data } = response;

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
    getHomeList,
    addPropertyHost,
    getPropertyDetails,
    updateProperyDetails,
  };
}
