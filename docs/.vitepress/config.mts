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
            { text: "Realizar Ajuste", link: "/flows/ajustes/realizarAjuste" },
            {
              text: "Ajustes Negativos",
              collapsed: true,
              items: [
                {
                  text: "Ajustes Negativo Caja",
                  link: "/flows/ajustes/ajusteNegativoCaja",
                },
                {
                  text: "Ajustes Negativo CtaCte",
                  link: "/flows/ajustes/ajusteNegativoCtaCte",
                },
              ],
            },
            {
              text: "Ajustes Positivos",
              collapsed: true,
              items: [
                {
                  text: "Ajustes Positivo Caja",
                  link: "/flows/ajustes/ajustePositivoCaja",
                },
                {
                  text: "Ajustes Positivo CtaCte",
                  link: "/flows/ajustes/ajustePositivoCtaCte",
                },
              ],
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
