import {Injectable} from '@angular/core';
import {Component, ViewEncapsulation} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../../theme';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
//import {HTTP_PROVIDERS} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import { UserService } from '../../../../shared/user.service';

@Component({
        providers:[UserService]
})
@Injectable()
export class PieChartService {
  urlBackend: string;

  //ADD Http Service in order to call REST endpoint
  constructor(private _baConfig:BaThemeConfigProvider,  private http : Http, private userService: UserService) {
  this.urlBackend="http://193.1.3.20:7890/api/v1/projects/chart"
  }

  public getError(error: any) { return Observable.throw(error); }

  public getData(r: Response){ 
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
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
          return this.http.get(this.urlBackend,requestOptions)
                        .map(this.getData)
                        .catch(this.getError)
                        ;

  }

  getDataOrgiginal() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
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
    ];
  }
}

export class Chart{
  color: string;
        description: string;
        stats: string;
        icon: string;
}