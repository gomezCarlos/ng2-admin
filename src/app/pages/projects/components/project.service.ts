import {Injectable} from '@angular/core';
import {Service} from '../../../shared/service.component';
import {ProjectHal} from './Project';
import { Http } from '@angular/http';

@Injectable()
export class ProjectService extends Service<ProjectHal>{
	urlBackend = "http://193.1.3.20:7890/api/v1/projects";

	constructor( private _http : Http){
	}

}






