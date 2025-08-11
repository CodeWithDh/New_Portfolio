import "./Experience.css"

export default function Experience(){
    return(
        <div className="Experience">
            <h6>Experience</h6>
            <div className="work">
                <div className="workIcon"></div>
                <div className="content">
                    <h6 class="workHeading">Smart Mobile Shop</h6> <span id="workTag">Local Vendor <span> {/* effect of showing details div*/} </span></span>
                    <p className="tech"></p>
                    <p className="details">
                        <span>Smart Mobile Shop :</span> A Web App for a local vendor, featuring inventory management, sales tracking, and database management powered by Google Cloud Platform (GCP) for efficient business operations.
                    </p>
                </div>
            </div>
            <div className="work">
                <div className="workIcon"></div>
                <div className="content">
                    <h6 class="workHeading">Meat Hub</h6> <span id="workTag">College Major Project + Sold To vendor <span> {/* effect of showing details div*/} </span></span>
                    <p className="tech"></p>
                    <p className="details">
                        <span>MeatHub :</span> A Restaurant and Meat Shop Management System that solves real-time operational challenges with inventory, sales, orders, and billing all in one platform.
                    </p>
                </div>
            </div>
        </div>
    )
}