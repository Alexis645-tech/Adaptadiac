// Aplicación Principal de AdaptaDIAC
// Integración de Base de Datos Curricular, Motor Pedagógico e Interfaz Reactiva

import { SUBNIVELES, AREAS, DCD_DATABASE, PERFILES_COGNITIVOS, GRADOS_ADAPTACION } from './curriculum-data.js';
import { generarAdaptacionDIAC } from './pedagogy-engine.js';

// Estado global de la aplicación
const state = {
  currentSubnivel: 'elemental',
  currentArea: 'matematica',
  currentDcd: null,
  isCustomDcd: false,
  currentPerfil: null,
  currentGrado: 2,
  currentAdaptacion: null,
  savedAdaptaciones: []
};

// Elementos del DOM
// Base de datos de DCDs en memoria (inicializada con DCD_DATABASE y extensible dinámicamente)
let allDCDs = [...DCD_DATABASE];

document.addEventListener('DOMContentLoaded', async () => {
  cacheDOMElements();
  initStorage();
  initTheme();
  populateDropdowns();
  setupEventListeners();
  loadInitialData();
  registerServiceWorker();
  initPWAInstall();

  // Carga asíncrona de la base de datos de DCDs sincronizada por GitHub Actions
  await loadExternalCurriculumDatabase();
});

async function loadExternalCurriculumDatabase() {
  try {
    const res = await fetch('./data/curriculum-dcd.json', { cache: 'no-cache' });
    if (res.ok) {
      const externalDcds = await res.json();
      if (Array.isArray(externalDcds) && externalDcds.length > 0) {
        const dcdMap = new Map();
        // Cargar primero las base
        allDCDs.forEach(d => { if (d.codigo) dcdMap.set(d.codigo, d); });
        // Fusionar con las actualizadas del JSON
        externalDcds.forEach(d => { if (d.codigo) dcdMap.set(d.codigo, d); });
        allDCDs = Array.from(dcdMap.values());
        console.log(`[AdaptaDIAC] Base curricular sincronizada: ${allDCDs.length} DCDs disponibles.`);
        updateDCDOptions();
      }
    }
  } catch (err) {
    console.log('[AdaptaDIAC] Utilizando base de datos curricular integrada (offline/fallback).');
  }
}

function cacheDOMElements() {
  elements.selectSubnivel = document.getElementById('select-subnivel');
  elements.selectArea = document.getElementById('select-area');
  elements.selectDcd = document.getElementById('select-dcd');
  elements.selectPerfil = document.getElementById('select-perfil');
  elements.selectPreset = document.getElementById('select-preset');
  elements.selectPresetMobile = document.getElementById('select-preset-mobile');
  elements.selectApoyo = document.getElementById('select-apoyo');

  elements.inputEstudiante = document.getElementById('input-estudiante');
  elements.inputInstitucion = document.getElementById('input-institucion');
  elements.inputGradoEscolar = document.getElementById('input-grado-escolar');
  elements.inputFecha = document.getElementById('input-fecha');
  elements.inputDocente = document.getElementById('input-docente');
  elements.textareaObs = document.getElementById('textarea-obs');

  elements.btnToggleCustomDcd = document.getElementById('btn-toggle-custom-dcd');
  elements.labelToggleCustom = document.getElementById('label-toggle-custom');
  elements.containerCustomDcd = document.getElementById('container-custom-dcd');
  elements.inputCustomCodigo = document.getElementById('input-custom-codigo');
  elements.inputCustomTexto = document.getElementById('input-custom-texto');

  elements.previewDcdCodigo = document.getElementById('preview-dcd-codigo');
  elements.previewDcdSubnivel = document.getElementById('preview-dcd-subnivel');
  elements.previewDcdTexto = document.getElementById('preview-dcd-texto');
  elements.previewDcdHabilidad = document.getElementById('preview-dcd-habilidad');
  elements.previewDcdConocimiento = document.getElementById('preview-dcd-conocimiento');

  elements.previewPerfilIcon = document.getElementById('preview-perfil-icon');
  elements.previewPerfilTitle = document.getElementById('preview-perfil-title');
  elements.previewPerfilCat = document.getElementById('preview-perfil-cat');
  elements.previewTraitAtencion = document.getElementById('preview-trait-atencion');
  elements.previewTraitMemoria = document.getElementById('preview-trait-memoria');
  elements.previewTraitEjecutivas = document.getElementById('preview-trait-ejecutivas');

  elements.btnGenerar = document.getElementById('btn-generar');
  elements.btnCopyDiac = document.getElementById('btn-copy-diac');
  elements.btnPrintDiac = document.getElementById('btn-print-diac');
  elements.btnSaveDiac = document.getElementById('btn-save-diac');
  elements.btnOpenSaved = document.getElementById('btn-open-saved');
  elements.savedBadge = document.getElementById('saved-badge');
  elements.btnThemeToggle = document.getElementById('btn-theme-toggle');

  elements.modalSaved = document.getElementById('modal-saved');
  elements.btnCloseModal = document.getElementById('btn-close-modal');
  elements.btnCloseModalFooter = document.getElementById('btn-close-modal-footer');
  elements.btnClearAllSaved = document.getElementById('btn-clear-all-saved');
  elements.savedList = document.getElementById('saved-list');
  elements.savedEmpty = document.getElementById('saved-empty');

  elements.toast = document.getElementById('toast');
  elements.toastMessage = document.getElementById('toast-message');

  // Mobile elements
  elements.btnMobileGenerate = document.getElementById('btn-mobile-generate');
  elements.btnMobileCopy = document.getElementById('btn-mobile-copy');
  elements.btnMobilePrint = document.getElementById('btn-mobile-print');
}

