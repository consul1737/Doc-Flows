# Manual de Usuario - Reporte "Control de Muebles"

## 1. Introducción

Este manual describe el funcionamiento del reporte **"Control de Muebles"**, diseñado para rastrear el estado de muebles en diferentes flujos de trabajo. El reporte muestra información sobre cambios de estado, fechas, referencias y notas asociadas a cada mueble.

## 2. Parámetros del Reporte

El reporte permite filtrar la información mediante los siguientes parámetros:

| Parámetro      | Tipo de Dato | Descripción                                              | Valor por Defecto      | Valores posibles                                                                                        |
| -------------- | ------------ | -------------------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------- |
| **referencia** | Texto        | Filtra por referencia de mueble (búsqueda parcial)       | Vacío                  | Todos los muebles que esten referenciados                                                               |
| **flujo**      | Número       | ID del flujo de trabajo (ej: "Muebles a medida")         | Muebles a medida       | - Muebles a medida <br/> - Cajas y anexos <br/> - Anexos y pos obras                                    |
| **bandera**    | Número       | ID del estado inicial a filtrar                          | MaM Armar              | - MaM Armar<br/> - MaM Instalacion <br  /> - MaM Corte Taller <br /> - CyB Armar <br/> - AyPO Ejecucion |
| **fechaDesde** | Fecha        | Fecha inicial del rango de búsqueda                      | 2000-01-01             | [Ver filtro Fechas](ComportamientoFiltroFechas.md)                                                      |
| **fechaHasta** | Fecha        | Fecha final del rango de búsqueda                        | Fecha actual + 6 meses | [Ver filtro Fechas](ComportamientoFiltroFechas.md)                                                      |
| **ejecutor**   | Texto        | Filtra por identificador del ejecutor (búsqueda parcial) | Vacío                  | Todos los empleados comprometidos en estas actividades                                                  |
| **orden**      | Texto        | Ordena los resultados por fecha (`ASC` o `DESC`)         | `DESC`                 | Descendente o Ascendente                                                                                |

::: warning
La bandera debe coincidir con el flujo

- `MaM` hace referencia a Muebles a medida
- `CyB` hace referencia a Cajas y Bastidores
- `AyPO` hace referencia a Anexos y Pos obras
  :::

## 3. Estructura del Reporte

### 3.1. Encabezado

- Muestra el título del reporte con el tipo de flujo seleccionado (ej: "FLUJO Muebles a medida").
- Incluye un enlace a la documentación externa: 📑 **Documentación**.
- En la sección superior derecha del reporte se muestra un campo con el **total acumulado de muebles** que cumplen con:
  - El estado filtrado en `bandera` (ID de estado inicial)
  - Los criterios aplicados en los parámetros:
    - Rango de fechas (`fechaDesde`/`fechaHasta`)
    - Referencia (`referencia`)
    - Ejecutor (`ejecutor`)
    - Tipo de flujo (`flujo`)

### 3.2. Columnas Principales

| Columna       | Descripción                                  |
| ------------- | -------------------------------------------- |
| **Anterior**  | Actividad de la cual sale.                   |
| **Siguiente** | Actividad a la que ingresa.                  |
| **Fecha**     | Fecha y hora del cambio de estado.           |
| **Mueble**    | Referencia o nombre del mueble.              |
| **Notas**     | Observaciones asociadas al cambio de estado. |

### 3.3. Agrupación por Ejecutor

- Los resultados se agrupan por el campo **`identificador`** que en este caso son los Nombre de los usuarios.
- Cada grupo muestra un subtotal de muebles asociados al ejecutor.

### 3.4. Pie de Página

- Muestra el número de página actual y el total de páginas (ej: "Página 1 de 3").

## 4. Funcionalidades Adicionales

### 4.1. Ordenamiento

- Los resultados pueden ordenarse por fecha en orden ascendente (`ASC`) o descendente (`DESC`).

### 4.2. Sin Datos

- Si no hay registros que coincidan con los filtros, el reporte muestra el mensaje:  
  ❌ **"No hay datos para mostrar. Por favor verifique los filtros si son correctos."**

## 5. Ejemplos de Uso

### Caso 1: Consultar muebles en un rango de fechas

- **`fechaDesde`:** `2024-01-01`
- **`fechaHasta`:** `2024-12-31`
- **Resultado:** Muestra todos los muebles con cambios de estado en 2024.

