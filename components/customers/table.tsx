"use client";

import React from "react";
import cn from "classnames";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  Column,
  Table as ReactTable,
  PaginationState,
  getFilteredRowModel,
  getPaginationRowModel,
  OnChangeFn,
} from "@tanstack/react-table";

export interface TableData {
  name: string | null;
  email: string;
  level: string | null;
  activitiesCompleted: number;
  totalHoursStudied: number;
  initialLevel: string | null;
  lastSignIn: string;
  createdAt: string;
}

interface TableProps {
  data: TableData[];
}

const paginationStyle =
  "px-3 py-2 ml-0 leading-tight bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 border-gray-700";
const inputStyle =
  "block w-full py-1 px-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

function Filter({
  column,
  table,
}: {
  column: Column<any, any>;
  table: ReactTable<any>;
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  return typeof firstValue === "number" ? (
    <div className="flex space-x-2">
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[0] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            e.target.value,
            old?.[1],
          ])
        }
        placeholder={`Min`}
        className={"w-24 border shadow rounded"}
      />
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[1] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            old?.[0],
            e.target.value,
          ])
        }
        placeholder={`Max`}
        className="w-24 border shadow rounded"
      />
    </div>
  ) : (
    <input
      type="text"
      value={(columnFilterValue ?? "") as string}
      onChange={(e) => column.setFilterValue(e.target.value)}
      placeholder={`Search...`}
      className={"w-36 border shadow rounded " + inputStyle}
    />
  );
}

const Table: React.FC<TableProps> = ({ data }) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const columns = React.useMemo<ColumnDef<TableData>[]>(
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
        cell: (info) => info.getValue(),
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
    data,
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

  return (
    <div className="">
      <div className="py-2 px-10 relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="h-2" />
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase  dark:text-gray-400">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? "cursor-pointer select-none"
                              : "",
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: " 🔼",
                            desc: " 🔽",
                          }[header.column.getIsSorted() as string] ?? null}
                          {header.column.getCanFilter() ? (
                            <div>
                              <Filter column={header.column} table={table} />
                            </div>
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
        <div className="flex justify-between">
          <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px">
              <li>
                <button
                  className={cn(paginationStyle, "rounded-l-lg")}
                  onClick={() => table.setPageIndex(0)}
                  disabled={!table.getCanPreviousPage()}
                >
                  {"<<"}
                </button>
              </li>
              <li>
                <button
                  className={paginationStyle}
                  onClick={() => {
                    table.previousPage();
                  }}
                  disabled={!table.getCanPreviousPage()}
                >
                  {"<"}
                </button>
              </li>
              {pages.map((page) => (
                <li key={`page-${page}`}>
                  <button
                    className={cn(
                      paginationStyle,
                      table.getState().pagination.pageIndex + 1 === page
                        ? "bg-gray-400 text-white"
                        : "text-gray-400"
                    )}
                    onClick={() => {
                      console.log("current page:", page - 1);
                      table.setPageIndex(page);
                    }}
                    disabled={!table.getCanPreviousPage()}
                  >
                    {page}
                  </button>
                </li>
              ))}
              <li>
                <button
                  className={paginationStyle}
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  {">"}
                </button>
              </li>
              <li>
                <button
                  className={cn(paginationStyle, "rounded-r-lg")}
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  disabled={!table.getCanNextPage()}
                >
                  {">>"}
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
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
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
        </div>

        <div className="my-4 hidden">
          <div className="ml-auto">{table.getRowModel().rows.length} Rows</div>
        </div>
      </div>
    </div>
  );
};

export default Table;
