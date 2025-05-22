# Manual Técnico Amigable – Reporte Detalle de Cisterna (JasperReports)

Este documento explica de manera clara y accesible cómo funciona el reporte **Detalle de Cisterna** desarrollado con JasperReports.

## 📄 Información General

- **Nombre del reporte**: `Blank_A4`
- **Versión de JasperReports**: 6.21.3
- **Tamaño de página**: A4 (595x842 px)
- **Márgenes**: 20 px en todos los lados
- **Ancho de columna**: 555 px

### 🔗 Datos del Servidor

- **URL**: http://reportes.flowsma.com:8100/reportes/
- **Usuario**: `jasperadmin`
- **Ruta**: `/Julián_Britos___Myreports/detalle_cis`
- **Adaptador de datos**: `donandres`

## 🎛️ Parámetros del Reporte

El reporte acepta varios parámetros que se pueden ajustar para personalizar la información.

### 📌 Detalles de los Parámetros

- `articuloid`: (Obligatorio) ID del artículo a consultar.
- `fechaDesde` y `fechaHasta`: (Opcionales) Fechas para acotar el período de consulta.
- `param_depositoid`: (Opcional) Por defecto 223.
- `orden`: (Opcional) Orden de los resultados, por defecto "ASC".
- `limite`: (Opcional) Máximo de resultados. Si no se especifica, usa un valor inteligente.

## 🧠 Lógica de la Consulta SQL

Se utilizan **CTEs (Common Table Expressions)** para organizar y optimizar la consulta.

### 📊 Cálculos Previos

#### Total Disponible en Cisterna

```sql
WITH disponible_sisterna AS (
  SELECT SUM(da.cantidad) AS total
  FROM test9000.depositosarticulos da
  INNER JOIN test9000.depositos AS d ON d.id = da.depositoid
  WHERE d.id = $P{param_depositoid}
)
```

#### Saldo Inicial

```sql
saldo_inicial AS (
  SELECT da.articuloid,
         SUM(CASE
             WHEN sl.tipoimpacto = -1 THEN - COALESCE(rcp.cantidad, 0)
             ELSE COALESCE(rcp.cantidad, 0)
         END) AS saldo_inicial
  FROM test9000.stocklog sl
  -- joins omitidos por claridad
  WHERE sl.fechaimpacto < CAST(COALESCE($P{fechaDesde}, '2000-01-01') AS DATE)
  GROUP BY da.articuloid
)
```

## 🧾 Datos del Reporte

### 🧮 Cálculos Relevantes

- **Cantidad Ajustada**:

```sql
CASE
  WHEN sl.tipoimpacto = -1 THEN - COALESCE(rcp.cantidad, 0)
  ELSE COALESCE(rcp.cantidad, 0)
END
```

- **Saldo Acumulado**:

```sql
COALESCE(si.saldo_inicial, 0) + SUM(...) OVER (...)
```

- **Tipo de Movimiento**:

```sql
CASE
  WHEN rc.flowid = 11057 THEN 'Ajuste'
  WHEN cantidad_ajustada < 0 THEN 'Carga'
  ELSE 'Descarga'
END
```

## 🔍 Filtros

- Se puede filtrar por fechas usando `fechaDesde` y `fechaHasta`.
- Si no se ingresa un límite, se calcula automáticamente: 50 por defecto o 999999 si se consultan fechas anteriores a hoy.

## 🧱 Tablas Utilizadas

- `stocklog`, `registrocuerpo`, `depositosarticulos`, `articulos`, `registrocab`, `depositos`.

### 📋 Campos Devueltos

Incluyen ID de artículo, nombre, cantidades, saldos, tipo de movimiento, entre otros.

## 🎨 Estilos Visuales

- **Encabezados**: Con fondo naranja (`#F4A300`), texto centrado y negrita.
- **Filas Alternadas**: Con fondo gris claro para mayor legibilidad.
- **Colores por Movimiento**:
  - **Carga**: Rojo claro
  - **Descarga**: Verde claro
  - **Ajuste**: Azul claro

## ⚙️ Optimización del Rendimiento

- Uso de CTEs para cálculos previos.
- Funciones de ventana (`OVER`) para saldos acumulados.
- Límite inteligente de resultados.
- Se sugiere crear índices en campos utilizados frecuentemente:

```sql
CREATE INDEX idx_stocklog_fecha_deposito ON test9000.stocklog(fechaimpacto, depositoid);
```

## 🛠️ Mantenimiento

### Qué monitorear

- Tiempo de ejecución de SQL
- Memoria usada por Jasper
- Tamaño del archivo generado

### Mejoras posibles

- Agregar paginación
- Aplicar cache a consultas comunes
- Filtrar por tipo de movimiento

## ❗ Problemas Frecuentes

- **Parámetros vacíos**: Verificar que `articuloid` no sea nulo.
- **Tiempos de espera**: Reducir el rango de fechas.
- **Formato**: Revisar configuración regional para números y fechas.

