# Cuestionario: Conoce a la Comunidad HackODS

> Formulario de registro para participantes del HackODS.
> Las respuestas alimentan el dashboard "Conoce a la Comunidad HackODS".
> Implementar en Google Forms.

---

## Seccion 1: Sobre ti

> Queremos conocerte. Estas preguntas nos ayudan a saber quienes somos como comunidad.

### P1. Me identifico como:
- **Tipo**: Opcion multiple (una respuesta)
- **Columna en datos**: `genero`
- **Opciones**:
  - Mujer
  - Hombre
  - No binarie
  - Prefiero no decirlo
  - Otro
- **Alimenta**: Panorama General > Me identifico como, Quienes somos > Genero por area

### P2. Edad
- **Tipo**: Numero (respuesta corta, validar entero entre 15 y 65)
- **Columna en datos**: `edad`
- **Alimenta**: Panorama General > Distribucion de edad, Quienes somos > Totales (edad promedio)

### P3. Estado de procedencia
- **Tipo**: Lista desplegable (una respuesta)
- **Columna en datos**: `estado`
- **Opciones**:
  - Aguascalientes
  - Baja California
  - Baja California Sur
  - Campeche
  - Chiapas
  - Chihuahua
  - CDMX
  - Coahuila
  - Colima
  - Durango
  - Estado de Mexico
  - Guanajuato
  - Guerrero
  - Hidalgo
  - Jalisco
  - Michoacan
  - Morelos
  - Nayarit
  - Nuevo Leon
  - Oaxaca
  - Puebla
  - Queretaro
  - Quintana Roo
  - San Luis Potosi
  - Sinaloa
  - Sonora
  - Tabasco
  - Tamaulipas
  - Tlaxcala
  - Veracruz
  - Yucatan
  - Zacatecas
