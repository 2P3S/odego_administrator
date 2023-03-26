import React from "react";
import { ReactComponent as LogoIcon } from "../../assets/logo/odego-logo.svg";

const User = ({ professorName }) => {
  return (
    <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
      <LogoIcon style={{ width: 100, height: 100 }} />
      <span class="ml-3">{professorName}</span>
    </div>
  );
};

const Subject = ({ classId }) => {
  return (
    <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
      <span class="ml-3">담당 클래스: {classId}</span>
    </div>
  );
};

const UserCard = () => {
  return (
    <>
      <User professorName="박성철" />
      <Subject classId="2-wdj" />
    </>
  );
};

export default UserCard;
