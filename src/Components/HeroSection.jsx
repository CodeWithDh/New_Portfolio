import "./HeroSection.css"

export default function HeroSection(){
    return <div className="HeroSection">
        <div className="HeroContent">
            <p style={{
                color:"#fb2c36",
                fontSize:"1.3rem",
                marginBottom:"0",
                fontWeight:"500"
                }}>Welcome</p>
        <h1 style={{
            fontWeight:"700",
            fontSize:"3rem",
        }}>Shivam Dhinrga</h1>
        <p style={{
            color:"#bfb5a8",
            marginBottom:"0px",
        }}>Full Stack Developer | <span style={{
            color:"#fb2c36",
            fontWeight:"500",
        }}>MERN</span> Stcak</p>
        <button onClick={()=>{window.open("/Resume.pdf","_blank")}} className="resumeBtn">Resume</button>
        <div className="social">
            <a className="socialIcon" target="_blank" href="https://github.com/CodeWithDh">
                <i class="fa-brands fa-github"></i>
            </a>
            <a className="socialIcon" target="_blank" href="https://www.linkedin.com/in/shivamdhingra/">
                <i class="fa-brands fa-linkedin"></i>
            </a>
            <a className="socialIcon" target="_blank" href="mailto:shivamdhingra04sd@gmail.com">
                <i class="fa-solid fa-envelope"></i>
            </a>
        </div>
        </div>
        <div className="Avatar"></div>
    </div>
}