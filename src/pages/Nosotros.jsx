import React from "react";
import IMG from "../config/images";
import useFetch from "../hooks/useFetch";
import { getStaff } from "../services/api";
import "../assets/css/Nosotros.css";

// ── Datos de staff usados como fallback mientras la API carga ─────────────────
const STAFF_FALLBACK = {
    kinder: [
        { id: "k1", nombre: "Carla Olate",       rol: "Kínder", foto_url: IMG.staffCarlaOlate },
        { id: "k2", nombre: "María Ignacia Vera", rol: "Kínder", foto_url: IMG.staffMariaIgnaciaVera },
        { id: "k3", nombre: "Marcela Viveros",    rol: "Kínder", foto_url: IMG.staffMarcelaViveros },
    ],
    basica: [
        { id: "b1", nombre: "Ilia Sanhueza",      rol: "1° / Peumos",        foto_url: IMG.staffIliaSanhueza },
        { id: "b2", nombre: "Andrea Franco",      rol: "2° / Canelos",        foto_url: IMG.staffAndreaFranco },
        { id: "b3", nombre: "Lorena Hernández",   rol: "Asistente de Básica", foto_url: IMG.staffLorenaHernandez },
        { id: "b4", nombre: "Catalina Budinich",  rol: "3° / Ulmos",          foto_url: IMG.staffCatalinaBudinich },
        { id: "b5", nombre: "Marisa Balocchi",    rol: "4° y 5°",             foto_url: IMG.staffMarisaBalocchi },
        { id: "b6", nombre: "Laurentina Díaz",    rol: "6°",                  foto_url: IMG.staffLaurentinaRuiz },
        { id: "b7", nombre: "Constanza Oróstica", rol: "7°",                  foto_url: IMG.staffConstanzaOrostica },
    ],
    especialistas: [
        { id: "e1", nombre: "Danesa Fuentealba",   rol: "Manualidades",     foto_url: IMG.staffDanesaFuentealba },
        { id: "e2", nombre: "Héctor Garcés",       rol: "Música / Flauta",  foto_url: IMG.staffHectorGarces },
        { id: "e3", nombre: "Paulina Núñez",       rol: "Movimiento",       foto_url: IMG.staffPaulinaNunez },
        { id: "e4", nombre: "Alejandro Luco",      rol: "Carpintería",      foto_url: IMG.staffAlejandroLuco },
        { id: "e5", nombre: "Valeria Lavado",      rol: "Inglés",           foto_url: IMG.staffValeriaLavado },
        { id: "e6", nombre: "Ignacia Westermeyer", rol: "Inglés",           foto_url: IMG.staffIgnaciaWestermeyer },
    ],
    instrumentos: [
        { id: "i1", nombre: "Ruth Pavlich",     rol: "Piano",     foto_url: IMG.staffRuthPavlich },
        { id: "i2", nombre: "Tobías Márquez",   rol: "Piano",     foto_url: IMG.staffTobiasMarquez },
        { id: "i3", nombre: "Luciano Saavedra", rol: "Piano",     foto_url: IMG.staffLucianoSaavedra },
        { id: "i4", nombre: "Tamara Obando",    rol: "Violín",    foto_url: IMG.staffTamaraObando },
        { id: "i5", nombre: "Mariela González", rol: "Percusión", foto_url: IMG.staffMarielaGonzalez },
    ],
    admin: [
        { id: "a1", nombre: "Paulina Valencia",          rol: "Administración", foto_url: IMG.staffPaulinaValencia },
        { id: "a2", nombre: "Teresita Solo De Zaldívar", rol: "Administración", foto_url: IMG.staffTeresitaSoloDe },
        { id: "a3", nombre: "Juan Jaramillo",            rol: "Mantención",     foto_url: IMG.staffJuanJaramillo },
        { id: "a4", nombre: "Andrea Gatica",             rol: "Aseo Kínder",    foto_url: IMG.staffAndreaGatica },
        { id: "a5", nombre: "Alicia Reyes",              rol: "Aseo Básica",    foto_url: IMG.staffAliciaReyes },
    ],
};

const GRUPOS = [
    { area: "kinder",        titulo: "Kínder" },
    { area: "basica",        titulo: "Jefes de Curso — Básica" },
    { area: "especialistas", titulo: "Especialistas" },
    { area: "instrumentos",  titulo: "Profesores de Instrumentos" },
    { area: "admin",         titulo: "Administración y Apoyo" },
];

const GrupoStaff = ({ titulo, personas }) => (
    <div className="staff-grupo">
        <h3 className="staff-grupo-titulo">{titulo}</h3>
        <div className="grid-x grid-padding-x align-center">
            {personas.map((p) => (
                <div key={p.id} className="cell medium-2 small-4 staff-card">
                    <img className="globos" src={p.foto_url} alt={p.nombre} />
                    <p className="staff-nombre">{p.nombre}</p>
                    <span className="staff-rol">{p.rol}</span>
                </div>
            ))}
        </div>
    </div>
);

