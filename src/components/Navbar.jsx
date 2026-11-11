import { useEffect, useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { useActiveSection } from "../hooks/useActiveSection";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`navbar-custom ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <button className="brand" onClick={() => go("home")} aria-label="Home">
          RADHA<span className="brand-dot">.</span>BHANDARE
        </button>

        <nav className="nav-links d-none d-lg-flex">
          {LINKS.map((l) => (
            <button
              key={l.id}
              className={`nav-link-custom ${active === l.id ? "active" : ""}`}
              onClick={() => go(l.id)}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="btn-resume d-none d-md-inline-flex" href="/resume.pdf" download>
            <FiDownload /> Resume
          </a>
          <button className="menu-toggle d-lg-none" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          {LINKS.map((l) => (
            <button key={l.id} onClick={() => go(l.id)} className="mobile-link">
              {l.label}
            </button>
          ))}
          <a className="btn-resume" href="/resume.pdf" download>
            <FiDownload /> Download Resume
          </a>
        </div>
      )}
    </header>
  );
}