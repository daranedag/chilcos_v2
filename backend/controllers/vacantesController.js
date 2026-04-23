import pool from "../db/connection.js";

export const getVacantes = async (_req, res) => {
    try {
        const { rows } = await pool.query(
            "SELECT * FROM vacantes WHERE activo = true ORDER BY nivel ASC"
        );
        res.json(rows);
    } catch (err) {
        console.error("getVacantes:", err.message);
        res.status(500).json({ error: "Error al obtener vacantes" });
    }
};
