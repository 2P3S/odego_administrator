import React from "react";
import Nav from "./Nav";
import UserCard from "./UserCard";

const AsideClass =
  "fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0";

const Aside = () => {
  return (
    <aside className={AsideClass}>
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 whitespace-nowrap overflow-auto scrollbar-hide md:scrollbar-default">
        <UserCard />
        <Nav />
      </div>
    </aside>
  );
};

export default Aside;
