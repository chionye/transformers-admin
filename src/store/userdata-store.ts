/** @format */

import type { UsersTableData } from "@/types";
import {
  getDataFromLocalStorage,
  setDataToLocalStorage,
} from "@/utils/helpers";
import { create } from "zustand";

interface UserDataState {
  user: UsersTableData;
  setUser: (user: UsersTableData) => void;
}

export const useUserDataStore = create<UserDataState>((set) => ({
  user: getDataFromLocalStorage("user"),
  setUser: (user) => {
    setDataToLocalStorage("user", user);
    set({ user });
  },
}));
