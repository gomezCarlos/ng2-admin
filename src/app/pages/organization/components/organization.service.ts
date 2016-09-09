import {Injectable, Component} from '@angular/core';
import {Service} from '../../../shared/service.component';
import {UserService} from '../../../shared/user.service';
import {PaginatedList} from '../../../shared/PaginatedList.component';
import {API_URL} from '../../../shared/api_url';
import {OrganizationHal} from './Organization';
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
export class OrganizationService extends Service<OrganizationHal>{
	urlBackend = API_URL+"organizations";
	constructor(http: Http, user: UserService){
		super(http,user);
	}

}
