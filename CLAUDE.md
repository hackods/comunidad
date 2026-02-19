# Plan: Dashboard "Conoce a la Comunidad HackODS"

## Contexto

El HackODS es un hackathon de visualización de ODS (Objetivos de Desarrollo Sostenible) organizado por la UNAM, donde participan **150 personas en 50 equipos** usando Quarto, Python, GitHub Pages y Plotly.

**Objetivo del dashboard**: Presentar un retrato interactivo de la comunidad HackODS — quiénes son, de dónde vienen, qué saben hacer, qué les importa del planeta y qué cosas curiosas/geek les definen. Es un "conócenos" visual.

**Audiencia**: Participantes, comunidad del hackathon, juventudes y comunidad unam.

**Datos**: Aún no existen. Se diseña la estructura con datos simulados realistas que después se reemplazan con datos reales de registro mediante un formulario que se diseñara en google forms.

---

## Arco narrativo (Storytelling with Data)

El dashboard sigue un arco de **presentación progresiva** — de lo general a lo personal:

```
GANCHO          →  IDENTIDAD        →  CAPACIDAD          →  PROPÓSITO        →  HUMANIDAD
"Somos 150"        "¿De qué estado?"   "¿Qué nivel tenemos   "¿Qué nos mueve?"   "¿Quiénes somos
                   "¿De qué área?"      en Python, Quarto     "¿Qué ODS?"         de verdad?"
                                         y GitHub Pages?"
```

Cada página responde UNA pregunta central y cierra con un insight memorable.

---

## Estilo visual

- **Paleta HackODS**: Negro `#000000`, Naranja `#ff9b10`, Blanco `#ffffff`
- **Tipografía**: Inter (cuerpo), Space Grotesk (títulos)
- **Gráficos ODS**: Colores oficiales de los 17 ODS cuando se muestren
- **Navbar**: Negro con borde naranja inferior
- **Cards**: Fondo `#f9fafb`, bordes redondeados 12px
- **Lenguaje**: Español inclusivo (no binarie, "participantes", sin "sexo")
- **Logo**: usa el logo.png 

---

## Estructura: 5 páginas

---

### PÁGINA 1: "Panorama General"
**Pregunta**: ¿Qué tan grande y diversa es esta comunidad?
**Propósito**: El gancho. Números grandes que impacten al primer vistazo.

#### Layout
```
Row 1 (25%) — 4 Value Boxes
┌──────────────┬──────────────┬──────────────┬──────────────┐
│ 150          │ 50           │ 15+          │ 6            │
│ Participantes│ Equipos      │ Estados      │ Áreas de     │
│              │              │              │ conocimiento │
└──────────────┴──────────────┴──────────────┴──────────────┘

Row 2 (40%) — 2 Cards
┌─────────────────────────────┬─────────────────────────────┐
│ DONUT: Identidad de género  │ HISTOGRAMA: Distribución    │
│ (Mujer/Hombre/No binarie/  │ de edad (barras por rango,  │
│  Prefiero no decir)         │ línea de promedio ~23 años) │
│ Centro: "150 personas"      │                             │
└─────────────────────────────┴─────────────────────────────┘

Row 3 (35%) — 2 Cards
┌─────────────────────────────────────┬───────────────────────┐
│ BARRAS HORIZONTALES:                │ CARD TEXTO:           │
│ Top áreas de conocimiento           │ "Lo que nos une"      │
│ (Ciencias, Humanidades, Ingenierías,│ Párrafo narrativo     │
│  Artes, Ciencias Sociales, Salud)   │ con insight clave     │
│ (la #1 resaltada en negro,          │                       │
│  resto en naranja)                  │                       │
└─────────────────────────────────────┴───────────────────────┘
```

**Value Boxes**:
| Métrica | Valor | Icono |
|---------|-------|-------|
| Participantes | 150 | `people-fill` |
| Equipos | 50 | `collection-fill` |
| Estados | 15+ | `geo-alt-fill` |
| Áreas de conocimiento | 6 | `mortarboard-fill` |

**Insight de cierre**: "Desde ingenierías hasta humanidades, 150 personas de 15+ estados se organizan en 50 equipos para hackear los ODS."

---

### PÁGINA 2: "¿Quiénes somos?"
**Pregunta**: ¿De dónde venimos y qué tan diversa es la comunidad?
**Propósito**: Profundizar en la identidad — geografía, áreas de conocimiento, composición.

