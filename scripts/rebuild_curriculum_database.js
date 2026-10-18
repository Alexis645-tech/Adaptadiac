const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 1. Obtener la base original de commit c0f5d00 (antes del fallo de export)
const origContent = execSync('git show c0f5d00:js/curriculum-data.js').toString();
const tempOrigPath = path.join(__dirname, 'temp_c0f5d00.js');
fs.writeFileSync(tempOrigPath, origContent, 'utf-8');
const originalModule = require(tempOrigPath);
fs.unlinkSync(tempOrigPath);

const { SUBNIVELES, AREAS, PERFILES_COGNITIVOS, GRADOS_ADAPTACION } = originalModule;
let baseDCDs = [...originalModule.DCD_DATABASE];

console.log(`[Rebuild] DCDs base de c0f5d00 cargadas: ${baseDCDs.length}`);

// 2. Destrezas adicionales complementarias de alta calidad pedagógica (con todos los campos oficiales)
const additionalDCDs = [
  // ==========================================
  // PREPARATORIA (1.° EGB)
  // ==========================================
  {
    codigo: 'M.1.4.1',
    subnivel: 'preparatoria',
    area: 'matematica',
    titulo: 'Reconocimiento y clasificación de colores primarios y secundarios',
    descripcion: 'M.1.4.1. Reconocer los colores primarios: rojo, amarillo y azul; los colores blanco y negro y secundarios en objetos del entorno.',
    criterioEvaluacion: 'CE.M.1.1. Clasifica objetos del entorno según sus características físicas.',
    indicadorEvaluacion: 'I.M.1.1.1. Compara y distingue objetos según su color primario o secundario.',
    habilidad: 'Reconocer, discriminar y clasificar',
    conocimiento: 'Colores primarios y secundarios en material concreto',
    contexto: 'Rincón de arte y manipulación de bloques de construcción',
    nivelCognitivo: 'Sensoriomotor / Preoperacional'
  },
  {
    codigo: 'M.1.4.2',
    subnivel: 'preparatoria',
    area: 'matematica',
    titulo: 'Descripción y reproducción de patrones simples',
    descripcion: 'M.1.4.2. Describir y reproducir patrones con objetos del entorno por color, forma, tamaño o longitud.',
    criterioEvaluacion: 'CE.M.1.1. Identifica regularidades y secuencias perceptivas simples.',
    indicadorEvaluacion: 'I.M.1.1.2. Continúa y reproduce secuencias lógicas de dos elementos.',
    habilidad: 'Secuenciar, ordenar y anticipar',
    conocimiento: 'Patrones alternados por color y forma',
    contexto: 'Juegos de mesa, ensartado de cuentas y fichas lúdicas',
    nivelCognitivo: 'Preoperacional'
  },
  {
    codigo: 'LL.1.5.8',
    subnivel: 'preparatoria',
    area: 'lengua',
    titulo: 'Diferenciación entre imagen y texto escrito',
    descripcion: 'LL.1.5.8. Diferenciar entre imagen y texto escrito en diversos materiales del entorno impreso y digital.',
    criterioEvaluacion: 'CE.LL.1.4. Reconoce la función del texto frente a las imágenes en su entorno.',
    indicadorEvaluacion: 'I.LL.1.4.1. Señala dónde está el texto para leer y dónde la ilustración.',
    habilidad: 'Discriminar, señalar y explorar',
    conocimiento: 'Portadores de texto, rótulos, etiquetas e imágenes',
    contexto: 'Biblioteca de aula, cuentos gigantes y etiquetas del salón',
    nivelCognitivo: 'Preoperacional / Simbólico'
  },
  {
    codigo: 'LL.1.5.16',
    subnivel: 'preparatoria',
    area: 'lengua',
    titulo: 'Exploración inicial de palabras mediante pictogramas y fonemas',
    descripcion: 'LL.1.5.16. Explorar la formación de palabras y oraciones sencillas mediante representaciones pictográficas y fonológicas.',
    criterioEvaluacion: 'CE.LL.1.6. Inicia el proceso de codificación escrita con trazos y dibujos.',
    indicadorEvaluacion: 'I.LL.1.6.1. Escribe o dibuja signos propios para comunicar un mensaje a sus pares.',
    habilidad: 'Graficar, codificar y expresar',
    conocimiento: 'Escritura emergente, garabateo controlado y pictogramas',
    contexto: 'Cartas a compañeros, dictado de dibujos y rotulación lúdica',
    nivelCognitivo: 'Preoperacional'
  },
  {
    codigo: 'CS.1.1.2',
    subnivel: 'preparatoria',
    area: 'ciencias_sociales',
    titulo: 'Comunicación de datos personales y sentido de pertenencia',
    descripcion: 'CS.1.1.2. Comunicar sus datos personales para reconocer sus nombres y apellidos, edad, teléfono y el lugar donde vive.',
    criterioEvaluacion: 'CE.CS.1.1. Reconoce y valora su identidad personal y familiar.',
    indicadorEvaluacion: 'I.CS.1.1.2. Expresa su nombre, edad y ubicación familiar con claridad y seguridad.',
    habilidad: 'Comunicar, identificar y autorreconocerse',
    conocimiento: 'Nombres y apellidos, edad, domicilio y número de contacto de emergencia',
    contexto: 'Ronda de preguntas, juegos de rol sobre identificación personal',
    nivelCognitivo: 'Preoperacional'
  },
  {
    codigo: 'CS.1.3.1',
    subnivel: 'preparatoria',
    area: 'ciencias_sociales',
    titulo: 'Ubicación y dependencias de la vivienda y escuela',
    descripcion: 'CS.1.3.1. Identificar las dependencias de las viviendas y su ubicación en relación a puntos de referencia del entorno.',
    criterioEvaluacion: 'CE.CS.1.2. Se orienta en el espacio cercano reconociendo lugares significativos.',
    indicadorEvaluacion: 'I.CS.1.2.1. Describe oralmente su casa y las zonas seguras del aula.',
    habilidad: 'Localizar, describir y orientarse',
    conocimiento: 'Nociones espaciales: arriba/abajo, cerca/lejos, dependencias del hogar',
    contexto: 'Maquetas de cartón, planos vivenciales con tiza en el patio',
    nivelCognitivo: 'Sensoriomotor / Preoperacional'
  },
  {
    codigo: 'CN.1.1.2',
    subnivel: 'preparatoria',
    area: 'ciencias_naturales',
    titulo: 'Partes del cuerpo humano y hábitos de higiene',
    descripcion: 'CN.1.1.2. Identificar y describir las partes visibles del cuerpo humano y practicar hábitos de higiene personal.',
    criterioEvaluacion: 'CE.CN.1.1. Conoce las partes del cuerpo y hábitos saludables de autocuidado.',
    indicadorEvaluacion: 'I.CN.1.1.2. Demuestra prácticas de higiene diaria (lavado de manos, cepillado).',
    habilidad: 'Nombrar, señalar y practicar',
    conocimiento: 'Cabeza, tronco, extremidades, aseo personal diario',
    contexto: 'Espejo corporal, canciones motoras y rutina de lavado',
    nivelCognitivo: 'Preoperacional'
  },

  // ==========================================
  // BASICA ELEMENTAL (2.°, 3.°, 4.° EGB)
  // ==========================================
  {
    codigo: 'M.2.1.2',
    subnivel: 'elemental',
    area: 'matematica',
    titulo: 'Patrones numéricos crecientes y decrecientes con operaciones',
    descripcion: 'M.2.1.2. Describir y reproducir patrones numéricos crecientes con la suma y decrecientes con la resta.',
    criterioEvaluacion: 'CE.M.2.1. Descubre patrones lógicos y numéricos para resolver problemas sencillos.',
    indicadorEvaluacion: 'I.M.2.1.1. Completa secuencias numéricas utilizando operaciones de suma o resta.',
    habilidad: 'Analizar, deducir y generalizar patrones',
    conocimiento: 'Secuencias numéricas de 2 en 2, 5 en 5 y 10 en 10',
    contexto: 'Tablas de 100 números, saltos en la semirrecta numérica',
    nivelCognitivo: 'Transición Preoperacional a Concreto'
  },
  {
    codigo: 'M.2.1.19',
    subnivel: 'elemental',
    area: 'matematica',
    titulo: 'Resolución de problemas de adición con material concreto',
    descripcion: 'M.2.1.19. Relacionar la noción de adición con la de agregar objetos a un conjunto y resolver problemas de la vida cotidiana.',
    criterioEvaluacion: 'CE.M.2.2. Aplica estrategias de conteo y cálculo de adición en la resolución de problemas.',
    indicadorEvaluacion: 'I.M.2.2.1. Emplea la suma sin reagrupación para solucionar problemas del contexto.',
    habilidad: 'Modelar, sumar y comprobar',
    conocimiento: 'Adición sin reagrupación hasta 999 con Base 10',
    contexto: 'Juegos de tiendita escolar, resolución guiada con material multibase',
    nivelCognitivo: 'Operaciones Concretas'
  },
  {
    codigo: 'M.2.2.5',
    subnivel: 'elemental',
    area: 'matematica',
    titulo: 'Distinción de lados, vértices y frontera en figuras geométricas',
    descripcion: 'M.2.2.5. Distinguir lados, frontera exterior e interior, vértices y ángulos en figuras geométricas: cuadrados, triángulos, rectángulos y círculos.',
    criterioEvaluacion: 'CE.M.2.3. Reconoce elementos constitutivos de polígonos regulares e irregulares.',
    indicadorEvaluacion: 'I.M.2.3.1. Cuenta y señala lados y vértices en figuras bidimensionales.',
    habilidad: 'Medir, trazar y clasificar',
    conocimiento: 'Lados, esquinas (vértices) y líneas rectas y curvas',
    contexto: 'Geoplanos con elásticos, tangram y recortes geométricos',
    nivelCognitivo: 'Operaciones Concretas'
  },
  {
    codigo: 'LL.2.2.1',
    subnivel: 'elemental',
    area: 'lengua',
    titulo: 'Participación espontánea en diálogos y situaciones comunicativas cotidianas',
    descripcion: 'LL.2.2.1. Compartir de manera espontánea sus ideas, experiencias y necesidades en situaciones informales de la vida cotidiana.',
    criterioEvaluacion: 'CE.LL.2.3. Dialoga con claridad respetando turnos de habla y normas de cortesía.',
    indicadorEvaluacion: 'I.LL.2.3.1. Expresa opiniones argumentadas en asambleas de grado.',
    habilidad: 'Escuchar, formular preguntas y relatar',
    conocimiento: 'Turno de conversación, volumen de voz, coherencia temporal',
    contexto: 'Círculo de la mañana, juego del micrófono y narración de anécdotas',
    nivelCognitivo: 'Operaciones Concretas'
  },
  {
    codigo: 'LL.2.4.7',
    subnivel: 'elemental',
    area: 'lengua',
    titulo: 'Aplicación de reglas ortográficas de fonemas y grafemas (c/qu/k, s/c/z)',
    descripcion: 'LL.2.4.7. Aplicar progresivamente las reglas de escritura mediante la reflexión fonológica en la escritura ortográfica de fonemas.',
    criterioEvaluacion: 'CE.LL.2.9. Utiliza elementos gramaticales y ortográficos en sus producciones.',
    indicadorEvaluacion: 'I.LL.2.9.2. Escribe palabras aplicando correctamente correspondencias fonema-grafema.',
    habilidad: 'Reflexionar, corregir y redactar',
    conocimiento: 'Ortografía de ca/que/qui/co/cu, uso de mayúscula y punto final',
    contexto: 'Tarjetas de autodictado, cajas de palabras y escritura en parejas',
    nivelCognitivo: 'Operaciones Concretas'
  },
  {
    codigo: 'CS.2.1.6',
    subnivel: 'elemental',
    area: 'ciencias_sociales',
    titulo: 'Orígenes y características de la parroquia, cantón y provincia',
    descripcion: 'CS.2.1.6. Indagar los orígenes fundacionales y las características más significativas de la localidad, parroquia, cantón y provincia.',
    criterioEvaluacion: 'CE.CS.2.2. Examina la historia y geografía de su comunidad local.',
    indicadorEvaluacion: 'I.CS.2.2.1. Reconoce personajes históricos y tradiciones de su cantón.',
    habilidad: 'Indagar, entrevistar y contrastar',
    conocimiento: 'Fundación local, símbolos patrios de la provincia y leyendas comunitarias',
    contexto: 'Entrevistas a abuelos de la comunidad, croquis y álbum ilustrado',
    nivelCognitivo: 'Operaciones Concretas'
  },
  {
    codigo: 'CS.2.2.1',
    subnivel: 'elemental',
    area: 'ciencias_sociales',
    titulo: 'Orientación con puntos cardinales en la escuela y la comunidad',
    descripcion: 'CS.2.2.1. Reconocer y ubicar los puntos cardinales en la escuela y la comunidad a partir de puntos de referencia y con la ayuda de mapas.',
    criterioEvaluacion: 'CE.CS.2.3. Se orienta espacialmente utilizando coordenadas y puntos cardinales.',
    indicadorEvaluacion: 'I.CS.2.3.1. Localiza sitios de la escuela y su hogar respecto al norte y sur.',
    habilidad: 'Orientar, graficar y localizar',
    conocimiento: 'Puntos cardinales (N, S, E, O), brújula y croquis escolar',
    contexto: 'Orientación con la salida del sol en el patio, búsqueda del tesoro',
    nivelCognitivo: 'Operaciones Concretas'
  },
  {
    codigo: 'CN.2.1.4',
    subnivel: 'elemental',
    area: 'ciencias_naturales',
    titulo: 'Clasificación de animales en vertebrados e invertebrados',
    descripcion: 'CN.2.1.4. Observar y describir las características de los animales y clasificarlos en vertebrados e invertebrados por la presencia o ausencia de columna vertebral.',
    criterioEvaluacion: 'CE.CN.2.2. Clasifica a los seres vivos según criterios morfológicos fundamentales.',
    indicadorEvaluacion: 'I.CN.2.2.1. Clasifica animales de su región identificando su estructura ósea.',
    habilidad: 'Observar, comparar y clasificar',
    conocimiento: 'Columna vertebral, 5 grupos de vertebrados (mamíferos, aves, peces, reptiles, anfibios)',
    contexto: 'Modelos de plastilina con fósforos como columna, fichas zoológicas',
    nivelCognitivo: 'Operaciones Concretas'
  },
  {
    codigo: 'CN.2.2.2',
    subnivel: 'elemental',
    area: 'ciencias_naturales',
    titulo: 'Función coordinada del aparato osteomuscular en el movimiento',
    descripcion: 'CN.2.2.2. Explorar y describir los órganos que permiten el movimiento del cuerpo y ejemplificar la función coordinada del esqueleto y de los músculos.',
    criterioEvaluacion: 'CE.CN.2.4. Comprende el funcionamiento del sistema locomotor y su cuidado.',
    indicadorEvaluacion: 'I.CN.2.4.1. Explica la interacción de huesos, articulaciones y músculos en acciones cotidianas.',
    habilidad: 'Experimentar, describir y cuidar',
    conocimiento: 'Huesos principales, articulaciones (codo, rodilla) y músculos flexores/extensores',
    contexto: 'Brazos mecánicos de cartón con hilos elásticos, simulaciones de flexión',
    nivelCognitivo: 'Operaciones Concretas'
  },

  // ==========================================
  // BASICA MEDIA (5.°, 6.°, 7.° EGB)
  // ==========================================
  {
    codigo: 'M.3.1.9',
    subnivel: 'media',
    area: 'matematica',
    titulo: 'Multiplicación de números naturales y resolución de problemas',
    descripcion: 'M.3.1.9. Reconocer términos y realizar multiplicaciones entre números naturales, aplicando el algoritmo de la multiplicación y con el uso de la tecnología.',
    criterioEvaluacion: 'CE.M.3.1. Aplica el cálculo de operaciones combinadas con números naturales.',
    indicadorEvaluacion: 'I.M.3.1.2. Formula y resuelve problemas multiplicativos del entorno escolar.',
    habilidad: 'Calcular, estimar y resolver',
    conocimiento: 'Factores, producto, multiplicación por 2 y 3 cifras',
    contexto: 'Cálculo de presupuestos escolares y compras colectivas',
    nivelCognitivo: 'Operaciones Concretas'
  },
  {
    codigo: 'M.3.1.28',
    subnivel: 'media',
    area: 'matematica',
    titulo: 'Operaciones con números decimales en situaciones cotidianas',
    descripcion: 'M.3.1.28. Calcular, aplicando algoritmos y la tecnología, sumas, restas, multiplicaciones y divisiones con números decimales.',
    criterioEvaluacion: 'CE.M.3.5. Opera con fracciones y números decimales en contextos reales.',
    indicadorEvaluacion: 'I.M.3.5.1. Aplica las propiedades de las operaciones con decimales con precisión.',
    habilidad: 'Alinear, calcular y verificar',
    conocimiento: 'Décimas, centésimas y milésimas; coma decimal en operaciones',
    contexto: 'Facturas de servicios básicos, mediciones de longitud en educación física',
    nivelCognitivo: 'Operaciones Concretas'
  },
  {
    codigo: 'M.3.2.3',
    subnivel: 'media',
    area: 'matematica',
    titulo: 'Cálculo de perímetros y áreas de paralelogramos y trapecios',
    descripcion: 'M.3.2.3. Identificar paralelogramos y trapecios a partir del análisis de sus lados y de sus ángulos y calcular su perímetro.',
    criterioEvaluacion: 'CE.M.3.7. Explora y calcula perímetros y áreas de polígonos regulares e irregulares.',
    indicadorEvaluacion: 'I.M.3.7.1. Deduce fórmulas de perímetro y las aplica en situaciones prácticas.',
    habilidad: 'Medir, deducir fórmulas y aplicar',
    conocimiento: 'Perímetro (suma de lados), paralelogramos, trapecios y unidades de longitud',
    contexto: 'Medición del cerramiento de canchas y jardineras del colegio',
    nivelCognitivo: 'Operaciones Concretas'
  },
  {
    codigo: 'LL.3.3.2',
    subnivel: 'media',
    area: 'lengua',
    titulo: 'Comprensión de contenidos implícitos mediante inferencias',
    descripcion: 'LL.3.3.2. Comprender los contenidos implícitos de un texto mediante la realización de inferencias fundamentales y valoraciones valorativas.',
    criterioEvaluacion: 'CE.LL.3.3. Establece relaciones de causa-efecto e inferencias en lecturas de diversos géneros.',
    indicadorEvaluacion: 'I.LL.3.3.1. Descifra intenciones no explícitas y formula hipótesis interpretativas.',
    habilidad: 'Inferir, deducir y contrastar',
    conocimiento: 'Pistas textuales, sentido figurado, causa-efecto',
    contexto: 'Clubes de lectura, fábulas y artículos de divulgación infantil',
    nivelCognitivo: 'Operaciones Concretas / Pensamiento Reflexivo'
  },
  {
    codigo: 'LL.3.4.1',
    subnivel: 'media',
    area: 'lengua',
    titulo: 'Redacción de relatos con secuencia lógica y manejo de conectores',
    descripcion: 'LL.3.4.1. Relatar textos con secuencia lógica, manejo de conectores y coherencia en el uso de la persona y del tiempo verbal e integrarlos en diversas situaciones comunicativas.',
    criterioEvaluacion: 'CE.LL.3.6. Produce textos narrativos organizados y estructurados.',
    indicadorEvaluacion: 'I.LL.3.6.1. Escribe crónicas o relatos aplicando conectores temporales y causales.',
    habilidad: 'Planificar, redactar y revisar',
    conocimiento: 'Estructura narrativa (inicio, nudo, desenlace), conectores de orden y causa',
    contexto: 'Periódico mural del curso, bitácora de excursiones',
    nivelCognitivo: 'Operaciones Concretas'
  },
  {
    codigo: 'CS.3.1.9',
    subnivel: 'media',
    area: 'ciencias_sociales',
    titulo: 'La Colonia en la Real Audiencia de Quito y formas de explotación indígena',
    descripcion: 'CS.3.1.9. Identificar a los conquistadores españoles, su relación con los pueblos indígenas y las formas de trabajo colonial (mitas, obrajes, concertaje).',
    criterioEvaluacion: 'CE.CS.3.1. Analiza el proceso colonial en el actual territorio ecuatoriano.',
    indicadorEvaluacion: 'I.CS.3.1.2. Explica las consecuencias sociales y demográficas de la colonización española.',
    habilidad: 'Analizar, contrastar y empatizar',
    conocimiento: 'Mita, obraje, encomienda, mestizaje cultural y resistencia indígena',
    contexto: 'Visitas a museos coloniales o análisis de fuentes gráficas históricas',
    nivelCognitivo: 'Operaciones Concretas'
  },
  {
    codigo: 'CS.3.2.3',
    subnivel: 'media',
    area: 'ciencias_sociales',
    titulo: 'Regiones naturales del Ecuador, relieves y pisos climáticos',
    descripcion: 'CS.3.2.3. Localizar los relieves, suelos y regiones naturales del Ecuador con el apoyo de diversos recursos cartográficos.',
    criterioEvaluacion: 'CE.CS.3.8. Distingue las características geográficas y ecológicas de las cuatro regiones del Ecuador.',
    indicadorEvaluacion: 'I.CS.3.8.1. Relaciona el clima, flora y fauna con las regiones Costa, Sierra, Oriente e Insular.',
    habilidad: 'Cartografiar, comparar y describir',
    conocimiento: 'Cordillera de los Andes, pisos altitudinales y microclimas del país',
    contexto: 'Mapas temáticos de relieve con plastilina y datos meteorológicos locales',
    nivelCognitivo: 'Operaciones Concretas'
  },
  {
    codigo: 'CN.3.1.9',
    subnivel: 'media',
    area: 'ciencias_naturales',
    titulo: 'Ecosistemas del Ecuador y conservación en áreas protegidas',
    descripcion: 'CN.3.1.9. Indagar sobre los ecosistemas de Ecuador y describir las características de las áreas protegidas del país y las amenazas a su biodiversidad.',
    criterioEvaluacion: 'CE.CN.3.3. Analiza los factores de equilibrio ecológico y propuestas de conservación.',
    indicadorEvaluacion: 'I.CN.3.3.1. Diseña planes sencillos para proteger ecosistemas frágiles de su localidad.',
    habilidad: 'Indagar, diagnosticar y proponer soluciones ecológicas',
    conocimiento: 'SNAP (Sistema Nacional de Áreas Protegidas), cadenas tróficas, especies endémicas',
    contexto: 'Proyectos de huerto escolar, campañas de reciclaje y debates sobre deforestación',
    nivelCognitivo: 'Operaciones Concretas'
  },
  {
    codigo: 'CN.3.2.1',
    subnivel: 'media',
    area: 'ciencias_naturales',
    titulo: 'Estructura y función integrada de los sistemas de nutrición humana',
    descripcion: 'CN.3.2.1. Indagar y describir la estructura y función de los sistemas digestivo, respiratorio, circulatorio y excretor, y promover su cuidado.',
    criterioEvaluacion: 'CE.CN.3.5. Explica la relación entre nutrición, respiración y excreción celular.',
    indicadorEvaluacion: 'I.CN.3.5.1. Modela el recorrido de nutrientes y oxígeno en el organismo.',
    habilidad: 'Relacionar funciones, modelar y promover estilos de vida saludable',
    conocimiento: 'Interacción digestiva-circulatoria y pautas de nutrición balanceada',
    contexto: 'Modelos con tubos transparentes y bombas de agua para simular circulación',
    nivelCognitivo: 'Operaciones Concretas'
  },

  // ==========================================
  // BASICA SUPERIOR (8.°, 9.°, 10.° EGB)
  // ==========================================
  {
    codigo: 'M.4.1.14',
    subnivel: 'superior',
    area: 'matematica',
    titulo: 'Operaciones y conversiones entre decimales y fracciones en Q',
    descripcion: 'M.4.1.14. Representar y reconocer los números racionales a través de expresiones decimales y fraccionarias y resolver operaciones básicas en Q.',
    criterioEvaluacion: 'CE.M.4.1. Emplea las relaciones de orden, las propiedades algebraicas y las operaciones en Q.',
    indicadorEvaluacion: 'I.M.4.1.2. Transforma fracciones en decimales exactos o periódicos y opera con ellos.',
    habilidad: 'Convertir, simplificar y operar',
    conocimiento: 'Números racionales, fracción generatriz y proporcionalidad',
    contexto: 'Recetas de cocina a escala, cálculo de descuentos y repartos equitativos',
    nivelCognitivo: 'Transición a Operaciones Formales'
  },
  {
    codigo: 'M.4.1.20',
    subnivel: 'superior',
    area: 'matematica',
    titulo: 'Ecuaciones de primer grado con una incógnita y resolución de problemas',
    descripcion: 'M.4.1.20. Resolver ecuaciones de primer grado con una incógnita en Z y en Q en la solución de problemas contextualizados.',
    criterioEvaluacion: 'CE.M.4.2. Plantea y resuelve ecuaciones e inecuaciones de primer grado con una incógnita.',
    indicadorEvaluacion: 'I.M.4.2.1. Despeja incógnitas y verifica algebraicamente el resultado obtenido.',
    habilidad: 'Traducir lenguaje natural a algebraico, despejar y verificar',
    conocimiento: 'Lenguaje algebraico, propiedades de la igualdad y despeje de variables',
    contexto: 'Problemas de edades, cálculo de distancias y finanzas personales juveniles',
    nivelCognitivo: 'Operaciones Formales'
  },
  {
    codigo: 'M.4.3.1',
    subnivel: 'superior',
    area: 'matematica',
    titulo: 'Medidas de tendencia central y dispersión en datos agrupados y no agrupados',
    descripcion: 'M.4.3.1. Organizar datos no agrupados y agrupados en tablas de frecuencias y calcular la media, mediana, moda y rango.',
    criterioEvaluacion: 'CE.M.4.7. Representa y analiza información estadística con medidas representativas.',
    indicadorEvaluacion: 'I.M.4.7.1. Interpreta la media, mediana y moda para tomar decisiones informadas.',
    habilidad: 'Recolectar, tabular, calcular e interpretar estadísticamente',
    conocimiento: 'Media aritmética, mediana, moda, frecuencias relativas y porcentuales',
    contexto: 'Encuestas sobre uso de redes sociales en la institución educativa',
    nivelCognitivo: 'Operaciones Formales'
  },
  {
    codigo: 'LL.4.3.1',
    subnivel: 'superior',
    area: 'lengua',
    titulo: 'Contraste y evaluación crítica de fuentes y argumentos en textos informativos',
    descripcion: 'LL.4.3.1. Comparar, bajo criterios preestablecidos, las relaciones explícitas entre los contenidos de dos o más textos y contrastar sus fuentes.',
    criterioEvaluacion: 'CE.LL.4.5. Desarrolla criterios de lectura crítica evaluando validez y veracidad.',
    indicadorEvaluacion: 'I.LL.4.5.1. Identifica sesgos, falacias y confiabilidad en fuentes digitales e impresas.',
    habilidad: 'Evaluar, contrastar fuentes y argumentar puntos de vista',
    conocimiento: 'Fuentes primarias y secundarias, fake news, rigor documental',
    contexto: 'Debates sobre noticias virales y ensayos comparativos en clase',
    nivelCognitivo: 'Operaciones Formales'
  },
  {
    codigo: 'LL.4.4.1',
    subnivel: 'superior',
    area: 'lengua',
    titulo: 'Escritura de textos argumentativos y ensayos con estructura formal',
    descripcion: 'LL.4.4.1. Escribir textos periodísticos y académicos con manejo de su estructura básica, y sustentar las ideas con razones y ejemplos organizados de manera jerárquica.',
    criterioEvaluacion: 'CE.LL.4.7. Produce textos argumentativos cohesivos y coherentes.',
    indicadorEvaluacion: 'I.LL.4.7.1. Formula una tesis y la defiende con argumentos lógicos documentados.',
    habilidad: 'Estructurar tesis, redactar argumentos de autoridad y contraargumentar',
    conocimiento: 'Ensayo argumentativo, citas cortas, conectores lógicos de oposición y causa',
    contexto: 'Publicación de cartas al director y debates de oratoria estudiantil',
    nivelCognitivo: 'Operaciones Formales'
  },
  {
    codigo: 'CS.4.1.16',
    subnivel: 'superior',
    area: 'ciencias_sociales',
    titulo: 'Aportes culturales y científicos de las civilizaciones fluviales de la antigüedad',
    descripcion: 'CS.4.1.16. Analizar el origen de los primeros imperios en el Medio Oriente y el Mediterráneo y sus aportes a la cultura universal (escritura, leyes, arquitectura).',
    criterioEvaluacion: 'CE.CS.4.1. Analiza el desarrollo de las civilizaciones antiguas de Oriente y Occidente.',
    indicadorEvaluacion: 'I.CS.4.1.2. Reconoce el legado del Código de Hammurabi, la democracia ateniense y el derecho romano.',
    habilidad: 'Contextualizar cronológicamente, comparar legados jurídicos y sintetizar',
    conocimiento: 'Mesopotamia, Egipto, Grecia y Roma; escritura cuneiforme y jeroglífica',
    contexto: 'Líneas de tiempo interactivas y simulación del senado romano',
    nivelCognitivo: 'Operaciones Formales'
  },
  {
    codigo: 'CS.4.3.1',
    subnivel: 'superior',
    area: 'ciencias_sociales',
    titulo: 'Diversidad étnica y pluriculturalidad en la Constitución ecuatoriana',
    descripcion: 'CS.4.3.1. Apreciar las culturas del Ecuador a partir del estudio de su origen, localización y rasgos más destacados, reconociendo la plurinacionalidad del Estado.',
    criterioEvaluacion: 'CE.CS.4.10. Examina la construcción de la identidad nacional pluricultural.',
    indicadorEvaluacion: 'I.CS.4.10.1. Valora las nacionalidades y pueblos indígenas, afroecuatorianos y montubios.',
    habilidad: 'Valorar la diversidad, cuestionar estereotipos y defender los derechos colectivos',
    conocimiento: 'Plurinacionalidad, justicia indígena, lenguas ancestrales y patrimonio inmaterial',
    contexto: 'Festivales interculturales y análisis de sentencias constitucionales de derechos',
    nivelCognitivo: 'Operaciones Formales'
  },
  {
    codigo: 'CN.4.1.3',
    subnivel: 'superior',
    area: 'ciencias_naturales',
    titulo: 'Diferenciación estructural entre células procariotas y eucariotas al microscopio',
    descripcion: 'CN.4.1.3. Indagar, con uso del microscopio o de las TIC, la estructura y función de las células procariotas y eucariotas, y clasificarlas por sus características.',
    criterioEvaluacion: 'CE.CN.4.2. Explica la complejidad de la organización celular y sus organelos.',
    indicadorEvaluacion: 'I.CN.4.2.1. Identifica núcleo celular, membrana, pared celular y cloroplastos.',
    habilidad: 'Manejar instrumental de laboratorio, esquematizar y clasificar',
    conocimiento: 'ADN disperso vs. carioteca; organelos membranosos en vegetales y animales',
    contexto: 'Observación de células de cebolla y bacterias del yogur en laboratorio',
    nivelCognitivo: 'Operaciones Concretas a Formales'
  },
  {
    codigo: 'CN.4.3.1',
    subnivel: 'superior',
    area: 'ciencias_naturales',
    titulo: 'Concepto de rapidez, velocidad y aceleración en el movimiento rectilíneo',
    descripcion: 'CN.4.3.1. Investigar en forma experimental y explicar la posición de un objeto respecto a un punto de referencia, y calcular la rapidez.',
    criterioEvaluacion: 'CE.CN.4.8. Explica las leyes de cinemática elemental a partir de mediciones experimentales.',
    indicadorEvaluacion: 'I.CN.4.8.1. Calcula rapidez mediante relaciones distancia-tiempo en gráficos cinemáticos.',
    habilidad: 'Medir tiempos, graficar vectores de posición y calcular razones de cambio',
    conocimiento: 'Rapidez media = d/t, gráficas x vs t, sistemas de referencia inerciales',
    contexto: 'Rampas con carros de juguete y cronómetros de teléfonos móviles',
    nivelCognitivo: 'Operaciones Formales'
  },

  // ==========================================
  // BACHILLERATO GENERAL UNIFICADO (1.°, 2.°, 3.° BGU)
  // ==========================================
  // MATEMATICA BGU
  {
    codigo: 'M.5.1.5',
    subnivel: 'bachillerato',
    area: 'matematica',
    titulo: 'Sistemas de ecuaciones lineales 2x2 y 3x3 por métodos analíticos y gráficos',
    descripcion: 'M.5.1.5. Identificar la intersección gráfica de dos rectas como la solución analítica de un sistema de dos ecuaciones lineales con dos incógnitas.',
    criterioEvaluacion: 'CE.M.5.2. Emplea sistemas de ecuaciones e inecuaciones para resolver situaciones de optimización.',
    indicadorEvaluacion: 'I.M.5.2.1. Resuelve sistemas por métodos de sustitución, reducción, determinantes y graficación.',
    habilidad: 'Modelar algebraicamente, resolver matricialmente y graficar',
    conocimiento: 'Sistemas compatibles determinados, indeterminados e incompatibles',
    contexto: 'Problemas de oferta y demanda económica, mezclas químicas',
    nivelCognitivo: 'Operaciones Formales'
  },
  {
    codigo: 'M.5.1.20',
    subnivel: 'bachillerato',
    area: 'matematica',
    titulo: 'Análisis de funciones reales: dominio, recorrido, ceros y monotonía',
    descripcion: 'M.5.1.20. Graficar y analizar el dominio, recorrido, monotonía, ceros, extremos y paridad de las diferentes funciones reales (polinomiales, racionales, a trozos).',
    criterioEvaluacion: 'CE.M.5.3. Opera y grafica funciones reales reconociendo sus propiedades estructurales.',
    indicadorEvaluacion: 'I.M.5.3.1. Determina analíticamente intervalos de crecimiento, asíntotas y puntos críticos.',
    habilidad: 'Analizar comportamientos funcionales, graficar en GeoGebra e interpretar',
    conocimiento: 'Dominio, asíntotas verticales y horizontales, máximos y mínimos relativos',
    contexto: 'Modelado de trayectorias de proyectiles y propagación epidemiológica',
    nivelCognitivo: 'Operaciones Formales'
  },

  // LENGUA Y LITERATURA BGU
  {
    codigo: 'LL.5.3.1',
    subnivel: 'bachillerato',
    area: 'lengua',
    titulo: 'Detección de contradicciones, ambigüedades y falacias lógicas en discursos',
    descripcion: 'LL.5.3.1. Valorar el contenido explícito e implícito de dos o más textos orales e identificar contradicciones, ambigüedades y falacias.',
    criterioEvaluacion: 'CE.LL.5.3. Evalúa la validez de los argumentos en textos orales y escritos.',
    indicadorEvaluacion: 'I.LL.5.3.1. Identifica falacias ad hominem, de generalización apresurada y petición de principio.',
    habilidad: 'Desmontar falacias lógicas, contrastar posturas y contraargumentar',
    conocimiento: 'Tipos de falacias, retórica persuasiva, análisis crítico del discurso mediático',
    contexto: 'Análisis de debates presidenciales, publicidad engañosa y editoriales de opinión',
    nivelCognitivo: 'Operaciones Formales'
  },
  {
    codigo: 'LL.5.4.1',
    subnivel: 'bachillerato',
    area: 'lengua',
    titulo: 'Construcción de ensayos académicos con normas de citación internacional (APA)',
    descripcion: 'LL.5.4.1. Construir un texto argumentativo seleccionando el tema y el propósito comunicativo, formulando la tesis y aplicando las normas de citación APA.',
    criterioEvaluacion: 'CE.LL.5.6. Aplica el proceso de escritura en la elaboración de ensayos con rigor académico.',
    indicadorEvaluacion: 'I.LL.5.6.1. Redacta ensayos estructurados con tesis rigurosa y referencias bibliográficas precisas.',
    habilidad: 'Investigar en bases de datos científicas, parafrasear y citar con honestidad académica',
    conocimiento: 'Normas APA 7ma edición, tesis central, argumentos empíricos y de autoridad',
    contexto: 'Monografías de grado, proyectos interdisciplinarios STEAM',
    nivelCognitivo: 'Operaciones Formales'
  },

  // HISTORIA BGU
  {
    codigo: 'CS.H.5.1.3',
    subnivel: 'bachillerato',
    area: 'historia',
    titulo: 'La Revolución Neolítica: división social del trabajo y origen de la propiedad',
    descripcion: 'CS.H.5.1.3. Explicar y valorar la importancia del trabajo, la división social y la especialización en el Paleolítico y Neolítico para la supervivencia de la especie humana.',
    criterioEvaluacion: 'CE.CS.H.5.1. Analiza el papel protagónico del trabajo y la técnica en la evolución humana.',
    indicadorEvaluacion: 'I.CS.H.5.1.2. Examina el paso del nomadismo al sedentarismo y la domesticación de plantas.',
    habilidad: 'Explicar causalidades socioeconómicas y valorar el progreso técnico ancestral',
    conocimiento: 'Revolución agrícola, excedente de producción, aparición del Estado y patriarcado',
    contexto: 'Comparación con prácticas agrícolas indígenas andinas contemporáneas',
    nivelCognitivo: 'Operaciones Formales'
  },
  {
    codigo: 'CS.H.5.2.1',
    subnivel: 'bachillerato',
    area: 'historia',
    titulo: 'Transición de la Antigüedad clásica al Feudalismo europeo',
    descripcion: 'CS.H.5.2.1. Determinar las causas y consecuencias de la decadencia y caída del Imperio romano de Occidente y el surgimiento del feudalismo.',
    criterioEvaluacion: 'CE.CS.H.5.5. Explica las transformaciones políticas y económicas de la Edad Media.',
    indicadorEvaluacion: 'I.CS.H.5.5.1. Describe las relaciones de vasallaje y la servidumbre feudal.',
    habilidad: 'Analizar factores multicausales (económicos, militares, sociales) en grandes quiebres de era',
    conocimiento: 'Invasiones germánicas, fragmentación territorial, poder de la Iglesia y señoríos',
    contexto: 'Mapas dinámicos de Europa medieval y análisis de cartas de vasallaje',
    nivelCognitivo: 'Operaciones Formales'
  },

  // FILOSOFIA BGU
  {
    codigo: 'CS.F.5.1.3',
    subnivel: 'bachillerato',
    area: 'filosofia',
    titulo: 'Diferenciación entre saber mítico, religioso, científico y filosófico',
    descripcion: 'CS.F.5.1.3. Analizar y comprender las diversas producciones del pensamiento humano (ciencia, religión, arte) y su relación con el filosofar.',
    criterioEvaluacion: 'CE.CS.F.5.1. Contrasta las distintas respuestas epistemológicas al enigma de la existencia.',
    indicadorEvaluacion: 'I.CS.F.5.1.2. Distingue el razonamiento lógico-demostrativo del relato alegórico.',
    habilidad: 'Problematizar supuestos, diferenciar métodos de validación de la verdad',
    conocimiento: 'Epistemología, paso del Mythos al Logos en la Grecia arcaica',
    contexto: 'Cafés filosóficos escolares y debates sobre inteligencia artificial y ética',
    nivelCognitivo: 'Operaciones Formales'
  },
  {
    codigo: 'CS.F.5.2.1',
    subnivel: 'bachillerato',
    area: 'filosofia',
    titulo: 'Lógica aristotélica formal: silogismos, tablas de verdad y validez',
    descripcion: 'CS.F.5.2.1. Diferenciar las falacias de las paradojas, comprendiendo su aplicación en los discursos políticos, publicitarios y de la vida cotidiana.',
    criterioEvaluacion: 'CE.CS.F.5.2. Aplica las leyes de la lógica clásica en la construcción de argumentos coherentes.',
    indicadorEvaluacion: 'I.CS.F.5.2.1. Formula silogismos válidos y detecta contradicciones premisas-conclusión.',
    habilidad: 'Formalizar proposiciones, evaluar validez deductiva y formal',
    conocimiento: 'Premisas mayor y menor, término medio, reglas silogísticas',
    contexto: 'Análisis de discursos en prensa y ejercicios de demostración matemática',
    nivelCognitivo: 'Operaciones Formales'
  },

  // EDUCACION PARA LA CIUDADANIA BGU
  {
    codigo: 'CS.EC.5.1.3',
    subnivel: 'bachillerato',
    area: 'ciudadania',
    titulo: 'Evolución de los Derechos Humanos: de las declaraciones históricas al derecho internacional',
    descripcion: 'CS.EC.5.1.3. Analizar los procesos históricos que propiciaron la Declaración de los Derechos del Hombre y del Ciudadano (1789) y la Declaración Universal (1948).',
    criterioEvaluacion: 'CE.CS.EC.5.1. Examina la génesis histórica de los derechos y sus garantías.',
    indicadorEvaluacion: 'I.CS.EC.5.1.2. Relaciona las revoluciones burguesas con los derechos civiles y políticos.',
    habilidad: 'Evaluar progresividad de derechos, reconocer luchas sociales de universalización',
    conocimiento: 'Derechos de 1ra, 2da y 3ra generación; dignidad humana inalienable',
    contexto: 'Juicios simulados ante la Corte Interamericana de Derechos Humanos',
    nivelCognitivo: 'Operaciones Formales'
  },
  {
    codigo: 'CS.EC.5.2.1',
    subnivel: 'bachillerato',
    area: 'ciudadania',
    titulo: 'Mecanismos de democracia representativa, directa y deliberativa',
    descripcion: 'CS.EC.5.2.1. Contextualizar el nacimiento de la democracia moderna, considerando los procesos de lucha que se libraron por la ampliación del sufragio universal.',
    criterioEvaluacion: 'CE.CS.EC.5.3. Contrasta formas de gobierno y mecanismos de participación ciudadana.',
    indicadorEvaluacion: 'I.CS.EC.5.3.1. Explica la importancia del voto facultativo para jóvenes de 16 y 17 años en Ecuador.',
    habilidad: 'Argumentar sobre legitimidad democrática, rendición de cuentas y soberanía popular',
    conocimiento: 'Constitución 2008, Quinto Poder (Participación Ciudadana), revocatoria de mandato',
    contexto: 'Elecciones de consejo estudiantil con debates y propuestas fiscalizables',
    nivelCognitivo: 'Operaciones Formales'
  },

  // BIOLOGIA BGU
  {
    codigo: 'CN.B.5.1.6',
    subnivel: 'bachillerato',
    area: 'biologia',
    titulo: 'Estructura química y función biológica de carbohidratos, lípidos, proteínas y ácidos nucleicos',
    descripcion: 'CN.B.5.1.6. Describir la estructura y función de las biomoléculas (carbohidratos, lípidos, proteínas y ácidos nucleicos) que constituyen a los seres vivos.',
    criterioEvaluacion: 'CE.CN.B.5.1. Explica los fundamentos químicos de la estructura celular.',
    indicadorEvaluacion: 'I.CN.B.5.1.2. Relaciona la desnaturalización proteica con factores de pH y temperatura.',
    habilidad: 'Relacionar estructura química con actividad metabólica, formular hipótesis',
    conocimiento: 'Enlace peptídico, fosfolípidos de membrana, doble hélice del ADN',
    contexto: 'Pruebas de Lugol y Biuret en alimentos cotidianos dentro del laboratorio',
    nivelCognitivo: 'Operaciones Formales'
  },
  {
    codigo: 'CN.B.5.2.1',
    subnivel: 'bachillerato',
    area: 'biologia',
    titulo: 'Homeostasis corporal y coordinación neuroendocrina e inmune',
    descripcion: 'CN.B.5.2.1. Explicar las propiedades y funciones de los sistemas osteomuscular, neuroendocrino e inmunológico en el mantenimiento de la homeostasis corporal.',
    criterioEvaluacion: 'CE.CN.B.5.4. Argumenta la importancia del equilibrio fisiológico en la prevención de patologías.',
    indicadorEvaluacion: 'I.CN.B.5.4.1. Modela mecanismos de retroalimentación negativa en la regulación de glucosa sanguínea.',
    habilidad: 'Diagramar bucles de retroalimentación hormonal, analizar sintomatologías clínicas',
    conocimiento: 'Insulina/glucagón, respuesta inmunitaria adaptativa, eje hipotálamo-hipofisario',
    contexto: 'Estudio de casos sobre diabetes mellitus y respuesta a vacunas',
    nivelCognitivo: 'Operaciones Formales'
  },

  // FISICA BGU
  {
    codigo: 'CN.F.5.1.2',
    subnivel: 'bachillerato',
    area: 'fisica',
    titulo: 'Cinemática del Movimiento Rectilíneo Uniformemente Variado (MRUV)',
    descripcion: 'CN.F.5.1.2. Explicar, por medio de la experimentación de un objeto y el análisis de tablas y gráficas, que el MRUV implica una aceleración constante en el tiempo.',
    criterioEvaluacion: 'CE.CN.F.5.1. Obtiene magnitudes cinemáticas del MRUV con herramientas gráficas y algebraicas.',
    indicadorEvaluacion: 'I.CN.F.5.1.2. Resuelve ecuaciones cinemáticas de aceleración, velocidad final y desplazamiento.',
    habilidad: 'Calcular derivadas cinemáticas elementales, graficar parábolas de posición y verificar unidades del SI',
    conocimiento: 'Ecuaciones de aceleración constante: vf = vo + at, d = vot + 1/2at^2',
    contexto: 'Sensores de movimiento con microcontroladores (Arduino) y caída de cuerpos',
    nivelCognitivo: 'Operaciones Formales'
  },
  {
    codigo: 'CN.F.5.1.16',
    subnivel: 'bachillerato',
    area: 'fisica',
    titulo: 'Leyes del movimiento de Newton y diagramas de cuerpo libre (DCL)',
    descripcion: 'CN.F.5.1.16. Indagar los principios de Newton (inercia, fuerza y masa, acción y reacción) y aplicarlos para resolver problemas de dinámica elemental.',
    criterioEvaluacion: 'CE.CN.F.5.4. Aplica las leyes de Newton en sistemas mecánicos con o sin fricción.',
    indicadorEvaluacion: 'I.CN.F.5.4.1. Elabora diagramas de cuerpo libre descomponiendo vectores de fuerza en planos inclinados.',
    habilidad: 'Dibujar DCL, aplicar segunda ley (Sumatoria de F = m*a) y calcular coeficientes de rozamiento',
    conocimiento: 'Fuerza normal, peso (mg), tensión, fuerza de rozamiento estático y dinámico',
    contexto: 'Seguridad vial (frenado de vehículos, uso de cinturón por inercia)',
    nivelCognitivo: 'Operaciones Formales'
  },

  // QUIMICA BGU
  {
    codigo: 'CN.Q.5.1.3',
    subnivel: 'bachillerato',
    area: 'quimica',
    titulo: 'Modelos de enlace químico: iónico, covalente y metálico',
    descripcion: 'CN.Q.5.1.3. Observar y comparar la teoría de enlace químico (iónico, covalente polar y no polar, metálico) desde la atracción electrostática entre iones y compartición de electrones.',
    criterioEvaluacion: 'CE.CN.Q.5.3. Predice el tipo de enlace químico a partir de la electronegatividad de los átomos.',
    indicadorEvaluacion: 'I.CN.Q.5.3.1. Dibuja estructuras de Lewis y explica puntos de fusión y solubilidad.',
    habilidad: 'Calcular delta de electronegatividad, dibujar diagramas de Lewis y predecir propiedades físicas',
    conocimiento: 'Regla del octeto, electrones de valencia, puentes de hidrógeno y fuerzas de Van der Waals',
    contexto: 'Pruebas de conductividad eléctrica en disolución acuosa de sal común vs azúcar',
    nivelCognitivo: 'Operaciones Formales'
  },
  {
    codigo: 'CN.Q.5.2.1',
    subnivel: 'bachillerato',
    area: 'quimica',
    titulo: 'Nomenclatura inorgánica sistemática, stock y tradicional de óxidos, hidróxidos y ácidos',
    descripcion: 'CN.Q.5.2.1. Deducir y comunicar que la formación de compuestos químicos responde a la necesidad de alcanzar mayor estabilidad energética y escribir sus fórmulas químicas.',
    criterioEvaluacion: 'CE.CN.Q.5.5. Formula y nombra compuestos químicos binarios y ternarios siguiendo normas IUPAC.',
    indicadorEvaluacion: 'I.CN.Q.5.5.1. Escribe fórmulas correctas balanceando estados de oxidación de metales y no metales.',
    habilidad: 'Determinar números de oxidación, cruzar valencias y nombrar con rigor IUPAC',
    conocimiento: 'Óxidos básicos y ácidos, hidróxidos, ácidos oxácidos e hidrácidos, sales haloideas',
    contexto: 'Lectura crítica de etiquetas de productos de limpieza, cosméticos y agroquímicos',
    nivelCognitivo: 'Operaciones Formales'
  }
];

