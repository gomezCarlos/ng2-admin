import { Hal } from '../../../shared/Hal'

export class ProjectHal extends Hal {
  description : string;
  estimatedDateEnd: Date;
  estimatedStartDate: Date;  
  name:string;
  indicator : number;	
  indicatorName : string;
  department : number;  
  departmentName : string;
  value : string;
  advance : number;
  owner : number;
  username : string;

	constructor(){
		super();
	}
}

