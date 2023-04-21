import React, { useState } from "react";

import { ITableProps, kaReducer, Table } from "ka-table";
import { DataType, EditingMode, SortingMode } from "ka-table/enums";
import { DispatchFunc } from "ka-table/types";

const dataArray = [
  {
    studentId: "2201013",
    classId: "2-wdj",
    studentContact: "010-1234-5678",
    studentName: "강주원",
  },
  {
    studentId: "2201014",
    classId: "2-wdj",
    studentContact: "010-4567-8901",
    studentName: "김유민",
  },
  {
    studentId: "2201015",
    classId: "2-wdj",
    studentContact: "010-2234-7789",
    studentName: "이주현",
  },
  {
    studentId: "2201392",
    classId: "2-wdj",
    studentContact: "010-7776-6665",
    studentName: "이재일",
  },
  {
    studentId: "2201393",
    classId: "2-wdj",
    studentContact: "010-8832-1234",
    studentName: "이현민",
  },
].map((item, index) => ({ ...item, id: index }));

/*
TableProps {
  columns: TableColumn[]
  data: any[] <- (Student[])
}

Student {
  studentId: string
  classId: string
  studentContact: string
  studentName: string
}

TableColumn {
  key: string
  title: string
  dataType: DataType
}
*/

const tablePropsInit = {
  columns: [
    { key: "studentId", title: "Column 1", dataType: DataType.String },
    { key: "classId", title: "Column 2", dataType: DataType.String },
    { key: "studentContact", title: "Column 3", dataType: DataType.String },
    { key: "studentName", title: "Column 4", dataType: DataType.String },
  ],
  data: dataArray,
  editingMode: false,
  rowKeyField: "id",
  sortingMode: SortingMode.Single,
};

const TableDemo = () => {
  const [tableProps, changeTableProps] = useState(tablePropsInit);
  const dispatch = action => {
    changeTableProps(prevState => kaReducer(prevState, action));
  };

  return <Table {...tableProps} dispatch={dispatch} />;
};

export default TableDemo;
