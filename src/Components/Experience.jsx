import "./Experience.css";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import ExperienceCard from "./ExperienceCard";

import sms1 from "../assets/sms1.png";
import sms2 from "../assets/sms2.png";
import mh1 from "../assets/mh1.png";
import mh2 from "../assets/mh2.png";

/**
 * Default data — edit here to add / remove experiences.
 * You can also override this by passing an `experiences` prop
 * from the parent (e.g. App.jsx) if you want to manage data centrally.
 *
 * Each entry supports:
 *   id          — unique key
 *   icon        — React node
 *   title       — string
 *   role        — string
 *   type        — string  (Freelance / Full-time / etc.)
 *   period      — string
 *   description — string
 *   tech        — string[]
 *   images      — imported image path[]  (optional — omit to hide slider)
 */
const DEFAULT_EXPERIENCES = [
  {
    id: 1,
    icon: <PhoneAndroidIcon />,
    title: "Smart Mobile Shop",
    role: "Full Stack Developer",
    type: "Freelance Client",
    period: "2024 — 2025",
    description:
      "Built a complete web app for a local mobile vendor — to manage sale and purchase of 2nd hand mobiles powered by Google Cloud Platform. Delivered end-to-end from design to deployment.",
    tech: ["PHP", "MySQL", "GCP", ],
    images: [sms1, sms2],
  },
  {
    id: 2,
    icon: <FoodBankIcon />,
    title: "Meat Hub",
    role: "Full Stack Developer",
    type: "College Major Project → Sold to Client",
    period: "2024",
    description:
      "Restaurant and Meat Shop Management System solving real-time operational challenges — inventory, sales, orders, and billing all in one platform. Started as a college major project, later sold to a real vendor.",
    tech: ["EJS", "Node.js", "MySQL", "Express.js", "REST API"],
    images: [mh1, mh2],
  },
];

/**
 * Experience section.
 *
 * Props:
 *   experiences — array of experience objects (optional).
 *                 Falls back to DEFAULT_EXPERIENCES above.
 */
export default function Experience({ experiences = DEFAULT_EXPERIENCES }) {
  return (
    <section className="Experience" id="Experience">
      {/* Section header */}
      <div className="exp-header">
        <span className="exp-tag-line" />
        <span className="exp-tag-label">Work Experience</span>
        <span className="exp-tag-line" />
      </div>
      <h2 className="exp-title">
        Things I've <span className="exp-accent">Built &amp; Shipped</span>
      </h2>

      {/* Timeline */}
      <div className="timeline">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={exp.id}
            icon={exp.icon}
            title={exp.title}
            role={exp.role}
            type={exp.type}
            period={exp.period}
            description={exp.description}
            tech={exp.tech}
            images={exp.images}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
