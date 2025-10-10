/** @format */

import { ECurrency } from "@/constants/enums";
import Icons from "@/constants/icons";
import type { PaymentProp } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";

export const PaymentColumns: ColumnDef<PaymentProp>[] = [
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => {
      const user = row.original.user;
      return (
        <div className='flex items-center gap-2'>
          <img src={user.avatar} alt='' className='w-8 h-8' />
          <div>
            <p>{user.fullName}</p>
            <p>{user.email}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Subscription Plan",
    cell: ({ row }) => {
      const subscriptionPlan = row.original.description;
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
    cell: ({ row }) => {
      const data = row.original;
      return (
        <p>
          {ECurrency[data.currency as keyof typeof ECurrency]}
          {data.amount}
        </p>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <div
          className={`flex items-center gap-1 font-medium px-2 py-1 w-fit rounded-full border ${
            (status as string).toLowerCase() === "success"
              ? "bg-[#DDFBE7] text-[#4B4B4B]"
              : "bg-[#DDFBE7] text-[#198841]"
          }`}>
          {status as string}
        </div>
      );
    },
  },
  {
    accessorKey: "_id",
    header: "Action",
    cell: ({ row }) => {
      const action = row.original._id;
      return (
        <Link
          to={`/dashboard/admin/payment/${action}`}
          className='font-dm-sans text-[#198841] text-[16px] cursor-pointer'>
          View
        </Link>
      );
    },
  },
];
