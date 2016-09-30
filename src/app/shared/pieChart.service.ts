import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import {UserService} from './user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import { API_URL } from './api_url';

@Injectable()
export class PieChartService {
  urlBackend: string;

  constructor(private http : Http, private userService: UserService){
    this.urlBackend=API_URL+"projects/";
  }

public getError(error: any) { return Observable.throw(error); }

  public getData(r: Response){ 
    let pieColor = "rgba(255,255,255,0.8)";
    if(r != null) return r.json(); else return [
      {
        color: pieColor,
        description: 'New Visits',
        stats: '57,820',
        icon: 'person',
      }, {
        color: pieColor,
        description: 'Purchases',
        stats: '$ 89,745',
        icon: 'money',
      }, {
        color: pieColor,
        description: 'Active Users',
        stats: '178,391',
        icon: 'face',
      }, {
        color: pieColor,
        description: 'Returned',
        stats: '32,592',
        icon: 'refresh',
      }
    ];}

    getCharts(): Observable<Array<Chart>>{
                let params = new URLSearchParams();
                let headers = new Headers({ 'Content-Type': 'application/json', 
                  'Access-Control-Allow-Origin': '*', 
                  'X-Auth-Token': this.userService.getToken().toString() });
    let requestOptions = new RequestOptions({ headers: headers, search: params });
          return this.http.get(this.urlBackend+"chart",requestOptions)
                        .map(this.getData)
                        .catch(this.getError)
                        ;

  }

  getTree(): Observable<Tree>{
                let params = new URLSearchParams();
                let headers = new Headers({ 'Content-Type': 'application/json', 
                  'Access-Control-Allow-Origin': '*', 
                  'X-Auth-Token': this.userService.getToken().toString() });
    let requestOptions = new RequestOptions({ headers: headers, search: params });
    return this.http.get(this.urlBackend+"tree",requestOptions)
                        .map(this.getData)
                        .catch(this.getError)
                        ;
  }

  getDataOrgiginal() {
    let pieColor = "rgba(255,255,255,0.8)";
    return [
      {
        color: pieColor,
        description: 'Project',
        stats: '0,0',
        icon: 'person',
      }, {
        color: pieColor,
        description: 'Project',
        stats: '$ 0,0',
        icon: 'money',
      }, {
        color: pieColor,
        description: 'Project',
        stats: '0,0',
        icon: 'face',
      }, {
        color: pieColor,
        description: 'Project',
        stats: '0,0',
        icon: 'refresh',
      }
    ];
  }
}

export class Chart{
  color: string;
        description: string;
        stats: string;
        icon: string;
}

export class Tree{
  value: string;
  children: Array<Tree>;
}