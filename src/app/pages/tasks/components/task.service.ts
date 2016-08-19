import {Injectable, Component} from '@angular/core';
import {Service} from '../../../shared/service.component';
import {UserService} from '../../../shared/user.service';
import {TaskHal} from './Task';
import { Http } from '@angular/http';
import {API_URL} from '../../../shared/api_url';

@Component({
        providers:[UserService]
})
@Injectable()
export class TaskService extends Service<TaskHal>{
	urlBackend = API_URL+"tasks";
	constructor(http: Http, user: UserService){
		super(http,user);
	}
}
