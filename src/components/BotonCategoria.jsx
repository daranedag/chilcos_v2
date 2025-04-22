import React from "react";

import "../assets/css/BotonCategoria.css";

const BotonCategoria = ({ texto, colorFondo }) => {
    return (
        <div
            className="boton-categoria"
            style={{ backgroundColor: colorFondo }}
        >
            <span className="boton-categoria__texto">{texto}</span>
        </div>
    )
}

export default BotonCategoria;
