import os
import json
import re
import sys
import tempfile
import urllib.request
import urllib.error
from typing import List, Dict, Any, Optional

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    pass

try:
    import pdfplumber
except ImportError:
    pdfplumber = None

# Rutas locales
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE_DIR, "data")
OUTPUT_JSON = os.path.join(DATA_DIR, "curriculum-dcd.json")
MANIFEST_FILE = os.path.join(DATA_DIR, "curriculum-manifest.json")

# Fuentes y repositorios de documentos curriculares oficiales
MINEDUC_CURRICULO_URL = "https://educacion.gob.ec/curriculo-nacional/"
FALLBACK_CURRICULO_URL = "https://educacion.gob.ec/curriculo-priorizado-con-enfasis-en-competencias/"

# Mapeo de prefijos oficiales de áreas del Ministerio de Educación de Ecuador
AREA_PREFIX_MAP = {
    "M": "matematica",
    "LL": "lengua",
    "CS.H": "historia",
    "CS.F": "filosofia",
    "CS.EC": "ciudadania",
    "CN.B": "biologia",
    "CN.F": "fisica",
    "CN.Q": "quimica",
    "CS": "historia",
    "CN": "biologia",
    "ECA": "educacion_artistica",
    "EF": "educacion_fisica",
    "EFL": "ingles"
}

# Mapeo de subniveles según el dígito oficial del currículo ecuatoriano
# En Ecuador: .1 = Preparatoria, .2 = Básica Elemental, .3 = Básica Media, .4 = Básica Superior, .5 = Bachillerato
SUBNIVEL_DIGIT_MAP = {
    "1": "preparatoria",
    "2": "elemental",
    "3": "media",
    "4": "superior",
    "5": "bachillerato"
}

# Regex oficial para DCD ecuatoriana:
# Ejemplos: M.2.1.12, LL.3.2.1, CN.B.5.1.2, CS.H.5.2.3, CS.EC.5.1.4, ECA.4.1.5
DCD_REGEX = re.compile(
    r'\b((?:CN\.[BFQ]|CS\.[HFEC]{1,2}|EFL|ECA|LL|M|CN|CS|EF)\.([1-5])\.\d+\.\d+)\.?\s+([^\n\r]+(?:\n[^\n\r]+)?)',
    re.IGNORECASE
)

# Regex complementario para celdas o líneas que empiezan directamente por el código
DCD_CODE_REGEX = re.compile(
    r'^((?:CN\.[BFQ]|CS\.[HFEC]{1,2}|EFL|ECA|LL|M|CN|CS|EF)\.([1-5])\.\d+\.\d+)\.?',
    re.IGNORECASE
)

def load_existing_dcds() -> List[Dict[str, Any]]:
    """Carga el catálogo previo para acumular y no perder registros."""
    if os.path.exists(OUTPUT_JSON):
        try:
            with open(OUTPUT_JSON, "r", encoding="utf-8") as f:
                data = json.load(f)
                print(f"[OK] Cargadas {len(data)} DCDs existentes de {OUTPUT_JSON}")
                return data
        except Exception as e:
            print(f"[WARN] No se pudo leer {OUTPUT_JSON}: {e}")
    return []

def save_dcds(dcds: List[Dict[str, Any]]) -> None:
    """Guarda las DCDs limpias y ordenadas en el archivo JSON."""
    os.makedirs(DATA_DIR, exist_ok=True)
    seen = {}
    deduped = []
    for item in dcds:
        cod = item.get("codigo", "").strip().upper()
        if cod and cod not in seen:
            seen[cod] = True
            item["codigo"] = cod
            deduped.append(item)
        elif not cod:
            deduped.append(item)

    # Ordenar por código
    deduped.sort(key=lambda x: x.get("codigo", ""))

    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(deduped, f, indent=2, ensure_ascii=False)
    print(f"[SUCCESS] Guardadas {len(deduped)} DCDs estructuradas en {OUTPUT_JSON}")

