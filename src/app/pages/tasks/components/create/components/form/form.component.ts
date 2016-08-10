import {Component, OnInit} from '@angular/core';
import {PhaseService} from '../../../../../phase/components/phase.service';
import {PhaseHal} from '../../../../../phase/components/Phase';
import { TaskService } from '../../../task.service';
import { TaskHal } from '../../../Task';
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';

@Component({
  selector: 'form',
  template: require('./form.html'),
  providers: [TaskService,PhaseService]  
})

export class Form  implements OnInit{
  listphase : PaginatedList<PhaseHal>;
  error : any;
  taskhal:TaskHal;
	constructor( private service : TaskService, private phases : PhaseService) {
		this.taskhal = new TaskHal();
    
  }

  //object : ProjectHal

  //constructor(service : ProjectService ) {
 // }

 save(task : TaskHal){
   task.phase=Number(task.phase);
 	this.service.save(task).subscribe(response => {this.taskhal = response; alert("Tarea Creada")},error => {this.error = error; alert(error.message)})

 }


 ngOnInit(){
    this.getphases();
  }

 //OBTENER LISTA DE PROYECTOS
 getphases(){
   this.phases.getPage(0).subscribe(response=>{this.listphase=response},error => {this.error = error; alert(error.message)})
 }

 delete(task : TaskHal){
 	this.service.delete(task).subscribe(response => {alert("Tarea Eliminada")},error => {this.error = error; alert(error.message)})

 }
}
