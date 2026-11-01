import React from "react";

import {
  Code2,
  Monitor,
  Database,
  Wrench,
  Coffee,
  Hash,
  FileCode,
  Palette,
  Braces,
  Atom,
  Layers,
  Wind,
  Server,
  HardDrive,
  GitBranch,
  Globe,
} from "lucide-react";

import "../SkillPage.css";

// Skill Categories
const categories = [
  {
    title: "Programming",
    icon: Code2,
    color: "blue",
    skills: [
      { name: "Java", icon: Coffee },
      { name: "C#", icon: Hash },
      { name: "HTML", icon: FileCode },
      { name: "CSS", icon: Palette },
      { name: "JavaScript", icon: Braces },
    ],
  },
  {
    title: "Front-end Development",
    icon: Monitor,
    color: "purple",
    skills: [
      { name: "ReactJS", icon: Atom },
      { name: "Vue.js", icon: Layers },
      { name: "Tailwind CSS", icon: Wind },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "green",
    skills: [
      { name: "MySQL", icon: Database },
      { name: "SQL Server", icon: Server },
      { name: "MongoDB", icon: HardDrive },
    ],
  },
  {
    title: "Tools & Deployment",
    icon: Wrench,
    color: "orange",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitBranch },
      { name: "Vercel", icon: Globe },
    ],
  },
];

// Skill Card Component
const SkillCard = ({ category }) => {
  const Icon = category.icon;

  return (
    <div id="skill" className="skill-card">
      {/* Card Header */}
      <div className="skill-card-header">
        <div className={`skill-icon ${category.color}`}>
          <Icon size={23} strokeWidth={1.8} />
        </div>

        <h2>{category.title}</h2>
      </div>

      {/* Divider */}
      <div className="skill-divider"></div>

      {/* Skill Items */}
      <div className="skill-list">
        {category.skills.map((skill) => {
          const SkillIcon = skill.icon;

          return (
            <span key={skill.name} className={`skill-item ${category.color}`}>
              <SkillIcon size={15} strokeWidth={2} />
              {skill.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

// Main Component
const SkillPage = () => {
  return (
    <section id="skill" className="skill-section">
      {/* Heading */}
      <div className="skill-heading">
        <h1>
          Skill <span>&</span> Expertise
          <p className="text-[15px] caret-emerald-50 font-sans pb-9">
            Technologies and practices from my CV, grouped by how I use them to
            build full-stack applications.
          </p>
        </h1>

        <div className="skill-heading-line"></div>
      </div>

      {/* Skill Container */}
      <div className="skill-container">
        {/* First Row */}
        <div className="skill-row">
          {categories.slice(0, 2).map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>

        {/* Second Row */}
        <div className="skill-row">
          {categories.slice(2, 4).map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillPage;
