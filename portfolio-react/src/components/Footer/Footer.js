import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {year} Gopisri M. All rights reserved.</p>
        <p className="footer__signature">
          Designed &amp; built with <span aria-hidden="true">♥</span> in
          Chennai
        </p>
      </div>
    </footer>
  );
}

export default Footer;
