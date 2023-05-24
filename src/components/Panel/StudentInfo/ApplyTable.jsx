import React, { useState } from "react";

import { Table, useTable } from "ka-table";

import {
  ActionType,
  DataType,
  EditingMode,
  PagingPosition,
  SortingMode,
} from "ka-table/enums";

// StudentTable data & attributes
import { data, attributes } from "@Datas/StudentTable";

const ApplyTable = () => {
  const [columns, setColumns] = useState([
    ...attributes,
    { key: "action", width: 80 },
  ]);

  const table = useTable({
    onDispatch: async (action, newState) => {
      if (action.type === ActionType.ClearFocused) {
        console.log(1);
      }
    },
  });

  return (
    <>
      <Table
        table={table}
        columns={columns}
        data={data}
        paging={{
          enabled: true,
          pageIndex: 0,
          pageSize: 10,
          pageSizes: [5, 10, 15],
          position: PagingPosition.Bottom,
        }}
        sortingMode={SortingMode.Single}
        // editingMode={EditingMode.Cell}
        rowKeyField={"studentId"}
        childComponents={{
          cell: {
            content: ({ column, row }) => {
              if (column.key === "action") {
                return (
                  <div className="flex gap-6">
                    <button onClick={() => console.log(1)}>o</button>
                    <button onClick={() => console.log(0)}>x</button>
                  </div>
                );
              }
            },
          },
        }}
      />
    </>
  );
};

export default ApplyTable;
