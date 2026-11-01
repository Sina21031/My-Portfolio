import React, { useState } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaProjectDiagram,
  FaGraduationCap,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <section className="nav">
      {/* Logo / Brand */}
      <div className="main-text">
        <h1>SOEUNG SINA | Portfolio</h1>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Links */}
      <nav className={`main-link ${menuOpen ? "show-menu" : ""}`}>
        <NavLink className="NavLink" to="/" onClick={closeMenu}>
          <FaHome />
          <span>Home</span>
        </NavLink>

        <NavLink className="NavLink" to="/about" onClick={closeMenu}>
          <FaUser />
          <span>About</span>
        </NavLink>

        <NavLink className="NavLink" to="/skill" onClick={closeMenu}>
          <FaCode />
          <span>Skill</span>
        </NavLink>

        <NavLink className="NavLink" to="/experience" onClick={closeMenu}>
          <FaBriefcase />
          <span>Experience</span>
        </NavLink>

        <NavLink className="NavLink" to="/project" onClick={closeMenu}>
          <FaProjectDiagram />
          <span>Project</span>
        </NavLink>

        <NavLink className="NavLink" to="/education" onClick={closeMenu}>
          <FaGraduationCap />
          <span>Education</span>
        </NavLink>
      </nav>
    </section>
  );
};

export default NavBar;
