import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { FiGithub, FiExternalLink, FiAward } from "react-icons/fi";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading eyebrow="PROJECTS" title="Projects That Reflect My Journey" subtitle="A selection of applications and practical solutions I've worked on." />
        <div className="row g-4">
          {projects.map((p, i) => (
            <div className={`col-12 ${p.featured ? "" : "col-lg-6"}`} key={p.title}>
              <Reveal delay={i * 0.05}>
                <div className={`project-card glass ${p.featured ? "featured" : ""}`}>
                  <div className="project-visual">
                    <div className="project-visual-inner">
                      <span className="project-title-giant">{p.title}</span>
                    </div>
                    {p.featured && <span className="featured-badge">Featured</span>}
                  </div>
                  <div className="project-body">
                    <span className="project-category">{p.category}</span>
                    <h3 className="project-title">{p.title}</h3>
                    <p className="body-text small">{p.description}</p>

                    {p.highlights && (
                      <ul className="project-highlights">
                        {p.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    )}

                    {p.achievement && (
                      <div className="achievement-pill">
                        <FiAward /> {p.achievement}
                      </div>
                    )}

                    <div className="skill-tags mt-3">
                      {p.tech.map((t) => (
                        <span key={t} className="skill-tag small">{t}</span>
                      ))}
                    </div>

                    <div className="project-actions">
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noreferrer" className="btn-ghost-custom small">
                          <FiGithub /> GitHub
                        </a>
                      )}
                      {p.live ? (
                        <a href={p.live} target="_blank" rel="noreferrer" className="btn-primary-custom small">
                          <FiExternalLink /> Live Demo
                        </a>
                      ) : (
                        <span className="btn-ghost-custom small disabled" title="Live demo not available yet">
                          <FiExternalLink /> Live — soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}