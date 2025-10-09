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
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DataTableProps<TData, TValue = unknown> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  showSearch?: boolean;
  searchKey?: string;
  filterOptions?: {
    columnId: string;
    label: string;
    options: { label: string; value: string }[];
  }[];
}

export function DataTable<TData, TValue = unknown>({
  columns,
  data,
  showSearch = false,
  searchKey,
  filterOptions = [],
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

  const pageIndex = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();
  const pageSize = table.getState().pagination.pageSize;
  const totalRows = data.length;
  const startRow = pageIndex * pageSize + 1;
  const endRow = Math.min((pageIndex + 1) * pageSize, totalRows);

  // Check if any filters are active
  const hasActiveFilters = columnFilters.length > 0;

  // Clear all filters
  const clearFilters = () => {
    setColumnFilters([]);
  };

  return (
    <Card className='w-full shadow-none border-[#E6E7E9]'>
      {/* Enhanced Search and Filter Bar */}
      {(showSearch || filterOptions.length > 0) && (
        <div className='p-6 pb-0'>
          <div className='flex items-center gap-3'>
            {/* Search Input */}
            {showSearch && (
              <div className='relative flex-1'>
                <svg
                  className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#919294]'
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M15.75 15.75L12.6562 12.6562'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <Input
                  placeholder='Search...'
                  value={
                    (table
                      .getColumn(searchKey ?? "")
                      ?.getFilterValue() as string) ?? ""
                  }
                  onChange={(event) =>
                    table
                      .getColumn(searchKey ?? "")
                      ?.setFilterValue(event.target.value)
                  }
                  className='pl-10 h-11 bg-[#FAFAFA] border-[#E6E7E9] rounded-lg focus-visible:ring-[#198841] focus-visible:ring-offset-0 focus-visible:border-[#198841] transition-all'
                />
              </div>
            )}

            {/* Filter Dropdown */}
            {filterOptions.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant='outline'
                    className='h-11 px-4 border-[#E6E7E9] hover:bg-[#FAFAFA] hover:border-[#198841] hover:text-[#198841] transition-all'>
                    <svg
                      width='18'
                      height='18'
                      viewBox='0 0 18 18'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='mr-2'>
                      <path
                        d='M2.25 4.5H15.75'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M5.25 9H12.75'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M7.5 13.5H10.5'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    Filter
                    {hasActiveFilters && (
                      <span className='ml-2 h-5 w-5 rounded-full bg-[#198841] text-white text-xs flex items-center justify-center'>
                        {columnFilters.length}
                      </span>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='w-56'>
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {filterOptions.map((filter) => (
                    <div key={filter.columnId}>
                      <DropdownMenuLabel className='text-xs font-semibold text-[#919294] uppercase px-2'>
                        {filter.label}
                      </DropdownMenuLabel>
                      {filter.options.map((option) => {
                        const currentFilter = columnFilters.find(
                          (f) => f.id === filter.columnId
                        );
                        const isChecked = currentFilter
                          ? currentFilter.value === option.value
                          : false;

                        return (
                          <DropdownMenuCheckboxItem
                            key={option.value}
                            checked={isChecked}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                table
                                  .getColumn(filter.columnId)
                                  ?.setFilterValue(option.value);
                              } else {
                                table
                                  .getColumn(filter.columnId)
                                  ?.setFilterValue(undefined);
                              }
                            }}>
                            {option.label}
                          </DropdownMenuCheckboxItem>
                        );
                      })}
                      <DropdownMenuSeparator />
                    </div>
                  ))}
                  {hasActiveFilters && (
                    <>
                      <DropdownMenuSeparator />
                      <Button
                        variant='ghost'
                        size='sm'
                        className='w-full justify-center text-[#198841] hover:bg-[#198841]/10'
                        onClick={clearFilters}>
                        Clear all filters
                      </Button>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className='flex items-center gap-2 mt-4 flex-wrap'>
              <span className='text-sm text-[#686868]'>Active filters:</span>
              {columnFilters.map((filter) => {
                const filterOption = filterOptions.find(
                  (opt) => opt.columnId === filter.id
                );
                const selectedOption = filterOption?.options.find(
                  (opt) => opt.value === filter.value
                );

                return (
                  <div
                    key={filter.id}
                    className='inline-flex items-center gap-1.5 px-3 py-1 text-sm bg-[#198841]/10 text-[#198841] rounded-full'>
                    <span className='font-medium'>{filterOption?.label}:</span>
                    <span>{selectedOption?.value || String(filter.value)}</span>
                    <button
                      onClick={() =>
                        table.getColumn(filter.id)?.setFilterValue(undefined)
                      }
                      className='ml-1 hover:bg-[#198841]/20 rounded-full p-0.5 transition-colors'>
                      <svg
                        width='14'
                        height='14'
                        viewBox='0 0 14 14'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5'
                          stroke='currentColor'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </button>
                  </div>
                );
              })}
              <button
                onClick={clearFilters}
                className='text-sm text-[#919294] hover:text-[#198841] transition-colors underline'>
                Clear all
              </button>
            </div>
          )}
        </div>
      )}

      {/* Modern Table */}
      <div className='overflow-hidden'>
        <div className='overflow-x-auto'>
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  key={headerGroup.id}
                  className='border-b border-[#E6E7E9] hover:bg-transparent'>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        key={header.id}
                        className='h-14 px-6 text-xs font-semibold text-[#686868] uppercase tracking-wider bg-transparent'>
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
                    className='border-b border-[#F5F5F7] last:border-0 hover:bg-[#FAFAFA] transition-colors duration-150'>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className='px-6 py-4 text-[#1E1E1E] font-normal text-[14px]'>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow className='hover:bg-transparent'>
                  <TableCell
                    colSpan={columns.length}
                    className='h-32 text-center text-[#919294]'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                      <svg
                        width='48'
                        height='48'
                        viewBox='0 0 48 48'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='text-[#E6E7E9]'>
                        <rect
                          width='48'
                          height='48'
                          rx='24'
                          fill='currentColor'
                        />
                        <path
                          d='M24 16V32M16 24H32'
                          stroke='#919294'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                      <p className='font-medium text-[14px]'>
                        No results found
                      </p>
                      {hasActiveFilters && (
                        <Button
                          variant='outline'
                          size='sm'
                          onClick={clearFilters}
                          className='mt-2'>
                          Clear filters
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Enhanced Pagination */}
      {table.getPageCount() > 0 && (
        <div className='flex items-center justify-between px-6 py-4 border-t border-[#F5F5F7]'>
          <div className='flex items-center gap-2'>
            <p className='text-sm text-[#686868] font-normal'>
              Showing{" "}
              <span className='font-semibold text-[#1E1E1E]'>{startRow}</span>{" "}
              to <span className='font-semibold text-[#1E1E1E]'>{endRow}</span>{" "}
              of{" "}
              <span className='font-semibold text-[#1E1E1E]'>{totalRows}</span>{" "}
              results
            </p>
          </div>

          <div className='flex items-center gap-2'>
            <Button
              variant='outline'
              size='sm'
              className='h-9 px-3 border-[#E6E7E9] hover:bg-[#FAFAFA] hover:border-[#198841] hover:text-[#198841] transition-all disabled:opacity-40 disabled:cursor-not-allowed'
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}>
              <Icons.arrowLeft width='16' height='16' />
            </Button>

            {/* Page Numbers */}
            <div className='flex items-center gap-1'>
              {Array.from({ length: Math.min(pageCount, 5) }, (_, i) => {
                let pageNum;
                if (pageCount <= 5) {
                  pageNum = i;
                } else if (pageIndex < 3) {
                  pageNum = i;
                } else if (pageIndex > pageCount - 4) {
                  pageNum = pageCount - 5 + i;
                } else {
                  pageNum = pageIndex - 2 + i;
                }

                return (
                  <Button
                    key={pageNum}
                    variant='ghost'
                    size='sm'
                    className={`h-9 w-9 p-0 font-medium text-sm transition-all ${
                      pageIndex === pageNum
                        ? "bg-[#198841] text-white hover:bg-[#198841] hover:text-white"
                        : "text-[#686868] hover:bg-[#FAFAFA] hover:text-[#198841]"
                    }`}
                    onClick={() => table.setPageIndex(pageNum)}>
                    {pageNum + 1}
                  </Button>
                );
              })}
            </div>

            <Button
              variant='outline'
              size='sm'
              className='h-9 px-3 border-[#E6E7E9] hover:bg-[#FAFAFA] hover:border-[#198841] hover:text-[#198841] transition-all disabled:opacity-40 disabled:cursor-not-allowed'
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}>
              <Icons.arrowRight width='16' height='16' />
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}
