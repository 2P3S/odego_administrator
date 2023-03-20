import React from "react";

const UserCard = ({ professorName: username }) => {
  return <div>User Card {username}</div>;
};

const SubjectCard = ({ classId }) => {
  return <div>Subject Card {classId}</div>;
};

const NavItem = () => {
  return <div>Nav Item</div>;
};

const Nav = () => {
  return (
    <div>
      <UserCard professorName={"scpark"} />
      <SubjectCard classId={"wdj2"} />
      <NavItem />
    </div>
  );
};

export default Nav;
