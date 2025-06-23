<template>
  <div class="container mx-auto p-4 max-w-6xl">
    <!-- Header -->
    <div
      class="flex justify-between items-center bg-blue-50 dark:bg-gray-800 p-4 rounded-lg mb-4"
    >
      <h1 class="text-xl font-bold">
        Programación de esta Actividad → 34.0.04 Tratamiento rápido
      </h1>
      <div class="flex space-x-2">
        <button
          class="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 dark:hover:bg-gray-700 transition"
        >
          Configurar formulario
        </button>
        <button
          class="px-4 py-2 border border-primary text-primary rounded hover:bg-blue-50 dark:hover:bg-gray-700 transition"
        >
          Editar
        </button>
      </div>
    </div>

    <!-- Form Content -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <!-- Campos básicos -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="space-y-1">
          <label class="block font-medium">Orden</label>
          <input
            type="text"
            class="w-full p-2 border rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            readonly
          />
        </div>
        <div class="space-y-1">
          <label class="block font-medium">Evidencias</label>
          <input
            type="text"
            class="w-full p-2 border rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            readonly
          />
        </div>
      </div>

      <div class="mb-6">
        <label class="block font-medium">Descripción</label>
        <textarea
          class="w-full p-2 border rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          rows="5"
          readonly
        ></textarea>
      </div>

      <div class="mb-6">
        <label class="block font-medium">Actividad del puesto de trabajo</label>
        <input
          type="text"
          class="w-full p-2 border rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          readonly
        />
      </div>

      <div class="mb-6">
        <label class="block font-medium">Frecuencia</label>
        <select
          class="w-full p-2 border rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          disabled
        >
          <option>Seleccionar</option>
        </select>
      </div>

      <div class="mb-6">
        <label class="block font-medium">Título</label>
        <input
          type="text"
          class="w-full p-2 border rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          readonly
        />
      </div>

      <!-- Sección 1 -->
      <div class="mb-6 border-l-4 border-red-500 pl-4">
        <div
          class="section-header flex items-center text-red-500 font-bold"
          onclick="toggleSection(1)"
        >
          <i class="material-icons expand-icon mr-2">keyboard_arrow_down</i>
          <span>1. Programación de acceso y responsable de la actividad</span>
        </div>
        <div class="section-content collapsed mt-2 pl-6 text-blue-600">
          Acá debe seleccionar el puesto de trabajo que ejecuta esta actividad,
          a su vez, le está dando acceso para incorpora datos en el formulario
          de la misma.
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label class="block font-medium">Responsable</label>
          <select
            class="w-full p-2 border rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            disabled
          >
            <option>Grupo TODOS</option>
          </select>
        </div>
        <div>
          <label class="block font-medium">Tipo de intervención</label>
          <select
            class="w-full p-2 border rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            disabled
          >
            <option>Directa</option>
            <option>Colabora</option>
          </select>
        </div>
      </div>

      <div class="mb-6">
        <label class="flex items-center space-x-2">
          <input
            type="checkbox"
            class="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700"
            disabled
          />
          <span>Ocultar el Botón de Inicio</span>
        </label>
      </div>

      <!-- Sección 2 -->
      <div class="mb-6 border-l-4 border-red-500 pl-4">
        <div
          class="section-header flex items-center text-red-500 font-bold"
          onclick="toggleSection(2)"
        >
          <i class="material-icons expand-icon mr-2">keyboard_arrow_down</i>
          <span>2. Programación del botón 'siguiente'</span>
        </div>
        <div class="section-content collapsed mt-2 pl-6 text-blue-600">
          Al presionar el botón siguiente, en la actividad anterior, se puede
          programar que al ingresar a esta actividad se asigne a: todos los
          puestos AUTORIZADOS en el punto 1, seleccionando "No Preasignar", a un
          usuario en particular que tenga asignado el puesto AUTORIZADO,
          seleccionando "Preasignar". O que se asigne automáticamente al usuario
          actual sin consultar, seleccionando "Preasignar Autenticado"
        </div>
      </div>

      <div class="mb-6">
        <label class="block font-medium mb-2"
          >Al ingresar a esta actividad asigna usuario responsable de
          actuar</label
        >
        <div class="flex flex-wrap gap-4">
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="preassign"
              class="text-primary"
              checked
              disabled
            />
            <span>No Preasignar</span>
          </label>
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="preassign"
              class="text-primary"
              disabled
            />
            <span>Preasignar</span>
          </label>
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="preassign"
              class="text-primary"
              disabled
            />
            <span>Preasignar Autenticado</span>
          </label>
        </div>
      </div>

      <div class="space-y-4 mb-6">
        <label class="flex items-center space-x-2">
          <input
            type="checkbox"
            class="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700"
            disabled
          />
          <span>Es Actividad de Espera</span>
        </label>
        <label class="flex items-center space-x-2">
          <input
            type="checkbox"
            class="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700"
            checked
            disabled
          />
          <span>Aplicar mismo usuario a todos los artículos</span>
        </label>
        <label class="flex items-center space-x-2">
          <input
            type="checkbox"
            class="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700"
            checked
            disabled
          />
          <span>Aplica misma respuesta a todos los artículos</span>
        </label>
        <label class="flex items-center space-x-2">
          <input
            type="checkbox"
            class="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700"
            disabled
          />
          <span>Deshabilitar el botón siguiente del cuerpo</span>
        </label>
        <label class="flex items-center space-x-2">
          <input
            type="checkbox"
            class="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700"
            disabled
          />
          <span
            >En esta actividad la carga de registro cuerpo es obligatorio</span
          >
        </label>
      </div>

      <!-- Sección 3 -->
      <div class="mb-6 border-l-4 border-red-500 pl-4">
        <div
          class="section-header flex items-center text-red-500 font-bold"
          onclick="toggleSection(3)"
        >
          <i class="material-icons expand-icon mr-2">keyboard_arrow_down</i>
          <span>3. Programación del botón "guardar"</span>
        </div>
        <div class="section-content collapsed mt-2 pl-6 text-blue-600">
          Al presionar el botón "guardar" se puede programar que lo guarde solo
          para el usuario que está completando el formulario, lo deje abierto
          para que lo vean todos los responsables de esta actividad o que
          seleccione uno en particular. Lo que tiene que saber es que al guardar
          "solo para el usuario" el formulario queda abierto y en los otros dos
          casos el formulario, no solo que se guarda, sino que tambien se
          cierra.
        </div>
      </div>

      <div class="mb-6">
        <label class="block font-medium mb-2"
          >Definir Responsable al Guardar</label
        >
        <div class="flex flex-wrap gap-4">
          <label class="flex items-center space-x-2">
            <input type="radio" name="save" class="text-primary" disabled />
            <span>Solo para el Usuario</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="save" class="text-primary" disabled />
            <span>Abierto</span>
          </label>
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="save"
              class="text-primary"
              checked
              disabled
            />
            <span>Seleccionar Uno</span>
          </label>
        </div>
      </div>

      <!-- Sección 4 -->
      <div class="mb-6 border-l-4 border-red-500 pl-4">
        <div
          class="section-header flex items-center text-red-500 font-bold"
          onclick="toggleSection(4)"
        >
          <i class="material-icons expand-icon mr-2">keyboard_arrow_down</i>
          <span>4. Programación de desplegables para el formulario</span>
        </div>
        <div class="section-content collapsed mt-2 pl-6 text-blue-600">
          Acá podrá definir que listado se desplegará en los desplegables del
          formulario, en el caso de parte interesada podrá seleccionar por
          ejemplo Clientes, Proveedores, Empleados, etc
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label class="block font-medium">Parte interesada</label>
          <select
            class="w-full p-2 border rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            disabled
          >
            <option>Dueños/Accionistas</option>
          </select>
        </div>
        <div>
          <label class="block font-medium">Parte interesada</label>
          <select
            class="w-full p-2 border rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            disabled
          >
            <option>Empleado</option>
          </select>
        </div>
      </div>

      <div class="mb-6">
        <label class="block font-medium mb-2">Agregar Clientes</label>
        <div class="flex flex-wrap gap-4">
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="clients"
              class="text-primary"
              checked
              disabled
            />
            <span>No Permitir</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="clients" class="text-primary" disabled />
            <span>Solo Actualizar Existentes</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="clients" class="text-primary" disabled />
            <span>Solo Crear Nuevos</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="clients" class="text-primary" disabled />
            <span>Ambos</span>
          </label>
        </div>
      </div>

      <div class="mb-6">
        <label class="block font-medium mb-2">Permitir Agregar Articulos</label>
        <div class="flex flex-wrap gap-4">
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="articles"
              class="text-primary"
              checked
              disabled
            />
            <span>No Permitir</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="articles" class="text-primary" disabled />
            <span>Solo Actualizar Existentes</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="articles" class="text-primary" disabled />
            <span>Solo Crear Nuevos</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="articles" class="text-primary" disabled />
            <span>Ambos</span>
          </label>
        </div>
      </div>

      <!-- Sección 5 -->
      <div class="mb-6 border-l-4 border-red-500 pl-4">
        <div
          class="section-header flex items-center text-red-500 font-bold"
          onclick="toggleSection(5)"
        >
          <i class="material-icons expand-icon mr-2">keyboard_arrow_down</i>
          <span>5. Programación para generar registro asociado (HIJO)</span>
        </div>
        <div class="section-content collapsed mt-2 pl-6 text-blue-600">
          Para crear un nuevo registro que se asocia al actual (como hijo), se
          inicia en un nuevo Flow, y aparecerá en el formulario con el aspecto
          de un botón con el nombre del flow. A continuación, seleccione el flow
        </div>
      </div>

      <div class="mb-6">
        <label class="block font-medium mb-2"
          >Al crear Nuevo Registro Hijo Asociado</label
        >
        <div class="flex flex-wrap gap-4">
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="child"
              class="text-primary"
              checked
              disabled
            />
            <span>No Copiar Datos</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="child" class="text-primary" disabled />
            <span>Solo Registro Cab</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="child" class="text-primary" disabled />
            <span>Copiar Cab y Cuerpos</span>
          </label>
        </div>
      </div>

      <div class="space-y-4 mb-6">
        <label class="flex items-center space-x-2">
          <input
            type="checkbox"
            class="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700"
            disabled
          />
          <span>Permitir asociar solo UN registro</span>
        </label>
        <label class="flex items-center space-x-2">
          <input
            type="checkbox"
            class="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700"
            disabled
          />
          <span>Usar solo articulos usados en el registro padre</span>
        </label>
      </div>

      <!-- Sección 6 -->
      <div class="mb-6 border-l-4 border-red-500 pl-4">
        <div
          class="section-header flex items-center text-red-500 font-bold"
          onclick="toggleSection(6)"
        >
          <i class="material-icons expand-icon mr-2">keyboard_arrow_down</i>
          <span
            >6. Programación para asociar con un registro existente (padre o
            hijo)</span
          >
        </div>
        <div class="section-content collapsed mt-2 pl-6 text-blue-600">
          Podrá definir en que actividad se encuentran los registros que quiere
          relacionar como hijo (buscar un hijo)
        </div>
      </div>

      <div class="mb-6">
        <label class="block font-medium mb-2"
          >Adjuntar registro Hijo relacionado</label
        >
        <div class="flex flex-wrap gap-4">
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="child-attach"
              class="text-primary"
              disabled
            />
            <span>Obligatorio</span>
          </label>
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="child-attach"
              class="text-primary"
              disabled
            />
            <span>Opcional</span>
          </label>
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="child-attach"
              class="text-primary"
              checked
              disabled
            />
            <span>Solo Ver</span>
          </label>
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="child-attach"
              class="text-primary"
              disabled
            />
            <span>No Mostrar</span>
          </label>
        </div>
      </div>

      <div class="mb-6">
        <label class="block font-medium mb-2"
          >Adjuntar registro Padre relacionado</label
        >
        <div class="flex flex-wrap gap-4">
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="parent-attach"
              class="text-primary"
              disabled
            />
            <span>Obligatorio</span>
          </label>
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="parent-attach"
              class="text-primary"
              disabled
            />
            <span>Opcional</span>
          </label>
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="parent-attach"
              class="text-primary"
              disabled
            />
            <span>Solo Ver</span>
          </label>
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="parent-attach"
              class="text-primary"
              checked
              disabled
            />
            <span>No Mostrar</span>
          </label>
        </div>
      </div>

      <!-- Sección 7 -->
      <div class="mb-6 border-l-4 border-red-500 pl-4">
        <div
          class="section-header flex items-center text-red-500 font-bold"
          onclick="toggleSection(7)"
        >
          <i class="material-icons expand-icon mr-2">keyboard_arrow_down</i>
          <span>7. Programación para adjuntar archivos</span>
        </div>
        <div class="section-content collapsed mt-2 pl-6 text-blue-600">
          Se pueden adjuntar archivos PDF, JPG, etc con un tamaño máximo de 5MB.
          Para lo cual debe tildar la opción que se muestra a continuación. Y se
          puede establecer condiciones para el agregado de archivos y estos son:
          "obligatorio" que no podrá avanzar a la siguiente actividad sino
          adjunta al menos un archivo, "opcional" que establece que se puede
          agregar un archivo, pero no es obligatorio. "Solo ver" en la actividad
          se podrán ver los archivos, pero no puede agregar. "no permitido" no
          los ve, ni puede agregar archivos
        </div>
      </div>

      <div class="mb-6">
        <label class="block font-medium mb-2"
          >Esta actividad permite adjuntar archivos PDF y JPG a los
          registros</label
        >
        <div class="flex flex-wrap gap-4">
          <label class="flex items-center space-x-2">
            <input type="radio" name="files" class="text-primary" disabled />
            <span>Obligatorio</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="files" class="text-primary" disabled />
            <span>Opcional</span>
          </label>
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="files"
              class="text-primary"
              checked
              disabled
            />
            <span>Solo Ver</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="files" class="text-primary" disabled />
            <span>No Mostrar</span>
          </label>
        </div>
      </div>

      <div class="mb-6">
        <label class="block font-medium mb-2"
          >Opciones de Audio en esta Actividad</label
        >
        <div class="flex flex-wrap gap-4">
          <label class="flex items-center space-x-2">
            <input type="radio" name="audio" class="text-primary" disabled />
            <span>No Mostrar</span>
          </label>
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="audio"
              class="text-primary"
              checked
              disabled
            />
            <span>Solo Mostrar</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="audio" class="text-primary" disabled />
            <span>Grabar si no hay</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="audio" class="text-primary" disabled />
            <span>Regrabar si ya hay</span>
          </label>
        </div>
      </div>

      <!-- Sección 8 -->
      <div class="mb-6 border-l-4 border-red-500 pl-4">
        <div
          class="section-header flex items-center text-red-500 font-bold"
          onclick="toggleSection(8)"
        >
          <i class="material-icons expand-icon mr-2">keyboard_arrow_down</i>
          <span>8. Programación del stock en esta actividad</span>
        </div>
        <div class="section-content collapsed mt-2 pl-6 text-blue-600">
          En esta actividad se puede impactar al stock de forma positiva,
          negativa o no impacta. Dicho impacto se ejecutará cuando avance a la
          siguiente actividad, al presionar el botón "siguiente". NOTA. Si
          tambien se programa que impacte con el cab… dicho impacto será de
          signo contrario a la opción seleccionada
        </div>
      </div>

      <div class="mb-6">
        <label class="block font-medium mb-2"
          >En esta actividad se impacta el stock?</label
        >
        <div class="flex flex-wrap gap-4">
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="stock"
              class="text-primary"
              checked
              disabled
            />
            <span>No Impacta</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="stock" class="text-primary" disabled />
            <span>Impacto Positivo</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="stock" class="text-primary" disabled />
            <span>Impacto Negativo</span>
          </label>
        </div>
      </div>

      <div class="mb-6">
        <label class="block font-medium mb-2"
          >En esta actividad se compromete stock?</label
        >
        <div class="flex flex-wrap gap-4">
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="stock-commit"
              class="text-primary"
              checked
              disabled
            />
            <span>Sin Previsión</span>
          </label>
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="stock-commit"
              class="text-primary"
              disabled
            />
            <span>Prevé Entradas del Artículo</span>
          </label>
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="stock-commit"
              class="text-primary"
              disabled
            />
            <span>Reserva Salidas del Artículo</span>
          </label>
        </div>
      </div>

      <div class="mb-6">
        <label class="flex items-center space-x-2">
          <input
            type="checkbox"
            class="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700"
            disabled
          />
          <span>Permite Cambiar Deposito</span>
        </label>
      </div>

      <!-- Sección 9 -->
      <div class="mb-6 border-l-4 border-red-500 pl-4">
        <div
          class="section-header flex items-center text-red-500 font-bold"
          onclick="toggleSection(9)"
        >
          <i class="material-icons expand-icon mr-2">keyboard_arrow_down</i>
          <span>9. Programación para artículos compuestos</span>
        </div>
        <div class="section-content collapsed mt-2 pl-6 text-blue-600">
          Cuando un artículo es "compuesto" permite seleccionarlo en el cab y se
          agregan en el cuerpo cuando presiona el botón "agregar"
        </div>
      </div>

      <div class="mb-6">
        <label class="flex items-center space-x-2">
          <input
            type="checkbox"
            class="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700"
            disabled
          />
          <span
            >Permite generar en el detalle la composición de un articulo
            compuesto</span
          >
        </label>
      </div>

      <div class="mb-6">
        <label class="flex items-center space-x-2">
          <input
            type="checkbox"
            class="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700"
            disabled
          />
          <span>Permite Agregar Artículo en Encabezado de Registro</span>
        </label>
      </div>

      <!-- Sección 10 -->
      <div class="mb-6 border-l-4 border-red-500 pl-4">
        <div
          class="section-header flex items-center text-red-500 font-bold"
          onclick="toggleSection(10)"
        >
          <i class="material-icons expand-icon mr-2">keyboard_arrow_down</i>
          <span>10. Programación de tareas</span>
        </div>
        <div class="section-content collapsed mt-2 pl-6 text-blue-600">
          Cuando se permite al usuario agregar tareas para sí mismo, relacionado
          con esta actividad, desde el "área de tareas", se debe seleccionar el
          siguiente casillero
        </div>
      </div>

      <div class="mb-6">
        <label class="flex items-center space-x-2">
          <input
            type="checkbox"
            class="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700"
            disabled
          />
          <span>Permitir Agregar Tareas</span>
        </label>
      </div>

      <!-- Sección 11 -->
      <div class="mb-6 border-l-4 border-red-500 pl-4">
        <div
          class="section-header flex items-center text-red-500 font-bold"
          onclick="toggleSection(11)"
        >
          <i class="material-icons expand-icon mr-2">keyboard_arrow_down</i>
          <span>11. Programación de comprobantes de AFIP</span>
        </div>
        <div class="section-content collapsed mt-2 pl-6 text-blue-600">
          <!-- Contenido vacío como en el original -->
        </div>
      </div>

      <div class="space-y-4 mb-6">
        <label class="flex items-center space-x-2">
          <input
            type="checkbox"
            class="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700"
            disabled
          />
          <span>Permite generar comprobantes AFIP</span>
        </label>
        <label class="flex items-center space-x-2">
          <input
            type="checkbox"
            class="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700"
            disabled
          />
          <span>Permite ver comprobantes AFIP ya generados</span>
        </label>
      </div>

      <!-- Sección 12 -->
      <div class="mb-6 border-l-4 border-red-500 pl-4">
        <div
          class="section-header flex items-center text-red-500 font-bold"
          onclick="toggleSection(12)"
        >
          <i class="material-icons expand-icon mr-2">keyboard_arrow_down</i>
          <span>12. Programación de cheques</span>
        </div>
        <div class="section-content collapsed mt-2 pl-6 text-blue-600">
          Cuando se requiere manejar cheques en el cuerpo de esta actividad, se
          debe dar de alta el articulo cheque en "artículos" (ver alta de
          artículos) y seleccionar uno de estos casilleros
        </div>
      </div>

      <div class="mb-6">
        <label class="block font-medium mb-2">Cartera de Cheques</label>
        <div class="flex flex-wrap gap-4">
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="checks"
              class="text-primary"
              checked
              disabled
            />
            <span>No Mostrar</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="checks" class="text-primary" disabled />
            <span>Solo Mostrar</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="checks" class="text-primary" disabled />
            <span>Permite Ingresos</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="checks" class="text-primary" disabled />
            <span>Permite Egresos</span>
          </label>
        </div>
      </div>

      <!-- Sección 13 -->
      <div class="mb-6 border-l-4 border-red-500 pl-4">
        <div
          class="section-header flex items-center text-red-500 font-bold"
          onclick="toggleSection(13)"
        >
          <i class="material-icons expand-icon mr-2">keyboard_arrow_down</i>
          <span>13. Programación de Listas de Precios</span>
        </div>
        <div class="section-content collapsed mt-2 pl-6 text-blue-600">
          Permite definir las listas de precios que se utilizarán en esta
          actividad para establecer el precio de los artículos del registro
        </div>
      </div>

      <!-- Sección 14 -->
      <div class="mb-6 border-l-4 border-red-500 pl-4">
        <div
          class="section-header flex items-center text-red-500 font-bold"
          onclick="toggleSection(14)"
        >
          <i class="material-icons expand-icon mr-2">keyboard_arrow_down</i>
          <span>14. Programación de Articulos a Medida</span>
        </div>
        <div class="section-content collapsed mt-2 pl-6 text-blue-600">
          Permite definir que comportamiento tendrán los artículos que fueron
          definidos o marcados como "A Medida" en el stock, en esta actividad
        </div>
      </div>

      <div class="mb-6">
        <label class="block font-medium mb-2">Articulos a Medida</label>
        <div class="flex flex-wrap gap-4">
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="custom-items"
              class="text-primary"
              checked
              disabled
            />
            <span>No Mostrar</span>
          </label>
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="custom-items"
              class="text-primary"
              disabled
            />
            <span>Solo Mostrar</span>
          </label>
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="custom-items"
              class="text-primary"
              disabled
            />
            <span>Permite Ingresos</span>
          </label>
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="custom-items"
              class="text-primary"
              disabled
            />
            <span>Permite Egresos</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, watch, onMounted } from "vue";

// Props que vienen del componente padre
defineProps({
  titulo: {
    type: String,
    default: "Nombre",
  },
  descripcionInicial: {
    type: String,
    default: "Descripción",
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