### Caso 2: Buscar un mueble específico

- **`referencia`:** `Mesa-001`
- **Resultado:** Muestra solo los registros que contengan "Mesa-001" en la referencia.

### Caso 3: Filtrar por ejecutor

- **`ejecutor`:** `Jose Rodriguez`
- **Resultado:** Muestra los muebles gestionados por ejecutores cuyo identificador contiene "Jose Rodriguez".

## 6. Soporte

Para problemas técnicos o consultas, contactar al administrador del sistema.  
📌 **Enlace de ayuda:** [Documentación de Reportes](https://consul1737.github.io/Doc-Flows/reportes/)

## 7. Preguntas Frecuentes (FAQs) para Usuarios Finales

### 📌 Sobre los Filtros Básicos

#### ❓ ¿Cómo busco muebles de un cliente específico?

- **Respuesta:**  
  Usa el campo **"Referencia"**:
  1. Escribe parte del nombre o código del mueble (ej: "Mesa-001" o "López") y selecciónalo de los que aparecen.
  2. No necesita coincidencia exacta (el sistema busca textos parecidos).
     :::tip
     Deja vacío si queres ver **todos los muebles**.
     :::

#### ❓ ¿Cómo filtro por fechas?

- **Respuesta:**  
  Usa **"Fecha desde"** y **"Fecha hasta"**:

  - Formato: `DD/MM/AAAA` (ej: 01/01/2024).
  - _Tip:_ Usa rangos cortos (1 mes) para resultados más precisos.

    :::info
    Para conocer mas como funciona este filtro [ver mas](ComportamientoFiltroFechas.md)
    :::

#### ❓ ¿Qué significa "Ejecutor"?

- **Respuesta:**  
  Es la persona que realizó el cambio de estado. Puedes:
  - Buscar por su nombre o código (ej: "Carlos" o "Jose").
    :::tip
    Dejar vacío para ver todos los ejecutores.
    :::

### 🔍 Sobre los Resultados

#### ❓ ¿Por qué no veo ningún resultado?

- **Verifica:**  
  ✅ El rango de fechas incluye días laborables.  
  ✅ No hay errores de ortografía en "Referencia" o "Ejecutor".  
  ✅ El tipo de flujo seleccionado es correcto (ej: "Muebles a medida").
  ✅ Verifica si la bandera coincide con el flujo
  - MaM hace referencia a Muebles a medida
  - CyB hace referencia a Cajas y Bastidores
  - AyPO hace referencia a Anexos y Pos obras

#### ❓ ¿Qué significan los números junto al nombre del ejecutor?

- **Explicación:**  
  Muestran cuántos muebles gestionó ese ejecutor **con los filtros aplicados**.  
  Ejemplo:  
  `[Jose] [15]` = Carlos procesó 15 muebles en este reporte.

### ⚙️ Configuración Avanzada (Para Administradores)

#### ❓ ¿Cómo cambio el tipo de mueble a consultar?

- **Solución:**  
  El administrador debe seleccionar uno de estos valores predefinidos:
  - `Muebles a medida` (opción por defecto)
  - `Cajas y bastidores`
  - `Anexos y pos obras`

#### ❓ ¿Qué hago si necesito un filtro que no aparece?

- **Acción:**  
  Contacta al equipo de sistemas para:
  1. Agregar nuevos filtros.
  2. Modificar opciones existentes.

### 📅 Consejos de Uso

- **Para seguimiento diario:** Usa fechas cercanas y orden `DESC` (verás primero lo más reciente).
- **Para auditorías:** Usa rangos de fechas amplios y orden `ASC` (verás el histórico completo).

## 🆘 Soporte Técnico

**🅰️ Respuesta:**
Si detecta inconsistencias:

- 📝 Documente el problema (fecha, referencia, cantidad, etc.)
- 🔍 Verifique en el sistema fuente si el error persiste
- 📬 Contacte al administrador del sistema con la información detallada
- ❗ No realice correcciones manuales sin autorización

### Tips útiles para pedir ayuda

- 📸 Capturas de pantalla de errores o filtros usados
- 📅 Especificar rangos de fecha y tipo de reporte
- 📥 Exportar y compartir el Excel si es posible

📩 **Contacto de soporte**:  
[`Ingresa al formulario`](https://surl.li/kmiuwb)

**© 2025 - Sistema de Gestión Flows**  
_Versión del Reporte: 1.0_
