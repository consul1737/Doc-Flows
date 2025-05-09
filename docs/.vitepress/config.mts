import { defineConfig, type DefaultTheme } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/Doc-Flows/",
  title: "flows Manager",
  description: "Prueba",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: {
      "/reportes/": sidebarReportes(),
      "/flows/": sidebarFlows(),
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    lastUpdated: {
      text: "Ultima actualizacion",
      formatOptions: {
        dateStyle: "short",
      },
    },
    docFooter: {
      prev: "Anterior",
      next: "Siguiente",
    },
    outline: {
      level: "deep",
      label: "En esta página",
    },
    search: {
      provider: "local",
    },
  },
});

function sidebarReportes(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Reportes",
      collapsed: false,
      items: [
        { text: "Indice", link: "/reportes/" },
        {
          text: "Manual de Uso",
          collapsed: true,
          items: [
            {
              text: "Control de tareas/tiempos",
              link: "/reportes/ControlTiempo_Usuario",
            },
            {
              text: "Compras",
              link: "/reportes/COMPRAS_maestro",
            },
            { text: "RemitosVSCompras", link: "/reportes/RemitosVsCompras" },
            {
              text: "Cheques",
              link: "/reportes/Cheques",
            },
            {
              text: "Cuentas",
              link: "/reportes/CTACTEPROV",
            },
            {
              text: "Sueldos",
              link: "/reportes/manual_usuario_rhsueldos/",
            },
          ],
        },
        {
          text: "Manual Tecnico",
          collapsed: true,
          items: [
            {
              text: "Control de tareas/tiempos",
              link: "/reportes/ControlTiempo_Tecnico",
            },
            {
              text: "Producción",
              link: "/reportes/ControlTiempo_Produccion",
            },
            {
              text: "Sueldos",
              link: "/reportes/jasper_report_doc/",
            },
          ],
        },
        {
          text: "Comportamietno de filtros",
          collapsed: true,
          items: [
            { text: "Fechas", link: "/reportes/ComportamientoFiltroFechas" },
            { text: "Busqueda parcial", link: "/reportes/BusquedaParcial" },
          ],
        },
      ],
    },
  ];
}

function sidebarFlows(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Flows",
      collapsed: false,
      items: [{ text: "Inicio", link: "/" }],
    },
  ];
}
