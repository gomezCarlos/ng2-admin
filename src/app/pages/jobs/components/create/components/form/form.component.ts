import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../../../../tasks/components/task.service';
import {TaskHal} from '../../../../../tasks/components/Task';
import { JobService } from '../../../job.service';
import { JobHal } from '../../../Job'
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';
import {Router, ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  selector: 'form',
  template: require('./form.html'),
  providers: [TaskService,JobService,HTTP_PROVIDERS]
 
})
export class Form implements OnInit{
  listtask : PaginatedList<TaskHal>;
  error : any;
  jobhal:JobHal;
	constructor( private service : JobService, private tasks : TaskService, private router : Router, private route : ActivatedRoute) {
		this.jobhal = new JobHal();
    
  }
 
  save(job : JobHal){
 	this.service.save(job).subscribe(response => {this.jobhal = response; alert("trabajo Creado"); this.router.navigate(['/pages/jobs/view/' + this.jobhal.ids])},error => {this.error = error; alert(error.message)})

 }
 ngOnInit(){
    this.gettasks();
  }

 //OBTENER LISTA DE TAREAS
 gettasks(){
   this.tasks.getPage(0).subscribe(response=>{this.listtask=response},error => {this.error = error; alert(error.message)})
 }


 delete(job : JobHal){
 	this.service.delete(job).subscribe(response => {alert("Cuenta Eliminada")},error => {this.error = error; alert(error.message)})

 }
}



