
import React from "react";

import {
  Monitor,
  GraduationCap,
  CalendarDays,
  Building2,
  BookOpen,
} from "lucide-react";

import "../ExperiencePage.css";

const experiences = [
  {
    id: 1,
    title: "IT Support & Cashier",
    organization: "Royal University of Phnom Penh (RUPP)",
    date: "2024 - 2026",
    description:
      "Gained practical experience in IT support and cashier responsibilities while developing communication, problem-solving, and time-management skills.",
    icon: Monitor,
    color: "blue",
    type: "Work Experience",
    details: [
      "IT Support",
      "Cashier Operations",
      "Problem Solving",
      "Communication",
    ],
  },
  {
    id: 2,
    title: "Computer Teacher",
    organization: "Teaching Experience",
    date: "2025 - 2026",
    description:
      "Taught basic computer skills, Microsoft Office applications, and Basic English to help students improve their knowledge and practical abilities.",
    icon: GraduationCap,
    color: "purple",
    type: "Teaching Experience",
    details: [
      "Basic Computer",
      "Microsoft Office",
      "Basic English",
      "Communication",
    ],
  },
];

const ExperienceCard = ({ experience }) => {
  const Icon = experience.icon;

  return (
    <article className={`experience-card ${experience.color}`}>
      {/* Card Header */}
      <div className="experience-card-header">

        <div className="experience-icon">
          <Icon size={32} strokeWidth={1.8} />
        </div>

        <div className="experience-date">
          <CalendarDays size={17} />
          <span>{experience.date}</span>
        </div>

      </div>

      {/* Card Content */}
      <div className="experience-content">

        <span className="experience-type">
          {experience.type}
        </span>

        <h2>{experience.title}</h2>

        <div className="experience-organization">
          {experience.id === 1 ? (
            <Building2 size={17} />
          ) : (
            <BookOpen size={17} />
          )}

          <span>{experience.organization}</span>
        </div>

        <p className="experience-description">
          {experience.description}
        </p>

        {/* Experience Skills */}
        <div className="experience-details">
          {experience.details.map((detail) => (
            <span key={detail} className="experience-tag">
              {detail}
            </span>
          ))}
        </div>

      </div>
    </article>
  );
};

const ExperiencePage = () => {
  return (
    <section id="experience" className="experience-section">

      {/* Heading */}
      <div className="experience-heading">
        <h1>
          My <span>Experience</span>
        </h1>

        <div className="experience-heading-line"></div>

        <p>
          My professional journey and practical experience
        </p>
      </div>

      {/* Experience Cards */}
      <div className="experience-container">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
          />
        ))}
      </div>

    </section>
  );
};

export default ExperiencePage;
