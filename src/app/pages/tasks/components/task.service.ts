import {Injectable} from '@angular/core';
import {Service} from '../../../shared/service.component';
import {TaskHal} from './Task';
import { Http } from '@angular/http';
import {API_URL} from '../../../shared/api_url';

@Injectable()
export class TaskService extends Service<TaskHal>{
	urlBackend = API_URL+"tasks"

	constructor( private _http : Http){
	}
}