def determine_area_and_sublevel(codigo: str) -> tuple:
    """Determina de forma determinista el área y el subnivel a partir del código oficial ecuatoriano."""
    codigo_upper = codigo.upper().strip()
    
    # 1. Identificar subnivel por el número del segundo bloque (1=prep, 2=elem, 3=media, 4=sup, 5=bgu)
    subnivel = "bachillerato"
    parts = codigo_upper.split(".")
    for p in parts[1:]:
        if p in SUBNIVEL_DIGIT_MAP:
            subnivel = SUBNIVEL_DIGIT_MAP[p]
            break

    # 2. Identificar área según el subnivel
    if subnivel == "bachillerato":
        if codigo_upper.startswith("CS.H."):
            area = "historia"
        elif codigo_upper.startswith("CS.F."):
            area = "filosofia"
        elif codigo_upper.startswith("CS.EC."):
            area = "ciudadania"
        elif codigo_upper.startswith("CN.B."):
            area = "biologia"
        elif codigo_upper.startswith("CN.F."):
            area = "fisica"
        elif codigo_upper.startswith("CN.Q."):
            area = "quimica"
        elif codigo_upper.startswith("M."):
            area = "matematica"
        elif codigo_upper.startswith("LL."):
            area = "lengua"
        elif codigo_upper.startswith("ECA."):
            area = "educacion_artistica"
        elif codigo_upper.startswith("EF."):
            area = "educacion_fisica"
        elif codigo_upper.startswith("EFL."):
            area = "ingles"
        else:
            area = "historia"
    else:
        # En Preparatoria, Elemental, Media y Superior:
        if codigo_upper.startswith("CS."):
            area = "ciencias_sociales"
        elif codigo_upper.startswith("CN."):
            area = "ciencias_naturales"
        elif codigo_upper.startswith("M."):
            area = "matematica"
        elif codigo_upper.startswith("LL."):
            area = "lengua"
        elif codigo_upper.startswith("ECA."):
            area = "educacion_artistica"
        elif codigo_upper.startswith("EF."):
            area = "educacion_fisica"
        elif codigo_upper.startswith("EFL."):
            area = "ingles"
        else:
            area = "matematica"

    return area, subnivel

def clean_text(text: str) -> str:
    """Limpia saltos de línea, dobles espacios y caracteres residuales de maquetación."""
    if not text:
        return ""
    text = re.sub(r'[\r\n\t]+', ' ', text)
    text = re.sub(r'\s{2,}', ' ', text)
    return text.strip()

def parse_dcd_from_text(raw_text: str) -> List[Dict[str, Any]]:
    """Extrae de manera determinista las DCDs usando expresiones regulares precisas."""
    dcds = []
    matches = DCD_REGEX.finditer(raw_text)
    for m in matches:
        codigo = m.group(1).upper()
        descripcion = clean_text(m.group(3))
        
        # Omitir fragmentos muy cortos o falsos positivos
        if len(descripcion) < 15:
            continue

        area, subnivel = determine_area_and_sublevel(codigo)
        
        # Título sintético extraído de las primeras palabras de la destreza
        palabras = descripcion.split()
        titulo = " ".join(palabras[:7]) + ("..." if len(palabras) > 7 else "")
        habilidad = palabras[0].capitalize() if palabras else "Desarrollar"

        dcds.append({
            "codigo": codigo,
            "subnivel": subnivel,
            "area": area,
            "titulo": titulo,
            "descripcion": f"{codigo}. {descripcion}",
            "criterioEvaluacion": f"CE.{codigo[:4]}",
            "indicadorEvaluacion": f"I.{codigo}",
            "habilidad": habilidad,
            "conocimiento": clean_text(" ".join(palabras[1:10])),
            "contexto": "Contexto escolar y situaciones de la vida cotidiana",
            "nivelCognitivo": "Comprensión / Aplicación"
        })
    return dcds

def extract_tables_with_pdfplumber(pdf_path: str) -> List[Dict[str, Any]]:
    """Extrae DCDs analizando celdas y filas de tablas en el PDF con pdfplumber."""
    extracted = []
    if not pdfplumber:
        print("[WARN] pdfplumber no instalado. Omitiendo extracción tabular avanzada.")
        return extracted

    print(f"[PDF] Analizando tablas en {pdf_path} con pdfplumber...")
    try:
        with pdfplumber.open(pdf_path) as pdf:
            total_pages = len(pdf.pages)
            # Procesar las páginas del documento
            for page_idx, page in enumerate(pdf.pages[:100]): # limitar a 100 páginas por seguridad
                tables = page.extract_tables()
                for table in tables:
                    for row in table:
                        if not row:
                            continue
                        for cell in row:
                            if not cell:
                                continue
                            cell_text = str(cell).strip()
                            # Verificar si la celda contiene una DCD
                            match = DCD_CODE_REGEX.search(cell_text)
                            if match:
                                codigo = match.group(1).upper()
                                # Quitar el código del texto para obtener la descripción
                                desc = clean_text(cell_text[match.end():].lstrip(". :-\n\t"))
                                if len(desc) >= 15:
                                    area, subnivel = determine_area_and_sublevel(codigo)
                                    palabras = desc.split()
                                    titulo = " ".join(palabras[:7]) + ("..." if len(palabras) > 7 else "")
                                    extracted.append({
                                        "codigo": codigo,
                                        "subnivel": subnivel,
                                        "area": area,
                                        "titulo": titulo,
                                        "descripcion": f"{codigo}. {desc}",
                                        "criterioEvaluacion": f"CE.{codigo[:4]}",
                                        "indicadorEvaluacion": f"I.{codigo}",
                                        "habilidad": palabras[0].capitalize() if palabras else "Desarrollar",
                                        "conocimiento": clean_text(" ".join(palabras[1:10])),
                                        "contexto": "Contexto curricular oficial",
                                        "nivelCognitivo": "Comprensión / Aplicación"
                                    })
    except Exception as e:
        print(f"[ERROR] Error al procesar tablas del PDF {pdf_path}: {e}")
    return extracted

