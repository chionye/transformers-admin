/** @format */

import Icons from "@/constants/icons";
import type { TeamsDetailsTableData } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";

export const HomeColumns: ColumnDef<TeamsDetailsTableData>[] = [
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
    accessorKey: "team_type",
    header: "Team Type",
    cell: ({ row }) => {
      const teamType = row.getValue("team_type");
      return (
        <div
          className={`flex items-center gap-1 font-medium px-2 py-1 w-fit rounded-full border ${
            (teamType as string).toLowerCase() === "public"
              ? "bg-[#E0EEF9] text-[#3662AE]"
              : "bg-[#FFE3DF] text-[#C8230D]"
          }`}>
          {(teamType as string).toLowerCase() === "public" ? (
            <Icons.globe />
          ) : (
            <Icons.lock />
          )}
          {teamType as string}
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
    accessorKey: "id",
    header: "Action",
    cell: ({ row }) => {
      const action = row.getValue("id");
      return (
        <Link
          to={`/dashboard/admin/team/${action}`}
          className='font-dm-sans text-[#198841] text-[16px] cursor-pointer'>
          View
        </Link>
      );
    },
  },
];
