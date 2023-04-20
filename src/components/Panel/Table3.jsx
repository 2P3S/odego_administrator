import React from "react";

import { Table, useTable } from "ka-table";
import {
  DataType,
  EditingMode,
  PagingPosition,
  SortingMode,
} from "ka-table/enums";

// StudentTable data & attributes
import { data, attributes } from "@Datas/StudentTable";

/* default data */
// const dataArray = Array(180)
//   .fill(undefined)
//   .map((_, index) => ({
//     column1: `column:1 row:${index}`,
//     column2: `column:2 row:${index}`,
//     column3: `column:3 row:${index}`,
//     column4: `column:4 row:${index}`,
//     id: index,
//   }));

const PagingDemo = () => {
  const table = useTable();

  return (
    <>
      {/* TODO: 아마도 필요없음.. 페이지에 얼마나 표시할 것인지 선택 태그 */}
      {/* 
      Paging position:{" "}
      <select
        defaultValue={PagingPosition.Bottom}
        onChange={e =>
          table.changeProps({
            ...table.props,
            paging: { ...table.props.paging, position: e.target.value },
          })
        }
        style={{ marginBottom: 20 }}
      >
        <option value={PagingPosition.Bottom}>Bottom</option>
        <option value={PagingPosition.Top}>Top</option>
        <option value={PagingPosition.TopAndBottom}>TopAndBottom</option>
      </select>
       */}
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
        rowKeyField={"id"}
      />
    </>
  );
};

export default PagingDemo;
