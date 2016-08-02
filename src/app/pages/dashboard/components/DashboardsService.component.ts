import { Service } from '../../../shared/service.component';
import { ProjectHal } from './dashboards';

//implementation of service for Project objects.
export class ProjectService extends Service<ProjectHal>{
	//custom backend url.
	urlBackend = "http://127.0.0.3:7890/api/v1/gems";
	
}