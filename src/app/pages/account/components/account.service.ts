import {Component} from '@angular/core';
import {Service} from '../../../shared/service.component';
import {AccountHal} from './Account';

export class AccountService extends Service<AccountHal>{
	urlBackend = "http://127.0.0.3:7890/api/v1/accounts";

}