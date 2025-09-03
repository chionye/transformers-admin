/** @format */

import Icons from "@/constants/icons";
import type { PaymentTableData } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";

export const PaymentColumns: ColumnDef<PaymentTableData>[] = [
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => {
      const user = row.getValue("user");
      return (
        <div className='flex items-center gap-2'>
          <img
            src='https://api.dicebear.com/9.x/initials/svg?seed=Chioma Johnson&radius=50&size=32'
            alt=''
          />
          <div>{user as React.ReactNode}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "subscription_plan",
    header: "Subscription Plan",
    cell: ({ row }) => {
      const subscriptionPlan = row.getValue("subscription_plan");
      return (
        <div
          className={`flex items-center gap-1 font-medium px-2 py-1 w-fit rounded-full border ${
            (subscriptionPlan as string).toLowerCase() === "premium"
              ? "bg-[#F2EDFA] text-[#7344AC]"
              : (subscriptionPlan as string).toLowerCase() === "free"
              ? "bg-[#E0EEF9] text-[#7344AC]"
              : "bg-[#FEF0C3] text-[#A17C07]"
          }`}>
          {subscriptionPlan as string}
          {subscriptionPlan === "free" ? (
            <Icons.starOutline />
          ) : subscriptionPlan === "premium" ? (
            <Icons.star />
          ) : (
            <Icons.star color='#A17C07' />
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },

  {
    accessorKey: "cycle",
    header: "Cycle",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <div
          className={`flex items-center gap-1 font-medium px-2 py-1 w-fit rounded-full border ${
            (status as string).toLowerCase() === "successful"
              ? "bg-[#DDFBE7] text-[#4B4B4B]"
              : "bg-[#DDFBE7] text-[#198841]"
          }`}>
          {status as string}
        </div>
      );
    },
  },
  {
    accessorKey: "method",
    header: "Method",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: () => {
      // const action = row.getValue("action");
      return (
        <Link
          to='/'
          className='font-dm-sans text-[#198841] text-[16px] cursor-pointer'>
          View
        </Link>
      );
    },
  },
];
