import "ka-table/style.css";

import React from "react";
import Aside from "@Components/Panel/Aside";
import Display from "@Components/Panel/Display";
import ApplyModal from "@Common/ApplyModal";
import ApplyTable from "@Components/Panel/StudentInfo/ApplyTable";

const TestPage = () => {
  // FIXME: must be Implement with Redux
  // TODO: Impliment pagination
  return (
    <>
      <Aside />
      <Display>
        {/* <Table type="student" data={data} /> */}
        {/* <TableDemo /> */}
        {/* <PagingDemo /> */}
        <ApplyModal windowName="Table">
          {/* <PagingDemo /> */}
          <ApplyTable />
        </ApplyModal>
      </Display>
    </>
  );
};

export default TestPage;
