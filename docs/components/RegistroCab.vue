<template>
  <div
    class="formulario bg-white border rounded-lg p-6 shadow-lg max-w-screen-lg mx-auto"
  >
    <h2 class="text-xl font-bold mb-4">{{ titulo }}</h2>

    <!-- Descripción -->
    <label class="block font-semibold mt-4 mb-1">Descripción</label>
    <textarea
      v-model="form.descripcion"
      class="w-full p-2 border rounded"
      rows="5"
    ></textarea>

    <!-- Responsables -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <div v-for="(resp, index) in form.responsables" :key="index">
        <label class="block font-semibold mb-1"
          >Responsable {{ index + 1 }}</label
        >
        <input
          v-model="resp.nombre"
          type="text"
          class="w-full p-2 border rounded"
        />
        <select v-model="resp.tipo" class="w-full mt-2 p-2 border rounded">
          <option value="Directa">Directa</option>
          <option value="Colabora">Colabora</option>
        </select>
      </div>
    </div>

    <!-- Parte interesada -->
    <label class="block font-semibold mt-6 mb-1">Parte interesada</label>
    <select v-model="form.parteInteresada" class="w-full p-2 border rounded">
      <option value="">Seleccionar</option>
      <option value="Empleado">Empleado</option>
      <option value="Proveedor">Proveedor</option>
      <option value="Dueños/Accionistas">Dueños/Accionistas</option>
    </select>

    <!-- Checkboxes -->
    <div class="mt-6">
      <label class="block font-semibold mb-2">Opciones</label>
      <label
        ><input type="checkbox" v-model="form.espera" /> Es Actividad de
        Espera</label
      ><br />
      <label
        ><input type="checkbox" v-model="form.aplicarTodos" /> Aplicar misma
        respuesta a todos los artículos</label
      ><br />
      <label
        ><input type="checkbox" v-model="form.desactivarBoton" /> Deshabilitar
        el botón siguiente del cuerpo</label
      >
    </div>

    <!-- Stock -->
    <div class="mt-6">
      <label class="block font-semibold mb-2">Impacto en el stock</label>
      <select v-model="form.impactoStock" class="w-full p-2 border rounded">
        <option>No Impacta</option>
        <option>Impacto Positivo</option>
        <option>Impacto Negativo</option>
      </select>
    </div>

    <div class="mt-4 text-green-600" v-if="guardado">✔ Cambios guardados</div>
  </div>
</template>

<script setup>
import { reactive, watch, onMounted } from "vue";

// Props que vienen del componente padre
defineProps({
  titulo: {
    type: String,
    default: "Formulario de Hallazgo",
  },
  descripcionInicial: {
    type: String,
    default: "Descripción del hallazgo",
  },
});

const STORAGE_KEY = "formularioDetectarHallazgo";

const savedForm = localStorage.getItem(STORAGE_KEY);
const form = reactive(
  savedForm
    ? JSON.parse(savedForm)
    : {
        descripcion: "",
        responsables: [
          { nombre: "Grupo TODOS", tipo: "Directa" },
          { nombre: "10385", tipo: "Directa" },
          { nombre: "10424", tipo: "Colabora" },
          { nombre: "Administrador de flows", tipo: "Directa" },
        ],
        parteInteresada: "Empleado",
        espera: false,
        aplicarTodos: true,
        desactivarBoton: false,
        impactoStock: "No Impacta",
      }
);

// Setear descripción si no estaba guardado nada
onMounted(() => {
  if (!savedForm) {
    form.descripcion = descripcionInicial;
  }
});

// Guardado automático
let timeout;
const guardado = reactive({ value: false });

watch(
  form,
  () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
      guardado.value = true;
      setTimeout(() => (guardado.value = false), 2000);
    }, 500);
  },
  { deep: true }
);
</script>
