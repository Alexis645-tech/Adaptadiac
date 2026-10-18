// Motor Pedagógico de AdaptaDIAC: Vygotsky (ZDP / Andamiaje) y Piaget (Estadios / Enfoque CPA)
// Generador técnico para el Documento Individual de Adaptación Curricular (DIAC)

import { GRADOS_ADAPTACION } from './curriculum-data.js';

export function generarAdaptacionDIAC({ dcd, perfil, gradoAdaptacion, opciones = {} }) {
  const gradoInfo = GRADOS_ADAPTACION.find(g => g.grado === Number(gradoAdaptacion)) || GRADOS_ADAPTACION[1];
  const {
    estudianteNombre = 'Estudiante',
    institucion = 'Unidad Educativa',
    fecha = new Date().toLocaleDateString('es-EC', { year: 'numeric', month: 'long', day: 'numeric' }),
    observacionesDocente = '',
    nivelApoyo = 'Medio'
  } = opciones;

  // 1. DCD Desagregada / Adaptada según Grado de Adaptación
  const dcdAdaptada = generarDCDAdaptada(dcd, perfil, gradoAdaptacion);

  // 2. Fundamentación Vygotsky: ZDP, Mediación Semiótica, Par Pedagógico y Andamiaje
  const vygotskyEstrategias = generarEstrategiasVygotsky(dcd, perfil, gradoAdaptacion, nivelApoyo);

  // 3. Fundamentación Piaget: Estadios, Conflicto Cognitivo, Enfoque CPA (Concreto-Pictórico-Abstracto)
  const piagetEstrategias = generarEstrategiasPiaget(dcd, perfil, gradoAdaptacion, nivelApoyo);

  // 4. Secuencia Didáctica de Aula Inclusiva (3 Momentos DUA)
  const planClaseInclusivo = generarPlanClase(dcd, perfil, gradoAdaptacion, vygotskyEstrategias, piagetEstrategias);

  // 5. Adaptación en la Evaluación (Criterios, Indicadores, Instrumentos y Medidas de Acceso)
  const evaluacionAdaptada = generarEvaluacionAdaptada(dcd, perfil, gradoAdaptacion);

  // 6. Recursos Didácticos y Tecnológicos (Grado 1 / Acceso)
  const recursosYAcceso = generarRecursosAcceso(perfil, gradoAdaptacion, dcd.area);

  // 7. Recomendaciones para el DECE y Familia
  const corresponsabilidad = generarCorresponsabilidad(perfil, gradoAdaptacion);

  return {
    meta: {
      estudianteNombre,
      institucion,
      fecha,
      gradoAdaptacion,
      gradoNombre: gradoInfo.nombre,
      perfilId: perfil.id,
      perfilNombre: perfil.nombre,
      dcdCodigo: dcd.codigo,
      dcdTitulo: dcd.titulo,
      area: dcd.area,
      subnivel: dcd.subnivel,
      nivelApoyo,
      observacionesDocente
    },
    dcdOriginal: dcd,
    dcdAdaptada,
    vygotsky: vygotskyEstrategias,
    piaget: piagetEstrategias,
    planClase: planClaseInclusivo,
    evaluacion: evaluacionAdaptada,
    recursos: recursosYAcceso,
    corresponsabilidad
  };
}

// -------------------------------------------------------------
// Subfunciones Pedagógicas
// -------------------------------------------------------------

