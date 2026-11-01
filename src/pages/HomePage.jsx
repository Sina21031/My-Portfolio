
import React from "react";
import sina from "../assets/sina.jpg";

import {
  FaGithub,
  FaTelegramPlane,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";

import "../HomePage.css";

const HomePage = () => {
  return (
    <section className="home">

      {/* Background Decorations */}
      <div className="home-background">
        <div className="home-bg-circle home-bg-circle-left"></div>
        <div className="home-bg-glow home-bg-glow-right"></div>
        <div className="home-bg-glow home-bg-glow-bottom"></div>
        <div className="home-bg-circle home-bg-circle-right"></div>
      </div>

      {/* Main Content */}
      <div className="home-content">

        {/* Profile Image */}
        <div className="home-profile">
          <img src={sina} alt="Soeung Sina" />
        </div>

        {/* Name */}
        <h1>SOEUNG SINA</h1>

        {/* Job Title */}
        <h2>Frontend Developer</h2>

        {/* Description */}
        <p>
          Software developer and IT instructor with hands-on
          experience building secure full-stack applications
          using Java, Spring Boot, Laravel, and React.js.
          I enjoy designing reliable APIs, solving practical
          problems, and helping people grow through technology.
        </p>

        {/* Action Buttons */}
        <div className="home-buttons">

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="home-social-btn"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          {/* Contact Me */}
          <a
            href="https://t.me/Vetofyou"
            target="_blank"
            rel="noopener noreferrer"
            className="home-contact-btn"
          >
            <span>Contact Me:</span>
            <FaTelegramPlane />
          </a>

          {/* Download CV */}
          <a
            href="/SoeungSina_CV.pdf"
            download="SoeungSina_CV.pdf"
            className="home-download-btn"
          >
            <FaDownload />
            <span>Download CV</span>
          </a>

          {/* Email */}
          <a
            href="mailto:2sina2004@gmail.com"
            className="home-social-btn"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

        </div>
      </div>
    </section>
  );
};

export default HomePage;
