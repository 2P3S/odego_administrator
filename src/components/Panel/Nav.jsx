import React from "react";
import { ReactComponent as OdegoLogo } from "../../assets/logo/odego-logo.svg";
// import { ReactComponent as MainIcon } from "../assets/nav/main.svg";
// import { ReactComponent as NoticeIcon } from "../assets/nav/notice.svg";
// import { ReactComponent as StudentInfoIcon } from "../assets/nav/student-info.svg";
// import { ReactComponent as SettingsIcon } from "../assets/nav/settings.svg";

const UserCard = ({ professorId, professorName }) => {
  return (
    <li>
      <a
        href={"u" + "/" + professorId}
        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white dark:text-whitedark:hover:bg-gray-700 h-24"
      >
        <OdegoLogo className="w-16 h-16" />
        <span class="ml-3">{professorName}</span>
      </a>
    </li>
  );
};

const SubjectCard = ({ classId }) => {
  return (
    <li>
      <a class="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white rounded-lg dark:text-whitedark:hover:bg-gray-700">
        <span class="ml-3">담당 클래스: {classId}</span>
      </a>
    </li>
  );
};

const NavItem = ({ info: { itemName, link } }) => {
  return (
    <li>
      <a
        href={link}
        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <span class="ml-3">{itemName}</span>
      </a>
    </li>
  );
};

const Nav = ({ professorInfo: { professorId, professorName, classId } }) => {
  return (
    <div>
      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2">
            <UserCard professorId={professorId} professorName={professorName} />
            <SubjectCard classId={classId} />
            <NavItem info={{ itemName: "메인", link: "main" }} />
            <NavItem info={{ itemName: "공지사항", link: "notice" }} />
            <NavItem info={{ itemName: "학생정보", link: "student-info" }} />
            <NavItem info={{ itemName: "설정", link: "settings" }} />
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Nav;
