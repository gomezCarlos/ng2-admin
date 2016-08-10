import {Injectable} from '@angular/core';

@Injectable()
export class BasicTablesService {
   editableTableData:Array<any>;

  taskTableData = [
    {
      id: 1,
      Name: 'Tarea uno',
      Description: 'Primera Tarea',            
    },
    {
      id: 2,
      Name: 'Tarea dos',
      Description: 'Segunda Tarea',            
    }    
  ];
}