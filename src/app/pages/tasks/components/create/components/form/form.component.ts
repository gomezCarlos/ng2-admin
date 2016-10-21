import {Component, OnInit} from '@angular/core';
import {PhaseService} from '../../../../../phase/components/phase.service';
import {ProjectService} from '../../../../../projects/components/project.service';
import {PhaseHal} from '../../../../../phase/components/Phase';
import {ProjectHal} from '../../../../../projects/components/Project';
import { TaskService } from '../../../task.service';
import { TaskHal } from '../../../Task';
import {IndicatorHal} from '../../../../../indicator/components/Indicator';
import {IndicatorService} from '../../../../../indicator/components/indicator.service';
import {DepartmentHal} from '../../../../../department/components/department';
import {DepartmentService} from '../../../../../department/components/department.service';
import { PaginatedList } from '../../../../../../shared/PaginatedList.component';
import {Router, ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  selector: 'form',
  template: require('./form.html'),
  providers: [TaskService, PhaseService, ProjectService, IndicatorService,DepartmentService,HTTP_PROVIDERS]  
})

export class Form  implements OnInit{
  listdepartment : PaginatedList<DepartmentHal>;  
  listindicator : PaginatedList<IndicatorHal>;
  listphase : PaginatedList<PhaseHal>;
  listproject : PaginatedList<ProjectHal>;
  error : any;
  param : any;
  taskhal:TaskHal;
	constructor( private service : TaskService, private phases : PhaseService, private projects : ProjectService, private indicators : IndicatorService,private departments : DepartmentService, private router : Router, private route : ActivatedRoute) {
		this.taskhal = new TaskHal();
    
  }  

 save(task : TaskHal){
  task.indicator=Number(task.indicator);
  task.department=Number(task.department);
  task.phase=Number(task.phase);
 	this.service.save(task).subscribe(response => {this.taskhal = response; alert("Tarea Creada"); this.router.navigate(['/pages/tasks/view/' + this.taskhal.ids])},error => {this.error = error; alert(error.message)})

 }


 ngOnInit(){

    this.param = this.route.params.subscribe(parameter=>{ let id = parameter['id'];
    if(id){
      this.service.find(id).subscribe(task => this.taskhal = task, error => this.error = error);
          /* Manejo de errores */
         if(error.status==403)error.statusText="Usuario no autorizado.";
        /*END error */
    }
    else{
      this.taskhal = new TaskHal();
    }
    }  
  );
    this.getindicators();
    this.getdepartments();
    this.getphases();
    this.getprojects();
  }
//OBTENER LISTA DE INDICADORES
 getindicators(){
   this.indicators.getPage(0).subscribe(response=>{this.listindicator=response},error => {this.error = error; alert(error.message)})
 }
 //OBTENER LISTA DE DEPARTAMENTOS
 getdepartments(){
   this.departments.getPage(0).subscribe(response=>{this.listdepartment=response},error => {this.error = error; alert(error.message)})
 }
 //OBTENER LISTA DE TAREAS
 getphases(){
   this.phases.getPage(0).subscribe(response=>{this.listphase=response},error => {this.error = error; alert(error.message)})
 }

 getprojects(){
   this.projects.getPage(0).subscribe(response=>{this.listproject=response},error => {this.error = error; alert(error.message)})
 }

 updatePhases(id: number){
    this.projects.getPhases(id).subscribe(response=>{this.listphase=response},error => {this.error = error; alert(error.message)})
 }



 delete(task : TaskHal){
 	this.service.delete(task).subscribe(response => {alert("Tarea Eliminada")},error => {this.error = error; alert(error.message)})

 }
}
