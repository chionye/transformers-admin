/** @format */

import { Chip } from "@/components/chip";
import Icons from "@/constants/icons";
import type { TeamsDetailsTableData } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import { Link } from "react-router-dom";

export const TeamDetailsColumns: ColumnDef<TeamsDetailsTableData>[] = [
  {
    accessorKey: "sn",
    header: "Plan",
    cell: () => {
      //   const sn = row.getValue("sn");
      return (
        <Chip className='flex items-center gap-2 bg-[#F2EDFA]'>
          <span className='text-[#7344AC]'>P</span>
          <Icons.star color='#7344AC' />
        </Chip>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const name = row.getValue("name");
      return (
        <div className='flex items-center gap-2'>
          <img
            src='https://api.dicebear.com/9.x/initials/svg?seed=Chioma Johnson&radius=50&size=32'
            alt=''
          />
          <div className='flex flex-col gap-1'>
            <div>
              <p className='font-dm-sans text-[16px] font-medium text-black'>
                {name as React.ReactNode}
              </p>
            </div>
            <div>
              <p className='font-dm-sans text-[14px] font-medium text-[#686868]'>
                {name as React.ReactNode}
              </p>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role = row.getValue("role");
      return (
        <div className='flex items-center gap-2'>
          {role === "leader" ? (
            <Chip className='bg-[#E0EEF9]'>
              <p className='text-[#3662AE]'>Team Leader</p>
            </Chip>
          ) : (
            <Chip className='bg-[#EBEEF2]'>
              <p className='text-[#4B4B4B]'>Member</p>
            </Chip>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "created_by",
    header: "Date Joined",
    cell: ({ row }) => {
      const createdBy = row.getValue("created_by");
      return (
        <div className='flex items-center gap-2'>
          <div>{moment(createdBy || "").format("DD/MM/YYYY")}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "downline",
    header: "Downline",
  },
  {
    accessorKey: "challenges",
    header: "Challenges",
  },
  {
    accessorKey: "_id",
    header: "Action",
    cell: ({ row }) => {
      const action = row.getValue("_id");
      return (
        <Link
          to={`/dashboard/admin/users/user-profile/${action}`}
          className='font-dm-sans text-[#198841] text-[16px] cursor-pointer'>
          View Profile
        </Link>
      );
    },
  },
];
