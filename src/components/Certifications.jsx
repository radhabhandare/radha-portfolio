import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { certifications, achievement } from "../data/content";
import { FiAward, FiCheckCircle } from "react-icons/fi";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionHeading eyebrow="RECOGNITION" title="Certifications & Achievements" subtitle="Milestones along the way." />
        <div className="row g-3">
          {certifications.map((c, i) => (
            <div className="col-md-6 col-lg-3" key={c.title}>
              <Reveal delay={i * 0.05}>
                <div className="cert-card glass h-100">
                  <FiCheckCircle className="cert-icon" />
                  <h4 className="cert-title">{c.title}</h4>
                  <p className="cert-issuer">{c.issuer}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="achievement-banner glass">
            <FiAward className="achievement-icon" />
            <div>
              <strong>Featured Achievement</strong>
              <p className="m-0 body-text small">{achievement}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}