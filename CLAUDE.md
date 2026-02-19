# Dashboard "Conoce a la Comunidad HackODS"

## Contexto

Hackathon de visualización de ODS organizado por la UNAM. **150 personas en 50 equipos** usando Quarto, Python, GitHub Pages y Plotly.

**Objetivo**: Retrato interactivo de la comunidad — quiénes son, de dónde vienen, qué saben hacer, qué les importa y qué les define.

**Datos**: Simulados con `numpy` (seed 42). Se reemplazarán con datos reales de un formulario Google Forms.

---

## Arquitectura

Un solo archivo `index.qmd` con todo. La primera celda Python genera datos simulados y define `hackods_fig()` para estilo Plotly. Cada `#` de nivel 1 crea una página en el dashboard.

| Archivo | Descripción |
|---------|-------------|
| `_quarto.yml` | Config del proyecto (website, output: `docs/`) |
| `index.qmd` | Dashboard completo: YAML + setup Python + 5 páginas |
| `custom.scss` | Tema HackODS (colores, tipografía, navbar) |
| `style.css` | CSS adicional para Plotly y ajustes finos |

---

## Patrón de layout

**Todas las páginas** usan un solo `## Row {.tabset .fill}` con una visualización por pestaña. La primera pestaña siempre es "Totales" con value boxes.

```
# Nombre de página
## Row {.tabset .fill}
### Totales        ← value boxes
### Pestaña 2      ← una gráfica
### Pestaña 3      ← una gráfica
...
```

Cada pestaña transmite **un concepto simple**, expresado como pregunta directa en el título.

---

## Estilo visual

- **Paleta**: Colores ODS (`ODS_BLUE #0a97d9`, `ODS_GREEN #4CA146`, `ODS_RED #E5233D`, etc.)
- **Paleta categórica**: `HACKODS_CAT` (10 colores ODS)
- **Paleta secuencial**: `HACKODS_SEQ` (azules de claro a oscuro)
- **Tipografía**: Inter (cuerpo), Space Grotesk (títulos)
- **Lenguaje**: Español inclusivo ("participantes", "No binarie", sin "sexo")
- **Logo**: `logo.png`
- **Función de estilo**: `hackods_fig(fig, title="")` aplica marca a toda figura Plotly

---

## Estructura: 5 páginas

### PÁGINA 1: Panorama General

**Pregunta**: ¿Qué tan grande y diversa es esta comunidad?

| Pestaña | Gráfica | Concepto |
|---------|---------|----------|
| Totales | 4 value boxes | Participantes, Equipos, Estados, Áreas |
| Identidad de genero | Barra apilada 100% horizontal | Proporción por género |
| Distribucion de edad | Histograma + línea promedio | Rango de edades |
| Areas de conocimiento | Barras horizontales | Top áreas (#1 en rojo) |

### PÁGINA 2: Quienes somos?

**Pregunta**: ¿De dónde venimos y qué tan diversa es la comunidad?

| Pestaña | Gráfica | Concepto |
|---------|---------|----------|
| Totales | 4 value boxes | Edad promedio, Estado #1, Área #1, % Mujeres |
| Genero por area | Barra apilada 100% horizontal | Proporción género × área |
| Mapa geografico | Coroplético (GeoJSON) | México con estados coloreados por participantes |

**Mapa**: Usa `go.Choropleth` con GeoJSON externo de estados mexicanos. Matching de nombres normalizado (sin acentos). `fitbounds="geojson"`, `visible=False` para mostrar solo México.

### PÁGINA 3: Nuestras herramientas

**Pregunta**: ¿Cuántos saben Python, Quarto y GitHub Pages?

| Pestaña | Gráfica | Concepto |
|---------|---------|----------|
| Totales | 3 value boxes | "X de 150" saben cada herramienta (cualquier nivel ≠ "Nunca lo use") |
| Python | Barra apilada 100% | Distribución de niveles |
| Quarto | Barra apilada 100% | Distribución de niveles |
| GitHub Pages | Barra apilada 100% | Distribución de niveles |

**Niveles**: Nunca lo use / Principiante / Intermedio / Avanzado (colores en `LEVEL_COLORS`).

### PÁGINA 4: Nuestro planeta

**Pregunta**: ¿Qué ODS nos importan? ¿Qué hacemos por el planeta?

| Pestaña | Gráfica | Concepto |
|---------|---------|----------|
| Totales | 4 value boxes | ODS top, % reciclan, % conocen huella CO₂, hábitos promedio |
| ODS favoritos | Treemap (colores oficiales ODS) | Qué ODS nos importa más |
| Habitos sostenibles | Treemap | Qué hacemos por el planeta |
| Huella de carbono | Treemap | Nivel de conciencia sobre CO₂ |
| Acciones climaticas | Treemap | Qué acciones tomamos |

### PÁGINA 5: El lado humano

**Pregunta**: ¿Quiénes somos cuando no estamos codeando?

| Pestaña | Gráfica | Concepto |
|---------|---------|----------|
| Totales | 4 value boxes | Horas sueño, Snack #1, Animal #1, Superpoder #1 |
| Musica para hackear | Donut (hole=0.5) | Qué escuchamos |
| Animal espiritu | Barras horizontales con emojis | Tu animal en reuniones |
| Snacks del hackathon | Treemap | Qué comemos |
| Horas de sueno | Histograma + anotaciones | Cuánto dormimos ("Zombies" / "Duermen como bebes") |
| Superpoderes | Barras horizontales | Qué superpoder querrías |

---

## Verificación

1. `uv sync` — instalar dependencias
2. `quarto render` — renderizar
3. Abrir `docs/index.html`
4. Verificar: 5 páginas, tabsets funcionales, gráficos interactivos, colores correctos
