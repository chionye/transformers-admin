/** @format */

import { Chip } from "@/components/chip";
import { Button } from "@/components/ui/button";
import Icons from "@/constants/icons";
import type { BlogProp } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import { Link } from "react-router-dom";

export const BlogColumns: ColumnDef<BlogProp>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "isPublished",
    header: "Status",
    cell: ({ row }) => {
      const status: boolean = row.original.isPublished;
      return !status ? (
        <Chip className='bg-[#FEF0C3] text-[#A17C07] rounded-full'>
          Pending
        </Chip>
      ) : (
        <Chip className='bg-[#DDFBE7] text-[#198841] rounded-full'>
          Published
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
    accessorKey: "_id",
    header: "Action",
    cell: ({ row }) => {
      const id = row.original._id;
      return (
        <div className='flex flex-row items-center gap-2'>
          <Link
            to={`/dashboard/admin/blog/${id}`}
            className='font-dm-sans text-[#198841] text-[16px] cursor-pointer'>
            <Icons.eyeOpen width='18' height='18' />
          </Link>
          <Button variant={"link"} className='cursor-pointer'>
            <Icons.trash2 />
          </Button>
        </div>
      );
    },
  },
];
