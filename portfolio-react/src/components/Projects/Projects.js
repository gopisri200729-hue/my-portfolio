import React from "react";
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "Dynamic Stopwatch",
    description:
      "Develops a dynamic stopwatch web application using HTML, CSS, and JavaScript. Provides an interactive interface to start, pause, reset, and record lap times, while displaying the elapsed time in HH:MM:SS:MS format with a responsive and user-friendly design.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/gopisri200729-hue",
  },
  {
    number: "02",
    title: "Task Manager Dashboard",
    description:
      "Develops a Task Manager Dashboard using HTML, CSS, and JavaScript. Allows users to add, view, and delete tasks while automatically updating the total, completed, and pending task counts through a responsive and interactive web interface, helping users manage tasks efficiently.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/gopisri200729-hue",
  },
  {
    number: "03",
    title: "Quiz Application",
    description:
      "Develops a simple Quiz Application using HTML, CSS, and JavaScript. Allows users to answer multiple-choice questions, navigate through questions using DOM manipulation, checks answers automatically, calculates the score, and displays the final result through an interactive and user-friendly web interface.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/gopisri200729-hue",
  },
  {
    number: "04",
    title: "Color Changer Application",
    description:
      "Develops a Color Changer Application using HTML, CSS, and JavaScript. Allows users to change background colors dynamically by entering color names, generating random colors, and enabling automatic color changes using DOM manipulation, form handling, loops, timers, and animation effects through an interactive and responsive web interface.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/gopisri200729-hue",
  },
  {
    number: "05",
    title: "File-Driven Data Processing Application",
    description:
      "Develops a File-Driven Data Processing Application using Python and external modules. Reads data from a file, processes it through reusable module functions, and generates outputs such as totals, averages, and filtered results — demonstrating file handling, modular programming, data processing, and code reusability.",
    tags: ["Python", "Modules", "File I/O"],
    link: "https://github.com/gopisri200729-hue",
  },
  {
    number: "06",
    title: "Student Record Management System",
    description:
      "Develops a Student Record Management System using Python. Stores student details such as name, register number, and subject marks, calculates the total and average marks, and displays the results in an organized format — demonstrating the use of functions, modular programming, and basic data processing.",
    tags: ["Python", "Functions"],
    link: "https://github.com/gopisri200729-hue",
  },
  {
    number: "07",
    title: "College Placement Drive & Student Application Tracker",
    description:
      "A personal portfolio website developed using React.js, HTML, CSS, and JavaScript to showcase my profile, skills, projects, certifications, and contact information through a responsive and interactive user interface.",
    tags: ["React.js", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/gopisri200729-hue",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <span className="section-label">cat projects.log</span>
        <h2 className="section-heading">My Projects</h2>
        <p className="projects__intro">What I have built</p>

        <div className="projects__grid">
          {projects.map((project) => (
            <a
              className="project-card"
              key={project.number}
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-card__top">
                <span className="project-card__number">{project.number}</span>
                <span className="project-card__arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__description">
                {project.description}
              </p>
              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <a
          className="projects__all-link"
          href="https://github.com/gopisri200729-hue"
          target="_blank"
          rel="noreferrer"
        >
          View all on GitHub →
        </a>
      </div>
    </section>
  );
}

export default Projects;
