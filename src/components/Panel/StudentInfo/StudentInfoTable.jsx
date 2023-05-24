import React, { useState } from "react";
import { Table, useTable } from "ka-table";
import {
  DataType,
  EditingMode,
  PagingPosition,
  SortingMode,
} from "ka-table/enums";

import { data, attributes } from "@Datas/StudentTable";

const StudentInfoTable = () => {
  const table = useTable();

  return (
    <div className="student-info-table">
      <Table
        table={table}
        columns={attributes}
        data={data}
        paging={{
          enabled: true,
          pageIndex: 0,
          pageSize: 10,
          pageSizes: [5, 10, 15],
          position: PagingPosition.Bottom,
        }}
        sortingMode={SortingMode.Single}
        editingMode={EditingMode.Cell}
        rowKeyField={"studentId"}
      />
    </div>
  );
};

export default StudentInfoTable;
