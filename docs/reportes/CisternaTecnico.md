# Manual Técnico - Reporte Detalle de Cisterna JasperReports

## Información General del Reporte

### Metadatos del Archivo
- **Nombre del reporte**: `Blank_A4`
- **Versión JasperReports**: 6.21.3
- **Formato de página**: A4 (595x842 px)
- **Márgenes**: 20px en todos los lados
- **Ancho de columna**: 555px

### Configuración del Servidor
- **URL del servidor**: http://reportes.flowsma.com:8100/reportes/
- **Usuario**: jasperadmin
- **Ruta del reporte**: /Julián_Britos___Myreports/detalle_cis
- **Adaptador de datos**: donandres

## Estructura de Parámetros

### Definición de Parámetros

```xml
<parameter name="articuloid" class="java.lang.Integer"/>
<parameter name="fechaDesde" class="java.sql.Date"/>
<parameter name="fechaHasta" class="java.sql.Date"/>
<parameter name="param_depositoid" class="java.lang.Integer">
    <defaultValueExpression><![CDATA[223]]></defaultValueExpression>
</parameter>
<parameter name="orden" class="java.lang.String">
    <defaultValueExpression><![CDATA["ASC"]]></defaultValueExpression>
</parameter>
<parameter name="limite" class="java.lang.Integer"/>
```

### Validación de Parámetros
- **articuloid**: Obligatorio, tipo entero
- **param_depositoid**: Opcional, valor por defecto 223
- **fechaDesde/fechaHasta**: Opcionales, tipo java.sql.Date
- **orden**: Opcional, valores válidos "ASC" o "DESC"
- **limite**: Opcional, controla el número máximo de registros

## Consulta SQL

### Estructura de la Consulta

La consulta utiliza CTEs (Common Table Expressions) para optimizar el rendimiento:

#### CTE 1: `disponible_sisterna`
```sql
WITH disponible_sisterna AS (
    SELECT SUM(da.cantidad) AS total
    FROM test9000.depositosarticulos da
    INNER JOIN test9000.depositos AS d ON d.id = da.depositoid
    WHERE d.id = $P{param_depositoid}
)
```
**Propósito**: Calcula el total disponible en la cisterna especificada.

#### CTE 2: `saldo_inicial`
```sql
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
    -- [joins y condiciones]
    WHERE sl.fechaimpacto < CAST(COALESCE($P{fechaDesde}, '2000-01-01') AS DATE)
    GROUP BY da.articuloid
)
```
**Propósito**: Calcula el saldo inicial antes del período consultado.

### Consulta Principal

#### Campos Calculados Importantes

**Cantidad Ajustada**:
```sql
CASE 
    WHEN sl.tipoimpacto = -1 THEN - COALESCE(rcp.cantidad, 0)
    ELSE COALESCE(rcp.cantidad, 0)
END AS cantidad_ajustada
```

**Saldo Acumulado**:
```sql
COALESCE(si.saldo_inicial, 0) + SUM(
    CASE 
        WHEN sl.tipoimpacto = -1 THEN - COALESCE(rcp.cantidad, 0)
        ELSE COALESCE(rcp.cantidad, 0)
    END
) OVER (
    PARTITION BY da.articuloid 
    ORDER BY sl.fechaimpacto
    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
) AS saldo_acumulado
```

**Tipo de Movimiento**:
```sql
CASE 
    WHEN rc.flowid = 11057 THEN 'Ajuste'
    WHEN [cantidad_ajustada] < 0 THEN 'Carga'
    ELSE 'Descarga'
END AS tipo_movimiento
```

### Lógica de Filtrado

#### Filtrado por Fechas
```sql
WHERE (
    COALESCE($P{fechaDesde}, $P{fechaHasta}, CURRENT_DATE) = sl.fechaimpacto
    OR sl.fechaimpacto BETWEEN 
        COALESCE($P{fechaDesde}, CURRENT_DATE - INTERVAL '6 month') 
        AND COALESCE($P{fechaHasta}, CURRENT_DATE)
)
```

#### Límite Dinámico
```sql
LIMIT CAST(
    CASE 
        WHEN CAST($P{fechaDesde} AS DATE) <> CURRENT_DATE THEN 999999
        ELSE COALESCE(NULLIF($P{limite}, 0), 50)
    END AS INTEGER
)
```

## Modelo de Datos

### Tablas Principales
- **test9000.stocklog**: Log de movimientos de stock
- **test9000.registrocuerpo**: Detalle de registros
- **test9000.depositosarticulos**: Relación artículo-depósito
- **test9000.articulos**: Maestro de artículos
- **test9000.registrocab**: Cabecera de registros
- **test9000.depositos**: Maestro de depósitos

### Campos del Dataset

