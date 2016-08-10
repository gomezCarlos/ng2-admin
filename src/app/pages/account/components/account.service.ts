import {Injectable} from '@angular/core';
import {Service} from '../../../shared/service.component';
import {AccountHal} from './Account';
import { Http } from '@angular/http';
import {API_URL} from '../../../shared/api_url';

@Injectable()
export class AccountService extends Service<AccountHal>{
	urlBackend = API_URL+"accounts";
	constructor( private _http : Http){
	}

}
