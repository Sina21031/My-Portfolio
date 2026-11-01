
import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillPage from "./pages/SkillPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectPage from "./pages/ProjectPage";
import EducationPage from "./pages/EducationPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skill" element={<SkillPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/education" element={<EducationPage />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
