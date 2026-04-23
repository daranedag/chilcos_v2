import React from "react";
import IMG from "../config/images";
import "../assets/css/Basica.css";

const Basica = () => {
    return (
        <main>
            {/* Banner de Encabezado */}
            <div
                className="imgHead"
                style={{ backgroundImage: `url('${IMG.heroBasica}')` }}
                role="img"
                aria-label="Básica — Comunidad Chilcos"
            >
                <div className="grid-x grid-padding-x align-center align-middle"></div>
            </div>

            {/* Contenido */}
            <div className="grid-container" style={{ paddingTop: '20px' }}>
                <div className="grid-x grid-padding-x align-center">
                    <div className="cell medium-3">
                        <h1 style={{ fontWeight: 'bold' }}>Básica</h1>
                    </div>
                    <div className="cell medium-6">
                        <p>
                            El lema pedagógico de este segundo septenio es <strong>"El mundo es bello"</strong>. Aproximadamente a los 7 años, al comenzar el segundo septenio, los niños y niñas alcanzan la madurez escolar y entran en una nueva etapa de desarrollo. En esta fase, empieza a despertar un genuino interés por aprender sobre su entorno. Guiamos a los niños en la exploración del mundo a través de actividades prácticas. El arte, el movimiento, el trabajo manual y el contacto con la naturaleza son herramientas esenciales que convierten el proceso educativo en una experiencia significativa, favoreciendo un crecimiento sano y una conexión auténtica con el mundo.
                        </p>
                        <p>
                            El maestro o maestra acompaña a los niños y niñas en su proceso de aprendizaje durante varios años, creando un vínculo profundo basado en la confianza y el cariño. Este acompañamiento continuo permite que el educador conozca a fondo a cada estudiante y adapte su enseñanza a sus necesidades individuales.
                        </p>
                        <p>
                            El currículo se organiza en torno a periodos de tres o cuatro semanas, denominados épocas. Esta metodología permite sumergirse profundamente en un tema antes de pasar al siguiente. Presentamos el contenido de las distintas materias de manera bella, respetando la etapa de desarrollo de los niños y buscando integrar el pensamiento, el sentir y el hacer. El uso del arte en la metodología facilita la conexión entre estas dimensiones, dotando de significado cada experiencia educativa.
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
                                El arte, el movimiento, el trabajo manual y el contacto con la naturaleza son herramientas esenciales que convierten el proceso educativo en una experiencia significativa
                            </h2>
                            <cite className="text-right textoClaro">Comunidad Chilcos</cite>
                        </blockquote>
                    </div>
                </div>
            </div>

            {/* Tabla de edades por curso */}
            <div className="grid-container" style={{ paddingTop: '20px' }}>
                <div className="grid-x grid-padding-x align-center">
                    <div className="cell medium-3">
                        <h1 style={{ fontWeight: 'bold' }}></h1>
                    </div>
                    <div className="cell medium-6">
                        <table>
                            <thead>
                                <tr>
                                    <th>Cursos</th>
                                    <th>Edad mínima al 31-03-2026</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1° básico</td>
                                    <td>6 años y 10 meses</td>
                                </tr>
                                <tr>
                                    <td>2° básico</td>
                                    <td>7 años y 10 meses</td>
                                </tr>
                                <tr>
                                    <td>3° básico</td>
                                    <td>8 años y 10 meses</td>
                                </tr>
                                <tr>
                                    <td>4° básico</td>
                                    <td>9 años y 10 meses</td>
                                </tr>
                                <tr>
                                    <td>5° básico</td>
                                    <td>10 años y 10 meses</td>
                                </tr>
                                <tr>
                                    <td>6° básico</td>
                                    <td>11 años y 10 meses</td>
                                </tr>
                                <tr>
                                    <td>7° básico</td>
                                    <td>12 años y 10 meses</td>
                                </tr>
                                <tr>
                                    <td>8° básico</td>
                                    <td>13 años y 10 meses</td>
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
                                    <td>Tamaño de grupo</td>
                                    <td>Máximo 15 estudiantes por curso</td>
                                </tr>
                                <tr>
                                    <td>Modelo docente</td>
                                    <td>Maestro o maestra jefe que acompaña al grupo durante varios años</td>
                                </tr>
                                <tr>
                                    <td>Horario 1° a 4°</td>
                                    <td>Lunes a martes 8:15–15:30, miércoles a viernes 8:15–13:00</td>
                                </tr>
                                <tr>
                                    <td>Horario 5° a 8°</td>
                                    <td>Lunes a jueves 8:15–15:30, viernes 8:15–13:00</td>
                                </tr>
                                <tr>
                                    <td>Talleres extracurriculares</td>
                                    <td>Disponibles en jornada tarde (consultar disponibilidad)</td>
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

export default Basica;