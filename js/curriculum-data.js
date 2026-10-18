// Base de datos del Currículo Nacional y Destrezas con Criterio de Desempeño (DCD)
// Organizadas por Subniveles Educativos y Áreas del Conocimiento

export const SUBNIVELES = [
  { id: 'preparatoria', name: '1. Preparatoria (1.° EGB - 5 años)', edad: '5 años', etapaPiaget: 'Preoperacional' },
  { id: 'elemental', name: '2. Básica Elemental (2.°, 3.°, 4.° EGB)', edad: '6 a 8 años', etapaPiaget: 'Transición Preoperacional a Operaciones Concretas' },
  { id: 'media', name: '3. Básica Media (5.°, 6.°, 7.° EGB)', edad: '9 a 11 años', etapaPiaget: 'Operaciones Concretas' },
  { id: 'superior', name: '4. Básica Superior (8.°, 9.°, 10.° EGB)', edad: '12 a 14 años', etapaPiaget: 'Transición a Operaciones Formales' },
  { id: 'bachillerato', name: '5. Bachillerato General Unificado (1.°, 2.°, 3.° BGU)', edad: '15 a 17 años', etapaPiaget: 'Operaciones Formales / Pensamiento Hipotético' }
];

export const AREAS = [
  { id: 'matematica', name: 'Matemática', icon: '📐' },
  { id: 'lengua', name: 'Lengua y Literatura', icon: '📚' },
  { id: 'ciencias_naturales', name: 'Ciencias Naturales', icon: '🔬' },
  { id: 'ciencias_sociales', name: 'Ciencias Sociales / Historia', icon: '🌍' },
  { id: 'educacion_artistica', name: 'Educación Cultural y Artística (ECA)', icon: '🎨' },
  { id: 'educacion_fisica', name: 'Educación Física', icon: '⚽' },
  { id: 'ingles', name: 'Inglés / Foreign Language', icon: '🗣️' }
];

