import {Injectable} from '@angular/core';
import {Service} from '../../../shared/service.component';
import {ProjectHal} from './Project';
import { Http } from '@angular/http';

@Injectable()
export class ProjectService extends Service<ProjectHal>{
	urlBackend = "http://localhost:7890/api/v1/projects";	

	constructor( private _http : Http){
		super(_http);
	}

}






