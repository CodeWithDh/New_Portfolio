import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

import sms1 from "../assets/sms1.png";
import sms2 from "../assets/sms2.png";
import mh1  from "../assets/mh1.png";
import mh2  from "../assets/mh2.png";

/*
  GitHub raw image URL helper.
  Images are fetched from the "preview" folder of each GitHub repo.
  If the images don't load (404), the card falls back to the placeholder banner.
*/
const ghRaw = (repo, file) =>
  `https://raw.githubusercontent.com/CodeWithDh/${repo}/main/preview/${file}`;

/* ─────────────────────────────────────────────
   PROJECTS  (ordered as requested)
───────────────────────────────────────────── */
const PROJECTS = [
  {
    id: "DrVenture-Figma",
    title: "DrVenture — UI/UX Design",
    badge: "🇺🇸 US Client",
    description:
      "Complete UI/UX design for a US-based healthcare client — DrVenture. Designed end-to-end in Figma: wireframes, design system, high-fidelity screens and interactive prototype ready for development handoff.",
    tech: ["Figma", "UI/UX Design", "Prototype", "Design System"],
    images: [
      ghRaw("DrVenture-Figma", "1.png"),
      ghRaw("DrVenture-Figma", "2.png"),
      ghRaw("DrVenture-Figma", "3.png"),
    ],
    githubUrl: "https://github.com/CodeWithDh/DrVenture-Figma",
    type: "Design",
  },
  {
    id: "Laundry-App",
    title: "Laundry App",
    badge: "📱 Flutter",
    description:
      "Cross-platform laundry management app built with Flutter — deployed to production. Features order tracking, pickup scheduling, customer panel and an admin dashboard to manage operations on the go.",
    tech: ["Flutter", "Dart", "Firebase", "Mobile App"],
    images: [
      ghRaw("Laundry-App", "1.png"),
      ghRaw("Laundry-App", "2.png"),
      ghRaw("Laundry-App", "3.png"),
    ],
    githubUrl: "https://github.com/CodeWithDh/Laundry-App",
    type: "App",
  },
  {
    id: "React-Animated",
    title: "React Animated Site",
    badge: "⚡ React",
    description:
      "Modern animated React website built with Framer Motion — showcasing smooth page transitions, entrance animations and interactive UI components. A front-end showcase of animation-first design.",
    tech: ["React.js", "Framer Motion", "JavaScript", "CSS"],
    images: [
      ghRaw("React-Animated", "1.png"),
      ghRaw("React-Animated", "2.png"),
      ghRaw("React-Animated", "3.png"),
    ],
    githubUrl: "https://github.com/CodeWithDh/React-Animated",
    type: "Web",
  },
  {
    id: "Ecomerce-Website",
    title: "E-Commerce Website",
    badge: "🛒 TypeScript",
    description:
      "TypeScript-powered e-commerce frontend with product listings, cart management, filters and a clean responsive UI — built for scalability and real-world extensibility.",
    tech: ["TypeScript", "React.js", "Node.js", "CSS"],
    images: [
      ghRaw("Ecomerce-Website", "1.png"),
      ghRaw("Ecomerce-Website", "2.png"),
    ],
    githubUrl: "https://github.com/CodeWithDh/Ecomerce-Website",
    type: "Web",
  },
  {
    id: "SmartMobileApp",
    title: "Smart Mobile Shop",
    badge: "☁️ GCP",
    description:
      "Full-stack web app for a local mobile vendor — manages sale & purchase of 2nd-hand mobiles. Built on Google Cloud Platform, delivered end-to-end from design to deployment.",
    tech: ["PHP", "MySQL", "GCP", "JavaScript"],
    images: [sms1, sms2],
    githubUrl: "https://github.com/CodeWithDh/SmartMobileApp",
    type: "Web",
  },
  {
    id: "THE-MEAT-HUB",
    title: "The Meat Hub",
    badge: "🏆 Sold to Client",
    description:
      "Restaurant & Meat Shop Management System — inventory, sales, orders and billing in one platform. Started as a college major project, later sold to a real vendor.",
    tech: ["EJS", "Node.js", "MySQL", "Express.js"],
    images: [mh1, mh2],
    githubUrl: "https://github.com/CodeWithDh/THE-MEAT-HUB",
    type: "Web",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const types = ["All", "Design", "App", "Web"];

  const visible = filter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.type === filter);

  return (
    <section className="Projects" id="Projects">
      {/* Header */}
      <motion.div
        className="proj-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="proj-tag-line" />
        <span className="proj-tag-label">Open Source &amp; Client Work</span>
        <span className="proj-tag-line" />
      </motion.div>

      <motion.h2
        className="proj-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Things I've <span className="proj-accent">Built</span>
      </motion.h2>

      {/* Filter tabs */}
      <div className="proj-filters">
        {types.map((t) => (
          <button
            key={t}
            className={`proj-filter-btn ${filter === t ? "proj-filter-btn--active" : ""}`}
            onClick={() => setFilter(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="proj-grid">
        {visible.map((proj, index) => (
          <ProjectCard
            key={proj.id}
            index={index}
            title={proj.title}
            badge={proj.badge}
            description={proj.description}
            tech={proj.tech}
            images={proj.images || []}
            githubUrl={proj.githubUrl}
            liveUrl={proj.liveUrl}
          />
        ))}
      </div>

      {/* View all repos */}
      <motion.div
        className="proj-view-all"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <a
          href="https://github.com/CodeWithDh"
          target="_blank"
          rel="noopener noreferrer"
          className="proj-gh-btn"
        >
          View All on GitHub →
        </a>
      </motion.div>
    </section>
  );
}
