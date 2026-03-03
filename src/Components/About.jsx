import "./About.css"
import profile from "../assets/profile.png"
export default function About(props){
    return (
    <div className="About">
        <h6>About</h6>
        <p 
        className="bg-red-300"
        style={{
            color:"black",
            fontSize: props.large? props.font :"1rem"
            } }>
        {props.aboutStatement}
        </p>
    </div>
    )
}

