import {Injectable, Component} from '@angular/core';
import {API_URL} from '../../../shared/api_url';
import {Service} from '../../../shared/service.component';
import { IndicatorHal } from './Indicator';
import {UserService} from '../../../shared/user.service';
import { Http } from '@angular/http';

@Component({
        providers:[UserService]
})
@Injectable()
export class IndicatorService extends Service<IndicatorHal>{
   urlBackend=API_URL+"indicators";
  constructor(http: Http, user: UserService){
	super(http,user);
  }

}
