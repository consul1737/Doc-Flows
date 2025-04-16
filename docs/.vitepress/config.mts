import { defineConfig, type DefaultTheme } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "flows Manager",
  description: "Prueba ",
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
    ]
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
        { text: "Inicio", link: "/" }
      ]
    }
  ];
}
