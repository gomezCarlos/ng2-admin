import { Hal } from '../../../shared/Hal'

export class ProjectHal extends Hal {
  description : string;
  estimatedDateEnd: Date;
  estimatedStartDate: Date;  
  name:string;
  indicator : number;	
  indicatorName : string;
  value : string;

	constructor(){
		super();
	}
}

