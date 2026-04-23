import React, { useEffect } from "react";
import IMG from "../config/images";
import "../assets/css/Kinder.css";

const Kinder = () => {
    useEffect(() => {
        $(document).foundation();
    }, []);

    return (
        <main>
            {/* Banner de Encabezado */}
            <div
                className="imgHead"
                style={{ backgroundImage: `url('${IMG.heroKinder}')` }}
                role="img"
                aria-label="Kínder — Comunidad Chilcos"
            >
                <div className="grid-x grid-padding-x align-center align-middle"></div>
            </div>

            {/* Contenido */}
            <div className="grid-container" style={{ paddingTop: '20px' }}>
                <div className="grid-x grid-padding-x align-center">
                    <div className="cell medium-3">
                        <h1 style={{ fontWeight: 'bold' }}>Kínder Multigrado</h1>
                    </div>
                    <div className="cell medium-6">
                        <p>
                            El lema pedagógico de este primer septenio es <strong>"El mundo es bueno"</strong>. Nuestro objetivo es hacer que los niños y niñas sientan que pueden confiar en que el mundo es un buen lugar donde pueden crecer felices.
                        </p>
                        <p>
                            La vida cotidiana en el jardín se asemeja a la de una casita, donde realizamos tareas domésticas junto a los niños. Actividades como cocinar, hacer pan, lavar, coser, barrer y cuidar el huerto forman parte esencial de nuestro día a día. Además, dedicamos mucho tiempo al juego libre, proporcionando elementos cuidadosamente seleccionados que fomentan el desarrollo de los sentidos y estimulan la imaginación.
                        </p>

                        {/* Carousel */}
                        <div className="grid-x grid-padding-x align-center">
                            <div className="cell medium-10">
                                <div className="orbit" role="region" aria-label="Fotos Kínder" data-orbit data-options="animInFromLeft:fade-in; animInFromRight:fade-in; animOutToLeft:fade-out; animOutToRight:fade-out;">
                                    <div className="orbit-wrapper">
                                        <div className="orbit-controls">
                                            <button className="orbit-previous"><span className="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
                                            <button className="orbit-next"><span className="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
                                        </div>
                                        <ul className="orbit-container">
                                            <li className="is-active orbit-slide">
                                                <figure className="orbit-figure">
                                                    <img className="orbit-image carrusel" src={IMG.kinder1} alt="Kínder 1" />
                                                </figure>
                                            </li>
                                            <li className="orbit-slide">
                                                <figure className="orbit-figure">
                                                    <img className="orbit-image carrusel" src={IMG.kinder2} alt="Kínder 2" />
                                                </figure>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />

                        <p>
                            A través de la imitación y del ejemplo, los niños y niñas aprenden de manera natural. Por eso, ofrecemos actividades artísticas como acuarela, modelado con cera de abeja, y festividades que conectan con el ritmo del año. También valoramos el contacto con la naturaleza y el juego al aire libre como pilares fundamentales de su desarrollo.
                        </p>
                        <p>
                            Fomentamos el aprendizaje de artes del lenguaje a través de cuentos, canciones y poemas
                            que acompañan el ritmo semanal. Además, un día a la semana se realizan actividades
                            en inglés, integradas de forma lúdica y natural en la jornada.
                        </p>
                        <br />
                    </div>
                </div>
            </div>

            {/* Footer con frase */}
            <div className="footer">
                <div className="grid-x align-center align-middle">
                    <div className="cell medium-6">
                        <blockquote>
                            <br />
                            <h2 className="textoClaro">
                                "El niño pequeño es todo órgano sensorio y se entrega por completo a su entorno."
                            </h2>
                            <cite className="text-right textoClaro">Rudolf Steiner</cite>
                        </blockquote>
                    </div>
                </div>
            </div>

            {/* Tabla de edades */}
            <div className="grid-container" style={{ paddingTop: '20px' }}>
                <div className="grid-x grid-padding-x align-center">
                    <div className="cell medium-3">
                        <h1 style={{ fontWeight: 'bold' }}></h1>
                    </div>
                    <div className="cell medium-6">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nivel</th>
                                    <th>Edad mínima al 31-03-2026</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Maternal</td>
                                    <td>2 años (cumplidos al 31-03-2026)</td>
                                </tr>
                                <tr>
                                    <td>Kínder (multigrado 4–6 años)</td>
                                    <td>4 años (cumplidos al 31-03-2026)</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <p>
                            *Si tu hijo o hija está próximo a cumplir la edad, por favor contáctanos para evaluar su ingreso.
                        </p>
                        <br />

                        <h2 style={{ fontWeight: 'bold' }}>Información Importante</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Aspecto</th>
                                    <th>Detalle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Grupos</td>
                                    <td>Multigrado (Maternal + Kínder 4–6 años)</td>
                                </tr>
                                <tr>
                                    <td>Horario</td>
                                    <td>Lunes a viernes 8:15–13:15</td>
                                </tr>
                                <tr>
                                    <td>Inglés</td>
                                    <td>Un día a la semana integrado en la jornada</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                    </div>
                </div>
            </div>
            <br />
        </main>
    );
};

export default Kinder;