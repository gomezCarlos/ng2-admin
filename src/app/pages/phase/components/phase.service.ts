import {Injectable, Component} from '@angular/core';
import {Service} from '../../../shared/service.component';
import {UserService} from '../../../shared/user.service';
import {API_URL} from '../../../shared/api_url';
import {PhaseHal} from './Phase';
import { Http } from '@angular/http';
@Component({
        providers:[UserService]
})

@Injectable()
export class PhaseService extends Service<PhaseHal>{
	urlBackend = API_URL+"phases";	
	
	constructor( private _http : Http, private userService: UserService){
	  super(_http);
	}
}
