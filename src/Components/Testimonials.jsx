import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Testimonials.css";

const TESTIMONIALS = [
  {
    id: 1,
    name: "David R.",
    role: "CEO, DrVenture (USA)",
    avatar: "DR",
    avatarColor: "#4f9cf9",
    review:
      "Shivam delivered an outstanding Figma prototype for our healthcare platform. The UI/UX work was pixel-perfect and exceeded our expectations — professional, modern, and ready for development handoff. Highly recommended!",
    rating: 5,
    project: "UI/UX Design — DrVenture",
    flag: "🇺🇸",
  },
  {
    id: 2,
    name: "Rajesh K.",
    role: "Owner, Local Mobile Vendor",
    avatar: "RK",
    avatarColor: "#34d399",
    review:
      "Before Shivam built our web app, we were managing everything on paper. Now we track every mobile sale, purchase and customer detail online. The system runs on Google Cloud and has saved us hours every day.",
    rating: 5,
    project: "Smart Mobile Shop",
    flag: "🇮🇳",
  },
  {
    id: 3,
    name: "Gurpreet S.",
    role: "Meat Shop Owner, Chandigarh",
    avatar: "GS",
    avatarColor: "#a78bfa",
    review:
      "The Meat Hub system transformed how we run our shop. Inventory, billing and orders — all in one place. It started as a college project but became a real business tool. Very satisfied with the quality and support.",
    rating: 5,
    project: "The Meat Hub — Management System",
    flag: "🇮🇳",
  },
  {
    id: 4,
    name: "Arjun M.",
    role: "Startup Founder",
    avatar: "AM",
    avatarColor: "#fb923c",
    review:
      "Shivam built our laundry app on Flutter and delivered it on schedule. The app is smooth, the code is clean and the deployment was handled completely. He's not just a developer — he thinks like a product engineer.",
    rating: 5,
    project: "Laundry App — Flutter",
    flag: "🇮🇳",
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="ts-stars">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="ts-star">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);

  const t = TESTIMONIALS[active];

  return (
    <section className="Testimonials" id="Testimonials">
      {/* Header */}
      <motion.div
        className="ts-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="ts-tag-line" />
        <span className="ts-tag-label">Client Reviews</span>
        <span className="ts-tag-line" />
      </motion.div>

      <motion.h2
        className="ts-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        What <span className="ts-accent">Clients Say</span>
      </motion.h2>

      {/* Spotlight Card */}
      <div className="ts-spotlight-wrap">
        <AnimatePresence mode="wait">
          <motion.div
            key={t.id}
            className="ts-spotlight"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div className="ts-quote-mark">"</div>
            <p className="ts-review">{t.review}</p>

            <div className="ts-meta">
              <div
                className="ts-avatar"
                style={{ background: t.avatarColor }}
              >
                {t.avatar}
              </div>
              <div className="ts-info">
                <span className="ts-name">
                  {t.flag} {t.name}
                </span>
                <span className="ts-role">{t.role}</span>
              </div>
              <div className="ts-right">
                <Stars count={t.rating} />
                <span className="ts-project">{t.project}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nav arrows */}
        <button className="ts-arrow ts-arrow--prev" onClick={prev} aria-label="Previous testimonial">
          ←
        </button>
        <button className="ts-arrow ts-arrow--next" onClick={next} aria-label="Next testimonial">
          →
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="ts-dots">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            className={`ts-dot ${i === active ? "ts-dot--active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>

      {/* Compact All Cards */}
      <div className="ts-grid">
        {TESTIMONIALS.map((item, i) => (
          <motion.div
            key={item.id}
            className={`ts-card ${i === active ? "ts-card--active" : ""}`}
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="ts-card-avatar" style={{ background: item.avatarColor }}>
              {item.avatar}
            </div>
            <div className="ts-card-body">
              <p className="ts-card-name">{item.flag} {item.name}</p>
              <p className="ts-card-role">{item.role}</p>
              <p className="ts-card-snippet">
                "{item.review.slice(0, 80)}..."
              </p>
              <Stars count={item.rating} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
