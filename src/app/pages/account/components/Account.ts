import { Hal } from '../../../shared/Hal'

export class AccountHal extends Hal {

	username : string;
	authorities: string;
	password: string;
	firstname: string;
	lastname: string;
	department: number;
	charge: number;
	organization: number;
	

	constructor(){
		super();
	}
}