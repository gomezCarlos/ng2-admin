import {Injectable, Component} from '@angular/core';
import {Service} from '../../../shared/service.component';
import {UserService} from '../../../shared/user.service';
import { API_URL } from '../../../shared/api_url';
import {ProjectHal} from './Project';
import { Http } from '@angular/http';

@Component({
	providers:[UserService]
})
@Injectable()
export class ProjectService extends Service<ProjectHal>{
	urlBackend = API_URL+"projects";

	constructor( private _http : Http, private userService: UserService){
		super(_http);
	}

}
