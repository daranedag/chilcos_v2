import React from "react";
import "../assets/css/Nosotros.css";

const Nosotros = () => {
    return (
        <main>
            {/* Banner de Encabezado */}
            <div className="imgHead">
                <div className="grid-x grid-padding-x align-center align-middle"></div>
            </div>

            {/* Contenido */}
            <div className="grid-container" style={{ paddingTop: '20px' }}>
                <div className="grid-x grid-padding-x align-center">
                    <div className="cell medium-6">
                        <p>
                            Somos un proyecto educativo autogestionado que nace el año 2009 como Escuela Libre, 
                            convirtiéndose el 2013 en escuela con reconocimiento oficial.
                        </p>
                        <p>
                            Nuestra pedagogía se basa en la visión antroposófica del ser humano de Rudolf Steiner, 
                            reconociendo el desarrollo evolutivo del niño y la niña en sus distintas etapas. Buscamos 
                            crear un entorno de aprendizaje donde puedan desarrollarse libremente, aprendiendo a 
                            conocerse a sí mismos, a vivir en armonía con los demás y con la naturaleza.
                        </p>
                        <br />
                    </div>
                </div>
            </div>

            {/* Sección con Frase */}
            <div className="footer">
                <div className="grid-x align-center align-middle">
                    <div className="cell medium-6">
                        <blockquote>
                            <br />
                            <h2 className="textoClaro">
                                "El hombre debe rendirse a pensamientos, conceptos y sentimientos originados no en 
                                lo temporal sino en lo eterno. Su contenido no debe ser verdadero para hoy, ayer, 
                                un siglo o mañana sino para siempre".
                            </h2>
                            <cite className="text-right textoClaro">Rudolf Steiner</cite>
                        </blockquote>
                    </div>
                </div>
            </div>

            {/* Equipo de Trabajo */}
            <div className="grid-container bgImg" style={{ paddingTop: '20px', backgroundPositionY: '-800px' }}>
                <div className="grid-x grid-padding-x align-center">
                    <div className="cell medium-3">
                        <h1 style={{ fontWeight: 'bold' }}>EQUIPO DE TRABAJO</h1>
                    </div>
                    <div className="cell medium-6"></div>
                </div>

                <div className="grid-x grid-padding-x align-center">
                    <div id="equipo" className="grid-x grid-padding-x large-9">
                        {/* Kínder */}
                        <div className="cell medium-6"></div>
                        <div className="cell medium-2" style={{ textAlign: 'center' }}>
                            <img className="globos" src="./assets/img/prof_4.png" alt="Equipo" />
                            <p>Carla Olate</p>
                            Kínder
                        </div>
                        <div className="cell medium-2" style={{ textAlign: 'center' }}>
                            <img className="globos" src="./assets/img/prof_maignaciaVera.png" alt="Equipo" />
                            <p>María Ignacia Vera</p>
                            Kínder
                        </div>
                        <div className="cell medium-2" style={{ textAlign: 'center' }}>
                            <img className="globos" src="./assets/img/prof_9.png" alt="Equipo" />
                            <p>Marcela Viveros</p>
                            Kínder
                        </div>

                        {/* Básica */}
                        <div className="cell medium-4"></div>
                        <div className="cell medium-2" style={{ textAlign: 'center' }}>
                            <img className="globos" src="./assets/img/prof_3.png" alt="Equipo" />
                            <p>Ilia Sanhueza</p>
                            1ero / Peumos
                        </div>
                        <div className="cell medium-2" style={{ textAlign: 'center' }}>
                            <img className="globos" src="./assets/img/prof_7.png" alt="Equipo" />
                            <p>Andrea Franco</p>
                            2do / Canelos
                        </div>
                        <div className="cell medium-2" style={{ textAlign: 'center' }}>
                            <img className="globos" src="./assets/img/prof_lorena.png" alt="Equipo" />
                            <p>Lorena Hernández</p>
                            Asistente de Básica
                        </div>
                        <div className="cell medium-2" style={{ textAlign: 'center' }}>
                            <img className="globos" src="./assets/img/prof_6.png" alt="Equipo" />
                            <p>Catalina Budinich</p>
                            3ero / Ulmos
                        </div>
                    </div>
                    <br />
                </div>
                <br />
            </div>
            <br />
        </main>
    );
};

export default Nosotros;