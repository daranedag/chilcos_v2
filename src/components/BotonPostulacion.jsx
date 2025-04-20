import React from "react";

import "../assets/css/BotonPostulacion.css";

const BotonPostulacion = ({ texto1, texto2 }) => {
    return (
        <div className="boton-postulacion">
            <span>{texto1}</span>
            <span>{texto2}</span>
        </div>
    )
}

export default BotonPostulacion;