// 3. Fusionar y desduplicar por código oficial
const dcdRegistry = new Map();

// Primero las de c0f5d00
baseDCDs.forEach(d => {
  const normCod = d.codigo.replace(/\.+$/, '').trim();
  d.codigo = normCod;
  dcdRegistry.set(normCod, d);
});

// Luego las nuevas complementarias
additionalDCDs.forEach(d => {
  const normCod = d.codigo.replace(/\.+$/, '').trim();
  d.codigo = normCod;
  dcdRegistry.set(normCod, d);
});

const finalDCDDatabase = Array.from(dcdRegistry.values());
finalDCDDatabase.sort((a, b) => {
  if (a.subnivel !== b.subnivel) return a.subnivel.localeCompare(b.subnivel);
  if (a.area !== b.area) return a.area.localeCompare(b.area);
  return a.codigo.localeCompare(b.codigo);
});

console.log(`[Rebuild] Total DCDs unificadas y enriquecidas: ${finalDCDDatabase.length}`);

// Validar que todas las áreas tienen DCDs
const summary = {};
finalDCDDatabase.forEach(d => {
  const key = `${d.subnivel} -> ${d.area}`;
  summary[key] = (summary[key] || 0) + 1;
});
console.log('[Rebuild] Distribución por Subnivel y Área:');
console.log(summary);

