import {Injectable} from '@angular/core';
import {BaThemeConfigProvider} from '../theme';
import { API_URL } from './api_url';
import {UserService} from './user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';

@Injectable()
export class CalendarService {
  urlBackend: string;
  constructor(private _baConfig:BaThemeConfigProvider, private http : Http, private userService: UserService) {
     this.urlBackend=API_URL+"calendar/";
  }

    getEvents(): Observable<Array<Event>>{
                let params = new URLSearchParams();
                let headers = new Headers({ 'Content-Type': 'application/json', 
                  'Access-Control-Allow-Origin': '*', 
                  'X-Auth-Token': this.userService.getToken().toString() });
    let requestOptions = new RequestOptions({ headers: headers, search: params });
          return this.http.get(this.urlBackend+"events",requestOptions)
                        .map(this.getData)
                        .catch(this.getError)
                        ;

  }

public getError(error: any) { return Observable.throw(error); }

  public getData(r: Response) {

    let dashboardColors = this._baConfig.get().colors.dashboard;
    return r.json();
  }

  getDataOriginal() {

    let dashboardColors = this._baConfig.get().colors.dashboard;
    return {
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      selectable: true,
      selectHelper: true,
      editable: false,
      eventLimit: true,
      events: 'http://193.1.3.20:7890/api/v1/calendar/events'
    };
  }
}
