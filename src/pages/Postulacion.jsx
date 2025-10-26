import React, { useEffect } from "react";
import "../assets/css/Postulacion.css";

const Postulacion = () => {
    useEffect(() => {
        $(document).foundation();
    }, []);

    return (
        <main>
            {/* Banner de Encabezado */}
            <div className="imgHead" style={{ backgroundImage: "url('assets/img/DSC_1022_edit.jpg')" }}>
                <div className="grid-x grid-padding-x align-center align-middle"></div>
            </div>

            {/* Contenido */}
            <div className="grid-container" style={{ paddingTop: '20px' }}>
                <div className="grid-x grid-padding-x align-center">
                    <div className="cell medium-9">
                        <h1 className="titulos_postulaciones">Proceso de Admisión 2026</h1>
                        <br />
                        <h2 className="fechas_postulaciones">Fechas Importantes</h2>
                        <p>
                            <strong>Inicio postulaciones:</strong> Marzo 2025<br />
                            <strong>Cierre postulaciones:</strong> Octubre 2025<br />
                            <strong>Entrevistas:</strong> Septiembre - Noviembre 2025<br />
                            <strong>Resultados:</strong> Diciembre 2025
                        </p>
                        <br />

                        <h2 className="fechas_postulaciones">Descripción del Proceso de Admisión 2026:</h2>
                        <ul className="accordion" data-accordion data-multi-expand="false">
                            <li className="accordion-item" data-accordion-item>
                                <a href="#" className="accordion-title">
                                    <h4>Recepción de postulaciones, entrevistas y visitas guiadas</h4>
                                </a>
                                <div className="accordion-content" data-tab-content>
                                    <p>
                                        Para poder iniciar el proceso de postulación, nos deben hacer llegar la siguiente documentación:
                                    </p>
                                    <ul>
                                        <li>
                                            Carta de motivación con foto familiar donde nos cuenten de su familia y de su interés por entrar a Chilcos.
                                        </li>
                                        <li>
                                            Ficha de Inscripción (solo en caso de que no hayan asistido a la jornada de puertas abiertas).
                                        </li>
                                        <li>
                                            Informe del jardín o colegio actual.
                                        </li>
                                        <li>
                                            Certificado de nacimiento del niño o niña.
                                        </li>
                                    </ul>
                                    <p>
                                        Una vez recibida la documentación, agendaremos una entrevista con la familia y, si es pertinente, una visita guiada al establecimiento.
                                    </p>
                                </div>
                            </li>

                            <li className="accordion-item" data-accordion-item>
                                <a href="#" className="accordion-title">
                                    <h4>Período de prueba</h4>
                                </a>
                                <div className="accordion-content" data-tab-content>
                                    <p>
                                        Dependiendo de cada caso, se puede solicitar un período de prueba del niño o niña en el nivel correspondiente. Este período permite evaluar la adaptación del estudiante al ambiente Waldorf.
                                    </p>
                                </div>
                            </li>

                            <li className="accordion-item" data-accordion-item>
                                <a href="#" className="accordion-title">
                                    <h4>Resolución y matrícula</h4>
                                </a>
                                <div className="accordion-content" data-tab-content>
                                    <p>
                                        Luego del proceso de admisión, se comunicará la resolución a las familias. En caso de ser aceptados, se procederá con el proceso de matrícula y bienvenida a la comunidad Chilcos.
                                    </p>
                                </div>
                            </li>

                            <li className="accordion-item" data-accordion-item>
                                <a href="#" className="accordion-title">
                                    <h4>Vacantes disponibles</h4>
                                </a>
                                <div className="accordion-content" data-tab-content>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Nivel</th>
                                                <th>Vacantes 2026</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Kínder</td>
                                                <td>5</td>
                                            </tr>
                                            <tr>
                                                <td>1° Básico</td>
                                                <td>3</td>
                                            </tr>
                                            <tr>
                                                <td>2° - 8° Básico</td>
                                                <td>Según disponibilidad</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                        </ul>
                        <br />
                        
                        <h3>Contacto para Postulaciones</h3>
                        <p>
                            <strong>Email:</strong> <a href="mailto:postulaciones@chilcos.org">postulaciones@chilcos.org</a><br />
                            <strong>Teléfono:</strong> +56 9 1234 5678
                        </p>
                        <br />
                    </div>
                </div>
            </div>
            <br />
        </main>
    );
}

export default Postulacion;