import {Injectable, Component} from '@angular/core';
import {Service} from '../../../shared/service.component';
import {UserService} from '../../../shared/user.service';
import {API_URL} from '../../../shared/api_url';
import {CompanyHal} from './company';
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
export class CompanyService extends Service<CompanyHal>{
	urlBackend = API_URL+"companies";
	constructor(http: Http, user: UserService){
		super(http,user);
	}

}
