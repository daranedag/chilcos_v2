-- =============================================================================
-- Chilcos — Datos iniciales (seed)
-- Ejecutar después de schema.sql
-- =============================================================================

-- ── Staff ─────────────────────────────────────────────────────────────────────
INSERT INTO staff (nombre, rol, area, foto_url, orden) VALUES
-- Kínder
('Carla Olate',          'Kínder',            'kinder',        'PLACEHOLDER_IMG_prof_4',               1),
('María Ignacia Vera',   'Kínder',            'kinder',        'PLACEHOLDER_IMG_prof_maignaciaVera',   2),
('Marcela Viveros',      'Kínder',            'kinder',        'PLACEHOLDER_IMG_prof_9',               3),
-- Básica — jefes de curso
('Ilia Sanhueza',        '1° / Peumos',        'basica',       'PLACEHOLDER_IMG_prof_3',               1),
('Andrea Franco',        '2° / Canelos',       'basica',       'PLACEHOLDER_IMG_prof_7',               2),
('Lorena Hernández',     'Asistente de Básica','basica',       'PLACEHOLDER_IMG_prof_lorena',          3),
('Catalina Budinich',    '3° / Ulmos',         'basica',       'PLACEHOLDER_IMG_prof_6',               4),
('Marisa Balocchi',      '4° y 5°',            'basica',       'PLACEHOLDER_IMG_prof_marisaBalocchi',  5),
('Laurentina Díaz',      '6°',                 'basica',       'PLACEHOLDER_IMG_prof_laurentinaRuiz',  6),
('Constanza Oróstica',   '7°',                 'basica',       'PLACEHOLDER_IMG_prof_constanzaOrostica',7),
-- Especialistas
('Danesa Fuentealba',    'Manualidades',       'especialistas','PLACEHOLDER_IMG_prof_danesaFuentealba',1),
('Héctor Garcés',        'Música / Flauta',    'especialistas','PLACEHOLDER_IMG_prof_hectorGarces',    2),
('Paulina Núñez',        'Movimiento',         'especialistas','PLACEHOLDER_IMG_prof_paulinaNunez',    3),
('Alejandro Luco',       'Carpintería',        'especialistas','PLACEHOLDER_IMG_prof_alejandroLuco',   4),
('Valeria Lavado',       'Inglés',             'especialistas','PLACEHOLDER_IMG_prof_valeriaLavado',   5),
('Ignacia Westermeyer',  'Inglés',             'especialistas','PLACEHOLDER_IMG_prof_ignaciaWestermeyer',6),
-- Instrumentos
('Ruth Pavlich',         'Piano',              'instrumentos', 'PLACEHOLDER_IMG_prof_ruthPavlich',     1),
('Tobías Márquez',       'Piano',              'instrumentos', 'PLACEHOLDER_IMG_prof_tobiasMarquez',   2),
('Luciano Saavedra',     'Piano',              'instrumentos', 'PLACEHOLDER_IMG_prof_lucianoSaavedra', 3),
('Tamara Obando',        'Violín',             'instrumentos', 'PLACEHOLDER_IMG_prof_tamaraObando',    4),
('Mariela González',     'Percusión',          'instrumentos', 'PLACEHOLDER_IMG_prof_marielaGonzalez', 5),
-- Administración y Apoyo
('Paulina Valencia',           'Administración', 'admin',       'PLACEHOLDER_IMG_prof_paulinaValencia', 1),
('Teresita Solo De Zaldívar',  'Administración', 'admin',       'PLACEHOLDER_IMG_prof_teresitaSoloDe',  2),
('Juan Jaramillo',             'Mantención',     'admin',       'PLACEHOLDER_IMG_prof_juanJaramillo',   3),
('Andrea Gatica',              'Aseo Kínder',    'admin',       'PLACEHOLDER_IMG_prof_andreaGatica',    4),
('Alicia Reyes',               'Aseo Básica',    'admin',       'PLACEHOLDER_IMG_prof_aliciaReyes',     5)
ON CONFLICT DO NOTHING;

