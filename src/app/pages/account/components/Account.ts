import { Hal } from '../../../shared/Hal'

export class AccountHal extends Hal {

	username : string;
	authorities: string;

	constructor(){
		super();
	}
}