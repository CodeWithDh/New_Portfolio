import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import "./Experience.css"
import LeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import RightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import sms1 from "../assets/sms1.png"
import sms2 from "../assets/sms2.png"
import mh2 from "../assets/mh2.png"
import mh1 from "../assets/mh1.png"






export default function Experience(){
    return(
        <div className="Experience">
            <h6>Work Experience</h6>
            <div className="cards">
                <div className="work">
                <div className="content">
                    <h6 class="workHeading"> <PhoneAndroidIcon style={{marginBottom:"5px",padding:"5px",fontSize:"2rem",color:"rgb(203, 3, 3)",borderRadius:"50px",backgroundColor:"#f5c2c2"}}/> Smart Mobile Shop</h6> <span id="workTag"> Local Vendor</span>
                    <p className="tech"></p>
                    <p className="details">
                        <span>Smart Mobile Shop :</span> A Web App for a local vendor, featuring inventory management, sales tracking, and database management powered by Google Cloud Platform (GCP) for efficient business operations.
                    </p>
                    

                        <div className="black">
                          <Swiper
                        className='imageSlider'
                          modules={[Autoplay, Pagination, Navigation]}
                          spaceBetween={30}
                          slidesPerView={1}
                          loop={true}
                          autoplay={{ delay: 2000 }}
                          pagination={{ clickable: true }}
                          navigation={false}
                        >
                          <SwiperSlide><img src={sms1} /></SwiperSlide>
                          <SwiperSlide><img src={sms2} /></SwiperSlide>
                        </Swiper>
                        </div>
                    
                </div>
            </div>
            <div className="work">
                <div className="content">
                    <h6 class="workHeading"><FoodBankIcon style={{marginBottom:"5px",padding:"5px",fontSize:"2rem",color:"rgb(203, 3, 3)",borderRadius:"50px",backgroundColor:"#f5c2c2"}}/> Meat Hub</h6> <span id="workTag">College Major Project + Sold To vendor <span> {/* effect of showing details div*/} </span></span>
                    <p className="tech"></p>
                    <p className="details">
                        <span>MeatHub :</span> A Restaurant and Meat Shop Management System that solves real-time operational challenges with inventory, sales, orders, and billing all in one platform.
                    </p>
                   
                        <div className="black">
                        <Swiper
                        className='imageSlider'
                          modules={[Autoplay, Pagination, Navigation]}
                          spaceBetween={30}
                          slidesPerView={1}
                          loop={true}
                          autoplay={{ delay: 2000 }}
                          pagination={{ clickable: true }}
                          navigation={false}
                        >
                          <SwiperSlide><img src={mh1} /></SwiperSlide>
                          <SwiperSlide><img src={mh2} /></SwiperSlide>
                        </Swiper>

                        </div>
                    
                </div>
            </div>
            </div>
           
        </div>
    )
}