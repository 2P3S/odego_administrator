import React from "react";
import Aside from "../../components/Panel/Aside";
import Display from "../../components/Panel/Display";
import AttendanceSection from "../../components/Panel/Main/AttendanceSection";
import NoticeSection from "../../components/Panel/Main/NoticeSection";

const MainPage = () => {
  return (
    <div>
      <Aside />
      <Display>
        <AttendanceSection />
        <NoticeSection />
      </Display>
    </div>
  );
};

export default MainPage;
