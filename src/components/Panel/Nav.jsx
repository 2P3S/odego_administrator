import React from "react";
import NavIcon from "../../assets/nav";

const NavItem = ({ iconName, itemName, link }) => {
  return (
    <li>
      <a
        href={link}
        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <NavIcon icon={iconName} />
        <span class="ml-3">{itemName}</span>
      </a>
    </li>
  );
};

const Nav = () => {
  return (
    <ul class="space-y-2 font-medium">
      <NavItem iconName="main" itemName="메인" link="main" />
      <NavItem iconName="notice" itemName="공지사항" link="notice" />
      <NavItem
        iconName="student-info"
        itemName="학생정보"
        link="student-info"
      />
      <NavItem iconName="settings" itemName="설정" link="settings" />
    </ul>
  );
};

export default Nav;