#### Layout
```
Row 1 (15%) — 4 Value Boxes
┌──────────────┬──────────────┬──────────────┬──────────────┐
│ 23 años      │ CDMX         │ Ciencias     │ 44%          │
│ Edad promedio│ Estado #1    │ Área #1      │ Mujeres      │
└──────────────┴──────────────┴──────────────┴──────────────┘

Row 2 (45%) — 2 Cards
┌─────────────────────────────┬─────────────────────────────┐
│ TREEMAP: "¿De qué estado    │ BARRAS AGRUPADAS:           │
│ venimos?"                   │ Género × Área de            │
│ Estado > Ciudad/Municipio   │ conocimiento                │
│ Tamaño = # participantes    │ Un color por identidad      │
│                             │ de género                   │
└─────────────────────────────┴─────────────────────────────┘

Row 3 (40%) — Tabset con 3 pestañas
┌─────────────────────────────────────────────────────────────┐
│ [Edad y género] [Áreas de conocimiento] [Mapa geográfico]  │
│                                                             │
│ Tab 1: Box plot edad por identidad de género                │
│ Tab 2: Barras horizontales de las 6 áreas con %             │
│         (Ciencias, Humanidades, Ingenierías, Artes,         │
│          Ciencias Sociales, Salud)                          │
│ Tab 3: Sunburst Estado > Ciudad (vista alternativa)         │
└─────────────────────────────────────────────────────────────┘
```

---

### PÁGINA 3: "Nuestras herramientas"
**Pregunta**: ¿Qué nivel de conocimiento tenemos en las herramientas del hackathon?
**Propósito**: Mostrar el punto de partida técnico de la comunidad en Python, Quarto y GitHub Pages. Somos una comunidad que aprende junta.

#### Layout
```
Row 1 (15%) — 3 Value Boxes
┌──────────────────┬──────────────────┬──────────────────┐
│ 75%              │ 45%              │ 38%              │
│ Python           │ Quarto           │ GitHub Pages     │
│ Intermedio+      │ Intermedio+      │ Intermedio+      │
└──────────────────┴──────────────────┴──────────────────┘

Row 2 (45%) — 1 Card (ancho completo)
┌─────────────────────────────────────────────────────────────┐
│ 3 BARRAS APILADAS HORIZONTALES (una por herramienta):       │
│                                                             │
│ Python       ██████████████████████████████████████████████ │
│              Nunca lo usé | Principiante | Intermedio | Av. │
│                                                             │
│ Quarto       ██████████████████████████████████████████████ │
│              Nunca lo usé | Principiante | Intermedio | Av. │
│                                                             │
│ GitHub Pages ██████████████████████████████████████████████ │
│              Nunca lo usé | Principiante | Intermedio | Av. │
│                                                             │
│ Cada segmento muestra % dentro                              │
└─────────────────────────────────────────────────────────────┘

Row 3 (40%) — Tabset con 3 pestañas
┌─────────────────────────────────────────────────────────────┐
│ [Python × Área] [Quarto × Área] [GitHub Pages × Área]      │
│                                                             │
│ Tab 1: Heatmap — nivel de Python por área de conocimiento   │
│ Tab 2: Heatmap — nivel de Quarto por área de conocimiento   │
│ Tab 3: Heatmap — nivel de GitHub Pages por área de conoc.   │
│         (filas=áreas, columnas=niveles, color=intensidad)   │
└─────────────────────────────────────────────────────────────┘
```

**Niveles para cada herramienta**:
- **Python**: Nunca lo usé / Principiante / Intermedio / Avanzado
- **Quarto**: Nunca lo usé / Principiante / Intermedio / Avanzado
- **GitHub Pages**: Nunca lo usé / Principiante / Intermedio / Avanzado

---

### PÁGINA 4: "Nuestro planeta"
**Pregunta**: ¿Qué nos mueve? ¿Qué ODS nos importan? ¿Qué hacemos por el planeta?
**Propósito**: El corazón temático. Conectar la comunidad con los ODS y el compromiso ambiental.