function generarDCDAdaptada(dcd, perfil, grado) {
  const g = Number(grado);

  if (g === 1) {
    return {
      codigo: dcd.codigo,
      tipo: 'Sin modificación curricular (Adaptación de Acceso)',
      texto: dcd.descripcion,
      justificacion: 'En Adaptación Grado 1, la Destreza con Criterio de Desempeño se mantiene en su totalidad. Se implementan únicamente adaptaciones de acceso físico, sensorial y tecnológico para garantizar su ejecución.',
      cambioVerbo: 'Mantiene el verbo y la exigencia cognitiva original.'
    };
  }

  if (g === 2) {
    return {
      codigo: `${dcd.codigo} (Metodológica)`,
      tipo: 'DCD Conservada con Mediación Metodológica Graduada',
      texto: `${dcd.descripcion} (Con mediación semiótica guiada, apoyos visuales/concretos y tiempo extendido adaptado a su perfil de ${perfil.nombre}).`,
      justificacion: 'En Adaptación Grado 2, la destreza nuclear y el criterio de desempeño se conservan. Se especifica el tipo de andamiaje y el soporte contextual para que el estudiante acceda a la misma meta que el grupo.',
      cambioVerbo: 'Conserva el verbo cognitivo, incorporando apoyos procedimentales.'
    };
  }

  // Grado 3: Significativa - Desagregación formal de la destreza
  let textoDesagregado = '';
  let justificacionGrado3 = '';

  if (dcd.area === 'matematica') {
    textoDesagregado = `Identificar y operar con cantidades elementales y secuencias guiadas utilizando material concreto estructurado en situaciones cotidianas simplificadas (Base funcional de ${dcd.codigo}).`;
    justificacionGrado3 = `Se reduce el nivel de abstracción matemática, limitando el rango numérico o simplificando el algoritmo formal para asegurar el dominio operativo vivencial.`;
  } else if (dcd.area === 'lengua') {
    textoDesagregado = `Reconocer la idea central y expresar significados a través de representaciones orales, gráficas o dramatizadas con apoyo de pictogramas a partir de textos breves leídos con mediador (Base funcional de ${dcd.codigo}).`;
    justificacionGrado3 = `Se reduce la exigencia de decodificación y escritura alfabética formal, priorizando la comprensión de significados y la comunicación oral/icónica.`;
  } else if (dcd.area === 'ciencias_naturales') {
    textoDesagregado = `Identificar y clasificar elementos de la naturaleza de su entorno inmediato mediante observación directa y manipulación guiada de muestras físicas (Base funcional de ${dcd.codigo}).`;
    justificacionGrado3 = `Se prioriza el reconocimiento perceptivo y la descripción funcional de los seres vivos frente a la taxonomía abstracta y memorización de organelos.`;
  } else {
    textoDesagregado = `Identificar nociones básicas y aspectos esenciales del contenido a través de imágenes, relatos orales y dramatizaciones guiadas (Base funcional de ${dcd.codigo}).`;
    justificacionGrado3 = `Se prioriza la noción vivencial y la relación con la cotidianidad del estudiante, reduciendo la densidad teórica.`;
  }

  return {
    codigo: `${dcd.codigo} (Desagregada)`,
    tipo: 'DCD Desagregada Significativamente (Grado 3)',
    texto: textoDesagregado,
    justificacion: justificacionGrado3,
    cambioVerbo: 'El verbo se ajusta a un nivel taxonómico accesible (Reconocer/Identificar/Clasificar con mediador) para consolidar las funciones cognitivas basales.'
  };
}

