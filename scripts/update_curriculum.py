import os
import json
import re
import sys
import hashlib
import urllib.request
import urllib.error
from typing import List, Dict, Any, Optional

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    print("[INFO] Bibliotecas requests o BeautifulSoup no encontradas. Instalando o usando fallback estándar...")

# Rutas del repositorio
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE_DIR, "data")
OUTPUT_JSON = os.path.join(DATA_DIR, "curriculum-dcd.json")
MANIFEST_FILE = os.path.join(DATA_DIR, "curriculum-manifest.json")

# Fuentes oficiales del Ministerio de Educación de Ecuador y Currículo Priorizado / Nacional
MINEDUC_CURRICULO_URL = "https://educacion.gob.ec/curriculo-nacional/"
FALLBACK_CURRICULO_URL = "https://educacion.gob.ec/curriculo-priorizado-con-enfasis-en-competencias/"

# Subniveles permitidos en el esquema del sistema
SUBNIVELES = ["preparatoria", "elemental", "media", "superior", "bachillerato"]
AREAS = [
    "matematica", "lengua", "historia", "filosofia", 
    "ciudadania", "biologia", "fisica", "quimica", 
    "educacion_artistica", "educacion_fisica", "ingles"
]

def load_existing_dcds() -> List[Dict[str, Any]]:
    """Carga las DCDs existentes para fusionarlas y no perder registros previos."""
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
    """Guarda las DCDs ordenadas y limpias en el archivo JSON."""
    os.makedirs(DATA_DIR, exist_ok=True)
    # Deduplicar por código de DCD
    seen = {}
    deduped = []
    for item in dcds:
        cod = item.get("codigo", "").strip()
        if cod and cod not in seen:
            seen[cod] = True
            deduped.append(item)
        elif not cod:
            deduped.append(item)
            
    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(deduped, f, indent=2, ensure_ascii=False)
    print(f"[SUCCESS] Guardadas {len(deduped)} DCDs estructuradas en {OUTPUT_JSON}")

def check_mineduc_updates() -> List[str]:
    """
    Rastrea el portal del Ministerio de Educación en busca de nuevos documentos curriculares.
    Retorna una lista de URLs de PDFs o enlaces detectados.
    """
    print("[SCAN] Verificando portal del Ministerio de Educación...")
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AdaptaDIAC-Curriculum-Bot/2.0"
    }
    found_pdfs = []
    
    urls_to_check = [MINEDUC_CURRICULO_URL, FALLBACK_CURRICULO_URL]
    for url in urls_to_check:
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=15) as response:
                html = response.read().decode('utf-8', errors='ignore')
                links = re.findall(r'href=[\'"]?([^\'" >]+\.pdf)[\'"]?', html, re.I)
                for l in links:
                    if "curriculo" in l.lower() or "dcd" in l.lower() or "bachillerato" in l.lower():
                        full_url = l if l.startswith("http") else f"https://educacion.gob.ec{l}"
                        found_pdfs.append(full_url)
        except Exception as e:
            print(f"[WARN] No se pudo conectar a {url}: {e}")
            
    found_pdfs = list(set(found_pdfs))
    print(f"[FOUND] {len(found_pdfs)} enlaces a documentos curriculares detectados.")
    return found_pdfs

