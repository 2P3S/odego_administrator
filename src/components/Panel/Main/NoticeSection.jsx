import React, { useState, useEffect } from "react";
import TitleBadge from "@Components/common/TitleBadge";

const NoticeItem = ({ title, date }) => {
  return (
    <li className="h-12 bg-red-300">
      <a className="flex w-full h-full items-center" href="#">
        <div className="w-9/12">{title}</div>
        <div className="">{date}</div>
      </a>
    </li>
  );
};

const NoticeSection = () => {
  const [notices, setNotices] = useState([
    {
      id: 1,
      title: "테스트1",
      date: "2023.04.06",
    },
    {
      id: 2,
      title: "테스트2",
      date: "2023.05.02",
    },
    {
      id: 3,
      title: "테스트3",
      date: "2023.05.23",
    },
    {
      id: 4,
      title: "테스트4",
      date: "2023.05.23",
    },
    {
      id: 5,
      title: "테스트5",
      date: "2023.05.23",
    },
    {
      id: 6,
      title: "테스트6",
      date: "2023.05.23",
    },
  ]);

  /*  */
  // useEffect(() => {
  //   const getNotices = async () => {
  //     const response = await fetch("http://localhost:8080/api/notice");
  //     const data = await response.json();
  //     setNotices(data);
  //   };
  //   getNotices();
  // }, []);

  return (
    <div className="notice-section">
      <div className="header-sm my-3">
        <TitleBadge color="blue">공지사항</TitleBadge>
      </div>
      <div className="w-96">
        <ul className="flex flex-col gap-2">
          {/* TODO: slice 갯수 커스텀 */}
          {notices.slice(0, 5).map(notice => {
            return (
              <NoticeItem
                key={notice.id}
                title={notice.title}
                date={notice.date}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NoticeSection;