#### Layout
```
Row 1 (15%) — 4 Value Boxes
┌──────────────┬──────────────┬──────────────┬──────────────┐
│ ODS 13       │ 62%          │ 47%          │ 2.3          │
│ Acción       │ Reciclan     │ Conocen su   │ Hábitos      │
│ Climática #1 │              │ huella CO₂   │ sostenibles  │
└──────────────┴──────────────┴──────────────┴──────────────┘

Row 2 (50%) — 2 Cards
┌─────────────────────────────┬─────────────────────────────┐
│ TREEMAP: "¿Qué ODS nos      │ BARRAS HORIZONTALES:        │
│ importa más?"               │ "¿Qué hacemos por el        │
│ Un rectángulo por ODS       │  planeta?"                  │
│ COLOR = color oficial ODS   │ Hábitos sostenibles         │
│ TAMAÑO = # votos            │ ordenados por frecuencia    │
└─────────────────────────────┴─────────────────────────────┘

Row 3 (35%) — Tabset con 3 pestañas
┌─────────────────────────────────────────────────────────────┐
│ [Huella de carbono] [Acciones climáticas] [ODS × Área]     │
│                                                             │
│ Tab 1: Donut — nivel de conciencia sobre huella de carbono  │
│ Tab 2: Barras horizontales — acciones climáticas tomadas    │
│ Tab 3: Heatmap — qué ODS importa a cada área de conoc.     │
│         (filas=áreas, columnas=ODS, color=intensidad)       │
└─────────────────────────────────────────────────────────────┘
```

**Colores especiales**: Los gráficos de ODS usan la paleta oficial de la ONU (17 colores).

---

### PÁGINA 5: "El lado humano"
**Pregunta**: ¿Quiénes somos cuando no estamos codeando?
**Propósito**: Cerrar con calidez, humor y datos que generen identificación y se compartan.

#### Layout
```
Row 1 (15%) — 4 Value Boxes
┌──────────────┬──────────────┬──────────────┬──────────────┐
│ 4.5 hrs      │ Pizza        │ Ajolote      │ No dormir    │
│ Horas de     │ Snack #1     │ Animal       │ nunca        │
│ sueño        │              │ espíritu #1  │ Superpoder   │
└──────────────┴──────────────┴──────────────┴──────────────┘

Row 2 (45%) — 2 Cards
┌─────────────────────────────┬─────────────────────────────┐
│ DONUT: "¿Qué escuchamos     │ BARRAS HORIZONTALES:        │
│ mientras hackeamos?"         │ "Tu animal espíritu en      │
│ Géneros musicales           │  reuniones"                 │
│ Centro: "150 playlists"     │ Con emojis en labels        │
│ Segmento top resaltado      │ Colores alternados          │
└─────────────────────────────┴─────────────────────────────┘

Row 3 (40%) — Tabset con 3 pestañas
┌─────────────────────────────────────────────────────────────┐
│ [Snacks] [Horas de sueño] [Superpoderes]                   │
│                                                             │
│ Tab 1: Treemap — snacks del hackathon                       │
│ Tab 2: Histograma — horas de sueño con anotaciones          │
│         ("zombies" a la izquierda, "bebés" a la derecha)    │
│ Tab 3: Barras horizontales — superpoderes deseados          │
└─────────────────────────────────────────────────────────────┘
```

---

## Archivos a crear/modificar

| Archivo | Acción | Descripción |
|---------|--------|-------------|
| `_quarto.yml` | Crear | Config del proyecto (website, output: docs/) |
| `index.qmd` | Crear | Dashboard completo: YAML header + celda Python setup + 5 páginas |
| `custom.scss` | Crear | Tema HackODS (colores, tipografía, cards, navbar) |
| `style.css` | Crear | CSS adicional para contenedores Plotly y ajustes finos |
| `pyproject.toml` | Editar | Agregar `numpy` a dependencias |

**Arquitectura clave**: Un solo archivo `index.qmd` con todo. La primera celda Python genera todos los datos simulados y define la función `hackods_fig()` que aplica el estilo de marca a cada gráfico Plotly. Cada `#` de nivel 1 crea una página/pestaña en el dashboard.

---

## Verificación

1. `uv sync` — instalar dependencias (numpy)
2. `quarto render` — renderizar el dashboard
3. Abrir `docs/index.html` en navegador
4. Verificar: 5 pestañas de navegación, value boxes visibles, gráficos interactivos, colores correctos, lenguaje inclusivo
5. Probar responsividad (redimensionar ventana)