## 🚀 Despliegue

1. Validar en entorno de desarrollo
2. Probar en staging
3. Documentar cambios
4. Desplegar en horario programado

## Consulta

```sql
WITH disponible_sisterna AS (
    SELECT SUM(da.cantidad) AS total
    FROM test9000.depositosarticulos da
    INNER JOIN test9000.depositos AS d ON d.id = da.depositoid
    WHERE d.id = $P{param_depositoid}
),
saldo_inicial AS (
    SELECT
        da.articuloid,
        SUM(
            CASE
                WHEN sl.tipoimpacto = -1 THEN - COALESCE(rcp.cantidad, 0)
                ELSE COALESCE(rcp.cantidad, 0)
            END
        ) AS saldo_inicial
    FROM test9000.stocklog sl
    INNER JOIN test9000.registrocuerpo rcp ON rcp.id = sl.registrocuerpoid
    INNER JOIN test9000.depositosarticulos da ON da.id = rcp.articulodepositoid
    WHERE sl.fechaimpacto < CAST(COALESCE($P{fechaDesde}, '2000-01-01') AS DATE)
      AND da.depositoid = $P{param_depositoid}
      AND da.articuloid = $P{articuloid}
    GROUP BY da.articuloid
)

SELECT *
FROM (
    SELECT
        da.articuloid,
        a.nombre,
        da.cantidad AS disponible_articulo,
        COALESCE(rc.referenciatexto, 'N/A') AS referenciatexto,
        TO_CHAR(sl.fechaimpacto, 'YYYY-MM-DD HH24:MI') AS fechaimpacto_formateada,
        COALESCE(sl.registrocabid, 0) AS registrocabid,
        COALESCE(rcp.cantidad, 0) AS cantidad_movimiento,
        CASE
            WHEN sl.tipoimpacto = -1 THEN - COALESCE(rcp.cantidad, 0)
            ELSE COALESCE(rcp.cantidad, 0)
        END AS cantidad_ajustada,

        -- Sumar saldo inicial + acumulado
        COALESCE(si.saldo_inicial, 0) + SUM(
            CASE
                WHEN sl.tipoimpacto = -1 THEN - COALESCE(rcp.cantidad, 0)
                ELSE COALESCE(rcp.cantidad, 0)
            END
        ) OVER (
            PARTITION BY da.articuloid
            ORDER BY sl.fechaimpacto
            ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
        ) AS saldo_acumulado,

        CASE
            WHEN rc.flowid = 11057 THEN 'Ajuste'
            WHEN
                CASE
                    WHEN sl.tipoimpacto = -1 THEN - COALESCE(rcp.cantidad, 0)
                    ELSE COALESCE(rcp.cantidad, 0)
                END < 0
            THEN 'Carga'
            ELSE 'Descarga'
        END AS tipo_movimiento,

        SUM(da.cantidad) OVER (PARTITION BY da.articuloid) AS total_articulo,
        TO_CHAR(COALESCE(ds.total, 0), 'FM999999990.00') AS total_disponible_cisterna

    FROM test9000.stocklog sl
    INNER JOIN test9000.registrocuerpo rcp ON rcp.id = sl.registrocuerpoid
    INNER JOIN test9000.depositosarticulos da ON da.id = rcp.articulodepositoid
    INNER JOIN test9000.articulos a ON a.id = da.articuloid
    INNER JOIN test9000.registrocab rc ON rc.id = sl.registrocabid
    LEFT JOIN test9000.depositos d ON d.id = da.depositoid
    LEFT JOIN disponible_sisterna ds ON 1=1
    LEFT JOIN saldo_inicial si ON si.articuloid = da.articuloid
    WHERE a.id = $P{articuloid}
      AND (
            COALESCE($P{fechaDesde}, $P{fechaHasta}, CURRENT_DATE) = sl.fechaimpacto
            OR sl.fechaimpacto BETWEEN COALESCE($P{fechaDesde}, CURRENT_DATE - INTERVAL '6 month') AND COALESCE($P{fechaHasta}, CURRENT_DATE)
        )
        AND d.id = $P{param_depositoid}
    ORDER BY sl.fechaimpacto DESC
  LIMIT CAST(
        CASE
            WHEN CAST($P{fechaDesde} AS DATE) <> CURRENT_DATE THEN 999999
            ELSE COALESCE(NULLIF($P{limite}, 0), 50)
        END AS INTEGER
    )

) sub
ORDER BY
    CASE WHEN $P{orden} = 'ASC' THEN fechaimpacto_formateada END ASC,
    CASE WHEN $P{orden} = 'DESC' THEN fechaimpacto_formateada END DESC;
```

Esperamos que esta guía te ayude a comprender y utilizar el reporte de forma eficiente. ¡Éxitos con tus reportes!
