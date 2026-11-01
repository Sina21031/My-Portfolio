import React from "react";
import {
  Code2,
  Lightbulb,
  BookOpen,
  Users,
  UserRound,
  GraduationCap,
  Mail,
  MapPin,
  CalendarDays,
  Download,
  ArrowRight,
} from "lucide-react";

import "../AboutPage.css";

const skills = [
  {
    title: "Coding",
    description: "Building web and desktop applications",
    icon: Code2,
    color: "blue",
  },
  {
    title: "Problem Solving",
    description: "Finding solutions to complex problems",
    icon: Lightbulb,
    color: "purple",
  },
  {
    title: "Continuous Learning",
    description: "Always curious, always growing",
    icon: BookOpen,
    color: "green",
  },
  {
    title: "Teamwork",
    description: "Working together for better results",
    icon: Users,
    color: "orange",
  },
];

const information = [
  {
    label: "Name",
    value: "Soeung Sina",
    icon: UserRound,
  },
  {
    label: "Education",
    value: "Bachelor of Computer Science",
    subValue: "Royal University of Phnom Penh",
    icon: GraduationCap,
  },
  {
    label: "Date of Birth",
    value: "03/02/2004",
    icon: CalendarDays,
  },
  {
    label: "Email",
    value: "2sina2004@gmail.com",
    icon: Mail,
  },
  {
    label: "Location",
    value: "Phnom Penh, Cambodia",
    icon: MapPin,
  },
];

export default function AboutPage() {
  return (
    <section id="about" className="about-section">
      {/* Background decorations */}
      <div className="about-background">
        <div className="bg-circle bg-circle-left" />
        <div className="bg-glow bg-glow-right" />
        <div className="bg-glow bg-glow-bottom" />
        <div className="bg-circle bg-circle-right" />
      </div>

      <div className="about-container">
        {/* Heading */}
        <header className="about-header">
          <div className="section-label">
            <span className="label-line label-line-left" />
            <span>Get to know me</span>
            <span className="label-line label-line-right" />
          </div>

          <h1 className="about-title">
            About <span>Me</span>
          </h1>

          <p className="about-intro">
            Hi, I’m Soeung Sina, a passionate and dedicated computer science
            student. I enjoy learning new technologies, building creative
            solutions, and turning ideas into real projects. My goal is to
            become a skilled full-stack developer and make a positive impact in
            the tech world.
          </p>
        </header>

        {/* Skills */}
        <div className="skills-grid">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <article
                key={skill.title}
                className={`skill-item skill-${skill.color}`}
              >
                <div className="skill-icon">
                  <Icon size={26} strokeWidth={1.9} />
                </div>

                <h2 className="skill-title">{skill.title}</h2>

                <p className="skill-description">{skill.description}</p>

                <span className="skill-underline" />
              </article>
            );
          })}
        </div>

        {/* Personal Information */}
        <section className="personal-section">
          <div className="personal-header">
            <div className="personal-heading-icon">
              <UserRound size={22} strokeWidth={1.8} />
            </div>

            <h2>Personal Information</h2>

            <p>A little more about me and my background.</p>
          </div>

          <div className="personal-divider" />

          <div className="information-grid">
            {information.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.label} className="information-card">
                  <div className="information-icon">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <div className="information-content">
                    <p className="information-label">{item.label}</p>

                    <p className="information-value">{item.value}</p>

                    {item.subValue && (
                      <p className="information-subvalue">{item.subValue}</p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Download CV */}
        <div className="download-wrapper">
          <a href="/SoeungSina_CV.pdf" download className="download-button">
            <Download size={20} />
            <span>Download CV</span>
            <ArrowRight size={18} className="download-arrow" />
          </a>
        </div>

        {/* Footer */}
        <footer className="about-footer">
          <span className="footer-line footer-line-left" />

          <p>
            Dream <span className="footer-blue">•</span> Learn{" "}
            <span className="footer-purple">•</span> Build
          </p>

          <span className="footer-line footer-line-right" />
        </footer>
      </div>
    </section>
  );
}
