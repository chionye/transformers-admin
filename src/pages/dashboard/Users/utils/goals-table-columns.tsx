/** @format */

import { CategoryChips } from "@/components/categories/cartegory-chips";
import { Chip } from "@/components/chip";
import type { GoalsTableData } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";
import moment from "moment";

export const GoalsColumns: ColumnDef<GoalsTableData>[] = [
  {
    accessorKey: "sn",
    header: "SN",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "title",
    header: "Goal Name",
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      const category = row.getValue("category");
      return (
        <div className='font-medium w-fit'>
          <CategoryChips type={(category as { name: string }).name} showIcon />
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <div className='font-medium w-fit'>
          <Chip
            variant={
              (status as string).toLowerCase() === "in progress"
                ? "outline"
                : "default"
            }
            size='sm'
            className={
              (status as string).toLowerCase() === "in progress"
                ? "bg-[#E0EEF9] hover:bg-[#E0EEF9]/80"
                : "bg-[#FFE3DF] hover:bg-[#FFE3DF]/80"
            }
            rounded>
            <p
              className={`font-dm-sans text-[14px] font-medium ${
                (status as string).toLowerCase() === "in progress"
                  ? "text-[#3662AE]"
                  : "text-[#C8230D]"
              }`}>
              {status as string}
            </p>
          </Chip>
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created Date",
  },
  {
    accessorKey: "start",
    header: "Start Date",
    cell: ({ row }) => {
      const start = row.getValue("start");
      return (
        <div className='font-medium w-fit'>
          <p className='font-dm-sans text-[16px] font-medium text-[#A17C07]'>
            {moment(start as string).format("DD/MM/YYYY")}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "end",
    header: "End Date",
    cell: ({ row }) => {
      const end = row.getValue("end");
      return (
        <div className='font-medium w-fit'>
          <p className='font-dm-sans text-[16px] font-medium text-[#A17C07]'>
            {moment(end as string).format("DD/MM/YYYY")}
          </p>
        </div>
      );
    },
  },
];
