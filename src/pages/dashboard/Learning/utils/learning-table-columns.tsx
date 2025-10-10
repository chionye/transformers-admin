/** @format */

import { Chip } from "@/components/chip";
import type { Category, LearningProp } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import ActionButtons from "../ui/action-buttons";
import { CategoryChips } from "@/components/categories/cartegory-chips";

export const LearningColumns: ColumnDef<LearningProp>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      const data: LearningProp = row.original;
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
    header: "Date Uploaded",
    cell: ({ row }) => {
      const createdAt: string = row.original.createdAt;
      return <p>{moment(createdAt).format("DD-MM-YYYY")}</p>;
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      const category: Category = row.original.category;
      return <CategoryChips type={category.name} />;
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
