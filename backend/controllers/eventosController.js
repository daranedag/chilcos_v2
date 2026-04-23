import pool from "../db/connection.js";

export const getEventos = async (_req, res) => {
    try {
        const { rows } = await pool.query(
            "SELECT * FROM eventos WHERE activo = true ORDER BY fecha DESC"
        );
        res.json(rows);
    } catch (err) {
        console.error("getEventos:", err.message);
        res.status(500).json({ error: "Error al obtener eventos" });
    }
};
