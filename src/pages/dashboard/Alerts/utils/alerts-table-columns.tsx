
import type { AlertData } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import ActionButtons from "../components/action-buttons";

export const AlertColumns: ColumnDef<AlertData>[] = [
  {
    accessorKey: "reason",
    header: "Event",
  },
  {
    accessorKey: "reporter",
    header: "User",
    cell: ({ row }) => {
      const user: AlertData["reporter"] = row.getValue("reporter");
      return (
        <div className='flex items-center gap-2'>
          <img
            src={`https://api.dicebear.com/9.x/initials/svg?seed=${user.fullName}&radius=50&size=32`}
            alt=''
          />
          <div>{user.fullName}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Date & Time",
    cell: ({ row }) => {
      const createdAt = row.getValue("createdAt");
      return (
        <div className='font-dm-sans text-[#686868] text-[14px] font-normal'>
          {moment(createdAt || "").format("DD/MM/YY, hh:mmA")}
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
        <div
          className={`flex items-center gap-1 font-medium px-2 py-1 w-fit rounded-full border ${
            (status as string).toLowerCase() === "resolved"
              ? "bg-[#DDFBE7] text-[#198841]"
              : "bg-[#FEF0C3] text-[#A17C07]"
          }`}>
          {(status as string).toLowerCase() === "action_taken"
            ? "Resolved"
            : "Pending"}
        </div>
      );
    },
  },
  {
    accessorKey: "_id",
    header: "Resolve",
    cell: ({ row }) => {
      const action = row.getValue("_id");
      return <ActionButtons id={action as string} />;
    },
  },
];
