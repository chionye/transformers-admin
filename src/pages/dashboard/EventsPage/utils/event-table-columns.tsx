/** @format */

import { Chip } from "@/components/chip";
import type { EventProp } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import ActionButtons from "../ui/action-buttons";

export const EventColumns: ColumnDef<EventProp>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      const data: EventProp = row.original;
      return (
        <div className='flex items-center gap-2'>
          <div className='w-8 h-8 overflow-hidden rounded-lg'>
            <img src={data.photo} alt='' className='w-8' />
          </div>
          <div>
            <p>{data.title}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: string = row.original.status;
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
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => {
      const location: string = row.original.location;
      return <p>{location}</p>;
    },
  },
  {
    accessorKey: "_id",
    header: "Action",
    cell: ({ row }) => {
      const id = row.original._id;
      return <ActionButtons id={id} />;
    },
  },
];
