import "ka-table/style.css";

import React from "react";
import Aside from "@Components/Panel/Aside";
import Display from "@Components/Panel/Display";
// import Table from "@Components/Panel/Table";

import TableDemo from "@Components/Panel/Table2";
import PagingDemo from "@Components/Panel/Table3";

const TestPage = () => {
  // FIXME: must be Implement with Redux
  // TODO: Impliment pagination
  return (
    <>
      <Aside />
      <Display>
        {/* <Table type="student" data={data} /> */}
        {/* <TableDemo /> */}
        <PagingDemo />
      </Display>
    </>
  );
};

export default TestPage;