function generarEstrategiasVygotsky(dcd, perfil, grado, nivelApoyo) {
  // Configuración de la ZDP según perfil y grado
  const zdpDiagnostico = {
    nivelReal: `El estudiante opera de manera autónoma cuando la tarea se presenta en formatos de un solo paso o con estímulos familiares. Ante la tarea abstracta de "${dcd.habilidad || 'ejecución'}", suele manifestar fatiga o desorientación cognitiva si no cuenta con acompañamiento directo.`,
    nivelPotencial: `Con mediación semiótica estructurada, preguntas socráticas de guiado y apoyo del par pedagógico, el estudiante es capaz de alcanzar el núcleo de la destreza "${dcd.titulo}".`,
    brechaZDP: `La distancia entre la resolución independiente y la resolución asistida se reduce mediante andamios temporales que externalizan las funciones ejecutivas.`
  };

  // Andamiaje en 3 Fases (Scaffolding y Fading de Jerome Bruner / Vygotsky)
  const andamiaje = [
    {
      fase: '1. Modelado Explícito del Docente ("Pensar en voz alta")',
      duracion: '5 - 7 min',
      accionDocente: `El docente ejecuta la primera parte de la destreza verbalizando cada paso mental de resolución: "Primero observo qué me pide el ejercicio, luego selecciono mi material...". Se evita el discurso abstracto y se utiliza lenguaje claro y directo.`,
      soporte: 'Guía visual de pasos numerados en la mesa de trabajo.'
    },
    {
      fase: '2. Práctica Guiada con "Par Pedagógico" Inclusivo',
      duracion: '15 - 20 min',
      accionDocente: `Se asigna un compañero tutor previamente sensibilizado. El par no resuelve la tarea por el estudiante; en su lugar, le hace preguntas de orientación ("¿Cuál es el siguiente paso de tu tarjeta?") y valida sus aciertos de forma positiva.`,
      soporte: 'Rúbrica de cooperación en parejas y tarjeta de roles compartidos.'
    },
    {
      fase: '3. Desvanecimiento del Andamio (Fading) y Autonomía',
      duracion: '8 - 10 min',
      accionDocente: `El docente y el par reducen paulatinamente su intervención verbal directa, permitiendo que el estudiante consulte de manera autónoma sus apoyos semióticos (fichas, checklist visual) para concluir el ejercicio.`,
      soporte: 'Lista de verificación personal con casillas de autoevaluación (Logrado / Con apoyo).'
    }
  ];

  // Mediadores Semióticos Específicos por Perfil
  let mediadoresSemioticos = [];
  if (perfil.id === 'tdah') {
    mediadoresSemioticos = [
      'Tarjeta de auto-instrucción: "1. Alto -> 2. Miro y escucho -> 3. Pienso mi plan -> 4. Hago y reviso".',
      'Temporizador visual (Time Timer) de 10 minutos para visibilizar el tiempo de concentración.',
      'Contrato conductual positivo: tres fichas de logro por cada bloque de trabajo completado.'
    ];
  } else if (perfil.id === 'dislexia') {
    mediadoresSemioticos = [
      'Tarjetas de apoyo mnemotécnico con código de color (sujetos en verde, verbos en azul, complementos en naranja).',
      'Software de lectura de pantalla (lector inmersivo) para evitar la fatiga fonológica en textos extensos.',
      'Organizadores gráficos mudos donde el estudiante completa con dibujos, palabras clave o flechas conectivas.'
    ];
  } else if (perfil.id === 'discalculia') {
    mediadoresSemioticos = [
      'Tabla de hechos numéricos y recta numérica plastificada adherida al pupitre.',
      'Plantilla de alineación posicional de columnas (U-D-C) con colores contrastantes para evitar errores de orden.',
      'Guión de razonamiento paso a paso: "¿Qué datos tengo? -> ¿Junto o quito? -> ¿Qué operación elijo?".'
    ];
  } else if (perfil.id === 'tea') {
    mediadoresSemioticos = [
      'Agenda visual de la clase estructurada con pictogramas (Primero -> Después -> Recompensa de descanso).',
      'Caja con delimitación física de materiales: bandeja de "Por hacer" y bandeja de "Terminado".',
      'Guión social explícito de cómo pedir ayuda al docente levantando la tarjeta verde o roja sin necesidad de interrumpir.'
    ];
  } else if (perfil.id === 'discapacidad_intelectual_leve') {
    mediadoresSemioticos = [
      'Secuencia de tareas fraccionadas en un máximo de dos instrucciones concurrentes.',
      'Pictogramas de alta iconocidad con fotos reales de los objetos utilizados en la destreza.',
      'Refuerzo verbal continuo y modelado gestual inmediato por parte del mediador.'
    ];
  } else {
    mediadoresSemioticos = [
      'Glosario visual con términos clave de la destreza ilustrados.',
      'Bitácora de autorregulación con metas alcanzables de clase.',
      'Apoyo de organizador semántico de doble entrada.'
    ];
  }

  return {
    zdpDiagnostico,
    andamiaje,
    mediadoresSemioticos,
    rolParPedagogico: `El par pedagógico actúa como mediador en la ZDP. Se sugiere rotar el rol cada dos semanas y asegurar que el compañero comprenda que su función es formular preguntas socráticas, nunca escribir o realizar la tarea en lugar del estudiante.`
  };
}

