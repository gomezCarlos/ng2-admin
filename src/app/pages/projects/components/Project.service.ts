import {Injectable} from '@angular/core';
import {Service} from '../../../shared/service.component';
//import {urlBackend} from '../../../../../../../config/properties';
import {ProjectHal} from './Project';
import { Http } from '@angular/http';

@Injectable()
export class PhaseService extends Service<ProjectHal>{
	urlBackend = "http://localhost:3000/api/v1/projects";	

	constructor( private _http : Http){
	}
}