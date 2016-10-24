import {Component, ViewEncapsulation, OnInit} from '@angular/core';

import { ProjectService } from '../projects/components/project.service';
import { ProjectHal } from '../projects/components/Project';

import { TaskService } from '../tasks/components/task.service';
import { TaskHal } from '../tasks/components/Task';

import { PaginatedList } from '../../shared/PaginatedList.component';
import {BasicTablesService} from '../projects/components/list/list.service';
import {BasicTablesServicet} from '../tasks/components/list/list.service';
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
  providers: [ProjectService, BasicTablesService,BasicTablesServicet, TaskService]
})
export class Dashboard implements OnInit {

  projectsTableData:Array<any>;
  tasksTableData:Array<any>;
   error : any;
  projects :PaginatedList<ProjectHal>;
  tasks :PaginatedList<TaskHal>;
  

  constructor(private _basicTablesService: BasicTablesService,private _basicTablesServicet: BasicTablesServicet, private service : ProjectService, private taskService: TaskService, private router : Router) {
    this.projectsTableData = _basicTablesService.projectsTableData;
    this.tasksTableData = _basicTablesServicet.taskTableData;
  }
  ngOnInit(){
   
  	//this.getPage();
  }

  getProject(project : ProjectHal){
    this.router.navigate(['projects/list']);
  }
  getTask(task : TaskHal){
    this.router.navigate(['tasks/list']);
  }

  getPage(){
    this.service.getPage(0,5).subscribe(response => {this.projects = response;},error => {this.error = error; 
         /* Manejo de errores */
         if(error.status==403)error.statusText="Usuario no autorizado.";
        /*END error */
        })
    //this.service.getPage(0,5).subscribe(response => {this.tasks = response;},error => {this.error = error;})    
  }

  getTasks(){
    this.taskService.getPage(0,5).subscribe(response => {this.tasks = response;},error => {this.error = error; 
         /* Manejo de errores */
         if(error.status==403)error.statusText="Usuario no autorizado.";
        /*END error */
        })
  }

  delete(project : ProjectHal,task : TaskHal){
    this.service.delete(project).subscribe(response=>{this.getPage},error => {this.getPage();alert("Error al eliminar")})
    //this.service.delete(task).subscribe(response=>{this.getPage},error => {this.getPage();alert("Error al eliminar")})

  }
  
  
//Aqui Moises 22-08-2016  
 
/*
  getPagetask(){
    this.service.getPage(0,5).subscribe(response => {this.tasks = response;},error => {this.error = error; 
         /* Manejo de errores */
         if(error.status==403)error.statusText="Usuario no autorizado.";
        /*END error */
        })
  }
*/
 
  
}
