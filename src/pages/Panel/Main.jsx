import React from "react";
import Aside from "@Components/Panel/Aside";
import Display from "@Components/Panel/Display";
import AttendanceSection from "@Components/Panel/Main/AttendanceSection";
import NoticeSection from "@Components/Panel/Main/NoticeSection";
import ReasonSection from "@Components/Panel/Main/ReasonSection";

const MainPage = () => {
  return (
    <>
      <Aside />
      <Display>
        <AttendanceSection />
        <NoticeSection />
        <ReasonSection />
      </Display>
    </>
  );
};

export default MainPage;
