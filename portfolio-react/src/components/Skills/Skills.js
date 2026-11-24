import React from "react";
import "./Skills.css";

const skillGroups = [
  {
    icon: "🔐",
    title: "Cybersecurity",
    description:
      "Studying information security, network protection, and ethical hacking to identify and mitigate real-world cyber threats.",
    tags: ["Network Security", "Ethical Hacking", "InfoSec"],
  },
  {
    icon: "💻",
    title: "Programming",
    description:
      "Writing clean, efficient code in multiple languages with a strong understanding of object-oriented principles.",
    tags: ["Python", "Java", "OOPs", "HTML"],
  },
  {
    icon: "🌐",
    title: "Web Development",
    description:
      "Building functional and visually appealing web interfaces with attention to usability and design principles.",
    tags: ["HTML", "CSS", "React", "UI/UX", "Figma"],
  },
  {
    icon: "☁️",
    title: "Cloud & AI Tools",
    description:
      "Exploring cloud platforms and AI-powered tools to build smarter and more scalable solutions for modern challenges.",
    tags: ["Cloud", "ML Basics", "AI Tools"],
  },
];

const tools = [
  "VS Code",
  "Figma",
  "GitHub",
  "Python",
  "Java",
  "React",
  "Netlify",
  "Vercel",
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <span className="section-label">ls skills/</span>
        <h2 className="section-heading">My Skills</h2>
        <p className="skills__intro">What I love to do</p>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <div className="skill-card__icon">{group.icon}</div>
              <h3 className="skill-card__title">{group.title}</h3>
              <p className="skill-card__description">{group.description}</p>
              <div className="skill-card__tags">
                {group.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills__tools">
          <span className="skills__tools-label">Tools I use</span>
          <div className="skills__tools-list">
            {tools.map((tool) => (
              <span key={tool} className="skills__tool-chip">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
