/** @format */

import type { ColumnDef } from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type SortingState,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTableStore } from "@/store/table-store";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  showPagination?: boolean;
  children?: React.ReactNode;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  showPagination = true,
  children,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const { columnFilters, setColumnFilters } = useTableStore();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div className='overflow-hidden rounded-[8px]'>
      <div className='flex items-center justify-end'>{children}</div>
      <Table>
        <TableHeader className='bg-[#EDF2F7] border-0 rounded-[8px]'>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className='text-xs font-bold text-[#919294]'>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className='border-[#E6E7E9]'>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className='h-24 text-center'>
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {showPagination && (
        <div className='flex items-center justify-end space-x-2 py-4'>
          <Button
            variant='outline'
            size='sm'
            className='rounded-full flex items-center gap-2 border border-[#E5E7EB] cursor-pointer'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}>
            <span>&#x2962; Previous</span>
          </Button>
          <Button
            variant='outline'
            size='sm'
            className='rounded-full flex items-center gap-2 border border-[#E5E7EB] cursor-pointer'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}>
            <span>Next &#x2964;</span>
          </Button>
        </div>
      )}
    </div>
  );
}
