import React from "react";
import "./Certifications.css";

// Real Microsoft logo (four-square mark) as inline SVG, so it renders
// consistently everywhere instead of relying on the 🪟 emoji glyph,
// which some systems/browsers show as a blank box.
function MicrosoftIcon() {
  return (
    <svg
      viewBox="0 0 23 23"
      width="1.7rem"
      height="1.7rem"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="1" y="1" width="10" height="10" fill="#F25022" />
      <rect x="12" y="1" width="10" height="10" fill="#7FBA00" />
      <rect x="1" y="12" width="10" height="10" fill="#00A4EF" />
      <rect x="12" y="12" width="10" height="10" fill="#FFB900" />
    </svg>
  );
}

// Java coffee-cup mark in the brand's red/orange, so it renders
// consistently instead of relying on the ☕ emoji glyph.
function JavaIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      width="1.9rem"
      height="1.9rem"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M11.5 21.5c-1.6 1 .1 1.9 1.9 2.3 1.3.3 2.7.3 4.2.1 1 .6 2 .9 3.4.6-1-1.5-2.2-1.4-3.1-1.6-1.3-.3-2.6-.3-3.9-.1-1.1.2-2.7.3-2.5-1.3z"
        fill="#E76F00"
      />
      <path
        d="M13.6 19c-1.1.9.2 1.5 1.7 1.7 2.2.3 4.5.2 6.7-.2-1 1.1-3.4 1.9-6.2 1.8-2.9-.1-4.9-1.1-3.1-2.3z"
        fill="#E76F00"
      />
      <path
        d="M17.9 12.6c1.1 1.2-.3 2.3-.3 2.3s2.6-1.3 1.4-3c-1.1-1.6-2-2.4 2.7-5.1 0 0-7.5 1.9-4 5.8z"
        fill="#E76F00"
      />
      <path
        d="M20 22.6c2.2-1.1 3.6-2.6 3.4-3.4-.1.7-1.5 1.4-2.9 1.9-2.9 1-6.1 1.2-8.7.6-.5-.1-.9-.3-1.2-.4.5.5 1.3.9 2.3 1.1 3 .7 6.3.4 7.1.2z"
        fill="#E76F00"
      />
      <ellipse cx="16" cy="26" rx="8" ry="1.6" fill="none" stroke="#E76F00" strokeWidth="0.6" />
    </svg>
  );
}

// Anthropic "spark" mark in Anthropic's signature terracotta.
function AnthropicIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1.9rem"
      height="1.9rem"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14.6 3.5h3.1l6.3 17h-3.2l-1.3-3.6h-6.7l-1.3 3.6h-3.2l6.3-17zm-3.8 10.7h5.4l-2.7-7.6-2.7 7.6z"
        fill="#D97757"
      />
      <path d="M6.2 3.5h3.2l-6.3 17H0l6.2-17z" fill="#D97757" />
    </svg>
  );
}

// Python two-snake mark in the brand's blue/yellow.
function PythonIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      width="1.9rem"
      height="1.9rem"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M15.9 3c-1.4 0-2.7.1-3.8.3-3.4.6-4 1.9-4 4.2v3.1h8v1H8.1c-2.3 0-4.3 1.4-4.9 4-.7 3 0 4.9 0 4.9.7 2.9 2.4 3.9 4.6 3.9h1.9v-3.7c0-2.5 2.2-4.7 4.7-4.7h6.3c2.2 0 4-1.8 4-4V7.5c0-2.1-1.8-3.8-4-4.1C19.4 3.1 17.3 3 15.9 3zM12 5.9c.8 0 1.4.6 1.4 1.4S12.8 8.7 12 8.7s-1.4-.6-1.4-1.4.6-1.4 1.4-1.4z"
        fill="#3776AB"
      />
      <path
        d="M16.1 29c1.4 0 2.7-.1 3.8-.3 3.4-.6 4-1.9 4-4.2v-3.1h-8v-1h7.9c2.3 0 4.3-1.4 4.9-4 .7-3 0-4.9 0-4.9-.7-2.9-2.4-3.9-4.6-3.9h-1.9v3.7c0 2.5-2.2 4.7-4.7 4.7h-6.3c-2.2 0-4 1.8-4 4v6.5c0 2.1 1.8 3.8 4 4.1C12.6 28.9 14.7 29 16.1 29zM20 26.1c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4-.6 1.4-1.4 1.4z"
        fill="#FFD43B"
      />
    </svg>
  );
}

// freeCodeCamp campfire mark in the brand's green.
function FreeCodeCampIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1.9rem"
      height="1.9rem"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10.5" fill="none" stroke="#0A0A23" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="10.5" fill="none" stroke="#0A0A23" strokeWidth="1.4" opacity="0" />
      <path
        d="M12 4c-.6 2-2.6 3-2.6 5.4 0 1 .5 1.7 1 2.1-.6-.1-1.4-.7-1.6-1.8-.9 1-1.3 2.1-1.3 3.2 0 2.6 2 4.6 4.5 4.6s4.5-2.1 4.5-4.6c0-2.6-1.6-3.8-2.6-5.3.2 1 0 1.9-.5 2.6-.2-2.4-.9-4.2-1.4-6.2z"
        fill="#0A0A23"
      />
      <circle cx="12" cy="12" r="10.3" fill="none" stroke="#0A0A23" strokeWidth="1.2" />
    </svg>
  );
}

const certifications = [
  { icon: <JavaIcon />, title: "Java Programming" },
  { icon: <AnthropicIcon />, title: "Anthropic AI" },
  { icon: <MicrosoftIcon />, title: "Microsoft Certified" },
  { icon: <PythonIcon />, title: "Python Programming" },
  { icon: <FreeCodeCampIcon />, title: "freeCodeCamp" },
];

function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <span className="section-label">cat certifications.log</span>
        <h2 className="section-heading">Certifications</h2>
        <p className="certifications__intro">What I have earned</p>

        <div className="certifications__grid">
          {certifications.map((cert) => (
            <div className="cert-card" key={cert.title}>
              <div className="cert-card__icon">{cert.icon}</div>
              <p className="cert-card__title">{cert.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
