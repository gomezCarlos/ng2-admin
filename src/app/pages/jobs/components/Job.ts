import { Hal } from '../../../shared/Hal'

export class JobHal extends Hal {

	name : string;
	description: string;
	task : number;	
	taskName : string;
	phase : number;
	project: any;
	phaseName : string;
	value : string;
	

	constructor(){
		super();
	}
}