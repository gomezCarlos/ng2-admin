import {Injectable} from '@angular/core';
import {BaThemeConfigProvider} from '../theme';
import { API_URL } from './api_url';
import {UserService} from './user.service';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';

@Injectable()
export class CalendarService {
  urlBackend: string;
  constructor(private _baConfig:BaThemeConfigProvider, private http : Http, private userService: UserService) {
     this.urlBackend=API_URL+"projects/";
  }

  getData() {

    let dashboardColors = this._baConfig.get().colors.dashboard;
    return {
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      selectable: true,
      selectHelper: true,
      editable: true,
      eventLimit: true,
      events: [
        {
          title: 'All Day Event',
          start: '2016-03-01',
          color: dashboardColors.silverTree
        },
        {
          title: 'Long Event',
          start: '2016-03-07',
          end: '2016-08-10',
          color: dashboardColors.blueStone
        },
        {
          title: 'Dinner',
          start: '2016-03-14T20:00:00',
          color: dashboardColors.surfieGreen
        },
        {
          title: 'Birt222hday Party',
          start: '2016-04-01T07:00:00',
          color: dashboardColors.gossip
        },
        {
          title: 'Birth111day Party',
          start: '2016-04-01T07:00:00',
          color: dashboardColors.gossip
        },
        {
          title: 'Bir33thday Party',
          start: '2016-04-01T07:00:00',
          color: dashboardColors.gossip
        },
        {
          title: 'Birt44hday Party',
          start: '2016-04-01T07:00:00',
          color: dashboardColors.gossip
        }
      ]
    };
  }
}
