import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

/*
  Professional Expertise Section — redesigned from progress bars to
  a clean capability showcase with domain icons and tool tags.
*/

const DOMAINS = [
  {
    id: "web",
    emoji: <i className="fa-solid fa-globe"></i>,
    title: "Web Development",
    color: "#4f9cf9",
    tools: ["React.js", "Next.js", "Node.js", "Express.js", "PHP", "HTML/CSS", "TypeScript"],
    summary: "Full-stack web apps from static landing pages to complex platforms.",
  },
  {
    id: "mobile",
    emoji: <i className="fa-solid fa-mobile-screen-button"></i>,
    title: "Mobile & App Dev",
    color: "#34d399",
    tools: ["Flutter", "Dart", "Firebase", "REST APIs", "Play Store", "App Store"],
    summary: "Cross-platform iOS & Android apps deployed to production.",
  },
  {
    id: "design",
    emoji: <i className="fa-solid fa-palette"></i>,
    title: "UI/UX Design",
    color: "#a78bfa",
    tools: ["Figma", "Wireframing", "Prototyping", "Design Systems", "User Research"],
    summary: "User-centered designs — from concept to developer-ready handoff.",
  },
  {
    id: "marketing",
    emoji: <i className="fa-solid fa-bullhorn"></i>,
    title: "Digital Marketing & SEO",
    color: "#fb923c",
    tools: ["SEO", "Google Ads", "Meta Ads", "Social Media", "Content Strategy", "Analytics"],
    summary: "Driving organic growth and paid campaigns with measurable ROI.",
  },
  {
    id: "database",
    emoji: <i className="fa-solid fa-database"></i>,
    title: "Database & Cloud",
    color: "#fb2c36",
    tools: ["MongoDB", "MySQL", "GCP", "Firebase", "REST APIs", "Git"],
    summary: "Scalable data architecture on cloud-native infrastructure.",
  },
  {
    id: "ai",
    emoji: <i className="fa-solid fa-robot"></i>,
    title: "AI & Automation",
    color: "#fbbf24",
    tools: ["OpenAI API", "ChatGPT Integration", "Workflow Automation", "Python", "Chatbots"],
    summary: "Smart AI-powered features that reduce manual work and boost productivity.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.45, delay: i * 0.07, ease: "easeOut" },
  }),
};

export default function Skills() {
  return (
    <section className="Skills" id="Skills">
      {/* Header */}
      <div className="skills-header">
        <span className="skills-tag-line" />
        <span className="skills-tag-label">Expertise</span>
        <span className="skills-tag-line" />
      </div>
      <h2 className="skills-title">
        What I <span className="skills-accent">Bring to the Table</span>
      </h2>
      <p className="skills-sub">
        I don't just write code — I solve problems. Here's the full arsenal I use across every project.
      </p>

      {/* Domain Cards Grid */}
      <div className="skills-domains">
        {DOMAINS.map((domain, i) => (
          <motion.div
            key={domain.id}
            className="domain-card"
            style={{ "--domain-color": domain.color }}
            custom={i}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            <div className="domain-icon-wrap">
              <span className="domain-emoji">{domain.emoji}</span>
            </div>
            <h3 className="domain-title">{domain.title}</h3>
            <p className="domain-summary">{domain.summary}</p>
            <div className="domain-tools">
              {domain.tools.map((tool) => (
                <span className="domain-tool" key={tool}>{tool}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
