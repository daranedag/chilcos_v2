import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/css/App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Basica from "./pages/Basica";
import Home from "./pages/Home";
import Kinder from "./pages/Kinder";
import Nosotros from "./pages/Nosotros";
import Postulacion from "./pages/Postulacion";


function App() {

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/kinder" element={<Kinder />} />
                <Route path="/basica" element={<Basica />} />
                <Route path="/postulacion" element={<Postulacion />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>   
    )
}

export default App
