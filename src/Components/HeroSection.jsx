import "./HeroSection.css";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  const scrollToAbout = (e) => {
    e.preventDefault();
    document.getElementById("About")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="HeroSection">
        <div className="HeroContent">
          <TypeAnimation
            sequence={[
              "Access granted.",
              1000,
              "Welcome, I am",
            ]}
            wrapper="span"
            speed={10}
            style={{
              display: "inline-block",
              color: "#fb2c36",
              fontSize: "1.3rem",
              marginBottom: "0",
              fontWeight: "500",
            }}
            repeat={onscrollend}
          />

          <h1 style={{ fontWeight: "700", fontSize: "3rem" }}>
            Shivam Dhingra
          </h1>

          <p style={{ color: "#bfb5a8", marginBottom: "0px" }}>
            Software Engineer{" "}
            <span style={{ color: "#fb2c36", fontWeight: "500" }}>·</span>{" "}
            Web{" "}
            <span style={{ color: "#fb2c36", fontWeight: "500" }}>·</span>{" "}
            Apps{" "}
            <span style={{ color: "#fb2c36", fontWeight: "500" }}>·</span>{" "}
            Digital&nbsp;Marketing
          </p>

          <p
            style={{
              color: "#888",
              fontSize: "0.88rem",
              marginTop: "0.3rem",
              marginBottom: "0",
            }}
          >
            I solve real-world software & business problems — from custom
            websites to AI-integrated systems.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <a href="#About" className="resumeBtn" onClick={scrollToAbout}>
              About Me →
            </a>
            <a href="#Services" className="servicesBtn">
              View Services
            </a>
          </div>

          <div className="social">
            <a
              className="socialIcon"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/CodeWithDh"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              className="socialIcon"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/shivamdhingra/"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              className="socialIcon"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:info@shivamdhingra.com"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="Avatar"></div>
      </div>

      {/* Tech scroll ticker */}
      <div className="slider">
        <div className="icons">
          <div className="icon"><i style={{ color: "white" }} className="fa-brands fa-html5"></i></div>
          <div className="icon"><i style={{ color: "white" }} className="fa-brands fa-react"></i></div>
          <div className="icon"><i style={{ color: "white" }} className="fa-brands fa-node-js"></i></div>
          <div className="icon"><i style={{ color: "white" }} className="fa-brands fa-android"></i></div>
          <div className="icon"><i style={{ color: "white" }} className="fa-brands fa-wordpress"></i></div>
          <div className="icon"><i style={{ color: "white" }} className="fa-solid fa-magnifying-glass-chart"></i></div>
          <div className="icon"><i style={{ color: "white" }} className="fa-solid fa-robot"></i></div>
        </div>
        <div className="icons2">
          <div className="icon"><i style={{ color: "white" }} className="fa-brands fa-html5"></i></div>
          <div className="icon"><i style={{ color: "white" }} className="fa-brands fa-react"></i></div>
          <div className="icon"><i style={{ color: "white" }} className="fa-brands fa-node-js"></i></div>
          <div className="icon"><i style={{ color: "white" }} className="fa-brands fa-android"></i></div>
          <div className="icon"><i style={{ color: "white" }} className="fa-brands fa-wordpress"></i></div>
          <div className="icon"><i style={{ color: "white" }} className="fa-solid fa-magnifying-glass-chart"></i></div>
          <div className="icon"><i style={{ color: "white" }} className="fa-solid fa-robot"></i></div>
        </div>
      </div>
    </>
  );
}
