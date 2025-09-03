/** @format */

import { CustomDropdown } from "@/components/custom-dropdown";
import Icons from "@/constants/icons";
import type { AlertTableData } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";

export const AlertColumns: ColumnDef<AlertTableData>[] = [
  {
    accessorKey: "event",
    header: "Event",
  },
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => {
      const user = row.getValue("user");
      return (
        <div className='flex items-center gap-2'>
          <img
            src='https://api.dicebear.com/9.x/initials/svg?seed=Chioma Johnson&radius=50&size=32'
            alt=''
          />
          <div>{user as React.ReactNode}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date & Time",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <div
          className={`flex items-center gap-1 font-medium px-2 py-1 w-fit rounded-full border ${
            (status as string).toLowerCase() === "resolved"
              ? "bg-[#DDFBE7] text-[#198841]"
              : "bg-[#FEF0C3] text-[#A17C07]"
          }`}>
          {status as string}
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
        <CustomDropdown
          triggerLabel=''
          triggerClassName='w-8 h-8 flex items-center justify-center bg-[#EBEEF2] rounded-full'
          icon={<Icons.options />}
          iconPosition='right'
          items={[
            {
              label: "View",
              icon: <Icons.eye />,
              onSelect: () => {
                console.log("view");
              },
            },
            {
              label: "Resolved",
              icon: <Icons.circleCheck />,
              onSelect: () => {
                console.log("resolved");
              },
            },
          ]}
        />
      );
    },
  },
];
