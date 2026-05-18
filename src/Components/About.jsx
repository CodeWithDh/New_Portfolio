import "./About.css"
import profile from "../assets/profile.png"

const stats = [
  { number: "2+", label: "Years Experience" },
  { number: "10+", label: "Projects Delivered" },
  { number: "5+", label: "Happy Clients" },
]

const services = [
  { icon: <i className="fa-solid fa-globe"></i>, label: "Custom Websites" },
  { icon: <i className="fa-solid fa-mobile-screen-button"></i>, label: "App Development" },
  { icon: <i className="fa-solid fa-palette"></i>, label: "UI/UX Design" },
  { icon: <i className="fa-solid fa-magnifying-glass-chart"></i>, label: "SEO" },
  { icon: <i className="fa-solid fa-bullhorn"></i>, label: "Digital Marketing" },
  { icon: <i className="fa-solid fa-robot"></i>, label: "AI Integration" },
  { icon: <i className="fa-brands fa-wordpress"></i>, label: "WordPress Sites" },
  { icon: <i className="fa-solid fa-gears"></i>, label: "Management Systems" },
]

export default function About() {
  return (
    <section className="About" id="About">
      <div className="about-inner">

        {/* -------- Left: Profile Card -------- */}
        <div className="about-left">
          <div className="profile-ring">
            <img src={profile} alt="Shivam Dhingra" className="profile-img" />
          </div>
          <div className="profile-badge">
            <span className="badge-dot" />
            Available for Projects
          </div>
          <div className="profile-location">
            <i className="fa-solid fa-location-dot" /> Chandigarh, India
          </div>
        </div>

        {/* -------- Right: Bio -------- */}
        <div className="about-right">

          <div className="section-tag">
            <span className="tag-line" />
            <span className="tag-label">About Me</span>
          </div>

          <h2 className="about-heading">
            Software Engineer Who{" "}
            <span className="accent">Solves Real Problems</span>
          </h2>

          <p className="about-bio">
            I'm <strong>Shivam Dhingra</strong> — a software engineer who bridges the gap between
            technology and business. I build <strong>custom websites, web apps, mobile applications</strong> and
            now also help businesses grow through <strong>SEO &amp; digital marketing</strong>. Whether it's a
            landing page, a complex management system, or an AI-powered integration — I deliver
            end-to-end from design to deployment.
          </p>

          {/* Stats */}
          <div className="about-stats">
            {stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <span className="stat-number">{s.number}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* What I Do */}
          <div className="about-services">
            <p className="skills-heading">What I Do</p>
            <div className="service-chips">
              {services.map((s) => (
                <span className="service-chip" key={s.label}>
                  <span>{s.icon}</span> {s.label}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
