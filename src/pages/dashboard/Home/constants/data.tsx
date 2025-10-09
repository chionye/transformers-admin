/** @format */

import Icons from "@/constants/icons";

export const chartData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

export const cardData = [
  {
    count: 120,
    title: "Total Users",
    icon: <Icons.team color='#3662AE' />,
    iconBg: "#E0EEF9",
    percentage: 40,
    key: "users",
    child: "totalUsers",
    sibling: "yesterdayUser",
    from: "From yesterday",
  },
  {
    count: 603,
    title: "Goals Completed",
    icon: <Icons.goal />,
    iconBg: "#DDFBE7",
    percentage: 40,
    key: "goals",
    child: "completedGoals",
    sibling: "yesterdayGoal",
    from: "From yesterday",
  },
  {
    count: 300,
    title: "Revenue",
    icon: <Icons.revenue />,
    iconBg: "#FEF0C3",
    percentage: 40,
    unit: "$",
    key: "revenue",
    child: "revenue",
    sibling: "yesterdayRevenue",
    from: "From yesterday",
  },
  {
    count: 120,
    title: "Challenges Completed",
    icon: <Icons.trophy width='24' height='24' color='#7344AC' />,
    iconBg: "#F2EDFA",
    percentage: 40,
    key: "challenge",
    child: "completedChallenge",
    sibling: "yesterdayChallenge",
    from: "From yesterday",
  },
];

export const historyData = [
  {
    name: "Sarah Johnson",
    challenge: "completed challenge 30 Days Fitness",
    time: "2 hours ago",
  },
  {
    name: "Sarah Johnson",
    challenge: "completed challenge 30 Days Fitness",
    time: "2 hours ago",
  },
  {
    name: "Sarah Johnson",
    challenge: "created new challenge",
    time: "2 hours ago",
  },

  {
    name: "Sarah Johnson",
    challenge: "created new challenge",
    time: "2 hours ago",
  },
];

export const activityType = [
  "POST",
  "USER",
  "TEAM",
  "INVITATION",
  "CHALLENGES",
  "OTHERS",
  "EVENTS",
  "SUBSCRIPTION",
];
