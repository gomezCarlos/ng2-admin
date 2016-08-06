import {Injectable} from '@angular/core';

@Injectable()
export class BasicTablesService {
   editableTableData:Array<any>;

  peopleTableData = [
    {
      id: 1,
      Name: 'Fase uno',
      Description: 'Primera Fase',            
    },
    {
      id: 2,
      Name: 'Fase dos',
      Description: 'Segunda Fase',            
    }    
  ];
}