import {Injectable, Component} from '@angular/core';
import {API_URL} from '../../../shared/api_url';
import {Service} from '../../../shared/service.component';
import {PositionHal} from './position';
import {UserService} from '../../../shared/user.service';
import { Http } from '@angular/http';


@Component({
        providers:[UserService]
})
@Injectable()
export class PositionService extends Service<PositionHal>{
   urlBackend=API_URL+"charges";
  constructor(http: Http, user: UserService){
	super(http,user);
  }


}
