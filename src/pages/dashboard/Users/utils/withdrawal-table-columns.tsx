/** @format */

import { Chip } from "@/components/chip";
import type { ColumnDef } from "@tanstack/react-table";
import type { WithdrawalTableData } from "@/types";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icons from "@/constants/icons";

export const WithdrawalColumns: ColumnDef<WithdrawalTableData>[] = [
  {
    accessorKey: "date_requested",
    header: "Date Requested",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "bank",
    header: "Bank",
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
              (status as string).toLowerCase() === "pending"
                ? "outline"
                : "default"
            }
            size='sm'
            className={
              (status as string).toLowerCase() === "pending"
                ? "bg-[#FEF0C3] hover:bg-[#FEF0C3]/80"
                : "bg-[#FFE3DF] hover:bg-[#FFE3DF]/80"
            }
            rounded>
            <p
              className={`font-dm-sans text-[14px] font-medium ${
                (status as string).toLowerCase() === "pending"
                  ? "text-[#A17C07]"
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
    accessorKey: "action",
    header: "Action",
    cell: () => {
      //   const completion = row.getValue("completion");
      return (
        <div className='flex items-center gap-2'>
          <Button className='font-dm-sans text-[14px] font-medium text-white bg-[#198841] hover:bg-[#198841]/80 rounded-[8px] flex items-center gap-2'>
            <Icons.check />
            <span>Approve</span>
          </Button>
          <Button className='font-dm-sans text-[14px] font-medium text-white bg-[#C8230D] hover:bg-[#C8230D]/80 rounded-[8px] flex items-center gap-2'>
            <Icons.X />
            <span>Reject</span>
          </Button>
          <Link
            to='/dashboard/admin/users/5/withdrawals/12345'
            className='font-dm-sans text-[14px] font-medium text-[#C8230D]'>
            View
          </Link>
        </div>
      );
    },
  },
];
