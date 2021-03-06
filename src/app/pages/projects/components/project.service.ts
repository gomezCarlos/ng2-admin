import {Injectable, Component} from '@angular/core';
import {Service} from '../../../shared/service.component';
import {UserService} from '../../../shared/user.service';
import {PaginatedList} from '../../../shared/PaginatedList.component';
import { API_URL } from '../../../shared/api_url';
import {ProjectHal} from './Project';
import { PhaseHal } from '../../phase/components/Phase'
import { TaskHal } from '../../tasks/components/Task'
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
	providers:[UserService]
})
@Injectable()
export class ProjectService extends Service<ProjectHal>{
	urlBackend = API_URL+"projects";
	constructor(http: Http, user: UserService){
		super(http,user);
	}

	getPhases(id: number, page?: number, size?: number): Observable<PaginatedList<PhaseHal>>{
		return this.getHttp()
		  .get(this.urlBackend+"/"+id+"/phases",this.getOptions())
		    .map(this.getData)
		      .catch(this.getError);
	}
		getTasks(id: number, page?: number, size?: number): Observable<PaginatedList<TaskHal>>{
		return this.getHttp()
		  .get(this.urlBackend+"/"+id+"/tasks",this.getOptions())
		    .map(this.getData)
		      .catch(this.getError);
	}
		getProjects(id: number, page?: number, size?: number): Observable<PaginatedList<ProjectHal>>{
		return this.getHttp()
		  .get(this.urlBackend+"/"+id+"/projects",this.getOptions())
		    .map(this.getData)
		      .catch(this.getError);
	}
}
