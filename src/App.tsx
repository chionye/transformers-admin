/** @format */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Routes from "./routes";
import MyContext from "./context/context";

function App() {
  const router = createBrowserRouter(Routes);
  const [userData, setUserData] = useState<Record<string, any>>({
    _id: null,
    username: null,
    email: null,
    firstName: null,
    lastName: null,
    dob: null,
    gender: null,
    lga: null,
    occupation: null,
    state: null,
    phoneNumber: null,
    password: null,
    address: null,
    picture: null,
    file: null,
    success: null,
    title: null,
    description: null,
    accessToken: null,
    isAuthenticated: false,
    isVisible: false,
    mda_name: "",
  });

  const updateData = (newData: Record<string, unknown>) => {
    setUserData((prevData: { prevData: Record<string, unknown> }) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <MyContext.Provider value={{ userData, updateData }}>
      <RouterProvider router={router} />
    </MyContext.Provider>
  );
}

export default App;