import pool from "../db/connection.js";

export const getDocumentos = async (_req, res) => {
    try {
        const { rows } = await pool.query(
            "SELECT * FROM documentos WHERE activo = true ORDER BY nombre ASC"
        );
        res.json(rows);
    } catch (err) {
        console.error("getDocumentos:", err.message);
        res.status(500).json({ error: "Error al obtener documentos" });
    }
};