const Nosotros = () => {
    const { data: staffData, loading, error } = useFetch(() => getStaff(), []);

    // Agrupa el staff por área (datos de la API) o usa el fallback
    const staffPorArea = React.useMemo(() => {
        if (!staffData) return STAFF_FALLBACK;
        return staffData.reduce((acc, persona) => {
            if (!acc[persona.area]) acc[persona.area] = [];
            acc[persona.area].push(persona);
            return acc;
        }, {});
    }, [staffData]);

    return (
        <main>
            {/* Banner de Encabezado */}
            <div
                className="imgHead"
                style={{ backgroundImage: `url('${IMG.heroNosotros}')` }}
                role="img"
                aria-label="Sobre Nosotros — Comunidad Chilcos"
            >
                <div className="grid-x grid-padding-x align-center align-middle"></div>
            </div>

            {/* Historia y origen */}
            <div className="grid-container" style={{ paddingTop: '2rem' }}>
                <div className="grid-x grid-padding-x align-center">
                    <div className="cell medium-3">
                        <h1 className="seccion-titulo">Sobre<br />Nosotros</h1>
                    </div>
                    <div className="cell medium-6">
                        <p>
                            Somos una iniciativa Waldorf que nace en Valdivia el año 2015, impulsada por un grupo
                            de familias que buscaban una educación alternativa para sus hijos e hijas. Comenzamos
                            con un Kínder, y a partir del año 2019 incorporamos la Enseñanza Básica.
                        </p>
                        <p>
                            Nuestra pedagogía se basa en la visión antroposófica del ser humano de Rudolf Steiner,
                            reconociendo el desarrollo evolutivo del niño y la niña en sus distintas etapas. Buscamos
                            crear un entorno de aprendizaje donde puedan desarrollarse libremente, aprendiendo a
                            conocerse a sí mismos, a vivir en armonía con los demás y con la naturaleza.
                        </p>
                    </div>
                </div>

                {/* Autogestión */}
                <div className="grid-x grid-padding-x align-center" style={{ marginTop: '1.5rem' }}>
                    <div className="cell medium-3">
                        <h2 className="seccion-subtitulo">Autogestión</h2>
                    </div>
                    <div className="cell medium-6">
                        <p>
                            Chilcos es un proyecto sin fines de lucro que funciona bajo el modelo de
                            <strong> trimembración social</strong> de Rudolf Steiner: las familias y el equipo de educadores
                            co-gestionamos la escuela de forma horizontal y participativa, a través de una
                            Corporación Cultural.
                        </p>
                        <p>
                            Es importante saber que Chilcos <strong>no cuenta con reconocimiento oficial del Ministerio de
                            Educación</strong>. Esto significa que los niños y niñas deben rendir sus exámenes en
                            establecimientos reconocidos externamente. Las familias que eligen Chilcos lo hacen
                            con plena conciencia y convicción de este modelo educativo autogestionado.
                        </p>
                    </div>
                </div>
            </div>

            {/* Cita Steiner */}
            <div className="footer" style={{ marginTop: '2rem' }}>
                <div className="grid-x align-center align-middle">
                    <div className="cell medium-6">
                        <blockquote>
                            <br />
                            <h2 className="textoClaro">
                                "El hombre debe rendirse a pensamientos, conceptos y sentimientos originados no en
                                lo temporal sino en lo eterno. Su contenido no debe ser verdadero para hoy, ayer,
                                un siglo o mañana, sino para siempre".
                            </h2>
                            <cite className="text-right textoClaro">Rudolf Steiner</cite>
                        </blockquote>
                    </div>
                </div>
            </div>

            {/* Equipo de Trabajo */}
            <div
                className="grid-container bgImg"
                style={{ paddingTop: '2rem', paddingBottom: '2rem', backgroundPositionY: '-800px' }}
            >
                <div className="grid-x grid-padding-x align-center" style={{ marginBottom: '1.5rem' }}>
                    <div className="cell">
                        <h1 style={{ fontWeight: 'bold', textAlign: 'center' }}>EQUIPO DE TRABAJO</h1>
                    </div>
                </div>

                {loading && (
                    <p style={{ textAlign: 'center', color: '#684b9e' }}>Cargando equipo...</p>
                )}
                {error && (
                    <p style={{ textAlign: 'center', color: '#c0392b' }}>
                        No se pudo cargar el equipo. Mostrando información local.
                    </p>
                )}

                {GRUPOS.map(({ area, titulo }) =>
                    (staffPorArea[area] || []).length > 0 ? (
                        <GrupoStaff
                            key={area}
                            titulo={titulo}
                            personas={staffPorArea[area]}
                        />
                    ) : null
                )}
            </div>
        </main>
    );
};

export default Nosotros;