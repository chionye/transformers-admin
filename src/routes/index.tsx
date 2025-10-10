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
import UserProfile from "@/pages/dashboard/Users/UserProfile";
import { Withdrawals } from "@/pages/dashboard/Users/Withdrawals";
import { WithdrawalDetails } from "@/pages/dashboard/Users/WithdrawalDetails";
import CreateTeams from "@/pages/dashboard/Teams/CreateTeams";
import TeamDetails from "@/pages/dashboard/Teams/TeamDetails";
import NewTeamMember from "@/pages/dashboard/Teams/NewTeamMember";
import ChallengeDetails from "@/pages/dashboard/Challenges/ChallengeDetails";
import Posts from "@/pages/dashboard/Posts";
import PostDetails from "@/pages/dashboard/Posts/PostDetails";
import Messages from "@/pages/dashboard/Messages";
import NewMessages from "@/pages/dashboard/Messages/NewMessages";
import MessageDetail from "@/pages/dashboard/Messages/MessageDetail";
import Blog from "@/pages/dashboard/Blog";
import NewBlogPost from "@/pages/dashboard/Blog/NewBlogPost";
import BlogDetails from "@/pages/dashboard/Blog/BlogDetails";
import Opportunities from "@/pages/dashboard/Opportunities";
import NewOpportunity from "@/pages/dashboard/Opportunities/NewOpportunity";
import OpportunityDetails from "@/pages/dashboard/Opportunities/OpportunityDetails";
import Events from "@/pages/dashboard/EventsPage";
import NewEvent from "@/pages/dashboard/EventsPage/NewEvent";
import EventDetails from "@/pages/dashboard/EventsPage/EventDetails";
import NewLearning from "@/pages/dashboard/Learning/NewLearning";
import Learning from "@/pages/dashboard/Learning";
import LearningDetails from "@/pages/dashboard/Learning/LearningDetails";

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
        path: `/dashboard/admin/users/user-profile/:id`,
        element: <UserProfile />,
      },
      {
        path: `/dashboard/admin/users/:id/withdrawals`,
        element: <Withdrawals />,
      },
      {
        path: `/dashboard/admin/users/:id/withdrawals/:id`,
        element: <WithdrawalDetails />,
      },
      {
        path: `/dashboard/admin/team`,
        element: <Teams />,
      },
      {
        path: `/dashboard/admin/team/new`,
        element: <CreateTeams />,
      },
      {
        path: `/dashboard/admin/team/:id`,
        element: <TeamDetails />,
      },
      {
        path: `/dashboard/admin/team/:teamName/new`,
        element: <NewTeamMember />,
      },
      {
        path: `/dashboard/admin/challenges`,
        element: <Challenges />,
      },
      {
        path: `/dashboard/admin/challenges/:id`,
        element: <ChallengeDetails />,
      },
      {
        path: `/dashboard/admin/posts`,
        element: <Posts />,
      },
      {
        path: `/dashboard/admin/posts/:id`,
        element: <PostDetails />,
      },
      {
        path: `/dashboard/admin/payment`,
        element: <Payment />,
      },
      {
        path: `/dashboard/admin/alerts`,
        element: <Alerts />,
      },
      {
        path: `/dashboard/admin/messages`,
        element: <Messages />,
      },
      {
        path: `/dashboard/admin/messages/new`,
        element: <NewMessages />,
      },
      {
        path: `/dashboard/admin/messages/:id`,
        element: <MessageDetail />,
      },
      {
        path: `/dashboard/admin/blog`,
        element: <Blog />,
      },
      {
        path: `/dashboard/admin/blog/new`,
        element: <NewBlogPost />,
      },
      {
        path: `/dashboard/admin/blog/:id`,
        element: <BlogDetails />,
      },
      {
        path: `/dashboard/admin/opportunities`,
        element: <Opportunities />,
      },
      {
        path: `/dashboard/admin/opportunity/new`,
        element: <NewOpportunity />,
      },
      {
        path: `/dashboard/admin/opportunity/:id`,
        element: <OpportunityDetails />,
      },
      {
        path: `/dashboard/admin/events`,
        element: <Events />,
      },
      {
        path: `/dashboard/admin/event/new`,
        element: <NewEvent />,
      },
      {
        path: `/dashboard/admin/event/:id`,
        element: <EventDetails />,
      },
      {
        path: `/dashboard/admin/learning`,
        element: <Learning />,
      },
      {
        path: `/dashboard/admin/learning/new`,
        element: <NewLearning />,
      },
      {
        path: `/dashboard/admin/learning/:id`,
        element: <LearningDetails />,
      },
    ],
  },
];

export default Routes;