- **Alimenta**: Quienes somos > De que estado venimos, Mapa geografico, Totales (Estado #1)

### P4. Area de conocimiento
- **Tipo**: Opcion multiple (una respuesta)
- **Columna en datos**: `area`
- **Opciones**:
  - Ingenierias
  - Ciencias
  - Ciencias Sociales
  - Humanidades
  - Artes
  - Salud
- **Alimenta**: Panorama General > Areas de conocimiento, Quienes somos > Genero por area

---

## Seccion 2: Tus herramientas

> En el HackODS usaremos Python, Quarto y GitHub Pages. Queremos saber de donde partimos.

### P5. Nivel de Python
- **Tipo**: Opcion multiple (una respuesta)
- **Columna en datos**: `python_nivel`
- **Opciones**:
  - Nunca lo use
  - Principiante
  - Intermedio
  - Avanzado
- **Alimenta**: Nuestras herramientas > Totales, Python

### P6. Nivel de Quarto
- **Tipo**: Opcion multiple (una respuesta)
- **Columna en datos**: `quarto_nivel`
- **Opciones**:
  - Nunca lo use
  - Principiante
  - Intermedio
  - Avanzado
- **Alimenta**: Nuestras herramientas > Totales, Quarto

### P7. Nivel de GitHub Pages
- **Tipo**: Opcion multiple (una respuesta)
- **Columna en datos**: `github_nivel`
- **Opciones**:
  - Nunca lo use
  - Principiante
  - Intermedio
  - Avanzado
- **Alimenta**: Nuestras herramientas > Totales, GitHub Pages

---

## Seccion 3: Tu planeta

> Los ODS son el corazon de este hackathon. Queremos saber que te mueve.

### P8. ODS favorito
- **Tipo**: Lista desplegable (una respuesta)
- **Columna en datos**: `ods_favorito`
- **Opciones**:
  - ODS 1: Fin de la pobreza
  - ODS 2: Hambre cero
  - ODS 3: Salud y bienestar
  - ODS 4: Educacion de calidad
  - ODS 5: Igualdad de genero
  - ODS 6: Agua limpia y saneamiento
  - ODS 7: Energia asequible y no contaminante
  - ODS 8: Trabajo decente y crecimiento economico
  - ODS 9: Industria, innovacion e infraestructura
  - ODS 10: Reduccion de las desigualdades
  - ODS 11: Ciudades y comunidades sostenibles
  - ODS 12: Produccion y consumo responsables
  - ODS 13: Accion por el clima
  - ODS 14: Vida submarina
  - ODS 15: Vida de ecosistemas terrestres
  - ODS 16: Paz, justicia e instituciones solidas
  - ODS 17: Alianzas para lograr los objetivos
- **Alimenta**: Nuestro planeta > Totales (ODS mas votado), ODS favoritos

### P9. Habitos sostenibles
- **Tipo**: Casillas de verificacion (seleccion multiple)
- **Columna en datos**: `habitos` (una columna por habito, o separadas por coma)
- **Pregunta**: "Cuales de estos habitos sostenibles practicas?"
- **Opciones**:
  - Reciclo
  - Uso transporte publico
  - Reduzco plastico
  - Composto
  - Ahorro energia
  - Consumo local
  - Uso bici
  - Llevo dieta plant-based
  - Ahorro agua
- **Alimenta**: Nuestro planeta > Totales (% reciclan, habitos promedio), Habitos sostenibles

### P10. Acciones climaticas
- **Tipo**: Opcion multiple (una respuesta)
- **Columna en datos**: `accion_climatica`
- **Pregunta**: "Cual es la principal accion climatica que has tomado?"
- **Opciones**:
  - Marcha o protesta
  - Firma peticiones
  - Educa a otres
  - Proyecto comunitario
  - Contenido en redes
  - Voluntariado
  - Donaciones
  - Ninguna aun
- **Alimenta**: Nuestro planeta > Acciones climaticas

---

## Seccion 4: Tu lado humano

> Ultimo! Unas preguntas divertidas para conocernos mas alla del codigo.

### P12. Genero musical para hackear
- **Tipo**: Opcion multiple (una respuesta)
- **Columna en datos**: `genero_musical`
- **Pregunta**: "Que musica escuchas mientras programas?"
- **Opciones**:
  - Pop
  - Rock
  - Reggaeton
  - Lo-fi / Chill
  - Electronica
  - Hip-hop
  - Clasica
  - Cumbia
  - K-pop
  - Otro
- **Alimenta**: El lado humano > Musica para hackear

### P13. Animal espiritu en reuniones
- **Tipo**: Opcion multiple (una respuesta)
- **Columna en datos**: `animal_espiritu`
- **Pregunta**: "Cual es tu animal espiritu en reuniones de equipo?"
- **Opciones**:
  - Ajolote (tranquilo, se adapta)
  - Perezoso (necesita cafe primero)
  - Buho (nocturno, piensa mucho)
  - Gato (independiente, aparece cuando quiere)
  - Capibara (se lleva con todes)
  - Loro (habla mucho, tiene ideas)
  - Pinguino (trabaja en equipo)
  - Perro golden (entusiasta, leal)
- **Alimenta**: El lado humano > Totales (Animal #1), Animal espiritu

### P14. Snack del hackathon
- **Tipo**: Opcion multiple (una respuesta)
- **Columna en datos**: `snack`
- **Pregunta**: "Tu snack ideal para un hackathon?"
- **Opciones**:
  - Pizza
  - Cafe
  - Galletas
  - Fruta
  - Papas / Chips
  - Tacos
  - Chocolate
  - Gomitas
  - Nada
  - Otro
- **Alimenta**: El lado humano > Totales (Snack #1), Snacks del hackathon

### P15. Horas de sueno
- **Tipo**: Numero (respuesta corta, validar entre 0 y 12, permitir decimales)
- **Columna en datos**: `horas_sueno`
- **Pregunta**: "Cuantas horas duermes en promedio durante un hackathon?"
- **Alimenta**: El lado humano > Totales (Horas promedio), Horas de sueno

### P16. Superpoder para el hackathon
- **Tipo**: Opcion multiple (una respuesta)
- **Columna en datos**: `superpoder`
- **Pregunta**: "Si pudieras tener un superpoder para el hackathon, cual seria?"
- **Opciones**:
  - No dormir nunca
  - Debuggear con la mente
  - Wifi infinito
  - Entender cualquier dataset
  - Hablar todos los idiomas
  - Teletransportarse
- **Alimenta**: El lado humano > Totales (Superpoder #1), Superpoderes

---

## Resumen

| Seccion | Preguntas | Tipo principal |
|---------|-----------|----------------|
| Sobre ti | P1-P4 | Opcion multiple / numero / desplegable |
| Tus herramientas | P5-P7 | Opcion multiple (escala de nivel) |
| Tu planeta | P8-P11 | Desplegable / casillas / opcion multiple |
| Tu lado humano | P12-P16 | Opcion multiple / numero |

**Total**: 16 preguntas. Tiempo estimado: 3-5 minutos.

### Mapeo de columnas del DataFrame

| Columna | Pregunta | Tipo Python |
|---------|----------|-------------|
| `genero` | P1 | str |
| `edad` | P2 | int |
| `estado` | P3 | str |
| `area` | P4 | str |
| `python_nivel` | P5 | str |
| `quarto_nivel` | P6 | str |
| `github_nivel` | P7 | str |
| `ods_favorito` | P8 | int (1-17) |
| `habitos` | P9 | list[str] |
| `conciencia_carbono` | P10 | str |
| `accion_climatica` | P11 | str |
| `genero_musical` | P12 | str |
| `animal_espiritu` | P13 | str |
| `snack` | P14 | str |
| `horas_sueno` | P15 | float |
| `superpoder` | P16 | str |
