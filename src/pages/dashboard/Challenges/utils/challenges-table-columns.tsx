/** @format */

import Icons from "@/constants/icons";
import type { ChallengesTableData } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";

export const HomeColumns: ColumnDef<ChallengesTableData>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "created_by",
    header: "Created By",
    cell: ({ row }) => {
      const createdBy = row.getValue("created_by");
      return (
        <div className='flex items-center gap-2'>
          <img
            src='https://api.dicebear.com/9.x/initials/svg?seed=Chioma Johnson&radius=50&size=32'
            alt=''
          />
          <div>{createdBy as React.ReactNode}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      const category = row.getValue("category");
      return (
        <div
          className={`flex items-center gap-1 font-medium px-2 py-1 w-fit rounded-full border ${
            (category as string).toLowerCase() === "purpose"
              ? "bg-[#E0EEF9] text-[#3662AE]"
              : "bg-[#FFE3DF] text-[#C8230D]"
          }`}>
          {category === "Purpose" ? <Icons.bulb /> : <Icons.lock />}
          {category as string}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <div
          className={`flex items-center gap-1 font-medium px-2 py-1 w-fit rounded-full border ${
            (status as string).toLowerCase() === "active"
              ? "bg-[#FEF0C3] text-[#4B4B4B]"
              : "bg-[#DDFBE7] text-[#198841]"
          }`}>
          {status as string}
        </div>
      );
    },
  },
  {
    accessorKey: "member_count",
    header: "Member Count",
  },
  {
    accessorKey: "date_created",
    header: "Date Created",
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
