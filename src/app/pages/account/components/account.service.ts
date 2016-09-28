import {Injectable, Component} from '@angular/core';
import {Service} from '../../../shared/service.component';
import {UserService} from '../../../shared/user.service';
import {AccountHal} from './Account';
import { Http } from '@angular/http';
import {API_URL} from '../../../shared/api_url';
import { Observable } from 'rxjs/Observable';
@Component({
        providers:[UserService]
})
@Injectable()
export class AccountService extends Service<AccountHal>{
	urlBackend = API_URL+"accounts";
  constructor(http: Http, user: UserService){
	super(http,user);
  }

  //change password
	changePassword(object: AccountHal): Observable<AccountHal>{
		return this.getHttp()
		  .put(this.urlBackend+"/changePassword",JSON.stringify(object),this.getOptions())
		    .map(this.getData)
		      .catch(this.getError);
	}

}
