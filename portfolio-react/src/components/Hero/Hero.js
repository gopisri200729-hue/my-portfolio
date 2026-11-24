import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <span className="hero__status">
            <span className="hero__status-dot"></span>
            Available for opportunities
          </span>

          <h1 className="hero__name">GOPISRI M</h1>
          <p className="hero__role">Student Developer · Cybersecurity</p>

          <p className="hero__bio">
            Cybersecurity student with a strong interest in information
            security, network protection, and ethical hacking. Passionate
            about learning emerging technologies and developing skills to
            identify, prevent, and mitigate cyber threats.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View my work ↓
            </a>
            <a href="#contact" className="btn btn--secondary">
              Get in touch
            </a>
          </div>

          <div className="hero__socials">
            <a
              href="https://github.com/gopisri200729-hue"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GH
            </a>
            <a
              href="https://www.linkedin.com/in/gopisri-m-a1a82b390/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a href="mailto:gopisri200729@gmail.com" aria-label="Email">
              @
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__avatar-frame">
            <div className="hero__avatar">
              <img
                src={`${process.env.PUBLIC_URL}/images/gopisri.jpg`}
                alt="Gopisri M"
              />
            </div>
          </div>
          <span className="hero__badge hero__badge--cgpa">8.3 CGPA</span>
          <span className="hero__badge hero__badge--location">
            📍 Based in Chennai
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
