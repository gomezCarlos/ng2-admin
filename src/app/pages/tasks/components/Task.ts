import { Hal } from '../../../shared/Hal'

export class TaskHal extends Hal {

	name : string;
	description: string;
	phase : number;	
	phaseName : string;	

	constructor(){
		super();
	}
}