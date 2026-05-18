import { motion } from "framer-motion";
import "./Services.css";

const SERVICES = [
  {
    id: "custom-web",
    icon: <i className="fa-solid fa-desktop"></i>,
    tag: "⭐ Most Popular",
    title: "Custom Website Building",
    description:
      "Pixel-perfect, blazing-fast websites built from scratch — tailored to your brand. No templates, no compromise. From landing pages to full-scale web platforms.",
    highlights: ["React / Next.js / HTML", "Mobile-first responsive design", "Performance optimized", "SEO-ready structure"],
    featured: true,
  },
  {
    id: "uiux",
    icon: <i className="fa-solid fa-palette"></i>,
    tag: "Design First",
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive designs that users love. I create wireframes, prototypes and complete design systems in Figma before writing a single line of code.",
    highlights: ["Figma prototyping", "User-centered design", "Design systems", "International clients"],
    featured: true,
  },
  {
    id: "app-dev",
    icon: <i className="fa-solid fa-mobile-screen-button"></i>,
    tag: "Cross Platform",
    title: "App Development",
    description:
      "Cross-platform mobile applications built with Flutter. One codebase, iOS + Android — from idea to Play Store / App Store deployment.",
    highlights: ["Flutter (iOS & Android)", "Firebase integration", "REST API connectivity", "Play Store deployment"],
    featured: true,
  },
  {
    id: "management-system",
    icon: <i className="fa-solid fa-gears"></i>,
    tag: "Web + App",
    title: "Management Systems",
    description:
      "Unified platforms that connect your web dashboard and mobile app — inventory, billing, orders, users — all in one place.",
    highlights: ["Combined web + mobile", "Real-time data sync", "Role-based access", "Dashboard analytics"],
    featured: true,
  },
  {
    id: "wordpress",
    icon: <i className="fa-brands fa-wordpress"></i>,
    tag: "CMS",
    title: "WordPress & CMS Sites",
    description:
      "Professional WordPress sites — custom themes, WooCommerce stores, speed optimization and full setup so you can manage content yourself.",
    highlights: ["Custom themes & plugins", "WooCommerce stores", "Speed & security setup", "Admin training"],
    featured: false,
  },
  {
    id: "seo",
    icon: <i className="fa-solid fa-magnifying-glass-chart"></i>,
    tag: "Rank Higher",
    title: "SEO Optimization",
    description:
      "Get found on Google. Technical SEO audits, on-page optimization, keyword strategy and performance improvements that drive organic traffic.",
    highlights: ["Technical SEO audit", "On-page optimization", "Core Web Vitals fix", "Monthly reporting"],
    featured: false,
  },
  {
    id: "digital-marketing",
    icon: <i className="fa-solid fa-bullhorn"></i>,
    tag: "Grow Online",
    title: "Digital Marketing",
    description:
      "Full-funnel digital marketing for companies — social media strategy, Google Ads, content marketing and measurable ROI-driven campaigns.",
    highlights: ["Social media strategy", "Google / Meta Ads", "Content marketing", "Analytics & ROI tracking"],
    featured: false,
  },
  {
    id: "ai",
    icon: <i className="fa-solid fa-robot"></i>,
    tag: "Future-Ready",
    title: "AI Integration",
    description:
      "Bring AI into your business — chatbots, automation workflows, OpenAI integrations and smart features that save time and boost productivity.",
    highlights: ["ChatGPT / OpenAI APIs", "Custom chatbots", "Workflow automation", "Data processing pipelines"],
    featured: false,
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function Services() {
  const featured = SERVICES.filter((s) => s.featured);
  const rest = SERVICES.filter((s) => !s.featured);

  return (
    <section className="Services" id="Services">
      {/* Header */}
      <motion.div
        className="svc-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="svc-tag-line" />
        <span className="svc-tag-label">What I Offer</span>
        <span className="svc-tag-line" />
      </motion.div>

      <motion.h2
        className="svc-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Services That <span className="svc-accent">Drive Results</span>
      </motion.h2>
      <motion.p
        className="svc-sub"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        From a single landing page to a full digital presence — I cover every layer of your software &amp; marketing needs.
      </motion.p>

      {/* Featured 2×2 grid */}
      <div className="svc-featured-grid">
        {featured.map((svc, i) => (
          <motion.div
            key={svc.id}
            className="svc-card svc-card--featured"
            custom={i}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            <div className="svc-card-top">
              <span className="svc-icon">{svc.icon}</span>
              <span className="svc-badge">{svc.tag}</span>
            </div>
            <h3 className="svc-card-title">{svc.title}</h3>
            <p className="svc-card-desc">{svc.description}</p>
            <ul className="svc-highlights">
              {svc.highlights.map((h) => (
                <li key={h}><span className="svc-check">✓</span> {h}</li>
              ))}
            </ul>
            <a href="#Contact" className="svc-cta">Get Started →</a>
          </motion.div>
        ))}
      </div>

      {/* Rest of services in 4-column grid */}
      <div className="svc-rest-grid">
        {rest.map((svc, i) => (
          <motion.div
            key={svc.id}
            className="svc-card svc-card--compact"
            custom={i + 4}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="svc-card-top">
              <span className="svc-icon svc-icon--sm">{svc.icon}</span>
              <span className="svc-badge svc-badge--muted">{svc.tag}</span>
            </div>
            <h3 className="svc-card-title svc-card-title--sm">{svc.title}</h3>
            <p className="svc-card-desc svc-card-desc--sm">{svc.description}</p>
            <ul className="svc-highlights svc-highlights--sm">
              {svc.highlights.map((h) => (
                <li key={h}><span className="svc-check">✓</span> {h}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="svc-bottom-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <p>Not sure what you need? Let's figure it out together.</p>
        <a href="#Contact" className="svc-bottom-btn">Book a Free Consultation →</a>
      </motion.div>
    </section>
  );
}
