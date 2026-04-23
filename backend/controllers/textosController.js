import pool from "../db/connection.js";

export const getTextos = async (req, res) => {
    try {
        const { pagina } = req.query;
        let query = "SELECT * FROM textos WHERE activo = true";
        const params = [];

        if (pagina) {
            params.push(pagina);
            query += ` AND pagina = $${params.length}`;
        }

        query += " ORDER BY pagina, seccion";
        const { rows } = await pool.query(query, params);
        res.json(rows);
    } catch (err) {
        console.error("getTextos:", err.message);
        res.status(500).json({ error: "Error al obtener textos" });
    }
};

export const getTexto = async (req, res) => {
    try {
        const { pagina, seccion } = req.params;
        const { rows } = await pool.query(
            "SELECT * FROM textos WHERE pagina = $1 AND seccion = $2 AND activo = true LIMIT 1",
            [pagina, seccion]
        );

        if (!rows.length) {
            return res.status(404).json({ error: "Texto no encontrado" });
        }

        res.json(rows[0]);
    } catch (err) {
        console.error("getTexto:", err.message);
        res.status(500).json({ error: "Error al obtener el texto" });
    }
};
