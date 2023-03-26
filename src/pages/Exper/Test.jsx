import React from "react";
import Nav from "../../components/Panel/Nav";

const TestPage = () => {
  const navItems = [
    {
      itemName: "메인",
      link: "main",
    },
    {
      itemName: "공지사항",
      link: "notice",
    },
    {
      itemName: "학생정보",
      link: "student-info",
    },
    {
      itemName: "설정",
      link: "settings",
    },
    {
      itemName: "test",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ];
  return (
    <div>
      <div>test page</div>
      <Nav items={navItems} />
    </div>
  );
};

export default TestPage;
