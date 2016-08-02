import {Component, ViewEncapsulation} from '@angular/core';

import {PopularApp} from './components/popularApp';
import {PieChart} from './components/pieChart';
import {TrafficChart} from './components/trafficChart';
import {UsersMap} from './components/usersMap';
import {LineChart} from './components/lineChart';
import {Feed} from './components/feed';
import {Todo} from './components/todo';
import {Calendar} from './components/calendar';
import {BaCard} from '../../theme/components';

@Component({
  selector: 'dashboard',
  pipes: [],
  directives: [PopularApp, PieChart, TrafficChart, UsersMap, LineChart, Feed, Todo, Calendar, BaCard],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.scss')],
  template: require('./dashboard.html')
})
export class Dashboard {

  constructor() {
  }

}
