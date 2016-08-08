import {Injectable} from '@angular/core';
import {Service} from '../../../shared/service.component';
//import {urlBackend} from '../../../../../../../config/properties';
import {PhaseHal} from './Phase';
import { Http } from '@angular/http';

@Injectable()
export class PhaseService extends Service<PhaseHal>{
	urlBackend = "http://193.1.3.13:7890/api/v1/phases";	

	constructor( private _http : Http){
	}
}