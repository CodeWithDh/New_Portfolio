import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import "./Experience.css"

export default function Experience(){
    return(
        <div className="Experience">
            <h6>Work Experience</h6>
            <div className="work">
                <div className="content">
                    <span style={{color:"white",marginLeft:"-10px",fontWeight:"500"}}>1. </span>
                    <h6 class="workHeading"> <PhoneAndroidIcon style={{color:"black",transform: "rotate(15deg)",translateY:"110",color:"#FF4040"}}/> Smart Mobile Shop</h6> <span id="workTag"> Local Vendor</span>
                    <p className="tech"></p>
                    <p className="details">
                        <span>Smart Mobile Shop :</span> A Web App for a local vendor, featuring inventory management, sales tracking, and database management powered by Google Cloud Platform (GCP) for efficient business operations.
                    </p>
                </div>
            </div>
            <div className="work">
                <div className="content">
                    <span style={{color:"white",marginLeft:"-10px",fontWeight:"500"}}>2. </span>
                    <h6 class="workHeading"><FoodBankIcon style={{marginBottom:"5px",color:"black",fontSize:"1.7rem",color:"#FF4040"}}/> Meat Hub</h6> <span id="workTag">College Major Project + Sold To vendor <span> {/* effect of showing details div*/} </span></span>
                    <p className="tech"></p>
                    <p className="details">
                        <span>MeatHub :</span> A Restaurant and Meat Shop Management System that solves real-time operational challenges with inventory, sales, orders, and billing all in one platform.
                    </p>
                </div>
            </div>
        </div>
    )
}