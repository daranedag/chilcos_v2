import React from "react";
import { Link } from "react-router-dom";
import BotonCategoria from "../BotonCategoria";

const SeccionComunidad = () => {
    return (
        <div className="cell large-auto">
            <div className="card">
                <Link to="/nosotros">
                    <BotonCategoria texto="COMUNIDAD CHILCOS" colorFondo="#b48dc0"/>
                </Link>
                <div className="card-section">
                    <p>
                        Somos una comunidad educativa que se involucra activamente en cada uno de los procesos, actividades y gestión, regalándonos la posibilidad de crear una comunidad fraterna y unida, generando en los los niños y niñas un sentido de pertenencia muy significativo para su proceso educativo.
                        <Link to="/nosotros"> + info</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SeccionComunidad;
