import React from "react";
import "./About.css";

const highlights = [
  { icon: "🎓", label: "B.E. CSE Cybersecurity" },
  { icon: "⭐", label: "8.3 CGPA" },
  { icon: "🛡️", label: "2+ Projects Built" },
];

function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div className="about__text">
          <span className="section-label">whoami</span>
          <h2 className="section-heading">About Me</h2>
          <p className="about__paragraph">
            I am Gopisri, a passionate cybersecurity student and developer
            pursuing B.E. Computer Science Engineering (Cybersecurity) at
            Prince Dr. K. Vasudevan College of Engineering and Technology. I
            love solving complex security challenges and building
            applications that make a real-world impact.
          </p>
          <p className="about__paragraph">
            Beyond tech, I enjoy learning about emerging threats in the
            digital world and sharpening my skills in ethical hacking and
            network protection.
          </p>

          <div className="about__highlights">
            {highlights.map((item) => (
              <span className="about__highlight" key={item.label}>
                <span aria-hidden="true">{item.icon}</span> {item.label}
              </span>
            ))}
          </div>
        </div>

        <div className="about__panel">
          <div className="about__panel-header">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <pre className="about__terminal">
{`> whoami
Gopisri M — Cybersecurity Student

> location
Chennai, India

> focus
Network Security · Ethical Hacking
Python · Java · Web Dev

> status
Open to internships & collaborations_`}
          </pre>
        </div>
      </div>
    </section>
  );
}

export default About;
