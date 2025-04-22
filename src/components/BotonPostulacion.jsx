import React from "react";

import "../assets/css/BotonPostulacion.css";

const BotonPostulacion = ({ texto1, texto2 }) => {
    return (
        <div className="boton-postulacion">
            <div className="boton-postulacion__contenido">
                <p className="boton-postulacion__linea1">{texto1}</p>
                <p className="boton-postulacion__linea2">{texto2}</p>
            </div>
        </div>
    )
}

export default BotonPostulacion;
