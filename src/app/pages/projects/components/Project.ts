import { Hal } from '../../../shared/Hal'

export class ProjectHal extends Hal {
  description : string;
  estimated_date_end: string;
  estimated_start_date: string;  
  name:string;

	constructor(){
		super();
	}
}

