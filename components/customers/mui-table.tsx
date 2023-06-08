"use client";

import ArrowDownOnSquareIcon from "@heroicons/react/20/solid/ArrowDownOnSquareIcon";
import ArrowUpOnSquareIcon from "@heroicons/react/20/solid/ArrowUpOnSquareIcon";
import ArrowLeftIcon from "@heroicons/react/20/solid/ArrowLeftIcon";
import ArrowRightIcon from "@heroicons/react/20/solid/ArrowRightIcon";
import ArrowSmallLeftIcon from "@heroicons/react/20/solid/ArrowSmallLeftIcon";
import ArrowSmallRightIcon from "@heroicons/react/20/solid/ArrowSmallRightIcon";
import PlusIcon from "@heroicons/react/20/solid/PlusIcon";
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";

import cn from "classnames";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  Column,
  Table,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

import { CustomersSearch } from "@/components/customers/search";
import React from "react";
import ChevronUpIcon from "@heroicons/react/24/solid/ChevronUpIcon";
import ChevronDownIcon from "@heroicons/react/24/solid/ChevronDownIcon";

function MuiTable({ customers }: { customers: TableCustomer[] }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const columns = React.useMemo<ColumnDef<TableCustomer>[]>(
    () => [
      {
        header: "Name",
        accessorKey: "name",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: "Email",
        accessorKey: "email",
        cell: (info) => {
          console.log(info);
          // @ts-ignore
          return <a className="cursor-pointer hover:underline" href={`/admin/customers/1`}>{info.getValue()}</a>;
        },
        footer: (props) => props.column.id,
      },
      {
        header: "Level",
        accessorKey: "level",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: "Activities Completed",
        accessorKey: "activitiesCompleted",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: "Total Hours Studied",
        accessorKey: "totalHoursStudied",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: "Initial Level",
        accessorKey: "initialLevel",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: "Last Sign In",
        accessorKey: "lastSignIn",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: "Created At",
        accessorKey: "createdAt",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
    ],
    []
  );

  const table = useReactTable({
    data: customers,
    columns,
    state: {
      sorting,
    },
    // Pipeline
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  const pages = Array.from(
    { length: table.getPageCount() },
    (_, index) => index + 1
  );

  const paginationStyle =
    "ml-0 leading-tight border border-gray-300 bg-white hover:bg-gray-100 hover:text-gray-700 border-gray-700";

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Stack direction="row" justifyContent="space-between" spacing={4}>
            <Stack spacing={1}>
              <Typography variant="h4">Customers</Typography>
              <Stack alignItems="center" direction="row" spacing={1}>
                <Button
                  color="inherit"
                  startIcon={
                    <SvgIcon fontSize="small">
                      <ArrowUpOnSquareIcon />
                    </SvgIcon>
                  }
                >
                  Import
                </Button>
                <Button
                  color="inherit"
                  startIcon={
                    <SvgIcon fontSize="small">
                      <ArrowDownOnSquareIcon />
                    </SvgIcon>
                  }
                >
                  Export
                </Button>
              </Stack>
            </Stack>
            <div>
              <Button
                startIcon={
                  <SvgIcon fontSize="small">
                    <PlusIcon />
                  </SvgIcon>
                }
                variant="contained"
                style={{
                  backgroundColor: "rgb(99, 102, 241)",
                }}
              >
                Add
              </Button>
            </div>
          </Stack>
          <CustomersSearch
            table={table}
            column={table.getHeaderGroups()[0].headers[0].column}
          />

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <th
                          key={header.id}
                          colSpan={header.colSpan}
                          className="px-6 py-3"
                        >
                          {header.isPlaceholder ? null : (
                            <div
                              {...{
                                className: header.column.getCanSort()
                                  ? "cursor-pointer select-none"
                                  : "",
                                onClick:
                                  header.column.getToggleSortingHandler(),
                              }}
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                              {{
                                asc: (
                                  <SvgIcon
                                    fontSize="small"
                                    sx={{ color: "neutral.500" }}
                                  >
                                    <ChevronUpIcon />
                                  </SvgIcon>
                                ),
                                desc: (
                                  <SvgIcon
                                    fontSize="small"
                                    sx={{ color: "neutral.500" }}
                                  >
                                    <ChevronDownIcon />
                                  </SvgIcon>
                                ),
                              }[header.column.getIsSorted() as string] ?? null}
                              {header.column.getCanFilter() ? (
                                <div></div>
                              ) : null}
                            </div>
                          )}
                        </th>
                      );
                    })}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => {
                  return (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell) => {
                        return (
                          <td key={cell.id} className="px-6 py-3">
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <nav className="w-full flex">
              <ul className="mx-auto my-8 inline-flex -space-x-px">
                <li>
                  <button
                    className={cn(paginationStyle, "rounded-l-lg", "px-3 py-2")}
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                  >
                    <SvgIcon fontSize="small" sx={{ color: "neutral.500" }}>
                      <ArrowLeftIcon />
                    </SvgIcon>
                  </button>
                </li>
                <li>
                  <button
                    className={cn(paginationStyle, "px-3 py-2")}
                    onClick={() => {
                      table.previousPage();
                    }}
                    disabled={!table.getCanPreviousPage()}
                  >
                    <SvgIcon fontSize="small" sx={{ color: "neutral.500" }}>
                      <ArrowSmallLeftIcon />
                    </SvgIcon>
                  </button>
                </li>
                {pages.map((page) => (
                  <li key={`page-${page}`}>
                    <button
                      className={cn(
                        paginationStyle,
                        "px-[16px] py-[9px]",
                        table.getState().pagination.pageIndex + 1 === page
                          ? "!bg-gray-400 text-white"
                          : "text-gray-400"
                      )}
                      onClick={() => {
                        console.log("current page:", page - 1);
                        table.setPageIndex(page - 1);
                      }}
                      disabled={!table.getCanPreviousPage()}
                    >
                      {page}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    className={cn(paginationStyle, "px-3 py-2")}
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                  >
                    <SvgIcon fontSize="small" sx={{ color: "neutral.500" }}>
                      <ArrowSmallRightIcon />
                    </SvgIcon>
                  </button>
                </li>
                <li>
                  <button
                    className={cn(paginationStyle, "rounded-r-lg", "px-3 py-2")}
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                  >
                    <SvgIcon fontSize="small" sx={{ color: "neutral.500" }}>
                      <ArrowRightIcon />
                    </SvgIcon>
                  </button>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-2">
              <span className="items-center gap-1 hidden">
                <div>Page</div>
                <strong className="min-w-fit">
                  {table.getState().pagination.pageIndex + 1} of{" "}
                  {table.getPageCount()}
                </strong>
              </span>
              <span className="items-center gap-1 hidden">
                | Go to page:
                <input
                  type="number"
                  defaultValue={table.getState().pagination.pageIndex + 1}
                  onChange={(e) => {
                    const page = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    table.setPageIndex(page);
                  }}
                  className="border p-1 rounded w-16"
                />
              </span>

              <select
                value={table.getState().pagination.pageSize}
                onChange={(e) => {
                  table.setPageSize(Number(e.target.value));
                }}
                className="hidden border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </div>

            <div className="my-4 hidden">
              <div className="ml-auto">
                {table.getRowModel().rows.length} Rows
              </div>
            </div>
          </div>
        </Stack>
      </Container>
    </Box>
  );
}
export default MuiTable;
