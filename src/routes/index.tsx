/** @format */

import Layout from "../pages/auth/Layout";
import Login from "../pages/auth/Login";
import DashboardLayout from "@/pages/dashboard/Layout";
import Home from "@/pages/dashboard/Home/index";
import Forgot from "@/pages/auth/Forgot";
import Verification from "@/pages/auth/Verification";
import Users from "@/pages/dashboard/Users";
import Teams from "@/pages/dashboard/Teams";
import Challenges from "@/pages/dashboard/Challenges";
import Payment from "@/pages/dashboard/Payment";
import Alerts from "@/pages/dashboard/Alerts";
import NewUser from "@/pages/dashboard/Users/NewUser";

const Routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/auth/forgot-password",
        element: <Forgot />,
      },
      {
        path: "/auth/verification",
        element: <Verification />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: `/dashboard/admin/home`,
        element: <Home />,
      },
      {
        path: `/dashboard/admin/users`,
        element: <Users />,
      },
      {
        path: `/dashboard/admin/users/new`,
        element: <NewUser />,
      },
      {
        path: `/dashboard/admin/team`,
        element: <Teams />,
      },
      {
        path: `/dashboard/admin/challenges`,
        element: <Challenges />,
      },
      {
        path: `/dashboard/admin/payment`,
        element: <Payment />,
      },
      {
        path: `/dashboard/admin/alerts`,
        element: <Alerts />,
      },
    ],
  },
];

export default Routes;