| Campo | Tipo | Descripción |
|-------|------|-------------|
| articuloid | Long | ID del artículo |
| nombre | String | Nombre del artículo |
| disponible_articulo | Double | Cantidad disponible |
| referenciatexto | String | Referencia del movimiento |
| fechaimpacto_formateada | String | Fecha formateada |
| registrocabid | Long | ID del registro cabecera |
| cantidad_movimiento | Double | Cantidad original del movimiento |
| cantidad_ajustada | Double | Cantidad con signo aplicado |
| saldo_acumulado | Double | Saldo acumulado |
| tipo_movimiento | String | Tipo de movimiento |
| total_articulo | Double | Total del artículo |
| total_disponible_cisterna | String | Total disponible formateado |

## Estilos y Formato Visual

### Definición de Estilos

#### Estilo Base (Style1)
```xml
<style name="Style1" mode="Opaque" forecolor="#232323" backcolor="#F4A300" 
       hTextAlign="Center" vTextAlign="Middle" fontSize="16" isBold="true">
    <box>
        <topPen lineWidth="1.0"/>
        <leftPen lineWidth="1.0"/>
        <bottomPen lineWidth="1.0"/>
        <rightPen lineWidth="1.0"/>
    </box>
</style>
```

#### Estilo de Filas Alternadas (RowStyle)
```xml
<style name="RowStyle">
    <conditionalStyle>
        <conditionExpression><![CDATA[$V{REPORT_COUNT} % 2 != 0]]></conditionExpression>
        <style mode="Opaque" backcolor="#E0E0E0"/>
    </conditionalStyle>
</style>
```

#### Estilo por Tipo de Movimiento (TipoMovimiento)
```xml
<style name="TipoMovimiento">
    <conditionalStyle>
        <conditionExpression><![CDATA[$F{tipo_movimiento}.equals("Descarga")]]></conditionExpression>
        <style mode="Opaque" forecolor="#2E7D32" backcolor="#C8E6C9" isBold="true"/>
    </conditionalStyle>
    <!-- Más condiciones para Carga y Ajuste -->
</style>
```

## Secciones del Reporte

### Page Header (altura: 53px)
- Título de la cisterna (ancho: 344px)
- Total disponible (ancho: 210px)
- Colores: Fondo azul oscuro (#2E3B4E) y azul claro (#D0EBFF)

### Column Header (altura: 59px)
- Encabezados de columnas con estilo Style1
- Distribución de anchos: 130, 137, 77, 100, 110 píxeles

### Detail Band (altura: 18px)
- Filas de datos con estilos condicionales
- Aplicación de RowStyle para filas alternadas
- Aplicación de TipoMovimiento para colorear según el tipo

## Optimizaciones de Rendimiento

### Estrategias Implementadas

1. **CTEs para Pre-cálculos**: Reducen la complejidad de la consulta principal
2. **Índices Implícitos**: La consulta utiliza campos que deberían estar indexados
3. **Límite Dinámico**: Previene consultas excesivamente grandes
4. **Window Functions**: Eficiente cálculo de saldos acumulados

### Recomendaciones de Índices

```sql
-- Índices sugeridos para optimizar rendimiento
CREATE INDEX idx_stocklog_fecha_deposito ON test9000.stocklog(fechaimpacto, depositoid);
CREATE INDEX idx_depositosarticulos_deposito ON test9000.depositosarticulos(depositoid);
CREATE INDEX idx_stocklog_registrocuerpo ON test9000.stocklog(registrocuerpoid);
```

## Mantenimiento y Monitoreo

### Puntos de Monitoreo
- Tiempo de ejecución de la consulta SQL
- Uso de memoria durante la generación
- Tamaño del archivo de salida generado

### Posibles Mejoras
1. **Paginación**: Implementar paginación para grandes volúmenes
2. **Cache**: Cachear resultados para consultas frecuentes
3. **Parámetros Adicionales**: Agregar filtros por tipo de movimiento

## Troubleshooting

### Errores Comunes

**Error de Parámetros Nulos**:
- Verificar que articuloid no sea nulo
- Validar formato de fechas

**Timeout de Consulta**:
- Reducir el rango de fechas
- Implementar límites más restrictivos

**Problemas de Formato**:
- Verificar configuración regional del servidor
- Validar formato de números decimales

### Logs de Diagnóstico
- Habilitar logging de SQL en JasperReports
- Monitorear logs de base de datos
- Revisar logs del servidor de reportes

## Versionado y Deployment

### Control de Versiones
- Mantener backup del archivo .jrxml original
- Documentar cambios en metadatos del reporte
- Utilizar nombres de versión descriptivos

### Proceso de Deployment
1. Validar en ambiente de desarrollo
2. Probar con datos de producción en staging
3. Documentar cambios realizados
4. Desplegar en producción durante ventana de mantenimiento