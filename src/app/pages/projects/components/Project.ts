import { Hal } from '../../../shared/Hal'

export class ProjectHal extends Hal {
  description : string;
  estimatedDateEnd: string;
  estimatedStartDate: string;  
  name:string;

	constructor(){
		super();
	}
}

