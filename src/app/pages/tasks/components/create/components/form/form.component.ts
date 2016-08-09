import {Component} from '@angular/core';
//import {ProjectService} from '../../../projectService';
//import {ProjectHal} from '../../../Project';
import {TaskService } from '../../../task.service';
import { TaskHal } from '../../../Task';
import {PaginatedList } from '../../../../../../shared/PaginatedList.component';

@Component({
  selector: 'form',
  template: require('./form.html'),
  providers: [TaskService],
})
//Asi funcionaba estatico MOISES 05-08/2016
//export class Form {
 // object : ProjectHal
 // constructor(service : ProjectService ) {
//  }
export class Form {
  error : any;
  taskhal:TaskHal;
  
	constructor( private service : TaskService) {
		this.taskhal = new TaskHal();
    
  }

  save(task : TaskHal){
 	this.service.save(task).subscribe(response => {this.taskhal = response; alert("Tarea Creada")},error => {this.error = error; alert(error.message)})

 }

 delete(task : TaskHal){
 	this.service.delete(task).subscribe(response => {alert("Tarea Eliminada")},error => {this.error = error; alert(error.message)})

 }
}