// 4. Escribir data/curriculum-dcd.json
const outputJsonPath = path.join(__dirname, '..', 'data', 'curriculum-dcd.json');
fs.writeFileSync(outputJsonPath, JSON.stringify(finalDCDDatabase, null, 2), 'utf-8');
console.log(`[OK] Guardado archivo JSON en: ${outputJsonPath}`);

// 5. Generar código completo para js/curriculum-data.js CON EXPORTS ES MODULE Y COMMONJS
const outputJsPath = path.join(__dirname, '..', 'js', 'curriculum-data.js');
const jsCode = `// Base de datos del Currículo Nacional y Destrezas con Criterio de Desempeño (DCD)
// Organizadas por Subniveles Educativos y Áreas del Conocimiento (Ministerio de Educación del Ecuador)
// Compatible con ES Modules (Navegador) y CommonJS (Node.js/Tests)

export const SUBNIVELES = ${JSON.stringify(SUBNIVELES, null, 2)};

export const AREAS = ${JSON.stringify(AREAS, null, 2)};

export const DCD_DATABASE = ${JSON.stringify(finalDCDDatabase, null, 2)};

export const PERFILES_COGNITIVOS = ${JSON.stringify(PERFILES_COGNITIVOS, null, 2)};

export const GRADOS_ADAPTACION = ${JSON.stringify(GRADOS_ADAPTACION, null, 2)};

// Soporte retrocompatible para entornos CommonJS (Node.js)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    SUBNIVELES,
    AREAS,
    DCD_DATABASE,
    PERFILES_COGNITIVOS,
    GRADOS_ADAPTACION
  };
}
`;

fs.writeFileSync(outputJsPath, jsCode, 'utf-8');
console.log(`[OK] Guardado archivo JS con exports nativos en: ${outputJsPath}`);
