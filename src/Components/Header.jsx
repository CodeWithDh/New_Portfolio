import "./Header.css";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <div className={`Header ${scrolled ? "Header--scrolled" : ""}`}>
      <div className="name">
        <h3><span style={{ fontSize: "3rem", color: "red" }}>᥉</span>D</h3>
      </div>

      <nav className={`head-bar ${menuOpen ? "head-bar--open" : ""}`} id="headBar">
        <a className="head-item" href="#Home" onClick={close}>Home</a>
        <a className="head-item" href="#About" onClick={close}>About</a>
        <a className="head-item" href="#Services" onClick={close}>Services</a>
        <a className="head-item" href="#Projects" onClick={close}>Work</a>
        <a className="head-item" href="#Testimonials" onClick={close}>Clients</a>
        <a className="head-item head-cta" href="#Contact" onClick={close}>Let's Talk</a>
      </nav>

      <button
        className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span /><span /><span />
      </button>
    </div>
  );
}