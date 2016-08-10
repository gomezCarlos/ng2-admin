import {Injectable} from '@angular/core';
import {Service} from '../../../shared/service.component';
//import {urlBackend} from '../../../../../../../config/properties';
import {TaskHal} from './Task';
import { Http } from '@angular/http';

@Injectable()
export class TaskService extends Service<TaskHal>{
	//urlBackend = "http://193.1.3.13:7890/api/v1/tasks";	
	urlBackend = "http://localhost:3000/api/v1/tasks";

	constructor( private _http : Http){
	}
}