function generarEstrategiasPiaget(dcd, perfil, grado, nivelApoyo) {
  // Identificación del Estadio Cognitivo según la edad o ajuste de Grado 3
  let estadioSugerido = 'Estadio de las Operaciones Concretas (7 a 11 años)';
  if (dcd.subnivel === 'preparatoria') {
    estadioSugerido = 'Estadio Preoperacional (Pensamiento simbólico e intuitivo, 2 a 7 años)';
  } else if (dcd.subnivel === 'superior' || dcd.subnivel === 'bachillerato') {
    estadioSugerido = Number(grado) === 3
      ? 'Anclaje adaptativo en Operaciones Concretas funcionales'
      : 'Transición hacia Operaciones Formales (Pensamiento abstracto e hipotético)';
  }

  // Enfoque CPA (Concreto -> Pictórico -> Abstracto)
  const enfoqueCPA = {
    faseConcreta: {
      titulo: '1. Fase Concreta (Acción y Manipulación Directa)',
      descripcion: `El estudiante experimenta de manera táctil y sensoriomotora el contenido antes de cualquier formalización teórica.`,
      actividadEspecifica: obtenerActividadConcreta(dcd, perfil)
    },
    fasePictorica: {
      titulo: '2. Fase Pictórica (Representación Gráfica e Icónica)',
      descripcion: `Se traslada la experiencia física a esquemas, diagramas, dibujos o maquetas bidimensionales que consolidan la imagen mental del concepto.`,
      actividadEspecifica: obtenerActividadPictorica(dcd, perfil)
    },
    faseAbstracta: {
      titulo: '3. Fase Simbólica / Abstracta (Código Numérico o Textual)',
      descripcion: `El estudiante accede a la nomenclatura, formulación escrita o cálculo formal habiendo construido previamente el esquema cognitivo de base.`,
      actividadEspecifica: obtenerActividadAbstracta(dcd, perfil, grado)
    }
  };

  // Conflicto Cognitivo Positivo (Disonancia que despierta asimilación y acomodación)
  const conflictoCognitivo = {
    planteamiento: `El docente plantea una situación problemática que pone en duda una concepción previa del estudiante: por ejemplo, "¿Qué pesa más, 10 botones de plástico o 1 piedra mediana?" o "¿Podemos tener un animal que nade pero tenga columna vertebral como nosotros?".`,
    procesoAsimilacion: `El estudiante intenta encajar la nueva situación en su esquema existente mediante el ensayo y error con el material manipulativo.`,
    procesoAcomodacion: `Al comprobar que su esquema anterior es insuficiente, reajusta su estructura mental guiado por la evidencia física de su experimento manipulativo.`
  };

  return {
    estadioSugerido,
    enfoqueCPA,
    conflictoCognitivo,
    principioActividad: `Para Piaget, "el conocimiento deriva de la acción". Por ello, no se le pide al estudiante que memorice la definición de "${dcd.conocimiento || 'este contenido'}" sin haber interactuado activamente con representaciones concretas.`
  };
}