export const DCD_DATABASE = [
  // --- BÁSICA ELEMENTAL: MATEMÁTICA ---
  {
    codigo: 'M.2.1.12',
    subnivel: 'elemental',
    area: 'matematica',
    titulo: 'Adición y sustracción con reagrupación hasta el 999',
    descripcion: 'M.2.1.12. Representar, escribir y leer los números naturales del 0 al 999 en forma concreta, gráfica y simbólica, y resolver adiciones y sustracciones con reagrupación con los números hasta el 999 con material concreto en la resolución de problemas de la vida cotidiana.',
    criterioEvaluacion: 'CE.M.2.2. Aplica estrategias de conteo, el concepto de número, expresiones matemáticas sencillas, propiedades de la suma y la multiplicación, procedimientos de cálculos de suma, resta y multiplicación con números de hasta tres cifras.',
    indicadorEvaluacion: 'I.M.2.2.3. Opera utilizando la adición y sustracción con números naturales de hasta tres cifras en el contexto de un problema matemático del entorno.',
    habilidad: 'Representar, calcular y resolver problemas',
    conocimiento: 'Números naturales hasta 999, adición y sustracción con reagrupación',
    contexto: 'Situaciones de la vida cotidiana y material concreto',
    nivelCognitivo: 'Aplicación / Comprensión'
  },
  {
    codigo: 'M.2.1.14',
    subnivel: 'elemental',
    area: 'matematica',
    titulo: 'Reconocer el valor posicional de números hasta tres cifras',
    descripcion: 'M.2.1.14. Reconocer el valor posicional de números naturales de hasta tres cifras, basándose en la composición y descomposición de unidades, decenas y centenas mediante el uso de material concreto y con representación simbólica.',
    criterioEvaluacion: 'CE.M.2.2. Aplica estrategias de conteo y concepto de número.',
    indicadorEvaluacion: 'I.M.2.2.1. Completa secuencias numéricas y reconoce el valor posicional de números de hasta tres cifras con material concreto.',
    habilidad: 'Reconocer y descomponer',
    conocimiento: 'Valor posicional (Unidades, Decenas, Centenas)',
    contexto: 'Material base 10 y ábaco',
    nivelCognitivo: 'Comprensión'
  },
  {
    codigo: 'M.2.2.5',
    subnivel: 'elemental',
    area: 'matematica',
    titulo: 'Cálculo de perímetros en figuras geométricas básicas',
    descripcion: 'M.2.2.5. Distinguir lados, frontera exterior e interior en figuras geométricas y calcular el perímetro de cuadrados y rectángulos utilizando medidas no convencionales y convencionales.',
    criterioEvaluacion: 'CE.M.2.3. Emplea elementos básicos de geometría y medidas de longitud.',
    indicadorEvaluacion: 'I.M.2.3.1. Clasifica y calcula el perímetro de figuras geométricas bidimensionales.',
    habilidad: 'Distinguir y calcular',
    conocimiento: 'Perímetro, polígonos regulares (cuadrado, rectángulo)',
    contexto: 'Objetos y espacios del aula',
    nivelCognitivo: 'Aplicación'
  },

  // --- BÁSICA ELEMENTAL: LENGUA Y LITERATURA ---
  {
    codigo: 'LL.2.3.5',
    subnivel: 'elemental',
    area: 'lengua',
    titulo: 'Comprensión lectora y extracción de ideas centrales',
    descripcion: 'LL.2.3.5. Desarrollar estrategias cognitivas como lectura de paratextos, establecimiento del propósito de lectura, relectura, relectura selectiva y parafraseo para autorregular la comprensión de textos informativos y narrativos.',
    criterioEvaluacion: 'CE.LL.2.5. Comprende contenidos implícitos y explícitos, emite juicios valorativos y autorregula la comprensión mediante estrategias cognitivas.',
    indicadorEvaluacion: 'I.LL.2.5.2. Comprende los contenidos implícitos de un texto basándose en inferencias espaciotemporales, referenciales y de causa-efecto.',
    habilidad: 'Autorregular y comprender',
    conocimiento: 'Estrategias de comprensión lectora, textos narrativos',
    contexto: 'Lecturas guiadas del entorno escolar y familiar',
    nivelCognitivo: 'Comprensión / Análisis'
  },
  {
    codigo: 'LL.2.4.1',
    subnivel: 'elemental',
    area: 'lengua',
    titulo: 'Escritura de oraciones con concordancia y ortografía fonológica',
    descripcion: 'LL.2.4.1. Desarrollar progresivamente autonomía y calidad en la producción de relatos de experiencias personales y descripciones sencillas, aplicando la concordancia de género y número y las normas ortográficas básicas.',
    criterioEvaluacion: 'CE.LL.2.8. Aplica el proceso de escritura en la producción de textos narrativos y descriptivos.',
    indicadorEvaluacion: 'I.LL.2.8.2. Aplica el proceso de escritura en la construcción de textos sencillos, usando adecuadamente la concordancia gramatical.',
    habilidad: 'Redactar y estructurar',
    conocimiento: 'Concordancia género/número, código alfabético, estructura de la oración',
    contexto: 'Experiencias personales y vivencias',
    nivelCognitivo: 'Aplicación / Creación'
  },

  // --- BÁSICA ELEMENTAL: CIENCIAS NATURALES ---
  {
    codigo: 'CN.2.1.4',
    subnivel: 'elemental',
    area: 'ciencias_naturales',
    titulo: 'Clasificación de animales vertebrados e invertebrados',
    descripcion: 'CN.2.1.4. Observar y describir las características de los animales y clasificarlos en vertebrados e invertebrados, por la presencia o ausencia de una columna vertebral y esqueleto interno.',
    criterioEvaluacion: 'CE.CN.2.2. Aprecia la diversidad de plantas y animales en función de la comprensión de sus características y funciones vitales.',
    indicadorEvaluacion: 'I.CN.2.2.1. Clasifica a los animales en vertebrados e invertebrados en función de la presencia o ausencia de columna vertebral.',
    habilidad: 'Observar, describir y clasificar',
    conocimiento: 'Animales vertebrados e invertebrados, columna vertebral',
    contexto: 'Entorno natural local y muestras biológicas',
    nivelCognitivo: 'Comprensión / Clasificación'
  },

  // --- BÁSICA MEDIA: MATEMÁTICA ---
  {
    codigo: 'M.3.1.28',
    subnivel: 'media',
    area: 'matematica',
    titulo: 'Operaciones combinadas con fracciones y números decimales',
    descripcion: 'M.3.1.28. Calcular, aplicando algoritmos y la tecnología, sumas, restas, multiplicaciones y divisiones con números decimales, y resolver problemas con operaciones combinadas de números decimales y fraccionarios.',
    criterioEvaluacion: 'CE.M.3.5. Plantea problemas numéricos en los que intervienen números naturales, decimales o fraccionarios, y los resuelve empleando las cuatro operaciones básicas.',
    indicadorEvaluacion: 'I.M.3.5.1. Aplica las propiedades de las operaciones en el cálculo de problemas con fracciones y decimales.',
    habilidad: 'Calcular y resolver problemas algorítmicos',
    conocimiento: 'Fracciones, decimales, jerarquía de operaciones',
    contexto: 'Transacciones comerciales y medición en la vida diaria',
    nivelCognitivo: 'Aplicación / Análisis'
  },
  {
    codigo: 'M.3.1.33',
    subnivel: 'media',
    area: 'matematica',
    titulo: 'Lectura e interpretación de tablas y diagramas de barras circulares',
    descripcion: 'M.3.1.33. Leer e interpretar información contenida en tablas de frecuencias, diagramas de barras, circulares y poligonales para resolver problemas y argumentar conclusiones basadas en datos estadísticos.',
    criterioEvaluacion: 'CE.M.3.10. Emplea programas informáticos para tabular y representar datos estadísticos y calcular medidas de tendencia central.',
    indicadorEvaluacion: 'I.M.3.10.1. Construye e interpreta tablas de frecuencia y gráficos estadísticos para comunicar conclusiones.',
    habilidad: 'Interpretar y comunicar datos',
    conocimiento: 'Estadística básica, gráficos de barras y circulares',
    contexto: 'Encuestas escolares y temas ambientales',
    nivelCognitivo: 'Análisis / Evaluación'
  },

  // --- BÁSICA MEDIA: LENGUA Y LITERATURA ---
  {
    codigo: 'LL.3.3.2',
    subnivel: 'media',
    area: 'lengua',
    titulo: 'Identificación de ideas principales y secundarias en textos expositivos',
    descripcion: 'LL.3.3.2. Comprender los contenidos implícitos de un texto mediante la realización de inferencias fundamentales y proyectivas valorativas a partir del contenido de un texto informativo o expositivo.',
    criterioEvaluacion: 'CE.LL.3.3. Establece relaciones lógicas entre las ideas de un texto, identifica el punto de vista del autor y extrae conclusiones.',
    indicadorEvaluacion: 'I.LL.3.3.2. Realiza inferencias fundamentales y proyectivo-valorativas valorando los contenidos y aspectos de forma a partir de criterios preestablecidos.',
    habilidad: 'Inferir, contrastar y resumir',
    conocimiento: 'Texto expositivo, ideas principales, causa-efecto',
    contexto: 'Artículos de divulgación infantil y textos enciclopédicos',
    nivelCognitivo: 'Análisis'
  },

  // --- BÁSICA MEDIA: CIENCIAS SOCIALES ---
  {
    codigo: 'CS.3.1.9',
    subnivel: 'media',
    area: 'ciencias_sociales',
    titulo: 'Pueblos originarios y diversidad cultural del Ecuador',
    descripcion: 'CS.3.1.9. Identificar a los conquistadores y primeros colonizadores, sus características y los conflictos con los pueblos indígenas; y destacar los aportes culturales de los pueblos originarios y afrodescendientes.',
    criterioEvaluacion: 'CE.CS.3.1. Analiza la evolución de la organización económica y política del país desde sus orígenes prehispánicos hasta la época colonial.',
    indicadorEvaluacion: 'I.CS.3.1.2. Analiza la relación entre pueblos indígenas, afrodescendientes y colonizadores valorando la interculturalidad.',
    habilidad: 'Reconocer, comparar y valorar',
    conocimiento: 'Historia colonial, pueblos indígenas y afroecuatorianos, interculturalidad',
    contexto: 'Identidad nacional y patrimonio histórico',
    nivelCognitivo: 'Comprensión / Valoración'
  },

  // --- BÁSICA SUPERIOR: MATEMÁTICA ---
  {
    codigo: 'M.4.1.20',
    subnivel: 'superior',
    area: 'matematica',
    titulo: 'Resolución de ecuaciones de primer grado con una incógnita',
    descripcion: 'M.4.1.20. Resolver ecuaciones de primer grado con una incógnita en ℚ en la solución de problemas contextualizados, aplicando las propiedades de la igualdad (uniforme y cancelativa).',
    criterioEvaluacion: 'CE.M.4.1. Emplea las relaciones de orden, las propiedades algebraicas de las operaciones en ℚ para resolver ecuaciones e inecuaciones.',
    indicadorEvaluacion: 'I.M.4.1.2. Formula y resuelve problemas aplicando las propiedades algebraicas de los números racionales y el planteo de ecuaciones de primer grado.',
    habilidad: 'Plantear y resolver algebraicamente',
    conocimiento: 'Ecuaciones de 1er grado, lenguaje algebraico, números racionales',
    contexto: 'Resolución de problemas de balance y finanzas cotidianas',
    nivelCognitivo: 'Aplicación / Abstracción'
  },

  // --- BÁSICA SUPERIOR: CIENCIAS NATURALES ---
  {
    codigo: 'CN.4.1.7',
    subnivel: 'superior',
    area: 'ciencias_naturales',
    titulo: 'Estructura celular y niveles de organización biológica',
    descripcion: 'CN.4.1.7. Analizar los niveles de organización y diversidad de los seres vivos y clasificarlos en grupos taxonómicos, de acuerdo con las características observadas a simple vista y las invisibles para el ojo humano.',
    criterioEvaluacion: 'CE.CN.4.1. Explica a partir de la indagación y experimentación la estructura de las células y los niveles de organización de la materia viva.',
    indicadorEvaluacion: 'I.CN.4.1.2. Clasifica seres vivos a partir de criterios taxonómicos y explica el papel de la célula eucariota y procariota.',
    habilidad: 'Analizar, modelar y comparar',
    conocimiento: 'Célula animal y vegetal, organelos celulares, taxonomía',
    contexto: 'Laboratorio escolar y microscopía virtual',
    nivelCognitivo: 'Análisis / Modelado'
  },

  // --- BÁSICA SUPERIOR: LENGUA Y LITERATURA ---
  {
    codigo: 'LL.4.3.4',
    subnivel: 'superior',
    area: 'lengua',
    titulo: 'Análisis crítico de textos argumentativos y discursos',
    descripcion: 'LL.4.3.4. Autorregular la comprensión de un texto mediante la aplicación de estrategias cognitivas de comprensión autoseleccionadas, de acuerdo con el propósito de lectura y las dificultades identificadas en textos argumentativos y periodísticos.',
    criterioEvaluacion: 'CE.LL.4.5. Comprende en sus niveles literal, inferencial y crítico-valorativo diversos tipos de texto, y autorregula su comprensión.',
    indicadorEvaluacion: 'I.LL.4.5.1. Compara, bajo criterios preestablecidos, las relaciones explícitas entre los contenidos de dos o más textos y contrasta sus fuentes.',
    habilidad: 'Analizar críticamente y contrastar fuentes',
    conocimiento: 'Tesis, argumentos, falacias, puntos de vista',
    contexto: 'Debates actuales, medios digitales y redes sociales',
    nivelCognitivo: 'Evaluación crítica'
  },

  // --- BACHILLERATO: MATEMÁTICA ---
  {
    codigo: 'M.5.1.23',
    subnivel: 'bachillerato',
    area: 'matematica',
    titulo: 'Modelado y análisis de funciones polinomiales y cuadráticas',
    descripcion: 'M.5.1.23. Reconocer funciones polinomiales de grado 2, identificar sus propiedades (concavidad, vértice, raíces, eje de simetría) y graficar de manera manual y mediante software dinámico para resolver problemas de optimización.',
    criterioEvaluacion: 'CE.M.5.3. Opera y emplea funciones reales para modelar y resolver situaciones de la ciencia y la cotidianidad.',
    indicadorEvaluacion: 'I.M.5.3.1. Grafica funciones reales analizando dominio, recorrido, monotonía y puntos extremos.',
    habilidad: 'Modelar y optimizar',
    conocimiento: 'Función cuadrática, parábolas, raíces, GeoGebra',
    contexto: 'Trayectorias físicas, ingresos y costos',
    nivelCognitivo: 'Operaciones Formales / Modelado Matemático'
  },

  // --- BACHILLERATO: LENGUA Y LITERATURA ---
  {
    codigo: 'LL.5.4.1',
    subnivel: 'bachillerato',
    area: 'lengua',
    titulo: 'Construcción de ensayos académicos con citas APA y rigor argumentativo',
    descripcion: 'LL.5.4.1. Construir un texto argumentativo seleccionando el tema, formulando la tesis, sustentándola con argumentos sólidos y citas bibliográficas rigurosas, y redactando una conclusión reflexiva.',
    criterioEvaluacion: 'CE.LL.5.6. Aplica el proceso de escritura en la construcción de textos académicos y argumentativos.',
    indicadorEvaluacion: 'I.LL.5.6.1. Aplica el proceso de producción de textos en la escritura de ensayos argumentativos estructurados.',
    habilidad: 'Formular tesis y argumentar sólidamente',
    conocimiento: 'Ensayo académico, normas de citación, contraargumentación',
    contexto: 'Investigación académica y debate ciudadano',
    nivelCognitivo: 'Creación / Evaluación'
  },

  // --- PREPARATORIA (1ro EGB) ---
  {
    codigo: 'M.1.4.14',
    subnivel: 'preparatoria',
    area: 'matematica',
    titulo: 'Conteo y cuantificación de objetos hasta el 10',
    descripcion: 'M.1.4.14. Identificar cantidades y asociarlas con los numerales del 1 al 10 en material concreto y situaciones lúdicas de la vida cotidiana.',
    criterioEvaluacion: 'CE.M.1.2. Utiliza el conteo de colecciones de objetos hasta el 10 en situaciones cotidianas.',
    indicadorEvaluacion: 'I.M.1.2.2. Resuelve situaciones cotidianas que requieren de la comparación y conteo de colecciones de hasta 10 elementos.',
    habilidad: 'Contar, asociar y discriminar',
    conocimiento: 'Correspondencia uno a uno, número y cantidad hasta 10',
    contexto: 'Rincón de juegos y material no estructurado',
    nivelCognitivo: 'Preoperacional / Simbólico'
  }
];

