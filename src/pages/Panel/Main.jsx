import React from "react";
import Nav from "../../components/Panel/Nav";

const MainPage = ({ professorInfo }) => {
  return (
    <>
      <Nav professorInfo={professorInfo} />
    </>
  );
};

export default MainPage;
