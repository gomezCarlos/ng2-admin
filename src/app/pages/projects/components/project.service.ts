import {Injectable} from '@angular/core';
import {Service} from '../../../shared/service.component';
import { API_URL } from '../../../shared/api_url';
import {ProjectHal} from './Project';
import { Http } from '@angular/http';

@Injectable()
export class ProjectService extends Service<ProjectHal>{
	urlBackend = API_URL+"projects";

	constructor( private _http : Http){
		super(_http);
	}

}






