import {Injectable} from '@angular/core';
import {Service} from '../../../shared/service.component';
import { API_URL } from '../../../shared/api_url'
import { JobHal } from './Job';
import { Http } from '@angular/http';

@Injectable()
export class JobService extends Service<JobHal>{
//	urlBackend = "http://193.1.3.20:7890/api/v1/jobs";
	urlBackend = API_URL+"jobs";
	constructor( private _http : Http){
	super(_http);}

}
