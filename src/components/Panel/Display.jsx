import React from "react";

const Display = ({ children }) => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="container">{children}</div>
    </div>
  );
};

export default Display;
