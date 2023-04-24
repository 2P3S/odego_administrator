import React, { useState, useEffect } from "react";
import TitleBadge from "@Components/common/TitleBadge";

const ReasonItem = ({ title, studentName, date }) => {
  return (
    <li className="h-12 bg-blue-300">
      <a className="flex w-full h-full items-center" href="#">
        <div className="w-8/12">{title}</div>
        <div className="w-2/12">{studentName}</div>
        <div className="">{date}</div>
      </a>
    </li>
  );
};

const ReasonSection = () => {
  const [reasons, setReasons] = useState([
    {
      id: 1,
      title: "테스트1",
      studentName: "이주현",
      date: "2023.04.06",
    },
    {
      id: 2,
      title: "테스트2",
      studentName: "김주현",
      date: "2023.05.02",
    },
    {
      id: 3,
      title: "테스트3",
      studentName: "박주현",
      date: "2023.05.23",
    },
    {
      id: 4,
      title: "테스트4",
      studentName: "최주현",
      date: "2023.05.23",
    },
    {
      id: 5,
      title: "테스트5",
      studentName: "미주현",
      date: "2023.05.23",
    },
    {
      id: 6,
      title: "테스트6",
      studentName: "서주현",
      date: "2023.05.23",
    },
  ]);

  // useEffect(() => {
  //   const getReasons = async () => {
  //     const response = await fetch("http://localhost:8080/api/reason");
  //     const data = await response.json();
  //     setReasons(data);
  //   };
  //   getReasons();
  // }, []);

  return (
    <div className="reason-section">
      <div className="header-sm my-3">
        <TitleBadge color="green">사유서</TitleBadge>
      </div>
      <div className="w-96">
        <ul className="flex flex-col gap-2">
          {/* TODO: slice 갯수 커스텀 */}
          {reasons.slice(0, 5).map(reason => {
            return (
              <ReasonItem
                key={reason.id}
                title={reason.title}
                studentName={reason.studentName}
                date={reason.date}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ReasonSection;
