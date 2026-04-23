import React, { useEffect } from "react";
import 'foundation-sites';
import IMG from "../config/images";
import "../assets/css/Carousel.css";

const Carousel = () => {
    useEffect(() => {
        $(document).foundation();
    }, []);

    return (
        <div className="grid-x grid-padding-x align-center grid-carousel">
            <div className="cell medium-10">
                <div
                    className="orbit"
                    role="region"
                    aria-label="Fotografías Chilcos"
                    data-orbit
                    data-options="animInFromLeft:fade-in; animInFromRight:fade-in; animOutToLeft:fade-out; animOutToRight:fade-out;"
                >
                    <div className="orbit-wrapper">
                        <div className="orbit-controls">
                            <button className="orbit-previous">
                                <span className="show-for-sr">Diapositiva anterior</span>
                                &#9664;&#xFE0E;
                            </button>
                            <button className="orbit-next">
                                <span className="show-for-sr">Diapositiva siguiente</span>
                                &#9654;&#xFE0E;
                            </button>
                        </div>
                        <ul className="orbit-container">
                            <li className="is-active orbit-slide">
                                <figure className="orbit-figure">
                                    <a href="#/postulacion">
                                        <img
                                            className="orbit-image carrusel"
                                            src={IMG.banner1}
                                            alt="Bienvenidos a Chilcos"
                                        />
                                    </a>
                                </figure>
                            </li>
                            <li className="orbit-slide">
                                <figure className="orbit-figure">
                                    <a href="#/postulacion">
                                        <img
                                            className="orbit-image carrusel"
                                            src={IMG.banner2}
                                            alt="Admisión Chilcos"
                                        />
                                    </a>
                                </figure>
                            </li>
                        </ul>
                    </div>
                    <nav className="orbit-bullets">
                        <button className="is-active" data-slide="0">
                            <span className="show-for-sr">Primera diapositiva.</span>
                            <span className="show-for-sr" data-slide-active-label>Diapositiva actual</span>
                        </button>
                        <button data-slide="1">
                            <span className="show-for-sr">Segunda diapositiva.</span>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Carousel;