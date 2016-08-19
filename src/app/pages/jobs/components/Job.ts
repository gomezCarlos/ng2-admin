import { Hal } from '../../../shared/Hal'

export class JobHal extends Hal {

	name : string;
	description: string;
	task : number;	
	taskName : string;
	value : number;

	constructor(){
		super();
	}
}