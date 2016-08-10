import {RouterConfig} from '@angular/router';
import {Dashboard} from './dashboard/dashboard.component';
import {Charts} from './charts/charts.component';
import {ChartistJs} from './charts/components/chartistJs/chartistJs.component';
import {Pages} from './pages.component';
import {Ui} from './ui/ui.component';
import {Typography} from './ui/components/typography/typography.component';
import {Buttons} from './ui/components/buttons/buttons.component';
import {Icons} from './ui/components/incons/icons.component';
import {Grid} from './ui/components/grid/grid.component';
import {Forms} from './forms/forms.component';
import {Inputs} from './forms/components/inputs/inputs.component';
import {Layouts} from './forms/components/layouts/layouts.component';
import {BasicTables} from './tables/components/basicTables/basicTables.component';
import {Tables} from './tables/tables.component';
import {Maps} from './maps/maps.component';
import {GoogleMaps} from './maps/components/googleMaps/googleMaps.component';
import {LeafletMaps} from './maps/components/leafletMaps/leafletMaps.component';
import {BubbleMaps} from './maps/components/bubbleMaps/bubbleMaps.component';
import {LineMaps} from './maps/components/lineMaps/lineMaps.component';
import {Editors} from './editors/editors.component';
import {Ckeditor} from './editors/components/ckeditor/ckeditor.component';
import {Components} from './components/components.component';
import {TreeView} from './components/components/treeView/treeView.component';
import {Projects} from './projects/project.component';
import {Account} from './account/account.component';
import {Phase} from './phase/phase.component';
import {Task} from './tasks/task.component';//MOISES
import {Jobs} from './jobs/jobs.component';//MOISES
import {Create} from './projects/components/create/create.component';
import {ListProjects}  from './projects/components/list/list.component';//MOISES
import {CreateAccount} from './account/components/create/create.component';
import {ListAccount}  from './account/components/list/list.component';
import {CreateJob} from './jobs/components/create/create.component';
import {ListJob}  from './jobs/components/list/list.component';
import {CreateTask} from './tasks/components/create/create.component';
import {ListTask}  from './tasks/components/list/list.component';
import {CreatePhase} from './phase/components/create/create.component';
import {ListPhase}  from './phase/components/list/list.component'
//test

