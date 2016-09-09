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
//import {Layouts} from './forms/components/layouts/layouts.component';
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
import {Indicator} from './indicator/indicators.component';//MOISES
import {CreateIndicator} from './indicator/components/create/create.component';//MOISES
import {ListIndicator}  from './indicator/components/list/list.component';//MOISES
import {Create} from './projects/components/create/create.component';
import {ListProjects}  from './projects/components/list/list.component';//MOISES
import {CreateAccount} from './account/components/create/create.component';
import {ListAccount}  from './account/components/list/list.component';
import {CreateJob} from './jobs/components/create/create.component';
import {ListJob}  from './jobs/components/list/list.component';
import {CreateTask} from './tasks/components/create/create.component';
import {ListTask}  from './tasks/components/list/list.component';
import {CreatePhase} from './phase/components/create/create.component';
import {ListPhase}  from './phase/components/list/list.component';
import {ViewProjects} from './projects/components/view/view.components';
import {ViewPhase} from './phase/components/view/view.components';
import {ViewTask} from './tasks/components/view/view.components';
import {ViewJob} from './jobs/components/view/view.components';
import {CreateEndPointServiceAuthentication} from './endPointAuthenticationService/components/create/create.component';
import {ListEndPointServiceAuthentication} from './endPointAuthenticationService/components/list/list.component';
import {Layouts} from './profile/layouts.component';
import {Department} from './department/department.component';//ROMEN
import {CreateDepartment} from './department/components/create/create.component';//ROMEN
import {ListDepartment}  from './department/components/list/list.component';//ROMEN
import {ViewDepartment}  from './department/components/view/view.components';//ROMEN
import {Company} from './company/company.component';//ROMEN
import {CreateCompany} from './company/components/create/create.component';//ROMEN
import {ListCompany}  from './company/components/list/list.component';//ROMEN
import {ViewCompany}  from './company/components/view/view.components';//ROMEN
import {Organization} from './organization/organization.component';//ROMEN
import {CreateOrganization} from './organization/components/create/create.component';//ROMEN
import {ListOrganization}  from './organization/components/list/list.component';//ROMEN
import {ViewOrganization}  from './organization/components/view/view.components';//ROMEN

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
            path: 'view/:id',
            component: ViewProjects,
            data: {
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
          },
          {
            path: 'update/:id',
            component: Create,
            data: {
             
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
          },
           {
            path: 'view/:id',
            component: ViewPhase,
            data: {

            }
          },
          
        ]
      },
      // Account Menu
      
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
            path: 'view/:id',
            component: ViewTask,
            data: {
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
          },
          {
            path: 'update/:id',
            component: CreateTask,
            data: {
             
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
          },
            {
            path: 'view/:id',
            component: ViewJob,
            data: {

            }
          },
          {
            path: 'update/:id',
            component: CreateTask,
            data: {
             
            }
          }
        ]
      },
      //Acount
      {
        path: 'account',
        component: Account,
        data: {
          menu: {
            title: 'Cuentas',
            icon: 'ion-person',
            selected: false,
            expanded: false,
            order: 56,
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

      //EndPointAuthenticationService
      {
        path: 'endPointAuthenticationService',
        component: Account,
        data: {
          menu: {
            title: 'Seguridad',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 56,
          }
        },
        children: [
          {
            path: 'create',
            component: CreateEndPointServiceAuthentication,
            data: {
              menu: {
                title: 'Crear Auth',
              }
            }
          },
          {
            path: 'list',
            component: ListEndPointServiceAuthentication,
            data: {
              menu:{
                title: 'Listar Auth',
              }
            }
          } 
        ]
      },

      //perfil
      {
        path: 'profile',
        component: Layouts,
        data: {
          menu: {
            title: 'Perfil',
            icon: 'ion-gear-a',
            selected: true,
            expanded: false,
            order: 56,
          }
        },
        
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
      */{
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
      /*{
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
      },
      */
            // Company Menu
      {
        path: 'company',
        component: Company,
        data: {
          menu: {
            title: 'Compañías',
            icon: 'ion-arrow-graph-up-right',
            selected: false,
            expanded: false,
            order: 56,
          }
        },
        children: [
          {
            path: 'create',
            component: CreateCompany,
            data: {
              menu: {
                title: 'Crear Compañía',
              }
            }
          },
          {
            path: 'list',
            component: ListCompany,
            data: {
              menu:{
                title: 'Listar Compañia',
              }
            }
          },
           {
            path: 'view/:id',
            component: ViewCompany,
            data: {

            }
          },
        ]
      },
            // Organization Menu
      {
        path: 'organization',
        component: Organization,
        data: {
          menu: {
            title: 'Organizaciones',
            icon: 'ion-arrow-graph-up-right',
            selected: false,
            expanded: false,
            order: 57,
          }
        },
        children: [
          {
            path: 'create',
            component: CreateOrganization,
            data: {
              menu: {
                title: 'Crear Organizaciones',
              }
            }
          },
          {
            path: 'list',
            component: ListOrganization,
            data: {
              menu:{
                title: 'Listar Organizaciones',
              }
            }
          },
           {
            path: 'view/:id',
            component: ViewOrganization,
            data: {

            }
          },
        ]
      },
            // Department Menu
      {
        path: 'department',
        component: Department,
        data: {
          menu: {
            title: 'Departamentos',
            icon: 'ion-arrow-graph-up-right',
            selected: false,
            expanded: false,
            order: 58,
          }
        },
        children: [
          {
            path: 'create',
            component: CreateDepartment,
            data: {
              menu: {
                title: 'Crear Departamento',
              }
            }
          },
          {
            path: 'list',
            component: ListDepartment,
            data: {
              menu:{
                title: 'Listar Departamento',
              }
            }
          },
           {
            path: 'view/:id',
            component: ViewDepartment,
            data: {

            }
          },
        ]
      },
      // Work Menu //MOISES
      {
        path: 'indicators',
        component: Indicator,
        data: {
          menu: {
            title: 'Indicadores',
            icon: 'ion-ios-briefcase-outline',
            selected: false,
            expanded: false,
            order: 55,
          }
        },
        children: [
          {
            path: 'create',
            component: CreateIndicator,
            data: {
              menu: {
                title: 'Crear Indicador',
              }
            }
          },
          {
            path: 'list',
            component: ListIndicator,
            data: {
              menu:{
                title: 'Listar Indicadores',
              }
            }
          }
        ]
      },
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
