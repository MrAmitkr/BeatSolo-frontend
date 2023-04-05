import React from "react";
import "./Banner.scss";

import BannerImg from '../../../assets/banner-img.png'
const Banner = () => {
    return (
    <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>BeatSolo</h1>
                <h2>Shop wireless headphone</h2>
                <p>The game begins here. With immortal 1000D gaming headphnes, don't just play the game - feel it, live it, and own it. Level up your audio game with BeatSolo wireless headsets    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt=""/>
            </div>
        </div>
    );
};


export default Banner;
