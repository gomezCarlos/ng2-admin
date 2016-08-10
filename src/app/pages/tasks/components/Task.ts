import { Hal } from '../../../shared/Hal'

export class TaskHal extends Hal {

	name : string;
	description: string;
	task : number;	
	taskName : string;	

	constructor(){
		super();
	}
}