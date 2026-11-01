import React from "react";
import { FaTelegram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiVite, SiReact, SiTailwindcss } from "react-icons/si";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section: Built With */}

      <div className="footer-built">
        <p className="built-title">Built with</p>

        <div className="built-technologies">
          <a
            href="https://vite.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="tech-item vite"
          >
            <SiVite />
            <span>Vite</span>
          </a>

          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="tech-item react"
          >
            <SiReact />
            <span>React</span>
          </a>

          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="tech-item tailwind"
          >
            <SiTailwindcss />
            <span>Tailwind CSS</span>
          </a>
        </div>
      </div>

      <div className="footer-divider"></div>

      {/* Bottom Section: Social Icons */}
      <div className="footer-bottom">
        <div className="footer-socials">
          <a
            href="https://t.me/Vetofyou"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <FaTelegram />
          </a>

          <a
            href="https://web.facebook.com/Sina.2103"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>

          <a
            href="https://github.com/Sina21031"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="footer-copyright">
          © {new Date().getFullYear()} Soeung Sina. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
