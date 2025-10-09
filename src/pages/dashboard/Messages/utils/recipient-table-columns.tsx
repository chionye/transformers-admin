/** @format */

import { Button } from "@/components/ui/button";
import Icons from "@/constants/icons";
import type { Recipient } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import { Link } from "react-router-dom";

export const RecipientColumns: ColumnDef<Recipient>[] = [
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
    header: "Date Sent",
    cell: ({ row }) => {
      const createdAt: string = row.original.createdAt;
      return <p>{moment(createdAt).format("DD-MM-YYYY, HH:MM a")}</p>;
    },
  },
  {
    accessorKey: "_id",
    header: "Action",
    cell: ({ row }) => {
      const id = row.original._id;
      return (
        <div className='flex flex-row items-center gap-2'>
          <Link
            to={`/dashboard/admin/users/user-profile/${id}`}
            className='font-dm-sans text-[#198841] text-[16px] cursor-pointer'>
            View
          </Link>
          <Button variant={"ghost"} className='cursor-pointer'>
            <span className='text-[#A17C07]'>Resend</span>
            <Icons.reload />
          </Button>
        </div>
      );
    },
  },
];
