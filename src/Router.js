import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import MainPage from "./pages/Panel/Main";
import NoticePage from "./pages/Panel/Notice";
import StudentInfoPage from "./pages/Panel/StudentInfo";
import SettingsPage from "./pages/Panel/Settings";
import TestPage from "./pages/Exper/Test";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />

        <Route path="/main" element={<MainPage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/student-info" element={<StudentInfoPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
