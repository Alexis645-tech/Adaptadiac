// Base de datos del Currículo Nacional y Destrezas con Criterio de Desempeño (DCD)
// Organizadas por Subniveles Educativos y Áreas del Conocimiento (Ministerio de Educación del Ecuador)
// Compatible con ES Modules (Navegador) y CommonJS (Node.js/Tests)

export const SUBNIVELES = [
  {
    "id": "preparatoria",
    "name": "1. Preparatoria (1.° EGB - 5 años)",
    "edad": "5 años",
    "etapaPiaget": "Preoperacional"
  },
  {
    "id": "elemental",
    "name": "2. Básica Elemental (2.°, 3.°, 4.° EGB)",
    "edad": "6 a 8 años",
    "etapaPiaget": "Transición Preoperacional a Operaciones Concretas"
  },
  {
    "id": "media",
    "name": "3. Básica Media (5.°, 6.°, 7.° EGB)",
    "edad": "9 a 11 años",
    "etapaPiaget": "Operaciones Concretas"
  },
  {
    "id": "superior",
    "name": "4. Básica Superior (8.°, 9.°, 10.° EGB)",
    "edad": "12 a 14 años",
    "etapaPiaget": "Transición a Operaciones Formales"
  },
  {
    "id": "bachillerato",
    "name": "5. Bachillerato General Unificado (1.°, 2.°, 3.° BGU)",
    "edad": "15 a 17 años",
    "etapaPiaget": "Operaciones Formales / Pensamiento Hipotético"
  }
];

export const AREAS = [
  {
    "id": "matematica",
    "name": "Matemática",
    "icon": "📐"
  },
  {
    "id": "lengua",
    "name": "Lengua y Literatura",
    "icon": "📚"
  },
  {
    "id": "ciencias_sociales",
    "name": "Ciencias Sociales",
    "icon": "🌍",
    "subniveles": [
      "preparatoria",
      "elemental",
      "media",
      "superior"
    ]
  },
  {
    "id": "ciencias_naturales",
    "name": "Ciencias Naturales",
    "icon": "🌿",
    "subniveles": [
      "preparatoria",
      "elemental",
      "media",
      "superior"
    ]
  },
  {
    "id": "historia",
    "name": "Historia",
    "icon": "🏛️",
    "subniveles": [
      "bachillerato"
    ]
  },
  {
    "id": "filosofia",
    "name": "Filosofía",
    "icon": "💭",
    "subniveles": [
      "bachillerato"
    ]
  },
  {
    "id": "ciudadania",
    "name": "Educación para la Ciudadanía",
    "icon": "⚖️",
    "subniveles": [
      "bachillerato"
    ]
  },
  {
    "id": "biologia",
    "name": "Biología",
    "icon": "🧬",
    "subniveles": [
      "bachillerato"
    ]
  },
  {
    "id": "fisica",
    "name": "Física",
    "icon": "⚡",
    "subniveles": [
      "bachillerato"
    ]
  },
  {
    "id": "quimica",
    "name": "Química",
    "icon": "🧪",
    "subniveles": [
      "bachillerato"
    ]
  },
  {
    "id": "educacion_artistica",
    "name": "Educación Cultural y Artística (ECA)",
    "icon": "🎨"
  },
  {
    "id": "educacion_fisica",
    "name": "Educación Física",
    "icon": "⚽"
  },
  {
    "id": "ingles",
    "name": "Inglés / Foreign Language",
    "icon": "🗣️"
  }
];

