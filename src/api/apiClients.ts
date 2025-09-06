/** @format */

import axios, { type AxiosResponse } from "axios";
import ApiRoutes from "./apiRoutes";

export const BaseURL = ApiRoutes.BASE_URL_DEV;

export const API = axios.create({
  baseURL: BaseURL,
  withCredentials: true, // ✅ Required to send cookies
  headers: {
    "Content-Type": "application/json",
  },
});

// Helper to normalize headers
function buildHeaders(
  data: any,
  tokenOrHeaders?: string | Record<string, string>
): Record<string, string> {
  const headers: Record<string, string> = {};

  // Auto add Authorization if string token is passed
  if (typeof tokenOrHeaders === "string") {
    headers["Authorization"] = `Bearer ${tokenOrHeaders}`;
  } else if (typeof tokenOrHeaders === "object") {
    Object.assign(headers, tokenOrHeaders);
  }

  // Auto detect FormData
  const isFormData =
    typeof FormData !== "undefined" && data instanceof FormData;
  if (isFormData && !headers["Content-Type"]) {
    headers["Content-Type"] = "multipart/form-data";
  }

  return headers;
}

// GET
export function getRequest() {
  const makeRequest = async <T>(
    url: string,
    tokenOrHeaders?: string | Record<string, string>
  ): Promise<AxiosResponse<T>> => {
    try {
      const response = await API.get<T>(url, {
        headers: buildHeaders(null, tokenOrHeaders),
      });
      return response;
    } catch (error: any) {
      console.error("GET Error:", error);
      throw error;
    }
  };

  return makeRequest;
}

// POST
export function postRequest() {
  const makeRequest = async <T>(
    url: string,
    data?: any,
    tokenOrHeaders?: string | Record<string, string>
  ): Promise<AxiosResponse<T>> => {
    try {
      const response = await API.post<T>(url, data, {
        headers: buildHeaders(data, tokenOrHeaders),
      });
      return response;
    } catch (error: any) {
      console.error("POST Error:", error);
      throw error;
    }
  };

  return makeRequest;
}

// PATCH
export function patchRequest() {
  const makeRequest = async <T>(
    url: string,
    data?: any,
    tokenOrHeaders?: string | Record<string, string>
  ): Promise<AxiosResponse<T>> => {
    try {
      const response = await API.patch<T>(url, data, {
        headers: buildHeaders(data, tokenOrHeaders),
      });
      return response;
    } catch (error: any) {
      console.error("PATCH Error:", error);
      throw error;
    }
  };

  return makeRequest;
}

// DELETE
export function deleteRequest() {
  const makeRequest = async <T>(
    url: string,
    tokenOrHeaders?: string | Record<string, string>
  ): Promise<AxiosResponse<T>> => {
    try {
      const response = await API.delete<T>(url, {
        headers: buildHeaders(null, tokenOrHeaders),
      });
      return response;
    } catch (error: any) {
      console.error("DELETE Error:", error);
      throw error;
    }
  };

  return makeRequest;
}
