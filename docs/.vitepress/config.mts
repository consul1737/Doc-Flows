import { defineConfig, type DefaultTheme } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid(
  defineConfig({
    base: "/Doc-Flows/",
    title: "Flows Manager",
    description: "Prueba",
    vite: {
      optimizeDeps: {
        include: ["mermaid"],
      },
    },

    themeConfig: {
      nav: [{ text: "Home", link: "/" }],

      sidebar: {
        "/reportes/": sidebarReportes(),
        "/flows/": sidebarFlows(),
      },

      socialLinks: [
        { icon: "github", link: "https://github.com/vuejs/vitepress" },
      ],

      lastUpdated: {
        text: "Última actualización",
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
  })
);
// https://vitepress.dev/reference/site-config

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
