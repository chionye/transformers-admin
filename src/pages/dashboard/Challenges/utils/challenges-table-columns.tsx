/** @format */

import { CategoryChips } from "@/components/categories/cartegory-chips";
import type { Category, ChallengeData } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import { Link } from "react-router-dom";

export const HomeColumns: ColumnDef<ChallengeData>[] = [
  {
    accessorKey: "title",
    header: "Name",
    cell: ({ row }) => {
      const title: string = row.getValue("title");
      console.log(title);
      return (
        <div>
          <p className='font-dm-sans text-[#1E1E1E] text-[16px] font-medium'>
            {title}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "owner",
    header: "Created By",
    cell: ({ row }) => {
      //eslint-disable-next-line
      const createdBy: any = row.getValue("owner");
      return (
        <div className='flex items-center gap-2'>
          <img
            src={createdBy?.avatar}
            alt=''
            className='w-8 h-8 rounded-full'
          />
          <div>
            <p className='font-dm-sans text-[#1E1E1E] text-[16px] font-medium'>
              {createdBy?.fullName}
            </p>
            <p className='font-dm-sans text-[#686868] text-[14px] font-normal'>
              {createdBy?.email}
            </p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      const category: Category = row.getValue("category");
      console.log(category);
      return (
        <CategoryChips
          type={category?.name}
          bgColor={category.color.bgColor}
          textColor={category.color.colorHex}
          showIcon
        />
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
    accessorKey: "participants",
    header: "Member Count",
    cell: ({ row }) => {
      //eslint-disable-next-line
      const participants: any[] = row.getValue("participants");
      return <p>{participants?.length}</p>;
    },
  },
  {
    accessorKey: "start",
    header: "Start Date",
    cell: ({ row }) => {
      const start = row.getValue("start");
      return <p>{moment(start || "").format("DD/MM/YYYY")}</p>;
    },
  },
  {
    accessorKey: "_id",
    header: "Action",
    cell: ({ row }) => {
      const id = row.getValue("_id");
      return (
        <Link
          to={`/dashboard/admin/challenges/${id}`}
          className='font-dm-sans text-[#198841] text-[16px] cursor-pointer'>
          View
        </Link>
      );
    },
  },
];
