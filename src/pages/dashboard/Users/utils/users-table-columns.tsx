/** @format */

import { Chip } from "@/components/chip";
import type { UsersTableData } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import { Link } from "react-router-dom";

export const UsersColumns: ColumnDef<UsersTableData>[] = [
  {
    accessorKey: "sn",
    header: "sn",
  },
  {
    accessorKey: "fullName",
    header: "Name",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "createdAt",
    header: "Date Joined",
    cell: ({ row }) => {
      const createdAt = row.getValue("createdAt");
      return (
        <div>
          {createdAt ? moment(createdAt).format("DD-MM-YYYY") : "No Date"}
        </div>
      );
    },
  },
  {
    accessorKey: "goals",
    header: "Goals",
  },
  {
    accessorKey: "challenges",
    header: "Challenges",
  },
  {
    accessorKey: "teams",
    header: "Teams",
  },
  {
    accessorKey: "isVerified",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("isVerified");
      const statusText = status ? "active" : "inactive";
      return (
        <Chip
          variant={statusText === "active" ? "success" : "destructive"}
          size='sm'>
          {statusText}
        </Chip>
      );
    },
  },
  {
    accessorKey: "_id",
    header: "Action",
    cell: ({ row }) => {
      return (
        <Link
          to={`/dashboard/admin/users/user-profile/${row.getValue("_id")}`}
          className='inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-[#198841] bg-[#198841]/5 hover:bg-[#198841]/10 rounded-lg transition-all duration-200 group'>
          <span>View</span>
          <svg
            className='w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M6 12L10 8L6 4'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Link>
      );
    },
  },
];
