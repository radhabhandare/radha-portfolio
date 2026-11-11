import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { education } from "../data/content";
import { FiBookOpen } from "react-icons/fi";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading eyebrow="EDUCATION" title="My Educational Background" subtitle="A foundation built on curiosity and consistency." />
        <div className="row g-4">
          {education.map((e, i) => (
            <div className="col-md-6 col-lg-4" key={e.degree}>
              <Reveal delay={i * 0.08}>
                <div className="edu-card glass h-100">
                  <FiBookOpen className="edu-icon" />
                  <h3 className="edu-degree">{e.degree}</h3>
                  <p className="edu-inst">{e.institution}</p>
                  {e.university && <p className="edu-inst muted">{e.university}</p>}
                  <div className="edu-meta">
                    <span>{e.year}</span>
                    <span>{e.detail}</span>
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