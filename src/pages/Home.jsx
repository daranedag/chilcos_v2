import React, { useContext, useEffect } from "react";
import 'foundation-sites';

import "../assets/css/Home.css";

const Home = () => {
    useEffect(() => {
        $(document).foundation();
    }, []);

    return(
        <main>
            <div className="grid-container bgImg" style={{ paddingTop: 20+"px"}}>
                <div className="grid-x grid-padding-x align-center bordes">
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
                                            <img className="orbit-image carrusel" src="https://www.playbook.com/chilcos/undefined?assetToken=KATV2ipLjh4xwDuYK4B8UTAQ" alt="Carrusel1"/>
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

                <div className="grid-x grid-padding-x align-center bordes margen">
                    <div className="cell medium-4 bordes">
                        <h1>Bienvenidos</h1>
                        <p>
                            Buscamos crear un entorno de aprendizaje, donde los niños y niñas se
                            puedan desarrollar libremente, aprendiendo a conocerse a sí mismos, a vivir en armonía con los demás y con la naturaleza.
                        </p>
                        <blockquote>    
                            <h2>"La pedagogía Waldorf no es un sistema educativo, sino un arte. El arte de despertar lo que hay dentro de cada ser humano”.</h2>
                            <cite className="text-right">Rudolf Steiner </cite>
                        </blockquote>
                    </div>
                    <div className="cell medium-4 bordes">
                        <a href="postulacion.html">
                        <img className="imgBienvenida" alt="foto" src="./assets/img/postulacion1.jpg"/>
                    </a>
                </div>
            </div>

            <div className="grid-x grid-padding-x align-center grid-contenido">
                <div className="cell large-auto">
                    <div className="card">
                        <a href="kinder.html">
                            <img className="globos" src="./assets/img/web_chilcos_kinder.png"/>
                        </a>
                        <div className="card-section">
                            <p>
                                En el kínder, ofrecemos a los niños y niñas un entorno cuidado para que día a día; a través del juego libre, el contacto con la naturaleza y los trabajos cotidianos de la casa y el jardín; vayan desarrollándose de manera saludable. <a href="kinder.html">+ info</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="cell large-auto">
                    <div className="card">
                        <a href="basica.html">
                            <img className="globos" src="./assets/img/web_chilcos_basica.png"/>
                        </a>
                        <div className="card-section">
                            <p>
                                En esta etapa, guiamos a los niños y niñas en el proceso de ir descubriendo el mundo a través de actividades prácticas. El arte, el movimiento, el trabajo manual de los oficios y el contacto con la naturaleza son las herramientas para hacer del trabajo en la escuela un proceso significativo para su sano crecimiento y una relación con el mundo verdadera.
                                <a href="basica.html">+ info</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="cell large-auto">
                        <div className="card">
                            <a href="nosotros.html">
                                <img className="globos" src="./assets/img/web_chilcos_ext.png" alt="globos"/>
                            </a>
                            <div className="card-section">
                                <p>
                                    Somos una comunidad educativa que se involucra activamente en cada uno de los procesos, actividades y gestión, regalándonos la posibilidad de crear una comunidad fraterna y unida, generando en los los niños y niñas un sentido de pertenencia muy significativo para su proceso educativo.
                                    <a href="nosotros.html">+ info</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid-x grid-padding-x align-center align-middle bordes margen">
                    <div className="cell medium-9 bordes">
                        <blockquote>    
                            <h2>
                                “Una escuela Waldorf es aquella que permite a educadores y padres integrar en la educación todo aquello que desde su conocimiento del ser humano, su conocimiento del mundo y su amor al niño, consideran esencial”.
                            </h2>
                            <cite className="text-right">Rudolf Steiner</cite>
                        </blockquote>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;