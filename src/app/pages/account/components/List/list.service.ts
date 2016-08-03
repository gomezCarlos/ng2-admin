import {Injectable} from '@angular/core';

@Injectable()
export class BasicTablesService {
   editableTableData:Array<any>;

  peopleTableData = [
    {
      id: 1,
      firstName: 'Alonso',
      lastName: 'Samuel',
      username: 'drocker21',
      email: 'alonsodsm@gmail.com',
      age: '23',
      status: 'info'
    },
    {
      id: 2,
      firstName: 'Carlos',
      lastName: 'Gomez',
      username: 'carlos',
      email: 'gomezcarlose@gmail.com',
      age: '32',
      status: 'info'
    },
    {
      id: 3,
      firstName: 'Alejandro',
      lastName: 'Moreno',
      username: 'a.moreno',
      email: 'a.moreno@anca.org.ve',
      age: '45',
      status: 'info'
    },
    {
      id: 4,
      firstName: 'Euddy',
      lastName: 'Escalona',
      username: 'e.escalona',
      email: 'e.escalona@anca.org.ve',
      age: '53',
      status: 'info'
    },
    {
      id: 5,
      firstName: 'Moises',
      lastName: 'Ramos',
      username: 'm.ramos',
      email: 'm.ramos@anca.org.ve',
      age: '44',
      status: 'info'
    }
  ];
}


  