import {Injectable} from '@angular/core';
import {API_URL} from '../../../shared/api_url';
import {Service} from '../../../shared/service.component';
import { JobHal } from './Job';
import { Http } from '@angular/http';

@Injectable()
export class JobService extends Service<JobHal>{
       urlBackend=API_URL+"jobs"  
	constructor( private _http : Http){
	super(_http);}

}
