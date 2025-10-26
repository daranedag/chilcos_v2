import React, { useEffect } from "react";
import 'foundation-sites';

import "../assets/css/Home.css";
import Carousel from "../components/Carousel";
import Bienvenida from "../components/Home/Bienvenida";
import SeccionKinder from "../components/Home/SeccionKinder";
import SeccionBasica from "../components/Home/SeccionBasica";
import SeccionComunidad from "../components/Home/SeccionComunidad";
import Quote from "../components/Quote";

const Home = () => {
    useEffect(() => {
        $(document).foundation();
    }, []);

    return(
        <main>
            <div className="grid-container bgImg">
                <Carousel/>
                <Bienvenida/>
            </div>

            <div className="grid-x grid-padding-x align-center grid-contenido">
                <SeccionKinder/>
                <SeccionBasica/>
                <SeccionComunidad/>
            </div>

            <div className="grid-x grid-padding-x align-center align-middle bordes margen">
                <div className="cell medium-9 bordes">
                    <Quote 
                        texto="Una escuela Waldorf es aquella que permite a educadores y padres integrar en la educación todo aquello que desde su conocimiento del ser humano, su conocimiento del mundo y su amor al niño, consideran esencial"
                        autor="Rudolf Steiner"
                    />
                </div>
            </div>
        </main>
    )
}

export default Home;
