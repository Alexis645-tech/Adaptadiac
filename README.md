# AdaptaDIAC: Generador Pedagógico de Estrategias Curriculares (DIAC)

**AdaptaDIAC** es una aplicación web progresiva (PWA) de alto rendimiento diseñada para agilizar la redacción del **Documento Individual de Adaptación Curricular (DIAC)** para estudiantes con Necesidades Educativas Especiales (NEE) Grado 1, 2 y 3.

Fundamenta de forma rigurosa las estrategias pedagógicas en:
1. **La Zona de Desarrollo Próximo (ZDP) y Mediación Semiótica de Lev Vygotsky**: Diagnóstico de la línea base real vs. nivel potencial, andamiaje en 3 etapas (*Modelado explícito*, *Práctica guiada con Par Pedagógico*, *Desvanecimiento paulatino / Fading*), y uso de instrumentos culturales y mediadores externos.
2. **Epistemología Genética y Enfoque CPA de Jean Piaget**: Identificación del estadio cognitivo de desarrollo (Preoperacional, Operaciones Concretas, Operaciones Formales), secuencia metódica **CPA** (*Concreto* &rarr; *Pictórico* &rarr; *Abstracto*) y formulación de *conflictos cognitivos* para activar los procesos de asimilación y acomodación.
3. **Diseño Universal para el Aprendizaje (DUA)**: Secuencia didáctica de aula ordinaria dividida en los tres momentos clave de la clase (*Anticipación*, *Construcción* y *Consolidación*) con múltiples formas de implicación, representación y expresión.

---

## 🌟 Características Principales

- **Catálogo Oficial de DCDs Nacionales**: Destrezas clasificadas por subniveles (Preparatoria, Básica Elemental, Básica Media, Básica Superior y Bachillerato) y áreas del conocimiento (Matemáticas, Lengua y Literatura, Ciencias Naturales, Ciencias Sociales, etc.).
- **DCD Personalizada**: Posibilidad de ingresar o pegar cualquier destreza con criterio de desempeño de planificaciones docentes particulares.
- **Perfiles Cognitivos Específicos (NEE)**:
  - TDAH (Déficit de Atención con o sin Hiperactividad)
  - Dislexia / Dificultades Específicas de Lectoescritura
  - Discalculia / Dificultades en Razonamiento Cuantitativo
  - Trastorno del Espectro Autista (TEA Grado 1 / Asperger)
  - Discapacidad Intelectual (Leve a Moderada)
  - Baja Visión / Discapacidad Visual
  - Hipoacusia / Discapacidad Auditiva
  - Altas Capacidades / Talento Sobresaliente
- **Adaptación Curricular en 3 Grados (Normativa MinEduc)**:
  - **Grado 1 (De Acceso)**: Adaptaciones de infraestructura, recursos y tecnologías de asistencia sin alterar la DCD.
  - **Grado 2 (No Significativa / Metodológica)**: Andamiaje, mediación de pares, material concreto y tiempo extendido manteniendo la destreza esencial.
  - **Grado 3 (Significativa / Curricular)**: Desagregación formal de la DCD a un subnivel anterior y adecuación de indicadores de evaluación.
- **Hoja Oficial DIAC Imprimible**: Maquetación profesional acorde al formato legal educativo con tablas formales, sellos y firmas de responsabilidad (Docente, Coordinación Pedagógica, DECE).
- **Acciones Rápidas en 1-Clic**:
  - *Copiar DIAC*: Texto estructurado listo para pegar directamente en Word o plantillas institucionales.
  - *Imprimir / PDF*: Vista limpia para impresión en papel A4 sin botones ni menús de navegación.
  - *Guardar en Mi Navegador*: Almacenamiento local (LocalStorage) para gestionar expedientes de varios estudiantes.
- **6 Casos Prácticos de Prueba**: Presets instantáneos para demostrar la versatilidad de la herramienta.
- **PWA & Viabilidad Móvil/Android**:
  - Diseño responsivo mobile-first con barra inferior de acciones rápidas.
  - Service Worker (`sw.js`) con soporte offline completo para escuelas rurales o sin conexión fija.
  - Web App Manifest (`manifest.json`) para instalación directa en teléfonos Android ("Agregar a la pantalla principal").
  - Modos Claro y Oscuro conmutables.

