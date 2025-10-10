
import type { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import ActionButtons from "../AdminAccess/components/ui/action-buttons";
import type { UsersTableData } from "@/types";

export const AdminAccessColumns: ColumnDef<UsersTableData>[] = [
  {
    accessorKey: "title",
    header: "Admin User",
    cell: ({ row }) => {
      const data: UsersTableData = row.original;
      return (
        <div className='flex items-center gap-2'>
          <div className='w-8 h-8 overflow-hidden rounded-lg'>
            <img src={data.avatar} alt='' className='w-8 h-8' />
          </div>
          <div>
            <p>{data.fullName}</p>
            <p>{data.email}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "createdAt",
    header: "Date Added",
    cell: ({ row }) => {
      const createdAt: string = row.original.createdAt;
      return <p>{moment(createdAt).format("DD-MM-YYYY")}</p>;
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
