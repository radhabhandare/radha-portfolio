import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { profile } from "../data/content";

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <h3 className="footer-brand">RADHA BAJIRAO BHANDARE</h3>
          <p className="footer-tagline">Building ideas into meaningful digital experiences.</p>
        </div>
        <div className="footer-links">
          <button onClick={() => scrollTo("home")}>Home</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("projects")}>Projects</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </div>
        <div className="footer-socials">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><FiMail /></a>
          <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 Radha Bajirao Bhandare. All Rights Reserved.
      </div>
    </footer>
  );
}