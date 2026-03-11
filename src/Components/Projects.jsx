import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

import sms1 from "../assets/sms1.png";
import sms2 from "../assets/sms2.png";
import mh1  from "../assets/mh1.png";
import mh2  from "../assets/mh2.png";

/* ─────────────────────────────────────────────
   FEATURED PROJECTS
   These are hand-picked and override the GitHub
   API data for key projects with extra detail.
   Add `repoName` to match it to a GitHub repo
   so star counts / language stay live.
───────────────────────────────────────────── */
const FEATURED = [
  {
    id: "SmartMobileApp",
    title: "Smart Mobile Shop",
    description:
      "Full-stack web app for a local mobile vendor to manage sale & purchase of 2nd-hand mobiles. Built on GCP — end-to-end from design to deployment.",
    tech: ["PHP", "MySQL", "GCP", "JavaScript"],
    images: [sms1, sms2],
    githubUrl: "https://github.com/CodeWithDh/SmartMobileApp",
    repoName: "SmartMobileApp",
  },
  {
    id: "THE-MEAT-HUB",
    title: "The Meat Hub",
    description:
      "Restaurant & Meat Shop Management System — inventory, sales, orders and billing in one platform. Started as a college major project, later sold to a real vendor.",
    tech: ["EJS", "Node.js", "MySQL", "Express.js"],
    images: [mh1, mh2],
    githubUrl: "https://github.com/CodeWithDh/THE-MEAT-HUB",
    repoName: "THE-MEAT-HUB",
  },
  {
    id: "React-Animated",
    title: "React Animated",
    description:
      "Modern animated React website built with Framer Motion — showcasing smooth page transitions, entrance animations and interactive UI components.",
    tech: ["React.js", "Framer Motion", "JavaScript"],
    images: [],
    githubUrl: "https://github.com/CodeWithDh/React-Animated",
    repoName: "React-Animated",
  },
  {
    id: "Ecomerce-Website",
    title: "E-Commerce Website",
    description:
      "TypeScript-powered e-commerce frontend with product listings, cart management and a clean, responsive UI — built for scalability.",
    tech: ["TypeScript", "React.js", "Node.js"],
    images: [],
    githubUrl: "https://github.com/CodeWithDh/Ecomerce-Website",
    repoName: "Ecomerce-Website",
  },
  {
    id: "AirBnb",
    title: "AirBnb Clone",
    description:
      "Full-featured AirBnb clone with listing management, user auth, booking flows, map integration and a polished responsive UI.",
    tech: ["Node.js", "Express.js", "MongoDB", "EJS"],
    images: [],
    githubUrl: "https://github.com/CodeWithDh/AirBnb",
    repoName: "AirBnb",
  },
  {
    id: "Chat-System",
    title: "Real-Time Chat System",
    description:
      "Real-time chat application with WebSocket support, room-based messaging and a clean minimalist interface.",
    tech: ["Node.js", "Socket.io", "EJS", "Express.js"],
    images: [],
    githubUrl: "https://github.com/CodeWithDh/Chat-System",
    repoName: "Chat-System",
  },
];

const GITHUB_USERNAME = "CodeWithDh";

/**
 * Projects Section
 * Props:
 *   projects — array of project objects (optional, falls back to FEATURED)
 *              Each item: { id, title, description, tech, images, githubUrl, liveUrl, repoName }
 */
export default function Projects({ projects = FEATURED }) {
  const [repoMeta, setRepoMeta] = useState({}); // { repoName: { stars, language } }

  // Fetch live star counts & language from GitHub API
  useEffect(() => {
    async function fetchMeta() {
      try {
        const res  = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`
        );
        const data = await res.json();
        const map  = {};
        data.forEach((repo) => {
          map[repo.name] = {
            stars:    repo.stargazers_count,
            language: repo.language,
          };
        });
        setRepoMeta(map);
      } catch {
        /* silently fail — just show without star counts */
      }
    }
    fetchMeta();
  }, []);

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

      <div className="proj-grid">
        {projects.map((proj, index) => {
          const meta = repoMeta[proj.repoName] || {};
          return (
            <ProjectCard
              key={proj.id}
              index={index}
              title={proj.title}
              description={proj.description}
              tech={proj.tech}
              images={proj.images || []}
              githubUrl={proj.githubUrl}
              liveUrl={proj.liveUrl}
              stars={meta.stars || proj.stars || 0}
              language={meta.language || proj.language}
            />
          );
        })}
      </div>

      {/* View all repos link */}
      <motion.div
        className="proj-view-all"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
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
