import {Injectable} from '@angular/core';
import {Service} from '../../../shared/service.component';
import {API_URL} from '../../../shared/api_url';
import {PhaseHal} from './Phase';
import { Http } from '@angular/http';

@Injectable()
export class PhaseService extends Service<PhaseHal>{
	urlBackend =API_URL+"phases";	

	constructor( private _http : Http){
	}
}
