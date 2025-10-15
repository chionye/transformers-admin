/** @format */

import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import ApiRoutes from "./api-routes";
import type { MakeRequestFunction } from "@/types";

export const BaseURL = ApiRoutes.BASE_URL_LIVE;

// Axios instance
export const API: AxiosInstance = axios.create({
  baseURL: BaseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add withCredentials conditionally
// API.interceptors.request.use((config) => {
//   // Only set withCredentials for non-login requests
//   if (!config.url?.endsWith(ApiRoutes.LoginUser)) {
//     config.withCredentials = true;
//   }
//   return config;
// });

let authToken: string | null = null;

// Function to set the token globally for the API instance
export const setAuthToken = (token: string | null) => {
  authToken = token;
};

// Request Interceptor: Attach token to every request
API.interceptors.request.use(
  async (config) => {
    // Check if authToken is already set in memory
    if (!authToken) {
      // If not, try to load it from localStorage
      const storedToken = localStorage.getItem("userToken");
      if (storedToken) {
        authToken = storedToken; // Update in-memory token
      }
    }

    // Attach the token if available and if it's not a login request
    if (authToken && !config.url?.endsWith(ApiRoutes.LoginUser)) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Handle 403 errors and clear localStorage
API.interceptors.response.use(
  (response) => {
    // Pass through successful responses
    return response;
  },
  (error) => {
    // Check if the error response status is 403
    if (error.response?.status === 403) {
      // Clear all authentication data from localStorage
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("userToken");

      // Clear the in-memory auth token
      authToken = null;

      // Redirect to login page
      window.location.href = "/";
    }

    return Promise.reject(error);
  }
);

// Helper function to build headers (still useful for specific overrides)
function buildHeaders(
  //eslint-disable-next-line
  payloadData?: any,
  tokenOrHeaders?: string | Record<string, string>
): Record<string, string> {
  const customHeaders: Record<string, string> = {};

  if (typeof tokenOrHeaders === "string") {
    customHeaders["Authorization"] = `Bearer ${tokenOrHeaders}`;
  } else if (typeof tokenOrHeaders === "object") {
    Object.assign(customHeaders, tokenOrHeaders);
  }

  const isFormData = payloadData instanceof FormData;
  if (isFormData) {
    if (customHeaders["Content-Type"]) {
      delete customHeaders["Content-Type"];
    }
  }
  return customHeaders;
}

// GET Request
export function getRequest<R = unknown>(): MakeRequestFunction<R> {
  return async (url, options) => {
    try {
      const config: AxiosRequestConfig = {
        headers: buildHeaders(undefined, options?.tokenOrHeaders),
      };
      const response = await API.get<R>(url, config);
      return response;
      //eslint-disable-next-line
    } catch (error: any) {
      console.error("GET Request Error:", error);
      throw error.response?.data || error;
    }
  };
}

// POST Request
//eslint-disable-next-line
export function postRequest<R = any>(): MakeRequestFunction<R> {
  return async (url, options) => {
    try {
      const config: AxiosRequestConfig = {
        headers: buildHeaders(options?.data, options?.tokenOrHeaders),
      };
      console.log(url, options?.data, config);
      const response = await API.post<R>(url, options?.data, config);
      return response;
      //eslint-disable-next-line
    } catch (error: any) {
      console.error("POST Request Error:", error);
      throw error.response?.data || error;
    }
  };
}

// PATCH Request
//eslint-disable-next-line
export function patchRequest<R = any>(): MakeRequestFunction<R> {
  return async (url, options) => {
    try {
      const config: AxiosRequestConfig = {
        headers: buildHeaders(options?.data, options?.tokenOrHeaders),
      };
      const response = await API.patch<R>(url, options?.data, config);
      return response;
      //eslint-disable-next-line
    } catch (error: any) {
      console.error("PATCH Request Error:", error);
      throw error.response?.data || error;
    }
  };
}

// PUT Request
//eslint-disable-next-line
export function putRequest<R = any>(): MakeRequestFunction<R> {
  return async (url, options) => {
    try {
      const config: AxiosRequestConfig = {
        headers: buildHeaders(options?.data, options?.tokenOrHeaders),
      };
      const response = await API.put<R>(url, options?.data, config);
      return response;
      //eslint-disable-next-line
    } catch (error: any) {
      console.error("PUT Request Error:", error);
      throw error.response?.data || error;
    }
  };
}

// DELETE Request
//eslint-disable-next-line
export function deleteRequest<R = any>(): MakeRequestFunction<R> {
  return async (url, options) => {
    try {
      const config: AxiosRequestConfig = {
        headers: buildHeaders(undefined, options?.tokenOrHeaders),
      };
      const response = await API.delete<R>(url, {
        ...config,
      });
      return response;
      //eslint-disable-next-line
    } catch (error: any) {
      console.error("DELETE Request Error:", error);
      throw error.response?.data || error;
    }
  };
}
