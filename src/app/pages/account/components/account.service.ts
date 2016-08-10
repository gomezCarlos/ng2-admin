import {Injectable} from '@angular/core';
import {Service} from '../../../shared/service.component';
import {AccountHal} from './Account';
import { Http } from '@angular/http';
import {API_URL} from '../../../shared/api_url';

@Injectable()
export class AccountService extends Service<AccountHal>{

	//urlBackend = "http://193.1.3.20:7890/api/v1/accounts";
	urlBackend = API_URL+"accounts";
	constructor( private _http : Http){
	}

}
