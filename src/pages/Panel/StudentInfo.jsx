import React from "react";
import Aside from "@Components/Panel/Aside";
import Display from "@Components/Panel/Display";
import StudentInfoSection from "@Components/Panel/StudentInfo/StudentInfoSection";

const StudentInfoPage = () => {
  return (
    <>
      <Aside />
      <Display>
        <StudentInfoSection />
      </Display>
    </>
  );
};

export default StudentInfoPage;
