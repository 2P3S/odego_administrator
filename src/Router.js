import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import MainPage from "./pages/Main";
import SigninPage from "./pages/Auth/Signin";
import SignupPage from "./pages/Auth/SignUp";
=======
import HomePage from "./pages/Home";
import MainPage from "./pages/Panel/Main";
import NoticePage from "./pages/Panel/Notice";
import StudentInfoPage from "./pages/Panel/StudentInfo";
import SettingsPage from "./pages/Panel/Settings";
import TestPage from "./pages/Exper/Test";
>>>>>>> origin/feature

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
=======
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />

        <Route path="/main" element={<MainPage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/student-info" element={<StudentInfoPage />} />
        <Route path="/settings" element={<SettingsPage />} />
>>>>>>> origin/feature
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
