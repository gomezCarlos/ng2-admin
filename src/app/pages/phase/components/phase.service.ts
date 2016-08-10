import {Injectable} from '@angular/core';
import {Service} from '../../../shared/service.component';
import {API_URL} from '../../../shared/api_url';
import {PhaseHal} from './Phase';
import { Http } from '@angular/http';

@Injectable()
export class PhaseService extends Service<PhaseHal>{
	urlBackend = API_URL+"phases";	
	
	constructor( private _http : Http){
	  super(_http);
	}
}
///////////////////////////////7
//import {Injectable} from '@angular/core';
//import {Service} from '../../../shared/service.component';
//import { API_URL } from '../../../shared/api_url';
//import {ProjectHal} from './Project';
//import { Http } from '@angular/http';
//
//@Injectable()
//export class ProjectService extends Service<ProjectHal>{
//        urlBackend = API_URL+"projects";
//
//        constructor( private _http : Http){
//                super(_http);
//        }
//
//}
