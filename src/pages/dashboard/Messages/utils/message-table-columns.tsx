/** @format */

import { Chip } from "@/components/chip";
import { Button } from "@/components/ui/button";
import Icons from "@/constants/icons";
import type { Messages } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import { Link } from "react-router-dom";

export const MessagesColumns: ColumnDef<Messages>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: string = row.original.status;
      console.log(status);
      return status.toLowerCase() === "pending" ? (
        <Chip className='bg-[#FEF0C3] text-[#A17C07] rounded-full'>
          {status}
        </Chip>
      ) : (
        <Chip className='bg-[#DDFBE7] text-[#198841] rounded-full'>
          {status}
        </Chip>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => {
      const createdAt: string = row.original.createdAt;
      return <p>{moment(createdAt).format("DD-MM-YYYY")}</p>;
    },
  },
  {
    accessorKey: "recipients",
    header: "Recipients",
    cell: ({ row }) => {
      const recipients: number = row.original.recipients;
      return <p>{recipients}</p>;
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
            to={`/dashboard/admin/messages/${id}`}
            className='font-dm-sans text-[#198841] text-[16px] cursor-pointer'>
            <Icons.eyeOpen width="18" height="18" />
          </Link>
          <Button variant={"link"} className="cursor-pointer">
            <Icons.trash2 />
          </Button>
        </div>
      );
    },
  },
];