-- ── Textos de página ──────────────────────────────────────────────────────────
INSERT INTO textos (pagina, seccion, tipo, contenido) VALUES
('nosotros', 'historia_p1',      'parrafo', 'Somos una iniciativa Waldorf que nace en Valdivia el año 2015, impulsada por un grupo de familias que buscaban una educación alternativa para sus hijos e hijas. Comenzamos con un Kínder, y a partir del año 2019 incorporamos la Enseñanza Básica.'),
('nosotros', 'historia_p2',      'parrafo', 'Nuestra pedagogía se basa en la visión antroposófica del ser humano de Rudolf Steiner, reconociendo el desarrollo evolutivo del niño y la niña en sus distintas etapas.'),
('nosotros', 'autogestion_p1',   'parrafo', 'Chilcos es un proyecto sin fines de lucro que funciona bajo el modelo de trimembración social de Rudolf Steiner: las familias y el equipo de educadores co-gestionamos la escuela de forma horizontal y participativa, a través de una Corporación Cultural.'),
('nosotros', 'autogestion_p2',   'parrafo', 'Es importante saber que Chilcos no cuenta con reconocimiento oficial del Ministerio de Educación. Los niños y niñas deben rendir sus exámenes en establecimientos reconocidos externamente.'),
('kinder',   'intro_p1',         'parrafo', 'El lema pedagógico de este primer septenio es "El mundo es bueno". Nuestro objetivo es hacer que los niños y niñas sientan que pueden confiar en que el mundo es un buen lugar donde pueden crecer felices.'),
('kinder',   'intro_p2',         'parrafo', 'La vida cotidiana en el jardín se asemeja a la de una casita, donde realizamos tareas domésticas junto a los niños. Actividades como cocinar, hacer pan, lavar, coser, barrer y cuidar el huerto forman parte esencial de nuestro día a día.'),
('basica',   'intro_p1',         'parrafo', 'El lema pedagógico de este segundo septenio es "El mundo es bello". Aproximadamente a los 7 años al comenzar el segundo septenio, los niños y niñas alcanzan la madurez escolar y entran en una nueva etapa de desarrollo.'),
('home',     'bienvenida',       'parrafo', 'Buscamos crear un entorno de aprendizaje, donde los niños y niñas se puedan desarrollar libremente, aprendiendo a conocerse a sí mismos, a vivir en armonía con los demás y con la naturaleza.'),
('postulacion', 'estado',        'parrafo', 'Las postulaciones se encuentran abiertas.')
ON CONFLICT (pagina, seccion) DO NOTHING;

-- ── Vacantes ──────────────────────────────────────────────────────────────────
INSERT INTO vacantes (nivel, edad_minima, cupos) VALUES
('Maternal',    '2 años (cumplidos al 31-03)',  3),
('Kínder',      '4 años (cumplidos al 31-03)',  5),
('1° básico',   '6 años y 10 meses',            3),
('2° básico',   '7 años y 10 meses',            2),
('3° básico',   '8 años y 10 meses',            2),
('4° básico',   '9 años y 10 meses',            2),
('5° básico',   '10 años y 10 meses',           2),
('6° básico',   '11 años y 10 meses',           2),
('7° básico',   '12 años y 10 meses',           2),
('8° básico',   '13 años y 10 meses',           2)
ON CONFLICT (nivel) DO NOTHING;

-- ── Documentos ────────────────────────────────────────────────────────────────
INSERT INTO documentos (nombre, descripcion, url) VALUES
('Ficha de Postulación 2026', 'Formulario de inscripción para el proceso de admisión 2026', 'PLACEHOLDER_URL_ficha_postulacion_2026.docx')
ON CONFLICT DO NOTHING;

-- ── Configuración ─────────────────────────────────────────────────────────────
INSERT INTO configuracion (clave, valor, descripcion) VALUES
('email_contacto',      'contacto@chilcos.org',    'Email principal de contacto'),
('email_postulacion',   'contacto@chilcos.org',    'Email para postulaciones'),
('telefono',            '+56 9 9511 2089',          'Teléfono de contacto'),
('instagram_url',       'https://www.instagram.com/chilcos.waldorf', 'URL de Instagram'),
('banco_nombre',        'Banco de Chile',           'Nombre del banco para transferencias'),
('banco_cuenta',        '2510130801',               'Número de cuenta corriente'),
('banco_titular',       'Corporación Centro Cultural Chilcos', 'Titular de la cuenta'),
('banco_rut',           '65.114.021-8',             'RUT de la corporación'),
('costo_entrevista',    '25000',                    'Costo de entrevista en pesos chilenos'),
('direccion',           'Chumpullo, Collico, Valdivia', 'Dirección física del establecimiento'),
('google_analytics_id', 'G-VC5BQ5KWW8',            'ID de Google Analytics')
ON CONFLICT (clave) DO UPDATE SET valor = EXCLUDED.valor, actualizado = NOW();
