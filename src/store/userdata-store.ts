/** @format */

import type { UsersTableData } from "@/types";
import { create } from "zustand";

interface UserDataState {
  user: UsersTableData;
  setUser: (user: UsersTableData) => void;
}

export const useUserDataStore = create<UserDataState>((set) => ({
  user: JSON.parse(localStorage.getItem("user") ?? "{}"),
  setUser: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    set({ user });
  },
}));
