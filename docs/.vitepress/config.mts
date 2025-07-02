import { defineConfig, type DefaultTheme } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import tailwindcss from "@tailwindcss/vite";

export default withMermaid(
  defineConfig({
    base: "/Doc-Flows/",
    title: "Flows Manager",
    description: "Prueba",

    vite: {
      optimizeDeps: {
        include: ["mermaid"],
      },
      plugins: [tailwindcss()],
    },
    themeConfig: {
      nav: [
        { text: "Home", link: "/" },
        { text: "Soporte", link: "https://surl.li/kmiuwb" },
      ],
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
            {
              text: "Producción",
              link: "/reportes/controlDeMuebles",
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
              link: "/reportes/manual_usuario_rhsueldos",
            },
            {
              text: "Cisterna",
              link: "/reportes/CisternaUsuario",
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
              link: "/reportes/jasper_report_doc",
            },
            {
              text: "Cisterna",
              link: "/reportes/CisternaTecnico",
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
      items: [
        { text: "Inicio", link: "/flows/" },
        {
          text: "Ajustes",
          collapsed: true,
          items: [
            { text: "Ajustes", link: "/flows/ajustes/ajuste" },
            {
              text: "Realizar Ajuste",
              link: "/flows/ajustes/50301RealizarAjuste",
            },
            {
              text: "Ajustes Positivos o Negativos",
              link: "/flows/ajustes/AjustePosyNeg/",
            },
          ],
        },
        {
          text: "Mejoras",
          collapsed: true,
          items: [
            {
              text: "Hallazgos",
              link: "/flows/PM_Hallazgos/hallazgo",
            },
          ],
        },
      ],
    },
  ];
}
