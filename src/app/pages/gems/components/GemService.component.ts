import { Service } from '../shared/service.component';
import { Gem } from './Gem';

//implementation of service for Gem objects.
export class GemService extends Service<Gem>{
	//custom backend url.
	urlBackend = "http://127.0.0.3:7890/api/v1/gems";
	
}