// Perfiles Cognitivos y Necesidades Educativas Especiales (NEE)
export const PERFILES_COGNITIVOS = [
  {
    id: 'tdah',
    nombre: 'TDAH (Déficit de Atención con o sin Hiperactividad)',
    icono: '⚡',
    categoria: 'No asociada a discapacidad',
    caracteristicasCognitivas: {
      atencion: 'Dificultad en atención sostenida y selectiva; alta distractibilidad ante estímulos externos.',
      memoriaTrabajo: 'Capacidad reducida para retener secuencias de instrucciones de más de 2 pasos.',
      funcionesEjecutivas: 'Dificultad en autorregulación, control de impulsos, planificación y gestión del tiempo.',
      estiloAprendizaje: 'Visual-kinestésico, motivado por retos dinámicos con retroalimentación inmediata.'
    },
    implicacionPiaget: 'Necesidad de acción física directa sobre los objetos para anclar el pensamiento; la falta de movimiento inhibe la asimilación cognitiva.',
    implicacionVygotsky: 'Requiere andamiaje externo constante para el lenguaje interiorizador (auto-instrucciones verbales) y micro-metas con refuerzo mediado.'
  },
  {
    id: 'dislexia',
    nombre: 'Dislexia / Dificultad Específica en Lectoescritura',
    icono: '📖',
    categoria: 'No asociada a discapacidad',
    caracteristicasCognitivas: {
      atencion: 'Fatiga atencional rápida durante tareas de decodificación de texto denso.',
      memoriaTrabajo: 'Déficit en el bucle fonológico de la memoria de trabajo verbal.',
      funcionesEjecutivas: 'Conservadas; excelente razonamiento visoespacial y pensamiento holístico/creativo.',
      estiloAprendizaje: 'Multisensorial, visual, icónico, narrativo y experiencial.'
    },
    implicacionPiaget: 'El paso del significante gráfico al significado se bloquea; se debe favorecer la manipulación de letras en relieve y el soporte pictórico antes del texto plano.',
    implicacionVygotsky: 'La mediación semiótica debe apoyarse en canales orales y visuales (lectura mediada por un par o software lector de pantalla), evitando que la decodificación bloquee la ZPD conceptual.'
  },
  {
    id: 'discalculia',
    nombre: 'Discalculia / Dificultad en Razonamiento Numérico',
    icono: '🔢',
    categoria: 'No asociada a discapacidad',
    caracteristicasCognitivas: {
      atencion: 'Normal, pero con ansiedad matemática y bloqueo ante símbolos numéricos abstractos.',
      memoriaTrabajo: 'Déficit severo en la memoria de hechos aritméticos y reconocimiento de patrones cuantitativos rápidos (subitizing).',
      funcionesEjecutivas: 'Dificultad específica en la secuenciación de algoritmos paso a paso.',
      estiloAprendizaje: 'Concreto-manipulativo puro (enfoque CPA: Concreto -> Pictórico -> Abstracto).'
    },
    implicacionPiaget: 'Permanece más tiempo en la necesidad de operaciones concretas reales (recontar objetos físicos tangibles) antes de interiorizar el concepto abstracto de cardinalidad.',
    implicacionVygotsky: 'El andamiaje requiere mediadores externos estructurados (tablas visuales de operaciones, regletas de Cuisenaire, ábaco) y modelado en voz alta del docente.'
  },
  {
    id: 'tea',
    nombre: 'Trastorno del Espectro Autista (TEA Grado 1 / Síndrome de Asperger)',
    icono: '🧩',
    categoria: 'Asociada o no a discapacidad según dictamen',
    caracteristicasCognitivas: {
      atencion: 'Hiperfoco en temas de interés restringido; dificultad para alternar el foco atencional.',
      memoriaTrabajo: 'Excelente memoria mecánica y visual; dificultad con enunciados ambiguos o metáforas.',
      funcionesEjecutivas: 'Rigidez cognitiva ante cambios de rutina; sensibilidad a sobrecarga sensorial acústica o visual.',
      estiloAprendizaje: 'Visual estricto, estructurado, secuencial, explícito y sin ambigüedades.'
    },
    implicacionPiaget: 'Pensamiento anclado en la lógica directa y la literalidad; el conflicto cognitivo debe introducirse de manera muy suave y predecible para no generar desregulación emocional.',
    implicacionVygotsky: 'La mediación social entre pares requiere "guiones sociales" explícitos y contratos pedagógicos visuales para la interacción colaborativa en la ZPD.'
  },
  {
    id: 'discapacidad_intelectual_leve',
    nombre: 'Discapacidad Intelectual (Leve a Moderada)',
    icono: '🌱',
    categoria: 'Asociada a discapacidad',
    caracteristicasCognitivas: {
      atencion: 'Lapsos de concentración breves; requiere pausas y variedad de estímulos.',
      memoriaTrabajo: 'Capacidad de almacenamiento y procesamiento significativamente más lenta.',
      funcionesEjecutivas: 'Dificultad marcada para la abstracción, generalización a nuevos contextos y razonamiento hipotético.',
      estiloAprendizaje: 'Vivencial, repetitivo con sentido funcional, basado en la vida diaria y material concreto.'
    },
    implicacionPiaget: 'Estadio de desarrollo anclado en el nivel Preoperacional avanzado o de Operaciones Concretas elementales. Imposibilidad de asimilar conceptos puramente formales o abstractos.',
    implicacionVygotsky: 'La Zona de Desarrollo Próximo es estrecha pero muy receptiva si se brindan andamiajes directos de alta frecuencia, mediación asistida continua y tareas descompuestas en micro-pasos.'
  },
  {
    id: 'discapacidad_visual',
    nombre: 'Baja Visión / Discapacidad Visual',
    icono: '👁️',
    categoria: 'Asociada a discapacidad',
    caracteristicasCognitivas: {
      atencion: 'Sostenida, pero con mayor fatiga perceptual táctil o auditiva.',
      memoriaTrabajo: 'Alta retención auditiva y memoria secuencial espacial.',
      funcionesEjecutivas: 'Excelente desarrollo de la verbalización y el razonamiento lógico-deductivo.',
      estiloAprendizaje: 'Háptico-kinestésico (tacto 3D), auditivo y descriptivo detallado.'
    },
    implicacionPiaget: 'La exploración de los objetos y la asimilación del espacio requieren experiencia manipulativa háptica tridimensional antes de cualquier abstracción espacial.',
    implicacionVygotsky: 'La mediación semiótica se basa en la descripción verbal enriquecida y la guía manual mano-sobre-mano para explorar el andamiaje instrumental.'
  },
  {
    id: 'discapacidad_auditiva',
    nombre: 'Hipoacusia / Discapacidad Auditiva',
    icono: '🦻',
    categoria: 'Asociada a discapacidad',
    caracteristicasCognitivas: {
      atencion: 'Visual altamente focalizada; fatiga por lectura labiofacial continuada.',
      memoriaTrabajo: 'Memoria visoespacial muy desarrollada; bucle fonológico sustituido por codificación viso-gestual.',
      funcionesEjecutivas: 'Conservadas; pueden existir vacíos de vocabulario técnico en lengua oral.',
      estiloAprendizaje: 'Visual predominante (esquemas, lengua de señas, mapas conceptuales, videos subtitulados).'
    },
    implicacionPiaget: 'Las representaciones simbólicas operan preferentemente a través de significantes visuales y espaciales en vez de fonéticos.',
    implicacionVygotsky: 'La mediación instrumental crucial es la Lengua de Señas (LSEC) o el soporte textual visual, permitiendo la interacción paritaria en la ZPD.'
  },
  {
    id: 'altas_capacidades',
    nombre: 'Altas Capacidades / Talento Sobresaliente',
    icono: '🚀',
    categoria: 'No asociada a discapacidad (Dotación superior)',
    caracteristicasCognitivas: {
      atencion: 'Rápido desinterés y aburrimiento si la tarea es repetitiva o de baja demanda cognitiva.',
      memoriaTrabajo: 'Excepcional capacidad de retención y procesamiento simultáneo.',
      funcionesEjecutivas: 'Pensamiento divergente, rapidez en deducciones lógicas y metacognición temprana.',
      estiloAprendizaje: 'Investigativo, autónomo, orientado a la resolución de problemas complejos.'
    },
    implicacionPiaget: 'Acceso precoz al estadio de las Operaciones Formales y al pensamiento hipotético-deductivo.',
    implicacionVygotsky: 'Su ZPD debe expandirse mediante enriquecimiento curricular vertical y horizontal, proponiendo retos abiertos de investigación y rol de tutor de pares.'
  }
];

