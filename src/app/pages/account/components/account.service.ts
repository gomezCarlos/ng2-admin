import {Injectable} from '@angular/core';
import {Service} from '../../../shared/service.component';
import {AccountHal} from './Account';
import { Http } from '@angular/http';

@Injectable()
export class AccountService extends Service<AccountHal>{
	urlBackend = "http://localhost:3000/api/v1/accounts";

	constructor( private _http : Http){
	}

}