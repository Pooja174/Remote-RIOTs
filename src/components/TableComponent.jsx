import React from "react";
import { useState } from "react";
import { useReactTable } from "@tanstack/react-table";
const TableComponent = ({
  columns,
  data,
  enablePagination = true,
  enableEditing = true,
}) => {
  const [sorting, setSorting] = useState([]);
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    state: { sorting },
    onSortingChange: setSorting,
  });

  return (
    <div className="w-full h-screen overflow-x-auto bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-xl font-semibold">
          User Details{" "}
          <span className="text-blue-600">{data.length} users</span>
        </h2>
        <input
          type="text"
          placeholder="Search..."
          className="border px-3 py-2 rounded-md shadow-sm"
        />
      </div>

      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-100 text-gray-700">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b border-gray-300">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="px-4 py-3 font-semibold cursor-pointer text-sm"
                >
                  {flexRender(
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
            <tr
              key={row.id}
              className="border-b border-gray-200 hover:bg-gray-50 text-sm"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-3 text-gray-600">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              {enableEditing && (
                <td className="px-4 py-3">
                  <button className="text-blue-500 hover:underline">
                    Edit
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {enablePagination && (
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <button className="px-4 py-2 border rounded-md bg-gray-100 hover:bg-gray-200">
            Previous
          </button>
          <span>1 2 3 ... 10</span>
          <button className="px-4 py-2 border rounded-md bg-gray-100 hover:bg-gray-200">
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default TableComponent;
