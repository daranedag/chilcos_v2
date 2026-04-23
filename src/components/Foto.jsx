import React from "react";

/**
 * Foto — muestra una imagen de galería con caption opcional.
 * Props:
 *   src      — URL de la imagen
 *   alt      — texto alternativo
 *   caption  — texto debajo de la imagen (opcional)
 *   className — clases adicionales (opcional)
 */
const Foto = ({ src, alt = "Foto Chilcos", caption, className = "" }) => {
    return (
        <figure className={`foto-wrapper ${className}`}>
            <img src={src} alt={alt} className="foto-img" />
            {caption && <figcaption className="foto-caption">{caption}</figcaption>}
        </figure>
    );
};

export default Foto;
