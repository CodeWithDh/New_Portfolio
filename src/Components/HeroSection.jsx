import "./HeroSection.css"

export default function HeroSection(){
    return <> <div className="HeroSection">
        <div className="HeroContent">
            <p style={{
                color:"#fb2c36",
                fontSize:"1.3rem",
                marginBottom:"0",
                fontWeight:"500"
                }}>Hey! I Am</p>
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
        }}>MERN</span> Stack</p>
        <button onClick={()=>{window.open("/Resume.pdf","_blank")}} className="resumeBtn">Resume</button>
        <div className="social">
            <a className="socialIcon" target="_blank" href="https://github.com/CodeWithDh">
                <i className="fa-brands fa-github"></i>
            </a>
            <a className="socialIcon" target="_blank" href="https://www.linkedin.com/in/shivamdhingra/">
                <i className="fa-brands fa-linkedin"></i>
            </a>
            <a className="socialIcon" target="_blank" href="mailto:shivamdhingra04sd@gmail.com">
                <i className="fa-solid fa-envelope"></i>
            </a>
        </div>
        </div>
        <div className="Avatar"></div>
    </div>
    <div className="slider">
        <div class="icons">
            <div className="icon"><i class="fa-brands fa-html5"></i></div>
            <div className="icon"><i class="fa-brands fa-react"></i></div>
            <div className="icon"><i class="fa-brands fa-node-js"></i></div>
            <div className="icon"><i class="fa-brands fa-java"></i></div>    
            <div className="icon"><i class="fa-brands fa-android"></i></div>    
            <div className="icon"><i class="fa-solid fa-magnifying-glass-chart"></i></div> 

        </div> 
        <div class="icons2">
            <div className="icon"><i class="fa-brands fa-html5"></i></div>
            <div className="icon"><i class="fa-brands fa-react"></i></div>
            <div className="icon"><i class="fa-brands fa-node-js"></i></div>
            <div className="icon"><i class="fa-brands fa-java"></i></div>    
            <div className="icon"><i class="fa-brands fa-android"></i></div>    
            <div className="icon"><i class="fa-solid fa-magnifying-glass-chart"></i></div> 

        </div> 
       
    </div>
    </>
}