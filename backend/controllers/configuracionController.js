import pool from "../db/connection.js";

export const getConfiguracion = async (_req, res) => {
    try {
        const { rows } = await pool.query("SELECT clave, valor FROM configuracion ORDER BY clave");
        // Return as a key-value object for easy consumption on the frontend
        const config = Object.fromEntries(rows.map((r) => [r.clave, r.valor]));
        res.json(config);
    } catch (err) {
        console.error("getConfiguracion:", err.message);
        res.status(500).json({ error: "Error al obtener configuración" });
    }
};

export const getConfiguracionByKey = async (req, res) => {
    try {
        const { clave } = req.params;
        const { rows } = await pool.query(
            "SELECT valor FROM configuracion WHERE clave = $1 LIMIT 1",
            [clave]
        );

        if (!rows.length) {
            return res.status(404).json({ error: "Clave no encontrada" });
        }

        res.json({ clave, valor: rows[0].valor });
    } catch (err) {
        console.error("getConfiguracionByKey:", err.message);
        res.status(500).json({ error: "Error al obtener configuración" });
    }
};