function initStorage() {
  const saved = localStorage.getItem('adaptadiac_saved');
  if (saved) {
    try {
      state.savedAdaptaciones = JSON.parse(saved);
      updateSavedBadge();
    } catch (e) {
      console.error('Error al cargar adaptaciones guardadas:', e);
    }
  }

  // Establecer fecha de hoy en el input
  if (elements.inputFecha && !elements.inputFecha.value) {
    const today = new Date().toISOString().split('T')[0];
    elements.inputFecha.value = today;
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem('adaptadiac_theme') || 'theme-light';
  document.body.className = savedTheme;
  updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
  const sun = document.getElementById('theme-icon-sun');
  const moon = document.getElementById('theme-icon-moon');
  if (theme === 'theme-dark') {
    if (sun) sun.style.display = 'none';
    if (moon) moon.style.display = 'block';
  } else {
    if (sun) sun.style.display = 'block';
    if (moon) moon.style.display = 'none';
  }
}

function populateDropdowns() {
  // 1. Subniveles
  elements.selectSubnivel.innerHTML = SUBNIVELES.map(s => `
    <option value="${s.id}" ${s.id === state.currentSubnivel ? 'selected' : ''}>${s.name}</option>
  `).join('');

  // 2. Áreas filtradas por subnivel
  updateAreasOptions();

  // 3. Perfiles Cognitivos
  elements.selectPerfil.innerHTML = PERFILES_COGNITIVOS.map(p => `
    <option value="${p.id}">${p.icono} ${p.nombre}</option>
  `).join('');

  // Actualizar DCDs para el subnivel y área actual
  updateDCDOptions();
}

function updateAreasOptions() {
  // Filtrar áreas permitidas para el subnivel actual
  const areasDisponibles = AREAS.filter(a => {
    if (!a.subniveles) return true; // Disponible en todos los subniveles
    return a.subniveles.includes(state.currentSubnivel);
  });

  // Si el área seleccionada no está disponible en este subnivel, seleccionar la primera disponible
  if (!areasDisponibles.some(a => a.id === state.currentArea)) {
    state.currentArea = areasDisponibles[0].id;
  }

  elements.selectArea.innerHTML = areasDisponibles.map(a => `
    <option value="${a.id}" ${a.id === state.currentArea ? 'selected' : ''}>${a.icon} ${a.name}</option>
  `).join('');
}

function updateDCDOptions() {
  const filtered = allDCDs.filter(d => d.subnivel === state.currentSubnivel && d.area === state.currentArea);

  if (filtered.length > 0) {
    elements.selectDcd.innerHTML = filtered.map((d, index) => `
      <option value="${d.codigo}" ${index === 0 ? 'selected' : ''}>[${d.codigo}] ${d.titulo}</option>
    `).join('');
    state.currentDcd = filtered[0];
  } else {
    // Si no hay DCD específica para esa combinación, mostrar todas las del subnivel o permitir personalizada
    const anyInSubnivel = allDCDs.filter(d => d.subnivel === state.currentSubnivel);
    if (anyInSubnivel.length > 0) {
      elements.selectDcd.innerHTML = anyInSubnivel.map((d, index) => `
        <option value="${d.codigo}" ${index === 0 ? 'selected' : ''}>[${d.codigo}] (${d.area}) ${d.titulo}</option>
      `).join('');
      state.currentDcd = anyInSubnivel[0];
    } else {
      elements.selectDcd.innerHTML = `<option value="">Ingresar DCD personalizada...</option>`;
      state.currentDcd = allDCDs[0];
    }
  }

  updateDCDPreview();
}

function updateDCDPreview() {
  if (!state.currentDcd) return;

  const d = state.currentDcd;
  elements.previewDcdCodigo.textContent = d.codigo || 'Personalizada';
  elements.previewDcdSubnivel.textContent = (SUBNIVELES.find(s => s.id === d.subnivel) || {}).name || 'Currículo Nacional';
  elements.previewDcdTexto.textContent = d.descripcion || 'Sin descripción';
  elements.previewDcdHabilidad.textContent = d.habilidad || 'Competencia clave';
  elements.previewDcdConocimiento.textContent = d.conocimiento || 'Contenido curricular';
}

function updatePerfilPreview() {
  const perfilId = elements.selectPerfil.value;
  state.currentPerfil = PERFILES_COGNITIVOS.find(p => p.id === perfilId) || PERFILES_COGNITIVOS[0];

  const p = state.currentPerfil;
  elements.previewPerfilIcon.textContent = p.icono;
  elements.previewPerfilTitle.textContent = p.nombre;
  elements.previewPerfilCat.textContent = p.categoria;
  elements.previewTraitAtencion.textContent = p.caracteristicasCognitivas.atencion;
  elements.previewTraitMemoria.textContent = p.caracteristicasCognitivas.memoriaTrabajo;
  elements.previewTraitEjecutivas.textContent = p.caracteristicasCognitivas.funcionesEjecutivas;
}

function setupEventListeners() {
  // Cambio de subnivel
  elements.selectSubnivel.addEventListener('change', (e) => {
    state.currentSubnivel = e.target.value;
    updateAreasOptions();
    updateDCDOptions();
  });

  // Cambio de área
  elements.selectArea.addEventListener('change', (e) => {
    state.currentArea = e.target.value;
    updateDCDOptions();
  });

  // Cambio de DCD
  elements.selectDcd.addEventListener('change', (e) => {
    const cod = e.target.value;
    const found = allDCDs.find(d => d.codigo === cod);
    if (found) {
      state.currentDcd = found;
      state.isCustomDcd = false;
      elements.containerCustomDcd.style.display = 'none';
      elements.labelToggleCustom.textContent = '+ Usar DCD personalizada';
      updateDCDPreview();
    }
  });

  // Toggle Custom DCD
  elements.btnToggleCustomDcd.addEventListener('click', () => {
    state.isCustomDcd = !state.isCustomDcd;
    if (state.isCustomDcd) {
      elements.containerCustomDcd.style.display = 'flex';
      elements.labelToggleCustom.textContent = '✕ Cancelar DCD personalizada';
    } else {
      elements.containerCustomDcd.style.display = 'none';
      elements.labelToggleCustom.textContent = '+ Usar DCD personalizada';
      updateDCDOptions();
    }
  });

  // Input custom DCD
  elements.inputCustomTexto.addEventListener('input', () => {
    if (state.isCustomDcd) {
      state.currentDcd = {
        codigo: elements.inputCustomCodigo.value.trim() || 'DCD.CUSTOM',
        subnivel: state.currentSubnivel,
        area: state.currentArea,
        titulo: 'Destreza personalizada por el docente',
        descripcion: elements.inputCustomTexto.value.trim() || 'Destreza en proceso de redacción...',
        habilidad: 'Según diseño docente',
        conocimiento: 'Contenido específico adaptado',
        indicadorEvaluacion: 'Demuestra el criterio de desempeño adaptado.'
      };
      updateDCDPreview();
    }
  });

  // Cambio de perfil
  elements.selectPerfil.addEventListener('change', () => {
    updatePerfilPreview();
  });

  // Radio cards de grado
  document.querySelectorAll('input[name="radio-grado"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      state.currentGrado = Number(e.target.value);
      document.querySelectorAll('.grado-card').forEach(card => card.classList.remove('selected'));
      const parentCard = e.target.closest('.grado-card');
      if (parentCard) parentCard.classList.add('selected');
    });
  });

  // Presets selector (escritorio y móvil)
  if (elements.selectPreset) {
    elements.selectPreset.addEventListener('change', (e) => {
      if (elements.selectPresetMobile) elements.selectPresetMobile.value = e.target.value;
      cargarCasoPreset(e.target.value);
    });
  }

  if (elements.selectPresetMobile) {
    elements.selectPresetMobile.addEventListener('change', (e) => {
      if (elements.selectPreset) elements.selectPreset.value = e.target.value;
      cargarCasoPreset(e.target.value);
    });
  }

  // Generar Adaptación
  elements.btnGenerar.addEventListener('click', () => {
    ejecutarGeneracion();
  });

  if (elements.btnMobileGenerate) {
    elements.btnMobileGenerate.addEventListener('click', () => {
      ejecutarGeneracion();
      // En móvil, cambiar a la pestaña de DIAC automáticamente
      activarMobileTab('tab-diac');
    });
  }

  // Copiar DIAC
  elements.btnCopyDiac.addEventListener('click', copiarDIACOficial);
  if (elements.btnMobileCopy) elements.btnMobileCopy.addEventListener('click', copiarDIACOficial);

  // Imprimir DIAC
  elements.btnPrintDiac.addEventListener('click', () => window.print());
  if (elements.btnMobilePrint) elements.btnMobilePrint.addEventListener('click', () => window.print());

  // Guardar DIAC
  elements.btnSaveDiac.addEventListener('click', guardarAdaptacionActual);

  // Modal Guardadas
  elements.btnOpenSaved.addEventListener('click', abrirModalGuardadas);
  elements.btnCloseModal.addEventListener('click', cerrarModalGuardadas);
  elements.btnCloseModalFooter.addEventListener('click', cerrarModalGuardadas);
  elements.btnClearAllSaved.addEventListener('click', limpiarTodasGuardadas);

  // Theme Toggle
  elements.btnThemeToggle.addEventListener('click', toggleTheme);

  // Pestañas de Vista Previa (Documento / Teoría / Plan DUA)
  document.querySelectorAll('.preview-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      const targetView = tab.getAttribute('data-view');
      document.querySelectorAll('.preview-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.preview-content-view').forEach(v => v.classList.remove('active'));
      tab.classList.add('active');
      const viewEl = document.getElementById(targetView);
      if (viewEl) viewEl.classList.add('active');
    });
  });

  // Pestañas Móviles (Configurador / Documento / Pedagogía)
  document.querySelectorAll('.mobile-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      activarMobileTab(tabId);
    });
  });
}

