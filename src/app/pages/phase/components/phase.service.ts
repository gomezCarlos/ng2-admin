import {Injectable} from '@angular/core';
import {Service} from '../../../shared/service.component';
import {API_URL} from '../../../shared/api_url';
import {PhaseHal} from './Phase';
import { Http } from '@angular/http';

@Injectable()
export class PhaseService extends Service<PhaseHal>{
<<<<<<< HEAD
	urlBackend = API_URL+"phases";	
	
=======
	urlBackend = "http://193.1.3.20:7890/api/v1/phases";	

>>>>>>> 2511cc25f1e45b758b46948d7a08d3680d4266d7
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
