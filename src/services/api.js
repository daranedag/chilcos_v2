import axios from "axios";

/**
 * Base URL of the backend API.
 * In development: set VITE_API_URL in a .env.local file.
 * In production: set the environment variable in GitHub repository secrets / Vite build config.
 *
 * Example .env.local:
 *   VITE_API_URL=http://localhost:3000
 *
 * Example production:
 *   VITE_API_URL=https://chilcos-api.up.railway.app
 */
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

// ── Staff ────────────────────────────────────────────────────────────────────
export const getStaff = () => api.get("/api/staff");
export const getStaffByArea = (area) => api.get(`/api/staff?area=${encodeURIComponent(area)}`);

// ── Textos de página ─────────────────────────────────────────────────────────
export const getTextos = (pagina) => api.get(`/api/textos?pagina=${encodeURIComponent(pagina)}`);
export const getTexto = (pagina, seccion) =>
    api.get(`/api/textos/${encodeURIComponent(pagina)}/${encodeURIComponent(seccion)}`);

// ── Vacantes ─────────────────────────────────────────────────────────────────
export const getVacantes = () => api.get("/api/vacantes");

// ── Documentos ───────────────────────────────────────────────────────────────
export const getDocumentos = () => api.get("/api/documentos");

// ── Configuración (banco, contacto, redes sociales) ──────────────────────────
export const getConfiguracion = () => api.get("/api/configuracion");
export const getConfiguracionByKey = (clave) =>
    api.get(`/api/configuracion/${encodeURIComponent(clave)}`);

// ── Eventos ───────────────────────────────────────────────────────────────────
export const getEventos = () => api.get("/api/eventos");

export default api;
