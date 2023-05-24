import React, { useState } from "react";
import TitleBadge from "@Components/common/TitleBadge";
import StudentInfoTable from "./StudentInfoTable";
import ApplyModal from "@Common/ApplyModal";
import ApplyTable from "./ApplyTable";

const StudentInfoSection = () => {
  return (
    <div className="student-info-section">
      <div className="header-sm my-3">
        <TitleBadge color="yellow">학생정보</TitleBadge>
      </div>
      <StudentInfoTable />
      <ApplyModal windowName="신청 목록">
        <ApplyTable />
      </ApplyModal>
    </div>
  );
};

export default StudentInfoSection;
