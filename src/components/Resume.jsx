import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { FiDownload, FiEye, FiRotateCw } from "react-icons/fi";

export default function Resume() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="resume" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="RESUME"
          title="Let's Take the Next Step"
          subtitle="Interested in knowing more about my education, technical skills, internship experience and projects?"
        />
        <Reveal>
          <div
            className="resume-flip-scene"
            onClick={() => setFlipped((v) => !v)}
            onKeyDown={(e) => e.key === "Enter" && setFlipped((v) => !v)}
            role="button"
            tabIndex={0}
            aria-label="Flip resume card"
          >
            <motion.div
              className="resume-flip-inner"
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Front */}
              <div className="resume-face resume-front glass">
                <div className="resume-badge">RESUME</div>
                <h3 className="resume-name">Radha Bajirao Bhandare</h3>
                <p className="resume-role">Python & MERN Stack Developer</p>
                <div className="resume-tags">
                  <span>Python</span><span>React</span><span>Node.js</span><span>MongoDB</span><span>SQL</span>
                </div>
                <p className="resume-flip-hint"><FiRotateCw /> Click card to see more</p>
              </div>

              {/* Back */}
              <div className="resume-face resume-back glass">
                <h3 className="resume-back-title">What's inside</h3>
                <ul className="resume-highlights">
                  <li>B.E. Information Technology · CGPA 7.75</li>
                  <li>5 internships (IBM, EY GDS, Google AI-ML, etc.)</li>
                  <li>4 projects incl. Katalyst First Prize – Ritu Veda</li>
                  <li>Python · MERN · Data Analytics (learning)</li>
                </ul>
                <div className="resume-actions">
                  <a className="btn-primary-custom" href="/resume.pdf" download>
                    <FiDownload /> Download
                  </a>
                  <a className="btn-ghost-custom" href="/resume.pdf" target="_blank" rel="noreferrer">
                    <FiEye /> View
                  </a>
                </div>
                <p className="resume-note">Place your PDF at <code>public/resume.pdf</code></p>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}