function obtenerActividadConcreta(dcd, perfil) {
  if (dcd.area === 'matematica') {
    return 'Manipulación de bloques base 10, regletas de Cuisenaire, botones o monedas de utilería para formar y descomponer las cantidades antes de escribirlas.';
  }
  if (dcd.area === 'lengua') {
    return 'Manipulación de tarjetas con letras en relieve, cajas de arena sensorial para trazos o dramatización física de las secuencias de una narración con títeres.';
  }
  if (dcd.area === 'ciencias_naturales') {
    return 'Observación y tacto directo de hojas, muestras biológicas seguras, huesos de utilería plásticos o modelos 3D desmontables de esqueleto.';
  }
  if (dcd.area === 'ciencias_sociales') {
    return 'Dramatización vivencial de roles comunitarios o modelado en plastilina de relieves geográficos (montañas, valles, ríos).';
  }
  return 'Exploración con objetos tridimensionales y texturas variadas relacionadas con el tema.';
}

function obtenerActividadPictorica(dcd, perfil) {
  if (dcd.area === 'matematica') {
    return 'Dibujo de barras y cuadrículas coloreadas en papel milimetrado donde cada color representa una unidad, decena o fracción según corresponda.';
  }
  if (dcd.area === 'lengua') {
    return 'Creación de un cómic o tira gráfica secuencial de 3 a 4 viñetas ilustrando el inicio, nudo y desenlace antes de redactar el texto.';
  }
  if (dcd.area === 'ciencias_naturales') {
    return 'Clasificación de láminas ilustradas en dos columnas visuales (Vertebrados con dibujo de columna roja vs. Invertebrados con silueta punteada).';
  }
  return 'Diseño de un mapa mental visual con iconos simples y flechas conectivas de causa-efecto.';
}

function obtenerActividadAbstracta(dcd, perfil, grado) {
  if (Number(grado) === 3) {
    return 'Registro simplificado mediante dictado al docente, asociación de palabras clave con flechas o selección de opciones múltiples ilustradas.';
  }
  return 'Escritura de la respuesta, fórmula o síntesis en el cuaderno de trabajo, aplicando la regla aprendida con respaldo de su esquema pictórico.';
}

function generarPlanClase(dcd, perfil, grado, vygotsky, piaget) {
  return {
    anticipacion: {
      fase: '1. Anticipación y Activación Sensorial (10 minutos)',
      proposito: 'Generar curiosidad, activar conocimientos previos y anticipar la estructura de la clase.',
      estrategiaDUA: 'Múltiples formas de implicación (Principio 3 DUA). Presentación de un video motivador breve de 2 min o un objeto sorpresa en una caja sensorial.',
      actividadConcreta: `El docente muestra el objeto o situación de conflicto cognitivo planteado (${piaget.conflictoCognitivo.planteamiento}). Se consulta al grupo y se anota en la pizarra las hipótesis del estudiante en color destacado. Se revisa la agenda visual de 3 pasos que seguirá la sesión.`,
      rolEstudiante: 'Tocar el objeto, compartir su predicción de forma verbal o mediante tarjeta de emoción/acuerdo.'
    },
    construccion: {
      fase: '2. Construcción Guiada y Trabajo Cooperativo (25 minutos)',
      proposito: 'Consolidar el aprendizaje a través de la mediación en la ZDP y el enfoque manipulativo.',
      estrategiaDUA: 'Múltiples formas de representación (Principio 1 DUA). Información accesible simultáneamente en formato visual, auditivo y manipulativo.',
      actividadConcreta: `El docente aplica el modelado explícito (Paso 1 del andamiaje). Posteriormente, el estudiante trabaja junto a su par pedagógico en la fase concreta y pictórica: utilizando ${piaget.enfoqueCPA.faseConcreta.actividadEspecifica}. El docente realiza rondas de monitoreo cada 6 minutos brindando retroalimentación formativa inmediata.`,
      rolEstudiante: 'Manipular el material estructurado, dialogar con el par tutor y registrar los hallazgos en la plantilla gráfica adaptada.'
    },
    consolidacion: {
      fase: '3. Consolidación y Expresión de Aprendizaje (10 minutos)',
      proposito: 'Verificar la asimilación del contenido y transferir a situaciones cotidianas.',
      estrategiaDUA: 'Múltiples formas de acción y expresión (Principio 2 DUA). Opciones diferenciadas para demostrar lo aprendido.',
      actividadConcreta: `El estudiante elige cómo comunicar su conclusión: explicando oralmente al docente, mostrando su producto gráfico/maqueta o completando un boleto de salida (Exit Ticket) con 2 preguntas ilustradas. Se aplica el desvanecimiento de andamios.`,
      rolEstudiante: 'Completar su autoevaluación en la lista de cotejo y guardar sus materiales en su organizador de pupitre.'
    }
  };
}

