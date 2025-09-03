/** @format */

"use client";

import type { ColumnDef } from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type SortingState,
  type ColumnFiltersState,
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
import Icons from "@/constants/icons";
import { useState } from "react";
import { Input } from "@/components/ui/input";

interface DataTableProps<TData, TValue = unknown> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  showSearch?: boolean;
  searchKey?: string;
}

export function DataTable<TData, TValue = unknown>({
  columns,
  data,
  showSearch = false,
  searchKey,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

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
      {showSearch && (
        <div className='flex items-center justify-end py-4'>
          <Input
            placeholder='Search Task...'
            value={
              (table.getColumn(searchKey ?? "")?.getFilterValue() as string) ??
              ""
            }
            onChange={(event) =>
              table
                .getColumn(searchKey ?? "")
                ?.setFilterValue(event.target.value)
            }
            className='max-w-sm bg-[#F5F5F7] border-0 outline-none focus:outline-none focus:ring-0'
          />
        </div>
      )}
      <Table>
        <TableHeader className='bg-[#F5F5F7] border-0 rounded-[8px]'>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className='text-xs font-bold text-[#919294] uppercase'>
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
      <div className='flex items-center justify-between space-x-2 py-4 w-full'>
        <Button
          variant='ghost'
          size='sm'
          className='flex items-center gap-2 cursor-pointer'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}>
          <Icons.arrowLeft />
          <span className='font-dm-sans text-[16px] font-normal text-[#686868]'>
            Previous
          </span>
        </Button>
        <Button
          variant='ghost'
          size='sm'
          className='flex items-center gap-2 cursor-pointer'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}>
          <span className='font-dm-sans text-[16px] font-normal text-[#686868]'>
            Next
          </span>
          <Icons.arrowRight />
        </Button>
      </div>
    </div>
  );
}
