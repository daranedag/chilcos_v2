import pool from "../db/connection.js";

export const getAllStaff = async (req, res) => {
    try {
        const { area } = req.query;
        let query = "SELECT * FROM staff WHERE activo = true";
        const params = [];

        if (area) {
            params.push(area);
            query += ` AND area = $${params.length}`;
        }

        query += " ORDER BY orden ASC, nombre ASC";
        const { rows } = await pool.query(query, params);
        res.json(rows);
    } catch (err) {
        console.error("getAllStaff:", err.message);
        res.status(500).json({ error: "Error al obtener el equipo" });
    }
};
