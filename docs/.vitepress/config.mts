import { defineConfig, type DefaultTheme } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Doc-Flows/',
  title: "flows Manager",
  description: "Prueba",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: {
      "/reportes/": sidebarReportes(),
      "/flows/": sidebarFlows()
    },
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    lastUpdated: {
      text: 'Ultima actualizacion',
      formatOptions: {
        dateStyle: 'short',

      }
    },
    docFooter: {
      prev: 'Anterior',
      next: 'Siguiente'
    },
    outline: {
      level: 'deep',
      label: 'En esta página'
    },
    search: {
      provider: "local",
    }
  }
})

function sidebarReportes(): DefaultTheme.SidebarItem[] { 
  return [
    {
      text: "Reportes",
      collapsed: false,
      items: [
        { text: "Inicio", link: "/" },
        { 
          text: "Tareas", 
          collapsed: true,
          items: [
            {
              text: "Control de tareas/tiempos",
              collapsed: true,
              items: [
                { text: "Para el Usuario", link: "/reportes/ControlTiempo_Usuario/" },
                { text: "Documentación Técnica", link: "/reportes/ControlTiempo_Tecnico/" }
              ]
            }
          ]
        }
        ,
        {
          text: "Compras",
          collapsed: true,
          items: [
            {
              text: "Control de compras",
              collapsed: true,
              items: [
                { text: "Para el Usuario", link: "/reportes/COMPRAS_maestro/" },
                { text: "Documentación Técnica", link: "/reportes/COMPRAS_maestro/" }
              ]
            },
            {
              text: "RemitosVSCompras",
              collapsed: true,
              items: [
                { text: "Para el Usuario", link: "/reportes/RemitosVsCompras" },
                { text: "Documentación Técnica", link: "/reportes/RemitosVsCompras" }
              ]
            }
          ]

        },
        {
          text: "Cheques",
          collapsed: true,
          items: [
            {
              text: "Control de cheques",
              collapsed: true,
              items: [
                { text: "Para el Usuario", link: "/reportes/Cheques/" },
                { text: "Documentación Técnica", link: "/reportes/Cheques/" }
              ]
            }
          ]
        }
        , 
        {
          text: "Cuentas",
          collapsed: true,
          items: [
            {
              text: "Control de cuentas",
              collapsed: true,
              items: [
                { text: "Para el Usuario", link: "/reportes/CTACTEPROV/" },
              ]
            }
          ]
        }
        ,
        {
          text: "Sueldos",
          collapsed: true,
          items: [
            {
              text: "RHSUELDOS",
              collapsed: true,
              items: [
                { text: "Para el Usuario", link: "/reportes/manual_usuario_rhsueldos/" },
                { text: "Documentación Técnica", link: "/reportes/jasper_report_doc/" }
              ]
            }
          ]
        }
        ,
        {
          text: "Comportamietno de filtros",
          collapsed: true,
          items: [
            {text: "Fechas", link: "/reportes/ComportamientoFiltroFechas/" },
            { text: "Busqueda parcial", link: "/reportes/BusquedaParcial/" } 
          ]
        }
      ]
    }
  ];
}

function sidebarFlows(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Flows",
      collapsed: false,
      items: [
        { text: "Inicio", link: "/" },

      ]
    }
  ];
}
