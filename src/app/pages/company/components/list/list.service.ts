//
// CREATED AND EDITED BY:
// ING RONALDO MORENO 
// WITH 
// MASTERCOPYPASTE TECNIQUE
// WITH MANY YEAR OF EXPERIENCE
// IN THE AREA
// COMPLETELY GRATEFUL TO GOD
// AND THE BLESSED VIRGIN
//
import {Injectable} from '@angular/core';

@Injectable()
export class BasicTablesService {
   editableTableData:Array<any>;

  peopleTableData = [
    {
      id: 1,
      Name: 'Compañia uno',
      Description: 'pañia 1',            
    },
    {
      id: 2,
      Name: 'Compañia dos',
      Description: 'pañia 2',            
    }    
  ];
}