def download_and_process_pdf(url: str) -> List[Dict[str, Any]]:
    """Descarga de forma segura un PDF en un archivo temporal y lo procesa."""
    print(f"[DOWNLOAD] Descargando documento curricular: {url}")
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AdaptaDIAC-Robot/3.0"}
    extracted_dcds = []
    
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=30) as resp:
            with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp:
                tmp.write(resp.read())
                tmp_path = tmp.name

        # 1. Intentar extracción por tablas con pdfplumber
        extracted_dcds = extract_tables_with_pdfplumber(tmp_path)
        
        # 2. Si las tablas no trajeron resultados (PDF plano o maquetación libre), extraer texto crudo
        if not extracted_dcds and pdfplumber:
            with pdfplumber.open(tmp_path) as pdf:
                full_text = " ".join([p.extract_text() or "" for p in pdf.pages])
                extracted_dcds = parse_dcd_from_text(full_text)

        # Limpiar archivo temporal
        if os.path.exists(tmp_path):
            os.remove(tmp_path)
            
    except Exception as e:
        print(f"[WARN] Error al descargar/procesar {url}: {e}")

    return extracted_dcds

# Enlaces directos a los repositorios oficiales de PDFs del Ministerio de Educación (todos los subniveles)
OFFICIAL_MINEDUC_PDFS = [
    "https://educacion.gob.ec/wp-content/uploads/downloads/2021/12/Curriculo-priorizado-con-enfasis-en-CC-CM-CD-CS_Preparatoria.pdf",
    "https://educacion.gob.ec/wp-content/uploads/downloads/2021/12/Curriculo-priorizado-con-enfasis-en-CC-CM-CD-CS_Elemental.pdf",
    "https://educacion.gob.ec/wp-content/uploads/downloads/2021/12/Curriculo-priorizado-con-enfasis-en-CC-CM-CD-CS_Media.pdf",
    "https://educacion.gob.ec/wp-content/uploads/downloads/2021/12/Curriculo-priorizado-con-enfasis-en-CC-CM-CD-CS_Superior.pdf",
    "https://educacion.gob.ec/wp-content/uploads/downloads/2021/12/Curriculo-priorizado-con-enfasis-en-CC-CM-CD-CS_Bachillerato.pdf"
]

def check_mineduc_updates() -> List[str]:
    """Rastrea el portal del Ministerio de Educación e incluye los repositorios directos oficiales."""
    print("[SCAN] Escaneando portal oficial del Ministerio de Educación...")
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AdaptaDIAC-Robot/3.0"}
    found_pdfs = list(OFFICIAL_MINEDUC_PDFS)
    urls_to_check = [MINEDUC_CURRICULO_URL, FALLBACK_CURRICULO_URL]
    
    for url in urls_to_check:
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=15) as response:
                html = response.read().decode('utf-8', errors='ignore')
                links = re.findall(r'href=[\'"]?([^\'" >]+\.pdf)[\'"]?', html, re.I)
                for l in links:
                    l_lower = l.lower()
                    if "curriculo" in l_lower or "priorizado" in l_lower or "dcd" in l_lower or "bgu" in l_lower:
                        full_url = l if l.startswith("http") else f"https://educacion.gob.ec{l}"
                        found_pdfs.append(full_url)
        except Exception as e:
            print(f"[WARN] No se pudo conectar a {url}: {e}")
            
    found_pdfs = list(set(found_pdfs))
    print(f"[FOUND] {len(found_pdfs)} enlaces oficiales detectados.")
    return found_pdfs

def main():
    print("==================================================================")
    print(" AdaptaDIAC: Robot Determinista de Extracción de Currículo       ")
    print(" (100% Sin IA / Procesamiento con Regex + Tablas de pdfplumber)  ")
    print("==================================================================")

    existing_dcds = load_existing_dcds()
    pdf_urls = check_mineduc_updates()
    
    new_extracted = []
    # Procesar todos los documentos oficiales identificados
    for pdf_url in pdf_urls:
        dcds = download_and_process_pdf(pdf_url)
        if dcds:
            print(f"[OK] Extraídas {len(dcds)} DCDs de {pdf_url}")
            new_extracted.extend(dcds)

    # Fusionar con las DCDs existentes
    total_dcds = existing_dcds + new_extracted
    save_dcds(total_dcds)

    # Actualizar manifiesto
    manifest = {
        "engine": "Deterministic Regex + pdfplumber (Zero AI Dependency)",
        "total_dcds": len(total_dcds),
        "mineduc_source": MINEDUC_CURRICULO_URL,
        "automation": "GitHub Actions Cron Job (Día 1 de cada mes)"
    }
    with open(MANIFEST_FILE, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)
    print(f"[OK] Manifiesto actualizado en {MANIFEST_FILE}")

if __name__ == "__main__":
    main()
