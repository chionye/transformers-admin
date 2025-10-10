/** @format */

import type { Category } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import ActionButtons from "../Categories/components/ui/action-buttons";
import { CategoryChips } from "@/components/categories/cartegory-chips";

export const CategoriesColumns: ColumnDef<Category>[] = [
  {
    accessorKey: "color",
    header: "Icon",
    cell: ({ row }) => {
      const data: Category = row.original;
      return (
        data.color && (
          <CategoryChips
            type={data.name}
            bgColor={data.color.bgColor}
            textColor={data.color.colorHex}
            showIcon
            icon={data.icon ?? data.color.icon}
            showText={false}
            className='w-8 h-8 rounded-full'
          />
        )
      );
    },
  },
  {
    accessorKey: "name",
    header: "Category Name",
  },
  {
    accessorKey: "createdAt",
    header: "Date Added",
    cell: ({ row }) => {
      const createdAt: string = row.original?.color?.createdAt;
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
