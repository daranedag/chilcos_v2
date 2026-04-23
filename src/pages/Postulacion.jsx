import React, { useEffect } from "react";
import IMG from "../config/images";
import useFetch from "../hooks/useFetch";
import { getVacantes, getDocumentos, getConfiguracion } from "../services/api";
import "../assets/css/Postulacion.css";

// Fallback data while API loads
const VACANTES_FALLBACK = [
    { nivel: "Maternal",   edad_minima: "2 años (cumplidos al 31-03-2026)" },
    { nivel: "Pre-kínder", edad_minima: "3 años (cumplidos al 31-03-2026)" },
    { nivel: "Kínder",     edad_minima: "5 años (cumplidos al 31-03-2026)" },
    { nivel: "1° básico",  edad_minima: "6 años y 10 meses" },
    { nivel: "2° básico",  edad_minima: "7 años y 10 meses" },
    { nivel: "3° básico",  edad_minima: "8 años y 10 meses" },
    { nivel: "4° básico",  edad_minima: "9 años y 10 meses" },
    { nivel: "5° básico",  edad_minima: "10 años y 10 meses" },
    { nivel: "6° básico",  edad_minima: "11 años y 10 meses" },
    { nivel: "7° básico",  edad_minima: "12 años y 10 meses" },
    { nivel: "8° básico",  edad_minima: "13 años y 10 meses" },
];

const CONFIG_FALLBACK = {
    email_contacto:   "contacto@chilcos.org",
    telefono:         "+56 9 9511 2089",
    banco_nombre:     "Banco de Chile",
    banco_cuenta:     "2510130801",
    banco_titular:    "Corporación Centro Cultural Chilcos",
    banco_rut:        "65.114.021-8",
    costo_entrevista: "25000",
};

const FICHA_FALLBACK_URL = "PLACEHOLDER_URL_ficha_postulacion_2026.docx";

const Postulacion = () => {
    const { data: vacantes } = useFetch(() => getVacantes(), []);
    const { data: documentos } = useFetch(() => getDocumentos(), []);
    const { data: config } = useFetch(() => getConfiguracion(), []);

    const cfg = config || CONFIG_FALLBACK;
    const listaVacantes = vacantes || VACANTES_FALLBACK;
    const ficha = documentos?.find((d) => d.nombre.toLowerCase().includes("postulación")) || null;
    const fichaUrl = ficha?.url || FICHA_FALLBACK_URL;
    const costoEntrevista = Number(cfg.costo_entrevista || 25000).toLocaleString("es-CL");
    useEffect(() => {
        $(document).foundation();
    }, []);

    return (
        <main>
            {/* Banner de Encabezado */}
            <div
                className="imgHead"
                style={{ backgroundImage: `url('${IMG.heroPostulacion}')` }}
                role="img"
                aria-label="Proceso de Admisión Chilcos"
            >
                <div className="grid-x grid-padding-x align-center align-middle"></div>
            </div>

            {/* Contenido principal */}
            <div className="grid-container" style={{ paddingTop: '2rem' }}>
                <div className="grid-x grid-padding-x align-center">

                    {/* Columna izquierda: info de contacto y descarga */}
                    <div className="cell medium-3">
                        <h1 className="seccion-titulo">Admisión<br />2026</h1>
                        <br />

                        <p>Las postulaciones se encuentran <strong>abiertas</strong>.</p>

                        <a
                            className="descargar button"
                            href={fichaUrl}
                            download
                            rel="noopener noreferrer"
                        >
                            Descargar Ficha de Postulación
                        </a>
                        <br /><br />

                        <p>
                            <strong>Email:</strong>{" "}
                            <a href={`mailto:${cfg.email_contacto}`}>{cfg.email_contacto}</a>
                        </p>
                        <p>
                            <strong>Teléfono:</strong>{" "}
                            <a href={`tel:${cfg.telefono?.replace(/\s/g, "")}`}>{cfg.telefono}</a>
                        </p>
                        <br />

                        <p><strong>Transferencia bancaria para entrevista:</strong></p>
                        <ul className="datos-bancarios">
                            <li>{cfg.banco_titular}</li>
                            <li>RUT: {cfg.banco_rut}</li>
                            <li>{cfg.banco_nombre}</li>
                            <li>Cta. Cte.: {cfg.banco_cuenta}</li>
                        </ul>
                        <br />

                        <table>
                            <thead>
                                <tr>
                                    <th>Nivel</th>
                                    <th>Edad mínima al 31-03-2026</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaVacantes.map((v) => (
                                    <tr key={v.nivel}>
                                        <td>{v.nivel}</td>
                                        <td>{v.edad_minima}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Columna derecha: proceso de admisión */}
                    <div className="cell medium-6">
                        <h2>Proceso de Admisión</h2>
                        <p>
                            Te invitamos a conocer nuestra comunidad. A continuación encontrarás los pasos
                            del proceso de admisión para el año 2026.
                        </p>
                        <br />

                        <ul className="accordion" data-accordion data-multi-expand="false">

                            <li className="accordion-item is-active" data-accordion-item>
                                <a href="#" className="accordion-title">
                                    <h4>1. Recepción de documentación</h4>
                                </a>
                                <div className="accordion-content" data-tab-content>
                                    <p>
                                        Para iniciar el proceso de postulación, debes hacernos llegar la siguiente documentación:
                                    </p>
                                    <ul>
                                        <li>
                                            Carta de motivación con foto familiar donde nos cuenten de su familia y de su
                                            interés por entrar a Chilcos.
                                        </li>
                                        <li>
                                            Ficha de Inscripción completa (disponible para descarga).
                                        </li>
                                        <li>
                                            Informe del jardín o colegio actual.
                                        </li>
                                        <li>
                                            Certificado de nacimiento del niño o niña.
                                        </li>
                                        <li>
                                            Comprobante de transferencia del costo de entrevista ($25.000).
                                        </li>
                                        <li>
                                            En caso de existir: informes de especialistas (fonoaudiología,
                                            psicología, neurología, etc.).
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="accordion-item" data-accordion-item>
                                <a href="#" className="accordion-title">
                                    <h4>2. Proceso de evaluación</h4>
                                </a>
                                <div className="accordion-content" data-tab-content>
                                    <p>
                                        Una vez recibida la documentación, el equipo de Chilcos evaluará la postulación
                                        y se contactará para agendar una entrevista con la familia. En algunos casos se
                                        realizará también una visita guiada al establecimiento.
                                    </p>
                                    <p>
                                        El costo de la entrevista es de <strong>${costoEntrevista}</strong>, pagadero mediante
                                        transferencia bancaria antes de la fecha acordada.
                                    </p>
                                </div>
                            </li>

                            <li className="accordion-item" data-accordion-item>
                                <a href="#" className="accordion-title">
                                    <h4>3. Resultados</h4>
                                </a>
                                <div className="accordion-content" data-tab-content>
                                    <p>
                                        Los resultados del proceso de admisión serán comunicados a las familias
                                        vía correo electrónico.
                                    </p>
                                </div>
                            </li>

                            <li className="accordion-item" data-accordion-item>
                                <a href="#" className="accordion-title">
                                    <h4>4. Plazo para matrícula</h4>
                                </a>
                                <div className="accordion-content" data-tab-content>
                                    <p>
                                        Las familias seleccionadas contarán con un plazo definido para confirmar
                                        y formalizar la matrícula mediante el pago correspondiente. Pasado dicho
                                        plazo, el cupo quedará disponible para otras familias en lista de espera.
                                    </p>
                                </div>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
            <br />
        </main>
    );
};

export default Postulacion;
