import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading eyebrow="EXPERIENCE" title="My Professional Journey" subtitle="Internships & hands-on learning." />
        <div className="timeline">
          {experience.map((e, i) => (
            <Reveal key={e.company + i} delay={i * 0.08}>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-card glass">
                  <div className="timeline-head">
                    <div>
                      <h3 className="timeline-role">{e.role}</h3>
                      <p className="timeline-company">{e.company}</p>
                    </div>
                    <div className="timeline-meta">
                      <span className="timeline-date">{e.duration}</span>
                      {e.ongoing && <span className="badge-ongoing">● Currently Working</span>}
                    </div>
                  </div>
                  <p className="body-text small">{e.description}</p>
                  {e.tags?.length > 0 && (
                    <div className="skill-tags mt-2">
                      {e.tags.map((t) => (
                        <span key={t} className="skill-tag small">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}