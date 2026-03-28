import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

// Relative URL works in both dev (via vite proxy) and production
// (Express serves both the React app and /api/* from the same port)
const API_URL = "/api/contact";


const INFO_CARDS = [
  {
    icon: "📧",
    label: "Email",
    value: "shivamdhingra04sd@gmail.com",
    href: "mailto:shivamdhingra04sd@gmail.com",
  },
  {
    icon: "💼",
    label: "GitHub",
    value: "github.com/CodeWithDh",
    href: "https://github.com/CodeWithDh",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Chandigarh, India",
    href: null,
  },
];

/**
 * Contact Section
 * Props:
 *   infoCards — array of { icon, label, value, href } (optional)
 */
export default function Contact({ infoCards = INFO_CARDS }) {
  const contRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [form, setForm] = useState({ from_name: "", from_email: "", message: "" });

  // GSAP entrance
  useEffect(() => {
    const els = contRef.current.querySelectorAll(
      ".contact-info-card, .contact-form-wrap"
    );
    gsap.fromTo(
      els,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contRef.current,
          start: "top 75%",
        },
      }
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Server error");
      setStatus("success");
      setForm({ from_name: "", from_email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section className="Contact" id="Contact">
      {/* Header */}
      <div className="contact-header">
        <span className="contact-tag-line" />
        <span className="contact-tag-label">Get In Touch</span>
        <span className="contact-tag-line" />
      </div>
      <h2 className="contact-title">
        Let's <span className="contact-accent">Work Together</span>
      </h2>
      <p className="contact-sub">
        Have a project in mind or just want to say hi? Drop me a message and I'll
        get back to you within 24 hours.
      </p>

      <div className="contact-inner" ref={contRef}>
        {/* Left — info cards */}
        <div className="contact-info-col">
          {infoCards.map((card) => (
            <div className="contact-info-card" key={card.label}>
              <span className="ci-icon">{card.icon}</span>
              <div>
                <p className="ci-label">{card.label}</p>
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="ci-value ci-link"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="ci-value">{card.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right — form */}
        <div className="contact-form-wrap">
          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <div className="cf-row">
              <div className="cf-group">
                <label className="cf-label" htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  className="cf-input"
                  type="text"
                  name="from_name"
                  placeholder="Enter Your Name"
                  value={form.from_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="cf-group">
                <label className="cf-label" htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  className="cf-input"
                  type="email"
                  name="from_email"
                  placeholder="you@example.com"
                  value={form.from_email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="cf-group">
              <label className="cf-label" htmlFor="contact-msg">Message</label>
              <textarea
                id="contact-msg"
                className="cf-input cf-textarea"
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={`cf-submit ${status === "sending" ? "cf-sending" : ""}`}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message 🚀"}
            </button>

            {status === "success" && (
              <p className="cf-feedback cf-success">
                ✅ Message sent! I'll reply within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p className="cf-feedback cf-error">
                ❌ Could not send — please email me at{" "}
                <a href="mailto:shivamdhingra04sd@gmail.com">shivamdhingra04sd@gmail.com</a>
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
