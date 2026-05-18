import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

const CHANNELS = [
  {
    id: "whatsapp",
    icon: <i className="fa-brands fa-whatsapp"></i>,
    label: "WhatsApp",
    sublabel: "Fastest response",
    badge: "~1 hr",
    badgeColor: "#34d399",
    description: "Start a conversation directly. Great for quick questions and project discussions.",
    cta: "Open WhatsApp →",
    href: "https://wa.me/917973867353?text=Hi%20Shivam%2C%20I%27m%20interested%20in%20your%20services%20and%20would%20like%20to%20discuss%20a%20project.",
    color: "#25d366",
  },
  {
    id: "email",
    icon: <i className="fa-solid fa-envelope"></i>,
    label: "Email",
    sublabel: "For detailed briefs",
    badge: "~4 hrs",
    badgeColor: "#4f9cf9",
    description: "Send your project brief, requirements or any inquiry. I read every message.",
    cta: "Send Email →",
    href: "mailto:info@shivamdhingra.com?subject=Project%20Inquiry&body=Hi%20Shivam%2C%0A%0AI%27d%20like%20to%20discuss%20a%20project%20with%20you.",
    color: "#4f9cf9",
  },
  {
    id: "linkedin",
    icon: <i className="fa-brands fa-linkedin"></i>,
    label: "LinkedIn",
    sublabel: "Professional connect",
    badge: "Network",
    badgeColor: "#a78bfa",
    description: "Let's connect professionally. See my work history and endorsements.",
    cta: "Connect →",
    href: "https://www.linkedin.com/in/shivamdhingra/",
    color: "#0077b5",
  },
  {
    id: "github",
    icon: <i className="fa-brands fa-github"></i>,
    label: "GitHub",
    sublabel: "See my code",
    badge: "Open Source",
    badgeColor: "#fbbf24",
    description: "Browse my repos, open-source projects and code quality first-hand.",
    cta: "View GitHub →",
    href: "https://github.com/CodeWithDh",
    color: "#e8e0d5",
  },
];

const AVAILABILITY = [
  { day: "Mon–Fri", hours: "9 AM – 8 PM IST", open: true },
  { day: "Saturday", hours: "10 AM – 5 PM IST", open: true },
  { day: "Sunday", hours: "Emergency only", open: false },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".ct-channel-card");
    if (!cards?.length) return;
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      }
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="Contact" id="Contact">
      {/* Header */}
      <div className="contact-header">
        <span className="contact-tag-line" />
        <span className="contact-tag-label">Get In Touch</span>
        <span className="contact-tag-line" />
      </div>
      <h2 className="contact-title">
        Let's Build <span className="contact-accent">Something Great</span>
      </h2>
      <p className="contact-sub">
        No forms. No spam. Just a real conversation about your project.
        Pick the channel that works best for you.
      </p>

      {/* Channel Cards */}
      <div className="ct-channels" ref={sectionRef}>
        {CHANNELS.map((ch) => (
          <a
            key={ch.id}
            href={ch.href}
            target="_blank"
            rel="noopener noreferrer"
            className="ct-channel-card"
            style={{ "--ch-color": ch.color }}
            onMouseEnter={() => setHovered(ch.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="ct-ch-top">
              <span className="ct-ch-icon">{ch.icon}</span>
              <span
                className="ct-ch-badge"
                style={{ background: ch.badgeColor + "22", color: ch.badgeColor, borderColor: ch.badgeColor + "55" }}
              >
                {ch.badge}
              </span>
            </div>
            <h3 className="ct-ch-label">{ch.label}</h3>
            <p className="ct-ch-sublabel">{ch.sublabel}</p>
            <p className="ct-ch-desc">{ch.description}</p>
            <span className="ct-ch-cta">{ch.cta}</span>
          </a>
        ))}
      </div>

      {/* Availability */}
      <motion.div
        className="ct-availability"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <h4 className="ct-avail-title">My Availability</h4>
        <div className="ct-avail-grid">
          {AVAILABILITY.map((a) => (
            <div key={a.day} className={`ct-avail-row ${a.open ? "" : "ct-avail-row--off"}`}>
              <span className="ct-avail-indicator" />
              <span className="ct-avail-day">{a.day}</span>
              <span className="ct-avail-hours">{a.hours}</span>
            </div>
          ))}
        </div>
        <p className="ct-avail-note">
          Based in <strong>Chandigarh, India</strong> (IST, UTC+5:30)
        </p>
      </motion.div>

      {/* Footer note */}
      <p className="ct-footer-note">
        © {new Date().getFullYear()} Shivam Dhingra · Software Engineer · Built with React + Vite
      </p>
    </section>
  );
}
