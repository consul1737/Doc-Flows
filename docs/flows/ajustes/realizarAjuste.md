# 🔧 Realizar un Ajuste

## 1️⃣ Registro de Cabecera

Este es el **primer paso** del flujo de ajustes. Se completa la **cabecera del formulario**, que contiene los datos esenciales del ajuste, antes de ingresar los detalles.

## 📋 Formulario de Registro

| 🏷️ Campo             | 💬 Label            | ✅ Visibilidad / Edición | 🧾 Valor Inicial |
| -------------------- | ------------------- | ------------------------ | ---------------- |
| `articulocantidad`   | _(sin label)_       | ✅✅✅🔲                 | _(vacío)_        |
| `auditorid`          | _(sin label)_       | ✅✅✅🔲                 | _(vacío)_        |
| `obsadm`             | Obs. Administración | ✅✅✅🔲                 | _(vacío)_        |
| `referenciatexto`    | Referencia          | ✅✅✅✅                 | _(vacío)_        |
| `articulodepositoid` | Tipo de ajuste      | ✅✅✅🔲                 | _(vacío)_        |
| `cantidad`           | Monto               | ✅✅✅🔲                 | _(vacío)_        |
| `deposito`           | _(sin label)_       | ✅✅✅🔲                 | _(vacío)_        |

## ℹ️ Notas

- Los símbolos **✅✅✅🔲** indican el nivel de visibilidad o edición según el tipo de usuario o estado del ajuste.
- El campo **Referencia** (`referenciatexto`) es visible y editable en todas las etapas.
- Este paso es obligatorio antes de cargar los movimientos específicos del ajuste.
- Ingresar observaciones claras facilita el control y auditoría futura.

:::warning
⚠️ Asegurate de completar correctamente todos los campos requeridos antes de continuar al siguiente paso del flujo.
:::
