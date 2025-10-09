/** @format */

import Icons from "@/constants/icons";

export const NavbarItems = {
  main: [
    {
      parent: "WORKSPACE",
      items: [
        {
          to: "/dashboard/admin/home",
          icon: (color: string) => <Icons.search color={color} />,
          label: "Dashboard",
        },
        {
          to: "/dashboard/admin/users",
          icon: (color: string) => <Icons.user color={color} />,
          label: "Users",
        },
        {
          to: "/dashboard/admin/team",
          icon: (color: string) => <Icons.team color={color} />,
          label: "Teams",
        },
        {
          to: "/dashboard/admin/challenges",
          icon: (color: string) => <Icons.trophy color={color} />,
          label: "Challenges",
        },
        {
          to: "/dashboard/admin/posts",
          icon: (color: string) => <Icons.picture color={color} />,
          label: "Posts",
        },
        {
          to: "#",
          icon: (color: string) => <Icons.folder1 color={color} />,
          label: "Content Manager",
        },
      ],
    },
    {
      parent: "CONTROL",
      items: [
        {
          to: "/dashboard/admin/payment",
          icon: (color: string) => <Icons.card color={color} />,
          label: "Payment",
        },
        {
          to: "/dashboard/admin/alerts",
          icon: (color: string) => <Icons.alert color={color} />,
          label: "Alerts",
        },
        {
          to: "/dashboard/admin/settings",
          icon: (color: string) => <Icons.cogWheel color={color} />,
          label: "Settings",
        },
        {
          to: "/dashboard/admin/logout",
          icon: (color: string) => <Icons.logout color={color} />,
          label: "Logout",
        },
      ],
    },
  ],
  content: [
    {
      parent: "CONTENT MANAGER",
      items: [
        {
          to: "/dashboard/admin/messages",
          icon: (color: string) => <Icons.envelope color={color} />,
          label: "Messages",
        },
        {
          to: "/dashboard/admin/blog",
          icon: (color: string) => <Icons.post color={color} />,
          label: "Blog",
        },
        {
          to: "/dashboard/admin/opportunities",
          icon: (color: string) => <Icons.suitcase color={color} />,
          label: "Opportunities",
        },
        {
          to: "/dashboard/admin/events",
          icon: (color: string) => <Icons.event color={color} />,
          label: "Events",
        },
        {
          to: "/dashboard/admin/learning",
          icon: (color: string) => <Icons.openBook color={color} />,
          label: "Learning",
        },
        {
          to: "/dashboard/admin/faqs",
          icon: (color: string) => <Icons.faq color={color} />,
          label: "FAQs",
        },
      ],
    },
  ],
};
