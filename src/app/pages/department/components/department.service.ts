import {Injectable, Component} from '@angular/core';
import {API_URL} from '../../../shared/api_url';
import {Service} from '../../../shared/service.component';
import { DepartmentHal } from './department';
import {UserService} from '../../../shared/user.service';
import { Http } from '@angular/http';
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

@Component({
        providers:[UserService]
})
@Injectable()
export class DepartmentService extends Service<DepartmentHal>{
   urlBackend=API_URL+"departments";
  constructor(http: Http, user: UserService){
	super(http,user);
  }


}
