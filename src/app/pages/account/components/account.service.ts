import {Injectable, Component} from '@angular/core';
import {Service} from '../../../shared/service.component';
import {UserService} from '../../../shared/user.service';
import {AccountHal} from './Account';
import { Http } from '@angular/http';
import {API_URL} from '../../../shared/api_url';
@Component({
        providers:[UserService]
})
@Injectable()
export class AccountService extends Service<AccountHal>{
	urlBackend = API_URL+"accounts";
  constructor(http: Http, user: UserService){
	super(http,user);
  }

}
