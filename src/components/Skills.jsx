import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skills } from "../data/content";
import {
  SiPython, SiJavascript, SiHtml5, SiCss, SiMysql,
  SiReact, SiBootstrap, SiNodedotjs, SiExpress, SiFlask,
  SiMongodb, SiGit, SiGithub, SiPostman,
  SiPandas, SiNumpy,
} from "react-icons/si";
import {
  FiCode, FiServer, FiDatabase, FiTool, FiCpu, FiBarChart2, FiLayers,
} from "react-icons/fi";

// Map skill names → icons (falls back to nothing if icon missing)
const ICONS = {
  Python: SiPython,
  JavaScript: SiJavascript,
  SQL: FiDatabase,
  HTML5: SiHtml5,
  CSS3: SiCss,
  "React.js": SiReact,
  Bootstrap: SiBootstrap,
  HTML: SiHtml5,
  CSS: SiCss,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  Flask: SiFlask,
  "REST APIs": FiServer,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Git: SiGit,
  GitHub: SiGithub,
  "VS Code": FiCode,
  Postman: SiPostman,
  ChatGPT: FiCpu,
  Gemini: FiCpu,
  Claude: FiCpu,
  DeepSeek: FiCpu,
  NumPy: SiNumpy,
  Pandas: SiPandas,
  "Data Cleaning": FiBarChart2,
  "Data Manipulation": FiLayers,
  Matplotlib: FiBarChart2,
  "Data Visualization": FiBarChart2,
  "SQL for Analysis": FiDatabase,
};

// Category → accent color + icon
const CATEGORY_META = {
  "Programming Languages": { icon: FiCode, color: "#8B5CF6" },
  Frontend: { icon: FiLayers, color: "#38BDF8" },
  Backend: { icon: FiServer, color: "#8B5CF6" },
  Databases: { icon: FiDatabase, color: "#38BDF8" },
  "Developer Tools": { icon: FiTool, color: "#8B5CF6" },
  "AI Tools": { icon: FiCpu, color: "#38BDF8" },
  "Data Analytics — Learning": { icon: FiBarChart2, color: "#8B5CF6" },
};

function SkillCard({ group, index }) {
  const ref = useRef(null);

  // mouse-tracked 3D tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mx, [-0.5, 0.5], [-8, 8]);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  const meta = CATEGORY_META[group.category] || { icon: FiCode, color: "#38BDF8" };
  const CatIcon = meta.icon;

  return (
    <Reveal delay={index * 0.06}>
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 900 }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="skill-card-3d"
      >
        {/* Animated gradient border */}
        <div className="skill-card-border" style={{ "--accent": meta.color }} />

        <div className="skill-card-inner3d">
          <div className="skill-card-head" style={{ transform: "translateZ(30px)" }}>
            <span
              className="skill-card-icon"
              style={{ color: meta.color, boxShadow: `0 0 22px -6px ${meta.color}` }}
            >
              <CatIcon />
            </span>
            <h3 className="skill-category">{group.category}</h3>
          </div>

          <div className="skill-icons-row" style={{ transform: "translateZ(20px)" }}>
            {group.items.map((s) => {
              const Icon = ICONS[s];
              return Icon ? (
                <span key={s} className="skill-icon-chip" title={s}>
                  <Icon />
                </span>
              ) : null;
            })}
          </div>

          <div className="skill-tags" style={{ transform: "translateZ(10px)" }}>
            {group.items.map((s) => (
              <span key={s} className="skill-tag">
                {s}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="SKILLS"
          title="My Technical Toolkit"
          subtitle="Technologies I Work With and Continue to Explore."
        />
        <div className="row g-4">
          {skills.map((group, i) => (
            <div className="col-md-6 col-lg-4" key={group.category}>
              <SkillCard group={group} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}