function activarMobileTab(tabId) {
  document.querySelectorAll('.mobile-tab-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`.mobile-tab-btn[data-tab="${tabId}"]`);
  if (btn) btn.classList.add('active');

  const panelForm = document.getElementById('panel-form');
  const panelPreview = document.getElementById('panel-preview');
  const viewDoc = document.getElementById('view-documento');
  const viewTeoria = document.getElementById('view-teoria');
  const viewAula = document.getElementById('view-aula');

  if (tabId === 'tab-formulario') {
    panelForm.style.display = 'block';
    panelPreview.style.display = 'none';
  } else if (tabId === 'tab-diac') {
    panelForm.style.display = 'none';
    panelPreview.style.display = 'block';
    // Activar vista documento
    document.querySelectorAll('.preview-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.preview-content-view').forEach(v => v.classList.remove('active'));
    const docTab = document.querySelector('[data-view="view-documento"]');
    if (docTab) docTab.classList.add('active');
    if (viewDoc) viewDoc.classList.add('active');
  } else if (tabId === 'tab-pedagogia') {
    panelForm.style.display = 'none';
    panelPreview.style.display = 'block';
    // Activar vista teoría
    document.querySelectorAll('.preview-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.preview-content-view').forEach(v => v.classList.remove('active'));
    const teoriaTab = document.querySelector('[data-view="view-teoria"]');
    if (teoriaTab) teoriaTab.classList.add('active');
    if (viewTeoria) viewTeoria.classList.add('active');
  }
}

function loadInitialData() {
  updatePerfilPreview();
  ejecutarGeneracion();
}

function toggleTheme() {
  const isDark = document.body.classList.contains('theme-dark');
  const newTheme = isDark ? 'theme-light' : 'theme-dark';
  document.body.className = newTheme;
  localStorage.setItem('adaptadiac_theme', newTheme);
  updateThemeIcon(newTheme);
}

// -------------------------------------------------------------
// Presets de Casos Prácticos
// -------------------------------------------------------------
function cargarCasoPreset(casoId) {
  switch (casoId) {
    case 'caso-tdah':
      elements.inputEstudiante.value = 'Lucas Morales';
      elements.inputGradoEscolar.value = '4.° Año EGB - Paralelo A';
      elements.selectSubnivel.value = 'elemental';
      state.currentSubnivel = 'elemental';
      elements.selectArea.value = 'matematica';
      state.currentArea = 'matematica';
      updateDCDOptions();
      elements.selectDcd.value = 'M.2.1.12';
      state.currentDcd = DCD_DATABASE.find(d => d.codigo === 'M.2.1.12');
      elements.selectPerfil.value = 'tdah';
      seleccionarGrado(2);
      elements.selectApoyo.value = 'Medio';
      elements.textareaObs.value = 'Lucas responde excelente con el temporizador visual y requiere pausas de descarga motriz cada 15 min.';
      break;

    case 'caso-dislexia':
      elements.inputEstudiante.value = 'Sofía Andrade';
      elements.inputGradoEscolar.value = '6.° Año EGB - Paralelo C';
      elements.selectSubnivel.value = 'media';
      state.currentSubnivel = 'media';
      elements.selectArea.value = 'lengua';
      state.currentArea = 'lengua';
      updateDCDOptions();
      elements.selectDcd.value = 'LL.3.3.2';
      state.currentDcd = DCD_DATABASE.find(d => d.codigo === 'LL.3.3.2');
      elements.selectPerfil.value = 'dislexia';
      seleccionarGrado(2);
      elements.selectApoyo.value = 'Medio';
      elements.textareaObs.value = 'Excelente comprensión oral. Las pruebas escritas deben contar con lectura guiada de enunciados.';
      break;

    case 'caso-tea':
      elements.inputEstudiante.value = 'Mateo Benítez';
      elements.inputGradoEscolar.value = '3.° Año EGB - Paralelo B';
      elements.selectSubnivel.value = 'elemental';
      state.currentSubnivel = 'elemental';
      updateAreasOptions();
      elements.selectArea.value = 'biologia';
      state.currentArea = 'biologia';
      updateDCDOptions();
      elements.selectDcd.value = 'CN.2.1.4';
      state.currentDcd = DCD_DATABASE.find(d => d.codigo === 'CN.2.1.4');
      elements.selectPerfil.value = 'tea';
      seleccionarGrado(2);
      elements.selectApoyo.value = 'Medio';
      elements.textareaObs.value = 'Necesita agenda visual con pictogramas antes de iniciar la clase. Sensible a ruidos súbitos.';
      break;

    case 'caso-intelectual':
      elements.inputEstudiante.value = 'Camila Ramos';
      elements.inputGradoEscolar.value = '8.° Año EGB - Paralelo A';
      elements.selectSubnivel.value = 'superior';
      state.currentSubnivel = 'superior';
      updateAreasOptions();
      elements.selectArea.value = 'lengua';
      state.currentArea = 'lengua';
      updateDCDOptions();
      elements.selectDcd.value = 'LL.4.3.4';
      state.currentDcd = DCD_DATABASE.find(d => d.codigo === 'LL.4.3.4');
      elements.selectPerfil.value = 'discapacidad_intelectual_leve';
      seleccionarGrado(3);
      elements.selectApoyo.value = 'Alto';
      elements.textareaObs.value = 'Se requiere desintegrar los textos en secuencias ilustradas de la vida cotidiana.';
      break;

    case 'caso-discalculia':
      elements.inputEstudiante.value = 'David Guerrero';
      elements.inputGradoEscolar.value = '7.° Año EGB - Paralelo B';
      elements.selectSubnivel.value = 'media';
      state.currentSubnivel = 'media';
      updateAreasOptions();
      elements.selectArea.value = 'matematica';
      state.currentArea = 'matematica';
      updateDCDOptions();
      elements.selectDcd.value = 'M.3.1.28';
      state.currentDcd = DCD_DATABASE.find(d => d.codigo === 'M.3.1.28');
      elements.selectPerfil.value = 'discalculia';
      seleccionarGrado(2);
      elements.selectApoyo.value = 'Medio';
      elements.textareaObs.value = 'Apoyo imprescindible de regletas de Cuisenaire y tabla de conversión decimal.';
      break;

    case 'caso-altas':
      elements.inputEstudiante.value = 'Valeria Paredes';
      elements.inputGradoEscolar.value = '10.° Año EGB - Paralelo A';
      elements.selectSubnivel.value = 'superior';
      state.currentSubnivel = 'superior';
      updateAreasOptions();
      elements.selectArea.value = 'historia';
      state.currentArea = 'historia';
      updateDCDOptions();
      elements.selectDcd.value = 'CS.4.1.16';
      state.currentDcd = DCD_DATABASE.find(d => d.codigo === 'CS.4.1.16');
      elements.selectPerfil.value = 'altas_capacidades';
      seleccionarGrado(1);
      elements.selectApoyo.value = 'Bajo';
      elements.textareaObs.value = 'Propuesta de proyecto de investigación autónomo sobre procesos de independencia y pensamiento libertario.';
      break;
  }

  updateDCDPreview();
  updatePerfilPreview();
  ejecutarGeneracion();
  showToast(`Caso cargado: ${elements.inputEstudiante.value}`);
}

function seleccionarGrado(gradoNum) {
  state.currentGrado = gradoNum;
  document.querySelectorAll('input[name="radio-grado"]').forEach(r => {
    r.checked = Number(r.value) === gradoNum;
  });
  document.querySelectorAll('.grado-card').forEach(card => card.classList.remove('selected'));
  const targetCard = document.getElementById(`grado-card-${gradoNum}`);
  if (targetCard) targetCard.classList.add('selected');
}

// -------------------------------------------------------------
// Ejecución y Renderizado de la Adaptación
// -------------------------------------------------------------
function ejecutarGeneracion() {
  if (!state.currentDcd) {
    state.currentDcd = DCD_DATABASE[0];
  }
  if (!state.currentPerfil) {
    state.currentPerfil = PERFILES_COGNITIVOS[0];
  }

  const opciones = {
    estudianteNombre: elements.inputEstudiante.value.trim() || 'Estudiante',
    institucion: elements.inputInstitucion.value.trim() || 'Unidad Educativa',
    fecha: formatearFecha(elements.inputFecha.value),
    observacionesDocente: elements.textareaObs.value.trim(),
    nivelApoyo: elements.selectApoyo.value
  };

  const adaptacion = generarAdaptacionDIAC({
    dcd: state.currentDcd,
    perfil: state.currentPerfil,
    gradoAdaptacion: state.currentGrado,
    opciones
  });

  state.currentAdaptacion = adaptacion;
  renderizarDocumentoDIAC(adaptacion);
  renderizarVistasComplementarias(adaptacion);
  showToast('✓ Adaptación DIAC generada con éxito');
}

function renderizarDocumentoDIAC(data) {
  const { meta, dcdOriginal, dcdAdaptada, vygotsky, piaget, evaluacion, recursos, corresponsabilidad } = data;

  // Encabezado
  document.getElementById('doc-institucion').textContent = meta.institucion;
  document.getElementById('doc-tag-grado').textContent = `ADAPTACIÓN GRADO ${meta.gradoAdaptacion}`;
  document.getElementById('doc-tag-grado').className = `diac-header-tag badge-g${meta.gradoAdaptacion}`;

  // Sección 1: Datos Informativos
  document.getElementById('doc-estudiante').textContent = meta.estudianteNombre;
  document.getElementById('doc-fecha').textContent = meta.fecha;
  document.getElementById('doc-grado-escolar').textContent = elements.inputGradoEscolar.value.trim() || 'No especificado';
  document.getElementById('doc-docente').textContent = elements.inputDocente.value.trim() || 'Docente Responsable';
  document.getElementById('doc-area').textContent = (AREAS.find(a => a.id === dcdOriginal.area) || {}).name || dcdOriginal.area;
  document.getElementById('doc-subnivel').textContent = (SUBNIVELES.find(s => s.id === dcdOriginal.subnivel) || {}).name || dcdOriginal.subnivel;

  // Sección 2: Condición NEE
  document.getElementById('doc-perfil-nombre').textContent = meta.perfilNombre;
  document.getElementById('doc-grado-nombre').textContent = meta.gradoNombre;
  document.getElementById('doc-traits-summary').innerHTML = `
    <p><strong>Atención & Foco:</strong> ${state.currentPerfil.caracteristicasCognitivas.atencion}</p>
    <p><strong>Memoria de Trabajo:</strong> ${state.currentPerfil.caracteristicasCognitivas.memoriaTrabajo}</p>
    <p><strong>Funciones Ejecutivas:</strong> ${state.currentPerfil.caracteristicasCognitivas.funcionesEjecutivas}</p>
  `;

  // Sección 3: DCD Comparación
  document.getElementById('doc-dcd-orig-codigo').textContent = dcdOriginal.codigo;
  document.getElementById('doc-dcd-orig-texto').textContent = dcdOriginal.descripcion;

  document.getElementById('doc-dcd-adapt-tag').textContent = dcdAdaptada.tipo;
  document.getElementById('doc-dcd-adapt-codigo').textContent = dcdAdaptada.codigo;
  document.getElementById('doc-dcd-adapt-texto').textContent = dcdAdaptada.texto;
  document.getElementById('doc-dcd-justif').innerHTML = `<em><strong>Fundamento Curricular:</strong> ${dcdAdaptada.justificacion} ${dcdAdaptada.cambioVerbo}</em>`;

  // Sección 4: Vygotsky
  document.getElementById('doc-v-premise').innerHTML = `
    <strong>Diagnóstico ZDP:</strong> ${vygotsky.zdpDiagnostico.nivelReal} 
    <br><strong>Meta Potencial:</strong> ${vygotsky.zdpDiagnostico.nivelPotencial}
  `;

  const andamiajeContainer = document.getElementById('doc-v-andamiaje');
  andamiajeContainer.innerHTML = vygotsky.andamiaje.map(step => `
    <div class="andamiaje-step-card">
      <div class="andamiaje-step-header">
        <span class="step-phase-title">${step.fase}</span>
        <span class="step-duration">${step.duracion}</span>
      </div>
      <p class="step-desc">${step.accionDocente}</p>
      <p class="step-soporte"><strong>Soporte Instrumental:</strong> ${step.soporte}</p>
    </div>
  `).join('');

  document.getElementById('doc-v-mediadores').innerHTML = vygotsky.mediadoresSemioticos.map(m => `<li>${m}</li>`).join('');
  document.getElementById('doc-v-par').innerHTML = `<strong>Estrategia de Par Pedagógico Inclusivo:</strong> ${vygotsky.rolParPedagogico}`;

  // Sección 4: Piaget
  document.getElementById('doc-p-estadio').innerHTML = `<strong>Estadio Cognitivo Aplicable:</strong> ${piaget.estadioSugerido}. ${piaget.principioActividad}`;

  const cpaContainer = document.getElementById('doc-p-cpa');
  cpaContainer.innerHTML = `
    <div class="cpa-col-card">
      <span class="cpa-col-title">${piaget.enfoqueCPA.faseConcreta.titulo}</span>
      <p class="cpa-col-desc">${piaget.enfoqueCPA.faseConcreta.actividadEspecifica}</p>
    </div>
    <div class="cpa-col-card">
      <span class="cpa-col-title">${piaget.enfoqueCPA.fasePictorica.titulo}</span>
      <p class="cpa-col-desc">${piaget.enfoqueCPA.fasePictorica.actividadEspecifica}</p>
    </div>
    <div class="cpa-col-card">
      <span class="cpa-col-title">${piaget.enfoqueCPA.faseAbstracta.titulo}</span>
      <p class="cpa-col-desc">${piaget.enfoqueCPA.faseAbstracta.actividadEspecifica}</p>
    </div>
  `;

  document.getElementById('doc-p-conflicto-text').innerHTML = `
    <strong>Planteamiento:</strong> ${piaget.conflictoCognitivo.planteamiento}<br>
    <strong>Asimilación & Acomodación:</strong> ${piaget.conflictoCognitivo.procesoAsimilacion} ${piaget.conflictoCognitivo.procesoAcomodacion}
  `;

  // Sección 5: Recursos
  document.getElementById('doc-recursos-ambiente').innerHTML = recursos.ambientalesYAcceso.map(r => `<li>${r}</li>`).join('');
  document.getElementById('doc-recursos-especificos').innerHTML = recursos.materialesEspecificos.map(r => `<li>${r}</li>`).join('');

  // Sección 6: Evaluación
  document.getElementById('doc-eval-indicador').textContent = evaluacion.indicadorAdaptado;
  document.getElementById('doc-eval-instrumentos').innerHTML = evaluacion.instrumentosRecomendados.map(i => `
    <li><strong>${i.tipo}:</strong> ${i.descripcion}</li>
  `).join('');
  document.getElementById('doc-eval-medidas').innerHTML = evaluacion.medidasAccesoEvaluacion.map(m => `<li>${m}</li>`).join('');

  // Sección 7: Corresponsabilidad
  document.getElementById('doc-dece-recs').innerHTML = corresponsabilidad.dece.map(d => `<li>${d}</li>`).join('');
  document.getElementById('doc-familia-recs').innerHTML = corresponsabilidad.familia.map(f => `<li>${f}</li>`).join('');

  // Sección 8: Firmas
  document.getElementById('doc-firma-docente').textContent = elements.inputDocente.value.trim() || 'Lic. Docente Responsable';
}

function renderizarVistasComplementarias(data) {
  const { planClase } = data;

  // Plan de Clase DUA
  const container = document.getElementById('dua-moments-container');
  if (!container) return;

  container.innerHTML = `
    <div class="dua-moment-card">
      <div class="moment-header">
        <h3 class="moment-title">${planClase.anticipacion.fase}</h3>
        <span class="moment-badge">Motivación & Implicación (DUA 3)</span>
      </div>
      <p class="moment-prop">${planClase.anticipacion.proposito}</p>
      <p class="moment-activity">${planClase.anticipacion.actividadConcreta}</p>
      <div class="moment-role"><strong>Rol y acción del estudiante:</strong> ${planClase.anticipacion.rolEstudiante}</div>
    </div>

    <div class="dua-moment-card">
      <div class="moment-header">
        <h3 class="moment-title">${planClase.construccion.fase}</h3>
        <span class="moment-badge">Múltiples Formas de Representación (DUA 1)</span>
      </div>
      <p class="moment-prop">${planClase.construccion.proposito}</p>
      <p class="moment-activity">${planClase.construccion.actividadConcreta}</p>
      <div class="moment-role"><strong>Rol y acción del estudiante:</strong> ${planClase.construccion.rolEstudiante}</div>
    </div>

    <div class="dua-moment-card">
      <div class="moment-header">
        <h3 class="moment-title">${planClase.consolidacion.fase}</h3>
        <span class="moment-badge">Múltiples Formas de Expresión (DUA 2)</span>
      </div>
      <p class="moment-prop">${planClase.consolidacion.proposito}</p>
      <p class="moment-activity">${planClase.consolidacion.actividadConcreta}</p>
      <div class="moment-role"><strong>Rol y acción del estudiante:</strong> ${planClase.consolidacion.rolEstudiante}</div>
    </div>
  `;
}

// -------------------------------------------------------------
// Acciones: Copiar al Portapapeles
// -------------------------------------------------------------
function copiarDIACOficial() {
  if (!state.currentAdaptacion) {
    showToast('Genera primero la adaptación para poder copiarla.');
    return;
  }

  const d = state.currentAdaptacion;
  const textoEstructurado = `
================================================================================
DOCUMENTO INDIVIDUAL DE ADAPTACIÓN CURRICULAR (DIAC)
${d.meta.institucion.toUpperCase()}
================================================================================

1. DATOS INFORMATIVOS
- Estudiante: ${d.meta.estudianteNombre}
- Grado/Año: ${elements.inputGradoEscolar.value.trim()}
- Asignatura: ${(AREAS.find(a => a.id === d.dcdOriginal.area) || {}).name}
- Subnivel: ${(SUBNIVELES.find(s => s.id === d.dcdOriginal.subnivel) || {}).name}
- Docente Responsable: ${elements.inputDocente.value.trim()}
- Fecha: ${d.meta.fecha}

2. PERFIL COGNITIVO Y CONDICIÓN NEE
- Condición: ${d.meta.perfilNombre}
- Grado de Adaptación: ${d.meta.gradoNombre}
- Atención: ${state.currentPerfil.caracteristicasCognitivas.atencion}
- Memoria de Trabajo: ${state.currentPerfil.caracteristicasCognitivas.memoriaTrabajo}
- Funciones Ejecutivas: ${state.currentPerfil.caracteristicasCognitivas.funcionesEjecutivas}

3. DESTREZA CON CRITERIO DE DESEMPEÑO (DCD)
- DCD Original [${d.dcdOriginal.codigo}]: ${d.dcdOriginal.descripcion}
- DCD Adaptada [${d.dcdAdaptada.codigo}]: ${d.dcdAdaptada.texto}
- Justificación Pedagógica: ${d.dcdAdaptada.justificacion}

4. ESTRATEGIAS METODOLÓGICAS (VYGOTSKY & PIAGET)
[Vygotsky - Zona de Desarrollo Próximo]
- Diagnóstico ZDP: ${d.vygotsky.zdpDiagnostico.nivelReal}
- Andamiaje Fase 1 (Modelado): ${d.vygotsky.andamiaje[0].accionDocente}
- Andamiaje Fase 2 (Par Pedagógico): ${d.vygotsky.andamiaje[1].accionDocente}
- Andamiaje Fase 3 (Desvanecimiento/Fading): ${d.vygotsky.andamiaje[2].accionDocente}
- Mediadores Semióticos:
  ${d.vygotsky.mediadoresSemioticos.map(m => `* ${m}`).join('\n  ')}

[Piaget - Enfoque CPA y Conflicto Cognitivo]
- Estadio Cognitivo: ${d.piaget.estadioSugerido}
- Fase Concreta (Manipulativa): ${d.piaget.enfoqueCPA.faseConcreta.actividadEspecifica}
- Fase Pictórica (Gráfica): ${d.piaget.enfoqueCPA.fasePictorica.actividadEspecifica}
- Fase Abstracta (Simbólica): ${d.piaget.enfoqueCPA.faseAbstracta.actividadEspecifica}
- Conflicto Cognitivo: ${d.piaget.conflictoCognitivo.planteamiento}

5. RECURSOS Y ACCESO (GRADO 1)
- Ambientales: ${d.recursos.ambientalesYAcceso.join('; ')}
- Didácticos Específicos: ${d.recursos.materialesEspecificos.join('; ')}

6. EVALUACIÓN ADAPTADA
- Indicador Adaptado: ${d.evaluacion.indicadorAdaptado}
- Instrumentos: ${d.evaluacion.instrumentosRecomendados.map(i => `${i.tipo} (${i.descripcion})`).join('; ')}
- Medidas en Pruebas: ${d.evaluacion.medidasAccesoEvaluacion.join('; ')}

7. CORRESPONSABILIDAD
- DECE: ${d.corresponsabilidad.dece.join('; ')}
- Familia: ${d.corresponsabilidad.familia.join('; ')}

================================================================================
Firmas: Docente de Aula | Coordinación Pedagógica | Profesional DECE
================================================================================
  `.trim();

  navigator.clipboard.writeText(textoEstructurado).then(() => {
    showToast('✓ DIAC copiado al portapapeles listo para Word');
  }).catch(() => {
    // Fallback
    const textArea = document.createElement('textarea');
    textArea.value = textoEstructurado;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showToast('✓ DIAC copiado al portapapeles');
  });
}

// -------------------------------------------------------------
// Gestión de Adaptaciones Guardadas (LocalStorage)
// -------------------------------------------------------------
function guardarAdaptacionActual() {
  if (!state.currentAdaptacion) return;

  const item = {
    id: Date.now().toString(),
    fechaGuardado: new Date().toLocaleString('es-EC'),
    estudiante: state.currentAdaptacion.meta.estudianteNombre,
    perfil: state.currentAdaptacion.meta.perfilNombre,
    dcdCodigo: state.currentAdaptacion.meta.dcdCodigo,
    grado: state.currentAdaptacion.meta.gradoAdaptacion,
    datos: JSON.parse(JSON.stringify(state.currentAdaptacion))
  };

  state.savedAdaptaciones.unshift(item);
  localStorage.setItem('adaptadiac_saved', JSON.stringify(state.savedAdaptaciones));
  updateSavedBadge();
  showToast('✓ Adaptación guardada en tu navegador');
}

function updateSavedBadge() {
  if (!elements.savedBadge) return;
  const count = state.savedAdaptaciones.length;
  if (count > 0) {
    elements.savedBadge.textContent = count;
    elements.savedBadge.style.display = 'block';
  } else {
    elements.savedBadge.style.display = 'none';
  }
}

function abrirModalGuardadas() {
  renderizarListaGuardadas();
  elements.modalSaved.showModal();
}

function cerrarModalGuardadas() {
  elements.modalSaved.close();
}

function renderizarListaGuardadas() {
  if (state.savedAdaptaciones.length === 0) {
    elements.savedEmpty.style.display = 'block';
    elements.savedList.innerHTML = '';
    return;
  }

  elements.savedEmpty.style.display = 'none';
  elements.savedList.innerHTML = state.savedAdaptaciones.map(item => `
    <div class="saved-item-row">
      <div class="saved-item-info">
        <strong>${item.estudiante} &bull; Grado ${item.grado}</strong>
        <span>${item.perfil} | [${item.dcdCodigo}] &bull; ${item.fechaGuardado}</span>
      </div>
      <div style="display: flex; gap: 0.35rem;">
        <button class="btn btn-outline btn-sm" onclick="window.cargarAdaptacionGuardada('${item.id}')">Cargar</button>
        <button class="btn btn-secondary btn-sm" onclick="window.eliminarAdaptacionGuardada('${item.id}')" title="Eliminar">&times;</button>
      </div>
    </div>
  `).join('');
}

window.cargarAdaptacionGuardada = function(id) {
  const item = state.savedAdaptaciones.find(s => s.id === id);
  if (!item) return;

  const data = item.datos;
  elements.inputEstudiante.value = data.meta.estudianteNombre;
  elements.inputInstitucion.value = data.meta.institucion;
  elements.selectPerfil.value = data.meta.perfilId;
  seleccionarGrado(Number(data.meta.gradoAdaptacion));

  state.currentDcd = data.dcdOriginal;
  state.currentPerfil = PERFILES_COGNITIVOS.find(p => p.id === data.meta.perfilId) || PERFILES_COGNITIVOS[0];
  state.currentAdaptacion = data;

  updateDCDPreview();
  updatePerfilPreview();
  renderizarDocumentoDIAC(data);
  renderizarVistasComplementarias(data);

  cerrarModalGuardadas();
  showToast(`✓ Adaptación de ${data.meta.estudianteNombre} cargada`);
};

window.eliminarAdaptacionGuardada = function(id) {
  state.savedAdaptaciones = state.savedAdaptaciones.filter(s => s.id !== id);
  localStorage.setItem('adaptadiac_saved', JSON.stringify(state.savedAdaptaciones));
  updateSavedBadge();
  renderizarListaGuardadas();
  showToast('Adaptación eliminada');
};

function limpiarTodasGuardadas() {
  if (confirm('¿Deseas eliminar todas las adaptaciones guardadas?')) {
    state.savedAdaptaciones = [];
    localStorage.removeItem('adaptadiac_saved');
    updateSavedBadge();
    renderizarListaGuardadas();
    showToast('Historial vaciado');
  }
}

// -------------------------------------------------------------
// Utilidades
// -------------------------------------------------------------
function formatearFecha(dateStr) {
  if (!dateStr) return new Date().toLocaleDateString('es-EC', { year: 'numeric', month: 'long', day: 'numeric' });
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    const d = new Date(parts[0], parts[1] - 1, parts[2]);
    return d.toLocaleDateString('es-EC', { year: 'numeric', month: 'long', day: 'numeric' });
  }
  return dateStr;
}

function showToast(msg) {
  if (!elements.toast || !elements.toastMessage) return;
  elements.toastMessage.textContent = msg;
  elements.toast.classList.add('show');
  setTimeout(() => {
    elements.toast.classList.remove('show');
  }, 2800);
}

// -------------------------------------------------------------
// PWA & Service Worker
// -------------------------------------------------------------
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').then(reg => {
        console.log('AdaptaDIAC SW registrado con éxito:', reg.scope);
      }).catch(err => {
        console.log('Error registrando SW:', err);
      });
    });
  }
}

let deferredPrompt = null;
function initPWAInstall() {
  const btnInstall = document.getElementById('btn-install-pwa');
  if (!btnInstall) return;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    btnInstall.style.display = 'inline-flex';
  });

  btnInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        btnInstall.style.display = 'none';
      }
      deferredPrompt = null;
    }
  });

  window.addEventListener('appinstalled', () => {
    btnInstall.style.display = 'none';
    showToast('✓ AdaptaDIAC instalada como App');
  });
}
