import { Hal } from '../../../shared/Hal'

export class PhaseHal extends Hal {

	name : string;
	description: string;
	project : number;	
	projectName : string;	

	constructor(){
		super();
	}
}