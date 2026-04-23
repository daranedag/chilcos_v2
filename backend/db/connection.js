import pg from "pg";
import "dotenv/config";

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL no está definida en las variables de entorno.");
}

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    // Insforge y la mayoría de providers PostgreSQL en la nube requieren SSL
    ssl: process.env.DATABASE_URL.includes("localhost")
        ? false
        : { rejectUnauthorized: false },
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
});

pool.on("error", (err) => {
    console.error("Error inesperado en el pool de Postgres:", err.message);
});

export default pool;