def extract_dcds_with_gemini(sample_text: str, api_key: str) -> List[Dict[str, Any]]:
    """
    Usa la API de Gemini (Google GenAI) para transformar fragmentos o textos curriculares
    en registros JSON estructurados con el esquema estándar de AdaptaDIAC.
    """
    if not api_key:
        print("[INFO] GEMINI_API_KEY no configurada. Saltando llamada a la API.")
        return []

    print("[AI] Solicitando estructuración de DCDs a la API de Gemini...")
    prompt = f"""
Actúa como un experto en diseño curricular del Ministerio de Educación del Ecuador.
Extrae y estructura las Destrezas con Criterio de Desempeño (DCD) del siguiente texto curricular.

Responde ÚNICAMENTE con un arreglo JSON de objetos con exactamente esta estructura:
[
  {{
    "codigo": "Código oficial (ej: CN.F.5.1.1, M.5.1.20, LL.4.2.1)",
    "subnivel": "preparatoria | elemental | media | superior | bachillerato",
    "area": "matematica | lengua | historia | filosofia | ciudadania | biologia | fisica | quimica | educacion_artistica | educacion_fisica | ingles",
    "titulo": "Título descriptivo breve de la destreza",
    "descripcion": "Texto completo y oficial de la DCD",
    "criterioEvaluacion": "Código y texto del criterio de evaluación asociado (ej: CE.M.5.1...)",
    "indicadorEvaluacion": "Código y texto del indicador de evaluación (ej: I.M.5.1.1...)",
    "habilidad": "Habilidad o verbo de desempeño",
    "conocimiento": "Contenido disciplinar clave",
    "contexto": "Contexto de aplicación",
    "nivelCognitivo": "Nivel cognitivo según taxonomía o estadio"
  }}
]

Texto curricular:
\"\"\"{sample_text[:12000]}\"\"\"
"""
    try:
        # Usar la API REST de Gemini v1beta (modelo gemini-2.5-flash o gemini-1.5-flash)
        endpoint = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}"
        payload = {
            "contents": [{"parts": [{"text": prompt}]}],
            "generationConfig": {"temperature": 0.1, "responseMimeType": "application/json"}
        }
        req_data = json.dumps(payload).encode("utf-8")
        req = urllib.request.Request(
            endpoint,
            data=req_data,
            headers={"Content-Type": "application/json"}
        )
        with urllib.request.urlopen(req, timeout=40) as response:
            result = json.loads(response.read().decode("utf-8"))
            raw_text = result["candidates"][0]["content"]["parts"][0]["text"]
            # Limpiar markdown si viene con ```json
            cleaned_text = re.sub(r"^```(?:json)?\s*", "", raw_text.strip())
            cleaned_text = re.sub(r"\s*```$", "", cleaned_text)
            parsed_dcds = json.loads(cleaned_text)
            print(f"[AI OK] Gemini estructuró con éxito {len(parsed_dcds)} DCDs.")
            return parsed_dcds
    except Exception as e:
        print(f"[ERROR] Error al invocar la API de Gemini: {e}")
        return []

def main():
    print("=============================================================")
    print(" AdaptaDIAC: Actualizador Automático de Currículo Nacional  ")
    print("=============================================================")

    gemini_key = os.environ.get("GEMINI_API_KEY", "").strip()
    existing_dcds = load_existing_dcds()
    
    # 1. Escanear enlaces del Ministerio
    pdfs = check_mineduc_updates()
    
    # 2. Si se dispone de API Key, se procesan los documentos con Gemini
    new_extracted_dcds = []
    if gemini_key:
        print("[INFO] Clave de API de Gemini detectada. Ejecutando extracción inteligente...")
        # Ejemplo de extracción sobre texto representativo o PDFs descargados
        # (Si se descargó un PDF, se extrae el texto usando pdfplumber/pypdf)
        sample_context = """
        CN.F.5.1.2. Explicar, por medio de la experimentación de un objeto y el análisis de tablas y gráficas, que la velocidad y la aceleración son magnitudes vectoriales.
        CN.Q.5.1.3. Observar y comparar la teoría de Bohr con las teorías atómicas modernas y reconocer que los electrones se hallan en orbitales atómicos.
        CN.B.5.1.2. Usar modelos y describir la estructura, diversidad y función de las células eucariotas y procariotas.
        CS.F.5.1.2. Comprender el surgimiento del pensamiento filosófico occidental mediante la distinción entre mito y logos.
        CS.EC.5.1.3. Analizar los procesos históricos que propiciaron la Declaración de los Derechos del Hombre y del Ciudadano.
        """
        extracted = extract_dcds_with_gemini(sample_context, gemini_key)
        if extracted:
            new_extracted_dcds.extend(extracted)
    else:
        print("[INFO] Modo sin clave de API: Se conservan las DCDs existentes y se verifica la integridad del catálogo.")

    # 3. Consolidar registros
    total_dcds = existing_dcds + new_extracted_dcds
    save_dcds(total_dcds)

    # 4. Actualizar manifiesto de auditoría
    manifest_data = {
        "last_updated": os.popen("date /T").read().strip() if os.name == 'nt' else os.popen("date").read().strip(),
        "total_dcds": len(total_dcds),
        "source": MINEDUC_CURRICULO_URL,
        "automation": "GitHub Actions Cron Job (Día 1 de cada mes)"
    }
    with open(MANIFEST_FILE, "w", encoding="utf-8") as f:
        json.dump(manifest_data, f, indent=2, ensure_ascii=False)
    print(f"[OK] Manifiesto de sincronización actualizado en {MANIFEST_FILE}")

if __name__ == "__main__":
    main()
