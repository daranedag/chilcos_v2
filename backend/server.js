import "dotenv/config";
import express from "express";
import cors from "cors";

import staffRouter from "./routes/staff.js";
import textosRouter from "./routes/textos.js";
import vacantesRouter from "./routes/vacantes.js";
import documentosRouter from "./routes/documentos.js";
import configuracionRouter from "./routes/configuracion.js";
import eventosRouter from "./routes/eventos.js";

const app = express();
const PORT = process.env.PORT || 3000;

// ── CORS ─────────────────────────────────────────────────────────────────────
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "http://localhost:5173")
    .split(",")
    .map((o) => o.trim());

app.use(
    cors({
        origin: (origin, callback) => {
            // Allow requests with no origin (e.g. Retool, mobile apps, curl)
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error(`CORS: origen no permitido → ${origin}`));
            }
        },
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// ── Body parsing ──────────────────────────────────────────────────────────────
app.use(express.json({ limit: "1mb" }));

// ── Health check ──────────────────────────────────────────────────────────────
app.get("/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ── Rutas ─────────────────────────────────────────────────────────────────────
app.use("/api/staff", staffRouter);
app.use("/api/textos", textosRouter);
app.use("/api/vacantes", vacantesRouter);
app.use("/api/documentos", documentosRouter);
app.use("/api/configuracion", configuracionRouter);
app.use("/api/eventos", eventosRouter);

// ── 404 ───────────────────────────────────────────────────────────────────────
app.use((_req, res) => {
    res.status(404).json({ error: "Ruta no encontrada" });
});

// ── Error handler ─────────────────────────────────────────────────────────────
app.use((err, _req, res, _next) => {
    console.error(err.message);
    res.status(500).json({ error: "Error interno del servidor" });
});

// ── Servidor ──────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
    console.log(`✓ Chilcos API corriendo en http://localhost:${PORT}`);
});
