import React from "react";
import "../assets/css/Banner.css";

const Banner = ({ src, alt = "Banner" }) => {
    return (
        <img src={src} alt={alt} className="banner" />
    );
};

export default Banner;
