import {Injectable} from '@angular/core';

@Injectable()
export class BasicTablesService {
   editableTableData:Array<any>;

      

  projectsTableData = [
    {
      id: 1,
      nameProjects: 'Sistema de Viaticos',
      username: 'Carlos Gomez',
      dptoname: 'Soporte Tecnologico',
      priorityProjects: 'ALTA',      
      status: 'info'
    },
    {
      id: 2,
      nameProjects: 'Sistema de Gestión de Proyectos',
      username: 'Alonso Samuel',
      dptoname: 'Soporte Tecnologico',
      priorityProjects: 'ALTA',      
      status: 'info'
    },
    {
      id: 3,
      nameProjects: 'Sistema de Nominas',
      username: 'Moisés Ramos',
      dptoname: 'Soporte Tecnologico',
      priorityProjects: 'ALTA',      
      status: 'info'
    },
    {
      id: 4,
      nameProjects: 'Sistema de Crédito',
      username: 'Euddy Escalona',
      dptoname: 'Soporte Tecnologico',
      priorityProjects: 'ALTA',      
      status: 'info'
    },
    {
      id: 5,
     nameProjects: 'Sistema de Contabilidad',
      username: 'Alejandro Moreno',
      dptoname: 'Soporte Tecnologico',
      priorityProjects: 'ALTA',      
      status: 'info'
    }
  ];
}


  