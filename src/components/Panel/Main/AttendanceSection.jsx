import React, { useState } from "react";
import TitleBadge from "../../TitleBadge";
import FillGraph from "../../FillGraph";

const AttendanceSection = () => {
  const [attendance, setAttendance] = useState({ total: 33, attend: 31 });
  const attendRate = Math.floor((attendance.attend / attendance.total) * 100);
  const notAttendRate = 100 - attendRate;
  return (
    <div className="attendance-section">
      <div className="header-sm">
        <TitleBadge color="red">참석율</TitleBadge>
      </div>
      <div>
        참석 인원
        <div>
          {attendance.attend + " / " + attendance.total}
          <FillGraph color="bg-indigo-500" data={attendRate} />
        </div>
      </div>
      <div>
        미참석 인원
        <div>
          {attendance.total - attendance.attend + " / " + attendance.total}
          <FillGraph color="bg-amber-400" data={notAttendRate} />
        </div>
      </div>
    </div>
  );
};

export default AttendanceSection;
