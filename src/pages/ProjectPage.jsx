import React, { useState } from "react";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaFolder,
  FaStar,
  FaShoppingCart,
  FaGraduationCap,
  FaGlobe,
  FaLaptop,
  FaCode,
  FaPaintBrush,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaBolt,
  FaDatabase,
  FaHtml5,
} from "react-icons/fa";

import { FiGrid, FiCode, FiMonitor } from "react-icons/fi";

import "../ProjectPage.css";

// Category Filters
const filters = [
  { name: "All", value: "All", icon: <FiGrid /> },
  { name: "Web Development", value: "Web", icon: <FiCode /> },
  { name: "Desktop App", value: "Desktop", icon: <FiMonitor /> },
  { name: "UI Design", value: "UI", icon: <FaPaintBrush /> },
];

// Projects Data
const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    category: "Web",
    description:
      "A responsive personal portfolio website to showcase my skills, education, experience and projects.",

    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Vite", icon: <FaBolt /> },
    ],

    icon: <FaGlobe />,
    previewTitle: "SOEUNG SINA",
    previewSubtitle: "Personal Portfolio Website",
    previewText: "Showcasing my development journey.",
    previewClass: "portfolio-preview",

    liveLink: "https://soeungsina-portfolio.vercel.app/",
    githubLink: "https://github.com/Sina21031/My-Portfolio.git",
  },

  {
    id: 2,
    title: "Student Information System",
    category: "Desktop",
    description:
      "A desktop application for managing student information and performing basic CRUD operations.",

    technologies: [
      { name: "C#", icon: <FaCode /> },
      { name: "WinForms", icon: <FaLaptop /> },
      { name: "SQL Server", icon: <FaDatabase /> },
    ],

    icon: <FaGraduationCap />,
    previewTitle: "Student Management",
    previewSubtitle: "Student Information System",
    previewText: "Manage student records easily.",
    previewClass: "student-preview",

    liveLink: "",
    githubLink: "",
  },

  {
    id: 3,
    title: "E-Commerce Website",
    category: "UI",
    description:
      "A modern e-commerce interface concept designed for displaying technology products.",

    technologies: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
    ],

    icon: <FaShoppingCart />,
    previewTitle: "TechStore",
    previewSubtitle: "Upgrade Your Technology",
    previewText: "Better products. Better experience.",
    previewClass: "ecommerce-preview",

    liveLink: "",
    githubLink: "",
  },
];

// Featured Project
const featuredProject = {
  title: "Computer Shop Management System",

  description:
    "A desktop application developed to manage products, customers, staff, orders and payments for a computer shop.",

  technologies: [
    { name: "C#", icon: <FaCode /> },
    { name: "WinForms", icon: <FaLaptop /> },
    { name: "SQL Server", icon: <FaDatabase /> },
  ],

  liveLink: "",
  githubLink: "https://github.com/Sina21031/ShopManagment.git",
};

const ProjectPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter Projects
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects">
      {/* Background Decorations */}
      <div className="projects-background">
        <div className="projects-glow projects-glow-left"></div>
        <div className="projects-glow projects-glow-right"></div>
        <div className="projects-circle projects-circle-left"></div>
        <div className="projects-circle projects-circle-right"></div>
        <div className="projects-dots projects-dots-left"></div>
        <div className="projects-dots projects-dots-right"></div>
      </div>

      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <div className="projects-label">
            <span></span>
            <p>MY WORKS</p>
            <span></span>
          </div>

          <h1>
            My <span>Projects</span>
          </h1>

          <p className="projects-subtitle">
            A showcase of my work and development journey
          </p>
        </div>

        {/* Category Filter */}
        <div className="projects-filter">
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`filter-btn ${
                activeFilter === filter.value ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.icon}
              <span>{filter.name}</span>
            </button>
          ))}
        </div>

        {/* Featured Project */}
        {(activeFilter === "All" || activeFilter === "Desktop") && (
          <div className="featured-project">
            {/* Dashboard Preview */}
            <div className="featured-preview">
              <div className="dashboard-window">
                {/* Dashboard Sidebar */}
                <div className="dashboard-sidebar">
                  <div className="dashboard-logo">
                    <FaShoppingCart />
                    <span>ShopManagement</span>
                  </div>

                  {[
                    "Dashboard",
                    "Product",
                    "Staff",
                    "Customer",
                    "Supplier",
                    "Import Detail",
                    "Order Detail",
                    "Payment",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className={`dashboard-menu ${
                        index === 0 ? "selected" : ""
                      }`}
                    >
                      <span className="menu-dot"></span>
                      {item}
                    </div>
                  ))}
                </div>

                {/* Dashboard Content */}
                <div className="dashboard-content">
                  <div className="dashboard-top">
                    <strong>Dashboard</strong>
                    <span>Admin</span>
                  </div>

                  {/* Dashboard Statistics */}
                  <div className="dashboard-stats">
                    <div className="stat-box stat-blue">
                      <span>Total Products</span>
                      <strong>120</strong>
                    </div>

                    <div className="stat-box stat-green">
                      <span>Total Orders</span>
                      <strong>85</strong>
                    </div>

                    <div className="stat-box stat-purple">
                      <span>Customers</span>
                      <strong>200</strong>
                    </div>
                  </div>

                  {/* Dashboard Charts */}
                  <div className="dashboard-charts">
                    <div className="chart-box">
                      <strong>Sales Overview</strong>

                      <div className="chart-bars">
                        {[35, 55, 43, 75, 60, 90, 70].map((height, index) => (
                          <span
                            key={index}
                            style={{ height: `${height}%` }}
                          ></span>
                        ))}
                      </div>
                    </div>

                    <div className="chart-box chart-circle-box">
                      <strong>Top Products</strong>
                      <div className="chart-circle"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Details */}
            <div className="featured-details">
              <div className="featured-badge">
                <FaStar />
                FEATURED PROJECT
              </div>

              <h2>{featuredProject.title}</h2>

              <p>{featuredProject.description}</p>

              {/* Technologies */}
              <div className="project-technologies featured-tech">
                {featuredProject.technologies.map((tech) => (
                  <span key={tech.name}>
                    {tech.icon}
                    {tech.name}
                  </span>
                ))}
              </div>

              {/* Featured Actions */}
              <div className="featured-actions">
                <a
                  href={featuredProject.liveLink || undefined}
                  className={`project-action primary ${
                    !featuredProject.liveLink ? "disabled" : ""
                  }`}
                  onClick={(e) => {
                    if (!featuredProject.liveLink) {
                      e.preventDefault();
                    }
                  }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

                <a
                  href={featuredProject.githubLink || undefined}
                  className={`project-action secondary ${
                    !featuredProject.githubLink ? "disabled" : ""
                  }`}
                  onClick={(e) => {
                    if (!featuredProject.githubLink) {
                      e.preventDefault();
                    }
                  }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                  Source Code
                </a>
              </div>
            </div>

            {/* Decoration */}
            <div className="featured-decoration">
              <FaLaptop />
              <FaCode className="featured-code-icon" />
            </div>
          </div>
        )}

        {/* Other Projects */}
        <div className="other-projects">
          <div className="other-projects-heading">
            <h2>
              <FaFolder />
              Other Projects
            </h2>

            <span></span>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <article className="project-card" key={project.id}>
                  {/* Project Preview */}
                  <div className={`project-preview ${project.previewClass}`}>
                    <div className="preview-navbar">
                      <strong>{project.previewTitle}</strong>
                      <span>My Project</span>
                    </div>

                    <div className="preview-main">
                      <div className="preview-text">
                        <h3>{project.previewSubtitle}</h3>

                        <p>{project.previewText}</p>

                        <div className="preview-line"></div>
                        <div className="preview-line short"></div>
                      </div>

                      <div className="preview-icon">{project.icon}</div>
                    </div>
                  </div>

                  {/* Project Information */}
                  <div className="project-card-content">
                    <h3>
                      {project.icon}
                      {project.title}
                    </h3>

                    <p className="project-description">{project.description}</p>

                    {/* Technologies */}
                    <div className="project-technologies">
                      {project.technologies.map((tech) => (
                        <span key={tech.name}>
                          {tech.icon}
                          {tech.name}
                        </span>
                      ))}
                    </div>

                    {/* Project Actions */}
                    <div className="project-card-actions">
                      <a
                        href={project.liveLink || undefined}
                        className={`project-action primary ${
                          !project.liveLink ? "disabled" : ""
                        }`}
                        onClick={(e) => {
                          if (!project.liveLink) {
                            e.preventDefault();
                          }
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>

                      <a
                        href={project.githubLink || undefined}
                        className={`project-action secondary ${
                          !project.githubLink ? "disabled" : ""
                        }`}
                        onClick={(e) => {
                          if (!project.githubLink) {
                            e.preventDefault();
                          }
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub />
                        Source Code
                      </a>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="no-projects">
                <FaFolder />
                <h3>No projects found</h3>
                <p>There are no projects in this category yet.</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="projects-footer">
          <span></span>
          <p>More projects coming soon...</p>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
