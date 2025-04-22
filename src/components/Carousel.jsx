import React, { useContext, useEffect } from "react";
import 'foundation-sites';

import "../assets/css/Carousel.css";

const Carousel = () => {
    useEffect(() => {
        $(document).foundation();
    }, []);

    return(
        <div className="grid-x grid-padding-x align-center grid-carousel">
            <div className="cell medium-10">
                <div className="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit data-options="animInFromLeft:fade-in; animInFromRight:fade-in; animOutToLeft:fade-out; animOutToRight:fade-out;">
                    <div className="orbit-wrapper">
                        <div className="orbit-controls">
                            <button className="orbit-previous"><span className="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
                            <button className="orbit-next"><span className="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
                        </div>
                        <ul className="orbit-container">
                            <li className="is-active orbit-slide">
                                <figure className="orbit-figure">
                                    <img className="orbit-image carrusel" src="./src/assets/img/web_chilcos_banner_1.jpg" alt="Carrusel1"/>
                                </figure>
                            </li>
                            <li className="orbit-slide">
                                <figure className="orbit-figure">
                                    <img className="orbit-image carrusel" src="./src/assets/img/web_chilcos_banner_2.jpg" alt="Carrusel2"/>
                                </figure>
                            </li>
                        </ul>
                    </div>
                    <nav className="orbit-bullets">
                        <button className="is-active" data-slide="0">
                            <span className="show-for-sr">First slide details.</span>
                            <span className="show-for-sr" data-slide-active-label>Current Slide</span>
                        </button>
                        <button data-slide="1"><span className="show-for-sr">Second slide details.</span></button>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Carousel;