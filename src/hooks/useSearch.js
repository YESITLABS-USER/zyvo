import { api, guestApi } from "../utils/api";
import { useState } from "react";

export default function useContent() {
    const { mutateAsync: searchData } = useMutation({
        mutationKey: [`signup_email`, "logout"],
        mutationFn: async (payload) => {
          try {
            setManualLoading(true);
            const response = await api.post("signup_email", payload);
    
            const { data } = response;
    
            if (data?.data) {
              // Dispatch user info to Redux store after a slight delay
    
              setTimeout(() => {
                dispatch(setUserInfo(data?.data));
              }, 1000);
            }
    
            return {
              ...data?.data,
            };
          } catch (error) {
            setManualLoading(false);
            // console.log(error, "error message codes");
            const errorMessage =
              error.response?.data?.message || // Custom error from API
              error.message || // Default error message
              "An unknown error occurred";
    
            throw new Error(errorMessage);
          } finally {
            setManualLoading(false);
          }
        },
      });
      //

      const isLoading = manualLoading;
  return {

    isLoading,
    searchData
  }

}