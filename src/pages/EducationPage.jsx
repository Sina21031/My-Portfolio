import React, { useEffect, useState } from "react";

import {
  GraduationCap,
  School,
  Monitor,
  Award,
  CalendarDays,
  MapPin,
  X,
  ZoomIn,
} from "lucide-react";

import certificate from "../assets/c1.png";
import certificate1 from "../assets/c2.png";
import certificate2 from "../assets/c3.png";
import certificate3 from "../assets/c4.png";
import certificate4 from "../assets/c5.png";
import certificate5 from "../assets/c6.png";
import certificate6 from "../assets/c7.png";
import certificate7 from "../assets/c8.png";
import "../EducationPage.css";

// =====================================
// EDUCATION DATA
// =====================================

const educationData = [
  {
    id: 1,
    icon: School,
    level: "High School",
    title: "High School Education",
    institution: "Sam Dach Chea Sim AngkorChey High School",
    period: "2020-2023",
    description:
      "Completed high school education and built a strong foundation for further academic learning . I got present C for BacII",
    status: "Completed",
  },
  {
    id: 2,
    icon: GraduationCap,
    level: "University",
    title: "Bachelor of Computer Sciences",
    institution: "Royal University of Phnom Penh (RUPP)",
    period: "Foundation Year: 2023 – 2024",
    description:
      "Studying programming, software development, databases, networking, and information systems. Developing practical skills through academic projects and programming practice.",
    status: "In Progress",
  },
  {
    id: 3,
    icon: Monitor,
    level: "Professional Training",
    title: "Front-End Development",
    institution: "E-Tect Center",
    period: "2026",
    description:
      "Studying HTML, CSS, JavaScript, ReacteJS and modern web development. Building responsive and user-friendly websites while improving coding and UI/UX skills.",
    status: "Completed",
  },
  {
    id: 4,
    icon: Monitor,
    level: "Professional Training",
    title: "Computer Course",
    institution: "K-MECH School",
    period: "2022-2023",
    description:
      "Studying Typing and Microsoft Office skills has  Word Exel PowerPoint Internet.",
    status: "Completed",
  },
];

// =====================================
// CERTIFICATE DATA
// =====================================

const certificatesData = [
  {
    id: 1,
    image: certificate,
    title: "Foundation Year Certificate",
    institution: "Royal University of Phnom Penh (RUPP)",
    year: "2023 – 2024",
    description:
      "Certificate of successful completion of the Foundation Year Course.",
  },
  {
    id: 2,
    image: certificate1,
    title: "Graduate BacII Certificate",
    institution: "Samdach Chea Sim Angkor Chey High School",
    year: "2020-2023",
    description:
      "Certificate of successful completion of the BacII Examination.",
  },
  {
    id: 3,
    image: certificate2,
    title: "Training Front-End Course Certificate",
    institution: "E-Tech Center",
    year: "2026",
    description:
      "Certificate of successful completion of Training Front-End Course.",
  },
  {
    id: 4,
    image: certificate3,
    title: "Computer Training Course Certificate",
    institution: "K-MECH School",
    year: "2022-2023",
    description:
      "Certificate of successful completion of Training Computer Course.",
  },
  {
    id: 5,
    image: certificate4,
    title: "Certificate From ACU",
    institution: "ACU",
    year: "2026",
    description: "Controller Examination For BacII 2026.",
  },
  {
    id: 6,
    image: certificate5,
    title: "Certificate From RUPP",
    institution: "Royal University of Phnom Penh (RUPP)",
    year: "2024-2025",
    description: "For player football turement at school.",
  },
  {
    id: 7,
    image: certificate6,
    title: "CCNA Introduction to Network Certificate",
    institution: "Royal University of Phnom Penh (RUPP)",
    year: "2024-2025",
    description:
      "Traning Course CCNA Introduction to Network in second years academic.",
  },
  {
    id: 8,
    image: certificate7,
    title: "CCNA Switching, Routing, Wireless Certificate",
    institution: "Royal University of Phnom Penh (RUPP)",
    year: "2025-2026",
    description:
      "Traning Course CCNA Switching, Routing, Wireless to Network in third year academic.",
  },
];

