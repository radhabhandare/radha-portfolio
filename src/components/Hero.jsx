import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiMail } from "react-icons/fi";
import { profile } from "../data/content";
import { useReducedMotion } from "../hooks/useReducedMotion";

function useTyping(words, active) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    if (!active) return;
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = word.slice(0, text.length + 1);
          setText(next);
          if (next === word) setTimeout(() => setDel(true), 1400);
        } else {
          const next = word.slice(0, text.length - 1);
          setText(next);
          if (!next) {
            setDel(false);
            setI((v) => v + 1);
          }
        }
      },
      del ? 40 : 90
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, active]);
  return text;
}

export default function Hero() {
  const reduced = useReducedMotion();
  const typed = useTyping(profile.roles, !reduced);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        {!reduced &&
          [...Array(18)].map((_, i) => (
            <span
              key={i}
              className={`particle p-${i % 6}`}
              style={{
                left: `${(i * 53) % 100}%`,
                top: `${(i * 37) % 100}%`,
                animationDelay: `${i * 0.35}s`,
              }}
            />
          ))}
      </div>

      <div className="container hero-content">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <motion.span
              className="badge-open"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="pulse-dot" /> Open to Opportunities
            </motion.span>

            <motion.p
              className="hero-hi"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              RADHA BAJIRAO <span className="grad">BHANDARE</span>
            </motion.h1>

            <motion.h2
              className="hero-role"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {profile.headline}
            </motion.h2>

            <motion.p
              className="hero-sub"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {profile.subheadline}
            </motion.p>

            <motion.p
              className="hero-typing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="typed">{typed}</span>
              <span className="caret">|</span>
            </motion.p>

            <motion.p
              className="hero-intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {profile.intro}
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <a className="btn-primary-custom" href="/resume.pdf" download>
                <FiDownload /> Download Resume
              </a>
              <button
                className="btn-ghost-custom"
                onClick={() => scrollTo("projects")}
              >
                Explore My Work
              </button>
              <button
                className="btn-ghost-custom"
                onClick={() => scrollTo("contact")}
              >
                <FiMail /> Let's Connect
              </button>
            </motion.div>
          </div>

          <div className="col-lg-5">
            <motion.div
              className="hero-portrait"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.9 }}
            >
              <div className="portrait-ring" />
              <div className="portrait-placeholder portrait-photo">
                <img
                  src="/me.jpeg"
                  alt="Radha Bajirao Bhandare"
                  loading="eager"
                />
              </div>
              <div className="floating-chip chip-1">Python</div>
              <div className="floating-chip chip-2">MERN</div>
              <div className="floating-chip chip-3">Data Analytics</div>
            </motion.div>
          </div>
        </div>

        <button
          className="scroll-down"
          onClick={() => scrollTo("about")}
          aria-label="Scroll down"
        >
          <FiArrowDown />
        </button>
      </div>
    </section>
  );
}