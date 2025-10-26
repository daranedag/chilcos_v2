import React from "react";
import { Link } from "react-router-dom";
import BotonCategoria from "../BotonCategoria";

const SeccionKinder = () => {
    return (
        <div className="cell large-auto">
            <div className="card">
                <Link to="/kinder">
                    <BotonCategoria texto="KÍNDER" colorFondo="#FF5E99"/>
                </Link>
                <div className="card-section">
                    <p>
                        En el kínder, ofrecemos a los niños y niñas un entorno cuidado para que día a día; a través del juego libre, el contacto con la naturaleza y los trabajos cotidianos de la casa y el jardín; vayan desarrollándose de manera saludable. 
                        <Link to="/kinder"> + info</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SeccionKinder;
