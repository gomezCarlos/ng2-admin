import { Hal } from '../../../shared/Hal'

export class AccountHal extends Hal {

	username : string;
	authorities: string;
	password: string;
	firstname: string;
	lastname: string;
	deparment: string;
	charge: string;
	organization: string;
	

	constructor(){
		super();
	}
}