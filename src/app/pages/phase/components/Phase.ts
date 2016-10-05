import { Hal } from '../../../shared/Hal'

export class PhaseHal extends Hal {

    name : string;
    description: string;
    project : number;
    projectName : string;
    estimatedDateEnd: Date;
    estimatedStartDate: Date;
    indicator : number;
    indicatorName : string;
    department : number;
    departmentName : string;
    value : string;
    advance : number; 
    percentage : number;

	constructor(){
		super();
	}
}