function generarEvaluacionAdaptada(dcd, perfil, grado) {
  const g = Number(grado);

  const criterioAdaptado = g === 3
    ? `Adapta el criterio original evaluando el reconocimiento funcional y la aplicación básica en contextos de vida diaria.`
    : `Conserva el criterio de evaluación oficial del currículo, flexibilizando los indicadores de tiempo y formato de respuesta.`;

  const indicadorAdaptado = g === 3
    ? `Identifica y opera con nociones básicas de ${dcd.titulo} mediante el uso de apoyos gráficos y material concreto en problemas vivenciales sencillos.`
    : `${dcd.indicadorEvaluacion || 'Opera de forma competente'} apoyándose en mediadores visuales, esquemas estructurados y tiempo complementario.`;

  const instrumentosRecomendados = [
    {
      tipo: 'Rúbrica Cualitativa Diferenciada',
      descripcion: 'Evalúa el proceso paso a paso (Uso del material -> Razonamiento guiado -> Comunicación del resultado) y no únicamente la respuesta final.'
    },
    {
      tipo: 'Lista de Cotejo Gráfica con Indicadores de Desempeño',
      descripcion: 'Indicadores sencillos acompañados de símbolos visuales (Semáforo verde/amarillo/azul) para que el estudiante registre su progreso.'
    },
    {
      tipo: 'Portafolio de Evidencias Concretas y Registro Fotográfico',
      descripcion: 'Fotografías del trabajo con material manipulativo y producciones gráficas en lugar de hojas de examen saturadas de texto.'
    }
  ];

  const medidasAccesoEvaluacion = [
    'Tiempo suplementario: Disponer de al menos un 50% más de tiempo para el desarrollo de evaluaciones formales (Normativa MinEduc).',
    'Lectura y mediación de consignas: El docente o evaluador lee en voz alta cada enunciado, verificando que el estudiante comprendió qué se le solicita.',
    'Formato visual limpio: Tipografía clara (mínimo 14 pt, interlineado 1.5, Arial o Comic Sans/OpenDyslexic si hay dislexia), evitando la sobrecarga visual en una misma carilla.',
    'Autorización de apoyos: Permitir el uso de tablas de multiplicar visuales, recta numérica, calculadora o glosario de términos según el perfil.',
    'Pausas activas programadas: Permitir un intervalo de descanso de 3 a 5 minutos a la mitad de la evaluación para regular la fatiga cognitiva.'
  ];

  return {
    criterioAdaptado,
    indicadorAdaptado,
    instrumentosRecomendados,
    medidasAccesoEvaluacion
  };
}

