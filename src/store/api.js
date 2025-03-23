import axios from "axios";
import { createApi } from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:7196";
const _api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

const axiosBaseQuery =
  ({ baseUrl }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await _api({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const api = createApi({
  reducerPath: "Pizza",
  baseQuery: axiosBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ["Pizza"],
  endpoints: () => ({}),
});
