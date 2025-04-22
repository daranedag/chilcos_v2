import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import BotonPostulacion from "./BotonPostulacion";

import "../assets/css/Navbar.css";

const Navbar = () => {

    return(
        <div className="grid-container">
            <div className="grid-x grid-padding-x align-center">
                <div className="cell large-auto">
                    <Link to="/" className="logo">
                        <img className="logoLink" src="./logoChilcosColor.png" alt="logo-menu"/>
                    </Link>
                </div>
                <div className="cell large-auto">
                    <ul className="menu">
                        <li><Link to="/nosotros">Sobre Nosotros</Link></li>
                        <li><Link to="/kinder">Kínder</Link></li>
                        <li><Link to="/basica">Básica</Link></li>
                        <li>
                            <Link to="/postulacion">
                                <BotonPostulacion texto1="POSTULACIONES" texto2="2026" />
                            </Link>
                        </li>
                    </ul>
                </div>        
            </div>               
        </div>
    );
}

export default Navbar;