import { Hal } from '../../../shared/Hal'

export class QuickTaskHal extends Hal {

	name : string;
	description: string;
	phase : number;
	project: any;
	phaseName : string;
	estimatedDateEnd: Date;
    estimatedStartDate: Date; 
    indicator : number;	
    indicatorName : string;
    department : number;  
    departmentName : string;
    value : string;

	constructor(){
		super();
	}
}