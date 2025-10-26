import React from "react";
import { Link } from "react-router-dom";
import BotonCategoria from "../BotonCategoria";

const SeccionBasica = () => {
    return (
        <div className="cell large-auto">
            <div className="card">
                <Link to="/basica">
                    <BotonCategoria texto="BÁSICA" colorFondo="#b5d361"/>
                </Link>
                <div className="card-section">
                    <p>
                        En esta etapa, guiamos a los niños y niñas en el proceso de ir descubriendo el mundo a través de actividades prácticas. El arte, el movimiento, el trabajo manual de los oficios y el contacto con la naturaleza son las herramientas para hacer del trabajo en la escuela un proceso significativo para su sano crecimiento y una relación con el mundo verdadera.
                        <Link to="/basica"> + info</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SeccionBasica;