---

## 🚀 Cómo Ejecutar la Aplicación

### Opción 1: Servidor Local Ligero (Node.js)
Desde la terminal en esta carpeta:
```bash
node server.js
```
Abre en tu navegador:
`http://127.0.0.1:4173`

### Opción 2: Abrir directamente el archivo HTML
Puedes hacer doble clic en `index.html` o abrirlo con Chrome, Edge o Firefox.

---

## 📱 Instalación en Dispositivos Android

1. Abre la aplicación en el navegador **Google Chrome** en tu teléfono Android.
2. Presiona el botón flotante **"Instalar App"** que aparecerá en la barra superior o despliega el menú de Chrome (`⋮`) y selecciona **"Agregar a la pantalla principal"** o **"Instalar aplicación"**.
3. ¡Listo! La aplicación funcionará a pantalla completa como una app nativa y estará disponible incluso sin conexión a internet.

---

## 🤖 Actualización Automática de Currículos (Robot + GitHub Actions + Gemini)

Para evitar la carga manual de miles de Destrezas con Criterio de Desempeño (DCD):
1. **Robot de Extracción ([update_curriculum.py](file:///C:/Users/Alexis645/.gemini/antigravity-ide/scratch/adaptadiac/scripts/update_curriculum.py))**:
   - Monitorea el portal oficial del Ministerio de Educación de Ecuador (`educacion.gob.ec`).
   - Utiliza la API de Google Gemini (`gemini-1.5-flash`) para estructurar de forma limpia cualquier nuevo PDF o texto curricular en formato JSON validado.
   - Consolida y deduplica en [curriculum-dcd.json](file:///C:/Users/Alexis645/.gemini/antigravity-ide/scratch/adaptadiac/data/curriculum-dcd.json).
2. **Cron Job Gratuito en GitHub Actions ([update-curriculum.yml](file:///C:/Users/Alexis645/.gemini/antigravity-ide/scratch/adaptadiac/.github/workflows/update-curriculum.yml))**:
   - Se ejecuta automáticamente el **día 1 de cada mes** a las 03:00 UTC.
   - También cuenta con disparador manual (`workflow_dispatch`) para ejecutarlo con 1 clic en cualquier momento.
   - Hace commit automático de los nuevos JSON al repositorio y actualiza las aplicaciones desplegadas (Vercel, GitHub Pages) sin intervención humana.

---

## 📂 Estructura del Proyecto

```
adaptadiac/
├── .github/
│   └── workflows/
│       └── update-curriculum.yml # Flujo cron mensual de GitHub Actions
├── data/
│   ├── curriculum-dcd.json       # Base de datos JSON de DCDs actualizada dinámicamente
│   └── curriculum-manifest.json  # Manifiesto de auditoría y última fecha de sincronización
├── scripts/
│   ├── requirements.txt          # Dependencias (requests, beautifulsoup4, pypdf)
│   └── update_curriculum.py      # Robot crawler con integración a Gemini API
├── index.html                    # Estructura semántica accesible y responsive
├── css/
│   └── styles.css                # Sistema de diseño, tokens, dark/light y print styles
├── js/
│   ├── curriculum-data.js        # Base curricular integrada y perfiles NEE
│   ├── pedagogy-engine.js        # Motor pedagógico Vygotsky (ZDP) y Piaget (CPA/Estadios)
│   └── app.js                    # Controlador interactivo, cargador dinámico de JSON y PWA
├── manifest.json                 # Manifiesto PWA para instalación móvil
├── sw.js                         # Service Worker con caché offline de curriculum-dcd.json
├── generate-icons.js             # Generador de iconos PNG 192px y 512px
├── icon-192.png                  # Icono de la aplicación (192x192)
├── icon-512.png                  # Icono de la aplicación (512x512)
├── server.js                     # Servidor HTTP local con soporte MIME
└── README.md                     # Documentación técnica y pedagógica
```

