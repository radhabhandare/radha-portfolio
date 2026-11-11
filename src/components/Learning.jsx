import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { learning } from "../data/content";

function Bar({ label, progress, status, note }) {
  return (
    <div className="learning-bar">
      <div className="d-flex justify-content-between align-items-baseline mb-1">
        <span className="learning-label">{label}</span>
        <span className="learning-status">{status} · {progress}%</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
      {note && <small className="learning-note">{note}</small>}
    </div>
  );
}

export default function Learning() {
  return (
    <section id="learning" className="section">
      <div className="container">
        <SectionHeading eyebrow="LEARNING" title="Always Learning. Always Building." subtitle="My current growth path." />
        <div className="row g-4 align-items-start">
          <div className="col-lg-6">
            <Reveal>
              <div className="glass p-4">
                <Bar label={learning.python.label} progress={learning.python.progress} status={learning.python.status} />
                <Bar label={learning.analytics.label} progress={learning.analytics.progress} status={learning.analytics.status} note={learning.analytics.note} />
              </div>
            </Reveal>
          </div>
          <div className="col-lg-6">
            <Reveal delay={0.1}>
              <div className="glass p-4">
                <h4 className="skill-category">Currently Exploring</h4>
                <div className="skill-tags">
                  {learning.analytics.topics.map((t) => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
                <h4 className="skill-category mt-4">Interested In</h4>
                <div className="skill-tags">
                  {learning.interests.map((t) => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}