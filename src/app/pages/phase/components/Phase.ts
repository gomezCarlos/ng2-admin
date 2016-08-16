import { Hal } from '../../../shared/Hal'

export class PhaseHal extends Hal {

	name : string;
	description: string;
	project : number;	
	projectName : string;
	value : number;
	estimatedDateEnd: Date;
    estimatedStartDate: Date; 	

	constructor(){
		super();
	}
}