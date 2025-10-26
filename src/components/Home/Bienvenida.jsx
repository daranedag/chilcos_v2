import React from "react";
import { Link } from "react-router-dom";

const Bienvenida = () => {
    return (
        <div className="grid-x grid-padding-x align-center">
            <div className="cell medium-4 bordes">
                <h1>Bienvenidos</h1>
                <p>
                    Buscamos crear un entorno de aprendizaje, donde los niños y niñas se
                    puedan desarrollar libremente, aprendiendo a conocerse a sí mismos, a vivir en armonía con los demás y con la naturaleza.
                </p>
                <blockquote>    
                    <h2>"La pedagogía Waldorf no es un sistema educativo, sino un arte. El arte de despertar lo que hay dentro de cada ser humano".</h2>
                    <cite className="text-right">Rudolf Steiner </cite>
                </blockquote>
            </div>
            <div className="cell medium-4 bordes">
                <Link to="/postulacion">
                    <img className="imgBienvenida" alt="foto" src="../src/assets/img/postulacion1.jpg" />
                </Link>
            </div>
        </div>
    );
};

export default Bienvenida;
