import {Injectable, Component} from '@angular/core';
import {API_URL} from '../../../shared/api_url';
import {Service} from '../../../shared/service.component';
import { JobHal } from './Job';
import {UserService} from '../../../shared/user.service';
import { Http } from '@angular/http';

@Component({
        providers:[UserService]
})
@Injectable()
export class JobService extends Service<JobHal>{
   urlBackend=API_URL+"jobs";
  constructor(http: Http, user: UserService){
	super(http,user);
  }

}
