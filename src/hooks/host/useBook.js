import { useMutation } from "@tanstack/react-query";

import { useState } from "react";
import { guestApi } from "../../utils/api";

export default function useBook() {
  const [manualLoading, setManualLoading] = useState(false);

  const { mutateAsync: getBookingHost } = useMutation({
    mutationKey: ["get_host_booking_list", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post("get_host_booking_list", payload);
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

  const { mutateAsync: getBookingDetails } = useMutation({
    mutationKey: ["host_booking_details", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post("host_booking_details", payload);
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

  const { mutateAsync: getApproveDecline } = useMutation({
    mutationKey: ["approve_decline_booking", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        const response = await guestApi.post(
          "approve_decline_booking",
          payload
        );
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

  const { mutateAsync: FilterPropertyReview } = useMutation({
    mutationKey: ["filter_property_reviews", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        console.log("payload is", payload);
        const response = await guestApi.post(
          "filter_property_reviews",
          payload
        );
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

  const { mutateAsync: hostReportViolation } = useMutation({
    mutationKey: ["host_report_violation", "user"],
    mutationFn: async (payload) => {
      try {
        setManualLoading(true);
        console.log("payload is", payload);
        const response = await guestApi.post(
          "host_report_violation",
          payload
        );
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
    getBookingHost,
    getBookingDetails,
    getApproveDecline,
    FilterPropertyReview,
    hostReportViolation
  };
}
