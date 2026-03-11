import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Skills.css";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────
   DEFAULT DATA
   Pass a `categories` prop to override.
   Each category: { label, color, skills: [{name, icon, level}] }
   level = 0–100 (fills the bar)
───────────────────────────────────────────── */
const DEFAULT_CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React.js",    icon: "⚛️", level: 90 },
      { name: "JavaScript",  icon: "🟨", level: 88 },
      { name: "HTML / CSS",  icon: "🎨", level: 92 },
      { name: "TypeScript",  icon: "🔷", level: 65 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js",     icon: "🟩", level: 85 },
      { name: "Express.js",  icon: "🚀", level: 85 },
      { name: "PHP",         icon: "🐘", level: 72 },
      { name: "REST APIs",   icon: "🔗", level: 88 },
    ],
  },
  {
    id: "database",
    label: "Database & Cloud",
    skills: [
      { name: "MongoDB",     icon: "🍃", level: 82 },
      { name: "MySQL",       icon: "🐬", level: 78 },
      { name: "GCP",         icon: "☁️", level: 68 },
    ],
  },
  {
    id: "tools",
    label: "Tools & Others",
    skills: [
      { name: "Git / GitHub", icon: "🐙", level: 90 },
      { name: "EJS",          icon: "📄", level: 75 },
      { name: "Framer Motion",icon: "🎞️", level: 70 },
      { name: "GSAP",         icon: "💚", level: 65 },
    ],
  },
];

/** Reusable skill pill card */
function SkillPill({ name, icon, level }) {
  return (
    <div className="skill-card">
      <span className="skill-emoji">{icon}</span>
      <span className="skill-name">{name}</span>
      <div className="skill-bar-track">
        <div className="skill-bar-fill" data-level={level} />
      </div>
      <span className="skill-level">{level}%</span>
    </div>
  );
}

/** Reusable category block */
function SkillCategory({ label, skills }) {
  return (
    <div className="skill-category">
      <h3 className="skill-category-title">{label}</h3>
      <div className="skill-grid">
        {skills.map((s) => (
          <SkillPill key={s.name} {...s} />
        ))}
      </div>
    </div>
  );
}

/**
 * Skills Section
 * Props:
 *   categories — array of category objects (optional, falls back to DEFAULT_CATEGORIES)
 */
export default function Skills({ categories = DEFAULT_CATEGORIES }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".skill-card");
    const bars  = sectionRef.current.querySelectorAll(".skill-bar-fill");
    const titles= sectionRef.current.querySelectorAll(".skill-category-title");

    // Cards entrance
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40, scale: 0.92 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.55,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      }
    );

    // Category titles slide in
    gsap.fromTo(
      titles,
      { opacity: 0, x: -30 },
      {
        opacity: 1, x: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Bars animate width from 0 to data-level
    bars.forEach((bar) => {
      const targetWidth = `${bar.dataset.level}%`;
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: targetWidth,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 92%",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="Skills" id="Skills" ref={sectionRef}>
      {/* Header */}
      <div className="skills-header">
        <span className="skills-tag-line" />
        <span className="skills-tag-label">Toolkit</span>
        <span className="skills-tag-line" />
      </div>
      <h2 className="skills-title">
        Skills &amp; <span className="skills-accent">Technologies</span>
      </h2>

      <div className="skills-categories">
        {categories.map((cat) => (
          <SkillCategory key={cat.id} label={cat.label} skills={cat.skills} />
        ))}
      </div>
    </section>
  );
}
