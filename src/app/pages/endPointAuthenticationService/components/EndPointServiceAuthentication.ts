import { Hal } from '../../../shared/Hal'

export class EndPointServiceAuthenticationHal extends Hal {

	name : string;
	description: string;
	authorities: string;

	constructor(){
		super();
	}
}