// =====================================
// EDUCATION PAGE
// =====================================

const EducationPage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Close Lightbox with Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        {/* =================================
            PAGE HEADER
        ================================= */}

        <div className="education-header">
          <span className="education-subtitle">MY ACADEMIC JOURNEY</span>

          <h1>
            My <span>Education</span>
          </h1>

          <p>
            My academic background, professional training, and continuous
            learning journey.
          </p>
        </div>

        {/* =================================
            ACADEMIC BACKGROUND
        ================================= */}

        <div className="academic-section">
          <div className="education-section-heading">
            <div className="heading-icon">
              <GraduationCap size={23} />
            </div>

            <div>
              <h2>Academic Background</h2>
              <p>My educational journey and qualifications</p>
            </div>
          </div>

          <div className="education-timeline">
            {educationData.map((item) => {
              const Icon = item.icon;

              return (
                <article className="education-card" key={item.id}>
                  <div className="education-card-icon">
                    <Icon size={25} />
                  </div>

                  <div className="education-card-content">
                    <div className="education-card-top">
                      <span className="education-level">{item.level}</span>

                      <span
                        className={`education-status ${
                          item.status === "Completed" ? "completed" : "progress"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <h3>{item.title}</h3>

                    <div className="education-institution">
                      <MapPin size={15} />
                      <span>{item.institution}</span>
                    </div>

                    <div className="education-period">
                      <CalendarDays size={15} />
                      <span>{item.period}</span>
                    </div>

                    <p className="education-description">{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* =================================
            CERTIFICATES
        ================================= */}

        <div className="certificates-section">
          <div className="education-section-heading">
            <div className="heading-icon certificate-heading-icon">
              <Award size={23} />
            </div>

            <div>
              <h2>Certificates & Achievements</h2>
              <p>Certificates and achievements I have earned</p>
            </div>
          </div>

          {/* Certificate Cards */}

          <div className="certificates-grid">
            {certificatesData.map((item) => (
              <article className="certificate-card" key={item.id}>
                {/* Certificate Image */}

                {item.image ? (
                  <button
                    type="button"
                    className="certificate-image-button"
                    onClick={() => setSelectedCertificate(item)}
                    aria-label={`View ${item.title}`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="certificate-image"
                    />

                    <span className="certificate-zoom">
                      <ZoomIn size={22} />
                      View Certificate
                    </span>
                  </button>
                ) : (
                  <div className="certificate-placeholder">
                    <div className="placeholder-icon">
                      <Award size={35} />
                    </div>

                    <span>Certificate {item.id}</span>

                    <small>Add your certificate here</small>
                  </div>
                )}

                {/* Certificate Information */}

                <div className="certificate-info">
                  <div className="certificate-title-row">
                    <div className="certificate-award-icon">
                      <Award size={20} />
                    </div>

                    <span className="certificate-year">{item.year}</span>
                  </div>

                  <h3>{item.title}</h3>

                  <p className="certificate-institution">{item.institution}</p>

                  <p className="certificate-description">{item.description}</p>

                  {item.image && (
                    <button
                      type="button"
                      className="view-certificate-btn"
                      onClick={() => setSelectedCertificate(item)}
                    >
                      View Certificate
                      <ZoomIn size={16} />
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* =================================
          CERTIFICATE LIGHTBOX
      ================================= */}

      {selectedCertificate && (
        <div
          className="certificate-lightbox"
          onClick={() => setSelectedCertificate(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate preview"
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setSelectedCertificate(null)}
            aria-label="Close certificate preview"
          >
            <X size={25} />
          </button>

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
            />

            <div className="lightbox-caption">
              <h3>{selectedCertificate.title}</h3>

              <p>{selectedCertificate.institution}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EducationPage;
