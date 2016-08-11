import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import { ProjectService } from '../projects/components/project.service';
import { ProjectHal } from '../projects/components/Project';
import { PaginatedList } from '../../shared/PaginatedList.component';
import {BasicTablesService} from '../projects/components/list/list.service';
import {Router} from '@angular/router'
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
  template: require('./dashboard.html'),
  providers: [ProjectService, BasicTablesService]
})
export class Dashboard implements OnInit {

  projectsTableData:Array<any>;
   error : any;
  projects :PaginatedList<ProjectHal>;

  constructor(private _basicTablesService: BasicTablesService, private service : ProjectService, private router : Router) {
    this.projectsTableData = _basicTablesService.projectsTableData;
  }
  ngOnInit(){
   
  	//this.getPage();
  }
  getProject(project : ProjectHal){
    this.router.navigate(['projects/list']);
  }

  getPage(){
    this.service.getPage(0,5).subscribe(response => {this.projects = response;},error => {this.error = error})
  }

  delete(project : ProjectHal){
    this.service.delete(project).subscribe(response=>{this.getPage},error => {this.getPage();alert("Error al eliminar")})
  }

}
