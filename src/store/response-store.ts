/** @format */

import { create } from "zustand";

interface ResponseState {
  isSuccess: any;
  isError: any;
  setSuccess: (success: any) => void;
  setError: (error: any) => void;
}

export const useResponseStore = create<ResponseState>((set) => ({
  isSuccess: null,
  isError: null,
  setSuccess: (success) => set({ isSuccess: success }),
  setError: (error) => set({ isError: error }),
}));
