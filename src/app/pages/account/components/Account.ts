import { Hal } from '../../../shared/Hal'

export class AccountHal extends Hal {

	username : string;
	authorities: string;
	password: string;
	name: string;
	last: string;

	constructor(){
		super();
	}
}