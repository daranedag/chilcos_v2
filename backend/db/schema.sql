-- =============================================================================
-- Chilcos — Schema de base de datos (PostgreSQL / Insforge)
-- Ejecutar en orden: schema.sql primero, luego seed.sql
-- =============================================================================

-- ── Staff ─────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS staff (
    id          SERIAL PRIMARY KEY,
    nombre      VARCHAR(120)  NOT NULL,
    rol         VARCHAR(120)  NOT NULL,
    area        VARCHAR(80)   NOT NULL,   -- 'kinder' | 'basica' | 'especialistas' | 'instrumentos' | 'admin'
    foto_url    TEXT,
    orden       SMALLINT      NOT NULL DEFAULT 99,
    activo      BOOLEAN       NOT NULL DEFAULT TRUE,
    creado_en   TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
    actualizado TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

-- ── Textos de página ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS textos (
    id          SERIAL PRIMARY KEY,
    pagina      VARCHAR(60)   NOT NULL,   -- 'home' | 'kinder' | 'basica' | 'nosotros' | 'postulacion'
    seccion     VARCHAR(60)   NOT NULL,   -- identificador de bloque dentro de la página
    tipo        VARCHAR(30)   NOT NULL DEFAULT 'parrafo',  -- 'parrafo' | 'titulo' | 'cita' | 'lista'
    contenido   TEXT          NOT NULL,
    activo      BOOLEAN       NOT NULL DEFAULT TRUE,
    creado_en   TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
    actualizado TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
    UNIQUE (pagina, seccion)
);

-- ── Vacantes ──────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS vacantes (
    id              SERIAL PRIMARY KEY,
    nivel           VARCHAR(60)   NOT NULL UNIQUE,
    edad_minima     VARCHAR(60),
    cupos           SMALLINT      NOT NULL DEFAULT 0,
    activo          BOOLEAN       NOT NULL DEFAULT TRUE,
    creado_en       TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
    actualizado     TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

-- ── Documentos ────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS documentos (
    id          SERIAL PRIMARY KEY,
    nombre      VARCHAR(120)  NOT NULL,
    descripcion TEXT,
    url         TEXT          NOT NULL,
    activo      BOOLEAN       NOT NULL DEFAULT TRUE,
    creado_en   TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
    actualizado TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

-- ── Configuración ─────────────────────────────────────────────────────────────
-- Almacena pares clave-valor para datos configurables: banco, contacto, redes.
CREATE TABLE IF NOT EXISTS configuracion (
    clave       VARCHAR(80)   PRIMARY KEY,
    valor       TEXT          NOT NULL,
    descripcion TEXT,
    actualizado TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

-- ── Eventos ───────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS eventos (
    id          SERIAL PRIMARY KEY,
    titulo      VARCHAR(200)  NOT NULL,
    contenido   TEXT,
    fecha       DATE          NOT NULL,
    activo      BOOLEAN       NOT NULL DEFAULT TRUE,
    creado_en   TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
    actualizado TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

-- ── Triggers: actualizado automático ──────────────────────────────────────────
CREATE OR REPLACE FUNCTION set_actualizado()
RETURNS TRIGGER AS $$
BEGIN
    NEW.actualizado = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DO $$
DECLARE
    t TEXT;
BEGIN
    FOREACH t IN ARRAY ARRAY['staff','textos','vacantes','documentos','eventos']
    LOOP
        EXECUTE format(
            'DROP TRIGGER IF EXISTS trg_%I_actualizado ON %I;
             CREATE TRIGGER trg_%I_actualizado
             BEFORE UPDATE ON %I
             FOR EACH ROW EXECUTE FUNCTION set_actualizado();',
            t, t, t, t
        );
    END LOOP;
END;
$$;
