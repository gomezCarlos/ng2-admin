import {Injectable} from '@angular/core';
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
@Injectable()
export class BasicTablesService {
   editableTableData:Array<any>;

  peopleTableData = [
    {
      id: 1,
      Name: 'organizacion uno',
      Description: 'Primera organizacion',            
    },
    {
      id: 2,
      Name: 'organizacion dos',
      Description: 'Segunda organizacion',            
    }    
  ];
}