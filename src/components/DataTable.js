import React, { useMemo, useState } from "react";

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import GlobalFilter from "./GlobalFilter";
import GroupingPanel from "./GroupingPanel";
import ColumnVisibilityPanel from "./ColumnVisibilityPanel";
import FiltersPanel from "./FiltersPanel";
import Pagination from "./Pagination";

const DataTable = ({ columns, data }) => {
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [hiddenColumns, setHiddenColumns] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [grouping, setGrouping] = useState({
    category: false,
    subcategory: false,
  });

  const visibleColumns = useMemo(
    () => columns.filter((col) => !hiddenColumns.includes(col.accessor)),
    [columns, hiddenColumns]
  );

  // Initialize table instance
  const table = useReactTable({
    data,
    columns: visibleColumns,
    state: {
      sorting,
      globalFilter,
      columnFilters,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <GlobalFilter
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <GroupingPanel grouping={grouping} setGrouping={setGrouping} />
      <ColumnVisibilityPanel
        columns={columns}
        hiddenColumns={hiddenColumns}
        setHiddenColumns={setHiddenColumns}
      />
      <FiltersPanel setGlobalFilter={setGlobalFilter} />

      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination {...table.getState().pagination} />
    </div>
  );
};

export default DataTable;
