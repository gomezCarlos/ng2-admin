import {HasIds} from '../shared/HasIds';
import {HasLinks} from '../shared/HasLinks';

export class Hal implements HasIds, HasLinks{

	ids : number;
	_links: {self : { href: string}, [propName: string]: any;}

	constructor(){}
	
}