function generarRecursosAcceso(perfil, grado, area) {
  const comunes = [
    'Ubicación preferencial en el aula: Primera o segunda fila, alejado de puertas, ventanas y fuentes de distracción acústica.',
    'Mobiliario ajustado: Pupitre con espacio suficiente para desplegar material manipulativo y organizador lateral.',
    'Iluminación adecuada y señalética visual en el aula.'
  ];

  const especificosPerfil = {
    tdah: [
      'Cojín sensorial dinámico o banda elástica en las patas de la silla para descarga motriz silenciosa.',
      'Temporizador visual tipo Time Timer de mesa.',
      'Pelota antiestrés o fidget tool autorizada durante las explicaciones orales.',
      'Auriculares de cancelación de ruido pasivo para momentos de trabajo individual autónomo.'
    ],
    dislexia: [
      'Hojas de trabajo impresas con fondo crema/pastel suave para reducir el deslumbramiento visual.',
      'Regla de lectura con ventana o guía de seguimiento de líneas.',
      'Acceso a audiolibros o lector inmersivo de pantalla (Microsoft Immersive Reader o NaturalReader).',
      'Diccionario visual ilustrado para corroborar ortografía sin frustración.'
    ],
    discalculia: [
      'Regletas de Cuisenaire y bloques multibase de madera o plástico resistente.',
      'Ábaco vertical y cinta métrica retráctil.',
      'Papel cuadriculado de 1 cm para operaciones matemáticas verticales.',
      'Calculadora con teclas grandes para comprobación de resultados tras el razonamiento.'
    ],
    tea: [
      'Agenda visual con pictogramas de ARASAAC plastificados con velcro.',
      'Rincón de la calma o espacio sensorial de descompresión en el aula.',
      'Audífonos protectores para momentos de timbre, sirena o actos cívicos ruidosos.',
      'Temporizador de transición para avisar 5 minutos antes de cambiar de asignatura.'
    ],
    discapacidad_intelectual_leve: [
      'Batería de material concreto funcional (monedas reales de juguete, envases comerciales, alimentos de utilería).',
      'Juegos de clasificación por color, tamaño y forma con autocorrección.',
      'Tableta con aplicaciones lúdico-educativas de refuerzo asociativo con refuerzo sonoro positivo.',
      'Tarjetero de rutinas diarias ilustrado.'
    ],
    discapacidad_visual: [
      'Atril ergonómico de lectura para acercar el texto a 45 grados de inclinación.',
      'Lupas con luz LED incorporada de 3x o 5x aumentos.',
      'Cuadernos con renglones de trazo negro engrosado y rotuladores de punta de fibra 2B.',
      'Materiales didácticos termoformados o en relieve táctil (mapas y figuras con texturas diferenciadas).'
    ],
    discapacidad_auditiva: [
      'Micrófono remoto transmisor con receptor FM o bucle magnético acoplado a los audífonos del estudiante.',
      'Disposición semicircular de los pupitres para facilitar la lectura labiofacial permanente.',
      'Pantalla interactiva con subtitulado automático en tiempo real para material audiovisual.',
      'Diccionario escolar de Lengua de Señas Ecuatoriana (LSEC) al alcance del aula.'
    ],
    altas_capacidades: [
      'Kit de laboratorio científico escolar o robótica programable (Micro:bit / Scratch).',
      'Acceso a biblioteca virtual con libros de divulgación científica y enciclopedias interactivas.',
      'Rincón de retos lógicos semanales y acertijos matemáticos.',
      'Cuaderno de proyectos de investigación libre.'
    ]
  };

  return {
    ambientalesYAcceso: comunes,
    materialesEspecificos: especificosPerfil[perfil.id] || especificosPerfil.tdah
  };
}

function generarCorresponsabilidad(perfil, grado) {
  return {
    dece: [
      'Realizar seguimiento quincenal del avance pedagógico y socioemocional del estudiante en coordinación con el docente tutor.',
      'Brindar acompañamiento técnico a la familia para el establecimiento de rutinas de estudio coherentes en el hogar.',
      'Coordinar con especialistas externos (psicopedagogo, terapeuta de lenguaje, neuropediatra) las actualizaciones del informe psicopedagógico oficial.'
    ],
    familia: [
      'Establecer un horario estructurado y visible en casa para tareas escolares, respetando pausas activas cada 20 minutos.',
      'Reforzar la autonomía del estudiante evitando hacer la tarea por él, pero validando su esfuerzo y proceso de aprendizaje.',
      'Mantener comunicación fluida con la institución mediante la libreta de comunicaciones o reuniones programadas de seguimiento.'
    ]
  };
}
