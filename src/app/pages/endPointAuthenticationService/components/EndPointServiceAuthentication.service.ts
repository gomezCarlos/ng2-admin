import {Injectable} from '@angular/core';
import {API_URL} from '../../../shared/api_url';
import {Service} from '../../../shared/service.component';
import {UserService} from '../../../shared/user.service';
import { EndPointServiceAuthenticationHal } from './EndPointServiceAuthentication';
import { Http } from '@angular/http';

@Injectable()
export class EndPointServiceAuthenticationService extends Service<EndPointServiceAuthenticationHal>{
       urlBackend=API_URL+"endPointServiceAuthentications"  
	constructor( private _http : Http, private userService: UserService){
	super(_http);} 

}
