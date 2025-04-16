# Documentación del Reporte TA004d y TA009e

## Descripción del Reporte

Este reporte está diseñado para mostrar información detallada sobre tareas (`tareasexec`) en un sistema de gestión de flujos o procesos. Proporciona una vista organizada y agrupada de las actividades realizadas, incluyendo detalles como tiempos estimados, fechas reales, estados y totales acumulativos.

---

## Funcionalidades Principales

### Datos de Entrada

- **param_tipo_flujo**: Filtra por tipo de flujo (producción, contabilidad, etc.).
- **param_filtro**: Permite filtrar por día, semana o mes.
- **param_fecha**: Fecha específica para el filtro.
- **param_perfilid**: Identificador del perfil del usuario responsable de las tareas.

### Consulta SQL

- Recupera datos de `tareasexec`, `registrocab`, `statuses`, `perfiles`, `usuarios`.
- Calcula métricas como horas trabajadas (`horas`) y estados (`status`).
- Usa la función `flowsGetTareasexecTiempos` para cálculo de tiempos.

### Agrupaciones

- Por Instructivo (`INSTRUCTIVO`).
- Por Tarea (`TAREASID`).
- Por Mes.

### Cálculos y Variables

- Totales de horas netas (`total_hs_neto`) y brutas (`total_hs_bruto`).
- Conversión de horas a días (`$F{hsexec} / 24`).

---

## Formato y Diseño

### Encabezado de Página

- Logo (param_logo_imagen).
- Título dinámico con nombre del responsable.

### Cuerpo del Reporte

- Descripción de la tarea (`tadescripcion`).
- Estado (`estado`): Sin iniciar, En proceso, Finalizado.
- Fechas estimadas y reales.
- Horas trabajadas (`horas`) y tiempo bruto (`hsexec`).

### Formato Condicional

- Color de fondo según estado:
  - Azul claro (#C7CDFF): Sin iniciar.
  - Amarillo claro (#FFFECF): En proceso.
  - Verde claro (#C4FCC0): Finalizado.
- Fechas vencidas en rojo.

### Totales por Grupo

- Acumulados de horas netas y brutas al final del grupo por `INSTRUCTIVO`.

### Resumen Final

- Totales del período (día, semana o mes).
- Descripción del rango consultado.

---

## Propósito del Reporte

Este reporte permite:

- Monitorear el progreso de tareas.
- Controlar tiempos y productividad.
- Identificar retrasos.
- Generar informes ejecutivos.

---

## Parámetros Clave

| Parámetro        | Tipo    | Descripción                                                | Ejemplo / Valores comunes             |
| ---------------- | ------- | ---------------------------------------------------------- | ------------------------------------- |
| param_perfilid   | Integer | ID de perfil. Si es 0 muestra todos.                       | 123                                   |
| param_filtro     | String  | Periodo a visualizar.                                      | "dia", "semana", "mes"                |
| param_fecha      | Date    | Fecha base del filtro.                                     | 2023-11-15                            |
| param_tipo_flujo | String  | Tipo de flujo: "0" o "TODOS", "PRODUCCION", ID específico. | "PRODUCCION", "CONTABILIDAD", "11156" |

---

## Hipervínculos

- Link al reporte **TA007 (Tareas Parciales)** usando `param_tareaexecid` como parámetro.

---

## Ejemplo de Uso

Un gerente de proyecto puede:

- Ver tareas pendientes o retrasadas.
- Analizar la carga por equipo (param_perfilid).
- Evaluar el rendimiento mensual/semanal.

Un analista puede:

- Extraer métricas clave.
- Generar informes personalizados.

---

## Personalización

- Cambiar `test9000` por el schema real.
- Ajustar filtros y estilo de color.
- Modificar ruta del logo.

---

## Reporte TA009e

### Objetivo

Proporciona desglose por usuario/período. Se mide:

- Progreso de tareas.
- Horas netas vs brutas.
- Fechas estimadas vs reales.
- Retrasos.
- Productividad por usuario o proyecto.

### Cuerpo Principal

- Responsable (resptxt).
- Descripción + comentario.
- Estado (🔵, 🟡, 🟢).
- Fechas estimadas vs reales.
- Horas netas y tiempo bruto.

### Totales

- Por proyecto (`instructivoexecid`) y período (día, semana, mes).

## CASOS DE USO

Importante al manejar filtros de fecha hacerlo en convinacion con estado y

FILTRAR GENERAL
Sin filtro de fecha: 1 mes del dia actual esto aplica solo a lo finalizado
Estados: Lo finalizado hasta un mes atraz, sin iniciar y pausadas todas desde que arranco el sistema  
FILTRO POR FECHA EGERAL: 1 seman 1 al 7 sin filtro de estado: finalizadas e ese semana, desde el principio hasta 7, no iniciadas desde el princio hasta la fecha. si se filtra desde 4 me trae solo ese dia
FILTRO POR FECHA Y ESTADO
feilto del 1 al 7 estado pausado: desde el principio hasat al 7 (solo desde)
filtro del 1 als7 n iniciado : lo mismo que pausado
filtro del 1 al 7 finalizado: esto respet las fechas entre
FILTRO POR ESTADO sin fecha
pausado : todo
finalizado: todo lo finalizado desde 1 mes atras
no iniciado : solamente lo no iniciado todo

UTIMA FECHA DE PAUSA

---

**Fin del documento.**
