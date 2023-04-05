import React from "react";
import "./Footer.scss";

import Payment from "../../assets/payments.png"
import { FaEnvelope, FaLocationArrow, FaMobileAlt } from "react-icons/fa";


const Footer = () => {
    return <footer className="footer">
    <div className="footer-content">
        <div className="col">
            <div className="title">About</div>
            <div className="text">
                BeatSolo are best headphones provider for someone who love to groove, is always on the move, and crazy about reaching their goals!. Every BeatSolo out there is our anchor!. Their love and support inspires us to never back down, even in turbulent waters and stormy seas.
            </div>
        </div>
        <div className="col">
            <div className="title">Contact</div>
            <div className="c-item">    
                <FaLocationArrow />
                <div className="text" >
                    Laxmi Nagar, South-East Delh, India, 110056
                </div>
            </div>
            <div className="c-item">    
                <FaMobileAlt />
                <div className="text">
                   Phone : +91-85955-49830
                </div>
            </div>
            <div className="c-item">    
                <FaEnvelope />
                <div className="text">
                   Email: amitkrsh.1999@gmail.com
                </div>
            </div>



            </div>
        <div className="col">
            <div className="title">Categories</div>
            <div className="text">Headphone</div>
            <div className="text">Smart Watches</div>
            <div className="text">Bluetooth Speakers</div>
            <div className="text">Wireless Earbuds</div>
            <div className="text">Home Theatre</div>
            <div className="text">Projectors</div>
            
        </div>
        <div className="col">
            <div className="title">Pages</div>
            <div className="text">Home</div>
            <div className="text">About</div>
            <div className="text">Privacy Policy</div>
            <div className="text">Returns</div>
            <div className="text">Terms & Condition</div>
            <div className="text">Contact us</div> 
        </div>

    </div>
    <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
                Beat Solo 2023 , PREMIUM HEADPHONES PROVIDERS.
            </div>
            <img src={Payment}/>
        </div>
    </div>
    </footer>;
};

export default Footer;