export const DCD_DATABASE = [
  {
    "codigo": "CN.B.5.1.1",
    "subnivel": "bachillerato",
    "area": "biologia",
    "titulo": "Biomoléculas orgánicas y funciones celulares vitales",
    "descripcion": "CN.B.5.1.1. Indagar los patrones de organización de las biomoléculas orgánicas (glúcidos, lípidos, proteínas y ácidos nucleicos) y relacionar su estructura química con las funciones celulares de nutrición, transporte y reproducción genética.",
    "criterioEvaluacion": "CE.CN.B.5.1. Argumenta el origen de la vida y la importancia de las biomoléculas en el mantenimiento de la célula viva.",
    "indicadorEvaluacion": "I.CN.B.5.1.1. Explica la importancia de las biomoléculas como base estructural y funcional de los seres vivos.",
    "habilidad": "Indagar, relacionar y argumentar",
    "conocimiento": "Biomoléculas (carbohidratos, lípidos, proteínas, ADN/ARN), metabolismo celular",
    "contexto": "Salud, nutrición balanceada y biotecnología moderna",
    "nivelCognitivo": "Análisis / Comprensión"
  },
  {
    "codigo": "CN.B.5.1.6",
    "subnivel": "bachillerato",
    "area": "biologia",
    "titulo": "Estructura química y función biológica de carbohidratos, lípidos, proteínas y ácidos nucleicos",
    "descripcion": "CN.B.5.1.6. Describir la estructura y función de las biomoléculas (carbohidratos, lípidos, proteínas y ácidos nucleicos) que constituyen a los seres vivos.",
    "criterioEvaluacion": "CE.CN.B.5.1. Explica los fundamentos químicos de la estructura celular.",
    "indicadorEvaluacion": "I.CN.B.5.1.2. Relaciona la desnaturalización proteica con factores de pH y temperatura.",
    "habilidad": "Relacionar estructura química con actividad metabólica, formular hipótesis",
    "conocimiento": "Enlace peptídico, fosfolípidos de membrana, doble hélice del ADN",
    "contexto": "Pruebas de Lugol y Biuret en alimentos cotidianos dentro del laboratorio",
    "nivelCognitivo": "Operaciones Formales"
  },
  {
    "codigo": "CN.B.5.2.1",
    "subnivel": "bachillerato",
    "area": "biologia",
    "titulo": "Homeostasis corporal y coordinación neuroendocrina e inmune",
    "descripcion": "CN.B.5.2.1. Explicar las propiedades y funciones de los sistemas osteomuscular, neuroendocrino e inmunológico en el mantenimiento de la homeostasis corporal.",
    "criterioEvaluacion": "CE.CN.B.5.4. Argumenta la importancia del equilibrio fisiológico en la prevención de patologías.",
    "indicadorEvaluacion": "I.CN.B.5.4.1. Modela mecanismos de retroalimentación negativa en la regulación de glucosa sanguínea.",
    "habilidad": "Diagramar bucles de retroalimentación hormonal, analizar sintomatologías clínicas",
    "conocimiento": "Insulina/glucagón, respuesta inmunitaria adaptativa, eje hipotálamo-hipofisario",
    "contexto": "Estudio de casos sobre diabetes mellitus y respuesta a vacunas",
    "nivelCognitivo": "Operaciones Formales"
  },
  {
    "codigo": "CS.EC.5.1.2",
    "subnivel": "bachillerato",
    "area": "ciudadania",
    "titulo": "Derechos humanos fundamentales y su evolución histórica",
    "descripcion": "CS.EC.5.1.2. Analizar el origen y evolución histórica de los derechos humanos y su consagración en las constituciones modernas, reconociendo la dignidad humana como fundamento de la igualdad y la justicia social.",
    "criterioEvaluacion": "CE.CS.EC.5.1. Explica la evolución de los derechos humanos y el ejercicio de la ciudadanía en un Estado democrático.",
    "indicadorEvaluacion": "I.CS.EC.5.1.1. Analiza el origen de los derechos humanos y promueve prácticas de respeto e inclusión en su comunidad.",
    "habilidad": "Analizar, argumentar y promover",
    "conocimiento": "Declaración Universal de DDHH, dignidad humana, ciudadanía activa, igualdad",
    "contexto": "Convivencia escolar, Estado de derecho y garantías ciudadanas",
    "nivelCognitivo": "Análisis / Valoración"
  },
  {
    "codigo": "CS.EC.5.1.3",
    "subnivel": "bachillerato",
    "area": "ciudadania",
    "titulo": "Evolución de los Derechos Humanos: de las declaraciones históricas al derecho internacional",
    "descripcion": "CS.EC.5.1.3. Analizar los procesos históricos que propiciaron la Declaración de los Derechos del Hombre y del Ciudadano (1789) y la Declaración Universal (1948).",
    "criterioEvaluacion": "CE.CS.EC.5.1. Examina la génesis histórica de los derechos y sus garantías.",
    "indicadorEvaluacion": "I.CS.EC.5.1.2. Relaciona las revoluciones burguesas con los derechos civiles y políticos.",
    "habilidad": "Evaluar progresividad de derechos, reconocer luchas sociales de universalización",
    "conocimiento": "Derechos de 1ra, 2da y 3ra generación; dignidad humana inalienable",
    "contexto": "Juicios simulados ante la Corte Interamericana de Derechos Humanos",
    "nivelCognitivo": "Operaciones Formales"
  },
  {
    "codigo": "CS.EC.5.2.1",
    "subnivel": "bachillerato",
    "area": "ciudadania",
    "titulo": "Mecanismos de democracia representativa, directa y deliberativa",
    "descripcion": "CS.EC.5.2.1. Contextualizar el nacimiento de la democracia moderna, considerando los procesos de lucha que se libraron por la ampliación del sufragio universal.",
    "criterioEvaluacion": "CE.CS.EC.5.3. Contrasta formas de gobierno y mecanismos de participación ciudadana.",
    "indicadorEvaluacion": "I.CS.EC.5.3.1. Explica la importancia del voto facultativo para jóvenes de 16 y 17 años en Ecuador.",
    "habilidad": "Argumentar sobre legitimidad democrática, rendición de cuentas y soberanía popular",
    "conocimiento": "Constitución 2008, Quinto Poder (Participación Ciudadana), revocatoria de mandato",
    "contexto": "Elecciones de consejo estudiantil con debates y propuestas fiscalizables",
    "nivelCognitivo": "Operaciones Formales"
  },
  {
    "codigo": "ECA.5.1.1",
    "subnivel": "bachillerato",
    "area": "educacion_artistica",
    "titulo": "Producciones artísticas contemporáneas y pensamiento crítico",
    "descripcion": "ECA.5.1.1. Realizar producciones artísticas interdisciplinares (instalaciones, performances, videoarte, fotografía) a partir de temas de relevancia social y ecológica contemporánea.",
    "criterioEvaluacion": "CE.ECA.5.1. Desarrolla proyectos artísticos interdisciplinarios.",
    "indicadorEvaluacion": "I.ECA.5.1.1. Crea obras visuales y conceptuales con mensaje transformador.",
    "habilidad": "Crear, conceptualizar y exponer",
    "conocimiento": "Arte contemporáneo, videoarte, crítica social a través del arte",
    "contexto": "Espacio público y muestras culturales juveniles",
    "nivelCognitivo": "Creación / Operaciones Formales"
  },
  {
    "codigo": "EF.5.1.1",
    "subnivel": "bachillerato",
    "area": "educacion_fisica",
    "titulo": "Acondicionamiento físico regular y salud cardiovascular",
    "descripcion": "EF.5.1.1. Reconocer los beneficios de la actividad física regular y autónoma para la salud postural, cardiovascular y el bienestar mental, diseñando planes personales de ejercicio.",
    "criterioEvaluacion": "CE.EF.5.1. Diseña y ejecuta planes personales de acondicionamiento físico.",
    "indicadorEvaluacion": "I.EF.5.1.1. Monitorea su frecuencia cardíaca y adapta cargas de entrenamiento.",
    "habilidad": "Planificar, evaluar y autogestionar",
    "conocimiento": "Entrenamiento aeróbico, frecuencia cardíaca, higiene postural",
    "contexto": "Estilo de vida saludable y prevención del sedentarismo",
    "nivelCognitivo": "Autonomía / Valoración"
  },
  {
    "codigo": "CS.F.5.1.1",
    "subnivel": "bachillerato",
    "area": "filosofia",
    "titulo": "El origen del pensamiento filosófico y el paso del mito al logos",
    "descripcion": "CS.F.5.1.1. Comprender el surgimiento del pensamiento filosófico a partir de la crítica del mito en la Grecia antigua y diferenciar el pensamiento racional del pensamiento mítico-religioso en situaciones de la vida actual.",
    "criterioEvaluacion": "CE.CS.F.5.1. Contrasta el pensamiento mítico del filosófico a partir del análisis del origen de la razón.",
    "indicadorEvaluacion": "I.CS.F.5.1.1. Identifica el origen del pensamiento filosófico y diferencia la argumentación racional frente a falacias míticas.",
    "habilidad": "Comprender, contrastar y diferenciar",
    "conocimiento": "Mito, logos, razón, presocráticos, argumentación lógica",
    "contexto": "Pensamiento crítico y deliberación ciudadana contemporánea",
    "nivelCognitivo": "Análisis / Evaluación"
  },
  {
    "codigo": "CS.F.5.1.3",
    "subnivel": "bachillerato",
    "area": "filosofia",
    "titulo": "Diferenciación entre saber mítico, religioso, científico y filosófico",
    "descripcion": "CS.F.5.1.3. Analizar y comprender las diversas producciones del pensamiento humano (ciencia, religión, arte) y su relación con el filosofar.",
    "criterioEvaluacion": "CE.CS.F.5.1. Contrasta las distintas respuestas epistemológicas al enigma de la existencia.",
    "indicadorEvaluacion": "I.CS.F.5.1.2. Distingue el razonamiento lógico-demostrativo del relato alegórico.",
    "habilidad": "Problematizar supuestos, diferenciar métodos de validación de la verdad",
    "conocimiento": "Epistemología, paso del Mythos al Logos en la Grecia arcaica",
    "contexto": "Cafés filosóficos escolares y debates sobre inteligencia artificial y ética",
    "nivelCognitivo": "Operaciones Formales"
  },
  {
    "codigo": "CS.F.5.2.1",
    "subnivel": "bachillerato",
    "area": "filosofia",
    "titulo": "Lógica aristotélica formal: silogismos, tablas de verdad y validez",
    "descripcion": "CS.F.5.2.1. Diferenciar las falacias de las paradojas, comprendiendo su aplicación en los discursos políticos, publicitarios y de la vida cotidiana.",
    "criterioEvaluacion": "CE.CS.F.5.2. Aplica las leyes de la lógica clásica en la construcción de argumentos coherentes.",
    "indicadorEvaluacion": "I.CS.F.5.2.1. Formula silogismos válidos y detecta contradicciones premisas-conclusión.",
    "habilidad": "Formalizar proposiciones, evaluar validez deductiva y formal",
    "conocimiento": "Premisas mayor y menor, término medio, reglas silogísticas",
    "contexto": "Análisis de discursos en prensa y ejercicios de demostración matemática",
    "nivelCognitivo": "Operaciones Formales"
  },
  {
    "codigo": "CN.F.5.1.1",
    "subnivel": "bachillerato",
    "area": "fisica",
    "titulo": "Movimiento rectilíneo uniforme (MRU) y variado (MRUV)",
    "descripcion": "CN.F.5.1.1. Determinar la posición y el desplazamiento de un objeto considerando la velocidad y aceleración vectoriales en dos dimensiones, en situaciones de MRU y MRUV mediante gráficas y simuladores interactivos.",
    "criterioEvaluacion": "CE.CN.F.5.1. Obtiene magnitudes cinemáticas del MRU y MRUV a partir de tablas y gráficas de movimiento.",
    "indicadorEvaluacion": "I.CN.F.5.1.1. Determina magnitudes cinemáticas del movimiento rectilíneo en una y dos dimensiones analizando tablas y gráficos.",
    "habilidad": "Determinar, graficar y modelar cinemáticamente",
    "conocimiento": "MRU, MRUV, velocidad, aceleración, gráficas posición-tiempo",
    "contexto": "Tránsito vial, trayectorias deportivas y física aplicada",
    "nivelCognitivo": "Aplicación / Análisis"
  },
  {
    "codigo": "CN.F.5.1.16",
    "subnivel": "bachillerato",
    "area": "fisica",
    "titulo": "Leyes del movimiento de Newton y diagramas de cuerpo libre (DCL)",
    "descripcion": "CN.F.5.1.16. Indagar los principios de Newton (inercia, fuerza y masa, acción y reacción) y aplicarlos para resolver problemas de dinámica elemental.",
    "criterioEvaluacion": "CE.CN.F.5.4. Aplica las leyes de Newton en sistemas mecánicos con o sin fricción.",
    "indicadorEvaluacion": "I.CN.F.5.4.1. Elabora diagramas de cuerpo libre descomponiendo vectores de fuerza en planos inclinados.",
    "habilidad": "Dibujar DCL, aplicar segunda ley (Sumatoria de F = m*a) y calcular coeficientes de rozamiento",
    "conocimiento": "Fuerza normal, peso (mg), tensión, fuerza de rozamiento estático y dinámico",
    "contexto": "Seguridad vial (frenado de vehículos, uso de cinturón por inercia)",
    "nivelCognitivo": "Operaciones Formales"
  },
  {
    "codigo": "CN.F.5.1.2",
    "subnivel": "bachillerato",
    "area": "fisica",
    "titulo": "Cinemática del Movimiento Rectilíneo Uniformemente Variado (MRUV)",
    "descripcion": "CN.F.5.1.2. Explicar, por medio de la experimentación de un objeto y el análisis de tablas y gráficas, que el MRUV implica una aceleración constante en el tiempo.",
    "criterioEvaluacion": "CE.CN.F.5.1. Obtiene magnitudes cinemáticas del MRUV con herramientas gráficas y algebraicas.",
    "indicadorEvaluacion": "I.CN.F.5.1.2. Resuelve ecuaciones cinemáticas de aceleración, velocidad final y desplazamiento.",
    "habilidad": "Calcular derivadas cinemáticas elementales, graficar parábolas de posición y verificar unidades del SI",
    "conocimiento": "Ecuaciones de aceleración constante: vf = vo + at, d = vot + 1/2at^2",
    "contexto": "Sensores de movimiento con microcontroladores (Arduino) y caída de cuerpos",
    "nivelCognitivo": "Operaciones Formales"
  },
  {
    "codigo": "CS.H.5.1.3",
    "subnivel": "bachillerato",
    "area": "historia",
    "titulo": "La Revolución Neolítica: división social del trabajo y origen de la propiedad",
    "descripcion": "CS.H.5.1.3. Explicar y valorar la importancia del trabajo, la división social y la especialización en el Paleolítico y Neolítico para la supervivencia de la especie humana.",
    "criterioEvaluacion": "CE.CS.H.5.1. Analiza el papel protagónico del trabajo y la técnica en la evolución humana.",
    "indicadorEvaluacion": "I.CS.H.5.1.2. Examina el paso del nomadismo al sedentarismo y la domesticación de plantas.",
    "habilidad": "Explicar causalidades socioeconómicas y valorar el progreso técnico ancestral",
    "conocimiento": "Revolución agrícola, excedente de producción, aparición del Estado y patriarcado",
    "contexto": "Comparación con prácticas agrícolas indígenas andinas contemporáneas",
    "nivelCognitivo": "Operaciones Formales"
  },
  {
    "codigo": "CS.H.5.2.1",
    "subnivel": "bachillerato",
    "area": "historia",
    "titulo": "Transición de la Antigüedad clásica al Feudalismo europeo",
    "descripcion": "CS.H.5.2.1. Determinar las causas y consecuencias de la decadencia y caída del Imperio romano de Occidente y el surgimiento del feudalismo.",
    "criterioEvaluacion": "CE.CS.H.5.5. Explica las transformaciones políticas y económicas de la Edad Media.",
    "indicadorEvaluacion": "I.CS.H.5.5.1. Describe las relaciones de vasallaje y la servidumbre feudal.",
    "habilidad": "Analizar factores multicausales (económicos, militares, sociales) en grandes quiebres de era",
    "conocimiento": "Invasiones germánicas, fragmentación territorial, poder de la Iglesia y señoríos",
    "contexto": "Mapas dinámicos de Europa medieval y análisis de cartas de vasallaje",
    "nivelCognitivo": "Operaciones Formales"
  },
  {
    "codigo": "EFL.5.3.1",
    "subnivel": "bachillerato",
    "area": "ingles",
    "titulo": "Ensayos y discursos argumentativos en inglés (B1/B2)",
    "descripcion": "EFL.5.3.1. Produce clear, detailed academic texts on a wide range of subjects, explaining a viewpoint on a topical issue giving advantages and disadvantages of various options.",
    "criterioEvaluacion": "CE.EFL.5.3. Write coherent essays expressing well-argued opinions.",
    "indicadorEvaluacion": "I.EFL.5.3.1. Composes structured essays using academic discourse markers.",
    "habilidad": "Synthesize, argue and compose academically",
    "conocimiento": "Academic transitions (furthermore, nevertheless), thesis statements",
    "contexto": "University prep essays and global citizenship debates",
    "nivelCognitivo": "Producción Formal / Nivel B1+"
  },
  {
    "codigo": "LL.5.3.1",
    "subnivel": "bachillerato",
    "area": "lengua",
    "titulo": "Detección de contradicciones, ambigüedades y falacias lógicas en discursos",
    "descripcion": "LL.5.3.1. Valorar el contenido explícito e implícito de dos o más textos orales e identificar contradicciones, ambigüedades y falacias.",
    "criterioEvaluacion": "CE.LL.5.3. Evalúa la validez de los argumentos en textos orales y escritos.",
    "indicadorEvaluacion": "I.LL.5.3.1. Identifica falacias ad hominem, de generalización apresurada y petición de principio.",
    "habilidad": "Desmontar falacias lógicas, contrastar posturas y contraargumentar",
    "conocimiento": "Tipos de falacias, retórica persuasiva, análisis crítico del discurso mediático",
    "contexto": "Análisis de debates presidenciales, publicidad engañosa y editoriales de opinión",
    "nivelCognitivo": "Operaciones Formales"
  },
  {
    "codigo": "LL.5.4.1",
    "subnivel": "bachillerato",
    "area": "lengua",
    "titulo": "Construcción de ensayos académicos con normas de citación internacional (APA)",
    "descripcion": "LL.5.4.1. Construir un texto argumentativo seleccionando el tema y el propósito comunicativo, formulando la tesis y aplicando las normas de citación APA.",
    "criterioEvaluacion": "CE.LL.5.6. Aplica el proceso de escritura en la elaboración de ensayos con rigor académico.",
    "indicadorEvaluacion": "I.LL.5.6.1. Redacta ensayos estructurados con tesis rigurosa y referencias bibliográficas precisas.",
    "habilidad": "Investigar en bases de datos científicas, parafrasear y citar con honestidad académica",
    "conocimiento": "Normas APA 7ma edición, tesis central, argumentos empíricos y de autoridad",
    "contexto": "Monografías de grado, proyectos interdisciplinarios STEAM",
    "nivelCognitivo": "Operaciones Formales"
  },
  {
    "codigo": "M.5.1.20",
    "subnivel": "bachillerato",
    "area": "matematica",
    "titulo": "Análisis de funciones reales: dominio, recorrido, ceros y monotonía",
    "descripcion": "M.5.1.20. Graficar y analizar el dominio, recorrido, monotonía, ceros, extremos y paridad de las diferentes funciones reales (polinomiales, racionales, a trozos).",
    "criterioEvaluacion": "CE.M.5.3. Opera y grafica funciones reales reconociendo sus propiedades estructurales.",
    "indicadorEvaluacion": "I.M.5.3.1. Determina analíticamente intervalos de crecimiento, asíntotas y puntos críticos.",
    "habilidad": "Analizar comportamientos funcionales, graficar en GeoGebra e interpretar",
    "conocimiento": "Dominio, asíntotas verticales y horizontales, máximos y mínimos relativos",
    "contexto": "Modelado de trayectorias de proyectiles y propagación epidemiológica",
    "nivelCognitivo": "Operaciones Formales"
  },
  {
    "codigo": "M.5.1.23",
    "subnivel": "bachillerato",
    "area": "matematica",
    "titulo": "Modelado y análisis de funciones cuadráticas y polinomiales",
    "descripcion": "M.5.1.23. Reconocer funciones polinomiales de grado 2, identificar sus propiedades (concavidad, vértice, raíces, eje de simetría) y graficar de manera manual y mediante software dinámico para resolver problemas de optimización.",
    "criterioEvaluacion": "CE.M.5.3. Opera y emplea funciones reales para modelar y resolver situaciones de la ciencia y la cotidianidad.",
    "indicadorEvaluacion": "I.M.5.3.1. Grafica funciones reales analizando dominio, recorrido, monotonía y puntos extremos.",
    "habilidad": "Modelar y optimizar",
    "conocimiento": "Función cuadrática, parábolas, raíces, GeoGebra",
    "contexto": "Trayectorias físicas, ingresos y costos",
    "nivelCognitivo": "Operaciones Formales / Modelado Matemático"
  },
  {
    "codigo": "M.5.1.5",
    "subnivel": "bachillerato",
    "area": "matematica",
    "titulo": "Sistemas de ecuaciones lineales 2x2 y 3x3 por métodos analíticos y gráficos",
    "descripcion": "M.5.1.5. Identificar la intersección gráfica de dos rectas como la solución analítica de un sistema de dos ecuaciones lineales con dos incógnitas.",
    "criterioEvaluacion": "CE.M.5.2. Emplea sistemas de ecuaciones e inecuaciones para resolver situaciones de optimización.",
    "indicadorEvaluacion": "I.M.5.2.1. Resuelve sistemas por métodos de sustitución, reducción, determinantes y graficación.",
    "habilidad": "Modelar algebraicamente, resolver matricialmente y graficar",
    "conocimiento": "Sistemas compatibles determinados, indeterminados e incompatibles",
    "contexto": "Problemas de oferta y demanda económica, mezclas químicas",
    "nivelCognitivo": "Operaciones Formales"
  },
  {
    "codigo": "CN.Q.5.1.2",
    "subnivel": "bachillerato",
    "area": "quimica",
    "titulo": "Tabla periódica, configuración electrónica y enlaces químicos",
    "descripcion": "CN.Q.5.1.2. Examinar las leyes que rigen el comportamiento de los elementos químicos en la tabla periódica, su configuración electrónica y la formación de enlaces iónicos y covalentes para comprender las propiedades de la materia.",
    "criterioEvaluacion": "CE.CN.Q.5.2. Explica la estructura del átomo y la formación de enlaces químicos con base en la tabla periódica.",
    "indicadorEvaluacion": "I.CN.Q.5.2.1. Analiza la estructura electrónica de los átomos y predice el tipo de enlace químico que formarán.",
    "habilidad": "Examinar, predecir y representar",
    "conocimiento": "Tabla periódica, electrones de valencia, enlaces iónicos y covalentes",
    "contexto": "Compuestos del hogar, minerales y laboratorio químico",
    "nivelCognitivo": "Comprensión / Modelado"
  },
  {
    "codigo": "CN.Q.5.1.3",
    "subnivel": "bachillerato",
    "area": "quimica",
    "titulo": "Modelos de enlace químico: iónico, covalente y metálico",
    "descripcion": "CN.Q.5.1.3. Observar y comparar la teoría de enlace químico (iónico, covalente polar y no polar, metálico) desde la atracción electrostática entre iones y compartición de electrones.",
    "criterioEvaluacion": "CE.CN.Q.5.3. Predice el tipo de enlace químico a partir de la electronegatividad de los átomos.",
    "indicadorEvaluacion": "I.CN.Q.5.3.1. Dibuja estructuras de Lewis y explica puntos de fusión y solubilidad.",
    "habilidad": "Calcular delta de electronegatividad, dibujar diagramas de Lewis y predecir propiedades físicas",
    "conocimiento": "Regla del octeto, electrones de valencia, puentes de hidrógeno y fuerzas de Van der Waals",
    "contexto": "Pruebas de conductividad eléctrica en disolución acuosa de sal común vs azúcar",
    "nivelCognitivo": "Operaciones Formales"
  },
  {
    "codigo": "CN.Q.5.2.1",
    "subnivel": "bachillerato",
    "area": "quimica",
    "titulo": "Nomenclatura inorgánica sistemática, stock y tradicional de óxidos, hidróxidos y ácidos",
    "descripcion": "CN.Q.5.2.1. Deducir y comunicar que la formación de compuestos químicos responde a la necesidad de alcanzar mayor estabilidad energética y escribir sus fórmulas químicas.",
    "criterioEvaluacion": "CE.CN.Q.5.5. Formula y nombra compuestos químicos binarios y ternarios siguiendo normas IUPAC.",
    "indicadorEvaluacion": "I.CN.Q.5.5.1. Escribe fórmulas correctas balanceando estados de oxidación de metales y no metales.",
    "habilidad": "Determinar números de oxidación, cruzar valencias y nombrar con rigor IUPAC",
    "conocimiento": "Óxidos básicos y ácidos, hidróxidos, ácidos oxácidos e hidrácidos, sales haloideas",
    "contexto": "Lectura crítica de etiquetas de productos de limpieza, cosméticos y agroquímicos",
    "nivelCognitivo": "Operaciones Formales"
  },
  {
    "codigo": "CN.2.1.4",
    "subnivel": "elemental",
    "area": "ciencias_naturales",
    "titulo": "Clasificación de animales en vertebrados e invertebrados",
    "descripcion": "CN.2.1.4. Observar y describir las características de los animales y clasificarlos en vertebrados e invertebrados por la presencia o ausencia de columna vertebral.",
    "criterioEvaluacion": "CE.CN.2.2. Clasifica a los seres vivos según criterios morfológicos fundamentales.",
    "indicadorEvaluacion": "I.CN.2.2.1. Clasifica animales de su región identificando su estructura ósea.",
    "habilidad": "Observar, comparar y clasificar",
    "conocimiento": "Columna vertebral, 5 grupos de vertebrados (mamíferos, aves, peces, reptiles, anfibios)",
    "contexto": "Modelos de plastilina con fósforos como columna, fichas zoológicas",
    "nivelCognitivo": "Operaciones Concretas"
  },
  {
    "codigo": "CN.2.2.2",
    "subnivel": "elemental",
    "area": "ciencias_naturales",
    "titulo": "Función coordinada del aparato osteomuscular en el movimiento",
    "descripcion": "CN.2.2.2. Explorar y describir los órganos que permiten el movimiento del cuerpo y ejemplificar la función coordinada del esqueleto y de los músculos.",
    "criterioEvaluacion": "CE.CN.2.4. Comprende el funcionamiento del sistema locomotor y su cuidado.",
    "indicadorEvaluacion": "I.CN.2.4.1. Explica la interacción de huesos, articulaciones y músculos en acciones cotidianas.",
    "habilidad": "Experimentar, describir y cuidar",
    "conocimiento": "Huesos principales, articulaciones (codo, rodilla) y músculos flexores/extensores",
    "contexto": "Brazos mecánicos de cartón con hilos elásticos, simulaciones de flexión",
    "nivelCognitivo": "Operaciones Concretas"
  },
  {
    "codigo": "CS.2.1.1",
    "subnivel": "elemental",
    "area": "ciencias_sociales",
    "titulo": "La familia como núcleo de cuidado y diversidad de estructuras familiares",
    "descripcion": "CS.2.1.1. Reconocer a la familia como espacio primigenio de comunidad, apoyo y cuidado mutuo, valorando la diversidad de estructuras familiares y la corresponsabilidad en el hogar.",
    "criterioEvaluacion": "CE.CS.2.1. Identifica los diferentes tipos de familia y su rol fundamental en la comunidad.",
    "indicadorEvaluacion": "I.CS.2.1.1. Describe los diferentes tipos de familia y reflexiona sobre los derechos y responsabilidades familiares.",
    "habilidad": "Reconocer, describir y valorar",
    "conocimiento": "Tipos de familias, roles del hogar, árbol genealógico",
    "contexto": "Entorno familiar y vivencias del estudiante",
    "nivelCognitivo": "Comprensión / Valoración"
  },
  {
    "codigo": "CS.2.1.4",
    "subnivel": "elemental",
    "area": "ciencias_sociales",
    "titulo": "La escuela: historia, dependencias y normas de convivencia institucional",
    "descripcion": "CS.2.1.4. Reconocer la importancia de la escuela a partir de la investigación de sus orígenes fundacionales, funciones, servicios y normas de convivencia democrática.",
    "criterioEvaluacion": "CE.CS.2.2. Examina los vínculos de la escuela con la comunidad y sus normas de convivencia.",
    "indicadorEvaluacion": "I.CS.2.2.1. Infiere que la ubicación y normas de la escuela contribuyen a la convivencia armónica.",
    "habilidad": "Investigar, reconocer y aplicar",
    "conocimiento": "Institución escolar, dependencias, acuerdos de convivencia escolar",
    "contexto": "Espacio escolar y comunidad educativa",
    "nivelCognitivo": "Comprensión / Aplicación"
  },
  {
    "codigo": "CS.2.1.6",
    "subnivel": "elemental",
    "area": "ciencias_sociales",
    "titulo": "Orígenes y características de la parroquia, cantón y provincia",
    "descripcion": "CS.2.1.6. Indagar los orígenes fundacionales y las características más significativas de la localidad, parroquia, cantón y provincia.",
    "criterioEvaluacion": "CE.CS.2.2. Examina la historia y geografía de su comunidad local.",
    "indicadorEvaluacion": "I.CS.2.2.1. Reconoce personajes históricos y tradiciones de su cantón.",
    "habilidad": "Indagar, entrevistar y contrastar",
    "conocimiento": "Fundación local, símbolos patrios de la provincia y leyendas comunitarias",
    "contexto": "Entrevistas a abuelos de la comunidad, croquis y álbum ilustrado",
    "nivelCognitivo": "Operaciones Concretas"
  },
  {
    "codigo": "CS.2.2.1",
    "subnivel": "elemental",
    "area": "ciencias_sociales",
    "titulo": "Orientación con puntos cardinales en la escuela y la comunidad",
    "descripcion": "CS.2.2.1. Reconocer y ubicar los puntos cardinales en la escuela y la comunidad a partir de puntos de referencia y con la ayuda de mapas.",
    "criterioEvaluacion": "CE.CS.2.3. Se orienta espacialmente utilizando coordenadas y puntos cardinales.",
    "indicadorEvaluacion": "I.CS.2.3.1. Localiza sitios de la escuela y su hogar respecto al norte y sur.",
    "habilidad": "Orientar, graficar y localizar",
    "conocimiento": "Puntos cardinales (N, S, E, O), brújula y croquis escolar",
    "contexto": "Orientación con la salida del sol en el patio, búsqueda del tesoro",
    "nivelCognitivo": "Operaciones Concretas"
  },
  {
    "codigo": "ECA.2.2.4",
    "subnivel": "elemental",
    "area": "educacion_artistica",
    "titulo": "Elementos plásticos visuales (línea, color y textura)",
    "descripcion": "ECA.2.2.4. Describir los elementos plásticos presentes en el entorno natural y artificial (líneas, texturas, colores primarios y secundarios) utilizándolos en composiciones creativas propias.",
    "criterioEvaluacion": "CE.ECA.2.2. Identifica y utiliza elementos plásticos en representaciones visuales.",
    "indicadorEvaluacion": "I.ECA.2.2.1. Combina líneas, formas y texturas en la elaboración de dibujos expresivos.",
    "habilidad": "Observar, mezclar y componer",
    "conocimiento": "Colores secundarios, texturas táctiles, figuras bidimensionales",
    "contexto": "Naturaleza del patio y materiales reciclados",
    "nivelCognitivo": "Creación / Expresión Visual"
  },
  {
    "codigo": "EF.2.1.1",
    "subnivel": "elemental",
    "area": "educacion_fisica",
    "titulo": "Juegos populares, tradicionales y cooperativos",
    "descripcion": "EF.2.1.1. Identificar las características, objetivos y roles de los participantes en diferentes tipos de juegos populares y tradicionales para participar de manera segura e inclusiva.",
    "criterioEvaluacion": "CE.EF.2.1. Participa colectivamente en juegos populares y de persecución.",
    "indicadorEvaluacion": "I.EF.2.1.1. Aplica reglas básicas y acuerdos para jugar en equipo.",
    "habilidad": "Cooperar, correr y coordinar",
    "conocimiento": "Juegos tradicionales (rayuela, trompo, ensacados), trabajo cooperativo",
    "contexto": "Patio de recreo y festivales lúdicos",
    "nivelCognitivo": "Operaciones Concretas / Juego Colectivo"
  },
  {
    "codigo": "EFL.2.1.1",
    "subnivel": "elemental",
    "area": "ingles",
    "titulo": "Información personal básica en inglés (nombre, edad, emociones)",
    "descripcion": "EFL.2.1.1. Exchange basic personal information (name, age, feelings, family members) using simple standard phrases and visual cues.",
    "criterioEvaluacion": "CE.EFL.2.1. Formulate basic statements about identity and feelings.",
    "indicadorEvaluacion": "I.EFL.2.1.1. Asks and answers simple questions about personal details.",
    "habilidad": "Exchange information, pronounce and recognize",
    "conocimiento": "Greetings, personal pronouns (I, you), feelings (happy, sad, tired)",
    "contexto": "Roleplay activities, dialog cards and flashcards",
    "nivelCognitivo": "Comprensión / Diálogo Básico"
  },
  {
    "codigo": "LL.2.2.1",
    "subnivel": "elemental",
    "area": "lengua",
    "titulo": "Participación espontánea en diálogos y situaciones comunicativas cotidianas",
    "descripcion": "LL.2.2.1. Compartir de manera espontánea sus ideas, experiencias y necesidades en situaciones informales de la vida cotidiana.",
    "criterioEvaluacion": "CE.LL.2.3. Dialoga con claridad respetando turnos de habla y normas de cortesía.",
    "indicadorEvaluacion": "I.LL.2.3.1. Expresa opiniones argumentadas en asambleas de grado.",
    "habilidad": "Escuchar, formular preguntas y relatar",
    "conocimiento": "Turno de conversación, volumen de voz, coherencia temporal",
    "contexto": "Círculo de la mañana, juego del micrófono y narración de anécdotas",
    "nivelCognitivo": "Operaciones Concretas"
  },
  {
    "codigo": "LL.2.3.5",
    "subnivel": "elemental",
    "area": "lengua",
    "titulo": "Comprensión lectora y extracción de ideas centrales",
    "descripcion": "LL.2.3.5. Desarrollar estrategias cognitivas como lectura de paratextos, establecimiento del propósito de lectura, relectura, relectura selectiva y parafraseo para autorregular la comprensión de textos informativos y narrativos.",
    "criterioEvaluacion": "CE.LL.2.5. Comprende contenidos implícitos y explícitos, emite juicios valorativos y autorregula la comprensión mediante estrategias cognitivas.",
    "indicadorEvaluacion": "I.LL.2.5.2. Comprende los contenidos implícitos de un texto basándose en inferencias espaciotemporales, referenciales y de causa-efecto.",
    "habilidad": "Autorregular y comprender",
    "conocimiento": "Estrategias de comprensión lectora, textos narrativos",
    "contexto": "Lecturas guiadas del entorno escolar y familiar",
    "nivelCognitivo": "Comprensión / Análisis"
  },
  {
    "codigo": "LL.2.4.1",
    "subnivel": "elemental",
    "area": "lengua",
    "titulo": "Escritura de oraciones con concordancia y ortografía fonológica",
    "descripcion": "LL.2.4.1. Desarrollar progresivamente autonomía y calidad en la producción de relatos de experiencias personales y descripciones sencillas, aplicando la concordancia de género y número y las normas ortográficas básicas.",
    "criterioEvaluacion": "CE.LL.2.8. Aplica el proceso de escritura en la producción de textos narrativos y descriptivos.",
    "indicadorEvaluacion": "I.LL.2.8.2. Aplica el proceso de escritura en la construcción de textos sencillos, usando adecuadamente la concordancia gramatical.",
    "habilidad": "Redactar y estructurar",
    "conocimiento": "Concordancia género/número, código alfabético, estructura de la oración",
    "contexto": "Experiencias personales y vivencias",
    "nivelCognitivo": "Aplicación / Creación"
  },
  {
    "codigo": "LL.2.4.7",
    "subnivel": "elemental",
    "area": "lengua",
    "titulo": "Aplicación de reglas ortográficas de fonemas y grafemas (c/qu/k, s/c/z)",
    "descripcion": "LL.2.4.7. Aplicar progresivamente las reglas de escritura mediante la reflexión fonológica en la escritura ortográfica de fonemas.",
    "criterioEvaluacion": "CE.LL.2.9. Utiliza elementos gramaticales y ortográficos en sus producciones.",
    "indicadorEvaluacion": "I.LL.2.9.2. Escribe palabras aplicando correctamente correspondencias fonema-grafema.",
    "habilidad": "Reflexionar, corregir y redactar",
    "conocimiento": "Ortografía de ca/que/qui/co/cu, uso de mayúscula y punto final",
    "contexto": "Tarjetas de autodictado, cajas de palabras y escritura en parejas",
    "nivelCognitivo": "Operaciones Concretas"
  },
  {
    "codigo": "M.2.1.12",
    "subnivel": "elemental",
    "area": "matematica",
    "titulo": "Adición y sustracción con reagrupación hasta el 999",
    "descripcion": "M.2.1.12. Representar, escribir y leer los números naturales del 0 al 999 en forma concreta, gráfica y simbólica, y resolver adiciones y sustracciones con reagrupación con los números hasta el 999 con material concreto en la resolución de problemas de la vida cotidiana.",
    "criterioEvaluacion": "CE.M.2.2. Aplica estrategias de conteo, el concepto de número, expresiones matemáticas sencillas, propiedades de la suma y la multiplicación, procedimientos de cálculos de suma, resta y multiplicación con números de hasta tres cifras.",
    "indicadorEvaluacion": "I.M.2.2.3. Opera utilizando la adición y sustracción con números naturales de hasta tres cifras en el contexto de un problema matemático del entorno.",
    "habilidad": "Representar, calcular y resolver problemas",
    "conocimiento": "Números naturales hasta 999, adición y sustracción con reagrupación",
    "contexto": "Situaciones de la vida cotidiana y material concreto",
    "nivelCognitivo": "Aplicación / Comprensión"
  },
  {
    "codigo": "M.2.1.14",
    "subnivel": "elemental",
    "area": "matematica",
    "titulo": "Reconocer el valor posicional de números hasta tres cifras",
    "descripcion": "M.2.1.14. Reconocer el valor posicional de números naturales de hasta tres cifras, basándose en la composición y descomposición de unidades, decenas y centenas mediante el uso de material concreto y con representación simbólica.",
    "criterioEvaluacion": "CE.M.2.2. Aplica estrategias de conteo y concepto de número.",
    "indicadorEvaluacion": "I.M.2.2.1. Completa secuencias numéricas y reconoce el valor posicional de números de hasta tres cifras con material concreto.",
    "habilidad": "Reconocer y descomponer",
    "conocimiento": "Valor posicional (Unidades, Decenas, Centenas)",
    "contexto": "Material base 10 y ábaco",
    "nivelCognitivo": "Comprensión"
  },
  {
    "codigo": "M.2.1.19",
    "subnivel": "elemental",
    "area": "matematica",
    "titulo": "Resolución de problemas de adición con material concreto",
    "descripcion": "M.2.1.19. Relacionar la noción de adición con la de agregar objetos a un conjunto y resolver problemas de la vida cotidiana.",
    "criterioEvaluacion": "CE.M.2.2. Aplica estrategias de conteo y cálculo de adición en la resolución de problemas.",
    "indicadorEvaluacion": "I.M.2.2.1. Emplea la suma sin reagrupación para solucionar problemas del contexto.",
    "habilidad": "Modelar, sumar y comprobar",
    "conocimiento": "Adición sin reagrupación hasta 999 con Base 10",
    "contexto": "Juegos de tiendita escolar, resolución guiada con material multibase",
    "nivelCognitivo": "Operaciones Concretas"
  },
  {
    "codigo": "M.2.1.2",
    "subnivel": "elemental",
    "area": "matematica",
    "titulo": "Patrones numéricos crecientes y decrecientes con operaciones",
    "descripcion": "M.2.1.2. Describir y reproducir patrones numéricos crecientes con la suma y decrecientes con la resta.",
    "criterioEvaluacion": "CE.M.2.1. Descubre patrones lógicos y numéricos para resolver problemas sencillos.",
    "indicadorEvaluacion": "I.M.2.1.1. Completa secuencias numéricas utilizando operaciones de suma o resta.",
    "habilidad": "Analizar, deducir y generalizar patrones",
    "conocimiento": "Secuencias numéricas de 2 en 2, 5 en 5 y 10 en 10",
    "contexto": "Tablas de 100 números, saltos en la semirrecta numérica",
    "nivelCognitivo": "Transición Preoperacional a Concreto"
  },
  {
    "codigo": "M.2.2.5",
    "subnivel": "elemental",
    "area": "matematica",
    "titulo": "Distinción de lados, vértices y frontera en figuras geométricas",
    "descripcion": "M.2.2.5. Distinguir lados, frontera exterior e interior, vértices y ángulos en figuras geométricas: cuadrados, triángulos, rectángulos y círculos.",
    "criterioEvaluacion": "CE.M.2.3. Reconoce elementos constitutivos de polígonos regulares e irregulares.",
    "indicadorEvaluacion": "I.M.2.3.1. Cuenta y señala lados y vértices en figuras bidimensionales.",
    "habilidad": "Medir, trazar y clasificar",
    "conocimiento": "Lados, esquinas (vértices) y líneas rectas y curvas",
    "contexto": "Geoplanos con elásticos, tangram y recortes geométricos",
    "nivelCognitivo": "Operaciones Concretas"
  },
  {
    "codigo": "CN.3.1.1",
    "subnivel": "media",
    "area": "ciencias_naturales",
    "titulo": "Estructura celular animal y vegetal y funciones vitales",
    "descripcion": "CN.3.1.1. Indagar, con uso del microscopio o de las TIC, la estructura y función de las células animales y vegetales, y clasificarlas por sus características morfológicas y funcionales.",
    "criterioEvaluacion": "CE.CN.3.1. Explica la importancia de la célula como unidad estructural de la vida.",
    "indicadorEvaluacion": "I.CN.3.1.1. Compara las partes y organelos de la célula vegetal y animal.",
    "habilidad": "Indagar, observar microscópicamente y comparar",
    "conocimiento": "Célula animal vs vegetal, núcleo, membrana, cloroplastos",
    "contexto": "Laboratorio de ciencias, muestras vegetales y simuladores virtuales",
    "nivelCognitivo": "Análisis / Operaciones Concretas"
  },
  {
    "codigo": "CN.3.1.9",
    "subnivel": "media",
    "area": "ciencias_naturales",
    "titulo": "Ecosistemas del Ecuador y conservación en áreas protegidas",
    "descripcion": "CN.3.1.9. Indagar sobre los ecosistemas de Ecuador y describir las características de las áreas protegidas del país y las amenazas a su biodiversidad.",
    "criterioEvaluacion": "CE.CN.3.3. Analiza los factores de equilibrio ecológico y propuestas de conservación.",
    "indicadorEvaluacion": "I.CN.3.3.1. Diseña planes sencillos para proteger ecosistemas frágiles de su localidad.",
    "habilidad": "Indagar, diagnosticar y proponer soluciones ecológicas",
    "conocimiento": "SNAP (Sistema Nacional de Áreas Protegidas), cadenas tróficas, especies endémicas",
    "contexto": "Proyectos de huerto escolar, campañas de reciclaje y debates sobre deforestación",
    "nivelCognitivo": "Operaciones Concretas"
  },
  {
    "codigo": "CN.3.2.1",
    "subnivel": "media",
    "area": "ciencias_naturales",
    "titulo": "Estructura y función integrada de los sistemas de nutrición humana",
    "descripcion": "CN.3.2.1. Indagar y describir la estructura y función de los sistemas digestivo, respiratorio, circulatorio y excretor, y promover su cuidado.",
    "criterioEvaluacion": "CE.CN.3.5. Explica la relación entre nutrición, respiración y excreción celular.",
    "indicadorEvaluacion": "I.CN.3.5.1. Modela el recorrido de nutrientes y oxígeno en el organismo.",
    "habilidad": "Relacionar funciones, modelar y promover estilos de vida saludable",
    "conocimiento": "Interacción digestiva-circulatoria y pautas de nutrición balanceada",
    "contexto": "Modelos con tubos transparentes y bombas de agua para simular circulación",
    "nivelCognitivo": "Operaciones Concretas"
  },
  {
    "codigo": "CS.3.1.9",
    "subnivel": "media",
    "area": "ciencias_sociales",
    "titulo": "La Colonia en la Real Audiencia de Quito y formas de explotación indígena",
    "descripcion": "CS.3.1.9. Identificar a los conquistadores españoles, su relación con los pueblos indígenas y las formas de trabajo colonial (mitas, obrajes, concertaje).",
    "criterioEvaluacion": "CE.CS.3.1. Analiza el proceso colonial en el actual territorio ecuatoriano.",
    "indicadorEvaluacion": "I.CS.3.1.2. Explica las consecuencias sociales y demográficas de la colonización española.",
    "habilidad": "Analizar, contrastar y empatizar",
    "conocimiento": "Mita, obraje, encomienda, mestizaje cultural y resistencia indígena",
    "contexto": "Visitas a museos coloniales o análisis de fuentes gráficas históricas",
    "nivelCognitivo": "Operaciones Concretas"
  },
  {
    "codigo": "CS.3.2.3",
    "subnivel": "media",
    "area": "ciencias_sociales",
    "titulo": "Regiones naturales del Ecuador, relieves y pisos climáticos",
    "descripcion": "CS.3.2.3. Localizar los relieves, suelos y regiones naturales del Ecuador con el apoyo de diversos recursos cartográficos.",
    "criterioEvaluacion": "CE.CS.3.8. Distingue las características geográficas y ecológicas de las cuatro regiones del Ecuador.",
    "indicadorEvaluacion": "I.CS.3.8.1. Relaciona el clima, flora y fauna con las regiones Costa, Sierra, Oriente e Insular.",
    "habilidad": "Cartografiar, comparar y describir",
    "conocimiento": "Cordillera de los Andes, pisos altitudinales y microclimas del país",
    "contexto": "Mapas temáticos de relieve con plastilina y datos meteorológicos locales",
    "nivelCognitivo": "Operaciones Concretas"
  },
  {
    "codigo": "ECA.3.1.3",
    "subnivel": "media",
    "area": "educacion_artistica",
    "titulo": "Patrimonio artístico y cultural ecuatoriano en maquetas y dibujos",
    "descripcion": "ECA.3.1.3. Describir algunas características del patrimonio cultural y artístico del entorno próximo y elaborar representaciones gráficas y maquetas arquitectónicas.",
    "criterioEvaluacion": "CE.ECA.3.1. Reconoce y recrea manifestaciones del patrimonio cultural.",
    "indicadorEvaluacion": "I.ECA.3.1.1. Construye maquetas o dibujos que representan el patrimonio arquitectónico.",
    "habilidad": "Investigar, modelar y valorar",
    "conocimiento": "Patrimonio histórico local, técnicas tridimensionales, perspectiva básica",
    "contexto": "Centros históricos y museos comunitarios",
    "nivelCognitivo": "Aplicación / Creación"
  },
  {
    "codigo": "EF.3.2.2",
    "subnivel": "media",
    "area": "educacion_fisica",
    "titulo": "Secuencias gimnásticas y destrezas acrobáticas con seguridad",
    "descripcion": "EF.3.2.2. Crear secuencias gimnásticas individuales y colectivas con destrezas y acrobacias básicas reconociendo las precauciones corporales y el cuidado del compañero.",
    "criterioEvaluacion": "CE.EF.3.2. Diseña secuencias corporales expresivas y gimnásticas.",
    "indicadorEvaluacion": "I.EF.3.2.1. Construye coreografías gimnásticas coordinando con sus compañeros.",
    "habilidad": "Coordinar, equilibrar y trabajar en equipo",
    "conocimiento": "Rol adelante, parada de manos con apoyo, pirámides humanas sencillas",
    "contexto": "Gimnasio escolar y colchonetas de seguridad",
    "nivelCognitivo": "Aplicación / Coordinación Dinámica"
  },
  {
    "codigo": "EFL.3.2.3",
    "subnivel": "media",
    "area": "ingles",
    "titulo": "Comprensión de rutinas cotidianas en diálogos en inglés",
    "descripcion": "EFL.3.2.3. Record key information from short, spoken dialogues about familiar everyday routines, telling time, and hobbies.",
    "criterioEvaluacion": "CE.EFL.3.2. Extract specific information from spoken passages.",
    "indicadorEvaluacion": "I.EFL.3.2.1. Identifies key vocabulary related to daily routines and time.",
    "habilidad": "Listen for details, match and write",
    "conocimiento": "Daily routines (wake up, go to school), present simple, clock times",
    "contexto": "Audio dialogues, schedules and digital interactive games",
    "nivelCognitivo": "Comprensión Auditiva"
  },
  {
    "codigo": "LL.3.3.2",
    "subnivel": "media",
    "area": "lengua",
    "titulo": "Comprensión de contenidos implícitos mediante inferencias",
    "descripcion": "LL.3.3.2. Comprender los contenidos implícitos de un texto mediante la realización de inferencias fundamentales y valoraciones valorativas.",
    "criterioEvaluacion": "CE.LL.3.3. Establece relaciones de causa-efecto e inferencias en lecturas de diversos géneros.",
    "indicadorEvaluacion": "I.LL.3.3.1. Descifra intenciones no explícitas y formula hipótesis interpretativas.",
    "habilidad": "Inferir, deducir y contrastar",
    "conocimiento": "Pistas textuales, sentido figurado, causa-efecto",
    "contexto": "Clubes de lectura, fábulas y artículos de divulgación infantil",
    "nivelCognitivo": "Operaciones Concretas / Pensamiento Reflexivo"
  },
  {
    "codigo": "LL.3.4.1",
    "subnivel": "media",
    "area": "lengua",
    "titulo": "Redacción de relatos con secuencia lógica y manejo de conectores",
    "descripcion": "LL.3.4.1. Relatar textos con secuencia lógica, manejo de conectores y coherencia en el uso de la persona y del tiempo verbal e integrarlos en diversas situaciones comunicativas.",
    "criterioEvaluacion": "CE.LL.3.6. Produce textos narrativos organizados y estructurados.",
    "indicadorEvaluacion": "I.LL.3.6.1. Escribe crónicas o relatos aplicando conectores temporales y causales.",
    "habilidad": "Planificar, redactar y revisar",
    "conocimiento": "Estructura narrativa (inicio, nudo, desenlace), conectores de orden y causa",
    "contexto": "Periódico mural del curso, bitácora de excursiones",
    "nivelCognitivo": "Operaciones Concretas"
  },
  {
    "codigo": "M.3.1.28",
    "subnivel": "media",
    "area": "matematica",
    "titulo": "Operaciones con números decimales en situaciones cotidianas",
    "descripcion": "M.3.1.28. Calcular, aplicando algoritmos y la tecnología, sumas, restas, multiplicaciones y divisiones con números decimales.",
    "criterioEvaluacion": "CE.M.3.5. Opera con fracciones y números decimales en contextos reales.",
    "indicadorEvaluacion": "I.M.3.5.1. Aplica las propiedades de las operaciones con decimales con precisión.",
    "habilidad": "Alinear, calcular y verificar",
    "conocimiento": "Décimas, centésimas y milésimas; coma decimal en operaciones",
    "contexto": "Facturas de servicios básicos, mediciones de longitud en educación física",
    "nivelCognitivo": "Operaciones Concretas"
  },
  {
    "codigo": "M.3.1.33",
    "subnivel": "media",
    "area": "matematica",
    "titulo": "Lectura e interpretación de tablas y diagramas estadísticos",
    "descripcion": "M.3.1.33. Leer e interpretar información contenida en tablas de frecuencias, diagramas de barras, circulares y poligonales para resolver problemas y argumentar conclusiones basadas en datos estadísticos.",
    "criterioEvaluacion": "CE.M.3.10. Emplea programas informáticos para tabular y representar datos estadísticos y calcular medidas de tendencia central.",
    "indicadorEvaluacion": "I.M.3.10.1. Construye e interpreta tablas de frecuencia y gráficos estadísticos para comunicar conclusiones.",
    "habilidad": "Interpretar y comunicar datos",
    "conocimiento": "Estadística básica, gráficos de barras y circulares",
    "contexto": "Encuestas escolares y temas ambientales",
    "nivelCognitivo": "Análisis / Evaluación"
  },
  {
    "codigo": "M.3.1.9",
    "subnivel": "media",
    "area": "matematica",
    "titulo": "Multiplicación de números naturales y resolución de problemas",
    "descripcion": "M.3.1.9. Reconocer términos y realizar multiplicaciones entre números naturales, aplicando el algoritmo de la multiplicación y con el uso de la tecnología.",
    "criterioEvaluacion": "CE.M.3.1. Aplica el cálculo de operaciones combinadas con números naturales.",
    "indicadorEvaluacion": "I.M.3.1.2. Formula y resuelve problemas multiplicativos del entorno escolar.",
    "habilidad": "Calcular, estimar y resolver",
    "conocimiento": "Factores, producto, multiplicación por 2 y 3 cifras",
    "contexto": "Cálculo de presupuestos escolares y compras colectivas",
    "nivelCognitivo": "Operaciones Concretas"
  },
  {
    "codigo": "M.3.2.3",
    "subnivel": "media",
    "area": "matematica",
    "titulo": "Cálculo de perímetros y áreas de paralelogramos y trapecios",
    "descripcion": "M.3.2.3. Identificar paralelogramos y trapecios a partir del análisis de sus lados y de sus ángulos y calcular su perímetro.",
    "criterioEvaluacion": "CE.M.3.7. Explora y calcula perímetros y áreas de polígonos regulares e irregulares.",
    "indicadorEvaluacion": "I.M.3.7.1. Deduce fórmulas de perímetro y las aplica en situaciones prácticas.",
    "habilidad": "Medir, deducir fórmulas y aplicar",
    "conocimiento": "Perímetro (suma de lados), paralelogramos, trapecios y unidades de longitud",
    "contexto": "Medición del cerramiento de canchas y jardineras del colegio",
    "nivelCognitivo": "Operaciones Concretas"
  },
  {
    "codigo": "CN.1.1.2",
    "subnivel": "preparatoria",
    "area": "ciencias_naturales",
    "titulo": "Partes del cuerpo humano y hábitos de higiene",
    "descripcion": "CN.1.1.2. Identificar y describir las partes visibles del cuerpo humano y practicar hábitos de higiene personal.",
    "criterioEvaluacion": "CE.CN.1.1. Conoce las partes del cuerpo y hábitos saludables de autocuidado.",
    "indicadorEvaluacion": "I.CN.1.1.2. Demuestra prácticas de higiene diaria (lavado de manos, cepillado).",
    "habilidad": "Nombrar, señalar y practicar",
    "conocimiento": "Cabeza, tronco, extremidades, aseo personal diario",
    "contexto": "Espejo corporal, canciones motoras y rutina de lavado",
    "nivelCognitivo": "Preoperacional"
  },
  {
    "codigo": "CN.1.3.1",
    "subnivel": "preparatoria",
    "area": "ciencias_naturales",
    "titulo": "Diferenciación entre seres vivos y elementos inertes",
    "descripcion": "CN.1.3.1. Observar y diferenciar entre los seres vivos y la materia inerte (natural y artificial) del entorno a partir de sus características físicas.",
    "criterioEvaluacion": "CE.CN.1.1. Explica las características de los seres vivos frente a la materia inerte.",
    "indicadorEvaluacion": "I.CN.1.1.1. Identifica seres vivos del entorno y reconoce sus necesidades vitales básicas.",
    "habilidad": "Observar, comparar y clasificar",
    "conocimiento": "Seres vivos (plantas, animales, humanos) vs materia inerte (piedras, juguetes)",
    "contexto": "Patio escolar, jardín botánico y muestras de la naturaleza",
    "nivelCognitivo": "Preoperacional / Exploración Sensorial"
  },
  {
    "codigo": "CS.1.1.1",
    "subnivel": "preparatoria",
    "area": "ciencias_sociales",
    "titulo": "Identidad personal, esquema corporal y autovaloración",
    "descripcion": "CS.1.1.1. Reconocer que es un ser que siente, piensa, opina y tiene necesidades, en función del conocimiento de su identidad, su nombre y su esquema corporal.",
    "criterioEvaluacion": "CE.CS.1.1. Reconoce y valora su propia identidad y pertenencia familiar.",
    "indicadorEvaluacion": "I.CS.1.1.1. Expresa sus datos personales, preferencias y emociones reconociéndose como ser único.",
    "habilidad": "Reconocer, verbalizar y autovalorar",
    "conocimiento": "Identidad personal, género, nombre y esquema corporal",
    "contexto": "Espejos del aula, autorretratos y círculo de conversación matutino",
    "nivelCognitivo": "Preoperacional / Identidad y Autonomía"
  },
  {
    "codigo": "CS.1.1.2",
    "subnivel": "preparatoria",
    "area": "ciencias_sociales",
    "titulo": "Comunicación de datos personales y sentido de pertenencia",
    "descripcion": "CS.1.1.2. Comunicar sus datos personales para reconocer sus nombres y apellidos, edad, teléfono y el lugar donde vive.",
    "criterioEvaluacion": "CE.CS.1.1. Reconoce y valora su identidad personal y familiar.",
    "indicadorEvaluacion": "I.CS.1.1.2. Expresa su nombre, edad y ubicación familiar con claridad y seguridad.",
    "habilidad": "Comunicar, identificar y autorreconocerse",
    "conocimiento": "Nombres y apellidos, edad, domicilio y número de contacto de emergencia",
    "contexto": "Ronda de preguntas, juegos de rol sobre identificación personal",
    "nivelCognitivo": "Preoperacional"
  },
  {
    "codigo": "CS.1.2.4",
    "subnivel": "preparatoria",
    "area": "ciencias_sociales",
    "titulo": "Pautas de convivencia pacífica y normas en el aula",
    "descripcion": "CS.1.2.4. Discriminar modelos positivos y negativos de comportamiento de sus pares y adultos en su entorno escolar y familiar, y adoptar pautas de convivencia armónica.",
    "criterioEvaluacion": "CE.CS.1.2. Practica normas de respeto y convivencia armónica en su comunidad.",
    "indicadorEvaluacion": "I.CS.1.2.1. Participa en juegos colectivos respetando turnos y acuerdos de convivencia.",
    "habilidad": "Discriminar, cooperar y respetar",
    "conocimiento": "Normas del aula, turnos de habla, resolución pacífica de desacuerdos",
    "contexto": "Juegos cooperativos y acuerdos del aula",
    "nivelCognitivo": "Preoperacional / Convivencia"
  },
  {
    "codigo": "CS.1.3.1",
    "subnivel": "preparatoria",
    "area": "ciencias_sociales",
    "titulo": "Ubicación y dependencias de la vivienda y escuela",
    "descripcion": "CS.1.3.1. Identificar las dependencias de las viviendas y su ubicación en relación a puntos de referencia del entorno.",
    "criterioEvaluacion": "CE.CS.1.2. Se orienta en el espacio cercano reconociendo lugares significativos.",
    "indicadorEvaluacion": "I.CS.1.2.1. Describe oralmente su casa y las zonas seguras del aula.",
    "habilidad": "Localizar, describir y orientarse",
    "conocimiento": "Nociones espaciales: arriba/abajo, cerca/lejos, dependencias del hogar",
    "contexto": "Maquetas de cartón, planos vivenciales con tiza en el patio",
    "nivelCognitivo": "Sensoriomotor / Preoperacional"
  },
  {
    "codigo": "ECA.1.1.2",
    "subnivel": "preparatoria",
    "area": "educacion_artistica",
    "titulo": "Expresión plástica con plastilina, dactilopintura y garabateo",
    "descripcion": "ECA.1.1.2. Expresar la propia identidad y emociones mediante el dibujo, el modelado y la dactilopintura con materiales diversos del entorno.",
    "criterioEvaluacion": "CE.ECA.1.1. Manifiesta curiosidad e interés por la exploración plástica.",
    "indicadorEvaluacion": "I.ECA.1.1.1. Utiliza materiales moldeables para representar libremente su entorno.",
    "habilidad": "Modelar, trazar y estampar",
    "conocimiento": "Colores primarios, texturas táctiles, modelado en plastilina",
    "contexto": "Taller de artes del aula y manualidades libres",
    "nivelCognitivo": "Sensoriomotor / Expresión Plástica"
  },
  {
    "codigo": "EF.1.1.1",
    "subnivel": "preparatoria",
    "area": "educacion_fisica",
    "titulo": "Coordinación motriz global y orientación espacial",
    "descripcion": "EF.1.1.1. Identificar las partes del cuerpo y las posibilidades motrices individuales y colectivas en juegos sensoriales y de desplazamiento espacial.",
    "criterioEvaluacion": "CE.EF.1.1. Participa en juegos de desplazamiento y coordinación postural.",
    "indicadorEvaluacion": "I.EF.1.1.1. Ajusta sus movimientos a consignas espaciales (arriba, abajo, cerca, lejos).",
    "habilidad": "Desplazarse, saltar y equilibrarse",
    "conocimiento": "Nociones espaciales, equilibrio dinámico y esquema corporal",
    "contexto": "Canchas escolares y circuitos psicomotrices",
    "nivelCognitivo": "Sensoriomotor / Psicomotricidad"
  },
  {
    "codigo": "EFL.1.1.1",
    "subnivel": "preparatoria",
    "area": "ingles",
    "titulo": "Saludos y respuestas a comandos simples en inglés (TPR)",
    "descripcion": "EFL.1.1.1. Respond to simple greetings (hello, goodbye) and classroom instructions (stand up, sit down) through movement, gestures, and songs.",
    "criterioEvaluacion": "CE.EFL.1.1. Understand basic classroom greetings and commands.",
    "indicadorEvaluacion": "I.EFL.1.1.1. Performs physical actions in response to spoken English commands.",
    "habilidad": "Listen, imitate and respond",
    "conocimiento": "Basic greetings, numbers 1-5, action verbs (TPR)",
    "contexto": "Classroom songs and interactive circle time",
    "nivelCognitivo": "Preoperacional / TPR"
  },
  {
    "codigo": "LL.1.5.16",
    "subnivel": "preparatoria",
    "area": "lengua",
    "titulo": "Exploración inicial de palabras mediante pictogramas y fonemas",
    "descripcion": "LL.1.5.16. Explorar la formación de palabras y oraciones sencillas mediante representaciones pictográficas y fonológicas.",
    "criterioEvaluacion": "CE.LL.1.6. Inicia el proceso de codificación escrita con trazos y dibujos.",
    "indicadorEvaluacion": "I.LL.1.6.1. Escribe o dibuja signos propios para comunicar un mensaje a sus pares.",
    "habilidad": "Graficar, codificar y expresar",
    "conocimiento": "Escritura emergente, garabateo controlado y pictogramas",
    "contexto": "Cartas a compañeros, dictado de dibujos y rotulación lúdica",
    "nivelCognitivo": "Preoperacional"
  },
  {
    "codigo": "LL.1.5.5",
    "subnivel": "preparatoria",
    "area": "lengua",
    "titulo": "Desarrollo de la conciencia fonológica y léxica",
    "descripcion": "LL.1.5.5. Desarrollar la expresión oral en contextos cotidianos usando la conciencia fonológica (rimas, aliteraciones, segmentación silábica) y la conciencia léxica.",
    "criterioEvaluacion": "CE.LL.1.3. Desarrolla la expresión oral mediante la conciencia fonológica y el vocabulario.",
    "indicadorEvaluacion": "I.LL.1.3.1. Discrimina sonidos iniciales y finales, produce rimas y segmenta sílabas en palabras familiares.",
    "habilidad": "Discriminar, segmentar y pronunciar",
    "conocimiento": "Conciencia fonológica, sonidos de las vocales, rimas infantiles",
    "contexto": "Juegos de palabras, canciones infantiles y relatos orales",
    "nivelCognitivo": "Preoperacional / Expresión Oral"
  },
  {
    "codigo": "LL.1.5.8",
    "subnivel": "preparatoria",
    "area": "lengua",
    "titulo": "Diferenciación entre imagen y texto escrito",
    "descripcion": "LL.1.5.8. Diferenciar entre imagen y texto escrito en diversos materiales del entorno impreso y digital.",
    "criterioEvaluacion": "CE.LL.1.4. Reconoce la función del texto frente a las imágenes en su entorno.",
    "indicadorEvaluacion": "I.LL.1.4.1. Señala dónde está el texto para leer y dónde la ilustración.",
    "habilidad": "Discriminar, señalar y explorar",
    "conocimiento": "Portadores de texto, rótulos, etiquetas e imágenes",
    "contexto": "Biblioteca de aula, cuentos gigantes y etiquetas del salón",
    "nivelCognitivo": "Preoperacional / Simbólico"
  },
  {
    "codigo": "M.1.4.1",
    "subnivel": "preparatoria",
    "area": "matematica",
    "titulo": "Reconocimiento y clasificación de colores primarios y secundarios",
    "descripcion": "M.1.4.1. Reconocer los colores primarios: rojo, amarillo y azul; los colores blanco y negro y secundarios en objetos del entorno.",
    "criterioEvaluacion": "CE.M.1.1. Clasifica objetos del entorno según sus características físicas.",
    "indicadorEvaluacion": "I.M.1.1.1. Compara y distingue objetos según su color primario o secundario.",
    "habilidad": "Reconocer, discriminar y clasificar",
    "conocimiento": "Colores primarios y secundarios en material concreto",
    "contexto": "Rincón de arte y manipulación de bloques de construcción",
    "nivelCognitivo": "Sensoriomotor / Preoperacional"
  },
  {
    "codigo": "M.1.4.14",
    "subnivel": "preparatoria",
    "area": "matematica",
    "titulo": "Conteo y cuantificación de colecciones del 1 al 10",
    "descripcion": "M.1.4.14. Identificar cantidades y asociarlas con los numerales del 1 al 10 en material concreto y situaciones lúdicas de la vida cotidiana.",
    "criterioEvaluacion": "CE.M.1.2. Utiliza el conteo de colecciones de objetos hasta el 10 en situaciones cotidianas.",
    "indicadorEvaluacion": "I.M.1.2.2. Resuelve situaciones cotidianas que requieren de la comparación y conteo de colecciones de hasta 10 elementos.",
    "habilidad": "Contar, asociar y discriminar",
    "conocimiento": "Correspondencia uno a uno, número y cantidad hasta 10",
    "contexto": "Rincón de juegos, material no estructurado y canciones lúdicas",
    "nivelCognitivo": "Preoperacional / Simbólico"
  },
  {
    "codigo": "M.1.4.2",
    "subnivel": "preparatoria",
    "area": "matematica",
    "titulo": "Descripción y reproducción de patrones simples",
    "descripcion": "M.1.4.2. Describir y reproducir patrones con objetos del entorno por color, forma, tamaño o longitud.",
    "criterioEvaluacion": "CE.M.1.1. Identifica regularidades y secuencias perceptivas simples.",
    "indicadorEvaluacion": "I.M.1.1.2. Continúa y reproduce secuencias lógicas de dos elementos.",
    "habilidad": "Secuenciar, ordenar y anticipar",
    "conocimiento": "Patrones alternados por color y forma",
    "contexto": "Juegos de mesa, ensartado de cuentas y fichas lúdicas",
    "nivelCognitivo": "Preoperacional"
  },
  {
    "codigo": "M.1.4.21",
    "subnivel": "preparatoria",
    "area": "matematica",
    "titulo": "Reconocimiento de figuras geométricas básicas bidimensionales",
    "descripcion": "M.1.4.21. Reconocer figuras geométricas (triángulo, cuadrado, rectángulo y círculo) en objetos del entorno cotidiano y en representaciones gráficas.",
    "criterioEvaluacion": "CE.M.1.3. Reconoce figuras geométricas básicas en objetos del entorno.",
    "indicadorEvaluacion": "I.M.1.3.1. Identifica y nombra figuras geométricas básicas en objetos de su contexto.",
    "habilidad": "Identificar, discriminar y nombrar",
    "conocimiento": "Círculo, cuadrado, triángulo y rectángulo",
    "contexto": "Objetos del aula, bloques lógicos y figuras del hogar",
    "nivelCognitivo": "Preoperacional / Sensoriomotor"
  },
  {
    "codigo": "CN.4.1.3",
    "subnivel": "superior",
    "area": "ciencias_naturales",
    "titulo": "Diferenciación estructural entre células procariotas y eucariotas al microscopio",
    "descripcion": "CN.4.1.3. Indagar, con uso del microscopio o de las TIC, la estructura y función de las células procariotas y eucariotas, y clasificarlas por sus características.",
    "criterioEvaluacion": "CE.CN.4.2. Explica la complejidad de la organización celular y sus organelos.",
    "indicadorEvaluacion": "I.CN.4.2.1. Identifica núcleo celular, membrana, pared celular y cloroplastos.",
    "habilidad": "Manejar instrumental de laboratorio, esquematizar y clasificar",
    "conocimiento": "ADN disperso vs. carioteca; organelos membranosos en vegetales y animales",
    "contexto": "Observación de células de cebolla y bacterias del yogur en laboratorio",
    "nivelCognitivo": "Operaciones Concretas a Formales"
  },
  {
    "codigo": "CN.4.3.1",
    "subnivel": "superior",
    "area": "ciencias_naturales",
    "titulo": "Concepto de rapidez, velocidad y aceleración en el movimiento rectilíneo",
    "descripcion": "CN.4.3.1. Investigar en forma experimental y explicar la posición de un objeto respecto a un punto de referencia, y calcular la rapidez.",
    "criterioEvaluacion": "CE.CN.4.8. Explica las leyes de cinemática elemental a partir de mediciones experimentales.",
    "indicadorEvaluacion": "I.CN.4.8.1. Calcula rapidez mediante relaciones distancia-tiempo en gráficos cinemáticos.",
    "habilidad": "Medir tiempos, graficar vectores de posición y calcular razones de cambio",
    "conocimiento": "Rapidez media = d/t, gráficas x vs t, sistemas de referencia inerciales",
    "contexto": "Rampas con carros de juguete y cronómetros de teléfonos móviles",
    "nivelCognitivo": "Operaciones Formales"
  },
  {
    "codigo": "CS.4.1.16",
    "subnivel": "superior",
    "area": "ciencias_sociales",
    "titulo": "Aportes culturales y científicos de las civilizaciones fluviales de la antigüedad",
    "descripcion": "CS.4.1.16. Analizar el origen de los primeros imperios en el Medio Oriente y el Mediterráneo y sus aportes a la cultura universal (escritura, leyes, arquitectura).",
    "criterioEvaluacion": "CE.CS.4.1. Analiza el desarrollo de las civilizaciones antiguas de Oriente y Occidente.",
    "indicadorEvaluacion": "I.CS.4.1.2. Reconoce el legado del Código de Hammurabi, la democracia ateniense y el derecho romano.",
    "habilidad": "Contextualizar cronológicamente, comparar legados jurídicos y sintetizar",
    "conocimiento": "Mesopotamia, Egipto, Grecia y Roma; escritura cuneiforme y jeroglífica",
    "contexto": "Líneas de tiempo interactivas y simulación del senado romano",
    "nivelCognitivo": "Operaciones Formales"
  },
  {
    "codigo": "CS.4.3.1",
    "subnivel": "superior",
    "area": "ciencias_sociales",
    "titulo": "Diversidad étnica y pluriculturalidad en la Constitución ecuatoriana",
    "descripcion": "CS.4.3.1. Apreciar las culturas del Ecuador a partir del estudio de su origen, localización y rasgos más destacados, reconociendo la plurinacionalidad del Estado.",
    "criterioEvaluacion": "CE.CS.4.10. Examina la construcción de la identidad nacional pluricultural.",
    "indicadorEvaluacion": "I.CS.4.10.1. Valora las nacionalidades y pueblos indígenas, afroecuatorianos y montubios.",
    "habilidad": "Valorar la diversidad, cuestionar estereotipos y defender los derechos colectivos",
    "conocimiento": "Plurinacionalidad, justicia indígena, lenguas ancestrales y patrimonio inmaterial",
    "contexto": "Festivales interculturales y análisis de sentencias constitucionales de derechos",
    "nivelCognitivo": "Operaciones Formales"
  },
  {
    "codigo": "ECA.4.1.5",
    "subnivel": "superior",
    "area": "educacion_artistica",
    "titulo": "Línea de tiempo visual del arte ecuatoriano e indigenista",
    "descripcion": "ECA.4.1.5. Elaborar una línea de tiempo o mapa mental con imágenes y textos que resuman momentos clave de la historia del arte ecuatoriano (Escuela Quiteña, Indigenismo).",
    "criterioEvaluacion": "CE.ECA.4.1. Reconoce y valora los hitos del arte plástico nacional.",
    "indicadorEvaluacion": "I.ECA.4.1.1. Explica la relevancia estética del indigenismo en la plástica ecuatoriana.",
    "habilidad": "Investigar, sintetizar y diseñar",
    "conocimiento": "Oswaldo Guayasamín, Eduardo Kingman, Escuela Quiteña, arte contemporáneo",
    "contexto": "Galerías digitales y exposiciones escolares",
    "nivelCognitivo": "Análisis / Síntesis Visual"
  },
  {
    "codigo": "EF.4.1.1",
    "subnivel": "superior",
    "area": "educacion_fisica",
    "titulo": "Estrategias tácticas y reglas en deportes colectivos inclusivos",
    "descripcion": "EF.4.1.1. Participar en diferentes categorías de deportes y juegos cooperativos acordando reglas, tácticas ofensivas y defensivas, y respetando la diversidad corporal.",
    "criterioEvaluacion": "CE.EF.4.1. Aplica tácticas y juego limpio en deportes colectivos.",
    "indicadorEvaluacion": "I.EF.4.1.1. Propone soluciones tácticas inclusivas en situaciones reales de juego.",
    "habilidad": "Planificar, cooperar y resolver motrizmente",
    "conocimiento": "Tácticas de pase, marcación, juego limpio (Fair Play)",
    "contexto": "Encuentros deportivos escolares intercursos",
    "nivelCognitivo": "Transición a Operaciones Formales"
  },
  {
    "codigo": "EFL.4.3.1",
    "subnivel": "superior",
    "area": "ingles",
    "titulo": "Comprensión y redacción de textos argumentativos cortos en inglés",
    "descripcion": "EFL.4.3.1. Understand the main points of short texts on familiar topics (environment, technology, teenage life) and write simple cohesive paragraphs using connectors.",
    "criterioEvaluacion": "CE.EFL.4.3. Produce clear paragraphs on personal opinions and social topics.",
    "indicadorEvaluacion": "I.EFL.4.3.1. Uses linking words (because, although, but) to justify ideas.",
    "habilidad": "Read critically, argue and write",
    "conocimiento": "Opinion phrases (I think, In my view), connectors of contrast and reason",
    "contexto": "Essays, blogs and classroom debates in English",
    "nivelCognitivo": "Producción Escrita / Argumentación"
  },
  {
    "codigo": "LL.4.3.1",
    "subnivel": "superior",
    "area": "lengua",
    "titulo": "Contraste y evaluación crítica de fuentes y argumentos en textos informativos",
    "descripcion": "LL.4.3.1. Comparar, bajo criterios preestablecidos, las relaciones explícitas entre los contenidos de dos o más textos y contrastar sus fuentes.",
    "criterioEvaluacion": "CE.LL.4.5. Desarrolla criterios de lectura crítica evaluando validez y veracidad.",
    "indicadorEvaluacion": "I.LL.4.5.1. Identifica sesgos, falacias y confiabilidad en fuentes digitales e impresas.",
    "habilidad": "Evaluar, contrastar fuentes y argumentar puntos de vista",
    "conocimiento": "Fuentes primarias y secundarias, fake news, rigor documental",
    "contexto": "Debates sobre noticias virales y ensayos comparativos en clase",
    "nivelCognitivo": "Operaciones Formales"
  },
  {
    "codigo": "LL.4.3.4",
    "subnivel": "superior",
    "area": "lengua",
    "titulo": "Análisis crítico de textos argumentativos y discursos",
    "descripcion": "LL.4.3.4. Autorregular la comprensión de un texto mediante la aplicación de estrategias cognitivas de comprensión autoseleccionadas, de acuerdo con el propósito de lectura y las dificultades identificadas en textos argumentativos y periodísticos.",
    "criterioEvaluacion": "CE.LL.4.5. Comprende en sus niveles literal, inferencial y crítico-valorativo diversos tipos de texto, y autorregula su comprensión.",
    "indicadorEvaluacion": "I.LL.4.5.1. Compara, bajo criterios preestablecidos, las relaciones explícitas entre los contenidos de dos o más textos y contrasta sus fuentes.",
    "habilidad": "Analizar críticamente y contrastar fuentes",
    "conocimiento": "Tesis, argumentos, falacias, puntos de vista",
    "contexto": "Debates actuales, medios digitales y redes sociales",
    "nivelCognitivo": "Evaluación crítica"
  },
  {
    "codigo": "LL.4.4.1",
    "subnivel": "superior",
    "area": "lengua",
    "titulo": "Escritura de textos argumentativos y ensayos con estructura formal",
    "descripcion": "LL.4.4.1. Escribir textos periodísticos y académicos con manejo de su estructura básica, y sustentar las ideas con razones y ejemplos organizados de manera jerárquica.",
    "criterioEvaluacion": "CE.LL.4.7. Produce textos argumentativos cohesivos y coherentes.",
    "indicadorEvaluacion": "I.LL.4.7.1. Formula una tesis y la defiende con argumentos lógicos documentados.",
    "habilidad": "Estructurar tesis, redactar argumentos de autoridad y contraargumentar",
    "conocimiento": "Ensayo argumentativo, citas cortas, conectores lógicos de oposición y causa",
    "contexto": "Publicación de cartas al director y debates de oratoria estudiantil",
    "nivelCognitivo": "Operaciones Formales"
  },
  {
    "codigo": "M.4.1.14",
    "subnivel": "superior",
    "area": "matematica",
    "titulo": "Operaciones y conversiones entre decimales y fracciones en Q",
    "descripcion": "M.4.1.14. Representar y reconocer los números racionales a través de expresiones decimales y fraccionarias y resolver operaciones básicas en Q.",
    "criterioEvaluacion": "CE.M.4.1. Emplea las relaciones de orden, las propiedades algebraicas y las operaciones en Q.",
    "indicadorEvaluacion": "I.M.4.1.2. Transforma fracciones en decimales exactos o periódicos y opera con ellos.",
    "habilidad": "Convertir, simplificar y operar",
    "conocimiento": "Números racionales, fracción generatriz y proporcionalidad",
    "contexto": "Recetas de cocina a escala, cálculo de descuentos y repartos equitativos",
    "nivelCognitivo": "Transición a Operaciones Formales"
  },
  {
    "codigo": "M.4.1.20",
    "subnivel": "superior",
    "area": "matematica",
    "titulo": "Ecuaciones de primer grado con una incógnita y resolución de problemas",
    "descripcion": "M.4.1.20. Resolver ecuaciones de primer grado con una incógnita en Z y en Q en la solución de problemas contextualizados.",
    "criterioEvaluacion": "CE.M.4.2. Plantea y resuelve ecuaciones e inecuaciones de primer grado con una incógnita.",
    "indicadorEvaluacion": "I.M.4.2.1. Despeja incógnitas y verifica algebraicamente el resultado obtenido.",
    "habilidad": "Traducir lenguaje natural a algebraico, despejar y verificar",
    "conocimiento": "Lenguaje algebraico, propiedades de la igualdad y despeje de variables",
    "contexto": "Problemas de edades, cálculo de distancias y finanzas personales juveniles",
    "nivelCognitivo": "Operaciones Formales"
  },
  {
    "codigo": "M.4.2.5",
    "subnivel": "superior",
    "area": "matematica",
    "titulo": "Teorema de Thales y semejanza de triángulos",
    "descripcion": "M.4.2.5. Definir e identificar figuras geométricas semejantes de acuerdo con las medidas de los ángulos y la razón de proporcionalidad de sus lados (teorema de Thales).",
    "criterioEvaluacion": "CE.M.4.5. Aplica criterios de semejanza y teoremas geométricos en la resolución de problemas.",
    "indicadorEvaluacion": "I.M.4.5.1. Resuelve problemas de cálculo de alturas inaccesibles aplicando el teorema de Thales.",
    "habilidad": "Calcular, deducir y comprobar",
    "conocimiento": "Semejanza, escalas, proporciones, teorema de Thales",
    "contexto": "Medición de sombras en el patio escolar y planos arquitectónicos",
    "nivelCognitivo": "Operaciones Concretas a Formales"
  },
  {
    "codigo": "M.4.3.1",
    "subnivel": "superior",
    "area": "matematica",
    "titulo": "Medidas de tendencia central y dispersión en datos agrupados y no agrupados",
    "descripcion": "M.4.3.1. Organizar datos no agrupados y agrupados en tablas de frecuencias y calcular la media, mediana, moda y rango.",
    "criterioEvaluacion": "CE.M.4.7. Representa y analiza información estadística con medidas representativas.",
    "indicadorEvaluacion": "I.M.4.7.1. Interpreta la media, mediana y moda para tomar decisiones informadas.",
    "habilidad": "Recolectar, tabular, calcular e interpretar estadísticamente",
    "conocimiento": "Media aritmética, mediana, moda, frecuencias relativas y porcentuales",
    "contexto": "Encuestas sobre uso de redes sociales en la institución educativa",
    "nivelCognitivo": "Operaciones Formales"
  }
];

