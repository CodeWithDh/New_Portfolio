import "./About.css"
import profile from "../assets/profile.png"

const skills = [
  "React.js", "Node.js", "Express.js", "MongoDB",
  "JavaScript", "REST APIs", "GCP", "MySQL", "Git"
]

const stats = [
  { number: "2+", label: "Years Experience" },
  { number: "5+", label: "Projects Built" },
  { number: "3",  label: "Happy Clients" },
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
            Available for work
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
            Passionate <span className="accent">MERN Stack</span> Developer
          </h2>

          <p className="about-bio">
            I'm <strong>Shivam Dhingra</strong> — a full-stack developer who spots
            real-world problems and builds solutions that make a real impact. My focus
            is on scalable, efficient backend systems with clean, intuitive frontends.
            I've shipped production apps for local businesses and delivered college
            projects that were later sold to real clients.
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

          {/* Skills */}
          <div className="about-skills">
            <p className="skills-heading">Tech I Work With</p>
            <div className="skill-pills">
              {skills.map((skill) => (
                <span className="skill-pill" key={skill}>{skill}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
