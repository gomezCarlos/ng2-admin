import {Injectable} from '@angular/core';
import {Service} from '../../../shared/service.component';
import {AccountHal} from './Account';
import { Http } from '@angular/http';

@Injectable()
export class AccountService extends Service<AccountHal>{
	urlBackend = "http://193.1.3.20:7890/api/v1/accounts";

	constructor( private _http : Http){
	}

}