export const PERFILES_COGNITIVOS = [
  {
    "id": "tdah",
    "nombre": "TDAH (Déficit de Atención con o sin Hiperactividad)",
    "icono": "⚡",
    "categoria": "No asociada a discapacidad",
    "caracteristicasCognitivas": {
      "atencion": "Dificultad en atención sostenida y selectiva; alta distractibilidad ante estímulos externos.",
      "memoriaTrabajo": "Capacidad reducida para retener secuencias de instrucciones de más de 2 pasos.",
      "funcionesEjecutivas": "Dificultad en autorregulación, control de impulsos, planificación y gestión del tiempo.",
      "estiloAprendizaje": "Visual-kinestésico, motivado por retos dinámicos con retroalimentación inmediata."
    },
    "implicacionPiaget": "Necesidad de acción física directa sobre los objetos para anclar el pensamiento; la falta de movimiento inhibe la asimilación cognitiva.",
    "implicacionVygotsky": "Requiere andamiaje externo constante para el lenguaje interiorizador (auto-instrucciones verbales) y micro-metas con refuerzo mediado."
  },
  {
    "id": "dislexia",
    "nombre": "Dislexia / Dificultad Específica en Lectoescritura",
    "icono": "📖",
    "categoria": "No asociada a discapacidad",
    "caracteristicasCognitivas": {
      "atencion": "Fatiga atencional rápida durante tareas de decodificación de texto denso.",
      "memoriaTrabajo": "Déficit en el bucle fonológico de la memoria de trabajo verbal.",
      "funcionesEjecutivas": "Conservadas; excelente razonamiento visoespacial y pensamiento holístico/creativo.",
      "estiloAprendizaje": "Multisensorial, visual, icónico, narrativo y experiencial."
    },
    "implicacionPiaget": "El paso del significante gráfico al significado se bloquea; se debe favorecer la manipulación de letras en relieve y el soporte pictórico antes del texto plano.",
    "implicacionVygotsky": "La mediación semiótica debe apoyarse en canales orales y visuales (lectura mediada por un par o software lector de pantalla), evitando que la decodificación bloquee la ZPD conceptual."
  },
  {
    "id": "discalculia",
    "nombre": "Discalculia / Dificultad en Razonamiento Numérico",
    "icono": "🔢",
    "categoria": "No asociada a discapacidad",
    "caracteristicasCognitivas": {
      "atencion": "Normal, pero con ansiedad matemática y bloqueo ante símbolos numéricos abstractos.",
      "memoriaTrabajo": "Déficit severo en la memoria de hechos aritméticos y reconocimiento de patrones cuantitativos rápidos (subitizing).",
      "funcionesEjecutivas": "Dificultad específica en la secuenciación de algoritmos paso a paso.",
      "estiloAprendizaje": "Concreto-manipulativo puro (enfoque CPA: Concreto -> Pictórico -> Abstracto)."
    },
    "implicacionPiaget": "Permanece más tiempo en la necesidad de operaciones concretas reales (recontar objetos físicos tangibles) antes de interiorizar el concepto abstracto de cardinalidad.",
    "implicacionVygotsky": "El andamiaje requiere mediadores externos estructurados (tablas visuales de operaciones, regletas de Cuisenaire, ábaco) y modelado en voz alta del docente."
  },
  {
    "id": "tea",
    "nombre": "Trastorno del Espectro Autista (TEA Grado 1 / Síndrome de Asperger)",
    "icono": "🧩",
    "categoria": "Asociada o no a discapacidad según dictamen",
    "caracteristicasCognitivas": {
      "atencion": "Hiperfoco en temas de interés restringido; dificultad para alternar el foco atencional.",
      "memoriaTrabajo": "Excelente memoria mecánica y visual; dificultad con enunciados ambiguos o metáforas.",
      "funcionesEjecutivas": "Rigidez cognitiva ante cambios de rutina; sensibilidad a sobrecarga sensorial acústica o visual.",
      "estiloAprendizaje": "Visual estricto, estructurado, secuencial, explícito y sin ambigüedades."
    },
    "implicacionPiaget": "Pensamiento anclado en la lógica directa y la literalidad; el conflicto cognitivo debe introducirse de manera muy suave y predecible para no generar desregulación emocional.",
    "implicacionVygotsky": "La mediación social entre pares requiere \"guiones sociales\" explícitos y contratos pedagógicos visuales para la interacción colaborativa en la ZPD."
  },
  {
    "id": "discapacidad_intelectual_leve",
    "nombre": "Discapacidad Intelectual (Leve a Moderada)",
    "icono": "🌱",
    "categoria": "Asociada a discapacidad",
    "caracteristicasCognitivas": {
      "atencion": "Lapsos de concentración breves; requiere pausas y variedad de estímulos.",
      "memoriaTrabajo": "Capacidad de almacenamiento y procesamiento significativamente más lenta.",
      "funcionesEjecutivas": "Dificultad marcada para la abstracción, generalización a nuevos contextos y razonamiento hipotético.",
      "estiloAprendizaje": "Vivencial, repetitivo con sentido funcional, basado en la vida diaria y material concreto."
    },
    "implicacionPiaget": "Estadio de desarrollo anclado en el nivel Preoperacional avanzado o de Operaciones Concretas elementales. Imposibilidad de asimilar conceptos puramente formales o abstractos.",
    "implicacionVygotsky": "La Zona de Desarrollo Próximo es estrecha pero muy receptiva si se brindan andamiajes directos de alta frecuencia, mediación asistida continua y tareas descompuestas en micro-pasos."
  },
  {
    "id": "discapacidad_visual",
    "nombre": "Baja Visión / Discapacidad Visual",
    "icono": "👁️",
    "categoria": "Asociada a discapacidad",
    "caracteristicasCognitivas": {
      "atencion": "Sostenida, pero con mayor fatiga perceptual táctil o auditiva.",
      "memoriaTrabajo": "Alta retención auditiva y memoria secuencial espacial.",
      "funcionesEjecutivas": "Excelente desarrollo de la verbalización y el razonamiento lógico-deductivo.",
      "estiloAprendizaje": "Háptico-kinestésico (tacto 3D), auditivo y descriptivo detallado."
    },
    "implicacionPiaget": "La exploración de los objetos y la asimilación del espacio requieren experiencia manipulativa háptica tridimensional antes de cualquier abstracción espacial.",
    "implicacionVygotsky": "La mediación semiótica se basa en la descripción verbal enriquecida y la guía manual mano-sobre-mano para explorar el andamiaje instrumental."
  },
  {
    "id": "discapacidad_auditiva",
    "nombre": "Hipoacusia / Discapacidad Auditiva",
    "icono": "🦻",
    "categoria": "Asociada a discapacidad",
    "caracteristicasCognitivas": {
      "atencion": "Visual altamente focalizada; fatiga por lectura labiofacial continuada.",
      "memoriaTrabajo": "Memoria visoespacial muy desarrollada; bucle fonológico sustituido por codificación viso-gestual.",
      "funcionesEjecutivas": "Conservadas; pueden existir vacíos de vocabulario técnico en lengua oral.",
      "estiloAprendizaje": "Visual predominante (esquemas, lengua de señas, mapas conceptuales, videos subtitulados)."
    },
    "implicacionPiaget": "Las representaciones simbólicas operan preferentemente a través de significantes visuales y espaciales en vez de fonéticos.",
    "implicacionVygotsky": "La mediación instrumental crucial es la Lengua de Señas (LSEC) o el soporte textual visual, permitiendo la interacción paritaria en la ZPD."
  },
  {
    "id": "altas_capacidades",
    "nombre": "Altas Capacidades / Talento Sobresaliente",
    "icono": "🚀",
    "categoria": "No asociada a discapacidad (Dotación superior)",
    "caracteristicasCognitivas": {
      "atencion": "Rápido desinterés y aburrimiento si la tarea es repetitiva o de baja demanda cognitiva.",
      "memoriaTrabajo": "Excepcional capacidad de retención y procesamiento simultáneo.",
      "funcionesEjecutivas": "Pensamiento divergente, rapidez en deducciones lógicas y metacognición temprana.",
      "estiloAprendizaje": "Investigativo, autónomo, orientado a la resolución de problemas complejos."
    },
    "implicacionPiaget": "Acceso precoz al estadio de las Operaciones Formales y al pensamiento hipotético-deductivo.",
    "implicacionVygotsky": "Su ZPD debe expandirse mediante enriquecimiento curricular vertical y horizontal, proponiendo retos abiertos de investigación y rol de tutor de pares."
  }
];

