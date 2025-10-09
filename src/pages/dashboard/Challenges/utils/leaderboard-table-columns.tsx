/** @format */

import Icons from "@/constants/icons";
import type { LeaderboardData } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";

export const LeaderBoardColumns: ColumnDef<LeaderboardData>[] = [
  {
    accessorKey: "sn",
    header: "Rank",
    cell: ({ row }) => {
      const rank: number = row.index + 1;
      return (
        <div>
          {rank == 1 && <Icons.goldMedal />}
          {rank == 2 && <Icons.silverMedal />}
          {rank == 3 && <Icons.bronzeMedal />}
          {rank > 3 && (
            <span className='flex items-center gap-2 w-8 h-8 rounded-full bg-[#198841]'>
              <p className='font-dm-sans text-white text-[16px] font-medium'>
                {rank}
              </p>
            </span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "fullName",
    header: "Name",
    cell: ({ row }) => {
      const createdBy: LeaderboardData = row.original;
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
    accessorKey: "streak",
    header: "Streak",
    cell: ({ row }) => {
      const streak: number = row.original.streak;
      console.log(streak);
      return (
        <div className='flex item-center gap-2'>
          <Icons.fireColored />
          <p>{streak}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "progress",
    header: "Progress",
    cell: ({ row }) => {
      const progress: number = row.original.progress;
      return <p>{progress}%</p>;
    },
  },
  {
    accessorKey: "_id",
    header: "Action",
    cell: ({ row }) => {
      const id: string = row.original._id;
      return (
        <Link
          to={`/dashboard/admin/users/user-profile/${id}`}
          className='font-dm-sans text-[#198841] text-[16px] cursor-pointer'>
          View Profile
        </Link>
      );
    },
  },
];
