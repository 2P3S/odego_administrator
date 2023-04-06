import React from "react";
import Aside from "../../components/Panel/Aside";
import Display from "../../components/Panel/Display";
import AttendanceSection from "../../components/Panel/Main/AttendanceSection";
import NoticeSection from "../../components/Panel/Main/NoticeSection";
import ReasonSection from "../../components/Panel/Main/ReasonSection";

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