export const GRADOS_ADAPTACION = [
  {
    "grado": 1,
    "nombre": "Grado 1 (De Acceso al Currículo)",
    "resumen": "Modificaciones en recursos, espacios, iluminación, mobiliario y ayudas técnicas. NO altera objetivos, metodologías nucleares ni destrezas.",
    "impactoDCD": "La DCD se mantiene 100% idéntica.",
    "ejemplos": "Ubicación preferencial en el aula cerca del docente, lupas, software con sintetizador de voz, rampas, atriles ergonómicos, eliminación de barreras acústicas.",
    "color": "#0284c7"
  },
  {
    "grado": 2,
    "nombre": "Grado 2 (No Significativa / Metodológica)",
    "resumen": "Modificaciones en metodología, tiempos de trabajo, material didáctico concreto y formato de evaluación. NO altera la DCD ni el objetivo base.",
    "impactoDCD": "La DCD se mantiene, pero se especifica el andamiaje metodológico con el que el estudiante la alcanzará.",
    "ejemplos": "Tutoría entre pares (par pedagógico Vygotsky), uso de regletas o bloques base 10 (Piaget), instrucciones divididas en pasos, 50% más de tiempo en pruebas, evaluaciones orales o con pictogramas.",
    "color": "#059669"
  },
  {
    "grado": 3,
    "nombre": "Grado 3 (Significativa / Curricular)",
    "resumen": "Modificación sustancial de objetivos, contenidos y Destrezas con Criterio de Desempeño (DCD). Se reduce la complejidad o se adoptan destrezas de subniveles anteriores.",
    "impactoDCD": "La DCD se desagrega o reclasifica formalmente en el DIAC con reducción de alcance y criterios adaptados.",
    "ejemplos": "Si el grupo estudia multiplicación con reagrupación, el estudiante consolida suma con material concreto; se priorizan destrezas funcionales para la autonomía y vida práctica.",
    "color": "#dc2626"
  }
];

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
