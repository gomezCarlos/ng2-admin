import {Component, OnInit} from '@angular/core';
import {PhaseService} from '../../../../../phase/components/phase.service';
import {ProjectService} from '../../../../../projects/components/project.service';
import {PhaseHal} from '../../../../../phase/components/Phase';
import {ProjectHal} from '../../../../../projects/components/Project';
import { QuickTaskService } from '../../../Quicktask.service';
import { QuickTaskHal } from '../../../QuickTask';
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
  providers: [QuickTaskService, PhaseService, ProjectService, IndicatorService,DepartmentService,HTTP_PROVIDERS]  
})

export class Form  implements OnInit{
  listdepartment : PaginatedList<DepartmentHal>;  
  listindicator : PaginatedList<IndicatorHal>;
  listphase : PaginatedList<PhaseHal>;
  listproject : PaginatedList<ProjectHal>;
  error : any;
  param : any;
  taskhal:TaskHal;
  constructor( private service : QuickTaskService, private phases : PhaseService, private projects : ProjectService, private indicators : IndicatorService,private departments : DepartmentService, private router : Router, private route : ActivatedRoute) {
    this.taskhal = new QuickTaskHal();
    
  }  

 save(task : QuickTaskHal){
  task.indicator=Number(task.indicator);
  task.department=Number(task.department);
  task.phase=Number(task.phase);
   this.service.save(task).subscribe(response => {this.taskhal = response; alert("Tarea Creada"); this.router.navigate(['/pages/tasks/view/' + this.taskhal.ids])},error => {this.error = error; alert(error.message)})

 }


 ngOnInit(){

    this.param = this.route.params.subscribe(parameter=>{ let id = parameter['id'];
    if(id){
      this.service.find(id).subscribe(task => this.taskhal = task, error => this.error = error);
    }
    else{
      this.taskhal = new QuickTaskHal();
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



 delete(task : QuickTaskHal){
   this.service.delete(task).subscribe(response => {alert("Tarea Eliminada")},error => {this.error = error; alert(error.message)})

 }
}