//noinspection TypeScriptValidateTypes
export const PagesRoutes:RouterConfig = [
  {
    path: 'pages',
    component: Pages,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'projects',
        component: Projects,
        data: {
          menu: {
            title: 'Proyectos',
            icon: 'ion-filing',
            selected: false,
            expanded: false,
            order: 51,
          }
        },
        children: [
          {
            path: 'create',
            component: Create,
            data: {
              menu: {
                title: 'Crear Proyecto',
              }
            }
          },
          {
            path: 'list',
            component: ListProjects,
            data: {
              menu:{
                title: 'Listar Proyectos',
              }
            }
          }
        ]
      },

      // Phase Menu
      {
        path: 'phase',
        component: Phase,
        data: {
          menu: {
            title: 'Fases',
            icon: 'ion-arrow-graph-up-right',
            selected: false,
            expanded: false,
            order: 52,
          }
        },
        children: [
          {
            path: 'create',
            component: CreatePhase,
            data: {
              menu: {
                title: 'Crear Fase',
              }
            }
          },
          {
            path: 'list',
            component: ListPhase,
            data: {
              menu:{
                title: 'Listar Fase',
              }
            }
          }
        ]
      },
      // Account Menu
      {
        path: 'account',
        component: Account,
        data: {
          menu: {
            title: 'Cuentas',
            icon: 'ion-person',
            selected: false,
            expanded: false,
            order: 53,
          }
        },
        children: [
          {
            path: 'create',
            component: CreateAccount,
            data: {
              menu: {
                title: 'Crear Account',
              }
            }
          },
          {
            path: 'list',
            component: ListAccount,
            data: {
              menu:{
                title: 'Listar',
              }
            }
          }
        ]
      },
       // Tarea Menu //MOISES
      {
        path: 'tasks',
        component: Task,
        data: {
          menu: {
            title: 'Tareas',
            icon: 'ion-ios-list-outline',
            selected: false,
            expanded: false,
            order: 54,
          }
        },
        children: [
          {
            path: 'create',
            component: CreateTask,
            data: {
              menu: {
                title: 'Crear Tarea',
              }
            }
          },
          {
            path: 'list',
            component: ListTask,
            data: {
              menu:{
                title: 'Listar Tareas',
              }
            }
          }
        ]
      },
     // Work Menu //MOISES
      {
        path: 'jobs',
        component: Jobs,
        data: {
          menu: {
            title: 'Trabajos',
            icon: 'ion-ios-briefcase-outline',
            selected: false,
            expanded: false,
            order: 55,
          }
        },
        children: [
          {
            path: 'create',
            component: CreateJob,
            data: {
              menu: {
                title: 'Crear Trabajo',
              }
            }
          },
          {
            path: 'list',
            component: ListJob,
            data: {
              menu:{
                title: 'Listar Trabajo',
              }
            }
          }
        ]
      },
      //lo demas
     /* {
        path: 'editors',
        component: Editors,
        data: {
          menu: {
            title: 'Editors',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'ckeditor',
            component: Ckeditor,
            data: {
              menu: {
                title: 'CKEditor',
              }
            }
          }
        ]
      },
      {
        path: 'components',
        component: Components,
        data: {
          menu: {
            title: 'Components',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'treeview',
            component: TreeView,
            data: {
              menu: {
                title: 'Tree View',
              }
            }
          }
        ]
      },
      {
        path: 'charts',
        component: Charts,
        data: {
          menu: {
            title: 'Charts',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'chartist-js',
            component: ChartistJs,
            data: {
              menu: {
                title: 'Chartist.Js',
              }
            }
          }
        ]
      },
      {
        path: 'ui',
        component: Ui,
        data: {
          menu: {
            title: 'UI Features',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          {
            path: 'typography',
            component: Typography,
            data: {
              menu: {
                title: 'Typography',
              }
            }
          },
          {
            path: 'buttons',
            component: Buttons,
            data: {
              menu: {
                title: 'Buttons',
              }
            }
          },
          {
            path: 'icons',
            component: Icons,
            data: {
              menu: {
                title: 'Icons',
              }
            }
          },
          {
            path: 'grid',
            component: Grid,
            data: {
              menu: {
                title: 'Grid',
              }
            }
          },
        ]
      },
      {
        path: 'forms',
        component: Forms,
        data: {
          menu: {
            title: 'Form Elements',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'inputs',
            component: Inputs,
            data: {
              menu: {
                title: 'Form Inputs',
              }
            }
          },
          {
            path: 'layouts',
            component: Layouts,
            data: {
              menu: {
                title: 'Form Layouts',
              }
            }
          }
        ]
      },
      {
        path: 'tables',
        component: Tables,
        data: {
          menu: {
            title: 'Tables',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'basictables',
            component: BasicTables,
            data: {
              menu: {
                title: 'Basic Tables',
              }
            }
          }
        ]
      },
      {
        path: 'maps',
        component: Maps,
        data: {
          menu: {
            title: 'Maps',
            icon: 'ion-ios-location-outline',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [
          {
            path: 'googlemaps',
            component: GoogleMaps,
            data: {
              menu: {
                title: 'Google Maps',
              }
            }
          },
          {
            path: 'leafletmaps',
            component: LeafletMaps,
            data: {
              menu: {
                title: 'Leaflet Maps',
              }
            }
          },
          {
            path: 'bubblemaps',
            component: BubbleMaps,
            data: {
              menu: {
                title: 'Bubble Maps',
              }
            }
          },
          {
            path: 'linemaps',
            component: LineMaps,
            data: {
              menu: {
                title: 'Line Maps',
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Pages',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'Login',
                url: '#/login'
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: 'Register',
                url: '#/register'
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Menu Level 1',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'Menu Level 1.1',
                url: '#'
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: 'Menu Level 1.2',
                url: '#'
              }
            },
            children: [
              {
                path: '',
                data: {
                  menu: {
                    title: 'Menu Level 1.2.1',
                    url: '#'
                  }
                }
              }
            ]
          }
        ]
      },*/
      {
        path: '',
        data: {
          menu: {
            title: 'Pagina Anca',
            url: 'http://www.anca.org.ve',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank'
          }
        }
      }
    ]
  }
];
