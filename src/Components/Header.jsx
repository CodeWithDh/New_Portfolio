import "./Header.css"
export default function Header(){
    return <>
    <div className="Header">
        <div className="name">
            <h3><span style={{fontSize:"3rem",color:"red"}}>᥉</span>D</h3>
        </div>
        <div className="head-bar" id="headBar">
            <a className="head-item" href="#Home">Home</a>
            <a className="head-item" href="#About">About</a>
            <a className="head-item" href="#Experience">Experience</a>
            <a className="head-item" href="#Skills">Skills</a>
            <a className="head-item" href="#Projects">Projects</a>
            <a className="head-item" href="#Contact">Contact</a>
        </div>
    </div>
    
    </>
}