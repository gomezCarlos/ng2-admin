import {Injectable, Component} from '@angular/core';
import {Service} from '../../../shared/service.component';
import {UserService} from '../../../shared/user.service';
import {PaginatedList} from '../../../shared/PaginatedList.component';
import {API_URL} from '../../../shared/api_url';
import {PhaseHal} from './Phase';
import { Http } from '@angular/http';
import { TaskHal } from '../../tasks/components/Task'
import { Observable } from 'rxjs/Observable';

@Component({
        providers:[UserService]
})
@Injectable()
export class PhaseService extends Service<PhaseHal>{
	urlBackend = API_URL+"phases";
	constructor(http: Http, user: UserService){
		super(http,user);
	}
	getTasks(id: number, page?: number, size?: number): Observable<PaginatedList<TaskHal>>{
		return this.getHttp()
		  .get(this.urlBackend+"/"+id+"/tasks",this.getOptions())
		    .map(this.getData)
		      .catch(this.getError);
	}

}
