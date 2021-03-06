import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../../../../tasks/components/task.service';
import {TaskHal} from '../../../../../tasks/components/Task';
import { JobService } from '../../../job.service';
import {PhaseService} from '../../../../../phase/components/phase.service';
import {PhaseHal} from '../../../../../phase/components/Phase';
import {ProjectHal} from '../../../../../projects/components/Project';
import {DepartmentHal} from '../../../../../department/components/department';
import {DepartmentService} from '../../../../../department/components/department.service';
import {ProjectService} from '../../../../../projects/components/project.service';
import {UserService} from '../../../../../../shared/user.service';
import { JobHal } from '../../../Job'
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';
import { Hal } from '../../../../../../shared/Hal';
import {Router, ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  selector: 'form',
  template: require('./form.html'),
  providers: [TaskService, PhaseService, UserService, ProjectService,DepartmentService,JobService,HTTP_PROVIDERS]
 
})
export class Form implements OnInit{
  listdepartment : PaginatedList<DepartmentHal>; 
  listtask : PaginatedList<TaskHal>;
  listphase : PaginatedList<PhaseHal>;
  listproject : PaginatedList<ProjectHal>;
  error : any;
  jobhal:JobHal;
  param : any;
  _user: Hal;
	constructor( private user : UserService, private service : JobService, private departments : DepartmentService, private tasks : TaskService, private phases : PhaseService, private projects : ProjectService, private router : Router, private route : ActivatedRoute) {
		this.jobhal = new JobHal();
    
  }

  save(job : JobHal){
    job.task = Number(job.task);
    job.responsable = Number(this._user.ids);
    if (Number(job.value) >=0 && Number(job.value)<=100)
      this.service.save(job).subscribe(response => {this.jobhal = response; 
        alert("trabajo Creado"); 
        this.router.navigate(['/pages/jobs/view/' + this.jobhal.ids])},
      error => {this.error = error; alert(error.message)});
 }
 ngOnInit(){
   this.param = this.route.params.subscribe(parameter=>{ let id = parameter['id'];
    if(id){
      this.service.find(id).subscribe(job => this.jobhal = job, error => {this.error = error; 
         /* Manejo de errores */
         if(error.status==403)error.statusText="Usuario no autorizado.";
         if(error.status==401)error.statusText="Usuario no autorizado.";
        /*END error */
        });
    }
    else{
      this.jobhal = new JobHal();
    }
    }
    );
   this.getUser();
    this.gettasks();
    this.getphases();
    this.getprojects();
    this.getdepartments();
  }
//OBTENER LISTA DE TAREAS
getUser(){
   this.user.getUser().subscribe(response=>{this._user=response},error => {this.error = error; alert(error.message)})
 }


 gettasks(){
   this.tasks.getPage(0).subscribe(response=>{this.listtask=response},error => {this.error = error; alert(error.message)})
 }
 getphases(){
   this.phases.getPage(0).subscribe(response=>{this.listphase=response},error => {this.error = error; alert(error.message)})
 }

 getprojects(){
   this.projects.getPage(0).subscribe(response=>{this.listproject=response},error => {this.error = error; alert(error.message)})
 }

 updatePhases(id: number){
    this.projects.getPhases(id).subscribe(response=>{this.listphase=response},error => {this.error = error; alert(error.message)})
 }
  updateTasks(id: number){
    this.phases.getTasks(id).subscribe(response=>{this.listtask=response},error => {this.error = error; alert(error.message)})
 }
 getdepartments(){
   this.departments.getPage(0).subscribe(response=>{this.listdepartment=response},error => {this.error = error; alert(error.message)})
 }


 delete(job : JobHal){
 	this.service.delete(job).subscribe(response => {alert("Cuenta Eliminada")},error => {this.error = error; alert(error.message)})

 }
}

