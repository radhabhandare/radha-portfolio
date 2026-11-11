import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { about } from "../data/content";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="ABOUT ME"
          title="A Little About Me"
          subtitle="Building, Learning & Growing Through Technology."
        />
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <Reveal>
              <div className="about-photo glass">
                <div className="about-photo-inner">
                  <img
                    src="/me.jpeg"
                    alt="Radha Bajirao Bhandare"
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>
          </div>
          <div className="col-lg-7">
            <Reveal delay={0.1}>
              {about.paragraphs.map((p, i) => (
                <p key={i} className="body-text">
                  {p}
                </p>
              ))}
            </Reveal>
            <Reveal delay={0.2}>
              <div className="facts-grid">
                {about.facts.map((f) => (
                  <div key={f.label} className="fact-card glass">
                    <span className="fact-label">{f.label}</span>
                    <span className="fact-value">{f.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}