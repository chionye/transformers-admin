/** @format */

import { create } from "zustand";

interface QueryInvalidateState {
  isQueryInvalidated: boolean;
  setIsQueryInvalidated: (error: any) => void;
}

export const useQueryInvalidateStore = create<QueryInvalidateState>((set) => ({
  isQueryInvalidated: false,
  setIsQueryInvalidated: (isInvalidated) =>
    set({ isQueryInvalidated: isInvalidated }),
}));
