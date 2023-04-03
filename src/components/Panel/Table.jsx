import React, { useState } from "react";
const TableItem = ({
  seq,
  info: { studentId, classId, studentName, studentContact },
}) => {
  return (
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="checkbox-table-search-1" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {seq}
        </th>
        <td className="px-6 py-4">{studentName}</td>
        <td className="px-6 py-4">{classId}</td>
        <td className="px-6 py-4">{studentId}</td>
        <td className="px-6 py-4">{studentContact}</td>
        {/* FIXME: TEST VARIABLES */}
        <td className="px-6 py-4">100%</td>
        {/* FIXME: TEST VARIABLES */}
      </tr>
    </tbody>
  );
};

const Table = ({ type, data }) => {
  const attr = [];
  if (type === "student") {
    attr.push("순번", "이름", "학년", "학번", "연락처", "출석률");
  } else if (type === "notice") {
    attr.push("번호", "제목", "작성자", "작성일");
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            {attr.map((item, idx) => {
              return (
                <th key={idx} scope="col" className="px-6 py-3">
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        {data.map((info, idx) => {
          return <TableItem key={idx} seq={idx + 1} info={info} />;
        })}
      </table>
    </div>
  );
};

export default Table;
