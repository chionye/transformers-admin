/** @format */

import type { HomeTableData } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";

export const HomeColumns: ColumnDef<HomeTableData>[] = [
  {
    accessorKey: "sn",
    header: "Plan",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "date",
    header: "Date Joined",
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
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <div
          className={`font-medium px-2 py-1 w-fit rounded-lg border ${
            (status as string).toLowerCase() === "active"
              ? "bg-[#E0EEF9] text-[#3662AE]"
              : "bg-[#FFE3DF] text-[#C8230D]"
          }`}>
          {status as React.ReactNode}
        </div>
      );
    },
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