// Grados de Adaptación Curricular (Normativa MinEduc / Inclusión)
export const GRADOS_ADAPTACION = [
  {
    grado: 1,
    nombre: 'Grado 1 (De Acceso al Currículo)',
    resumen: 'Modificaciones en recursos, espacios, iluminación, mobiliario y ayudas técnicas. NO altera objetivos, metodologías nucleares ni destrezas.',
    impactoDCD: 'La DCD se mantiene 100% idéntica.',
    ejemplos: 'Ubicación preferencial en el aula cerca del docente, lupas, software con sintetizador de voz, rampas, atriles ergonómicos, eliminación de barreras acústicas.',
    color: '#0284c7'
  },
  {
    grado: 2,
    nombre: 'Grado 2 (No Significativa / Metodológica)',
    resumen: 'Modificaciones en metodología, tiempos de trabajo, material didáctico concreto y formato de evaluación. NO altera la DCD ni el objetivo base.',
    impactoDCD: 'La DCD se mantiene, pero se especifica el andamiaje metodológico con el que el estudiante la alcanzará.',
    ejemplos: 'Tutoría entre pares (par pedagógico Vygotsky), uso de regletas o bloques base 10 (Piaget), instrucciones divididas en pasos, 50% más de tiempo en pruebas, evaluaciones orales o con pictogramas.',
    color: '#059669'
  },
  {
    grado: 3,
    nombre: 'Grado 3 (Significativa / Curricular)',
    resumen: 'Modificación sustancial de objetivos, contenidos y Destrezas con Criterio de Desempeño (DCD). Se reduce la complejidad o se adoptan destrezas de subniveles anteriores.',
    impactoDCD: 'La DCD se desagrega o reclasifica formalmente en el DIAC con reducción de alcance y criterios adaptados.',
    ejemplos: 'Si el grupo estudia multiplicación con reagrupación, el estudiante consolida suma con material concreto; se priorizan destrezas funcionales para la autonomía y vida práctica.',
    color: '#dc2626'
  }
];
