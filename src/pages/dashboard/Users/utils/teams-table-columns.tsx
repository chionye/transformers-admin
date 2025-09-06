/** @format */

import { Chip } from "@/components/chip";
import type { UserTeamsTableData } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";

export const TeamsColumns: ColumnDef<UserTeamsTableData>[] = [
  {
    accessorKey: "team_name",
    header: "Team Name",
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role = row.getValue("role");
      return (
        <div className='font-medium w-fit'>
          <Chip
            variant={
              (role as string).toLowerCase() === "team leader"
                ? "outline"
                : "default"
            }
            size='sm'
            className={
              (role as string).toLowerCase() === "team leader"
                ? "bg-[#E0EEF9] hover:bg-[#E0EEF9]/80"
                : "bg-[#FFE3DF] hover:bg-[#FFE3DF]/80"
            }
            rounded>
            <p
              className={`font-dm-sans text-[14px] font-medium ${
                (role as string).toLowerCase() === "team leader"
                  ? "text-[#3662AE]"
                  : "text-[#C8230D]"
              }`}>
              {role as string}
            </p>
          </Chip>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date Joined",
  },
  {
    accessorKey: "team_size",
    header: "Team Size",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: () => {
      return (
        <Link
          to='/dashboard/admin/users/user-profile'
          className='font-dm-sans text-[#198841] text-[16px] cursor-pointer'>
          View
        </Link>
      );
    },
  },
];
