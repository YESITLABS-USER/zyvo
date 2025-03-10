import axios from "axios";
import { KEYS, baseURL } from "../config/Constant";
// import { clearUser } from "../store/slices/userSlice";
import store from "../store";

// Create axios instances
const guestApi = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const formDataApi = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor for guestApi
// guestApi.interceptors.request.use(
//   async (config) => {
//     try {
//       const { userInfo } = store.getState().user;
//       let token = userInfo?.token;
//       // console.log(token, "sstored data comes form this");

//       // Use localStorage instead of AsyncStorage for web
//       const storedUserString = JSON.parse(localStorage.getItem(KEYS.USER_INFO));

//       token = storedUserString?.access_token || token;
//       if (token) {
//         config.headers["Authorization"] = token ? `Bearer ${token}` : "";
//       } else {
//         // console.log("No token found");
//       }

//       return config;
//     } catch (error) {
//       console.error("Error in interceptor", error);
//       return Promise.reject(error);
//     }
//   },
//   (error) => {
//     return Promise.reject(error); // Handle request errors
//   }
// );
guestApi.interceptors.request.use(
  async (config) => {
    try {
      const { userInfo } = store.getState().user;
      let token = userInfo?.token;
      // console.log("Token from Redux:", token);

      // Use localStorage for web
      const storedUserString = localStorage.getItem(KEYS.USER_INFO);
      // console.log("Stored User String:", storedUserString);

      if (storedUserString) {
        try {
          // const parsedUser = JSON.parse(storedUserString);
          const parsedUser = JSON.parse(storedUserString);
          token = parsedUser?.access_token || token;
          // console.log("Final Token:", token);
        } catch (parseError) {
          console.error("Error parsing localStorage token:", parseError);
        }
      }

      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      } else {
        console.warn("No token found, API request might be unauthorized.");
      }

      return config;
    } catch (error) {
      console.error("Error in interceptor", error);
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);
// Request interceptor for formDataApi
formDataApi.interceptors.request.use(
  async (config) => {
    try {
      const { userInfo } = store.getState().user;
      let token = userInfo?.token;

      // Use localStorage instead of AsyncStorage for web
      const storedUserString = JSON.parse(localStorage.getItem(KEYS.USER_INFO));
      token = storedUserString?.access_token || token;

      if (token) {
        config.headers["Authorization"] = token ? `Bearer ${token}` : "";
      } else {
        // console.log("No token found");
      }

      return config;
    } catch (error) {
      console.error("Error in interceptor", error);
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error); // Handle request errors
  }
);

// Request interceptor for api
api.interceptors.request.use(
  async (config) => {
    try {
      return config;
    } catch (error) {
      console.error("Error in api request interceptor:", error);
      return Promise.reject(error);
    }
  },
  (error) => Promise.reject(error)
);

// Response interceptor for api
api.interceptors.response.use(
  (response) => {
    if (response) {
      return response;
    } else {
      return Promise.reject(
        new Error("Server not responding. Please try again.")
      );
    }
  },
  (err) => {
    const errorResponse = {
      message: "Something went wrong. Please try again later.",
      status: null,
      details: null,
    };

    if (err.response) {
      // If the API responded with an error status
      errorResponse.status = err.response.status;
      errorResponse.message = err.response.data?.data?.message;
    }

    // Special handling for unauthorized access
    if (err.response?.status === 401) {
      // store.dispatch(clearUser());
    }

    return Promise.reject(errorResponse);
  }
);

export { api, guestApi, formDataApi };
